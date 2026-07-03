(function () {
  'use strict';

  function processScoreBadges() {
    var scoreRe = /(?:⭐️|⭐)\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var match = el.innerHTML.match(scoreRe);
      if (!match) return;

      var score = parseFloat(match[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';

      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + match[1] + '</span>'
      );
    });
  }

  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();

      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }

      if (/^(rss|reddit|github|hackernews|hn|telegram|google_news|ossinsight)\s*·/i.test(text)) {
        p.classList.add('source-line');
      }
    });
  }

  function wrapDigestItems() {
    var anchors = Array.prototype.slice.call(document.querySelectorAll('.main-content > a[id^="item-"]'));
    anchors.forEach(function (anchor) {
      if (anchor.closest('.digest-card')) return;

      var card = document.createElement('section');
      card.className = 'digest-card';
      anchor.parentNode.insertBefore(card, anchor);

      var current = anchor;
      while (current) {
        if (current !== anchor && current.nodeType === 1 && current.matches('a[id^="item-"]')) {
          break;
        }
        var next = current.nextSibling;
        card.appendChild(current);
        current = next;
      }
    });
  }

  function setupLanguageToggle() {
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);
    document.body.insertBefore(toggle, document.body.firstChild);

    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      btnEn.classList.toggle('active', lang === 'en');
      btnZh.classList.toggle('active', lang !== 'en');
    }

    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      enSection.classList.toggle('hidden', lang !== 'en');
      zhSection.classList.toggle('hidden', lang === 'en');
    }

    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) showSection(lang);
      else switchArticleLang(lang);
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    updateButtons(currentLang);
    showSection(currentLang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    wrapDigestItems();
    processScoreBadges();
    markSemanticElements();
    setupLanguageToggle();
  });
})();

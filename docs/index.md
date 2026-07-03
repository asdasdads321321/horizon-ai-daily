---
layout: default
title: Home
---

# Horizon

<div id="lang-zh" class="lang-section" markdown="1">

<section class="dashboard-hero">
  <div>
    <p class="dashboard-kicker">AI 日报看板</p>
    <h2>最新 AI 日报</h2>
    <p>聚合每日 AI 新闻、开源动态和重要技术进展。</p>
  </div>
  <a class="dashboard-primary-link" href="{{ '/feed-zh.xml' | relative_url }}">RSS</a>
</section>

{% assign zh_posts = site.posts | where: "lang", "zh" %}
{% assign latest_zh = zh_posts | first %}

<section class="dashboard-grid">
  <article class="dashboard-panel dashboard-panel-main">
    <span class="panel-label">最新日报</span>
    {% if latest_zh %}
      <h3><a href="{{ latest_zh.url | relative_url }}">{{ latest_zh.date | date: "%Y-%m-%d" }}</a></h3>
      <p>{{ latest_zh.title }}</p>
    {% else %}
      <h3>暂无日报</h3>
      <p>等待下一次 Horizon 运行。</p>
    {% endif %}
  </article>

</section>

<section class="digest-section">
  <div class="section-heading">
    <h2>历史日报</h2>
    <a class="rss-icon" href="{{ '/feed-zh.xml' | relative_url }}" aria-label="订阅中文 RSS">
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg>
    </a>
  </div>

  <ol class="digest-list">
    {% for post in zh_posts limit:30 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.date | date: "%Y-%m-%d" }}</a>
        <span>{{ post.title }}</span>
      </li>
    {% else %}
      <li><em>暂无内容</em></li>
    {% endfor %}
  </ol>
</section>

<section class="docs-links">
  <h2>项目文档</h2>
  <a href="{{ '/configuration' | relative_url }}">配置指南</a>
  <a href="{{ '/scrapers' | relative_url }}">信息源抓取器</a>
  <a href="{{ '/scoring' | relative_url }}">评分系统</a>
</section>

</div>

<div id="lang-en" class="lang-section" markdown="1">

<section class="dashboard-hero">
  <div>
    <p class="dashboard-kicker">AI Daily Dashboard</p>
    <h2>Latest AI Digest</h2>
    <p>Daily AI news, open-source updates, and important technology developments.</p>
  </div>
  <a class="dashboard-primary-link" href="{{ '/feed-en.xml' | relative_url }}">RSS</a>
</section>

{% assign en_posts = site.posts | where: "lang", "en" %}
{% assign latest_en = en_posts | first %}

<section class="dashboard-grid">
  <article class="dashboard-panel dashboard-panel-main">
    <span class="panel-label">Latest Digest</span>
    {% if latest_en %}
      <h3><a href="{{ latest_en.url | relative_url }}">{{ latest_en.date | date: "%Y-%m-%d" }}</a></h3>
      <p>{{ latest_en.title }}</p>
    {% else %}
      <h3>No digest yet</h3>
      <p>Waiting for the next Horizon run.</p>
    {% endif %}
  </article>

</section>

<section class="digest-section">
  <div class="section-heading">
    <h2>Daily Digest</h2>
    <a class="rss-icon" href="{{ '/feed-en.xml' | relative_url }}" aria-label="Subscribe English RSS">
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg>
    </a>
  </div>

  <ol class="digest-list">
    {% for post in en_posts limit:30 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.date | date: "%Y-%m-%d" }}</a>
        <span>{{ post.title }}</span>
      </li>
    {% else %}
      <li><em>No posts yet</em></li>
    {% endfor %}
  </ol>
</section>

<section class="docs-links">
  <h2>Documentation</h2>
  <a href="{{ '/configuration' | relative_url }}">Configuration</a>
  <a href="{{ '/scrapers' | relative_url }}">Scrapers</a>
  <a href="{{ '/scoring' | relative_url }}">Scoring</a>
</section>

</div>

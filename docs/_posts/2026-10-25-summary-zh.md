---
layout: default
title: "Horizon Summary: 2026-10-25 (ZH)"
date: 2026-10-25
lang: zh
---

> 从 44 条内容中筛选出 4 条重要资讯。

---

1. [通过 logit 引导与预训练音乐 Transformer 实时即兴演奏](#item-1) ⭐️ 7.0/10
2. [月之暗面发布 3 万亿参数 Kimi K3.1 Pro 模型](#item-2) ⭐️ 7.0/10
3. [Block 推出 Dessa：仅用人类对话训练的全双工语音 AI](#item-3) ⭐️ 7.0/10
4. [AI 发现严重 PHP 漏洞，导致政府网站下线](#item-4) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [通过 logit 引导与预训练音乐 Transformer 实时即兴演奏](https://www.reddit.com/r/MachineLearning/comments/1xe4pex/got_a_pretrained_music_transformer_to_jam_with_me/) ⭐️ 7.0/10

一位开发者构建了一个实时音乐即兴系统，使用预训练的 Anticipatory Music Transformer（music-medium-800k）在不进行任何微调的情况下实时生成第二钢琴伴奏。系统通过跟踪演奏者的调性、和弦和速度，在采样前施加手工调整的 logit 偏置来引导模型输出，并在 Jetson Orin Nano 上运行，代码和演示已在 GitHub 上发布。 这表明推理时的 logit 引导可以将预训练的符号音乐模型转变为无需额外训练的响应式交互伴奏者，降低了实时人机音乐协作的门槛。它还表明此类交互系统可以在 Jetson Orin Nano 等边缘设备上运行，使其更易于现场表演和原型设计。 引导使用手工调整的偏移量：调外音符被抑制，和弦音与紧张音被提升，演奏者手部附近的键被压低以避免冲突，并小幅提升以鼓励延续上一乐句的音程。模型提前约一秒采样，并在和弦变化时重新采样，但开发者指出这些偏移量是凭听觉调整的，并询问是否存在更原则性的方法，如学习到的条件头或引导式技巧。

reddit · r/MachineLearning · /u/GGAllin43 · 10月24日 09:58

**背景**: Anticipatory Music Transformer 由 Thickstun 等人于 2023 年提出，是一种符号音乐模型，采用到达时间编码训练，支持填充和伴奏任务，并在 Hugging Face 上提供预训练模型。Logit 引导是一种无需训练的技术，在采样前修改模型的输出 logit，使生成偏向所需特性，常用于语言模型。Jetson Orin Nano 是 NVIDIA 推出的紧凑型低功耗边缘 AI 设备，能够在本地运行 Transformer 推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2306.08620">[2306.08620] Anticipatory Music Transformer - arXiv.org</a></li>
<li><a href="https://github.com/jthickstun/anticipation">Anticipatory Music Transformer - GitHub Anticipatory Music Transformer: A Controllable Infilling ... Anticipatory Music Transformer Anticipatory Music Transformer - John Thickstun AnticipatoryMusicTransformer A - OpenReview Anticipatory Music Transformer - GitHub</a></li>
<li><a href="https://lycoristechnologies.com/blog/what-is-logit-bias-llm/">What Is Logit Bias? Steering LLM Output Per Token</a></li>

</ul>
</details>

**标签**: `#music-generation`, `#transformer`, `#logit-steering`, `#real-time`, `#human-AI-collaboration`

---

<a id="item-2"></a>
## [月之暗面发布 3 万亿参数 Kimi K3.1 Pro 模型](https://news.google.com/rss/articles/CBMirAFBVV95cUxPNE0yTnZ3bmZweG5GVGx6eGV2bTBOR0x6ZEp5TThmR3prQWlhRzdPaWc2Z1FJWEJmc2J6Y1M0SVBsS2VtMHhWS29sNXI0U1R3XzV3YV8tWTh3OEIzNkpJaW1FVkFEcHEwdWtWVzYzVzg4S2lpdFdpWDM2Rm9KS1ZTN2FTclFkcENXeEJZV25hRnM1QUFnNWdvY1VCYkFpeTFSeUJBekwzemNKVjhm?oc=5) ⭐️ 7.0/10

据 SiliconANGLE 和 Kimi API 平台消息，月之暗面（Moonshot AI）推出了 Kimi K3.1 Pro，这是一款拥有 3 万亿参数和 100 万 token 上下文窗口的旗舰开放权重模型。据 ForkLog 报道，此次发布还限制了该模型的网络攻击能力。 3 万亿参数的开放权重模型标志着前沿大语言模型在规模上的重要里程碑，可能加剧 AI 实验室之间的竞争。其开放权重的可用性可能降低研究人员和开发者构建高级应用的门槛。 该模型被描述为 3T 级开放权重模型，具有 100 万 token 的上下文窗口，月之暗面称其在编程、3D 创作、金融研究和智能体能力方面有显著提升。为限制滥用，月之暗面从训练和强化学习环境中移除了网络相关数据，据称降低了攻击性网络能力，同时保留了通用编程技能。

google_news · SiliconANGLE · 10月24日 00:55

**背景**: 月之暗面是一家中国 AI 公司，以其 Kimi 系列大语言模型闻名。参数是神经网络中学习到的权重；万亿参数模型通常采用混合专家架构来控制推理成本。开放权重模型允许开发者直接下载和运行，不同于仅提供 API 的闭源模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart">Kimi K3.1 Pro - Kimi API Platform</a></li>
<li><a href="https://stratnewsglobal.com/technology/moonshot-kimi-model-hacking-capabilities-ai-cyberattacks/">Moonshot Limits Kimi Model’s Hacking Capabilities</a></li>
<li><a href="https://openrouter.ai/moonshotai/kimi-k3">Kimi K3 - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**标签**: `#LLM`, `#Moonshot AI`, `#model release`, `#AI research`, `#large language models`

---

<a id="item-3"></a>
## [Block 推出 Dessa：仅用人类对话训练的全双工语音 AI](https://news.google.com/rss/articles/CBMi7AFBVV95cUxOSHJjMHFCbjFTR2ZkZXBsYnJKcGxmVkxLSnlqM3FFczBzRDlhZ1pfdUN4dEVDWG44SHJrYkg4Yy0xWG1sUFRGc3BWbElXbHNqSGlLU0YwWU5WVmRJVDZZYXZ6TmxYNHZDams2N0NVZlhmdW9OYkg2YjlTcnA2RDlFc3NDcmlzbXZVUHFHM3RscDdtZnNpVUhaSV8zOFBzZEhIVzVwNGNHb2dDNlJleE5BYm1zcFYwTjBkTFZTcUpXa0w2enlPTFJXUV9HcS1DLWJOSFktc1NZaVZqNWpjaHZqQ2h4WnlBb09ZYVM1NdIB8gFBVV95cUxPYjY5VFVfNm9XX3ZKZG5mZDBVU0phakhuNFNSWFhkYU1leUk1TGNDNENXa3BXa3g1Q05USDBLUU82c3VCeFdmeHFobFFxWlZCZk9HQXItbHY1em1RV1VHRE1pX0l0UHR2UlkxVkF3WVpSN3U1VndnQ2FhSXhiZUlERjdyQUtibkFvSl9XT0V4cEVRTW90XzF2N2xnM3BVNHVFNmxvMjRJSTdmOFgxTEphY2VEMkMzUE9SOEdSVGlNLXFHREpySk0tcnJRa1ptVDUzX0F1UkMxUEhnNXZFbzhCQlA1TDROTTM4aG1ycFJMNktlZw?oc=5) ⭐️ 7.0/10

杰克·多尔西旗下的 Block 发布了 Dessa，这是一个完全基于人类对话音频从零训练的全双工语音到语音模型，未使用任何文本数据或预训练模型。公司发布了实时演示录音和公开演示，并声称 Dessa 可以同时听和说，且能在 MacBook Pro M4 Max 或更高配置上本地运行。 Dessa 的无文本、全双工方法挑战了语音 AI 中主流的 ASR+LLM+TTS 流水线，可能保留语音转文本时丢失的情感细微差别和副语言线索。如果这些声明成立，它可能会影响整个行业构建语音助手和对话代理的方式。 Block 表示 Dessa 仅使用对话音频从零训练，能够同时听和说，并可在 MacBook Pro M4 Max 或更高配置上本地运行。然而，公司尚未发布模型权重或完整技术论文，因此对其能力和效率的独立验证仍然有限。

google_news · The Economic Times · 10月24日 06:58

**背景**: 目前大多数语音 AI 系统采用流水线：自动语音识别（ASR）将语音转为文本，大语言模型处理文本，文本转语音（TTS）生成回复。这会丢弃语调、情感和停顿等非语言信息。全双工模型旨在同时听和说，更像人类对话，而无文本训练背离了利用大型文本语料的常见做法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://block.xyz/dessa">Dessa - the Conversation Model trained only on speech</a></li>
<li><a href="https://www.unite.ai/block-unveils-dessa-a-full-duplex-speech-model-trained-on-conversation/">Block Unveils Dessa, a Full-Duplex Speech Model Trained on ...</a></li>
<li><a href="https://kingy.ai/blog/dessa-ai-block-voice-model/">Dessa AI: Block’s Voice Model Trained Without Text</a></li>

</ul>
</details>

**标签**: `#AI`, `#voice model`, `#Block`, `#Jack Dorsey`, `#product launch`

---

<a id="item-4"></a>
## [AI 发现严重 PHP 漏洞，导致政府网站下线](https://news.google.com/rss/articles/CBMimwFBVV95cUxPcG1xTl9CU3hCbTNZbUx3R2pkenFGbHd1YjBDSUdTOVp5cEhnVE9LMHlOaVNtS093YTM2WjhtYXFkQW9HNUlZNXN6RVRIUExaZ3ZwZlYwdFR1WU5LUi1LUDNwNm95ekthalMzLVlFellPcEQ3VGpQTTFSa19URkRtQUt5akozQldPSmZlTmJIS0d3Q1ZxdjJWbjlyMA?oc=5) ⭐️ 7.0/10

据报道，一个 AI 模型发现了一个严重的 PHP 漏洞（CVE-2026-109618），促使包括美国国家安全局在内的政府安全机构建议组织立即更新或将其网站下线。该漏洞被描述为一个存在了十年的问题，导致全球政府网站作为预防措施下线，同时应用补丁。 这一事件突显了 AI 在自动化漏洞发现中日益增长的作用，以及它有可能在像 PHP 这样广泛使用的软件中揭露严重的长期缺陷，而 PHP 支撑着网络的大部分。它还强调了组织及时维护补丁实践的紧迫性，因为 AI 驱动的工具可以加速漏洞的发现和利用。 该漏洞被追踪为 CVE-2026-109618，据称是 PHP 中一个存在了十年的缺陷，由 AI 辅助研究揭露，美国国家安全局建议立即打补丁或在应用更新前将系统下线。该漏洞的具体技术性质以及所使用的 AI 模型在现有报告中尚未详细说明。

google_news · Startup Fortune · 10月24日 09:07

**背景**: PHP 是一种广泛使用的开源脚本语言，为许多网站和 Web 应用程序提供支持，包括政府门户网站。自动化漏洞查找工具越来越多地由 AI 驱动，它们分析代码以大规模检测安全弱点，当在像 PHP 这样无处不在的语言中发现严重缺陷时，可能影响数百万个网站，并促使网络安全机构采取协调的应急响应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ft.com/content/d438af1e-a48c-4aeb-8c84-00cdb5e741e3?syn-25a6b1a6=1">Websites taken offline in race to patch PHP security flaw</a></li>
<li><a href="https://dataconomy.com/2026/10/22/php-ai-flaws-government-sites-offline/">Government Sites Go Offline Worldwide After AI Uncovers PHP ...</a></li>
<li><a href="https://agentic-affairs.com/php2shell-governments-offline/">PHP2Shell: AI-Assisted Research That Shut Government Sites</a></li>

</ul>
</details>

**标签**: `#AI`, `#security`, `#PHP`, `#vulnerability`, `#automated-bug-finding`

---
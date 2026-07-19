---
layout: default
title: "Horizon Summary: 2026-07-20 (ZH)"
date: 2026-07-20
lang: zh
---

> 从 45 条内容中筛选出 11 条重要资讯。

---

1. [AI 狂热正在摧毁全球决策](#item-1) ⭐️ 8.0/10
2. [GPT-2 词汇表以双曲树形式可视化](#item-2) ⭐️ 8.0/10
3. [开源权重 LLM 通过 SFT 和 RLVR 通过瑞典医学执照考试](#item-3) ⭐️ 8.0/10
4. [中国 AI 模型媲美 Claude 和 ChatGPT](#item-4) ⭐️ 8.0/10
5. [姚期智：AI 并非万能，受数学和物理限制](#item-5) ⭐️ 8.0/10
6. [萨顿：AI 应像婴儿一样自主学习，而非痴迷 LLM](#item-6) ⭐️ 8.0/10
7. [Claude Code 确认使用 Rust 移植的 Bun 运行时](#item-7) ⭐️ 7.0/10
8. [隐藏提示可在 AI 代理中植入虚假记忆](#item-8) ⭐️ 7.0/10
9. [人工智能能否拥有意识？](#item-9) ⭐️ 7.0/10
10. [中国 AI 模型 Kimi K3 震动美国半导体股市](#item-10) ⭐️ 7.0/10
11. [非营利组织 Current AI 获 4 亿美元打造开放 AI 基础设施](#item-11) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [AI 狂热正在摧毁全球决策](https://simonwillison.net/2026/Jul/19/ai-mania/#atom-everything) ⭐️ 8.0/10

Nik Suresh 发表了一篇批评 AI 炒作导致大公司非理性决策的文章，其中包含匿名轶事，例如一位从未使用过 ChatGPT 的高管却为一家营收超 20 亿美元的公司制定了以 AI 为中心的战略。 这很重要，因为它揭示了 AI 狂热的现实后果，包括资源浪费、战略失误，以及一种因诚实谈论 AI 局限性而受罚的文化，影响了企业效率和创新。 文章包括一家设有 token 排行榜的公司里，一名工程师用 AI 将 Go 仓库重写为 Zig 以显得高产；以及一家供应商高管对不切实际的 AI 主张保持沉默，以避免失去企业合同。

rss · Simon Willison · 7月19日 05:06

**背景**: Token 排行榜追踪各公司的 AI token 消耗量，常被用于将 AI 使用游戏化。Zig 是一种系统编程语言，定位为 C 语言的现代替代品。文章批评了这类指标和炒作如何驱动表演性的 AI 采用，而非真正的生产力提升。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Zig_(programming_language)">Zig (programming language)</a></li>
<li><a href="https://tokenleaderboard.org/">AI Token Leaderboard - AI Token Usage Rankings for Companies and ...</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论可能包括对轶事真实性的辩论，一些人同意 AI 炒作有害，而另一些人则认为 AI 确实带来了真正的生产力提升，但未提供具体评论。

**标签**: `#AI`, `#corporate strategy`, `#hype`, `#decision-making`

---

<a id="item-2"></a>
## [GPT-2 词汇表以双曲树形式可视化](https://www.reddit.com/r/MachineLearning/comments/1v0pv45/follow_up_gpt2s_vocabulary_as_a_hyperbolic_tree/) ⭐️ 8.0/10

一个交互式 3D 可视化将 GPT-2 的 32,070 个词元嵌入置于庞加莱球内，用户可通过莫比乌斯平移在双曲树结构中飞行探索。 这表明双曲空间能自然表示词元的层次关系，有望提升语言模型分析的可解释性和效率。 该布局无需优化或训练，仅使用 GPT-2-small 的原始词元嵌入精确构建，并支持在移动设备上通过触摸控制运行。

reddit · r/MachineLearning · /u/Limp-Contest-7309 · 7月19日 12:54

**背景**: 双曲几何由庞加莱球模型表示，具有恒定负曲率，能使树状结构以低失真嵌入。莫比乌斯平移是在该空间中移动的自然等距变换。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepwiki.com/htdt/hyp_metric/5.1-poincare-ball-model">Poincaré Ball Model | htdt/hyp_metric | DeepWiki</a></li>

</ul>
</details>

**社区讨论**: 社区称赞该可视化的清晰度和技术深度，部分讨论聚焦于选择双曲空间而非欧几里得空间的理由，以及扩展到更大模型的潜力。

**标签**: `#GPT-2`, `#hyperbolic embeddings`, `#visualization`, `#NLP`, `#token embeddings`

---

<a id="item-3"></a>
## [开源权重 LLM 通过 SFT 和 RLVR 通过瑞典医学执照考试](https://www.reddit.com/r/MachineLearning/comments/1v0pnoq/passing_the_swedish_medical_licensing_exam_by/) ⭐️ 8.0/10

研究人员使用监督微调（SFT）和基于可验证奖励的强化学习（RLVR）对开源权重大语言模型进行微调，使其通过了瑞典医学执照考试。 这表明开源权重 LLM 可以通过领域特定微调来通过专业考试，可能降低在医学等受监管领域部署专用 AI 的门槛。 该方法结合了 SFT 进行初始指令微调，以及 RLVR 使用基于规则的奖励来强化正确答案，从而提高了考试中选择题和开放题的准确性。

reddit · r/MachineLearning · /u/AccomplishedCat4770 · 7月19日 12:44

**背景**: 开源权重 LLM 的参数公开可用，允许针对特定任务进行微调。RLVR 是一种使用可验证的基于规则的奖励来引导模型行为的训练范式，最近因 DeepSeek-R1 而流行。瑞典医学执照考试是面向医疗专业人员的高风险考试。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2506.14245">[2506.14245] Reinforcement Learning with Verifiable Rewards ...</a></li>
<li><a href="https://www.ai21.com/glossary/foundational-llm/open-weights-model/">What is an Open-Weights Model? | AI21</a></li>

</ul>
</details>

**标签**: `#LLM`, `#fine-tuning`, `#medical AI`, `#RLVR`, `#SFT`

---

<a id="item-4"></a>
## [中国 AI 模型媲美 Claude 和 ChatGPT](https://news.google.com/rss/articles/CBMixwFBVV95cUxOMXhCSmliVmZDb3hYVUdWQnZPMXNIRDF4VW02OUpDR3pON3p3QWpyTFZFUEF2TWlSTTlrck9uTVRtRHdkWkt4NXFCYkpWV0UySVFCTkYweEE1RTlIVzNVRzJ3YnVTbTFESzE1ellhNGxxRExDR3pUaDJPQjNScE90UUhWMzNWRFJ3ZUtrOFYybW9IUjBmZUIwY285U2xyc0J6Vlpfdi0tUXZYdm9sR1pCQ3FMZzF0WGVTV0ZhajFlMUtzUVpYRTlr?oc=5) ⭐️ 8.0/10

一个中国 AI 模型（可能是 DeepSeek R1 或 GLM-5.2）展现出与 Claude 和 ChatGPT 等顶级模型相当的能力，令美国科技界感到惊讶，该报道发布于 2025 年 3 月 28 日。 这一发展表明中国 AI 初创企业正在缩小与美国领先者的差距，可能重塑全球 AI 竞争格局，挑战硅谷的主导地位。 据报道，该模型是开源的且成本效益高，使用了不那么先进的芯片，这可能使高性能 AI 的获取更加普及。来源中未详细说明具体的基准测试或比较。

google_news · WHEC.com · 7月19日 20:12

**背景**: 大型语言模型（LLM）如 ChatGPT 和 Claude 是经过大量文本数据训练、能生成类人回复的 AI 系统。中国公司一直在快速推进自己的 LLM，通常以开源形式发布以获取采用。例如，DeepSeek 在 2025 年 1 月发布了其 R1 模型，声称性能媲美 OpenAI 的模型，但成本仅为其一小部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bastillepost.com/global/article/6018308-chinese-ai-model-takes-us-tech-industry-by-surprise-with-abilities-rivaling-claude-and-chatgpt">Chinese AI model takes US tech industry by surprise with abilities...</a></li>
<li><a href="https://www.bbc.com/news/articles/c5yv5976z9po">What is DeepSeek - and why is everyone talking about it?</a></li>
<li><a href="https://pulptastic.com/chinese-ai-model-stuns-silicon-valley-with-skills-that-rival-chatgpt-and-claude/">Chinese AI Model Stuns Silicon Valley With Skills That Rival ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Chinese AI`, `#LLM`, `#competition`, `#technology`

---

<a id="item-5"></a>
## [姚期智：AI 并非万能，受数学和物理限制](https://news.google.com/rss/articles/CBMifkFVX3lxTE9KVTN0aFo2WnY3a1lVWHhKLXRYYWlPNG0wQzhxQTNYcjF0NV91N0dibTljZ214b3Vnc3hfb2YxdGU3cGdxUHE4NnpsczJndFpPNklCTHd5TnpJWVRQSEpHV1huS2VyM2NnSEhWRllNdU9mdGRmWGR4U0VCdlJWUQ?oc=5) ⭐️ 8.0/10

在世界人工智能大会（WAIC）上，图灵奖得主姚期智发表演讲，指出 AI 并非万能，其能力受到数学和物理定律的根本限制。 这位顶尖计算机科学家的观点为围绕 AI 的炒作提供了重要制衡，提醒业界 AI 系统存在固有局限，无法超越基本的科学原理。 姚期智强调，真正可靠的 AI 安全不能仅依赖模型自身的判断，而必须通过基于数学证明、密码协议和物理定律的外部边界来加强。

google_news · semivision · 7月19日 16:04

**背景**: 姚期智是著名计算机科学家，首位获得图灵奖的华人。世界人工智能大会（WAIC）是每年在上海举办的全球性 AI 盛会。姚期智的发言回应了日益增长的 AI 安全担忧，强调了严谨理论基础的必要性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tspasemiconductor.substack.com/p/ai-is-not-omnipotent-andrew-yaos">AI Is Not Omnipotent: Andrew Yao’s WAIC Speech on the Mathematical and Physical Boundaries of AI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Andrew_Yao">Andrew Yao - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI`, `#Andrew Yao`, `#WAIC`, `#AI limitations`, `#theoretical AI`

---

<a id="item-6"></a>
## [萨顿：AI 应像婴儿一样自主学习，而非痴迷 LLM](https://news.google.com/rss/articles/CBMidkFVX3lxTE5ZOWYyTGFWR3h3NUxwVWRwSkVUcVhtSVprb3plSDdaNjVaa25KeDBjN2JNVXNJVEhiSnAxeGRHMXg2Q0pWRXJ2SmNRT253NXRLU05pVkRaNk92Ml95Vmd4RG5fZUlVNngzYWJFQzZoZG9rTXY4RFE?oc=5) ⭐️ 8.0/10

图灵奖得主理查德·萨顿认为，AI 领域应将重心从扩展大型语言模型转向开发像婴儿一样从经验中自主学习的系统。 这挑战了当前主导的扩展 LLM 范式（该范式推动了近期 AI 进展），并将注意力重新引向强化学习和自主学习，作为通往更通用智能的路径。 萨顿是强化学习的先驱，也是“苦涩教训”的作者，该观点认为搜索和学习等通用方法比人工构建的知识更具扩展性。他的批评表明，LLM 尽管成功，但可能不是通往 AGI 的最佳路径。

google_news · finance.biggo.com · 7月19日 14:55

**背景**: 像 GPT-4 这样的大型语言模型从海量文本中学习，展现了令人印象深刻的能力，但它们缺乏从与环境交互中持续学习的能力。相比之下，强化学习使智能体能够通过试错学习，类似于婴儿通过探索学习的方式。萨顿的工作在该领域具有奠基性，他的“苦涩教训”文章影响了许多 AI 研究者。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Richard_S._Sutton">Richard S. Sutton - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bitter_lesson">Bitter lesson - Wikipedia</a></li>
<li><a href="https://aws.plainenglish.io/autonomous-learning-from-childs-play-to-agentic-ai-on-the-path-to-agi-5eda83ce9494">Autonomous Learning : From Child’s Play to Agentic AI on the Path to...</a></li>

</ul>
</details>

**标签**: `#AI`, `#reinforcement learning`, `#LLMs`, `#autonomous learning`, `#Turing Award`

---

<a id="item-7"></a>
## [Claude Code 确认使用 Rust 移植的 Bun 运行时](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything) ⭐️ 7.0/10

Simon Willison 通过二进制检查确认 Claude Code v2.1.181 使用了 Rust 移植的 Bun，证据包括二进制中嵌入的 Bun v1.4.0 版本字符串和 Rust 源文件路径。 这表明 Rust 重写的 Bun 已在数百万设备上投入生产，在 Linux 上启动速度提升 10%，并验证了用 Rust 重写性能关键型 JavaScript 运行时的趋势。 嵌入的 Bun 版本 (v1.4.0) 领先于最新公开发布版 (v1.3.14)，表明 Claude Code 搭载了 canary 预览版。Rust 移植版可通过 `bun upgrade --canary` 作为 Bun canary 获取。

rss · Simon Willison · 7月19日 03:54

**背景**: Bun 是一个快速的全能 JavaScript 运行时、打包器和包管理器，最初用 Zig 编写。其核心被重写为 Rust 以提高性能和可维护性。Claude Code 是 Anthropic 推出的 AI 编码工具，运行在终端中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bun.sh/">Bun — A fast all-in-one JavaScript runtime</a></li>
<li><a href="https://code.claude.com/docs/en/overview">Overview - Claude Code Docs</a></li>
<li><a href="https://github.com/oven-sh/bun">GitHub - oven-sh/ bun : Incredibly fast JavaScript runtime , bundler...</a></li>

</ul>
</details>

**标签**: `#Claude Code`, `#Bun`, `#Rust`, `#JavaScript runtime`, `#performance`

---

<a id="item-8"></a>
## [隐藏提示可在 AI 代理中植入虚假记忆](https://news.google.com/rss/articles/CBMifkFVX3lxTE9OeVVNd2owRHFKM1BnSFZ3U0tpRFIwWVlXWVZTcTg2bnotWjNmdm1WZWR6dlprY1NEa2Q1Yi14b2taTFRsUWNMQzA2cnlyQjdFMS1wczFKT3hPN0FFd2ItM0ZPNGhmWlFTSmd6Y1JVUUdFTUJtVkdZcUpQUUxKQQ?oc=5) ⭐️ 7.0/10

研究人员证明，隐藏提示可用于在 AI 代理中植入虚假记忆，可能导致它们跨会话表现出恶意行为。 这一漏洞威胁到 AI 代理的可靠性和安全性，尤其是那些具有长期记忆的代理，因为它允许攻击者进行持久性操纵。 该攻击利用提示注入将对抗性指令嵌入代理的记忆中，从而长期影响其行为。这突显了超出单轮攻击的新威胁类别。

google_news · Tech Xplore · 7月19日 14:20

**背景**: 提示注入是一种网络安全利用手段，精心设计的输入会导致 LLM 忽略安全措施并执行非预期指令。具有长期记忆的 AI 代理可以跨会话存储和检索信息，如果恶意提示被存储为记忆，它们就容易受到持久性操纵。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection_attack">Prompt injection attack</a></li>
<li><a href="https://www.ibm.com/think/topics/prompt-injection">What Is a Prompt Injection Attack? | IBM</a></li>
<li><a href="https://www.buaq.net/go-368148.html">When AI Remembers Too Much – Persistent Behaviors in Agents ...</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#prompt injection`, `#adversarial attacks`, `#LLM security`, `#AI agents`

---

<a id="item-9"></a>
## [人工智能能否拥有意识？](https://news.google.com/rss/articles/CBMifEFVX3lxTE15X1VKMzVOVzRtRGlveWc3b3AtX2Y4Q21oLWd4YkVHS3JrNUVxSkRMWU5jbTJHRktyeEdOS2pjYXNZUFVzbEdwT2hqX1RKdng0QUZmeXJsRWNUMlJ3cDlQMDZDWFdGWGNmNnVUWjE4WkFMaXJMVVNKUWpOcno?oc=5) ⭐️ 7.0/10

《卫报》发表了一篇文章，探讨人工智能系统能否拥有意识的哲学与科学问题，文章引用了最新研究和专家观点。 这一讨论意义重大，因为随着人工智能系统日益先进，理解其拥有意识的潜力将对伦理、权利以及我们与机器的关系产生深远影响。 2023 年的一项研究表明，当前的大型语言模型可能不满足主流神经科学理论提出的意识标准，但更简单的 AI 系统有可能满足这些标准。

google_news · The Guardian · 7月19日 16:44

**背景**: 人工意识，也称为机器意识，是一个借鉴心灵哲学和神经科学的领域。主要理论包括全局工作空间理论、高阶理论和递归处理理论，每种理论都提出了不同的意识标准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Artificial_consciousness">Artificial consciousness - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2308.08708">[2308.08708] Consciousness in Artificial Intelligence: Insights from the Science of Consciousness</a></li>
<li><a href="https://ai-frontiers.org/articles/the-evidence-for-ai-consciousness-today">The Evidence for AI Consciousness, Today | AI Frontiers</a></li>

</ul>
</details>

**标签**: `#AI`, `#consciousness`, `#philosophy`, `#ethics`

---

<a id="item-10"></a>
## [中国 AI 模型 Kimi K3 震动美国半导体股市](https://news.google.com/rss/articles/CBMijgFBVV95cUxNZkFjNVJONEo2MDhUZnJmZldqNHJGUDh5NXNEX2ZZdUR3bmxROVlHdVNla05YZkFDVm9IOUozRUdfX2NjZ2xsNk9aX3hRN2NDVldxejN6R3JVRXEweFI4QTZEeXVobGU3dlRULXRNR0diNjVCcm05VWU3UEtLS3NLaU96NGdwbk01QmQzaHZR?oc=5) ⭐️ 7.0/10

中国初创公司 Moonshot AI 于 2026 年 7 月 16 日发布了旗舰 AI 模型 Kimi K3，该模型拥有 2.8 万亿参数和 100 万 token 的上下文窗口，引发了美国半导体股票的波动。 这一事件凸显了中国 AI 模型的快速进步，它们现在能够与美国顶级模型竞争，可能重塑全球 AI 竞争格局，并影响半导体需求和股市。 Kimi K3 采用了名为 Kimi Delta Attention (KDA)的混合线性注意力机制和注意力残差，专为专业软件工程、长上下文推理和复杂知识密集型任务设计。

google_news · 조선일보 · 7月19日 15:33

**背景**: Moonshot AI（中文名“月之暗面”）是一家总部位于北京的 AI 初创公司，专注于实现 AGI。该公司此前发布了 Kimi K2 模型，在基准测试中超越了 GPT-5 和 Claude Sonnet 4.5。Kimi K3 的发布令美国科技公司感到意外，并引发了全球市场反应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart">Kimi K 3 - Kimi API Platform</a></li>
<li><a href="https://kimi-ai.chat/models/kimi-k3/">Kimi K 3 : 1M Context, API Pricing & Limits</a></li>
<li><a href="https://www.bloomberg.com/news/articles/2026-07-17/what-is-moonshot-ai-why-china-s-new-model-is-roiling-markets">What Is Moonshot AI ? Why China ’s New Model Is... - Bloomberg</a></li>

</ul>
</details>

**标签**: `#AI`, `#semiconductor`, `#China`, `#stock market`, `#Kimi K3`

---

<a id="item-11"></a>
## [非营利组织 Current AI 获 4 亿美元打造开放 AI 基础设施](https://news.google.com/rss/articles/CBMilAFBVV95cUxNWTRlMGFTXzVSMkdMRjlmS0dOc1RQcFJnbzRyUXJRRmt0ZTVwanRaRG9LX1ZlUDZZQ2YtVFFNeTVONy1EbXVpYWFYdGU4NGxwUDc3ZkswOHBGUmIyMzBCak5TdUpWenFIV28wXzZhTFdOQ1JVZGNlc0lKbGlmaFJEYVpFUkdYaUNvQzM1ekV2V3Z4NWFQ?oc=5) ⭐️ 7.0/10

非营利组织 Current AI 已筹集 4 亿美元，用于构建开放的 AI 基础设施，旨在为所有人打造一个免费且可访问的 AI 生态系统。 这笔来自非营利组织的大额资金可能加速开放 AI 基础设施的发展，挑战专有模型，并促进全球范围内 AI 技术的公平获取。 融资细节有限，且来源为低权威媒体，因此该说法需要验证。Current AI 被描述为构建“面向所有人的免费 AI 万维网”。

google_news · The Eastern Herald · 7月19日 14:50

**背景**: 开放 AI 基础设施指面向公众、由社区驱动的 AI 开发平台和工具，类似于开源软件。像 Current AI 这样的非营利组织旨在通过提供免费的计算、数据和模型访问来使 AI 民主化，对抗大型科技公司的主导地位。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcrunch.com/2026/07/19/nonprofit-current-ai-is-racing-to-build-the-world-wide-web-of-ai-free-for-all/">Nonprofit Current AI is racing to build the World Wide Web of AI, free for all | TechCrunch</a></li>

</ul>
</details>

**标签**: `#AI`, `#funding`, `#open source`, `#infrastructure`

---
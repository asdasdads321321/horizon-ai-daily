---
layout: default
title: "Horizon Summary: 2026-09-30 (ZH)"
date: 2026-09-30
lang: zh
---

> 从 56 条内容中筛选出 14 条重要资讯。

---

1. [OpenAI 发布 GPT-6.1 Sol，以五分之一价格提供接近 Astra 的智能](#item-1) ⭐️ 9.0/10
2. [OpenAI DevDay 2026 发布 GPT-6 Astra 及 20 多项更新](#item-2) ⭐️ 9.0/10
3. [AMD 以 82 亿美元收购李飞飞的 World Labs](#item-3) ⭐️ 9.0/10
4. [Anthropic：新 AI 模型在二进制漏洞利用上跨越关键门槛](#item-4) ⭐️ 8.0/10
5. [免费开源书籍教你从芯片到智能体的机器学习性能工程](#item-5) ⭐️ 8.0/10
6. [NVIDIA Kumo Tabular 为表格预测树立新的精度-效率前沿](#item-6) ⭐️ 7.0/10
7. [面向 MCP 智能体的来源感知验证方案被提出](#item-7) ⭐️ 7.0/10
8. [CoWindow 与 MassAlloc 注意力机制削减长上下文计算量](#item-8) ⭐️ 7.0/10
9. [微控制器现已能运行扩散模型和 2.89 亿参数大语言模型](#item-9) ⭐️ 7.0/10
10. [Anthropic 2025 年亏损近 420 亿美元，筹备可能高达 2 万亿美元的 IPO](#item-10) ⭐️ 7.0/10
11. [Naver 与 Daum 将屏蔽外国 AI 爬虫以保护韩语数据](#item-11) ⭐️ 7.0/10
12. [Liquid AI 发布 d1：零输出 token 的校准概率决策模型](#item-12) ⭐️ 7.0/10
13. [万事达卡：AI 将发动网络攻击的成本降至 3 美元以下](#item-13) ⭐️ 7.0/10
14. [195 项试验荟萃分析勾勒 AI 在肿瘤学中的应用现状](#item-14) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [OpenAI 发布 GPT-6.1 Sol，以五分之一价格提供接近 Astra 的智能](https://openai.com/index/introducing-gpt-6-1-sol) ⭐️ 9.0/10

OpenAI 发布了 GPT-6.1 Sol，这是一款定位略低于其旗舰模型 GPT-6 Astra 的新模型，在编程、计算机操作和专业工作方面提供接近 Astra 的智能水平。该模型已通过 OpenAI API 以 gpt-6.1-sol 的名称开放使用，标准价格为每百万输入 token 2 美元、每百万缓存输入 token 0.10 美元、每百万输出 token 10 美元，仅为 Astra 标准 API 价格的五分之一，但目前尚未在 ChatGPT 中上线。 通过以 Astra 五分之一的 token 成本提供接近前沿的能力，OpenAI 大幅降低了高端 AI 在编程助手和智能体工作流中的使用门槛，加剧了整个模型市场的性价比竞争。这可能加速 AI 智能体在软件工程和专业任务中的普及，并迫使 Anthropic、Google 等竞争对手在定价上作出回应。 GPT-6.1 Sol 是 GPT-6 Sol 的升级版，在 GPT-6 系列中定位低于旗舰 GPT-6 Astra；OpenAI 会对 1024 个 token 及以上的提示自动进行缓存，并且无论缓存的提示前缀之后是否被再次读取，每次缓存写入都会计费。在 Devin 的排行榜上，低 effort 设置下它以每任务 0.21 美元的成本取得 58.1%的得分，高于同设置下 GPT-6 Sol 的 50.5%，是每任务成本低于 0.30 美元的模型中得分最高的。

rss · OpenAI News · 9月29日 10:00

**背景**: OpenAI 的 GPT-6 系列分为多个层级：顶级的旗舰模型 GPT-6 Astra、中端的 GPT-6 Sol，以及如今定位略低于 Astra 的升级版 GPT-6.1 Sol。大语言模型的 API 按 token 计费，输入 token 通常比输出 token 便宜，而缓存输入 token 因模型可复用此前处理过的上下文而享有折扣。“计算机操作”（computer use）指模型能够直接操作软件界面，这一能力正越来越多地应用于 Devin 等编程智能体中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-6-1-sol/">Introducing GPT - 6 . 1 Sol | OpenAI</a></li>
<li><a href="https://openrouter.ai/openai/gpt-6.1-sol">GPT - 6 . 1 Sol - API Pricing & Providers | OpenRouter</a></li>
<li><a href="https://devin.ai/blog/gpt-6-1-sol">GPT - 6 . 1 Sol is now available in Devin | Devin</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#GPT-6.1`, `#AI models`, `#API pricing`, `#coding assistants`

---

<a id="item-2"></a>
## [OpenAI DevDay 2026 发布 GPT-6 Astra 及 20 多项更新](https://openai.com/index/devday-2026-recap) ⭐️ 9.0/10

2026 年 9 月 29 日在旧金山举行的 DevDay 2026 上，OpenAI 发布了 20 多项更新，其中以 GPT-6 Astra 为核心，同时涵盖 ChatGPT 和 Codex 的新功能、API 更新、安全工具以及面向开发者的新资源。GPT-6 Astra 已于 2026 年 9 月 4 日正式面向公众开放，此前在 9 月 3 日先向获批用户发布。 这是 OpenAI 一年一度最重要的开发者大会，从新旗舰模型到编程智能体再到 API 定价，这些发布直接影响开发者和 AI/ML 从业者如何在 OpenAI 平台上构建产品。GPT-6 系列以及 Codex 能力的扩展，可能重塑软件工程、企业 AI 以及 Azure 和 Amazon Bedrock 等云市场中的工作流程。 GPT-6 Astra 以 gpt-6-astra 的名称在 OpenAI API 中提供，并可通过 Microsoft Azure 和 Amazon Bedrock 使用，标准定价为每百万输入 token 10 美元、每百万输出 token 50 美元，缓存读写另有单独费率。GPT-6 系列还包括 GPT-6 Sol 和 GPT-6 Luna，二者于 2026 年 9 月 22 日发布。

rss · OpenAI News · 9月29日 10:00

**背景**: OpenAI DevDay 是该公司一年一度的旗舰开发者大会，包含技术演讲、动手演示、工作坊以及与 OpenAI 团队直接交流的机会。GPT-6 是 OpenAI 最新一代大语言模型系列，接替此前几代产品；Codex 则是其 AI 驱动的编程智能体套件，用于自动化软件工程任务。据现场报道，2026 年的大会还推出了插件扩展功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/gpt-6-astra/">GPT - 6 Astra : A new generation of intelligence | OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_GPT-6_Astra">OpenAI GPT-6 Astra</a></li>
<li><a href="https://devday.openai.com/">OpenAI DevDay 2026</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#GPT-6`, `#DevDay`, `#AI`, `#API`

---

<a id="item-3"></a>
## [AMD 以 82 亿美元收购李飞飞的 World Labs](https://news.google.com/rss/articles/CBMivwFBVV95cUxOZVBwODJ0Vy1BdHpVWktyekJhRTl3aHZWTmZkT0NYQXlBMGpHZG5XMk02OGVNOFloLUJ1Q2JQWjZpWFdUOThfUTFia2tZdnp5dGRKWHg2blRVSmVjVGlWTHNwNFFzNzZuYTltLTlvQUlWS2VMYkI5XzNIOU14cW9pUmNnMWRvaDdQd29JX3psbGxoZldhMkItTGlqOWJqRndnSUxrRXVySkYyMUFGLXpIakZoS055UE1Gc0t5SG1Zbw?oc=5) ⭐️ 9.0/10

AMD 于 2026 年 9 月 28 日宣布已达成最终协议，将以约 82 亿美元的全股票交易方式收购由斯坦福大学教授、人工智能先驱李飞飞博士创立的 AI 初创公司 World Labs。作为交易的一部分，李飞飞博士将加入 AMD 担任执行副总裁兼首席科学家，直接向首席执行官苏姿丰博士汇报。 这是 AMD 在 AI 领域规模最大的收购之一，标志着其战略从芯片向世界模型和空间智能领域延伸，直接挑战英伟达在 AI 生态系统中的地位。此举还为 AMD 带来了一支世界级的研究团队和一位高知名度的 AI 领军人物，可能重塑机器人、仿真和物理 AI 领域的竞争格局。 该交易为全股票交易，对 World Labs 的估值约为 82 亿美元，收购完成后 World Labs 团队将继续进行先进 AI 模型研究。World Labs 专注于能够感知、生成、推理并与虚拟和物理世界交互的世界模型，应用方向包括机器人和仿真。

google_news · SoyaCincau · 9月29日 08:58

**背景**: World Labs 是一家成立约一年的 AI 初创公司，由斯坦福大学教授李飞飞创立，她最广为人知的成就是创建了 ImageNet 数据集，该数据集推动了现代深度学习的爆发。该公司估值超过 10 亿美元，致力于“空间智能”——即能够理解并与 3D 环境交互的 AI 系统。AMD 是一家主要芯片制造商，在 AI 加速器领域与英伟达竞争，此次收购是其向物理 AI 和机器人领域扩张努力的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://newsroom.amd.com/news/amd-acquire-world-labs/">AMD to Acquire World Labs to Advance the... - AMD Newsroom</a></li>
<li><a href="https://www.bloomberg.com/news/articles/2026-09-28/amd-to-buy-fei-fei-li-s-world-labs-ai-startup-for-8-2-billion">AMD to Buy Fei-Fei Li’s World Labs Startup for $8.2 Billion - Bloomberg</a></li>
<li><a href="https://www.worldlabs.ai/">World Labs</a></li>

</ul>
</details>

**标签**: `#AMD`, `#World Labs`, `#Fei-Fei Li`, `#acquisition`, `#AI`

---

<a id="item-4"></a>
## [Anthropic：新 AI 模型在二进制漏洞利用上跨越关键门槛](https://simonwillison.net/2026/Sep/29/anthropic-frontier-red-team/) ⭐️ 8.0/10

Anthropic 的 Frontier Red Team 在一个内部二进制漏洞利用基准测试中随机选取 100 个任务，对多个模型进行评估，发现 GLM-5.3 在 4% 的试验中实现了完整的控制流劫持，Claude Mythos Preview 的成功率为 6%。而此前的模型，如 Claude Opus 4.6 和 GLM-5.2，在所有任务中均未成功。 这标志着 AI 网络攻击能力跨越了一个有意义的门槛，表明前沿模型开始能够自主开发出此前需要人类专家才能完成的真实漏洞利用原语。这一发现对 AI 安全研究、漏洞披露以及先进攻击性网络能力在闭源和开源权重模型中的扩散都具有重要影响。 该评估从内部二进制漏洞利用基准测试中随机选取了 100 个任务，成功标准是开发出完整的控制流劫持。来自 Z.ai 的开源权重模型 GLM-5.3 表现低于 Claude Mythos Preview，但仍超过了得分为零的早期模型；据报道，其能力提升完全来自与 GLM-5.2 相同基础模型上的后训练。

rss · Simon Willison · 9月29日 22:20

**背景**: 二进制漏洞利用是指通过破坏已编译程序，使其以有利于攻击者的方式违反信任边界，通常通过破坏内存来劫持控制流。控制流劫持一般涉及覆盖返回地址或函数指针以重定向程序执行，是安全研究和 CTF 竞赛中的核心技能。Anthropic 的 Frontier Red Team 专门研究先进 AI 模型新出现的网络能力，以理解和防范安全风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://trailofbits.github.io/ctf/exploits/binary1.html">Binary Exploits 1 - CTF Field Guide</a></li>
<li><a href="https://huggingface.co/zai-org/GLM-5.3">zai-org/ GLM - 5 . 3 · Hugging Face</a></li>
<li><a href="https://docs.z.ai/guides/llm/glm-5.3">GLM - 5 . 3 - Overview - Z. AI DEVELOPER DOCUMENT</a></li>

</ul>
</details>

**标签**: `#AI security`, `#cyber capabilities`, `#binary exploitation`, `#Anthropic`, `#AI safety`

---

<a id="item-5"></a>
## [免费开源书籍教你从芯片到智能体的机器学习性能工程](https://www.reddit.com/r/MachineLearning/comments/1wt6ns4/i_wrote_a_free_opensource_book_on_making_ml/) ⭐️ 8.0/10

一位开发者发布了一本名为《How to Make Your Model Fast: A Systems View of Efficient Machine Learning, from Silicon to Agents》的免费开源书籍，托管在 GitHub 上。该书指出仅减少 FLOPs 并不能保证模型更快，内容从 roofline 分析和硬件讲起，逐步涵盖内核、编译器、量化、剪枝、视觉、端侧大模型、机器人、性能分析、服务化，最终延伸到智能体。 该资源填补了机器学习教育中的一项空白，提供了通常以模型为中心的课程所缺失的系统级视角，帮助从业者在优化前先推理真正的瓶颈所在。对于从事推理、编译器、边缘 AI 和性能工程的工程师来说，这本书尤其有价值，能帮助他们做出明智的权衡。 该书从 roofline 分析入手，判断工作负载是受计算、带宽、内存还是系统限制，然后探讨量化、剪枝或内核优化中哪种优化才能真正突破该限制。书籍在 GitHub 上免费开放：https://github.com/usamahz/make-your-model-fast，作者欢迎反馈和贡献。

reddit · r/MachineLearning · /u/SoloTiger_ · 9月29日 10:35

**背景**: Roofline 分析是一种性能模型，通过将可达到的 FLOPs/s 与算术强度作图，展示算法是受内存带宽还是计算限制。端侧大模型是紧凑的模型（通常小于 4GB），设计用于在智能手机等资源受限设备上本地运行，从而实现隐私保护和离线可用。机器学习性能工程需要理解从芯片、内核到服务化和智能体系统的全栈，因为瓶颈可能出现在任何一层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://jax-ml.github.io/scaling-book/roofline/">All About Rooflines | How To Scale Your Model</a></li>
<li><a href="https://v-chandra.github.io/on-device-llms/">On - Device LLMs : State of the Union, 2026 – Vikas Chandra – Senior...</a></li>

</ul>
</details>

**标签**: `#machine-learning`, `#performance-engineering`, `#systems`, `#optimization`, `#open-source`

---

<a id="item-6"></a>
## [NVIDIA Kumo Tabular 为表格预测树立新的精度-效率前沿](https://huggingface.co/blog/nvidia/kumo-tabular) ⭐️ 7.0/10

NVIDIA 推出了 Kumo Tabular，这是一种用于表格预测的新模型，在统一的单张 RTX 6000 Pro 评估设置下，以 1950 的 ELO 排名第一，同时比 LimiX-2 快 17 倍。在全部三种模型规模上，Kumo Tabular 都在精度-效率帕累托前沿上建立了新的最先进水平。 表格数据支撑着金融、医疗和电子商务等许多现实世界的机器学习应用，因此一个同时提升精度和效率的模型可以显著降低从业者的训练和推理成本。这一进展巩固了 NVIDIA 在表格深度学习领域的地位，并可能鼓励更广泛地采用深度模型而非传统的梯度提升树。 评估是在统一的单张 RTX 6000 Pro 设置下进行的，Kumo Tabular 在三种模型规模上进行了测试，所有规模都在精度-效率帕累托前沿上创下了新的最先进结果。该模型相比 LimiX-2 的 17 倍速度优势凸显了其效率提升，不过具体架构细节和数据集基准在现有摘要中并未完全详述。

rss · Hugging Face Blog · 9月29日 15:30

**背景**: 表格预测是指利用数据集中其他列的键值对来预测某一行目标列的值，这是应用机器学习的核心任务。传统上，XGBoost 和 LightGBM 等梯度提升决策树在表格任务中占据主导地位，但近期研究开始聚焦于表格数据的深度学习和基础模型。TabArena 等基准旨在为这些模型提供持续更新的标准化评估，以解决表格机器学习方法难以比较的问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/blog/nvidia/kumo-tabular">NVIDIA Kumo Tabular Sets a New Accuracy - Efficiency Frontier for...</a></li>
<li><a href="https://arxiv.org/pdf/2406.12031">Large Scale Transfer Learning for Tabular Data</a></li>
<li><a href="https://www.researchgate.net/publication/392917072_TabArena_A_Living_Benchmark_for_Machine_Learning_on_Tabular_Data">(PDF) TabArena: A Living Benchmark for Machine Learning on...</a></li>

</ul>
</details>

**标签**: `#tabular-data`, `#machine-learning`, `#NVIDIA`, `#model-efficiency`, `#benchmark`

---

<a id="item-7"></a>
## [面向 MCP 智能体的来源感知验证方案被提出](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source) ⭐️ 7.0/10

Hugging Face 上的一篇新博客文章提出了针对基于模型上下文协议（MCP）构建的智能体的“来源感知验证”方法，主张智能体不仅要验证事实本身是否真实，还要验证其来源是否可信。文章将这一点视为当前 AI 智能体事实核查流程中缺失的一环。 随着 MCP 成为 AI 应用连接外部数据源和工具的标准方式，智能体会越来越多地从异构且未经审核的来源中获取事实，因此验证信息来源的可信度对可信性和 AI 安全至关重要。这对构建智能体工作流的开发者以及依赖智能体输出进行调研或决策的用户都有重要意义。 该方案的重点在于将验证从二元的事实核查扩展到包含来源可靠性评估，这一点尤其重要，因为 MCP 服务器可以暴露本地文件、数据库、搜索引擎以及其他可信度各异的工具。该博客文章在智能体设计方面具有技术深度，但就本次提交而言，尚未引发社区讨论。

rss · Hugging Face Blog · 9月29日 13:07

**背景**: 模型上下文协议（MCP）是一项开放标准，允许 Claude 或 ChatGPT 等 AI 应用连接外部数据源、工具和工作流，而无需为每个应用和工具编写一次性的定制集成代码。由于智能体现在可以从许多这类 MCP 连接的来源中检索信息，事实核查必须考虑某个说法源自何处，而不仅仅是它在孤立情况下看起来是否正确。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://modelcontextprotocol.io/">What is the Model Context Protocol ( MCP )? - Model Context Protocol</a></li>
<li><a href="https://github.com/modelcontextprotocol">Model Context Protocol · GitHub</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#verification`, `#MCP`, `#source reliability`, `#fact-checking`

---

<a id="item-8"></a>
## [CoWindow 与 MassAlloc 注意力机制削减长上下文计算量](https://www.reddit.com/r/MachineLearning/comments/1wt1gbk/cowindow_and_massalloc_attention_collective/) ⭐️ 7.0/10

作者提出了 CoWindow 注意力（CoWA），通过互补的、由位置定义的时间窗口将远距离上下文分配到不同的 KV 头上；以及 MassAlloc 注意力（MALA），利用 softmax 统计量跳过低贡献的评分后计算。两者均支持训练的前向/反向传播和推理的预填充/解码阶段，在 8 块 H100 GPU、TP=8、128K token 条件下，注意力算子相对 FullAttn 的加速最高分别达到 8.6 倍（CoWA）和 3.0 倍（MALA）。 长上下文模型受限于注意力的二次方计算成本，而这两种方法无需学习路由器或索引器即可减少冗余计算，有望大幅降低 128K 以上上下文的训练和推理成本。如果所报告的算子级收益能够转化为端到端节省，就可能降低整个行业部署和训练长上下文大语言模型的成本。 在 14B 规模、32K 上下文下，CoWA 和 MALA 的总训练 FLOPs 分别下降 28.5%和 23.1%，在报告评测中能力与 FullAttn 相当；但作者提醒，集体覆盖并不意味着与 FullAttn 具有相同的逐头交互或输出，且 MALA 仍需承担完整的因果 QK 评分开销。这些加速是注意力算子层面的测量值，并非端到端模型加速，也未证明与稠密注意力存在普遍的无损等价性。

reddit · r/MachineLearning · /u/BitExternal4608 · 9月29日 05:16

**背景**: Transformer 注意力会计算每个查询与键之间的成对分数，而因果掩码确保每个 token 只能关注之前的 token，这对自回归语言建模至关重要。这种随序列长度二次方增长的开销使长上下文模型成本高昂，因而催生了稀疏或选择性注意力方案。CoWindow 和 MassAlloc 就是其中两种：前者让每个头稀疏地关注部分位置，但集体覆盖完整的因果历史；后者保留完整评分，但自适应地跳过低重要性 tile 的后续计算。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2509.21936">Statistical Advantage of Softmax Attention : Insights from...</a></li>
<li><a href="https://repovive.com/roadmaps/llm-fine-tuning/transformer-architecture-essentials/causal-attention-masking">Causal Attention Masking - Transformer Architecture... | Repovive</a></li>
<li><a href="https://theorempath.com/topics/attention-as-kernel-regression">Attention as Kernel Regression | TheoremPath</a></li>

</ul>
</details>

**标签**: `#attention mechanisms`, `#long-context models`, `#efficient inference`, `#transformer optimization`, `#AI research`

---

<a id="item-9"></a>
## [微控制器现已能运行扩散模型和 2.89 亿参数大语言模型](https://news.google.com/rss/articles/CBMimAFBVV95cUxPcTF3akpFUmI4ZDdNZlF6ZWJSRDZrdzdHMkU1NmlQNjlranFENWVOM0cyalVaZWx3a0pDMDNFN1RkRm8ya3J1bVN0akdJYnFCY2JDNTdsNmpXVExOTXNqSks5MVV6V09ZQ3N3LXo0QXZDWGt1UnZnZzktWUlJcm5XZ1lYeXNkS0hqMS13cXpKZ0hhR0NwYks1WA?oc=5) ⭐️ 7.0/10

Adafruit 报道了两项在微控制器上直接运行先进 AI 模型的独立演示：一个紧凑的扩散模型在 STM32N6570-DK 开发板上生成 64x64 灰度图像，以及一个 2.89 亿参数的语言模型在 NXP FRDM-MCXN947 微控制器上运行。 这标志着边缘 AI 的一个重要里程碑，表明此前只能在 GPU 或云服务器上运行的生成式 AI 模型现在可以在微小、低功耗、低成本的嵌入式硬件上运行，有望在无需依赖云端的物联网、机器人和消费设备中催生新应用。 扩散模型使用量化模型，在配备 Ethos-U55 NPU 的 Arm Cortex-M55 上占用约 3.36 MB 内存；而大语言模型则依靠重度量化、紧凑的权重存储和优化的推理，以适应微控制器有限的内存和计算预算。

google_news · Adafruit · 9月29日 18:54

**背景**: 微控制器是用于嵌入式系统的小型廉价计算机，传统上其内存和处理能力极为有限，远不足以运行大型 AI 模型。扩散模型通过迭代去噪随机噪声来生成图像，大语言模型（LLM）则生成文本，两者通常都需要大量 GPU 资源。近年来模型量化、高效神经网络架构以及 Ethos-U55 等专用 AI 加速器的进步，使得在微控制器级硬件上运行这些模型的缩小版本成为可能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.adafruit.com/2026/09/29/microcontrollers-now-run-a-diffusion-model-and-289m-llm/">Microcontrollers now run a diffusion model and 289 M LLM</a></li>
<li><a href="https://aiweekly.co/alerts/esp32-s3-demo-runs-289m-parameter-llm-at-95-tokenssec">ESP32-S3 demo runs 28 . 9 M - parameter LLM at... | AI Weekly</a></li>

</ul>
</details>

**标签**: `#edge-ai`, `#microcontrollers`, `#llm`, `#diffusion-models`, `#embedded-systems`

---

<a id="item-10"></a>
## [Anthropic 2025 年亏损近 420 亿美元，筹备可能高达 2 万亿美元的 IPO](https://news.google.com/rss/articles/CBMiYkFVX3lxTFBIUzNCSTlLdnpHaDRvUzQ1ZGVRaUlTY0tEVnpFN2V5ZFVKOFQtZktWNHozUnFxY2ZtMXNJMGZsendMUG1NeXVEZmhMRHdGcVJVTkV6QkNTZ2dNaVY1MHhfYUNn?oc=5) ⭐️ 7.0/10

据 ynetnews.com 报道，Anthropic 在 2025 年亏损近 420 亿美元，同时正在筹备可能高达约 2 万亿美元估值的首次公开募股（IPO）。Sharecafe 的另一篇报道将此次上市称为一次具有里程碑意义的人工智能公司公开亮相。 如此巨大的亏损规模与潜在估值，使这一事件成为人工智能行业的关键时刻，表明领先的 AI 实验室即便烧钱严重，仍可能寻求登陆公开市场。这可能重塑投资者、竞争对手和监管机构对前沿 AI 开发经济性的看法。 报道中提到的 420 亿美元亏损和 2 万亿美元 IPO 估值都是惊人的数字，如果属实，将使 Anthropic 成为有史以来寻求上市的最大、最烧钱的公司之一。这些报道基于简短的新闻条目，因此具体的财务明细、时间表和 IPO 细节仍未得到证实。

google_news · ynetnews.com · 9月29日 06:02

**背景**: Anthropic 是一家以开发 Claude 系列大语言模型而闻名的人工智能安全与研究公司，以公益公司的形式运营。IPO 是私营公司首次向公众发行股票、转变为上市公司的过程。人工智能行业在算力和人才上的资本支出极为庞大，导致许多前沿实验室即便估值飙升仍出现巨额亏损。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/">Home \ Anthropic</a></li>
<li><a href="https://pepperstone.com/en-cn/learn-to-trade/trading-guides/how-to-approach-trading-an-ipo/">How to trade an IPO ( Initial Public Offering ) | Pepperstone</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#AI industry`, `#IPO`, `#finance`, `#startups`

---

<a id="item-11"></a>
## [Naver 与 Daum 将屏蔽外国 AI 爬虫以保护韩语数据](https://news.google.com/rss/articles/CBMif0FVX3lxTE5rWUNGQ0xxRmdoYnI5NUstY2twQTd1Mm4zT0Z0aWRrYTNXYUQyY0ZyWE9NUHR6ME14clNONUR3M3ZhOVBNX24zWm5rVWpYN1QyQTFzVU16cFlyd2Rvb0FGTVNENE1DNHJFNzdWUVRsR3ZrMHFyVUNHRmJWaWZyOE0?oc=5) ⭐️ 7.0/10

韩国两大门户网站 Naver 和 Daum 宣布将屏蔽外国 AI 爬虫访问其内容，以防止本地语言数据在未经许可的情况下被用于 AI 训练。 这标志着 AI 公司与内容提供方之间围绕数据使用的全球紧张关系显著升级，可能减少外国 AI 模型获取高质量韩语训练数据的机会，并为其他区域性平台树立先例。 该屏蔽预计将通过 robots.txt 规则和服务器级过滤等机制实施，针对 GPTBot、ClaudeBot 等已知的 AI 爬虫用户代理，但此类措施也可能意外地使这些网站从 AI 驱动的搜索结果中消失。

google_news · kedglobal.com · 9月29日 18:25

**背景**: 网络爬虫是自动浏览网站以索引内容的机器人，AI 公司利用它们收集海量文本数据集来训练大型语言模型。网站可以通过 robots.txt 标准来表明对爬虫的限制，而 Cloudflare 等工具现在提供一键屏蔽 AI 爬虫的功能。Naver 和 Daum 是韩国占主导地位的搜索和门户服务，其韩语内容对 AI 训练而言是宝贵且稀缺的资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.openreplay.com/ai-crawlers-block-robots-txt/">AI Crawlers and How to Block Them with robots . txt</a></li>
<li><a href="https://www.whatismyip.com/ai-crawler-blocker/">AI Crawler Blocker | robots . txt Generator & Checker</a></li>
<li><a href="https://en.wikipedia.org/wiki/Daum_(web_portal)">Daum (web portal)</a></li>

</ul>
</details>

**标签**: `#AI crawlers`, `#data protection`, `#South Korea`, `#web scraping`, `#AI training data`

---

<a id="item-12"></a>
## [Liquid AI 发布 d1：零输出 token 的校准概率决策模型](https://news.google.com/rss/articles/CBMi3gFBVV95cUxOT3dpa2NJNnRYU3VoUW1idF9kT1NmN2lFc1lPWUxvaTJuZG0tMHNKeXY1RHRlXzltaG5rYVVQZ1U0RVNNbTNzcm1VZThMWHZHVFZydFhtbktvdk5iV1VoVGFKNkhOeEM1bDAtaG9CaGFKNG1YUUkzVk91VlJxbXI0cm1KMTV4R3A1NlZlMlM5alhITFN6bEJteUZ0T21oZ09wVF9rdVdGUnJPUmlDSzJEZXZGX0lvaEl1V3ZGR1JNSzYyeG8zQ05tNWRWM3BPOGpGY1k5cmNaS2RUVGk1SUHSAd4BQVVfeXFMTk93aWtjSTZ0WFN1aFFtYnRfZE9TZjdpRXNZT1lMb2kybmRtLTBzSnl2NUR0ZV85bWhua2FVUGdVNEVTTW0zc3JtVWU4TFh2R1RWcnRYbW5Lb3ZOYldVaFRhSjZITnhDNWwwLWhvQmhhSjRtWFFJM1ZPdVZScW1yNHJtSjE1eEdwNTZWZTJTOWpYSExTemxCbXlGdE9taGdPcFRfa3VXRlJyT1JpQ0syRGV2Rl9Jb2hJdVd2RkdSTUs2MnhvM0NObTVkVjNwTzhqRmNZOXJjWktkVFRpNUlB?oc=5) ⭐️ 7.0/10

Liquid AI 发布了其首个决策模型 d1，它接收文本或 JSON 格式的上下文，并在一次调用中返回针对预先设定选项的校准概率。与生成式大语言模型不同，d1 不生成任何输出文本，因此 usage.output_tokens 始终为 0。 这标志着业界正转向专为决策打造的模型，用以替代大语言模型的分类、路由和评分调用，有望降低高频决策场景的推理成本与延迟。构建路由、分诊或评分流水线的团队，可能可以用更便宜、更可靠的方案替换生成式调用。 该模型返回的是开发者事先定义好的选项中的一个带类型的答案，Liquid AI 的迁移指南给出了一条简单规则：如果答案是 N 个已知选项之一，就应使用决策模型。由于它不产生任何 token，输出 token 计费和生成延迟都被消除，但它并不适合开放式文本生成任务。

google_news · MarkTechPost · 9月29日 21:47

**背景**: 校准概率指的是模型的预测置信度与真实结果相符——例如以 80% 置信度做出的预测，大约应有 80% 是正确的；标准分类器往往不具备这一特性，Platt scaling 等校准方法正是为解决该问题而生。Liquid AI 是 Liquid Foundation Models（LFM）背后的公司，而 d1 是其全新一类专为结构化决策而非文本生成打造的模型中的首个产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.liquid.ai/lfm/models/decision-models">Decision Models - Liquid Docs</a></li>
<li><a href="https://www.marktechpost.com/2026/09/29/liquid-ai-releases-d1-a-decision-model-that-returns-calibrated-probabilities-with-zero-output-tokens/">Liquid AI Releases d1: A Decision Model That Returns... - MarkTechPost</a></li>
<li><a href="https://en.wikipedia.org/wiki/Platt_scaling">Platt scaling - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 该发布在 Hacker News 上引发了讨论，d1 作为 Liquid AI 首个决策模型的发布受到了关注，但现有材料中未提供该讨论帖的详细观点与情绪。

**标签**: `#AI`, `#machine learning`, `#decision models`, `#calibrated probabilities`, `#Liquid AI`

---

<a id="item-13"></a>
## [万事达卡：AI 将发动网络攻击的成本降至 3 美元以下](https://news.google.com/rss/articles/CBMi7AFBVV95cUxQQ0NRanU0MlltVkZBNF9NbE1qLWRmWW0wMG52OENxZHBPakRDeEFXUmtDNTRGbzl6dllaWmtiQ1dvQzF3UWNSdGRTSkZNSFFISndpMjl1NzlIeHBKWEt6bkJ0cXYxNDVnQlNaa0FUS2pNSnluOHppOVV3b2EybV9DWFJjYkVjLTRfNGxOSWdkSWRjdVdma1U3ZExERTJMYmpVMTJTWEdoV0Fna09Hel9hbS1NOVlhbFFoanBKYXJfZVhoenZ1eTVLS1dUaG5NajhyVU44NmotRVFHaC1ObXRqN2Y4YWsyb1hZeXRuWdIB8gFBVV95cUxQQ1R2bTh2SDF5dmJuU204NXR5dzVUNEx6XzBfNWRoUEpNUzFZYUVBUWhTRHd0bDBqcU9LdW9qSjZ2bEdyNjJpTkpQRTV5eWNMU0ZWR0JyVkxCdExfXy1QM0tIYkRkWDQ5Y1RxanVzajRLNk9rUGRkblM2aXpJSTZ3bzNwMEZ6OHlyUkFkSjNWY1FNYkdMd29mLTVoRVBwcjQ0QnBvMWF5am9lZ2pWdWtWN01xaWRjYmhxcnl3MzMxWThFR1dwZXBydXNrTXNJRVYzNVpzM0FZMEw0LXpVanRwUFhiYkRYbGdUVmstcDZPOVZhUQ?oc=5) ⭐️ 7.0/10

据《商业标准报》报道，万事达卡报告称，人工智能已将发动一次网络攻击的成本降低到 3 美元以下。这标志着实施网络攻击的门槛出现了急剧下降。 这一发展标志着网络威胁格局的重大转变，因为廉价的 AI 驱动攻击工具可能使网络犯罪平民化，让低技能行为者也能发动攻击。安全专业人士、企业和政策制定者需要调整防御策略以应对这一日益增长的威胁。 万事达卡的报告强调了 AI 如何同时降低了实施网络攻击所需的技术门槛和资金投入。虽然具体攻击方法未被详细说明，但低于 3 美元的数字凸显了攻击能力的快速商品化。

google_news · Business Standard · 9月29日 18:44

**背景**: 生成式 AI 和其他 AI 工具正越来越多地被恶意行为者用于自动化和扩大网络攻击，从制作钓鱼邮件到生成恶意软件。传统上，发动一次复杂的网络攻击需要大量的技术技能和资源，但 AI 通过让强大工具广泛可及，正在改变这一局面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gendigital.com/blog/insights/leadership-perspectives/ai-based-cyberthreats">Gen Blogs | Insights Into the AI -Based Cyberthreat Landscape</a></li>
<li><a href="https://www.ibm.com/think/topics/cybersecurity">What Is Cybersecurity? | IBM</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#AI`, `#cyberattacks`, `#Mastercard`, `#threat landscape`

---

<a id="item-14"></a>
## [195 项试验荟萃分析勾勒 AI 在肿瘤学中的应用现状](https://news.google.com/rss/articles/CBMi7gFBVV95cUxONTFVR2pkUjVSQnNSaUd5OHR6RHNqa3ZwYlk3NWN3aFNoczNHTy1YeHBJbzdLOVQ5Z2pyT3Q4c2tQTVQ1SFA5OXlQWUttYmxaNE42R2xxb1ZBelduNmI0WEEySmRwRjFjZ1RIZEFQSkxhVnY5a3NBZjd1Q0MzNmVxaGdrMU9fT1A0N2dySzRfX3dUVDNUSjlKaVBSZEhKODlnQkNHcFFfMFR1UkpNY3JtOUszZXYyZTVFc0pwWkU0MEtGN0FvVC1NVmVvQVpPcWE5QlFaNEE1ZmxfYzh6UmQwekpUWGowWW9SSFFmektn?oc=5) ⭐️ 7.0/10

Onco'Zine 发布了一项综合分析，汇总了 195 项临床试验，以评估人工智能目前在肿瘤学中的应用情况。该综述整合了这些试验的趋势、有效性数据和挑战，全面描绘了该领域的现状。 这项荟萃分析为研究人员、临床医生和开发者提供了 AI 在癌症诊疗中实际表现的循证概览，可指导未来的试验设计和投资方向。它揭示了 AI 在哪些方面产生价值、哪些方面仍存在空白，为临床采用和监管考量提供参考。 该分析涵盖 195 项试验，是同类研究中规模较大的综合之一，但此类荟萃分析受限于试验设计、AI 模型和结局指标的异质性。这类综述不能替代随机对照试验，但能提供该领域发展方向的结构化快照。

google_news · Onco'Zine · 9月29日 02:10

**背景**: 肿瘤学中的人工智能应用涵盖癌症检测、治疗规划和预后预测等领域，通常利用机器学习处理医学影像或基因组数据。荟萃分析通过统计方法整合多项独立研究的结果，以发现单项试验可能无法揭示的更广泛规律。随着 AI 工具在医疗领域激增，综合试验证据对于区分已证实的益处与炒作变得至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cancernetwork.com/view/artificial-intelligence-oncology-current-applications-and-future-directions">Artificial Intelligence in Oncology : Current Applications and Future...</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11256531/">Intelligent oncology : The convergence of artificial intelligence and...</a></li>
<li><a href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003629">A framework for prospective, adaptive meta - analysis ... | PLOS Medicine</a></li>

</ul>
</details>

**标签**: `#AI in healthcare`, `#oncology`, `#clinical trials`, `#meta-analysis`, `#medical AI`

---
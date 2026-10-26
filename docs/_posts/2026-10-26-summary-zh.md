---
layout: default
title: "Horizon Summary: 2026-10-26 (ZH)"
date: 2026-10-26
lang: zh
---

> 从 45 条内容中筛选出 4 条重要资讯。

---

1. [Hugging Face 发布 140 亿参数开源 DNA 语言模型 Carbon-X](#item-1) ⭐️ 8.0/10
2. [南北阁发布 Nanbeige4.3-33B：面向小型智能体的 Apache 2.0 教师模型](#item-2) ⭐️ 7.0/10
3. [memt-1.0 采用门控 deltanet-2 与混合存储实现智能体记忆](#item-3) ⭐️ 7.0/10
4. [猫王版权方起诉 Anthropic，指控其用其音乐训练 AI](#item-4) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Hugging Face 发布 140 亿参数开源 DNA 语言模型 Carbon-X](https://news.google.com/rss/articles/CBMilgFBVV95cUxPMEZUbzhMTThoQkIzX01PWlE4YlZocjRBa0dDZ3RRMDJfSzhaTnJEY1U1TmpnMXhIZDFQSFIxQU9kVU1MNlVRZmNtQ2lvOEFNeGkxYkJWazloRnVmelB1TEVidG9Tb0o4NnFCSWE3YlpLZG5xX0x4akN4bHFMVkRaRFVzbkZINTA4Z09NbE5EWkJVRUZjaGfSAZYBQVVfeXFMTzBGVG84TE04aEJCM19NT1pROGJWaHI0QWtHQ2d0UTAyX0s4Wk5yRGNVNU5qZzF4SGQxUEhSMUFPZFVNTDZVUWZjbUNpbzhBTXhpMWJCVms5aEZ1ZnpQdUxFYnRvU29KODZxQklhN2JaS2RucV9MeGpDeGxxTFZEWkRVc25GSDUwOGdPTWxORFpCVUVGY2hn?oc=5) ⭐️ 8.0/10

Hugging Face 发布了 Carbon-X，这是一个 140 亿参数的开源 DNA 语言模型，首次将 DNA 序列与自然语言整合在一起。该模型已在 Hugging Face 的 HuggingFaceBio/Carbon-X 页面提供，由 Hugging Face、中关村学院以及 Telethon 遗传与医学研究所/那不勒斯费德里科二世大学的研究团队联合开发。 这一发布标志着生物多模态 AI 的重要进展，使研究人员能够用自然语言与基因组数据交互，有望加速基因组学和个性化医疗领域的发现。作为开源模型，它降低了生物信息学社区构建跨模态应用的门槛。 Carbon-X 是 Carbon 系列中性能最强的版本，可使用 vLLM 进行高效推理。它是多个研究机构合作的成果，其开源特性允许针对特定基因组任务进行微调和适配。

google_news · MarkTechPost · 10月25日 16:53

**背景**: DNA 语言模型将最初为自然语言处理开发的 Transformer 架构应用于基因组序列，以学习 DNA 的“语法”并预测功能效应。近期研究探索了将 DNA、RNA 和蛋白质数据与自然语言结合的多模态模型，如 ChatNT 和 BioLangFusion，以实现生物学的对话代理。Carbon-X 通过在一个开源模型中统一 DNA 和自然语言，延续了这一趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/HuggingFaceBio/Carbon-X">HuggingFaceBio/ Carbon - X · Hugging Face</a></li>
<li><a href="https://japan.cnet.com/article/35253907/">DNAと「会話」するAI、 Hugging Face ... - CNET Japan</a></li>
<li><a href="https://www.nature.com/articles/s42256-025-01047-1">A multimodal conversational agent for DNA, RNA and protein ...</a></li>

</ul>
</details>

**标签**: `#DNA language model`, `#Hugging Face`, `#bioinformatics`, `#AI/ML`, `#open-source`

---

<a id="item-2"></a>
## [南北阁发布 Nanbeige4.3-33B：面向小型智能体的 Apache 2.0 教师模型](https://www.reddit.com/r/MachineLearning/comments/1xf6x35/nanbeige_releases_nanbeige4333b_an_apache_20/) ⭐️ 7.0/10

南北阁发布了 Nanbeige4.3-33B，这是一个采用 Apache 2.0 许可、拥有 512K 上下文窗口的教师模型，旨在训练更小的智能体模型，包括即将推出的 3B 版本。该团队报告在 Terminal-Bench 2.1 上得分为 80.9，而 Qwen3.8-27B 为 73.0；但在 SWE-Bench Pro 上得分为 60.3，低于后者的 61.7，且所有结果均为自行评估，未经独立复现。 此次发布为开放权重生态增添了一个许可宽松的长上下文教师模型，为从业者蒸馏或微调更小的智能体模型提供了不受严格许可限制的候选方案。其参差不齐的基准测试结果也凸显了不同智能体评测套件之间的权衡，以及不应将头条分数直接视为部署排名的重要性。 所报告的评估在每个基准测试内使用相同的测试框架和推理设置，并通过 preserve_thinking=true 保留先前的推理内容；模型卡建议在多轮工具使用中启用该设置，但不建议在通用聊天中使用。团队指出，在固定该设置的情况下比较任务成功率和总生成 token 数，会比依赖头条分数更有用。

reddit · r/MachineLearning · /u/jatingargiitk · 10月25日 16:32

**背景**: Terminal-Bench 是一个在真实终端 shell 中评估 AI 智能体完成高难度、贴近现实任务的基准测试，而 SWE-Bench Pro 是 SWE-Bench 的更困难后继版本，专注于复杂的企业级软件工程问题。教师模型是用于生成训练数据或指导更小学生模型训练的更大、更强模型，是构建高效智能体的常用技术。Apache 2.0 是一种宽松的开源许可证，允许商业使用和修改，限制极少。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tbench.ai/">TERMINAL - BENCH</a></li>
<li><a href="https://scaleapi.github.io/SWE-bench_Pro-os/">SWE-Bench Pro</a></li>
<li><a href="https://llm-stats.com/benchmarks/swe-bench-pro">SWE-Bench Pro Leaderboard - llm-stats.com</a></li>

</ul>
</details>

**标签**: `#LLM`, `#open-weights`, `#agentic-models`, `#benchmarks`, `#model-release`

---

<a id="item-3"></a>
## [memt-1.0 采用门控 deltanet-2 与混合存储实现智能体记忆](https://www.reddit.com/r/MachineLearning/comments/1xeu0ht/memt10_architecture_breakdown_gated_deltanet2/) ⭐️ 7.0/10

Reddit r/MachineLearning 上的一篇帖子详细拆解了 memt-1.0，这是一种记忆原生架构，利用门控 deltanet-2 进行 token 级记忆更新，并结合混合存储层将智能体记忆内化。据称在 128k 上下文下，memt-1.0-nano 相比全上下文 KV 缓存实现了约 1.86 倍的端到端推理加速和 66 倍的持久存储缩减。 这对长程智能体很重要，因为它提出通过将过程经验直接融入模型计算层来摆脱 KV 缓存的内存瓶颈，而不是追加日志或依赖外部 RAG 管道。如果得到验证，这种架构级记忆可以大幅降低多轮智能体工作负载的服务成本和存储需求。 其两阶段训练流程（继续预训练加后训练，共 34B token）据称能在保持通用推理能力的同时超越现有参数化记忆基线，但这些说法来自未经同行评审的 Reddit 帖子。该设计还在多轮任务中持续将检索到的过程经验内化到权重/状态中，避免原始执行日志导致的上下文窗口膨胀。

reddit · r/MachineLearning · /u/Mrs-Grumpy23 · 10月25日 05:31

**背景**: 标准 LLM 智能体通过堆叠历史提示或经 RAG 检索文档来维持记忆，这会增大 KV 缓存（推理时缓存的键值张量），在长上下文下推高内存和存储成本。门控 DeltaNet-2 是第二代线性记忆架构，使用独立的擦除门和写入门对循环状态进行细粒度控制；而混合存储/记忆设计将 token 路由到多个独立记忆状态，以扩展容量并减少干扰。参数化内化则相反，将外部记忆整合进模型权重，把可检索信息转化为内在能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/topics/gated-deltanet-2-architecture">Gated DeltaNet - 2 : Advanced Memory Architecture</a></li>
<li><a href="https://arxiv.org/abs/2502.13685">[2502.13685] MoM: Linear Sequence Modeling with Mixture-of ... GitHub - OpenSparseLLMs/MoM MoM: Linear Sequence Modeling with Mixture-of-Memories M M: L S MIXTURE OF-MEMORIES - OpenReview MoM: Linear Sequence Modeling with Mixture-of-Memories MoM: Linear Sequence Modeling with Mixture-of-Memories MOS:UnleashingParameterEfﬁciencyof Low ...</a></li>
<li><a href="https://arxiv.org/pdf/2512.13564">Memory in the Age of AI Agents</a></li>

</ul>
</details>

**标签**: `#LLM-agents`, `#memory-architecture`, `#efficiency`, `#deltanet`, `#mixture-of-storage`

---

<a id="item-4"></a>
## [猫王版权方起诉 Anthropic，指控其用其音乐训练 AI](https://news.google.com/rss/articles/CBMitAFBVV95cUxPaVk4QWZlWVg2YjVIZ19DRGQzMThlTDRzcktHelF1VGJNUnVaUWtGcjQ2UllWQ2M5YWtpLUVJTnJ4YnFVNUtYT2FCamJndEhLbXB2eUUybWZQYnRzRlM0WEdIdjczQkZUbzJhYXlrenZUeTlZYldFZFpKajhzQUpYVENpenpuZ0hhczRpYUhSNmtSbFJyTWl3X2xueVJRREVsV0ItWjEteGJoSkZzN25wdFFPZlTSAbwBQVVfeXFMT3VJR3ZITGZNcUxmeC1zMXk2U3hKQ2NPelJnTG84Q2hxXzJnZl9kS29mRWJ5Zm5sZmoyZkVtaW9QTUJFQVphYXZMNDhBVkdldDljcXY4N2RpY0laS2p5WmdhMjBoYXZNZVU3VVhBN3g3dFh4T3JYVXgxQndSVVZHdFpNYjJRaFVMVU1IRURoeUFOb0dkYUpfeWwyUHFxV0hsM1BJdVM3NmpEblgzOXU0UURRRWRTbVBybTJZbXI?oc=5) ⭐️ 7.0/10

猫王埃尔维斯·普雷斯利的版权方对 Anthropic 提起诉讼，指控这家 AI 公司在未经授权的情况下使用普雷斯利的音乐训练其模型。这起诉讼加剧了针对 AI 开发者使用受版权保护作品作为训练数据的版权诉讼浪潮。 此案将 AI 版权争议的范围从文本和图像扩展到音乐，表明各创意产业的版权方越来越愿意在法庭上挑战 AI 训练实践。判决结果可能影响 AI 公司获取和授权训练数据的方式，对整个生成式 AI 生态系统具有深远影响。 诉讼指控 Anthropic 在训练数据中未经授权使用了普雷斯利的音乐，但报道中未详细说明具体诉求和索赔金额。这是针对 Anthropic 的多起版权诉讼之一，该公司还因使用书籍而面临作者和出版商的诉讼。

google_news · NBC10 Philadelphia · 10月25日 22:17

**背景**: Anthropic 的 Claude 等 AI 模型使用从互联网抓取的大量数据进行训练，其中包括受版权保护的文本、图像和音乐。在美国，法院仍在裁定此类复制是否构成合理使用，而越来越多的诉讼——2026 年已追踪到超过 145 起——正在检验这一问题。音乐版权方尤为活跃，针对 Suno 等 AI 音乐生成器的案件也在进行中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - Wikipedia</a></li>
<li><a href="https://ailawsuittracker.com/ai-copyright-lawsuits/">AI Copyright Lawsuits (2026): 145 Tracked Cases & Status</a></li>
<li><a href="https://www.onemoreshot.ai/blog/21-million-songs-were-scraped-for-ai-training/">21 Million Songs Were Scraped for AI Training | One More Shot AI Blog</a></li>

</ul>
</details>

**标签**: `#AI copyright`, `#Anthropic`, `#music industry`, `#legal`, `#AI training data`

---
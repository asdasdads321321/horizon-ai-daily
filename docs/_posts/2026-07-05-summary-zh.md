---
layout: default
title: "Horizon Summary: 2026-07-05 (ZH)"
date: 2026-07-05
lang: zh
---

> 从 49 条内容中筛选出 12 条重要资讯。

---

1. [新版 Claude 模型出现工具调用退化](#item-1) ⭐️ 8.0/10
2. [USAF：在消费级 GPU 上对 MoE 模型进行稀疏微调](#item-2) ⭐️ 8.0/10
3. [BaryGraph：将关系作为知识图谱中的一等文档](#item-3) ⭐️ 8.0/10
4. [Z.ai 的 GLM-5.2 以极低成本挑战 AI 巨头](#item-4) ⭐️ 8.0/10
5. [谷歌 Gemini 3.5 Pro 据传 7 月发布，支持 200 万 token 上下文](#item-5) ⭐️ 8.0/10
6. [仅用 500 字节通过 Deflate 压缩绘制世界地图](#item-6) ⭐️ 7.0/10
7. [提议：将语义压缩作为输入扩散以处理长上下文](#item-7) ⭐️ 7.0/10
8. [DeusData/codebase-memory-mcp：高速代码智能 MCP 服务器](#item-8) ⭐️ 7.0/10
9. [Nature 多智能体系统进展合集](#item-9) ⭐️ 7.0/10
10. [IndiaMart 诉 OpenAI：AI 是中介还是原创者？](#item-10) ⭐️ 7.0/10
11. [报告称 AI 数据中心用水量远超披露水平](#item-11) ⭐️ 7.0/10
12. [美光投资 93 亿美元在日本扩建 AI 内存芯片产能](#item-12) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [新版 Claude 模型出现工具调用退化](https://simonwillison.net/2026/Jul/4/better-models-worse-tools/#atom-everything) ⭐️ 8.0/10

Armin Ronacher 报告称，较新的 Anthropic Claude 模型（包括 Opus 4.8 和 Sonnet 5）在调用自定义编辑工具时，有时会在嵌套数组中凭空生成额外字段，导致工具调用被 Pi 拒绝，而旧模型则没有此问题。 这一退化对于依赖 LLM 结构化输出的开发者意义重大，因为它削弱了 Pi 等编码工具中工具调用的可靠性，并表明针对特定工具（如 Claude Code 的编辑工具）的模型改进可能无意中损害与第三方工具的兼容性。 该问题具体涉及工具调用模式中的嵌套数组，模型会添加与模式不匹配的虚构键。Armin 推测，针对 Claude Code 内置编辑工具的强化学习训练可能导致新模型在其他工具的自定义编辑工具上表现异常。

rss · Simon Willison · 7月4日 22:53

**背景**: 工具调用（或称函数调用）允许 LLM 通过生成结构化参数来调用外部函数。许多编码代理（如 Pi 和 Claude Code）使用自定义编辑工具修改代码。Anthropic 的 Claude 模型内置了文本编辑器工具，最新模型通过强化学习训练以更有效地使用这些工具，这可能无意中使它们对第三方工具模式产生偏见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://letsdatascience.com/news/newer-claude-models-show-tool-calling-regression-6f029d5f">Newer Claude Models Show Tool-Calling Regression | Let's Data Science</a></li>
<li><a href="https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-8">What's new in Claude Opus 4.8 - Claude Platform Docs</a></li>
<li><a href="https://github.com/anthropics/claude-code/issues/64658">[Bug] Desktop app (Code tab) 1.9659.4: Opus 4.8 "tool call could not be parsed (retry also failed)" still reproduces · Issue #64658 · anthropics/claude-code</a></li>

</ul>
</details>

**标签**: `#LLM`, `#tool calling`, `#Anthropic`, `#Claude`, `#regression`

---

<a id="item-2"></a>
## [USAF：在消费级 GPU 上对 MoE 模型进行稀疏微调](https://www.reddit.com/r/MachineLearning/comments/1unl62q/if_your_gpu_can_run_inference_it_should_be_able/) ⭐️ 8.0/10

一种名为 USAF 的新开源方法允许在仅具备推理级内存的 GPU 上对混合专家（MoE）模型进行微调，已在 12GB AMD RX 6750 XT 上对 Qwen3-30B-A3B 进行了演示。 这一突破降低了微调大型 MoE 模型的门槛，使拥有消费级 GPU 的开发者和研究人员无需昂贵硬件即可定制最先进的模型。 USAF 通过仅训练稀疏专家权重和路由器来工作，无需 LoRA 等适配器，并在 GitHub 上以 Apache 2.0 许可证发布。

reddit · r/MachineLearning · /u/tsuyu122 · 7月4日 21:56

**背景**: 混合专家（MoE）模型每个 token 仅激活一部分参数，使得推理高效，但由于密集的梯度计算，微调时内存消耗大。传统的微调方法如全参数微调或 LoRA 仍需要大量 GPU 内存，常常超出消费级硬件的限制。USAF 利用 MoE 的稀疏激活模式，将微调期间的内存使用降低到与推理相当的水平。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2401.16405">[2401.16405] Scaling Sparse Fine-Tuning to Large Language Models</a></li>
<li><a href="https://arxiv.org/abs/2404.05567">[2404.05567] Dense Training, Sparse Inference: Rethinking ...</a></li>
<li><a href="https://llm24.net/model/qwen3-30b-a3b">Qwen 3 30 B A 3 B - qwen - Model Price & Provider Availability - LLM24</a></li>

</ul>
</details>

**标签**: `#fine-tuning`, `#MoE`, `#sparse training`, `#open source`, `#GPU memory`

---

<a id="item-3"></a>
## [BaryGraph：将关系作为知识图谱中的一等文档](https://www.reddit.com/r/MachineLearning/comments/1un3lsf/barygraph_knowledge_graph_where_every/) ⭐️ 8.0/10

BaryGraph 提出了 BaryEdge 概念，将知识图谱中的每个关系嵌入为独立的文档并拥有自己的向量，而不是仅仅作为节点之间的边。它还递归地堆叠 BaryEdge 形成 MetaBary 三元组，能够发现相距遥远的概念之间的结构桥梁。 这种方法解决了平面向量搜索的一个根本局限——它将关系仅视为点的邻近性，从而遗漏了跨域连接。通过将关系嵌入为一等对象，BaryGraph 能够发现标准 RAG 系统无法找到的结构桥梁，有望提升 AI 系统中的知识发现和推理能力。 BaryGraph 在本地运行，使用 MongoDB Community + mongot 和 nomic-embed-text（768 维）处理整个英文维基词典（660 万文档），单台工作站耗时 8-14 小时。BaryEdge 向量的计算公式为 bary_vector = normalize(q·v(CM1) + q·v(CM2) + (1−q)·v(type))，其中 q 是连接质量，v(type) 是关系类型的上下文嵌入。

reddit · r/MachineLearning · /u/adseipsum · 7月4日 08:24

**背景**: 知识图谱将实体表示为节点，关系表示为边，通常以三元组（主体、谓词、客体）形式存储。在标准向量搜索中，关系通过节点嵌入的邻近性推断，这丢弃了结构信息。BaryGraph 将每个关系视为独立的文档并拥有自己的嵌入，通过 MetaBary 三元组实现递归抽象，从而捕获高阶模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_graph">Knowledge graph - Wikipedia</a></li>
<li><a href="https://www.mongodb.com/products/platform/atlas-vector-search">Vector Search - MongoDB</a></li>
<li><a href="https://github.com/mongodb/mongot">GitHub - mongodb/mongot: MongoDB Search</a></li>

</ul>
</details>

**社区讨论**: Reddit 上的社区讨论内容充实，涉及嵌入公式和可扩展性的技术问题。作者积极参与，解释了设计选择并提供了基准测试结果。一些评论者对将 BaryGraph 应用于科学文献等特定领域表示兴趣，并质疑在更大数据集上的计算成本。

**标签**: `#knowledge graph`, `#embedding`, `#RAG`, `#vector search`, `#machine learning`

---

<a id="item-4"></a>
## [Z.ai 的 GLM-5.2 以极低成本挑战 AI 巨头](https://news.google.com/rss/articles/CBMi3wFBVV95cUxOSEhDc09QWVlENk5OVEpwaVlvclAtM2g3RlczSlJWZ3B3STdsaWdHVGQzZUZsOF9Cc0dwYno1MjU5QzlNNlRaOERhN0otc00tbEY0SDhPV3dTNVk2OWdXcGxtTXNWZ1NvbXFOSUJGRVZfOFUwaGRaSGdPRjZVS3BLM1F1U2hNVHpuTTQtR2hDTVBRNFRHM1lwN0Q3a3BwSU9INzlrU2xLWUFucFNIN0R4VFppX3FFTnFueG5nXzNLRzdlUWxRR3FTaFBhZFVTdHZLZnY4LU1waGJsYmIwSDFR?oc=5) ⭐️ 8.0/10

中国 AI 初创公司 Z.ai 发布了 GLM-5.2，这是一个大规模推理模型，声称能以远低于 OpenAI 和 Anthropic 最新模型的成本与之竞争。该模型拥有 100 万 token 的上下文窗口，在长周期智能体任务中表现优异。 这可能引发一场“迷你 DeepSeek 时刻”，证明高性能 AI 模型可以以极低成本构建和运行，从而可能颠覆定价格局并加速全球 AI 应用。这也凸显了中国在芯片限制下 AI 竞争力的提升。 GLM-5.2 在 PostTrainBench 上超越了 Opus 4.7 和 GPT-5.5，仅次于 Opus 4.8。Z.ai 还发布了 AI 编程工具 ZCode，其定价低于美国竞争对手。

google_news · Tekedia · 7月4日 06:37

**背景**: “DeepSeek 时刻”指的是中国 AI 公司 DeepSeek 以远低于西方模型的成本发布 R1 模型，震惊了整个行业。Z.ai 是一家中国 AI 独角兽，致力于将模型适配华为芯片，以应对美国出口限制。GLM-5.2 是其旗舰推理模型，专为复杂的多步骤任务设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/z-ai/glm-5.2">GLM 5 . 2 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://en.wikipedia.org/wiki/Z.ai">Z.ai - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI`, `#LLM`, `#China`, `#OpenAI`, `#Cost Efficiency`

---

<a id="item-5"></a>
## [谷歌 Gemini 3.5 Pro 据传 7 月发布，支持 200 万 token 上下文](https://news.google.com/rss/articles/CBMiigFBVV95cUxQQVVsXzV4a0l1T2wtV1RPM0N6bGJ2blNyWDlGTExkaFNuMGFNMnZmX2F4eVFiNF9UOTNGUzk0R3RTckRXV0dUMExzeGhJZEUtVHpWOGRmS0ZRUktLTlF4UWpubHA2M1gxbVlLZUhoWlZjWkxlUGpOWEpVc0trRFRIX00yQXl1ZUtuMWc?oc=5) ⭐️ 8.0/10

据新闻聚合网站报道，谷歌的 Gemini 3.5 Pro 预计将于 2026 年 7 月发布，拥有前所未有的 200 万 token 上下文窗口。这将是相比之前模型的重大升级，允许在单个提示中处理超大规模输入。 200 万 token 的上下文窗口将使开发者和研究人员能够一次性分析整个代码库、长视频或大量文档档案，极大提升生产力并开启新用例。这使谷歌成为长上下文 AI 领域的领导者，直接与 Claude Sonnet 4（100 万 token）等模型竞争。 该报道为推测性内容，未得到谷歌官方确认；来源是新闻聚合网站，无原创分析。谷歌的 Gemini 1.5 Pro 自 2024 年 6 月起已通过候补名单提供 200 万 token 上下文窗口，而 Gemini 3.5 Pro 在 2026 年 5 月的 Google I/O 上宣布，但仍处于有限预览阶段。

google_news · iNews Zoombangla · 7月4日 10:50

**背景**: 上下文窗口指语言模型一次能处理的文本量（以 token 计）。更大的上下文窗口使模型能处理更长的文档、对话或代码而不丢失信息。谷歌的 Gemini 模型以其多模态能力和长上下文支持著称，1.5 Pro 已支持 200 万 token。传闻中的 Gemini 3.5 Pro 将在此基础上提升推理能力和速度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developers.googleblog.com/en/new-features-for-the-gemini-api-and-google-ai-studio/">Gemini 1.5 Pro 2M context window, code execution capabilities, and Gemma 2 are available today - Google Developers Blog</a></li>
<li><a href="https://codersera.com/blog/gemini-3-5-pro-launch-guide-2026/">Gemini 3.5 Pro: Release Date, Specs & Pricing - codersera.com</a></li>

</ul>
</details>

**标签**: `#AI`, `#Google`, `#Gemini`, `#LLM`, `#context window`

---

<a id="item-6"></a>
## [仅用 500 字节通过 Deflate 压缩绘制世界地图](https://simonwillison.net/2026/Jul/4/building-a-world-map-with-only-500-bytes/#atom-everything) ⭐️ 7.0/10

Iwo Kadziela 在 Codex 辅助下开发了一种技术，仅用 445 字节数据生成可信的 ASCII 世界地图，利用 deflate 压缩和一段 JavaScript 代码，通过 fetch 获取 data URI 并使用 DecompressionStream API 解压。 这展示了现代 Web API（DecompressionStream、支持 data URI 的 fetch）与压缩技术的巧妙结合，实现了极致的数效率，激励开发者创造性地思考如何最小化 Web 应用中的负载大小。 压缩数据以 base64 编码的 deflate 流存储在 data URI 中，通过 fetch 获取并经过 DecompressionStream('deflate-raw')管道处理，生成 ASCII 地图。最终地图在<pre>元素中渲染，并内联设置了字体大小样式。

rss · Simon Willison · 7月4日 23:09

**背景**: Deflate 是一种结合 LZ77 和霍夫曼编码的无损压缩算法，广泛用于 PNG 和 ZIP 等格式。DecompressionStream API 是压缩流标准的一部分，允许在浏览器中解压流式数据。Data URI 允许将小型资源直接嵌入代码中，避免外部请求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DEFLATE_compression_algorithm">DEFLATE compression algorithm</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream">DecompressionStream - Web APIs | MDN</a></li>
<li><a href="https://en.wikipedia.org/wiki/Data_URI_scheme">data URI scheme - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论可能会称赞该方法的巧妙和技术优雅，一些评论会探讨替代压缩方法或此类技术的实际限制。可能还会就最小 ASCII 地图生成的新颖性与现有技术展开辩论。

**标签**: `#compression`, `#JavaScript`, `#ASCII art`, `#data URI`, `#web development`

---

<a id="item-7"></a>
## [提议：将语义压缩作为输入扩散以处理长上下文](https://www.reddit.com/r/MachineLearning/comments/1un63hv/proposal_use_semantic_compression_as_input/) ⭐️ 7.0/10

一位 Reddit 用户提出了一种名为“扩散式语义压缩”的新方法，通过渐进式语义压缩，让 LLM 以从粗到细的方式读取切片，从而处理超出其上下文窗口的会话。 该方法解决了 LLM 的一个关键限制——固定上下文窗口，通过保留检索和压缩方法遗漏的非局部信息，有望在不丢失整体结构的情况下实现连贯的长会话交互。 该方法将语义压缩作为噪声，逐步读取压缩程度较低的切片直至逐字块，并需要位置感知训练才能可靠工作；使用未训练的 Qwen2.5 7B 进行的初步测试显示部分成功，但尚未超越密集读取。

reddit · r/MachineLearning · /u/Bravo_Oscar_Zulu · 7月4日 10:56

**背景**: LLM 具有有限的上下文窗口（例如 4K-128K token），超出后无法直接处理输入。语义压缩在保留含义的同时减少文本，扩散模型通过从粗到细逐步细化来生成数据。该提议结合了这些想法以扩展有效上下文。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Semantic_compression">Semantic compression</a></li>
<li><a href="https://www.ibm.com/think/topics/context-window">What is a context window ? | IBM</a></li>

</ul>
</details>

**标签**: `#LLM`, `#context window`, `#semantic compression`, `#diffusion`, `#long-context`

---

<a id="item-8"></a>
## [DeusData/codebase-memory-mcp：高速代码智能 MCP 服务器](https://github.com/DeusData/codebase-memory-mcp) ⭐️ 7.0/10

DeusData 发布了 codebase-memory-mcp，一个高性能的 MCP 服务器，将代码库索引到持久化知识图谱中，为 AI 编码代理实现亚毫秒级查询和减少 99%的 token 消耗。 该工具显著降低了 AI 代码助手的 token 消耗和查询延迟，使开发者和 AI 代理的代码理解更加高效且经济。 它通过 Tree-sitter 解析和混合 LSP 类型解析支持 158 种语言，并以单个静态二进制文件分发，零依赖。平均仓库的全索引只需数秒，而 Linux 内核约需 3 分钟。

ossinsight · DeusData · 7月4日 23:16

**背景**: MCP（模型上下文协议）是一种允许 AI 模型与外部工具和数据源交互的协议。知识图谱存储关于代码实体及其关系的结构化信息，支持高效查询。该服务器结合两者，为 AI 编码代理提供快速、token 高效的代码智能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/DeusData/codebase-memory-mcp">DeusData/codebase-memory-mcp - GitHub</a></li>
<li><a href="https://deusdata.github.io/codebase-memory-mcp/">codebase-memory-mcp — Code Intelligence Knowledge Graph for ...</a></li>

</ul>
</details>

**标签**: `#code intelligence`, `#MCP`, `#knowledge graph`, `#developer tools`, `#C`

---

<a id="item-9"></a>
## [Nature 多智能体系统进展合集](https://news.google.com/rss/articles/CBMic0FVX3lxTE5yWkt1eEFRWnQyckJuQTJYaWdHTkx2ZTBrbTM1cFhFc3NmQkttTXB6Wk9UbGtZTGxIR216VGM1SVN3ZWVyM2x1bEVUaHQyQnM3TEVmd1l6RVRYajhJb1RGaXdvUVp1UlM3clBiWlZBeWw3Tk0?oc=5) ⭐️ 7.0/10

Nature 发布了一个名为“从理论到应用：多智能体系统/框架的进展”的合集，汇集了连接多智能体系统理论基础与实际应用的研究。 该合集凸显了多智能体系统在人工智能中日益增长的重要性，为研究人员和实践者提供了关于协作 AI 的先进框架和方法的综合视角。 该合集是 Nature 针对特定主题策划的论文分组的一部分，经过标准同行评审。它涵盖了理论进展和应用导向的框架，反映了该领域的成熟度。

google_news · Nature · 7月4日 03:08

**背景**: 多智能体系统涉及多个 AI 智能体协作、协商并共同解决复杂问题，模拟人类团队合作。像 n8n 和代码优先的 SDK 等框架使开发者能够构建此类系统。Nature 合集是研究论文的策划分组，而非独立期刊，旨在吸引专注的读者群。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nature.com/collections/jchigjbccb/collection-policies">Collection policies | Sustainable packaging - Nature</a></li>
<li><a href="https://www.springernature.com/gp/researchers/the-researchers-source/safeguarding-research-blogpost/safeguarding-springer-nature-collections/52264938">Safeguarding Springer Nature collections: the integrity ...</a></li>
<li><a href="https://blog.n8n.io/multi-agent-systems/">Multi-agent system: Frameworks & step-by-step tutorial</a></li>

</ul>
</details>

**标签**: `#multi-agent systems`, `#AI`, `#frameworks`, `#research`

---

<a id="item-10"></a>
## [IndiaMart 诉 OpenAI：AI 是中介还是原创者？](https://news.google.com/rss/articles/CBMirAFBVV95cUxNN1hoTExDZkljNWZZaDZ0YllpMXU2dXRfeHZ0Mlh3eHVEb2pRcTJMT2NJVUJBaDMyYy1COGNhckFlRFhsRnEwMFRSLXdicGZ5R19xYWJBVjZBRVBNSTRqNmVuZmFzd1FhMXFrSThVSmxaNzhIQ3h3UWtRUUFOSzNlQWU5SVFGMVBEVlAzdnF0ZmtuM092bzNBS0w2UVFtbTFuMFNZRUM3OE03akc40gG6AUFVX3lxTE5fOGh4VFprOFo3NkxrUmNlVWVZejktVmZyRldDZnM5VXp6eUpQcEQyQzFXZk10RENaUFVGYjZVb2ZqRVJkRWZQOTNobk1oWHd5QzZDSklmbEVDSTZVd2NfbG9DQUE4ODExMUYxXy1WMEJzMi1kQWE5b1phZU5pODdjbnktR2FGZktqYXAzQ0NoeHlKM3pFMDB4UzUwaURqU1ZGMzY0d0JOUjA2Ykl2YVFqbml0VHVYbUVtQQ?oc=5) ⭐️ 7.0/10

加尔各答高等法院在 IndiaMart 诉 OpenAI 案中裁定，ChatGPT 的生成性质初步使其成为《信息技术法》下的原创者而非中介，但最终认定有待审判。 该裁决可能为印度的人工智能责任树立先例，影响生成式 AI 平台如何被监管以及如何对版权侵权承担责任。 法院驳回了 IndiaMart 的临时禁令申请，区分了被动数字平台与生成式 AI 模型。该案将进入审判阶段，需技术及专家证据。

google_news · Bar and Bench · 7月4日 04:48

**背景**: IndiaMart 是一家 B2B 电商平台，起诉 OpenAI 声称 ChatGPT 生成了侵权内容。该案探讨生成式 AI 是否属于印度《信息技术法》下的“中介”（享有安全港保护）还是“原创者”（对内容负责）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.barandbench.com/view-point/generative-ai-intermediary-or-originator-vis-a-vis-indiamart-v-openai">Generative AI - Intermediary or originator vis-à-vis ...</a></li>
<li><a href="https://www.scconline.com/blog/post/2026/06/03/chatgpt-intermediary-originator-it-act-calcutta-high-court/">ChatGPT Is an Originator, Not an Intermediary: Calcutta HC ...</a></li>
<li><a href="https://www.medianama.com/2025/12/223-explained-indiamart-openai-lawsuit-visibility-ai-driven-web/">Explained - The IndiaMART vs OpenAI Lawsuit</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#copyright`, `#legal`, `#generative AI`, `#India`

---

<a id="item-11"></a>
## [报告称 AI 数据中心用水量远超披露水平](https://news.google.com/rss/articles/CBMiSEFVX3lxTE9mQXVQNE1Za1YyZFpjUjBLV0FEUmhZRlZ5MTNHT0hOZXBEQmFHLU5nYTdoNkUyX2ZkdDE2eWgydHMtY291YldYaQ?oc=5) ⭐️ 7.0/10

一份新报告指出，AI 数据中心的用水量可能远超亚马逊、微软和谷歌等科技巨头公开披露的数据，引发对环境影响的担忧。 这很重要，因为水资源短缺是一个日益严重的全球性问题，AI 基础设施的快速扩张可能会给当地供水带来压力，尤其是在干旱易发地区。这也对科技巨头的可持续性声明提出了质疑，并可能促使更严格的披露法规出台。 大型数据中心每天可消耗多达 500 万加仑的水，相当于一个 1 万至 5 万人口城镇的用水量。报告指出，发电和芯片制造中的间接用水通常被排除在披露数据之外。

google_news · MEXC · 7月4日 11:10

**背景**: 数据中心需要大量水来冷却服务器，尤其是处理 AI 工作负载时会产生巨大热量。用水效率（WUE）是衡量指标，蒸发冷却系统直接消耗水，而空气或制冷剂冷却用水较少但耗电更多。国际能源署（IEA）估计，数据中心 60%的用水来自发电等间接环节。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eesi.org/articles/view/data-centers-and-water-consumption">Data Centers and Water Consumption | Article | EESI</a></li>
<li><a href="https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/">How AI Demand Is Draining Local Water Supplies</a></li>

</ul>
</details>

**标签**: `#AI`, `#data centers`, `#environment`, `#water usage`, `#sustainability`

---

<a id="item-12"></a>
## [美光投资 93 亿美元在日本扩建 AI 内存芯片产能](https://news.google.com/rss/articles/CBMigAFBVV95cUxORl9OYjBGYWdpSFM0eHVQZUJRcl9QbWJQZHBSdmI3QWsyU25TQ0xkOFp2UGhyc1pBUXd3WXMtbTZaVWdCODNjYWtscWNDY3l3LUtEMXRGVG9OQVo0aUtJOGlXdnoxbnBLVV9JSHpWMmxrU0dPWDc5N1ZMVUFEaHpvNg?oc=5) ⭐️ 7.0/10

美光科技在日本广岛的工厂破土动工，投资 93 亿美元扩建，以生产用于 AI 应用的先进高带宽内存（HBM）芯片。 这项投资凸显了 AI 工作负载对专用内存芯片的激增需求，并巩固了日本在全球半导体供应链中的地位。 该扩建项目耗资 1.5 万亿日元（93 亿美元），专注于生产对 AI 数据中心至关重要的 HBM 芯片，工厂位于日本西部的广岛。

google_news · HOKANEWS.COM · 7月4日 15:38

**背景**: 高带宽内存（HBM）是一种通过垂直堆叠多个 DRAM 芯片来提供更快数据访问的内存芯片，对 AI 训练和推理至关重要。AI 热潮将内存需求从消费电子产品转向数据中心，导致芯片短缺。美光是少数几家生产 HBM 的公司之一，其他还有三星和 SK 海力士。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.japantimes.co.jp/business/2026/07/04/tech/micron-hiroshima-chip-plant/">Micron breaks ground on $9 billion western Japan plant expansion</a></li>
<li><a href="https://catenaa.com/industries/technology/micron-broke-ground-for-9bn-memory-chip-factory-in-japan/">Micron Broke Ground For $9Bn Memory Chip Factory In Japan</a></li>
<li><a href="https://theaicronicle.com/en/news/geopolitics/micron-japan-expansion-9-billion-geopolitics">Micron Breaks Ground on $9 Billion Western Japan Plant ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#semiconductors`, `#memory chips`, `#investment`, `#Japan`

---
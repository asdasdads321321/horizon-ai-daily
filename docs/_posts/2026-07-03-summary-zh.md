---
layout: default
title: "Horizon Summary: 2026-07-03 (ZH)"
date: 2026-07-03
lang: zh
---

> 从 59 条内容中筛选出 17 条重要资讯。

---

1. [理解才能参与：避免 AI 编码代理带来的认知债务](#item-1) ⭐️ 8.0/10
2. [Hierarchos：232M 参数递归记忆增强模型展现潜力](#item-2) ⭐️ 8.0/10
3. [中国 AI 模型 Z.ai 缩小与美国领先者的差距](#item-3) ⭐️ 8.0/10
4. [攻击链逃逸 Anthropic 的 Claude Cowork 沙箱](#item-4) ⭐️ 8.0/10
5. [Simon Willison 发布 llm-coding-agent 0.1a0](#item-5) ⭐️ 7.0/10
6. [使用 DSPy 评估并改进 Datasette Agent 的 SQL 提示词](#item-6) ⭐️ 7.0/10
7. [SentryCode：面向 AI 编码代理的开源内核级审计工具](#item-7) ⭐️ 7.0/10
8. [Codebase Memory MCP：亚毫秒级代码智能服务器](#item-8) ⭐️ 7.0/10
9. [rtk：Rust CLI 代理将 LLM 令牌消耗降低 60-90%](#item-9) ⭐️ 7.0/10
10. [大语言模型对 AI 基础设施构成新安全威胁](#item-10) ⭐️ 7.0/10
11. [AI 聊天机器人模仿人类权力动态和社会偏见](#item-11) ⭐️ 7.0/10
12. [智谱 AI 将 GLM-5.2 转化为智能体，挑战 Anthropic](#item-12) ⭐️ 7.0/10
13. [因果推断修复 LLM 数据混合偏移问题](#item-13) ⭐️ 7.0/10
14. [Anthropic 自研 AI 芯片挑战英伟达](#item-14) ⭐️ 7.0/10
15. [葡萄牙发布首个开源 AI 模型 Amália](#item-15) ⭐️ 7.0/10
16. [韩国公布 6448 亿美元量子蓝图](#item-16) ⭐️ 7.0/10
17. [Inception42 与微软推出阿拉伯语 AI 模型](#item-17) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [理解才能参与：避免 AI 编码代理带来的认知债务](https://simonwillison.net/2026/Jul/2/understand-to-participate/#atom-everything) ⭐️ 8.0/10

Simon Willison 在 AIE 大会上强调了 Geoffrey Litt 提出的“理解才能参与”概念，认为开发者必须深入理解 AI 生成的代码，以避免认知债务，并保持对创作过程的积极参与。 随着 AI 编码代理生成越来越大、越来越复杂的变更，开发者面临失去对代码库理解的风险，从而导致认知债务。这一框架为在 AI 辅助软件开发中保持人类主动性和代码质量提供了实用原则。 Geoffrey Litt 在 AIE 大会上提出了这一概念，他的演讲内容以 Twitter 线程形式发布。Simon Willison 推荐在 YouTube 上观看该演讲的录像，该录像来自大会的 300 多场演讲。

rss · Simon Willison · 7月2日 17:07

**背景**: 认知债务指的是对系统为何工作、其脆弱性、权衡以及更改的置信度缺乏理解的累积。与技术债务不同，技术债务使软件更难更改，而认知债务使开发者更难推理和安全地修改代码。随着 AI 编码助手能力增强，开发者可能在不完全理解的情况下接受代码，从而积累认知债务，损害长期可维护性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mathiesen.dev/writing/cognitive-debt">Cognitive Debt | Jarle Mathiesen</a></li>
<li><a href="https://www.thoughtworks.com/en-au/insights/blog/generative-ai/cognitive-demands-ai-novelty">The cognitive demands of AI novelty | Thoughtworks Australia</a></li>
<li><a href="https://www.anthropic.com/research/AI-assistance-coding-skills">How AI assistance impacts the formation of coding skills \ Anthropic</a></li>

</ul>
</details>

**标签**: `#AI-assisted coding`, `#cognitive debt`, `#software engineering`, `#human-AI collaboration`

---

<a id="item-2"></a>
## [Hierarchos：232M 参数递归记忆增强模型展现潜力](https://www.reddit.com/r/MachineLearning/comments/1um123n/hierarchos_preliminary_findings_from_a_232m/) ⭐️ 8.0/10

研究人员发布了 Hierarchos，一个 232M 参数的递归记忆增强语言模型，它结合了 RWKV 骨干网络、分层管理器/工作器循环、可微分的基于槽的长时记忆以及确定性后缀自动机，并在 RTX 6000 Blackwell GPU 上从头训练。 这项工作证明了混合非 Transformer 架构可以稳定训练并保持指令连贯性，挑战了基于 Transformer 的模型的主导地位，并可能带来更参数高效的替代方案。 关键的工程修复包括对齐训练/推理的漂移状态重置、切换到只读 LTM 训练模式以避免监督记忆的拐杖，以及钳制 RWKV 通道混合激活以防止 NaN 梯度。

reddit · r/MachineLearning · /u/PhysicsDisastrous462 · 7月3日 01:48

**背景**: 现代大型语言模型主要基于 Transformer 架构，虽然扩展性好但计算成本高。像 RWKV 这样的递归架构无需注意力机制即可高效处理序列，而记忆增强和分层推理旨在提高参数效率。Hierarchos 探索在小规模模型中结合这些思想。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/pdf/2406.19369">Mamba or RWKV : Exploring High-Quality and</a></li>
<li><a href="https://www.rwkv.com/">RWKV Language Model</a></li>
<li><a href="https://en.wikipedia.org/wiki/Suffix_automaton">Suffix automaton - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Reddit 上的讨论内容充实，评论者询问了训练稳定性、记忆机制以及与其他非 Transformer 模型的比较。作者积极参与，对修复措施和未来计划进行了澄清。总体情绪积极，认可了工程的严谨性，同时指出模型规模较小。

**标签**: `#machine learning`, `#language models`, `#recurrent architectures`, `#memory augmentation`, `#research`

---

<a id="item-3"></a>
## [中国 AI 模型 Z.ai 缩小与美国领先者的差距](https://news.google.com/rss/articles/CBMiwwFBVV95cUxPRHN2T0NPR3ZJMWZheVBDbUxxS1pBbHpfSjBmSTNseVFEU0FUcnc1OFJJNzNGZVB1M1ZIdExGb0NfTWpKYnhTSm8xRUhzbm14RWRNRWJyaWctbjVLWmdRM0d1UjFBalpyNDJoTDNwVldrRGxGN1U0aUtUcEp3a2t1aDYxdFpfRFMzZDZodUNNdEJpMkoyOWFYakZLb1NrZ0M4a01qQW9HTkFUQkltaGNjWk9CcXYxUGdndmNPclNEOVlxVFk?oc=5) ⭐️ 8.0/10

中国初创公司 Z.ai 发布了一款新 AI 模型，其性能几乎与 Anthropic 的 Fable 和 Mythos 模型以及 OpenAI 的产品相当，但成本低得多。这一进展被称为“迷你 DeepSeek 时刻”，并引起了西方初创公司的关注。 这标志着 AI 格局的重大转变，中国模型在性能上与美国领先者竞争，同时在价格上更具优势。这给美国 AI 公司带来压力，要求它们证明其高成本的合理性，并可能加速中国 AI 在全球的采用。 该模型是开放权重的，意味着其参数公开可用，且使用成本远低于同类美国模型。前美国 AI 负责人 David Sacks 指出，它“与 OpenAI 和 Anthropic 当前可用的模型一样好”。

google_news · Reuters · 7月2日 07:40

**背景**: 另一家中国 AI 初创公司 DeepSeek 在去年初以廉价但强大的模型震惊市场，开创了平价中国 AI 的趋势。此后，全球消费者面临选择：价格较低的中国产品，还是 OpenAI 和 Anthropic 更昂贵的美国模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tribune.com.pk/story/2616094/a-new-inexpensive-chinese-ai-model-is-catching-up-with-anthropic-openai-on-their-home-turf">A new, inexpensive Chinese AI model is catching up with Anthropic ...</a></li>
<li><a href="https://www.nytimes.com/2026/06/25/technology/zai-china-artificial-intelligence-models.html">Chinese A . I . Models Close the Gap With Anthropic and OpenAI</a></li>
<li><a href="https://enterpriseai.economictimes.indiatimes.com/news/industry/a-new-inexpensive-chinese-ai-model-is-catching-up-with-anthropic-openai-on-their-home-turf/132140542">Making AI Work: A new, inexpensive Chinese AI model is catching up with Anthropic, OpenAI on their home turf, ETEnterpriseai</a></li>

</ul>
</details>

**标签**: `#AI`, `#Chinese AI`, `#competition`, `#industry news`

---

<a id="item-4"></a>
## [攻击链逃逸 Anthropic 的 Claude Cowork 沙箱](https://news.google.com/rss/articles/CBMipgFBVV95cUxQRTktVTg1X2w2ZGl4OXpScTZGcjFiS0Qtd0JWZ2lKX0pEQUVyUndBa2hwQng5UEhfa0t2cDVlUnNNbHA0cnljTFVsUFE1aHkzX044R2dSS2hxVG1YQXI4czRaMHlERThXQ1liWEhNdmFJZy1UeVZEd000bURPay1sN0RGWGE2aG1hckhNbVhDaXVxcElXV2tLdjVxOVkzSWJzQk5Ud09B?oc=5) ⭐️ 8.0/10

研究人员披露了一种攻击链，成功逃逸了 Anthropic 的 Claude Cowork 沙箱，展示了该 AI 助手执行环境中的安全漏洞。 这一发现凸显了执行真实计算机操作的 AI 助手环境中的重大安全风险，可能影响企业采用和对 AI 安全措施的信任。 该攻击链可能涉及将多个漏洞串联，从沙箱内代码执行发展到主机级入侵，类似于经典的沙箱逃逸技术。

google_news · SC Media · 7月2日 13:48

**背景**: Claude Cowork 是一款 AI 助手，能够在沙箱环境中执行用户计算机上的操作，如文件操作和运行代码。沙箱逃逸是指攻击者突破此受限环境，获得对主机系统的未授权访问。此类漏洞至关重要，因为它们可能导致系统完全被攻陷。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.huntress.com/cybersecurity-101/topic/sandbox-escape">What Is Sandbox Escape in Cybersecurity?</a></li>
<li><a href="https://cymulate.com/blog/the-race-to-ship-ai-tools-left-security-behind-part-1-sandbox-escape/">The Race to Ship AI Tools Left Security Behind. Part 1: Sandbox Escape</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#security`, `#Anthropic`, `#sandbox escape`, `#vulnerability`

---

<a id="item-5"></a>
## [Simon Willison 发布 llm-coding-agent 0.1a0](https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything) ⭐️ 7.0/10

Simon Willison 发布了 llm-coding-agent 0.1a0，这是一个基于其 LLM 库构建的 alpha 版编码代理，该库已演变为代理框架。该代理可以读写文件、执行命令和搜索代码，并可通过 PyPI 安装。 此次发布展示了 LLM 库向完整代理框架的转变，提供了一个可轻松集成到 Python 工作流中的实用编码代理。它为构建更复杂的 AI 辅助开发工具奠定了基础。 该代理包含 edit_file、execute_command、list_files、read_file 和 search_files 等工具，并通过 CodingAgent 类提供 Python API。它使用 Claude Code 开发，并遵循测试驱动开发方法。

rss · Simon Willison · 7月2日 19:33

**背景**: LLM 代理框架是允许开发者构建能够执行编码、文件操作和命令执行等任务的自主 AI 代理的工具。Claude Code 是 Anthropic 的代理编码工具，启发了该项目。Simon Willison 的 LLM 库是一个流行的 Python 工具，用于与大型语言模型交互。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/kaushikb11/awesome-llm-agents">GitHub - kaushikb11/awesome-llm-agents: A curated list of awesome LLM agents frameworks. · GitHub</a></li>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://code.claude.com/docs/en/overview">Overview - Claude Code Docs</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#coding agent`, `#LLM`, `#Python`, `#Simon Willison`

---

<a id="item-6"></a>
## [使用 DSPy 评估并改进 Datasette Agent 的 SQL 提示词](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything) ⭐️ 7.0/10

Simon Willison 使用 DSPy 框架评估并改进了 Datasette Agent（一个面向 Datasette 的 AI 助手）的 SQL 系统提示词。他让 Claude Fable 5 使用 GPT-4.1 mini 和 nano 运行实验，发现了具体的提示词缺陷，例如因缺少模式细节而导致的列名猜测问题。 这展示了一种使用 DSPy 进行提示词优化的实用自动化工作流程，可帮助开发者系统性地提升 AI 代理的性能。它突显了将 DSPy 等研究工具与基于 LLM 的代理相结合，如何能带来更可靠、更高效的 AI 系统。 该实验使用 Claude Fable 5 来编排 DSPy 评估，测试了 GPT-4.1 mini 和 nano 模型。一个关键发现是模式列表仅包含表名，导致代理猜测列名并进入错误重试循环；修复方法是在提示词中包含列名，或软化关于调用 describe_table 的建议。

rss · Simon Willison · 7月2日 18:25

**背景**: DSPy（声明式自改进 Python）是一个通过组合结构化签名而非编写脆弱提示词来构建 AI 系统的框架。Datasette Agent 是一个基于 LLM 的助手，用于 Datasette（一个探索和发布数据的工具）。Claude Fable 5 是 Anthropic Mythos 系列中经过安全调优的模型，面向通用用途。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dspy.ai/">DSPy</a></li>
<li><a href="https://github.com/stanfordnlp/dspy">GitHub - stanfordnlp/ dspy : DSPy : The framework for...</a></li>
<li><a href="https://agent.datasette.io/">Datasette Agent: an AI assistant for Datasette to help ...</a></li>

</ul>
</details>

**标签**: `#DSPy`, `#prompt engineering`, `#AI agents`, `#Datasette`, `#SQL`

---

<a id="item-7"></a>
## [SentryCode：面向 AI 编码代理的开源内核级审计工具](https://www.reddit.com/r/MachineLearning/comments/1ul7ap2/sentrycode_realtime_auditor_honeytokens_for_ai/) ⭐️ 7.0/10

SentryCode 是一款开源的、内核级的行为审计工具，它利用蜜令（honeytokens）和隐蔽信道检测技术，对 AI 编码代理进行实时监控，防范隐私泄露。 随着 AI 编码代理日益普及，其可能进行的遥测和环境扫描引发了严重的隐私担忧；SentryCode 提供了一种新颖的、本地优先的解决方案，无需依赖外部服务即可检测和防止此类数据泄露。 该工具记录文件、网络和提示活动，使用蜜罐令牌实现零误报的数据泄露检测，检测隐写加密的隐蔽信道，提供防篡改审计日志，并支持策略执行——所有功能均在本地运行，无需外连。

reddit · r/MachineLearning · /u/cyh-c · 7月2日 03:48

**背景**: AI 编码代理（例如用于代码生成的代理）可能无意或恶意地收集用户环境中的敏感数据。蜜令（honeytokens）是诱饵数据（如假的 API 密钥），在被访问时触发警报；隐蔽信道是隐藏的通信路径，可用于泄露数据。内核级审计在操作系统内核层运行，能深入监控系统调用和文件操作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.securityhive.io/blog/honeytokens-in-cybersecurity-what-they-are-and-why-they-matter">Understanding Honeytokens: A Key to Proactive Cybersecurity</a></li>
<li><a href="https://en.wikipedia.org/wiki/Covert_channel">Covert channel - Wikipedia</a></li>
<li><a href="https://chanakar.substack.com/p/linux-security-superpower-auditd-guide">Mastering auditd: The Essential Guide to Linux Kernel-Level Auditing and Security</a></li>

</ul>
</details>

**标签**: `#AI Security`, `#Open Source`, `#Privacy`, `#Auditing`, `#Honeytokens`

---

<a id="item-8"></a>
## [Codebase Memory MCP：亚毫秒级代码智能服务器](https://github.com/DeusData/codebase-memory-mcp) ⭐️ 7.0/10

DeusData 发布了 codebase-memory-mcp，一个高性能的 MCP 服务器，能将整个代码库索引为持久化知识图谱，实现亚毫秒级查询，并比传统方法减少 99% 的 token 使用。 该工具大幅降低了基于 LLM 的代码智能的 token 成本和查询延迟，使实时分析大型代码库成为可能。它通过提供即时、上下文感知的代码理解，使使用 AI 编程助手的开发者受益。 该服务器是一个无依赖的单一静态二进制文件，支持 158 种编程语言，平均仓库索引时间在毫秒级。它使用模型上下文协议（MCP）与 AI 助手集成。

ossinsight · DeusData · 7月3日 03:01

**背景**: MCP（模型上下文协议）是一种开放协议，使 AI 模型能够与外部工具和数据源交互。知识图谱将代码结构表示为节点（函数、类）和边（依赖关系），从而实现高效检索。传统的 LLM 代码索引通常消耗大量 token 且速度缓慢。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/DeusData/codebase-memory-mcp">GitHub - DeusData/codebase-memory-mcp: High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.</a></li>
<li><a href="https://github.com/modelcontextprotocol/servers">GitHub - modelcontextprotocol/ servers : Model Context Protocol Servers</a></li>

</ul>
</details>

**标签**: `#code-intelligence`, `#MCP`, `#knowledge-graph`, `#developer-tools`, `#C`

---

<a id="item-9"></a>
## [rtk：Rust CLI 代理将 LLM 令牌消耗降低 60-90%](https://github.com/rtk-ai/rtk) ⭐️ 7.0/10

rtk-ai/rtk 是一个热门的 GitHub 仓库，提供了一个基于 Rust 的 CLI 代理，旨在将常见开发者命令的 LLM 令牌消耗降低 60-90%。它是一个零依赖的单一 Rust 二进制文件。 该工具直接解决了开发者使用 LLM API 的高成本问题，可能节省大量资金并支持更长的 AI 编码会话。通过在输出到达 AI 上下文之前压缩命令输出，它优化了令牌使用，无需任何配置更改。 rtk 支持 14 种 AI 编码工具，并在代理支持命令拦截的情况下将 shell 命令重写为 rtk 等效命令以节省令牌。该工具过滤并压缩命令输出，在常见操作上实现 60-90%的令牌减少。

ossinsight · rtk-ai · 7月3日 03:01

**背景**: LLM 以称为令牌的块处理文本，API 成本基于令牌使用量。开发者经常运行产生冗长输出的命令，当这些输出被输入到 LLM 上下文窗口时会消耗大量令牌。rtk 作为一个代理拦截这些输出，压缩它们以减少令牌数量，同时保留关键信息。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/rtk-ai/rtk">GitHub - rtk-ai/rtk: CLI proxy that reduces LLM token ...</a></li>
<li><a href="https://www.rtk-ai.app/">RTK — Rust Token Killer</a></li>
<li><a href="https://redis.io/blog/llm-token-optimization-speed-up-apps/">LLM Token Optimization: Cut Costs & Latency in 2026 - Redis</a></li>

</ul>
</details>

**标签**: `#LLM`, `#Rust`, `#CLI`, `#cost optimization`, `#proxy`

---

<a id="item-10"></a>
## [大语言模型对 AI 基础设施构成新安全威胁](https://news.google.com/rss/articles/CBMiygFBVV95cUxOTms5SHd4dkZGT3QwaGY0Z3dFZjFGeDBBYlh1Y0I5bmE2NGpIejlCV25WOXJXV015X1JZdzA3Y3lJNkk2eHowaFdZM2NwcGJJa1piUGNQOWZqSU5rX3l0UDBfTXNCRlhKakp1dFg5dkhRSFlKT0oxWVFvU2Q1Tjh5T0R2bTNJYlpnbm5YMWFFT3pEclpOV2JCSDhmelRCU29RWktGZjkwc1pUWkxPNXJkY0ZzY1htaHNRZnJqSGlfTFZIWTlsMEhhVF9n?oc=5) ⭐️ 7.0/10

《小型战争杂志》近期一篇文章指出，大语言模型（LLM）正被武器化用于攻击 AI 基础设施，例如利用 SSRF 漏洞和配置错误的 API 端点。 这标志着 AI 从防御用途转向进攻性网络操作，给部署 AI 系统的组织带来新风险。这一趋势凸显了针对 AI 的强健安全措施的迫切需求。 攻击向量包括服务器端请求伪造（SSRF）滥用、暴露的 LLM 端点以及 API 密钥聚合风险。文章指出，基础设施中间件层在安全调查中常被忽视。

google_news · Small Wars Journal · 7月2日 17:17

**背景**: AI 基础设施指支持 AI 工作负载的硬件和软件栈，包括 LLM 端点、API 和云服务。随着 LLM 越来越多地集成到企业系统中，攻击者正日益瞄准这些组件以获取未授权访问或破坏运营。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://colonelserver.com/blog/ai-infrastructure-attacks/">AI Infrastructure Attacks Detected Targeting LLM And SSRF...</a></li>
<li><a href="https://plurilock.com/blog/your-llm-infrastructure-is-already-on-attacker-target-lists/">Your LLM Infrastructure Is Already on Attacker Target Lists - Plurilock</a></li>
<li><a href="https://snailsploit.com/ai-security/ai-gateway-threat-model/">AI Gateway Threat Model: 8 Attack Vectors | SnailSploit</a></li>

</ul>
</details>

**标签**: `#LLM`, `#AI security`, `#cybersecurity`, `#AI infrastructure`

---

<a id="item-11"></a>
## [AI 聊天机器人模仿人类权力动态和社会偏见](https://news.google.com/rss/articles/CBMiuwFBVV95cUxNOXpXLUlUQTRMa1M4eHpMaEJSSG1HUmVSYkpWbkJyQm9wejBQZWVKVzg2eWY1Nk83bkUxcjA4YnVVQ2RnNmlPWllKa3hPc3RkMVpzUV9oUzNwclNQdy0yOXl2VkQ1a3NBYUpVUXh4eGtjYkcwV1ladmc3cHZrNmZiY2YyTUpkaTlYZ2JQTUR5dFptU0xhNm9NQS1tNmFVM0ZhX21tVUszQ1V1d29mdmxwalZtTGQyaWcxRWJr?oc=5) ⭐️ 7.0/10

PsyPost 发表的一项研究表明，AI 聊天机器人在对话中复制了人类的权力动态和社会偏见，可能加剧社会不平等。 这一发现引发了对 AI 公平性和伦理的严重担忧，因为聊天机器人越来越多地用于客服、治疗和教育等领域，有偏见的互动可能伤害弱势群体。 该研究分析了与流行聊天机器人的对话，发现它们表现出类似人类互动的权力不对称和刻板印象，常常顺从地位较高的用户或使用有偏见的语言。

google_news · PsyPost · 7月2日 20:13

**背景**: AI 聊天机器人是在包含固有社会偏见和权力动态的海量人类文本数据上训练的。如果没有仔细缓解，模型会学习并复现这些模式。先前的研究已记录了 NLP 模型中与种族、性别和残疾相关的偏见，但这项研究专门考察了对话中的权力动态。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://link.springer.com/article/10.1007/s00146-024-02053-4">Understanding model power in social AI | AI & SOCIETY | Springer Nature Link</a></li>
<li><a href="https://aclanthology.org/2020.acl-main.487/">Social Biases in NLP Models as Barriers for Persons with Disabilities - ACL Anthology</a></li>
<li><a href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00425/108201/Quantifying-Social-Biases-in-NLP-A-Generalization">Quantifying Social Biases in NLP: A Generalization and Empirical Comparison of Extrinsic Fairness Metrics | Transactions of the Association for Computational Linguistics | MIT Press</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#bias`, `#chatbots`, `#social dynamics`, `#NLP`

---

<a id="item-12"></a>
## [智谱 AI 将 GLM-5.2 转化为智能体，挑战 Anthropic](https://news.google.com/rss/articles/CBMiwwFBVV95cUxNVUhhS3o1ak5kaEhBcTFBN2tXRndDTnNvUndjakFVUnV4bHpsVU5FVjdaOTA2UDlsX04tcHhZWmVPMm53ZkhZaWxDQy1KVUVfekpkWmh2dm56RzlfX09mcmVOMmF0NFg2XzQ1MWIycGg1WlRKNWxRRzgyUVhWcVYzcXFVSEdQV05UZTBqUEtKdWxpSmU1Z0FFOHkwVVF0MVBlWGVFV3QxN3gzYmVKbzVSc2luZHM4TjVQQjdFSXFyTGZxY0XSAcMBQVVfeXFMTVVIYUt6NWpOZGhIQXExQTdrV0Z3Q05zb1J3Y2pBVVJ1eGx6bFVORVY3WjkwNlA5bF9OLXB4WVplTzJud2ZIWWlsQ0MtSlVFX3pKZFpodnZuekc5X19PZnJlTjJhdDRYNl80NTFiMnBoNVpUSjVsUUc4MlFYVnFWM3FxVUhHUFdOVGUwalBLSnVsaUplNWdBRTh5MFVRdDFQZVhlRVd0MTd4M2JlSm81UnNpbmRzOE41UEI3RUlxckxmcWNF?oc=5) ⭐️ 7.0/10

智谱 AI 发布了一款新工具，将其 GLM-5.2 模型转化为 AI 智能体，加剧了与 Anthropic 的竞争。 此举使智谱 AI 成为 AI 智能体领域的有力竞争者，直接挑战 Anthropic 的产品，并可能加速智能体 AI 在企业及开发者工作流中的采用。 GLM-5.2 是智谱 AI 面向长周期任务的旗舰模型，拥有 100 万 token 的上下文窗口，而新智能体工具使其能够自主执行复杂的多步骤任务。

google_news · South China Morning Post · 7月2日 10:00

**背景**: AI 智能体是能够利用大语言模型独立规划和执行任务的系统。智谱 AI 是中国领先的人工智能公司，一直致力于开发 GLM 系列模型，GLM-5.2 是其最新用于编程和长周期任务的模型。Anthropic 是主要竞争对手，以其 Claude 智能体能力著称。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openlm.ai/glm-5.2/">GLM-5.2 - openlm.ai</a></li>
<li><a href="https://github.com/zai-org/GLM-5">GitHub - zai-org/GLM-5: GLM-5: From Vibe Coding to Agentic ...</a></li>
<li><a href="https://chozan.co/zhipu-ai/">Zhipu AI Explained: GLM Capabilities, Use Cases, and Risks</a></li>

</ul>
</details>

**标签**: `#AI`, `#agents`, `#Zhipu AI`, `#GLM-5.2`, `#Anthropic`

---

<a id="item-13"></a>
## [因果推断修复 LLM 数据混合偏移问题](https://news.google.com/rss/articles/CBMizAFBVV95cUxOdUQ3LTloSDE4VmRrbTlSLWFDZHVKUElySml2Qm9xYXVXSTIwLUxyZkl1ZGcyZ3J4ZWxnYXk4Qkh0cmdkQkdCVTd5eTN3TTVtbDBaUkRjNkRJd0NNZE5VX2dBaG1JLWJCbUMzeGIycFFTaXFLRENHUlo0aUp2RTB4WXA3Q3lMd1MyT0pDQ29rT2x0VGg3UVV5ZENQZEk0Z3JqSDlPWDdsbXFMQ3dVZk1wdXlJQXI4RzNrc3g4c2lXclU1VktkMFU3OUI4dDQ?oc=5) ⭐️ 7.0/10

研究人员发现，训练数据池的偏移会破坏 LLM 的最优数据混合，并提出了一种名为 CausalMix 的因果推断方法来解决这一问题。 这很重要，因为维持最优数据混合对 LLM 性能至关重要，而当前方法在训练数据分布随时间变化时会失效。因果推断方法提供了一种更稳健、自适应的解决方案。 CausalMix 将数据混合优化视为因果处理估计问题，使其能够适应训练池的偏移。在实验中，它优于现有的基于代理模型的方法。

google_news · Tech Times · 7月2日 22:25

**背景**: 在 LLM 训练中，数据混合决定了用于训练模型的不同数据源（如网页文本、书籍）的比例。近期方法使用较小的代理模型来优化这些混合权重，但它们假设训练池是静态的，而实际情况往往并非如此。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/pdf/2607.01104">CausalMix: Data Mixture as Causal Inference for Language Model...</a></li>
<li><a href="https://www.techtimes.com/articles/319548/20260702/llm-data-mixture-breaks-when-training-pools-shift-causal-inference-offers-fix.htm">LLM Data Mixture Breaks When Training Pools Shift: Causal Inference...</a></li>

</ul>
</details>

**标签**: `#LLM`, `#training data`, `#causal inference`, `#machine learning`

---

<a id="item-14"></a>
## [Anthropic 自研 AI 芯片挑战英伟达](https://news.google.com/rss/articles/CBMidEFVX3lxTFA3djFPUE00M1A0em1ONW50ckhTQ0NpXzhPTmdHaEFlSm1iS3FDSXcyMmZhMnhoMXFFVlJRSkFPV1NGMzQzYUpPVmdUZWpPNHhpZlljT0gtUndLUkJ6SktSaEZlYnlIWVlrYkJnY2VRVmZoQ3FD?oc=5) ⭐️ 7.0/10

Anthropic 正在自研 AI 芯片以减少对英伟达的依赖，并考虑由三星代工生产。 此举可能重塑 AI 硬件格局，削弱英伟达的主导地位，并实现 AI 训练和推理供应链的多元化。 据报道，Anthropic 处于芯片设计的早期阶段，并正在评估三星的 3nm GAA 工艺进行生产。这些芯片预计将针对 Anthropic 的 AI 模型进行优化。

google_news · Businesskorea · 7月3日 01:32

**背景**: 目前，大多数 AI 公司依赖英伟达的 GPU 进行训练和推理。开发定制芯片使 Anthropic 等公司能够优化性能和成本，类似于亚马逊和苹果的做法。三星代工是一家主要的半导体制造商，提供 3nm GAA 等先进制程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Samsung_Foundry">Samsung Foundry</a></li>
<li><a href="https://semiconductor.samsung.com/foundry/">Foundry Overview | Samsung Semiconductor Global</a></li>
<li><a href="https://semiconductor.samsung.com/foundry/about-samsung-foundry/company-info/">Company Info | About Samsung Foundry | Samsung Semiconductor Global</a></li>

</ul>
</details>

**标签**: `#AI hardware`, `#Anthropic`, `#Nvidia`, `#semiconductors`, `#Samsung`

---

<a id="item-15"></a>
## [葡萄牙发布首个开源 AI 模型 Amália](https://news.google.com/rss/articles/CBMi6wFBVV95cUxPRE5UWGFMMHhLSWdxZUdQVzBaU2plTGtZVnA1a2lCRC1ib0Q2NzVGRDJkbmhFVGdyb0NlRHhwaFVjb1l0bWJzWXZ3dGpWVmZlUTA5WWE4YnlZXzFLbnJNQkcxblV1REh5anpmanRoZC12WlBrYkhOb1RDLVI4cXh3a3ZFTU5TWmlxZ1M3dVMzUzVRM3JGclg1MzBrb3RlX2NINmY1ZDR2M0xFTHp2dFR2UmRlWUtvaF9LTHkzcW05UnlBUzV6MEZnOE5JcE1LV1lqQ25tNjM2ellMVThUQTY5SjJKVjhER0NOQlI00gHrAUFVX3lxTE9ETlRYYUwweEtJZ3FlR1BXMFpTamVMa1lWcDVraUJELWJvRDY3NUZEMmRuaEVUZ3JvQ2VEeHBoVWNvWXRtYnNZdnd0alZWZmVRMDlZYThieVlfMUtuck1CRzFuVXVESHlqemZqdGhkLXZaUGtiSE5vVEMtUjhxeHdrdkVNTlNaaXFnUzd1UzNTNVEzckZyWDUzMGtvdGVfY0g2ZjVkNHYzTEVMenZ0VHZSZGVZS29oX0tMeTNxbTlSeUFTNXowRmc4TklwTUtXWWpDbm02MzZ6WUxVOFRBNjlKMkpWOERHQ05CUjQ?oc=5) ⭐️ 7.0/10

葡萄牙发布了其首个开源 AI 模型 Amália，该模型专为欧洲葡萄牙语设计，并得到政府支持。 此次发布支持了欧洲推动数字主权的更广泛努力，减少对非欧洲 AI 基础设施的依赖，并促进本地创新。 Amália 被设计为公共机构和企业的基座模型，其模型、数据集和源代码均已开放发布。

google_news · ETEnterpriseai.com · 7月2日 13:50

**背景**: 欧洲国家正加大对本土 AI 的投资以实现技术主权，欧盟委员会近期提出的技术主权一揽子计划也强调了这一点。像 Amália 这样的开源模型使政府和企业能够在不依赖非欧洲供应商专有平台的情况下构建应用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eweek.com/news/portugal-open-ai-model-europe-push-emea/">Portugal Launches ‘Amália,’ an Open - Source AI Model Built... | eWeek</a></li>
<li><a href="https://www.opensourceforu.com/2026/06/portugal-open-sources-national-amalia-ai-model/">Portugal Open Sources National Amália AI Model - Open Source ...</a></li>
<li><a href="https://digg.com/tech/it1i0wzy">Pleias co-founder Pierre-Carl Langlais says Portugal 's first...</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一：一些人称赞这是迈向欧洲技术主权的坚实一步，而另一些人则嘲笑其质量低下或认为这是徒劳的追赶。

**标签**: `#AI`, `#open-source`, `#Europe`, `#digital sovereignty`

---

<a id="item-16"></a>
## [韩国公布 6448 亿美元量子蓝图](https://news.google.com/rss/articles/CBMidkFVX3lxTE1Vc2IyTmtENTZrUER2ZVFvTWxZbFhVTDV3OXpQV19sRWpfOVEwNXFTWGh4VGY1X0l2dWdsQXVDN1lCa0VnS1YtWXdjWE5SNHF3NjFCRzY1Nk5zWUZ6NEROcXdyb21pRTBxR3RNUU1lZ05ISlFUMFE?oc=5) ⭐️ 7.0/10

韩国副总理宣布了一项约 6448 亿美元（200 万亿韩元）的量子技术投资蓝图，通过 2030 年将产业、学术界和研究联系起来。 这笔巨额投资表明韩国致力于到 2035 年成为全球量子领导者，可能加速量子计算、网络和传感领域的突破。 该蓝图是韩国第六次基本计划的一部分，该计划为公共研发拨款超过 200 万亿韩元（约 1288 亿美元），其中 60 万亿韩元集中于包括量子在内的 55 项核心战略技术。

google_news · finance.biggo.com · 7月2日 04:55

**背景**: 韩国一直在积极建设其量子生态系统，包括《量子技术产业法》以及与 IonQ 和 BTQ Technologies 等公司的合作。该国旨在到 2035 年建立量子素养和主权。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thequantuminsider.com/2026/06/30/south-korea-commits-200-trillion-won-to-rd-quantum-listed-as-strategic-tech/">South Korea Commits 200 Trillion Won to R&D, Quantum Listed as Strategic Tech</a></li>
<li><a href="https://quantumcomputingreport.com/south-korea-formulates-sixth-basic-plan-to-funnel-200-trillion-won-128-8-billion-usd-into-massive-rd-strategy-through-2030/amp/">South Korea Formulates Sixth Basic Plan to Funnel 200 Trillion Won ($128.8 Billion USD) into Massive R&D Strategy through 2030 - Quantum Computing Report</a></li>

</ul>
</details>

**标签**: `#quantum computing`, `#government investment`, `#South Korea`, `#technology policy`

---

<a id="item-17"></a>
## [Inception42 与微软推出阿拉伯语 AI 模型](https://news.google.com/rss/articles/CBMixAFBVV95cUxOSG9YWThpTDBaYVBmR1NXTkpTYm1qT2pMVG02T015bDE4NnBsM1JRSXFSZS1tSGYwa3ZxTnJoR3lCVHZYQUxnWVpOQTBycjBsblpSMjNSeEc1alkwOGdBYzVvNEZKNkVVYmtOdzNiNnQ1SExOOVZGRkZMZ0JFR2xiMVpEbWFjM2hXSEJ5VUFQM3YwcVZKTmJCblRmY0FaWm4xdVdGTzV3NFJCdW5nYVMwOG8zYVV3RkhWcE9ZcmZlY1VwV213?oc=5) ⭐️ 7.0/10

Inception42 与微软合作推出了一款新的阿拉伯语 AI 模型，旨在推动阿拉伯语自然语言处理的发展。 此次发布填补了阿拉伯语（使用最广泛的语言之一）NLP 资源的重大空白，并可能为全球阿拉伯语用户提供更好的 AI 驱动服务。 该模型基于微软 Azure 基础设施构建，并利用 Inception42 在主权 AI 方面的专业知识，专注于企业级应用。

google_news · MSN · 7月2日 12:55

**背景**: 由于阿拉伯语复杂的形态学和方言多样性，其自然语言处理历来落后于英语。像 GPT-4 这样的大型语言模型主要基于英语数据训练，限制了它们在阿拉伯语上的有效性。此次合作旨在创建一个更好理解阿拉伯语细微差别的模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://inception42.ai/">Inception 42 | AI | Agentic AI for Sovereign Enterprise</a></li>
<li><a href="https://datasciencedojo.com/blog/noor-arabic-language-model/">NOOR, the new largest NLP Arabic language model | Data ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Arabic NLP`, `#Microsoft`, `#Language Model`, `#Inception42`

---
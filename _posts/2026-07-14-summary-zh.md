---
layout: default
title: "Horizon Summary: 2026-07-14 (ZH)"
date: 2026-07-14
lang: zh
---

> 从 54 条内容中筛选出 14 条重要资讯。

---

1. [思维链是扩展陷阱：潜在推理兴起](#item-1) ⭐️ 8.0/10
2. [Reddit 辩论：持续学习是什么，是否被过度炒作？](#item-2) ⭐️ 8.0/10
3. [开源工具每日筛选 arXiv 论文](#item-3) ⭐️ 8.0/10
4. [美国考虑禁止中国用美国模型训练 AI](#item-4) ⭐️ 8.0/10
5. [DOOMQL：完全用 SQLite 构建的类毁灭战士游戏](#item-5) ⭐️ 7.0/10
6. [AI 编码代理提升 Datasette 产出](#item-6) ⭐️ 7.0/10
7. [为什么 LLM 代理不应成为直接负责人](#item-7) ⭐️ 7.0/10
8. [GPUHedge 将无服务器 GPU 冷启动 p95 从 117 秒降至 30 秒](#item-8) ⭐️ 7.0/10
9. [在 Qwen3-4B 上测试 Jacobian Lens 熵作为错误预测器](#item-9) ⭐️ 7.0/10
10. [新 AI 模型不仅用文字，还用图像思考](#item-10) ⭐️ 7.0/10
11. [大语言模型通过“渐进常态”悄然重塑生命科学](#item-11) ⭐️ 7.0/10
12. [中国制定 AI 安全基准以应对大模型风险](#item-12) ⭐️ 7.0/10
13. [印度企业转向中国大模型以降低 AI 成本](#item-13) ⭐️ 7.0/10
14. [攻击者使用疑似 AI 生成的 PowerShell 脚本攻击 Active Directory](#item-14) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [思维链是扩展陷阱：潜在推理兴起](https://www.reddit.com/r/MachineLearning/comments/1uviru5/chain_of_thought_is_a_scaling_trap_the_next_wave/) ⭐️ 8.0/10

Reddit 上的一场讨论认为，大型语言模型中的思维链推理因忠实性和成本问题而成为扩展陷阱，并提出转向潜在推理方法，如 Coconut、HRM 和 RecursiveMAS。该帖子还介绍了 BDH（龙崽）作为一种结合潜在计算与状态记忆的模型。 这一批评挑战了主流的思维链范式，表明未来 LLM 推理可能转向潜在空间以降低成本并提高忠实性。它还强调了当模型内部变得不透明时，需要新的治理机制。 思维链将中间推理序列化为 token，增加了延迟和成本，而像 Coconut 这样的潜在推理方法使用连续的潜在步骤。帖子指出，潜在推理造成了“黑箱墙”，并提出了使用 DAG 和验证的外部循环治理层。

reddit · r/MachineLearning · /u/meowsterpieces · 7月13日 17:50

**背景**: 思维链是一种让 LLM 在回答前生成逐步推理的技术，能提高复杂任务的表现。但它可能产生看似合理但错误的轨迹（不忠实），且计算成本高。潜在推理方法在模型的隐藏状态中进行计算而不生成文本，可能更高效且更忠实。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://towardsdatascience.com/coconut-a-framework-for-latent-reasoning-in-llms/">Coconut: A Framework for Latent Reasoning in LLMs</a></li>
<li><a href="https://arxiv.org/abs/2506.21734">[2506.21734] Hierarchical Reasoning Model</a></li>
<li><a href="https://arxiv.org/abs/2604.25917">[2604.25917] Recursive Multi-Agent Systems - arXiv.org RecursiveMAS Playground — Recursive Multi-Agent Systems in ... RecursiveMAS Playground: Browser-Native Implementation of ... RecursiveMAS · GitHub Recursive Multi-Agent Systems - arXiv.org</a></li>

</ul>
</details>

**社区讨论**: Reddit 帖子中包含了关于思维链与潜在推理之间权衡的实质性讨论，一些人同意思维链是一种“技巧”，而另一些人则为其可解释性辩护。讨论还涉及是否可以通过外部循环验证使潜在推理变得可审计。

**标签**: `#LLM reasoning`, `#Chain-of-Thought`, `#latent reasoning`, `#AI research`, `#scaling`

---

<a id="item-2"></a>
## [Reddit 辩论：持续学习是什么，是否被过度炒作？](https://www.reddit.com/r/MachineLearning/comments/1uvm2p4/whats_your_take_on_continual_learning_d/) ⭐️ 8.0/10

一篇 Reddit 帖子质疑持续学习的定义和炒作，引用 Dario Amodei 预测其在 2026 年实现，以及 Demis Hassabis 称其为通往 AGI 最重要的未解决突破。 持续学习被认为是通往 AGI 的关键步骤，但对其定义和要求缺乏共识可能会误导研究和投资方向。 帖子指出，一些研究者将持续学习视为解决灾难性遗忘，而另一些则将其视为在线学习、终身学习或元学习，导致目标不断变化。

reddit · r/MachineLearning · /u/watercolorer2024 · 7月13日 19:47

**背景**: 持续学习是一种 AI 方法，模型按顺序学习新任务同时保留旧任务的知识，解决稳定性-可塑性困境。灾难性遗忘是一个关键挑战，神经网络在学习新数据时会突然忘记旧信息。元学习（即“学会学习”）是一个相关但不同的范式，它优化学习算法本身。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ibm.com/think/topics/continual-learning">What is Continual Learning? | IBM</a></li>
<li><a href="https://en.wikipedia.org/wiki/Catastrophic_forgetting">Catastrophic forgetting</a></li>
<li><a href="https://arxiv.org/html/2311.05241v3">When Meta-Learning Meets Online and Continual Learning: A Survey</a></li>

</ul>
</details>

**标签**: `#continual learning`, `#AGI`, `#machine learning`, `#catastrophic forgetting`, `#meta-learning`

---

<a id="item-3"></a>
## [开源工具每日筛选 arXiv 论文](https://www.reddit.com/r/MachineLearning/comments/1uvcdf7/hundreds_of_papers_hit_arxiv_every_day_and_maybe/) ⭐️ 8.0/10

一位开发者发布了 Research Radar，这是一个开源工具，每天获取 arXiv 上的新论文，根据用户定义的研究兴趣文件对摘要进行评分，并深度阅读排名靠前的论文，生成包含摘要和相关性分析的个性化摘要。 该工具解决了研究人员花费大量时间浏览无关论文的常见痛点，每周可能节省数小时，并提高在任何科学领域发现相关工作的效率。 该工具采用两轮 LLM 方法：一个廉价模型对摘要进行评分（每批约 18k tokens），一个强大模型深度阅读前 5-10 篇论文（每篇 40-70k tokens）。它支持多种后端，包括 Claude Code、兼容 OpenAI 的端点以及通过 Ollama/vLLM 运行的本地模型。

reddit · r/MachineLearning · /u/usedtobreath · 7月13日 13:59

**背景**: arXiv 是一个预印本仓库，研究人员每天上传论文，使得跟踪相关工作变得困难。许多研究人员依赖手动浏览或流行的新闻通讯，但这些往往忽略小众兴趣。Research Radar 通过使用 LLM 进行快速浏览和深度分析，根据描述个人研究兴趣的 markdown 文件对论文进行评分，从而自动化这一过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://info.arxiv.org/help/rss.html">RSS Feeds - arXiv info</a></li>
<li><a href="https://info.arxiv.org/help/api/user-manual.html">arXiv API User's Manual - arXiv info</a></li>

</ul>
</details>

**社区讨论**: Reddit 上的讨论是积极的，用户称赞该工具的设计和两轮 LLM 方法。一些评论者讨论了如何校准 LLM 评判器以避免分数膨胀，作者欢迎关于将工具适应其他领域的反馈。

**标签**: `#arXiv`, `#research tools`, `#machine learning`, `#open source`, `#paper discovery`

---

<a id="item-4"></a>
## [美国考虑禁止中国用美国模型训练 AI](https://news.google.com/rss/articles/CBMirgFBVV95cUxNcWVhRldnTDlKa3JYTVp3N0JxVnFSMlVjYlVyYzFSeklUeWZBLTNfX3ZIeDI0VXFpQWEtRTZuUjB4Z1lPX1hFMlZ4VjJybmN6WTdUYkF5eTVRZGtScWJKQnc3dlFGUExLTVV0TWNfTkZNTTBNZTFiVXpZdzI2cWY3VVdYVlIyWGNfR24zSXFYWFB5QjMyMmlkUW1fVnU2OHhzY2tCdFBVNkRIWmJ4dHc?oc=5) ⭐️ 8.0/10

美国政府正在探索政策选项，以防止中国实体使用美国 AI 模型来训练其自身的 AI 系统，这加剧了两国之间的技术竞争。 此举可能通过切断中国获取美国先进模型的途径，严重干扰其 AI 发展，可能重塑全球 AI 格局并加剧美中技术脱钩。 据报道，该政策仍在讨论中，可能涉及对 AI 模型权重的出口管制，类似于现有的半导体限制。它将针对美国托管的所有开源和专有模型。

google_news · Bloomberg.com · 7月13日 11:00

**背景**: 美国已对中国的先进半导体和芯片制造设备实施出口管制。AI 模型权重（定义模型行为的训练参数）日益被视为关键资产，可能受到限制以维持美国的技术优势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.csis.org/analysis/understanding-us-allies-current-legal-authority-implement-ai-and-semiconductor-export">Understanding U.S. Allies’ Current Legal Authority to Implement AI and Semiconductor Export Controls | CSIS</a></li>
<li><a href="https://www.brookings.edu/articles/ball-games-over-the-us-is-out-of-the-ai-chip-market-in-china/">Ball game’s over—the US is out of the AI chip market in China | Brookings</a></li>

</ul>
</details>

**标签**: `#AI`, `#US-China`, `#policy`, `#technology competition`

---

<a id="item-5"></a>
## [DOOMQL：完全用 SQLite 构建的类毁灭战士游戏](https://simonwillison.net/2026/Jul/13/doomql/#atom-everything) ⭐️ 7.0/10

Peter Gostev 发布了 DOOMQL，这是一款可玩的的第一人称射击游戏，其中所有游戏逻辑（包括移动、碰撞、敌人、战斗和渲染）都通过 SQLite 上运行的 SQL 查询实现。该游戏是一个 Python 终端脚本，使用递归 CTE 直接在 SQL 中执行光线追踪。 DOOMQL 展示了将 SQLite 作为完整游戏引擎的极端且富有创意的用法，挑战了关于数据库能力的传统假设。它展示了递归 CTE 和 SQL 在复杂计算中的强大能力，为数据库驱动应用开辟了新的可能性。 该游戏使用一个包含递归 CTE 的大型 SQL 查询来实现完整的渲染光线追踪器。它由 GPT-5.6 Sol 构建，作为 Python 终端脚本运行，并创建一个 SQLite 数据库文件，可通过 Datasette 进行实时可视化探索。

rss · Simon Willison · 7月13日 22:34

**背景**: SQLite 是一种轻量级嵌入式 SQL 数据库引擎，广泛应用于应用程序的数据存储。递归公共表表达式（CTE）允许 SQL 查询执行迭代计算，使得光线追踪等复杂算法可以用 SQL 表达。DOOMQL 将此概念推向极致，让 SQLite 负责实时游戏的每一个方面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/petergpt/doomql/tree/main/">GitHub - petergpt/doomql: A playable terminal FPS whose ...</a></li>
<li><a href="https://simonwillison.net/2026/Jul/13/doomql/">DOOMQL - simonwillison.net</a></li>

</ul>
</details>

**标签**: `#SQLite`, `#game development`, `#creative coding`, `#Python`

---

<a id="item-6"></a>
## [AI 编码代理提升 Datasette 产出](https://simonwillison.net/2026/Jul/13/datasette-code-frequency/#atom-everything) ⭐️ 7.0/10

Simon Willison 分析了其开源项目 Datasette 的 GitHub 代码频率图表，发现最大的代码添加峰值出现在 2026 年，与使用 Opus 4.8、GPT-5.5 和 Fable 5 等先进 AI 编码代理的时间吻合。 这一自我分析提供了具体证据，表明 AI 编码代理可以显著提高开发者的生产力，如单周创纪录的 37,022 次添加所示。它凸显了在 AI 辅助下开源开发可能加速的实际转变。 该图表显示了 2018 年至 2026 年每周的添加和删除情况，最大的峰值出现在 2026 年，添加 37,022 次，删除 9,528 次，其次是 2025 年底和 2018 年初的较小峰值。分析将最近的激增归因于 Opus 4.8、GPT-5.5 和 Fable 5 等模型。

rss · Simon Willison · 7月13日 21:45

**背景**: GitHub 的代码频率图表可视化仓库中每周添加和删除的行数。Datasette 是一个用于探索和发布数据的开源工具，由 Simon Willison 创建。AI 编码代理是能够自主编写和修改代码的大型语言模型，最近的版本如 Opus 4.5 和 GPT-5 在编码任务上显示出显著改进。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://stackoverflow.com/questions/73474250/github-code-frequency-graph-scale-problem-after-initial-commit">git - github code frequency graph scale problem... - Stack Overflow</a></li>
<li><a href="https://datasette.io/">Datasette: An open source multi-tool for exploring and publishing data</a></li>
<li><a href="https://www.cosmicjs.com/blog/claude-sonnet-45-vs-opus-45-a-real-world-comparison">Claude Sonnet 4 . 5 vs Opus 4 . 5 (2026): Real-World Benchmarks and...</a></li>

</ul>
</details>

**标签**: `#AI coding agents`, `#productivity`, `#open source`, `#data visualization`

---

<a id="item-7"></a>
## [为什么 LLM 代理不应成为直接负责人](https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/#atom-everything) ⭐️ 7.0/10

Simon Willison 认为，LLM 驱动的代理永远不应被视为直接负责人（DRI），因为它们无法承担责任，并引用了 GitLab 手册和 IBM 1979 年的幻灯片。 这一见解对 AI 治理至关重要，因为组织越来越多地将 LLM 代理部署到决策角色中；将责任分配给机器可能导致伦理和法律风险。 DRI 概念起源于苹果公司，定义为最终对项目成败负责的人。Willison 强调责任是人类独有的，机器无法被追究责任。

rss · Simon Willison · 7月12日 23:57

**背景**: 直接负责人（DRI）是一个由苹果公司推广的管理术语，指从项目开始到结束拥有项目并对结果负责的单一人员。GitLab 手册提供了清晰的定义。1979 年，IBM 制作了一张培训幻灯片，指出计算机绝不能做出管理决策，因为它无法被追究责任。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/">Directly Responsible Individuals (DRI) - The GitLab Handbook</a></li>
<li><a href="https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/">Directly Responsible Individuals (DRI) - simonwillison.net</a></li>

</ul>
</details>

**标签**: `#management`, `#AI accountability`, `#LLM agents`, `#organizational design`

---

<a id="item-8"></a>
## [GPUHedge 将无服务器 GPU 冷启动 p95 从 117 秒降至 30 秒](https://www.reddit.com/r/MachineLearning/comments/1uvlb6h/gpuhedge_hedging_serverless_gpu_providers/) ⭐️ 7.0/10

GPUHedge 是一个开源对冲框架，通过在多个提供商之间发起请求并取消较慢的请求，降低了无服务器 GPU 推理的冷启动延迟。在基准测试中，它将 p95 延迟从 116.6 秒降至 29.4 秒，并消除了超过 60 秒的请求。 冷启动延迟是无服务器 GPU 推理的主要痛点，大型模型通常会导致超过一分钟的延迟。GPUHedge 提供了一种实用的、与提供商无关的解决方案，可以显著改善用户体验并降低成本，使无服务器 GPU 更适合延迟敏感型应用。 该框架采用投机执行方法：在主提供商上启动请求，监控作业生命周期，并在可配置的延迟（例如 10 秒）后有条件地启动备份请求。第一个通过验证器的结果获胜，失败的作业通过提供商的本地 API 取消。初始基准测试在 17 GB AI 模型上使用了 RunPod → Cerebrium 对冲。

reddit · r/MachineLearning · /u/Putrid_Construction3 · 7月13日 19:20

**背景**: 无服务器 GPU 计算允许用户在不管理服务器的情况下运行 AI 推理，但当 GPU 必须从头初始化时，会遭受冷启动延迟。对于大型模型，这种延迟可能从几十秒到超过一分钟不等，从而产生不可预测的尾部延迟。对冲是一种用于分布式系统的技术，通过发出冗余请求并使用第一个成功的响应来减少尾部延迟。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/swlh/hedged-requests-tackling-tail-latency-9cea0a05f577">Hedged requests — Tackling tail latency | by Ricardo Linck | Medium</a></li>
<li><a href="https://www.spheron.network/blog/gpu-cold-start-llm-inference-2026/">GPU Cold Start on Serverless LLM Inference: 4 Fixes... | Spheron Blog</a></li>
<li><a href="https://promtable.com/glossary/gpu-cold-start">GPU cold start — Definition, when to use, and mistakes | Promtable</a></li>

</ul>
</details>

**标签**: `#serverless`, `#GPU`, `#cold start`, `#inference`, `#open source`

---

<a id="item-9"></a>
## [在 Qwen3-4B 上测试 Jacobian Lens 熵作为错误预测器](https://www.reddit.com/r/MachineLearning/comments/1uv5l75/evaluating_jspace_entropy_as_an_error_predictor/) ⭐️ 7.0/10

一项研究在 Qwen3-4B 上跨 7 个数据集（约 11,400 个样本）评估了 Jacobian Lens 工作空间熵作为错误预测器的效果，发现它在事实检索上能补充输出置信度，但无法检测内化的错误观念，且高度依赖任务。 这项工作对一种新颖的可解释性技术进行了细致的实证评估，表明内部熵并非通用的幻觉检测器，但对于高置信度的错误事实答案可以成为有用的补充信号，为 LLM 错误预测的未来研究提供指导。 该研究使用了阿里巴巴 Qwen 系列中 40 亿参数的 Qwen3-4B 模型，并在 TriviaQA、PopQA、NQ-Open、TruthfulQA、HotpotQA、GSM8K 和 CommonSenseQA 上进行了测试。工作空间熵在 PopQA 上提高了错误路由精度，但在 TruthfulQA 上弱于输出置信度，且在 TriviaQA 上校准的阈值在 GSM8K 上失效，因为数学推理的基线熵更高。

reddit · r/MachineLearning · /u/dasjomsyeet · 7月13日 08:27

**背景**: Jacobian Lens 是 Anthropic 提出的一种可解释性技术，通过计算 logits 相对于激活的 Jacobian 矩阵来检查语言模型内部的可言语化表示。工作空间熵指这些内部表示的熵，被假设能指示不确定性。Qwen3-4B 是阿里巴巴 Qwen 系列中一个 40 亿参数的开源 LLM。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.lesswrong.com/posts/T3u6Hctes6vkawsib/reading-into-vlm-hallucinations-using-the-jacobian-lens">Reading into VLM hallucinations using the Jacobian lens — LessWrong</a></li>
<li><a href="https://explainx.ai/blog/what-is-j-lens-jacobian-lens-claude-interpretability-2026">What Is the J- Lens ? Anthropic Jacobian Lens Guide | explainx.ai</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3-4B">Qwen/ Qwen 3 - 4 B · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论中包含实质性的评论，辩论方法论和影响，一些用户质疑发现的泛化性，而另一些用户则赞赏严谨的实证方法。作者回应了反馈，指出跨模型验证是下一步。

**标签**: `#machine learning`, `#LLM interpretability`, `#error prediction`, `#Jacobian Lens`, `#entropy`

---

<a id="item-10"></a>
## [新 AI 模型不仅用文字，还用图像思考](https://news.google.com/rss/articles/CBMijgFBVV95cUxOVWoyVWRqLVRYN08xWndFYUdFQjBJN1ZJX0pvU0hqLXMxR3Z0UXh4aU5nRVNXcGRQeFhDNTZDcUI4amtqckxiZEVLbHY0VGxSVnpjakxYdmdMTnBxMkdyUjRlNWpHXzk2ZkFxd1FqZS1lOXI0V0ZJR0hIZmtVdWpUcUF4T001NjhUQ3FGQ1VR?oc=5) ⭐️ 7.0/10

Fast Company 报道了一种新 AI 模型，它能够同时使用图像和文本处理信息，将多模态推理推进到超越传统纯语言模型的水平。 这一进展可能显著提升 AI 理解和推理视觉世界的能力，从而在机器人、自动驾驶和内容生成等领域带来更强大、更具上下文感知能力的应用。 据报道，该模型整合了视觉和文本推理，可能采用了类似于思维链但结合图像的技术。文章未披露关于架构或训练数据的具体技术细节。

google_news · Fast Company · 7月13日 10:08

**背景**: 大多数大型语言模型（LLM）仅处理文本，限制了对视觉概念的理解。像 GPT-4V 和 Gemini 这样的多模态模型可以处理图像和文本，但通常将图像视为辅助输入。据报道，这个新模型以图像“思考”，意味着视觉表示是其推理过程的核心，可能实现更直观、更类人的理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.lorka.ai/ai-models/google/gemini-3">Try Gemini 3 online: Multimodal reasoning & coding | Lorka AI</a></li>
<li><a href="https://blog.athina.ai/multimodal-chain-of-thought-reasoning-in-language-models">Multimodal Chain-of-Thought Reasoning in Language Models</a></li>

</ul>
</details>

**标签**: `#AI`, `#multimodal`, `#machine learning`, `#research`

---

<a id="item-11"></a>
## [大语言模型通过“渐进常态”悄然重塑生命科学](https://news.google.com/rss/articles/CBMifEFVX3lxTE9VS3VkZl90Y1UzRG5lRTdheV9MSGd4SzNxNkhiLU54OVRBYlFYeHR4UjhTYVBITURSWnBMZzN3SHZMLVFLMXNzTWFhajlXMm5TR3RjcDlJWl80blEwV2FHYTVyUW1pMzkyZ3NRTzdELWpsblZNVk5hNFE3dlQ?oc=5) ⭐️ 7.0/10

Phys.org 的一篇文章探讨了大语言模型（LLM）如何逐渐且悄然地改变生命科学研究，在科学家完全意识到变化程度之前已成为新常态。 这种渐进常态意味着 LLM 正在重塑生命科学的研究实践、数据分析和假设生成，可能加速发现，同时也引发了对过度依赖和验证的担忧。 文章指出，LLM 被用于文献挖掘、蛋白质结构预测和药物发现等任务，但其整合往往是渐进且不被注意的，导致科学工作流程发生转变。

google_news · Phys.org · 7月13日 12:20

**背景**: “渐进常态”是一个概念，指重大变化通过微小、渐进的步骤被接受。在 LLM 的背景下，这意味着它们在生命科学中的采用是逐渐发生的，很难确定它们何时变得不可或缺。LLM 是在大量文本数据上训练的人工智能模型，能够生成类似人类的文本，并且越来越多地应用于科学领域。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Creeping_normality">Creeping normality - Wikipedia</a></li>
<li><a href="https://phys.org/news/2026-07-large-language-quietly-reshaping-life.html">How the 'creeping normality' of large language models is ...</a></li>

</ul>
</details>

**标签**: `#large language models`, `#life sciences`, `#AI impact`, `#research`

---

<a id="item-12"></a>
## [中国制定 AI 安全基准以应对大模型风险](https://news.google.com/rss/articles/CBMirgFBVV95cUxOQUg0NjVyQVZEZGxqeTRwcHkxZWF1WjlIZElEMDJZX3ZZaklMdGl5NjAyUU5JMVhBWV9MaDZIT2M2cjBrTjJsLW5MQ0ZYc3c2ZGhwR2gzclpGcVF3QUlUQnFHcDNNdENtX1RoUk9va0tCZWVDNDZoXzRfXzJ1VGRKcE5XWENUaXRtQUNKUXhoYnp3cnJoOWFfRHNRYjFPVjlqXzY2UGNFTHlCazRhMFHSAa4BQVVfeXFMUE9ZS19qLW5ITGtZZllpV1J4TVYtQkNTWWFCbE90M3dkcTJlbndXYlFLSVRxazZEZTQ4NUJYQzhLTEpmUTJ2YW42a29Wd2xxRmJhcEJhMFIwalptOUhFMUc4ak5tUWdLSlR2Q2k1U3RLOF9rQnJWTXVYNUNzMlZLZ3NBcXpwdE1VTUV1MzA1NEVYVFE2NHctZmVjc1g5a2hCZlYyaFNWcGhHZHJqYW53?oc=5) ⭐️ 7.0/10

据《南华早报》报道，中国正在制定一项 AI 安全基准，以应对大型语言模型带来的风险。该基准旨在帮助监管机构评估并减轻这些模型的潜在危害。 此举表明中国在 AI 治理方面的积极态度，可能影响全球 AI 安全标准。它可能影响大型语言模型在中国的部署和监管方式，从而影响全球开发者和用户。 该基准仍在开发中，具体危害类别和评估方法的细节尚未公布。预计将涵盖偏见、有害内容和安全漏洞等风险。

google_news · South China Morning Post · 7月13日 13:30

**背景**: 大型语言模型（如 GPT-4 及中国同类模型）可能生成有害或有偏见的内容，引发安全担忧。AI 安全基准（如 MLCommons 的 v0.5 版本）提供标准化测试来评估这些风险。中国的努力与全球 AI 监管趋势一致。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.mlsafety.org/safebench">SafeBench | AI Safety Benchmarking Competition</a></li>
<li><a href="https://arxiv.org/abs/2404.12241">Introducing v0.5 of the AI Safety Benchmark from MLCommons Introducing v0.5 of the AI Safety Benchmark from MLCommons AI Model Evaluation: Safety Benchmarks, Red Teaming & Testing ... Microsoft cloud security benchmark v2 - Artificial ... How Should AI Safety Benchmarks Benchmark Safety? Announcing MLCommons AI Safety v0.5 Proof of Concept</a></li>
<li><a href="https://airisk.mit.edu/blog/introducing-v0-5-of-the-ai-safety-benchmark-from-mlcommons">Introducing v0.5 of the AI Safety Benchmark from MLCommons</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#regulation`, `#China`, `#large language models`

---

<a id="item-13"></a>
## [印度企业转向中国大模型以降低 AI 成本](https://news.google.com/rss/articles/CBMivwFBVV95cUxQM2VwYkJIeTZ5MHZGX2c5YXRiQzc2WGpnSGhrMnZzN2FFSHhicHdIcm9oTVhxeFBDWl9waTFyN0sxT1FabVVmVHhMVHB6ZGdVV2VrcjZtVGhOazU3Wl9YTDBZZC11eHdJenZjZXFPRkdFbG5CeG9VWmRfZFl6Ql9HQ0hDQ2RpaTRtcnl4RFFfc1E5eDFHOXhCSFU4M2hVODVNSG42YURIZXVha0Zta1BCUTlqeUg3cGctc2hlc0t6WQ?oc=5) ⭐️ 7.0/10

据《日经亚洲》报道，印度公司正越来越多地采用中国大语言模型（LLM），作为在 AI 成本上升背景下的高性价比替代方案。 这一趋势凸显了全球 AI 采用格局的变化——成本压力正促使印度企业从西方大模型转向中国替代方案，可能重塑竞争格局。 DeepSeek、Qwen 和 ChatGLM 等中国开源大模型以高效和低成本著称，对价格敏感的印度企业颇具吸引力。

google_news · Nikkei Asia · 7月13日 02:50

**背景**: 大语言模型（LLM）是在海量文本数据上训练、能生成类人文本的 AI 系统。GPT-4 等西方模型功能强大但成本高昂，而中国大模型凭借开放权重架构和针对国产硬件的优化，已成为有竞争力的替代方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Chinese_large_language_models">Chinese large language models</a></li>
<li><a href="https://www.index.dev/blog/chinese-open-source-llm-models">Top 5 Chinese Open-Source LLM Models in 2026</a></li>

</ul>
</details>

**标签**: `#LLM`, `#AI costs`, `#India`, `#China`, `#industry trend`

---

<a id="item-14"></a>
## [攻击者使用疑似 AI 生成的 PowerShell 脚本攻击 Active Directory](https://news.google.com/rss/articles/CBMigAFBVV95cUxPUi0yOFVBaXJlZUtLYjdEaUdVc3gxMVVtZVRfeU40cWRaXzRpUk9qUWw5eUo1cjEtZWIzMFFnX2hjWUJRbmxPWlZwUVV1bzNkUEw4SkhZTE9EdnMwcEs5NUItbm1XME9IWHFIcUhoZFU4cldRRXI1cHUzY01uclkzZw?oc=5) ⭐️ 7.0/10

Huntress 的研究人员发现一起入侵事件，攻击者在通过泄露的凭证获得 Windows Server 的 RDP 访问权限后，使用疑似 AI 生成的 PowerShell 脚本枚举 Active Directory。 这标志着网络攻击技术的新演进，AI 生成的脚本降低了攻击者制作复杂侦察工具的门槛，可能增加 Active Directory 攻击的频率和有效性。 该脚本映射了域控制器并收集了用户、计算机和域信息，然后将数据导出为 HTML 报告，表明其侦察阶段结构良好。

google_news · The Hacker News · 7月13日 11:02

**背景**: Active Directory 是许多组织用于管理用户、计算机和权限的目录服务。PowerShell 是一种常用于系统管理的脚本语言，其与 Active Directory 交互的能力使其成为合法管理员和攻击者的强大工具。AI 生成的代码可由大型语言模型产生，这些模型能根据自然语言提示编写功能性脚本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bitnewsbot.com/ai-coded-powershell-script-used-in-active-directory/">AI-coded PowerShell script used in Active Directory intrusion</a></li>
<li><a href="https://thehackernews.com/2026/07/attacker-uses-suspected-ai-generated.html">Attacker Uses Suspected AI-Generated PowerShell Script to Map ...</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#AI`, `#Active Directory`, `#PowerShell`, `#threat intelligence`

---
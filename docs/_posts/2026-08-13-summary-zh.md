---
layout: default
title: "Horizon Summary: 2026-08-13 (ZH)"
date: 2026-08-13
lang: zh
---

> 从 49 条内容中筛选出 11 条重要资讯。

---

1. [Adam 的各向异性破坏旋转不变性和低秩偏置](#item-1) ⭐️ 8.0/10
2. [AI 对软件工程的影响：中产阶级的空心化](#item-2) ⭐️ 7.0/10
3. [自然语言文本不存在无损转换](#item-3) ⭐️ 7.0/10
4. [企业从 AI 辅助转向智能体执行](#item-4) ⭐️ 7.0/10
5. [AI2 推出 OlmoEarth 嵌入导出功能，助力地理空间分析](#item-5) ⭐️ 7.0/10
6. [Liquid AI 发布 LFM2.5-VL-3B，用于高效边缘视觉](#item-6) ⭐️ 7.0/10
7. [新网站按目的地质量而非仅声望对 CS 会议进行排名](#item-7) ⭐️ 7.0/10
8. [Anthropic 为 AI 生成文本添加隐形水印](#item-8) ⭐️ 7.0/10
9. [三星借助 Claude 加速 SoC 设计，缩小与高通差距](#item-9) ⭐️ 7.0/10
10. [Meta 的 Muse Glimmer：开放权重 AI 的新篇章](#item-10) ⭐️ 7.0/10
11. [研究：聊天机器人重塑科研经费分配](#item-11) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Adam 的各向异性破坏旋转不变性和低秩偏置](https://www.reddit.com/r/MachineLearning/comments/1vmjb3p/the_loss_does_not_see_the_basis_but_adam_does_r/) ⭐️ 8.0/10

一项新研究表明，Adam 的逐坐标二阶矩破坏了因子模型中的旋转不变性，导致隐式低秩偏置的丧失，而 Muon 和 Shampoo 等优化器则保留了这一性质。一个单参数族证实，各向异性而非自适应性是罪魁祸首。 这一发现提供了对优化器行为的基本理解，可能指导新优化器的设计，以保留有益的隐式偏置。它可能影响依赖 Adam 并在低秩或过参数化场景中寻求更好泛化能力的深度学习从业者。 该研究在匹配训练损失下对欠定矩阵感知测试了九种更新规则，发现两个聚类：GD、共享标量 Adam、Muon 和 Shampoo 保留偏置，而 Adam、RMSProp、Lion、signum 和 Adafactor 失去偏置。Muon 在真正低秩目标上表现精确，但随着谱尾增加退化最快，并在约 4%尾能量处与 GD 交叉。

reddit · r/MachineLearning · /u/EtherealGlyph · 8月12日 16:39

**背景**: 在因子模型如 W = UV^T 中，损失对旋转(U,V) → (UQ, VQ)具有不变性，梯度下降尊重这一不变性。Adam 的逐坐标缩放依赖于基，破坏了这种不变性。隐式低秩偏置是指基于梯度的优化在过参数化问题中倾向于选择低秩解的现象，这有利于泛化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geeksforgeeks.org/machine-learning/adam-adaptive-moment-estimation-optimization-ml/">ML | ADAM (Adaptive Moment Estimation) Optimization</a></li>
<li><a href="https://arxiv.org/abs/2011.13772">[2011.13772] Gradient Descent for Deep Matrix Factorization ... SGD Noise and Implicit Low-Rank Bias in Deep Neural Networks Gradient descent for deep matrix factorization: Dynamics and ... Towards Resolving the Implicit Bias of Gradient Descent for ... [2011.13772] Gradient Descent for Deep Matrix Factorization ... Implicit Bias of Gradient Descent - emergentmind.com</a></li>
<li><a href="https://cbmm.mit.edu/sites/default/files/publications/Implicit+Rank+Minimization.pdf">SGD Noise and Implicit Low-Rank Bias in Deep Neural Networks</a></li>

</ul>
</details>

**社区讨论**: 讨论可能包括关于匹配训练损失比较的有效性以及 Muon 行为含义的技术辩论。一些人可能质疑在考虑学习率调整的注意事项后的实际意义，而另一些人可能欣赏其理论清晰度。

**标签**: `#optimization`, `#deep learning`, `#low-rank bias`, `#Adam`, `#matrix sensing`

---

<a id="item-2"></a>
## [AI 对软件工程的影响：中产阶级的空心化](https://simonwillison.net/2026/Aug/12/florian-herrengt/) ⭐️ 7.0/10

Florian Herrengt 的博客文章《AI 正在移除软件工程的中产阶级》通过一个调试场景说明，依赖像 Claude 这样的 AI 工具可能导致代码库变得复杂难懂，以至于团队成员（包括原始开发者）都无法解释数据的来源。 这一评论凸显了采用 AI 辅助编程的一个关键风险：人类对代码库的理解和认知所有权可能丧失。它与当前行业关于生成式 AI 如何重塑开发者角色的辩论产生共鸣，可能削弱中级工程职位并增加“认知债务”。 该文章提到了“Fable”，一个 AI 编码工具（可能是 Anthropic 的 Claude Fable 5，专为大型编码项目设计的最强模型），并描述了一个团队反复要求 AI 修复 bug 但未成功的场景。作者认为项目变得如此复杂，以至于无人能理解，这说明了在没有适当监督的情况下过度依赖 AI 的危险。

rss · Simon Willison · 8月12日 15:08

**背景**: 像 Claude Code 和 Fable 这样的 AI 辅助编程工具越来越多地被用于生成代码，但它们可能产生难以理解或维护的代码。“认知债务”一词指的是在不完全理解 AI 生成代码的情况下使用它所带来的隐性成本，这可能导致技术债务和维护挑战。关于“移除中产阶级”的讨论表明，AI 可能对传统上在高级架构师和初级开发者之间起桥梁作用的中级工程师产生不成比例的影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.florianherrengt.com/ai-removing-middle-class-software-engineering.html">AI is removing the middle class of software engineering</a></li>
<li><a href="https://enterprisedna.co/resources/ai-pulse/ai-pulse-2026-08-12-ai-is-removing-the-middle-class-of-software-engineering-is-t/">"AI is removing the middle class of software engineering" is ...</a></li>
<li><a href="https://wimes.org/articles/2026-08-12-middle-class-software-engineering-fine/">The Middle Class of Software Engineering Is Fine</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上关于此话题的讨论引发了大量评论，一些人认为 AI 不会取代高级或初级工程师，而是通过让薄弱的工程文化更快失败来掏空中层。另一些人则反驳说，软件工程的中产阶级状况良好，这种说法被夸大了。

**标签**: `#AI`, `#software engineering`, `#code quality`, `#developer productivity`

---

<a id="item-3"></a>
## [自然语言文本不存在无损转换](https://simonwillison.net/2026/Aug/11/there-are-no-lossless-transformations-of-natural-language-text/) ⭐️ 7.0/10

Sophie Alpert 发布了一项针对工程师使用 AI 写作工具的政策，认为自然语言文本不存在无损转换，作者必须对自己文档中的每一个观点和句子负责。 该政策为越来越多依赖 LLM 编辑或重写文档的软件工程师和技术写作者提供了实用指导。它强调作者责任，以及当 AI 工具缺乏作者完整心智背景时信息丢失的风险，这对维护文档质量和信任至关重要。 Alpert 的政策指出，如果审阅者询问某一行内容，回答“这是 AI 写的，忽略它”是不可接受的。核心观点是，每一次重写或改写都会改变含义，如果由缺乏作者详细心智表征的实体完成，信息就会丢失。

rss · Simon Willison · 8月11日 23:48

**背景**: 大型语言模型（LLM）越来越多地被用于辅助写作，包括编辑和重写文档。然而，与无损数据压缩不同，自然语言转换本质上是有损的，因为它们依赖于模型对作者意图的解释。该政策解决了 AI 辅助写作中的伦理和实际挑战，强调作者必须确保其文档准确反映自己的想法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=48980425">There are no lossless transformations of natural - language text</a></li>
<li><a href="https://www.linkedin.com/posts/katie-miserany_there-are-no-lossless-transformations-of-activity-7491169182865293312-hLj8">There are no lossless transformations of natural - language text</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的讨论（来自搜索结果）可能包含各种观点，但由于未提供具体评论，无法总结情绪。LinkedIn 帖子也可能有讨论，但细节不可用。

**标签**: `#AI writing`, `#engineering ethics`, `#documentation`, `#LLM`, `#software engineering`

---

<a id="item-4"></a>
## [企业从 AI 辅助转向智能体执行](https://openai.com/index/how-enterprises-put-ai-to-work) ⭐️ 7.0/10

OpenAI 发布了一份报告，详细介绍了企业如何采用智能体 AI，使用 ChatGPT 和 Codex 等工具，并指出前沿企业在 AI 采用方面领先。 这标志着企业 AI 从简单辅助向自主执行的重大转变，可能重新定义各行业的工作流程和生产力。这也强调了早期采用者的竞争优势以及智能体系统日益增长的重要性。 报告特别提到 ChatGPT 和 Codex 是这一转变的关键工具。Codex 是一个 AI 编程智能体，能够端到端完成任务，包括构建功能和复杂重构，非技术团队也用它来构建内部应用和仪表板。

rss · OpenAI News · 8月12日 06:00

**背景**: 智能体 AI 指的是能够自主追求目标、无需逐步人工批准的系统，与单轮 AI 形成对比。OpenAI 的 Codex 于 2025 年 4 月以开源 CLI 形式发布，将语言模型与本地代码和命令行任务连接起来，实现自主编程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://remolda.com/en/glossary/agentic-ai">Agentic AI — definition | Remolda</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Codex_(AI_agent)">OpenAI Codex (AI agent) - Wikipedia</a></li>
<li><a href="https://openai.com/codex/">Codex in ChatGPT | AI Coding Agents for Software ... - OpenAI</a></li>

</ul>
</details>

**标签**: `#AI adoption`, `#enterprise AI`, `#agentic AI`, `#OpenAI`, `#ChatGPT`

---

<a id="item-5"></a>
## [AI2 推出 OlmoEarth 嵌入导出功能，助力地理空间分析](https://huggingface.co/blog/allenai/olmoearth-embeddings) ⭐️ 7.0/10

AI2 推出了 OlmoEarth 嵌入功能，这是 OlmoEarth Studio 的一项新特性，允许用户从地球观测数据中计算并导出自定义嵌入向量，用于下游分析。该功能于 2026 年 4 月 23 日发布，支持灵活、经济高效的分析，无需大量计算资源。 此次发布通过让研究人员和开发者能够利用预训练的 OlmoEarth 基础模型执行相似性搜索、分割和无监督探索等多种任务，降低了地理空间 AI 的使用门槛。这有望加速环境监测、城市规划和气候科学等领域的创新。 OlmoEarth 嵌入可为任意区域和时间段（包括月度或更长周期）生成，并设计为可无缝集成到现有机器学习工作流中。底层 OlmoEarth 模型为开放获取，用户可在自己的环境中部署，以获得充分的灵活性。

rss · Hugging Face Blog · 8月12日 16:14

**背景**: OlmoEarth 是 AI2 推出的地球观测模型构建平台，提供从数据导入、标注、微调、部署到可视化的端到端工作流。嵌入是数据的紧凑数值表示，能够捕捉语义特征，从而在无需大量计算资源的情况下高效执行下游任务。该功能顺应了将基础模型用于地理空间数据的趋势，类似于 GPT-4 等模型在自然语言处理中的应用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://allenai.org/blog/olmoearth-embeddings">Introducing OlmoEarth embeddings: Custom embedding exports ...</a></li>
<li><a href="https://docs.olmoearth.allenai.org/embeddings/">Embeddings | OlmoEarth</a></li>
<li><a href="https://docs.olmoearth.allenai.org/">OlmoEarth Documentation</a></li>

</ul>
</details>

**标签**: `#embeddings`, `#geospatial`, `#machine learning`, `#AI2`, `#Hugging Face`

---

<a id="item-6"></a>
## [Liquid AI 发布 LFM2.5-VL-3B，用于高效边缘视觉](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b) ⭐️ 7.0/10

Liquid AI 发布了 LFM2.5-VL-3B，这是一个专为边缘部署设计的 30 亿参数视觉语言模型。它基于 LFM2.5-2.6B 文本骨干网络，并集成了 SigLIP2 400M NaFlex 图像编码器，预训练数据量约为 34T tokens。 此次发布意义重大，因为它将先进的视觉语言能力（如文档理解、屏幕理解、物体定位和函数调用）带到了资源受限的边缘设备上。它满足了日益增长的对高效端侧 AI 的需求，这些 AI 无需依赖云基础设施即可实时运行。 该模型直接回答而非进行推理，从而在实时和端侧应用中保持快速响应。它沿用了 Liquid AI 之前 VLM（LFM2.5-VL-1.6B 和 LFM2.5-VL-450M）的架构，并提供 HF、GGUF、MLX 和 ONNX 等格式。

rss · Hugging Face Blog · 8月12日 14:00

**背景**: 视觉语言模型（VLM）结合了视觉和文本理解，用于执行图像描述、视觉问答和文档分析等任务。边缘 AI 是指在本地设备（如智能手机、物联网设备）上运行机器学习模型，而非在云端运行，这样可以降低延迟并提高隐私性。Liquid AI 是一家专注于构建高效通用 AI 模型的公司，此次发布延续了他们在可在消费级硬件上运行的紧凑型模型方面的工作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b">LFM2.5-VL-3B for Better and Faster Vision Capabilities for ...</a></li>
<li><a href="https://www.liquid.ai/blog/lfm2-5-vl-3b">LFM 2 . 5 - VL - 3 B : A Better and Faster Vision-Language... — Liquid AI</a></li>
<li><a href="https://docs.liquid.ai/lfm/models/lfm25-vl-3b">LFM2.5-VL-3B - Liquid Docs</a></li>

</ul>
</details>

**标签**: `#vision-language model`, `#edge AI`, `#efficient inference`, `#model release`, `#Hugging Face`

---

<a id="item-7"></a>
## [新网站按目的地质量而非仅声望对 CS 会议进行排名](https://www.reddit.com/r/MachineLearning/comments/1vmbdk6/i_built_an_honest_cs_conference_ranking_sorted_by/) ⭐️ 7.0/10

新网站 honestcsrankings.org 根据目的地质量对约 540 个即将举行的 CORE 排名计算机科学会议进行排名，考虑天气、安全、成本、可达性和城市氛围等因素。它还包含一个“爆冷”标签，突出位于不佳目的地的 A*会议，并提供筛选、日历导出和基于距离的排序功能。 该工具以数据驱动的方式解决了学术界常见但非正式的考虑因素——会议地点，可能影响会议出席和投稿决策。它为希望平衡职业发展与旅行体验的研究人员提供了实用资源。 排名使用会议当月的真实气候数据、全球和平指数（Global Peace Index）评估安全，以及世界银行价格水平评估成本。用户可以按领域、等级或开放截止日期筛选，设置家乡城市按距离排序，导出截止日期到.ics，并与合著者分享深层链接。由于未公布或缺乏 CORE 排名，ICML/ICLR 2027 和 COLM 等会议缺失。

reddit · r/MachineLearning · /u/JohnAZoidberg77 · 8月12日 11:23

**背景**: CORE 排名是学术界广泛使用的系统，用于评估计算机科学会议和期刊的质量与声望。全球和平指数（GPI）是经济与和平研究所发布的年度报告，衡量各国的和平程度，而世界银行的国际比较项目提供价格水平指数，用于比较各国成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/CORE_ranking">CORE ranking</a></li>
<li><a href="https://en.wikipedia.org/wiki/Global_Peace_Index">Global Peace Index</a></li>
<li><a href="https://en.wikipedia.org/wiki/List_of_countries_by_price_level">List of countries by price level - Wikipedia</a></li>

</ul>
</details>

**标签**: `#conference ranking`, `#CS research`, `#travel`, `#tools`, `#academia`

---

<a id="item-8"></a>
## [Anthropic 为 AI 生成文本添加隐形水印](https://news.google.com/rss/articles/CBMiS0FVX3lxTE96Qm9qbXVaSWtrbFhiRGx6QVBScFpPVVd0cGZmSDlzcE1PTFZLRWZ0RXJMdFh4TjZMWmwtbDlqLXhkMFVWZk04S0FDMA?oc=5) ⭐️ 7.0/10

Anthropic 宣布将直接在 Claude 模型生成的文本中嵌入不可见的机器可读水印，该水印在模型层面应用，因此可跨产品保留，并在复制、粘贴和轻微编辑后依然存在。 此举是更广泛的行业努力的一部分，旨在区分人类撰写的内容与 AI 输出，解决关于 AI 垃圾信息和错误信息的担忧。它可能为其他 AI 公司树立先例，并有助于建立内容来源标准。 该水印不可察觉，不会改变回复的含义、质量或可读性。它在模型层面应用，意味着适用于所有受支持的 Claude 产品，并设计为在复制、粘贴和轻微编辑后依然存在。

google_news · 매일경제 · 8月12日 08:21

**背景**: AI 生成的文本越来越难以与人类写作区分，引发了对错误信息和真实性的担忧。水印是一种在内容中嵌入隐藏信号以验证其来源的技术。Anthropic 的方法在模型层面嵌入水印，使其比事后方法更稳健。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techstartups.com/2026/08/10/anthropic-is-adding-invisible-watermarks-to-claudes-ai-generated-text-that-can-be-detected-even-after-you-copy-and-paste-it/">Anthropic is adding invisible watermarks to Claude’s AI ...</a></li>
<li><a href="https://fortune.com/2026/08/11/anthropic-claude-watermark-ai-text-police-ai-slop/">Anthropic plans to add an invisible mark to AI text—as the ...</a></li>
<li><a href="https://gizmodo.com/anthropics-claude-will-start-adding-invisible-watermarks-to-ai-generated-text-2000797759">Anthropic’s Claude Will Start Adding Invisible Watermarks to ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#watermarking`, `#Anthropic`, `#content provenance`

---

<a id="item-9"></a>
## [三星借助 Claude 加速 SoC 设计，缩小与高通差距](https://news.google.com/rss/articles/CBMijgFBVV95cUxOYVJaM1QzLXl4a2NvYXRoVEo1MXFkT212OG1nR3V6MmNuSW1RMXZTeTA2YXB1eDRiTjdBUnl0RDdocmhaQmg2Mm1VODlKdmg4OEZ6YmhsMzB5MjhaUHhTTWlIbk0wd3dRVGpMUmhfQm9JSGhBVVUyVHFTcmdBWVhIa0JUMUk5ZUtwbnRjcjlR0gGOAUFVX3lxTE5hUlozVDMteXhrY29hdGhUSjUxcWRPbXY4bWdHdXoyY25JbVExdlN5MDZhcHV4NGJON0FSeXREN2hyaFpCaDYybVU4OUp2aDg4RnpiaGwzMHkyOFpQeFNNaUhuTTB3d1FUakxSaF9Cb0lIaEFVVTJUcVNyZ0FZWEhrQlQxSTllS3BudGNyOVE?oc=5) ⭐️ 7.0/10

三星电子的系统 LSI 部门已采用 Anthropic 的 Claude Code AI 编程工具进行半导体设计，将定制 SoC 验证任务从一个月以上缩短至两天，生产力提升约 15 倍。据《朝鲜商业》报道，此举是三星在韩国加速 SoC 开发、缩小与高通差距战略的一部分。 这一进展凸显了 AI 在硬件设计中的日益重要作用，可能使三星能够更快地将具有竞争力的 SoC 推向市场，并减少对高通的依赖。同时，它也强调了 AI 编程助手在复杂工程领域的实际价值，可能影响整个行业的更广泛采用。 在另一个案例中，一名二年级工程师使用 Claude Code 在一天内完成了相当于一个月的 USB 模型开发工作。该工具的采用始于报道前约三个月，主要用于系统 LSI 部门的验证和模型开发任务。

google_news · Chosunbiz · 8月12日 05:08

**背景**: SoC（片上系统）设计涉及复杂的验证和模型开发，传统上耗时且劳动密集。三星的 Exynos 芯片在性能和效率上历来落后于高通的骁龙系列，因此利用 AI 加速设计是提升竞争力的战略举措。Claude Code 是 Anthropic 的 AI 编程助手，能够自动化并加速软件和硬件设计任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://biz.chosun.com/en/en-it/2026/08/12/YL4E3XRJB5AWNIJMRV75FOJ7ZU/">Samsung accelerates SoC design in South Korea with Claude ...</a></li>
<li><a href="https://www.studioglobal.ai/discover/answers/what-specific-efficiency-gains-has-samsung-achieved-6a7c8bab10551e202b128156">How Samsung Achieved a 15x Speedup in Chip Design with ...</a></li>
<li><a href="https://finance.biggo.com/news/71ece9d0-9ce1-4899-bd21-97d8a0cfe4cc">Samsung Cuts Chip Design Time by 15x Using Anthropic's Claude ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#semiconductors`, `#Samsung`, `#SoC design`, `#Claude`

---

<a id="item-10"></a>
## [Meta 的 Muse Glimmer：开放权重 AI 的新篇章](https://news.google.com/rss/articles/CBMixwFBVV95cUxOdTlKNHBmNVBQelVITUpSUzRnQ1dZUHpmVGl6a3pnY1JWUGVYdUxRLWFkS0t1MHVTcHc5VmtmZUdlSFVtWUsyVnM4WWZIQXlPYWhlekVRakpaYW1CUWk5UjlCUDhyWk9uN1RVYmNoTnhqWFVYX29FaHlOX29UalhXbnQyNTFnVG52ejQ2LXFfOV9ZamVPWENfYTVacTRIamNLNVdyNFdRZ04yaE42TGt2YWRQemgwb0FVSS1HQlZRbVdRLU9rc2RB0gHOAUFVX3lxTE9EeVEyQjZiZG9CSjdsMzFQTWd3bzJOcWNSaXJwVzJjNnRmaWlITFpQLWR1dmVlcXh6RUxkRkN6aGdGVTRtVF95SmF5cXRnRnVZZlFyZTByVGsza0JwTHdxZmx5RTBYbUNHMWRXT1NjRDdsaE9jRG1LV0llSWEwSXF3N2xxXy0wbXNFazRJaFRQaUd6WW5jMXdLc3lRNlRDZVdwQlUxeWtlR0F2a09sNmY3UlM0VDlFOEc1bVp6TlR4UFhsVEczNTVHczdzUHBn?oc=5) ⭐️ 7.0/10

Meta 推出了 Muse Glimmer，这是一个来自 Meta Superintelligence Labs 的 300 亿参数开放智能体模型，专为在消费级硬件上进行本地、常驻工作流而设计。该模型开放权重，能读取文本和图像，并在回答前逐步推理。 此次发布加强了 AI 辩论中开放权重一方的立场，表明主要参与者可以提供具有开放权重的竞争性模型。这可能会影响关于 AI 政策和模型可访问性的行业讨论，因为监管机构和公司正在权衡开放与封闭方法的利弊。 Muse Glimmer 是一个稠密模型，具有超过 120K 的上下文窗口，针对 NVIDIA 平台进行了优化，并避免了混合专家模型中的路由开销。它从 Muse Spark 蒸馏而来，并附带开放权重，允许用户拥有并在自己的硬件上运行该模型。

google_news · indianexpress.com · 8月12日 03:34

**背景**: 开放权重模型公开其训练参数，允许开发者自由检查、修改和部署，而封闭模型则保持权重专有。这一区别是 AI 安全、创新和控制辩论的核心。Meta 发布 Muse Glimmer 为这一持续讨论增加了重要数据点，尤其是当白宫等政府正在制定审查高级 AI 模型的框架时。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model">Introducing Muse Glimmer: An Open Agentic Model That Runs on ...</a></li>
<li><a href="https://dev.meta.ai/docs/muse-glimmer">Model API | Muse Glimmer - dev.meta.ai</a></li>
<li><a href="https://developer.nvidia.com/blog/run-local-agentic-ai-workflows-with-metas-muse-glimmer-on-nvidia/">Run Local Agentic AI Workflows with Meta’s Muse Glimmer on ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Meta`, `#open-weight`, `#closed AI`, `#policy`

---

<a id="item-11"></a>
## [研究：聊天机器人重塑科研经费分配](https://news.google.com/rss/articles/CBMiigFBVV95cUxNekp1RlpNb1ZFaWlOREFFdnJqS3JoZm03TG9tRkc0bGEzMnIzQjluQmhub3dPT3JyS1NxTU5EQTRWc1Q5SnVYWDFOSFlHUEJ1VENhbEg4ZDhNQVRlYkxLNkg4V183TXdlQjVyelFYTkNqZURXTG9aUlZ6X0RFVEF2Xy1hRnhSRUZvbEE?oc=5) ⭐️ 7.0/10

一项最新研究发现，聊天机器人正在显著影响哪些研究人员能获得科研经费，标志着学术资助决策方式的转变。该发现凸显了 AI 在基金评审过程中日益重要的作用。 这之所以重要，是因为它可能改变科研经费的公平性和透明度，可能使使用 AI 工具的研究人员比其他人更具优势。这也引发了对同行评审诚信以及学术评价未来的质疑。 该研究特别考察了聊天机器人（如 ChatGPT）在基金申请撰写和评审中的应用，可能为评审委员会成员加快流程。然而，由于是新闻聚合摘要，文章缺乏具体数据或方法论。

google_news · Bioengineer.org · 8月12日 02:27

**背景**: 科研经费是一个竞争性过程，研究人员提交提案，由同行评审专家评估。AI 聊天机器人越来越多地被用于协助基金申请撰写，一些研究表明它们也可能帮助评审申请，这引发了对偏见和公平性的担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10349644/">Can Chatbots Assist With Grant Writing in Plastic Surgery? Utilizing ChatGPT to Start an R01 Grant - PMC</a></li>
<li><a href="https://www.nature.com/articles/d41586-023-03238-5">ChatGPT use shows that the grant-application system is broken</a></li>
<li><a href="https://researchonresearch.org/funding-by-algorithm/">AI is changing research funding – we need to use it wisely – Research on Research Institute</a></li>

</ul>
</details>

**标签**: `#AI`, `#research funding`, `#chatbots`, `#academia`, `#science policy`

---
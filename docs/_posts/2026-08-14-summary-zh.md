---
layout: default
title: "Horizon Summary: 2026-08-14 (ZH)"
date: 2026-08-14
lang: zh
---

> 从 53 条内容中筛选出 19 条重要资讯。

---

1. [DeepSeek V4 Pro 0813 发布，开放权重](#item-1) ⭐️ 9.0/10
2. [OpenAI 的 GPT-5.6 构建者指南：更快、更便宜的 AI 代理](#item-2) ⭐️ 8.0/10
3. [OpenAI 预览 Ultrafast API 层级，GPT-5.6 Sol 速度提升 14 倍](#item-3) ⭐️ 8.0/10
4. [复现 2200 篇 ICML 论文：关键经验与常见陷阱](#item-4) ⭐️ 8.0/10
5. [WorldProof：诊断世界模型故障与像素指标的局限](#item-5) ⭐️ 8.0/10
6. [谷歌发布 Gemini 3.7 Flash：经济实惠的编程与智能体模型](#item-6) ⭐️ 8.0/10
7. [AI 设计出可自我复制的病毒，引发生物安全担忧](#item-7) ⭐️ 8.0/10
8. [Strands Agents、LeRobot 与存储桶统一机器人工作流](#item-8) ⭐️ 7.0/10
9. [City2Graph：用于城市异构图神经网络的 Python 库](#item-9) ⭐️ 7.0/10
10. [ChatGPT 图像编辑中可复现的画布对齐伪影](#item-10) ⭐️ 7.0/10
11. [消融一个注意力头导致国际象棋 Transformer 无法识别皇后弃子](#item-11) ⭐️ 7.0/10
12. [Liquid AI 发布 LFM2.5-VL-3B，面向端侧视觉语言任务](#item-12) ⭐️ 7.0/10
13. [谷歌 DeepMind 的 SL2T 为 Pixel 11 带来手语转文字功能](#item-13) ⭐️ 7.0/10
14. [AI 劫持攻击激增，被盗访问权限推高云账单](#item-14) ⭐️ 7.0/10
15. [Bittensor 的 26 亿美元去中心化 AI 市场](#item-15) ⭐️ 7.0/10
16. [军方在乌克兰、加沙和伊朗依赖易出错的人工智能](#item-16) ⭐️ 7.0/10
17. [抗体特异性 AI 框架加速药物发现](#item-17) ⭐️ 7.0/10
18. [Meta 的 Muse Glimmer：开源 AI 的新篇章](#item-18) ⭐️ 7.0/10
19. [克利夫兰诊所推出新型合作模式，扩大环境 AI 医疗抄写员的应用](#item-19) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [DeepSeek V4 Pro 0813 发布，开放权重](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/) ⭐️ 9.0/10

DeepSeek 发布了更新版旗舰模型 DeepSeek V4 Pro 0813，现可通过 OpenRouter 的 API 使用，并在 Hugging Face 上开放权重。该模型拥有 1.7 万亿参数和 1,048,576 token 的上下文窗口。 此次发布意义重大，延续了 DeepSeek 开放权重模型的模式，为 AI 社区提供了一个强大且易于获取的专有模型替代方案。该模型在网络安全方面的强劲表现和超长上下文窗口可能影响行业趋势和采用率。 该模型采用混合专家架构，拥有 1.7T 参数（893 GB），支持 1M token 上下文窗口，最大输出 384,000 token。定价为每百万输入 token 0.435 美元，每百万输出 token 0.87 美元。值得注意的是，Simon Willison 在生成鹈鹕图像时观察到不同推理级别（低、中、高）产生了显著不同的输出。

rss · Simon Willison · 8月12日 23:59

**背景**: DeepSeek 是一家中国 AI 初创公司，以发布可与领先专有系统媲美的开放权重模型而闻名。OpenRouter 是一个统一的 API 平台，提供对数百种 AI 模型的访问，使开发者能够轻松比较和使用它们。混合专家（MoE）是一种每次只激活部分参数的架构，使大型模型更加高效。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-pro-0813">DeepSeek V4 Pro 0813 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://artificialanalysis.ai/models/deepseek-v4-pro">DeepSeek V4 Pro 0813 (max) - Intelligence, Performance & Price Analysis</a></li>
<li><a href="https://www.scmp.com/tech/big-tech/article/3363895/deepseeks-updated-v4-pro-ai-model-struggles-benchmarks-shines-cybersecurity">DeepSeek’s updated V4 Pro AI model struggles on benchmarks, shines in cybersecurity | South China Morning Post</a></li>

</ul>
</details>

**标签**: `#AI`, `#DeepSeek`, `#model release`, `#open weights`, `#LLM`

---

<a id="item-2"></a>
## [OpenAI 的 GPT-5.6 构建者指南：更快、更便宜的 AI 代理](https://openai.com/index/builders-guide-to-gpt-5-6) ⭐️ 8.0/10

OpenAI 发布了一份针对 GPT-5.6 的构建者指南，重点介绍初创公司如何利用新模型构建更快、更具成本效益的 AI 代理。该指南强调了更智能的模型选择和新的 Responses API 功能。 这份指南意义重大，因为它为开发者提供了实用、可操作的建议，以优化他们对 GPT-5.6 的使用，可能降低成本并提高性能。这反映了 OpenAI 致力于使其模型更易于访问和高效用于实际应用，这可能加速整个行业的采用。 该指南强调了 GPT-5.6 模型变体——Sol、Terra 和 Luna——的使用，这些变体旨在平衡智能与成本之间的不同权衡。它还介绍了新的 Responses API 功能，这些功能简化了代理应用程序的开发，例如改进的工具调用和多模态支持。

rss · OpenAI News · 8月13日 11:00

**背景**: GPT-5.6 是 OpenAI 最新的前沿模型，于 2026 年 7 月发布，为智能和效率设立了新标准。Responses API 于 2025 年 3 月推出，是一个开发者工具，结合了 Chat Completions API 的易用性和高级工具调用能力，使构建代理应用程序更加容易。模型选择指南帮助开发者根据需求选择合适的变体，从复杂推理（Sol）到成本敏感的高容量工作负载（Luna）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/gpt-5-6/">GPT‑5.6: Frontier intelligence that scales with your ambition</a></li>
<li><a href="https://developers.openai.com/api/docs/models">Models - OpenAI API</a></li>
<li><a href="https://grokipedia.com/page/OpenAI_Responses_API">OpenAI Responses API</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#GPT-5.6`, `#AI agents`, `#API`, `#model selection`

---

<a id="item-3"></a>
## [OpenAI 预览 Ultrafast API 层级，GPT-5.6 Sol 速度提升 14 倍](https://openai.com/index/previewing-ultrafast) ⭐️ 8.0/10

OpenAI 预览了一个名为 Ultrafast 的新 API 服务层级，该层级运行 GPT-5.6 Sol 的速度比标准处理快 14 倍，每秒可输出多达 750 个 token。该层级由 Cerebras 硬件提供支持，最初通过 OpenAI API 提供。 Ultrafast 层级由 Cerebras 提供支持，其晶圆级引擎（WSE-3）采用晶圆级集成，与 GPU 集群相比可减少延迟和互连瓶颈。该层级目前处于预览阶段，首先通过 OpenAI API 提供，尚未公布定价或全面可用性细节。

rss · OpenAI News · 8月13日 10:00

**背景**: Cerebras Systems 是一家设计和制造晶圆级处理器的公司，其处理器是迄今建造的最大 AI 半导体，占据整个硅晶圆。这些处理器使用静态随机存取存储器和晶圆级集成，与 GPU 集群相比可减少延迟和互连瓶颈。OpenAI 于 2026 年与 Cerebras 签署了协议，这一合作现在催生了 Ultrafast API 层级。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/previewing-ultrafast/">Previewing Ultrafast mode: GPT‑5.6 Sol at up to ... - OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cerebras_Systems">Cerebras Systems</a></li>
<li><a href="https://9to5mac.com/2026/08/13/openai-previews-ultrafast-gpt-5-6-sol-running-up-to-14-times-faster/">OpenAI previews ‘Ultrafast’ GPT-5.6 Sol running up to 14 ...</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#API`, `#GPT-5.6`, `#performance`, `#Cerebras`

---

<a id="item-4"></a>
## [复现 2200 篇 ICML 论文：关键经验与常见陷阱](https://huggingface.co/blog/icml-2026-open-reproductions) ⭐️ 8.0/10

Hugging Face 博客报告了一项大规模复现 ICML 收录的 2200 篇论文的工作成果，指出了常见的复现陷阱和最佳实践。该举措为机器学习研究的可复现性现状提供了实证见解。 这项工作直接回应了机器学习领域的可复现性危机，为研究人员改进自身实践提供了数据驱动的指导。该研究的规模（2200 篇论文）使其发现对社区具有特别的影响力，可能塑造未来代码和数据共享的标准。 博客指出了常见的陷阱，如超参数缺失、代码不完整和环境依赖问题，并推荐了使用虚拟环境和提供详细日志等实践。它还指出，即使提供了代码的论文，往往也缺乏足够的文档来完全复现结果。

rss · Hugging Face Blog · 8月13日 00:00

**背景**: 可复现性是科学研究的基石，但机器学习论文往往未能提供足够的细节让他人复制实验。诸如 ML 可复现性挑战赛以及 ICML 和 ICLR 上的研讨会等举措一直在努力解决这一问题，但像这样的大规模实证研究仍然很少见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://jmlr.org/papers/volume22/20-303/20-303.pdf">Improving Reproducibility in Machine Learning Research</a></li>
<li><a href="https://arxiv.org/html/2406.14325v3">Reproducibility in Machine Learning-based Research: Overview ...</a></li>
<li><a href="https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002">Reproducibility in machine-learning-based research: Overview ...</a></li>

</ul>
</details>

**标签**: `#reproducibility`, `#machine learning`, `#research methodology`, `#ICML`

---

<a id="item-5"></a>
## [WorldProof：诊断世界模型故障与像素指标的局限](https://www.reddit.com/r/MachineLearning/comments/1vnliv7/worldproof_diagnosing_where_worldmodel/) ⭐️ 8.0/10

作者发布了开源工具 WorldProof，用于诊断世界模型，并发现像素指标（如 SSIM 和 PSNR）在真实机器人视频上常常无法对模型进行排序，复制最后一帧的基线获得了接近完美的分数，且不随预测步长增加而退化。 这一发现挑战了世界模型研究中常用评估指标的可靠性，可能影响模型的比较和开发方式。它强调了更具区分度的评估设置的必要性，尤其是在机器人应用中。 在 30fps 的 SO-101 机械臂记录中，基线达到了 0.983 SSIM 和 53.9 dB PSNR，且 6 步内的误差保持平稳。在 DROID 视频上，SSIM 从第 1 步的 0.873 下降到第 47 步的 0.216，可用的评估窗口大约在 8-24 步。作者使用了 64 次 rollout 和四分位均值及自助置信区间，并指出较小的样本量会给出误导性结果。

reddit · r/MachineLearning · /u/georgia_bucea · 8月13日 19:58

**背景**: 世界模型根据初始上下文和动作预测未来帧，并使用 SSIM 和 PSNR 等像素指标进行评估。这些指标将预测帧与真实帧进行比较，但可能无法捕捉语义质量或模型的排序能力。作者的 WorldProof 工具将 rollout 与真实值和物理不变量进行比较，以诊断失败。平凡基线也能获得高分这一发现表明，评估设置需要精心设计，包括动态区域掩蔽和适当的预测步长。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://videoprocessing.ai/metrics/ways-of-cheating-on-popular-objective-metrics.html">PSNR and SSIM: application areas and criticism</a></li>
<li><a href="https://fastpix.com/blog/understanding-vmaf-psnr-and-ssim-full-reference-video-quality-metrics">VMAF vs. PSNR vs. SSIM: Understanding Video Quality Metrics</a></li>

</ul>
</details>

**标签**: `#world models`, `#evaluation metrics`, `#robotics`, `#machine learning`, `#open-source`

---

<a id="item-6"></a>
## [谷歌发布 Gemini 3.7 Flash：经济实惠的编程与智能体模型](https://news.google.com/rss/articles/CBMijgFBVV95cUxQTGs2eU5lXzBfaVVZaWpsajc1NHk5OXotQnpiZDBoMWtneTNrOFpyazA1a19laVBaR0lvb1JUUXRiUUtGRUN3Yjc2amxQLTRxLVpwZGp6a0hLYm5aeXVmMkkyczI1NEd2Q3BSSWlWRkl3UERLWGp4cUhRdFBlTEtQdWE0MVRPbl9MQmxlQVdR0gGOAUFVX3lxTFBMazZ5TmVfMF9pVVlpamxqNzU0eTk5ei1CemJkMGgxa2d5M2s4WnJrMDVrX2VpUFpHSW9vUlRRdGJRS0ZFQ3diNzZqbFAtNHEtWnBkanprSEtiblp5dWYySTJzMjU0R3ZDcFJJaVZGSXdQREtYanhxSFF0UGVMS1B1YTQxVE9uX0xCbGVBV1E?oc=5) ⭐️ 8.0/10

谷歌发布了 Gemini 3.7 Flash，这是 Gemini 3 系列中的新模型，定价为每百万输入令牌 0.75 美元。它被定位为面向编程和智能体任务的主力模型，紧随 Gemini 3.6 Flash 发布仅三周。 此次发布为编程和智能体模型引入了极具竞争力的价格点，可能降低开发者和企业采用 AI 进行软件开发和自动化的门槛。这标志着谷歌在 AI 模型市场的积极布局，加剧了与其他提供商的竞争。 Gemini 3.7 Flash 对其推理基础进行了算法改进，并支持可定制的思考配置，以平衡质量、成本和延迟。它原生支持多模态，专为编程和智能体工作流设计，定价为每百万输入令牌 0.75 美元。

google_news · MarkTechPost · 8月13日 17:47

**背景**: Gemini 3.7 Flash 是谷歌 Gemini 3 模型家族的一部分，该家族包括原生多模态推理模型。Flash 系列以高效和成本效益著称，适合高容量应用。基于令牌的定价在 AI 模型中很常见，其中输入令牌比输出令牌便宜，而该模型的定价显著较低。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepmind.google/models/model-cards/gemini-3-7-flash/">Gemini 3 . 7 Flash - Model Card — Google DeepMind</a></li>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3 . 7 Flash : our most intelligent workhorse model</a></li>
<li><a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash">Gemini 3 . 7 Flash | Gemini API | Google AI for Developers</a></li>

</ul>
</details>

**标签**: `#AI`, `#Google`, `#Gemini`, `#coding`, `#agents`

---

<a id="item-7"></a>
## [AI 设计出可自我复制的病毒，引发生物安全担忧](https://news.google.com/rss/articles/CBMiogFBVV95cUxPdDB5dVBlQWtzVlprZms2LUdMLXdBNzNuNjF3Z255dExxRDFsb1ZjUzNIREVUNFIzakI0bUJRNTVEajFWN0ZmYkplQWpRcUlrMHRVZUF6a3BSMEN5UkhqdGZwdDNrUnNlTWUzUDlVRnhhRXpqVDQ4WktxSFZuSFRCUEh0THNRZlNZWWdPdFNkblFLQkZfVlVZMGpmZmh2YzgweWc?oc=5) ⭐️ 8.0/10

研究人员利用 AI 设计了全新的病毒，这些病毒在实验室环境中完全功能化并能自我复制。这标志着 AI 首次从头完整设计了整个病毒基因组。 这一进展对生物安全和 AI 安全具有重大影响，因为它展示了 AI 创造可能被滥用的新型病原体的潜力。同时，它也凸显了在合成生物学领域建立强有力的筛选和治理措施的紧迫性。 AI 设计了 16 种自然界不存在的新型噬菌体，用于感染细菌。研究人员利用病毒 DNA 模式训练 AI 以生成新的病毒基因组，所得病毒完全功能化并能自我复制。

google_news · Ratopati · 8月13日 14:11

**背景**: 合成生物学结合生物学和工程学，设计和构建新的生物系统。AI 可以通过预测结构和生成新序列来加速这一过程，但这也引发了对危险病原体意外释放或故意滥用的担忧。AI 与合成生物学的融合使得这些技术的获取更加普及，增加了生物安全威胁的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://root-nation.com/en/news-en/it-news-ua/en-ai-has-created-new-viruses-from-scratch/">AI Created New Viruses from Scratch - Root-Nation.com</a></li>
<li><a href="https://www.ndtv.com/health/scientists-used-ai-to-create-viruses-that-dont-exist-in-nature-11880110">Scientists Used AI To Create Viruses That Don't Exist In Nature</a></li>
<li><a href="https://www.devdiscourse.com/article/technology/3610986-ai-and-synthetic-biology-convergence-sparks-global-biosecurity-concerns">AI and synthetic biology convergence sparks global biosecurity ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#biosecurity`, `#synthetic biology`, `#research`

---

<a id="item-8"></a>
## [Strands Agents、LeRobot 与存储桶统一机器人工作流](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop) ⭐️ 7.0/10

Hugging Face 和 Amazon 推出了 Strands Agents，该工具与 LeRobot 和 Hugging Face 存储桶集成，为机器人模型的记录、训练和部署提供统一的工作流。这种集成使开发者能够在一个平台上管理整个机器人流程。 这一集成通过将流行的开源框架（LeRobot）与可扩展的存储和部署工具相结合，降低了机器人开发的门槛。它使更多开发者和研究人员能够构建和部署真实世界的机器人应用，加速具身智能领域的创新。 Strands Agents 利用 Hugging Face 存储桶，该存储桶提供由 Xet 后端支持的类似 S3 的对象存储，非常适合存储训练检查点和大规模数据集。该集成支持基于 PyTorch 的端到端学习，专注于模仿学习和强化学习，并且与硬件无关，支持从经济型机械臂到全尺寸人形机器人。

rss · Hugging Face Blog · 8月13日 17:16

**背景**: LeRobot 是 Hugging Face 推出的开源机器人框架，提供用于真实世界机器人的模型、数据集和工具，旨在让机器人 AI 更加易于使用。Hugging Face 存储桶是 Hub 上的一种仓库类型，提供类似 S3 的对象存储，专为非版本化、可变数据（如训练检查点和日志）设计。Strands Agents 基于这些组件，简化了机器人开发生命周期。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/huggingface/lerobot">GitHub - huggingface/lerobot: 🤗 LeRobot: Making AI for Robotics more accessible with end-to-end learning</a></li>
<li><a href="https://huggingface.co/docs/hub/main/en/storage-buckets">Storage Buckets · Hugging Face</a></li>
<li><a href="https://www.ai-evolution.com.au/article/from-the-hugging-face-hub-to-robot-hardware-with-strands-agents-and-lerobot">Hugging Face expands AI beyond software into robotics | AI Evolution</a></li>

</ul>
</details>

**标签**: `#robotics`, `#AI/ML`, `#Hugging Face`, `#LeRobot`, `#data pipeline`

---

<a id="item-9"></a>
## [City2Graph：用于城市异构图神经网络的 Python 库](https://www.reddit.com/r/MachineLearning/comments/1vn8oya/city2graph_a_python_library_for_heterogeneous/) ⭐️ 7.0/10

City2Graph 是一个新发布的 Python 库，可将城市地理空间数据转换为异构图，用于空间分析和图神经网络，相关论文已发表在《Computers, Environment and Urban Systems》（2026 年）。它支持形态学、交通、流动性、邻近性和异构图转换。 该库弥合了地理空间数据与图神经网络之间的鸿沟，使城市研究人员和从业者能更轻松地将 GNN 应用于城市规模的问题。它可能加速 GeoAI 研究以及城市规划、交通和流动性分析中的实际应用。 City2Graph 集成了 OpenStreetMap、Overture Maps、GTFS 和 GBFS 数据，并支持 GeoDataFrames、NetworkX、rustworkx 和 PyTorch Geometric Data/HeteroData 之间的转换。它包含用于异构图的元路径派生边，并提供多种图构建方法，如 KNN、Delaunay 和邻接性。

reddit · r/MachineLearning · /u/Tough_Ad_6598 · 8月13日 11:59

**背景**: 异构图神经网络（HGNN）将 GNN 扩展到具有多种节点和边类型的图，以捕获更丰富的语义。城市系统中的地理空间数据通常涉及建筑、街道和公交站点等多种实体，这些可以自然地建模为异构图。City2Graph 旨在通过提供现成的图构建和转换工具来简化这一建模过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dl.acm.org/doi/10.1145/3292500.3330961">Heterogeneous Graph Neural Network | Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining</a></li>
<li><a href="https://arxiv.org/abs/2207.02547">[2207.02547] Simple and Efficient Heterogeneous Graph Neural Network</a></li>
<li><a href="https://pytorch-geometric.readthedocs.io/">PyG Documentation — pytorch_geometric documentation</a></li>

</ul>
</details>

**社区讨论**: 未提供 Reddit 讨论内容，但根据帖子，作者邀请提问和反馈，并希望了解用户接下来想要哪些数据源。社区可能欣赏其实用性，并可能就图构建和与现有工具的集成提出技术问题。

**标签**: `#Graph Neural Networks`, `#Geospatial`, `#Urban Computing`, `#Python Library`, `#Spatial Analysis`

---

<a id="item-10"></a>
## [ChatGPT 图像编辑中可复现的画布对齐伪影](https://www.reddit.com/r/MachineLearning/comments/1vnq08v/reproducible_canvasaligned_lowlevel_patterns_in/) ⭐️ 7.0/10

一位 Reddit 用户在 ChatGPT 图像生成和编辑中发现了一种可复现的画布对齐低层模式伪影，重复编辑肖像会在低细节区域引入微弱的云状纹理。系统测试（包括平移图像和生成黑色图像）表明，该模式并非随机，而是锁定在画布坐标上，独立生成之间具有高相关性。 这一观察表明，基于 LLM 的图像生成器可能存在隐藏的画布对齐偏差或内部处理过程，影响输出一致性，进而可能影响依赖生成式编辑的专业或创意工作流程的可靠性。理解这些伪影对于依赖生成式编辑的开发者和用户至关重要，并可能为未来的模型改进提供参考。 用户发现，在编辑前将图像平移 20 像素会改变伪影的表现，而移除“移回”指令则显著改善结果。黑色图像测试显示，非零像素掩码相关性为 0.848，Jaccard 重叠为 0.766（预期为 0.071），主导空间频率约为 2.45 像素和 5.57 像素，高斯模糊后交叉相关在零滞后处达到峰值。

reddit · r/MachineLearning · /u/DickHorner · 8月13日 22:52

**背景**: 像 ChatGPT 图像生成器这样的生成式图像编辑模型通常使用迭代去噪或修复过程，这可能在低细节区域引入伪影。用户的实验表明，某些内部掩码或分割步骤可能保留特定区域（如面部）而重新生成其他区域，导致伪影不均匀累积。可复现的画布对齐模式暗示生成过程中存在确定性成分，可能与模型架构或训练数据有关。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zsky.ai/blog/ai-image-artifacts-guide">9 Common AI Image Artifacts: Spot & Fix [2026] | ZSky AI</a></li>
<li><a href="https://wandb.ai/wandb/common-ml-errors/reports/How-to-avoid-checkerboard-pattern-in-your-generated-images---VmlldzozNTEzNzk">How to avoid checkerboard pattern in your generated images? | common-ml-errors – Weights & Biases</a></li>
<li><a href="https://arxiv.org/html/2607.05465v1">CanvasAgent: Enabling Complex Image Creation and Editing via Visual Tool Orchestration</a></li>

</ul>
</details>

**社区讨论**: 未提供 Reddit 讨论内容，但基于帖子的技术深度和系统性测试，社区可能围绕水印（如 SynthID）、内部分割或模型特定伪影等假设展开讨论。评论可能就模型透明度的意义进行辩论，并提供额外的实验或解释。

**标签**: `#image generation`, `#artifacts`, `#ChatGPT`, `#generative editing`, `#machine learning`

---

<a id="item-11"></a>
## [消融一个注意力头导致国际象棋 Transformer 无法识别皇后弃子](https://www.reddit.com/r/MachineLearning/comments/1vmvl4w/chessformer_lens_demo_ablating_1_of_a_chess/) ⭐️ 7.0/10

一个名为 chessformer_lens 的演示表明，在国际象棋 Transformer 的 128 个注意力头中消融一个头，会导致模型无法找到 Morphy 的皇后弃子这一著名战术模式。该演示提供了 GitHub 上的笔记本以供复现。 这一发现凸显了特定注意力头对特定战术能力的关键作用，推动了非文本领域的机制可解释性研究。它表明，理解和编辑单个头可能有助于在游戏及其他领域构建更可控、更可解释的 AI 系统。 该 Transformer 有 128 个注意力头，仅消融一个头就会破坏对 Morphy 皇后弃子这一著名国际象棋战术的识别。演示提供了 GitHub 上的笔记本以供复现，该模型很可能是一个基于棋局数据训练的国际象棋 Transformer。

reddit · r/MachineLearning · /u/Weird-Asparagus4136 · 8月13日 00:29

**背景**: 机制可解释性旨在通过识别注意力头等特定组件如何影响行为来逆向工程神经网络。在国际象棋 Transformer 中，注意力头已被证明编码了棋子移动和棋盘状态等模式。消融研究（即移除或禁用组件）是因果验证这些假设的关键方法。该演示建立在先前分析国际象棋 Transformer 的工作之上，例如《Decoding Chess Mastery》论文，该论文引入了注意力模式的分类法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/matiimonti/chess-transformer-ablation">matiimonti/chess-transformer-ablation - GitHub</a></li>
<li><a href="https://arxiv.org/pdf/2601.04398">Interpreting Transformers Through Attention Head Intervention</a></li>
<li><a href="https://link.springer.com/chapter/10.1007/978-3-031-65572-2_7">Decoding Chess Mastery: A Mechanistic Analysis of a Chess ...</a></li>

</ul>
</details>

**标签**: `#interpretability`, `#transformers`, `#chess`, `#mechanistic interpretability`, `#attention heads`

---

<a id="item-12"></a>
## [Liquid AI 发布 LFM2.5-VL-3B，面向端侧视觉语言任务](https://news.google.com/rss/articles/CBMioAFBVV95cUxNWDFKbGdEQmlqNTdVUFVxLXd2MjRwV1FXbVJLOERiNkNhM0lXS0JLQXN6WkVYUDdOay1LSWJxMWIybEo2cllDU0p4Tzg3Zk9zc1ZKTTRaQ1hXendJMDZLNXhlQVNnaTEzbDFKR3RreEs0bUpCVnFKSlI1RzlMRHRTaG1ZQUFSS05OandXZjdHMWx3SGMxT1h3X2RrbEs4b29Q0gGgAUFVX3lxTE1YMUpsZ0RCaWo1N1VQVXEtd3YyNHBXUVdtUks4RGI2Q2EzSVdLQktBc3paRVhQN05rLUtJYnExYjJsSjZyWUNTSnhPODdmT3NzVkpNNFpDWFd6d0kwNks1eGVBU2dpMTNsMUpHdGt4SzRtSkJWcUpKUjVHOUxEdFNobVlBQVJLTk5qd1dmN0cxbHdIYzFPWHdfZGtsSzhvb1A?oc=5) ⭐️ 7.0/10

Liquid AI 发布了 LFM2.5-VL-3B，这是一个 30 亿参数的视觉语言模型，专为端侧部署而设计。它支持屏幕阅读、物体定位和工具调用，并已在 Hugging Face 上提供。 此次发布推动了高效 AI 的发展，使得在边缘设备上执行复杂的多模态任务成为可能，有望扩展移动和物联网应用。同时，它也展示了紧凑型模型在特定能力上可与更大模型相媲美的进展。 LFM2.5-VL-3B 将 SigLIP2 400M NaFlex 视觉编码器与 LFM2.5-2.6B 文本主干相结合，并在约 34 万亿个 token 上进行了预训练，视觉数据量是前代的四倍。它基于 LFM2-VL-3B 进一步进行了中期和后期训练。

google_news · MarkTechPost · 8月13日 15:56

**背景**: 视觉语言模型（VLM）整合视觉和文本信息，以执行图像描述和视觉问答等任务。物体定位涉及将词语与图像中的特定区域关联起来，而工具调用则使模型能够与外部 API 或系统交互。端侧 AI 是指在设备本地运行模型，而非在云端，这降低了延迟并增强了隐私。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.liquid.ai/blog/lfm2-5-vl-3b">LFM2.5-VL-3B: A Better and Faster Vision-Language Model for the Edge — Blog</a></li>
<li><a href="https://huggingface.co/LiquidAI/LFM2.5-VL-3B">LiquidAI/LFM2.5-VL-3B · Hugging Face</a></li>
<li><a href="https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b">LFM2.5-VL-3B for Better and Faster Vision Capabilities for the Edge</a></li>

</ul>
</details>

**标签**: `#vision-language model`, `#on-device AI`, `#Liquid AI`, `#efficient AI`, `#tool calling`

---

<a id="item-13"></a>
## [谷歌 DeepMind 的 SL2T 为 Pixel 11 带来手语转文字功能](https://news.google.com/rss/articles/CBMi6AFBVV95cUxOV0ljUWxsdG9kMDhsZE1DeE1yckFxS3VmbFMweWItdzlrSHVIdHVJMmJkU2YzMUNTRFBVcV9wQmU5c2F0eVl1aWJURjZ2dVhSeWRJaF9wc3dHcDR4aWViTTJOdlFEalBNQXYySE9MZU0tVDBEREZiN1REMFllb1I5dWdkNlNEb2Nwa1F2dEtVVmV4MWdOY3hNTXlTN0c5V2ZPUEZKcXdLRWc5Sk53MVlDajNEdjZhYk5GZnBOdVF6WFo0MnhJU2llb2dkRk9TSUllaUlKODNEdHltSGJONmxyejdjSHhNUmIx?oc=5) ⭐️ 7.0/10

谷歌 DeepMind 宣布了 SL2T（手语转文字），这是一个多语言手语翻译模型，为 Gboard 和 Live Transcribe 中的新手语转文字听写功能提供支持，并首先在 Pixel 11 系列上推出。该功能允许用户通过手语代替打字，摄像头画面在设备本地处理。 这标志着无障碍技术的重大进步，为聋人和听力障碍用户提供了期待已久的智能手机语音转文字的对应功能。它可能为消费设备中的手语 AI 树立新标准，并推动整个行业的更广泛采用。 SL2T 模型支持多种语言，据称相比以前的方法，手语 AI 的准确性提高了一倍。与使用 glosses 的旧方法不同，SL2T 直接捕捉非手部标记和空间结构，并且摄像头画面保留在设备上，仅将身体关键点发送给谷歌。

google_news · Liam O'Dell · 8月13日 13:04

**背景**: 语音转文字几十年来一直是智能手机的标准功能，但聋人和听力障碍用户缺乏相应的功能。手语翻译通常先转换为书面 glosses，这无法捕捉手语丰富的非线性方面。SL2T 旨在通过直接翻译手语为文字来解决这个问题，首先在 Pixel 11 上支持美国手语（ASL）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/">Putting sign language AI into users’ hands — Google DeepMind</a></li>
<li><a href="https://mashable.com/tech/google-pixel-11-asl-sign-to-text">Google’s Pixel 11 can translate American Sign Language into ...</a></li>
<li><a href="https://www.notebookcheck.net/Google-Pixel-11-turns-American-Sign-Language-into-typed-text.1367397.0.html">Google Pixel 11 turns American Sign Language into typed text</a></li>

</ul>
</details>

**标签**: `#Google DeepMind`, `#sign language`, `#accessibility`, `#Pixel 11`, `#AI`

---

<a id="item-14"></a>
## [AI 劫持攻击激增，被盗访问权限推高云账单](https://news.google.com/rss/articles/CBMiwwFBVV95cUxOZ25YNGFHMFE0SGZMdmZ5QTBuZ3FzUDA3cFQ5NEVyMWFkdjZhelZnbVcyZUhHRkhMZEpVRW9BUnJ2aHkyYXpYeTN5Sm4zQjFYdzY2ZHRRTXlEUUMzSkFLQWFXRkgzazJrRjFMYzBSWjVmMTRyU19WeXdtaGVmV0w2X0dNSnI5T2FLTzN2SGllUFl4ZWQwZC05RWNMZnVOUGs1M3R1OTN2SE11dXhWaUoyWVJFQ2pRdjJoMGY1T2ZBM0VadzTSAcgBQVVfeXFMUFUxTGhELTZyRTBYX1A2LTJKU3JybGxySnZQRWRYY3ktdW40SEljU0hTNmx6Nk1SSEVmRWlDR19vMXVDMWRtWk03dTdlSW5FZjNrLXpVVUN6OERiT1lka2wyUElRUkJUdm5kNjNiNFhxOU5wTUdXSU5oUGJORnRnN0dvZjQxZmtaN1BGZzN3RlI0Mnd1V2doWU5YQlp1NFR3N1lkSUZHRkJiMHRNNVkxeGR1cHFBQ3EtM0tqWGV0MjV2ZFpNemU0VFY?oc=5) ⭐️ 7.0/10

攻击者越来越多地利用被盗的访问凭证劫持公司 AI 系统，导致未经授权的使用，并通过虚高的云账单造成重大经济损失。最近的报告和研究强调了这一趋势，包括被盗 API 令牌和 AI 代理漏洞被利用的事件。 这一新兴威胁对采用 AI 的组织构成严重风险，可能导致意外成本、数据泄露和运营中断。它凸显了采取强健安全措施（如最小权限访问和监控）以保护 AI 资产和云环境的紧迫性。 攻击者通常通过钓鱼、恶意软件、暴露的代码仓库和暗网市场窃取访问密钥，然后通过未经授权的代理平台出售折扣模型访问权限。研究表明，AI 代理极易受到劫持，而 DeepSeek-V3 被利用等事件凸显了此类攻击的迅速性。

google_news · Business Standard · 8月13日 09:16

**背景**: AI 系统，尤其是大型语言模型和代理式 AI，依赖 API 令牌和访问凭证进行身份验证。当这些凭证被泄露时，攻击者可以未经授权使用 AI 服务，给合法所有者带来成本。AI 采用的增加扩大了攻击面，使凭证盗窃和 AI 劫持成为网络安全中日益严重的问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations">Technical Blog: Strengthening AI Agent Hijacking Evaluations</a></li>
<li><a href="https://cybernews.com/security/ai-token-theft-powers-cybercrime-transfer-stations/">Hackers turning stolen AI credentials into a thriving black ...</a></li>
<li><a href="https://cybersecuritynews.com/llm-hijackers-deepseek-v3-model/">LLM Hijackers Gained Stolen Access to DeepSeek-V3 Model Very ...</a></li>

</ul>
</details>

**标签**: `#AI security`, `#cybersecurity`, `#threat intelligence`, `#cloud cost`

---

<a id="item-15"></a>
## [Bittensor 的 26 亿美元去中心化 AI 市场](https://news.google.com/rss/articles/CBMinAFBVV95cUxOZEJqSWdOR215XzVJSEhFWC15OVF3Vkt5Rlh5MlNmWVdhNkpiLU4yRGpSUnBUZTJiZjZVS1BUaUVxcWV2XzF6aXc0SURPZ0c1WExqbmVrd2Z0OFFVb2laTFFXXzRxcG1FcXRoWUxGSXpqNTliLTBRc1hxUDVWXy0xNnBXT2FXTmVUUzJoNzNYWkx0bGZjcGtHMUgyT2U?oc=5) ⭐️ 7.0/10

Bittensor 运营着一个价值 26 亿美元的去中心化 AI 市场，机器学习模型在此竞争 TAO 代币奖励，没有任何单一公司控制该网络。 这代表了 AI 与区块链融合的一个重要里程碑，为 OpenAI 等中心化 AI 平台提供了一种去中心化的替代方案。它可能重塑 AI 模型的开发、共享和变现方式，赋能独立贡献者。 该网络使用同行排名系统来确保质量和公平性，以 TAO 代币奖励贡献者。它支持多种数字商品，包括计算、推理、存储和预测。

google_news · Yellow.com · 8月13日 02:57

**背景**: Bittensor 是一个开源协议，通过去中心化网络激励机器学习模型的开发和共享。它形成了一个点对点的智能市场，独立的子网生产数字商品，链上以 TAO 代币支付贡献者。这种方法旨在通过允许任何人参与并获得奖励来实现 AI 的民主化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs-bittensor.github.io/">Bittensor ™ | Home Official</a></li>
<li><a href="https://www.bittensor.com/">Bittensor — decentralized machine intelligence network</a></li>
<li><a href="https://yellow.com/learn/bittensor-decentralized-ai-marketplace-tao-explained">Bittensor Runs A $2.6B AI Marketplace No Company... | Yellow.com</a></li>

</ul>
</details>

**标签**: `#AI`, `#decentralization`, `#blockchain`, `#marketplace`

---

<a id="item-16"></a>
## [军方在乌克兰、加沙和伊朗依赖易出错的人工智能](https://news.google.com/rss/articles/CBMiYEFVX3lxTFBrMkdCQ09qUWtBamtjZXpKQUJJVDltZ1JuM3U0d2lTNGQxMlNHOUlLRnZzRVh5U1BEbEFYMi1SV1FPaWtxU1diQXJTZ0JRcEpZQU02NXlTbEQ5Vk1yNXplMw?oc=5) ⭐️ 7.0/10

Democracy Now! 的文章《AI 杀伤链剖析》报道称，乌克兰、加沙和伊朗的军方越来越依赖容易出错的人工智能系统，引发了对 AI 驱动杀伤链风险的担忧。 这很重要，因为在军事行动中使用易出错的人工智能可能导致意外伤亡并加剧冲突，凸显了紧迫的伦理和安全问题。它影响全球安全和自主武器的未来。 文章可能讨论了 AI 瞄准系统失败的具体事件，如 Shajareh Tayyebeh 导弹袭击，以及“自动化偏见”现象，即人类过度依赖 AI 建议。它还涉及 F2T2EA 框架，该框架展示了 AI 如何将杀伤链从 24 小时压缩到 3 秒。

google_news · Democracy Now! · 8月13日 12:00

**背景**: AI 杀伤链指的是军事目标定位中的一系列步骤，如发现、固定、跟踪、瞄准、交战、评估（F2T2EA），AI 可以加速这些步骤。自主武器系统（AWS）可以独立选择和攻击目标，但由于数据偏差和缺乏上下文而容易出错。国际讨论强调保持人类对这些系统的控制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialweapons.com/kill-chain/">The AI Kill Chain — F2T2EA Explained | Artificial Weapons</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lethal_autonomous_weapon">Lethal autonomous weapon - Wikipedia</a></li>
<li><a href="https://mwi.westpoint.edu/targeting-at-machine-speed-the-capabilities-and-limits-of-artificial-intelligence/">Targeting at Machine Speed: The Capabilities—and Limits—of ...</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#military AI`, `#autonomous weapons`, `#AI safety`, `#geopolitics`

---

<a id="item-17"></a>
## [抗体特异性 AI 框架加速药物发现](https://news.google.com/rss/articles/CBMiwwFBVV95cUxPb0tDWlVXZjR2UFNOQUlpd3VLSFVXUVBLSVVtYWtpOUlUT2YwaDNhWk14amM1SUh2WHhjV0hIT1dxM0RqbWxoa1hkckxqYnAyYjNlRE5hTEVSZTZpdXlqUlhyVWFRaGtpSzZUVnc3VExMRS1ZVUJ5bVZ4OXkxTGpBc1JjV1haTHo5cmk3NkRtVkUzOG80UWxtSFZYNjNUNE51Q0FlZDJTMkktb1BQSUZ6OWdVazdqU2R4bHgtTTJyb0lrRG8?oc=5) ⭐️ 7.0/10

波士顿大学的研究人员开发了一种新的抗体特异性 AI 框架，大幅缩小了治疗性抗体的搜索范围。该团队没有构建更大、更通用的蛋白质模型，而是重新设计了 AI 的学习方式，专注于决定靶标识别的小型抗体区域。 这一进展可能显著加快治疗性抗体的发现，这是开发多种疾病治疗方法的关键步骤。通过使 AI 更高效且更具生物学信息，它可能降低传统药物开发所需的时间和成本，使生物技术和制药行业受益。 该框架紧凑且专门针对抗体设计，不同于通用的蛋白质模型。它教导 AI 专注于抗体的互补决定区（CDR），这些区域对抗原结合至关重要。该研究由波士顿大学的研究人员发表，并于 2026 年 8 月 13 日报道。

google_news · news-medical.net · 8月13日 11:42

**背景**: 抗体药物是一类重要的治疗药物，但发现有效的抗体具有挑战性，因为候选抗体有数百万到数十亿种，只有极少数是有效的。传统方法耗时且昂贵。AI 已越来越多地用于药物发现，但大多数模型是通用的，并未针对抗体的独特性质进行优化。这个新框架通过抗体特异性和生物学信息来填补这一空白。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.news-medical.net/news/20260813/New-antibody-specific-AI-framework-accelerates-discovery-of-therapeutic-drugs.aspx">New antibody-specific AI framework accelerates discovery of ...</a></li>
<li><a href="https://phys.org/news/2026-08-ai-biology-antibodies-drug-discovery.html">Teaching AI the biology of antibodies speeds drug discovery</a></li>
<li><a href="https://bioengineer.org/teaching-ai-antibody-biology-accelerates-drug-discovery/">Teaching AI Antibody Biology Accelerates Drug Discovery</a></li>

</ul>
</details>

**标签**: `#AI`, `#drug discovery`, `#antibody`, `#biotech`, `#machine learning`

---

<a id="item-18"></a>
## [Meta 的 Muse Glimmer：开源 AI 的新篇章](https://news.google.com/rss/articles/CBMixwFBVV95cUxOdTlKNHBmNVBQelVITUpSUzRnQ1dZUHpmVGl6a3pnY1JWUGVYdUxRLWFkS0t1MHVTcHc5VmtmZUdlSFVtWUsyVnM4WWZIQXlPYWhlekVRakpaYW1CUWk5UjlCUDhyWk9uN1RVYmNoTnhqWFVYX29FaHlOX29UalhXbnQyNTFnVG52ejQ2LXFfOV9ZamVPWENfYTVacTRIamNLNVdyNFdRZ04yaE42TGt2YWRQemgwb0FVSS1HQlZRbVdRLU9rc2RB0gHOAUFVX3lxTE9EeVEyQjZiZG9CSjdsMzFQTWd3bzJOcWNSaXJwVzJjNnRmaWlITFpQLWR1dmVlcXh6RUxkRkN6aGdGVTRtVF95SmF5cXRnRnVZZlFyZTByVGsza0JwTHdxZmx5RTBYbUNHMWRXT1NjRDdsaE9jRG1LV0llSWEwSXF3N2xxXy0wbXNFazRJaFRQaUd6WW5jMXdLc3lRNlRDZVdwQlUxeWtlR0F2a09sNmY3UlM0VDlFOEc1bVp6TlR4UFhsVEczNTVHczdzUHBn?oc=5) ⭐️ 7.0/10

Meta 发布了 Muse Glimmer，这是一个 300 亿参数的开源权重 AI 模型，专为在消费级硬件上运行本地代理式 AI 而设计。该模型在 Hugging Face 上以 Apache 2.0 许可证免费提供下载。 Muse Glimmer 的发布加强了 AI 辩论中开源权重一方的力量，提供了一个无需云端依赖即可本地运行的高性能模型。这可能会给闭源模型提供商带来压力，并加速开源权重模型在隐私敏感和成本敏感应用中的采用。 Muse Glimmer 结合了多步推理、可靠的工具使用、多模态理解和故障恢复能力，并设计为在单个消费级 GPU 上运行。Meta 指出，根据其高级 AI 扩展框架，它不属于“前沿 AI”，因为其能力通常低于 Muse Spark。

google_news · The Indian Express · 8月13日 04:00

**背景**: 开源权重与闭源 AI 的辩论核心在于 AI 模型权重是否应公开发布。像 Meta 的 Llama 系列这样的开源权重模型允许开发者在本地运行和微调模型，而像 GPT-4 这样的闭源模型则是专有的，通过 API 访问。Muse Glimmer 是 Meta 推广开源权重 AI 战略的一部分，可能影响监管和行业趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.aixploria.com/en/muse-glimmer-meta-ai/">Muse Glimmer : Reviews, Price, Info & 58 Alternatives AI ... | AIxploria</a></li>
<li><a href="https://lmstudio.ai/models/meta/muse-glimmer">Muse Glimmer is a new 30B open-source model from Meta that...</a></li>
<li><a href="https://huggingface.co/meta-models/Muse-Glimmer-30B">meta - models / Muse - Glimmer -30B · Hugging Face</a></li>

</ul>
</details>

**标签**: `#AI`, `#Meta`, `#open-source`, `#machine learning`, `#industry news`

---

<a id="item-19"></a>
## [克利夫兰诊所推出新型合作模式，扩大环境 AI 医疗抄写员的应用](https://news.google.com/rss/articles/CBMirgFBVV95cUxQblE2ZkZya2lSeklVWW84QWdZQXF2dFJONWlnZDlPZFFaTks4Yk5vQTUwNU9VM0VDQVZZT2Y1NWVDMkVSTXYzNlJKY1lNUGdTLVZfX1BPZmxTdnN3RHZpN2dxaDFNSDlMeGk2Zl9yMkVfNTM2MnE1eXh3bHlydFpRel9QbWxubmlrU3pPU0VKRE0wUkFCeXV4VEUtRE14d2c0akltZTBTcnNIS0h2d0E?oc=5) ⭐️ 7.0/10

克利夫兰诊所推出了一种新型合作模式，以扩大环境 AI 医疗抄写员的部署，旨在提高临床文档记录效率。该模式强调临床、技术和治理团队之间的持久合作，共同重新设计从患者对话到医疗记录的路径。 这一进展意义重大，因为它解决了医疗 AI 应用中的一个关键挑战：从试点到企业级部署的扩展。它为其他医疗系统提供了可借鉴的蓝图，可能加速生成式 AI 在临床工作流程中的整合，并通过减少文档负担来提高医生满意度。 该合作模式采用协作方式，由临床、技术和治理团队共同合作，而不是简单地购买并启用 AI 模型。该模式旨在确保 AI 抄写员有效融入现有工作流程，解决准确性、隐私和治理等问题。

google_news · bioengineer.org · 8月13日 08:21

**背景**: 环境 AI 医疗抄写员是利用大型语言模型转录和总结患者咨询的工具，减轻临床医生的文档负担。它们在 2024 年变得流行，但隐私、准确性和治理问题仍然存在。克利夫兰诊所的模式旨在通过建立超越单纯技术部署的合作伙伴关系来解决这些问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Ambient_AI_medical_scribe">Ambient AI medical scribe</a></li>
<li><a href="https://bioengineer.org/cleveland-clinic-unveils-novel-partnership-model-to-scale-ambient-ai-medical-scribes/">Cleveland Clinic Unveils Novel Partnership Model to Scale ...</a></li>
<li><a href="https://consultqd.clevelandclinic.org/keeping-care-local-expanding-expertise-inside-cleveland-clinic-connected">Inside Cleveland Clinic Connected, A New Collaborative Model</a></li>

</ul>
</details>

**标签**: `#AI in Healthcare`, `#Medical Scribes`, `#Partnership Model`, `#Clinical Workflow`, `#Ambient AI`

---
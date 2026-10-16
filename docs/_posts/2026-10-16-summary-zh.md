---
layout: default
title: "Horizon Summary: 2026-10-16 (ZH)"
date: 2026-10-16
lang: zh
---

> 从 51 条内容中筛选出 9 条重要资讯。

---

1. [Hugging Face Transformers v5.20.0 新增 Meta 816B Muse Spark Open 等模型](#item-1) ⭐️ 8.0/10
2. [Anthropic 在 IPO 前告知投资者季度营收增长近 50% 至 168 亿美元](#item-2) ⭐️ 8.0/10
3. [NVIDIA 发布 Nemotron 3.5 Super VL：120B 开源多模态智能体模型](#item-3) ⭐️ 8.0/10
4. [OpenAI 推出面向生命科学实验室的 Rosalind 学术计划](#item-4) ⭐️ 7.0/10
5. [MIT 与 PNAS 研究：神经网络可自组装学习回路](#item-5) ⭐️ 7.0/10
6. [苹果完成 iPhone AI 功能在华监管备案](#item-6) ⭐️ 7.0/10
7. [CERN 与 Mistral AI 合作打造面向物理学的 AI 模型 Flare](#item-7) ⭐️ 7.0/10
8. [AI 审稿人在里程碑式范围综述测试中与人类专家表现相当](#item-8) ⭐️ 7.0/10
9. [Datalab 发布 OmniParseBench：含 16,288 项通过/失败测试的开源 OCR 基准](#item-9) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Hugging Face Transformers v5.20.0 新增 Meta 816B Muse Spark Open 等模型](https://github.com/huggingface/transformers/releases/tag/v5.20.0) ⭐️ 8.0/10

Hugging Face 发布了 Transformers v5.20.0，原生支持多个新模型，包括 Meta 的 Muse Spark Open——一个总参数 816B（每 token 激活 42B）、上下文窗口达 1,048,576 token 的多模态混合专家模型，以及 InclusionAI 的 Ling 3.0 Flash、Aleph Alpha 的 Kolibri1、OpenBMB 的 MiniCPM-V 4.7、百度的 UnlimitedOcr 和 UltraBERT。 由于 Transformers 是加载和运行开源模型最广泛使用的库，此次发布让开发者无需编写自定义代码即可直接使用 Meta 最大的多模态智能体编程模型及其他新架构，使生态工具链与最新前沿发布保持同步。 Muse Spark Open 接受文本、图像、音频和视频输入并输出文本，提供 BF16 和 NVFP4 两种格式的检查点；Ling 3.0 Flash 以 `BailingHybridForCausalLM` 原生支持，无需 `trust_remote_code=True` 即可加载；而 UnlimitedOcr 是一个 3B 参数的 OCR 模型，采用 Reference Sliding Window Attention 使 KV 缓存在处理数十页时保持恒定。

github · vasqu · 10月15日 18:05

**背景**: 混合专家（MoE）模型将前馈层拆分为许多专门的“专家”子网络，每个 token 只激活其中少数几个，从而使推理成本远低于总参数量所暗示的水平。多模态模型可同时处理文本、图像、音频、视频等多种数据类型，而 NVFP4 是 NVIDIA 的 4 位浮点格式，用于压缩模型、降低显存占用。Hugging Face Transformers 是加载和运行这些开放权重模型的事实标准库。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Multimodal_model">Multimodal model</a></li>
<li><a href="https://medium.com/@kittikawin_ball/you-dont-need-a-phd-to-understand-mixture-of-experts-here-s-the-intuition-in-plain-english-8972d6e7ad51">You Don’t Need a PhD to Understand Mixture of Experts ... | Medium</a></li>
<li><a href="https://ure.us/articles/benchmarking-nvfp4-blackwell/">NVFP 4 : What 4-Bit Really Costs on Blackwell | URE</a></li>

</ul>
</details>

**标签**: `#huggingface`, `#transformers`, `#llm`, `#mixture-of-experts`, `#multimodal`

---

<a id="item-2"></a>
## [Anthropic 在 IPO 前告知投资者季度营收增长近 50% 至 168 亿美元](https://simonwillison.net/2026/Oct/15/anthropic-tells-investors/) ⭐️ 8.0/10

Anthropic 于周三接待了投资者，并披露其第三季度（7/8/9 月）营收达到 168 亿美元，高于第二季度的 115 亿美元和第一季度的约 48 亿美元，环比增长近 50%。公司还表示，模型蒸馏贡献了 5% 至 7% 的营收，并已在第三季度“大幅”削减了这部分业务。 这些数据让外界得以在 IPO 前夕罕见地了解一家领先 AI 实验室的单位经济效益；有报道称此次 IPO 可能筹集高达 1000 亿美元，并使公司估值达到约 2 万亿美元。披露内容还显示，竞争对手的蒸馏支出在单个季度可能超过 5 亿美元，这凸显出 AI 行业有多少收入依赖于竞争对手之间互相利用对方模型的输出进行训练。 第三季度，Anthropic 每在算力上花费 1 美元，就能产生 1.70 美元的营收；剔除股权激励后的调整后营业利润率为 11%。值得注意的是，公司似乎已不再在投资者沟通中强调“年化运行率营收”这一指标。

rss · Simon Willison · 10月15日 13:04

**背景**: 模型蒸馏是一种机器学习技术，即用更大、更强模型的输出训练较小的模型，使其能以低得多的成本在特定任务上达到相近性能。Anthropic 是一家以 Claude 模型闻名的美国 AI 公司，在 2026 年 6 月 1 日秘密提交 IPO 申请后，据报道计划于 2026 年 11 月上市。剔除股权激励后的调整后营业利润率是一种非 GAAP 指标，通过剔除股权奖励成本来更清晰地反映经营盈利能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_distillation">Model distillation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Anthropic_IPO">Anthropic IPO</a></li>
<li><a href="https://www.zacks.com/featured-articles/761/anthropic-ipo">Anthropic IPO 2026 Guide: Price Predictions, Dates, and ...</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#AI industry`, `#IPO`, `#revenue`, `#distillation`

---

<a id="item-3"></a>
## [NVIDIA 发布 Nemotron 3.5 Super VL：120B 开源多模态智能体模型](https://news.google.com/rss/articles/CBMiiwFBVV95cUxPMy1uYTJJUkVWc3RiZlpFYXduMm9TLUlHejU2ZnEtNkI5SlMxcFF6UmxCUjN4b19CLW53a0d0WjZqcm84UDBYUG9kNmZzUGtQV0JzcjVvUUtCWHdtei10RzR6TFBBckExWDFNZWNKTndlQ21fbk53SDZqeGRaMGROekdhblZJUGkwMUU00gGLAUFVX3lxTE8zLW5hMklSRVZzdGJmWkVhd24yb1MtSUd6NTZmcS02QjlKUzFwUXpSbEJSM3hvX0ItbndrR3RaNmpybzhQMFhQb2Q2ZnNQa1BXQnNyNW9RS0JYd216LXRHNHpMUEFyQTFYMU1lY0pOd2VDbV9uTndINmp4ZFowZE56R2FuVklQaTAxRTQ?oc=5) ⭐️ 8.0/10

NVIDIA 正式发布了 Nemotron 3.5 Super VL，这是一个拥有 1200 亿参数的开源多模态智能体模型，采用混合专家（MoE）架构，每个 token 仅激活 120 亿参数。该模型已在 NVIDIA NIM 上作为早期访问的推理模型提供，面向智能体、编程、工具调用和多模态工作负载。 此次发布将 NVIDIA 的 Nemotron 系列扩展至大规模开源多模态智能体模型领域，为研究人员和开发者提供了一个强大的开放权重替代方案，用于构建能够同时处理文本和视觉信息的专用智能体。这也表明 NVIDIA 持续发力开源模型生态，同时将其模型与自家的推理和部署平台深度绑定。 该模型的视觉语言能力专门针对实际智能体任务，例如光学字符识别、读取表格、图表和视觉文档中的结构化信息，以及从网页中提取洞察。其 MoE 设计通过每个 token 仅激活 120 亿参数，在模型容量与推理效率之间取得平衡。

google_news · MarkTechPost · 10月15日 19:53

**背景**: 多模态智能体模型是将大语言模型与视觉能力结合的 AI 系统，使其能够感知并处理文本和图像，从而完成文档理解、界面导航等任务。混合专家（MoE）是一种将模型拆分为多个专用子网络、每次输入仅激活其中少数的架构，从而在保持庞大总参数量的同时降低计算成本。NVIDIA 的 Nemotron 系列是其面向智能体和推理工作负载的开源模型产品线。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/">Open From Data Center to Desktop: NVIDIA Expands Nemotron ...</a></li>
<li><a href="https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/">NVIDIA Nemotron 3.5 Super VL Powers Specialized Agents with ...</a></li>
<li><a href="https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b">nemotron-3.5-super-vl-120b-a12b Model by NVIDIA | NVIDIA NIM</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#multimodal`, `#open-source`, `#large language model`, `#AI agents`

---

<a id="item-4"></a>
## [OpenAI 推出面向生命科学实验室的 Rosalind 学术计划](https://openai.com/index/introducing-the-rosalind-academic-plan) ⭐️ 7.0/10

OpenAI 推出了 Rosalind 学术计划，为符合条件的学术实验室提供 GPT-Rosalind 及相关生命科学研究工具的赞助访问权限。据报道，该计划为美国大学实验室提供最多 30 个免费的 ChatGPT Business 标准席位，为期最长 12 个月，并包含 GPT-Rosalind 的访问权限。 该计划通过让学术实验室使用原本可能过于昂贵或受限的专业 AI 模型，有望加速生命科学研究。这也表明 OpenAI 正在进军“AI for science”领域，可能影响大学将大语言模型整合到生物医学发现中的方式。 该计划面向美国大学的符合条件的学术实验室，包含最多 30 个免费的 ChatGPT Business 标准席位，为期最长 12 个月，并提供 GPT-Rosalind 访问权限。GPT-Rosalind 是一个有限访问的模型系列，专为跨已发表证据、数据、工具和实验的科研工作而构建。

rss · OpenAI News · 10月15日 19:00

**背景**: GPT-Rosalind 是 OpenAI 新推出的有限访问 AI 模型系列，专为生命科学研究设计，可处理分析已发表证据、数据和实验工具等任务。Rosalind 学术计划是一项赞助访问计划，旨在降低学术实验室使用这一专业模型的门槛。OpenAI 一直在扩展其面向科学研究的服务，该计划是这一努力的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-the-rosalind-academic-plan/">Bringing GPT-Rosalind to academic research labs | OpenAI</a></li>
<li><a href="https://help.openai.com/en/articles/20001602-rosalind-academic-plan">Rosalind Academic Plan - OpenAI Help Center</a></li>
<li><a href="https://www.unite.ai/openai-launches-rosalind-academic-plan-for-u-s-university-labs/">OpenAI Launches Rosalind Academic Plan for U.S. University ...</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#academic research`, `#life sciences`, `#AI for science`, `#sponsored access`

---

<a id="item-5"></a>
## [MIT 与 PNAS 研究：神经网络可自组装学习回路](https://www.reddit.com/r/MachineLearning/comments/1x6hmyg/how_artificial_neural_networks_build_their_own/) ⭐️ 7.0/10

2026 年 10 月 9 日发表在 PNAS 上、并由 MIT News 于 10 月 13 日报道的一篇论文指出，由共享局部可塑性规则支配的随机互连类神经元单元能够自组装出学习基元，并完成模式识别和图像分类任务。报告中的对比显示，其性能与所测试的经反向传播训练的网络相近。 这项工作表明，学习机制可以从简单的局部规则中自发涌现，而不必被显式设计，为学习回路如何形成提供了一种更具生物合理性的视角。它可能影响计算神经科学和神经形态计算的研究，但目前还不能在大规模模型中取代反向传播。 关键区别在于：是直接设计学习回路，还是指定局部规则、让学习机制自行组织形成。作者明确提醒，自组织现象并不能证明大脑采用了这一机制；此外，在不同初始连接下基元的稳定性以及能否扩展到所演示任务之外，仍是悬而未决的问题。

reddit · r/MachineLearning · /u/Dorian182 · 10月15日 10:01

**背景**: 反向传播是训练人工神经网络的标准算法，它根据误差调整连接权重，但因其需要全局误差信号，常被认为缺乏生物合理性。相比之下，局部可塑性规则只利用单个突触可获得的信息，因而更贴近生物学现实。本研究探讨的就是这类局部规则能否在没有任何外部设计的情况下自发形成学习回路。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://allatra.media/science/science-self-assembling-synapses-gradient-learning">The Learning Circuit Nobody Had to Design | ALLATRA Media</a></li>

</ul>
</details>

**社区讨论**: r/MachineLearning 上的 Reddit 讨论提出了关于稳定性、可扩展性和生物合理性的重要问题，同时认为这一结果是理解自组织学习系统的重要一步，而非范式转变。

**标签**: `#self-organization`, `#plasticity`, `#backpropagation`, `#neural networks`, `#computational neuroscience`

---

<a id="item-6"></a>
## [苹果完成 iPhone AI 功能在华监管备案](https://news.google.com/rss/articles/CBMiU0FVX3lxTE9GTzJKWjVOUEFXUHpZS1VjZVRfWS12Z1BPb05RN25LUENmcmY0TGJHT0ppQV9wb1g0MFZ2dnBRcklnLV9tQmp1dmY1Uk95enRQQ2Nr?oc=5) ⭐️ 7.0/10

苹果已在中国完成 iPhone AI 功能的监管备案，相关功能将包括 Apple Intelligence 以及阿里巴巴通义千问（Qwen）大语言模型的集成。此次备案涵盖了计划在中国市场销售的 iPhone 设备上提供的 AI 能力。 这是一项重要的战略举措，因为苹果必须与本土大语言模型提供商合作才能符合中国监管要求，而通义千问的集成扫清了 Apple Intelligence 进入苹果最重要市场之一的关键障碍。这也标志着苹果与阿里巴巴在 AI 领域的合作进一步深化。 Apple Intelligence 依赖端侧与服务器处理的结合，支持 iPhone 16 全系列、iPhone 15 Pro 和 Pro Max，以及搭载 M1 及以上芯片的 iPad 和 Mac。在中国，苹果使用的是与操作系统集成的本地版通义千问，而非其他地区提供的 ChatGPT 集成。

google_news · 36 Kr · 10月15日 00:31

**背景**: Apple Intelligence 是苹果于 2024 年 6 月 10 日在全球开发者大会上宣布的一系列 AI 功能，内置于 iOS 18、iPadOS 18 和 macOS Sequoia 中。通义千问（Qwen）是阿里巴巴云开发的大、小语言模型系列，于 2023 年 4 月首次推出测试版。由于中国监管要求 AI 服务使用经批准的国产模型，苹果无法在中国直接提供 ChatGPT 集成，必须依赖阿里巴巴等本土合作伙伴。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Apple_Intelligence">Apple Intelligence</a></li>
<li><a href="https://en.wikipedia.org/wiki/Tongyi_Qianwen">Tongyi Qianwen</a></li>
<li><a href="https://www.apple.com/apple-intelligence/">Apple Intelligence and Siri</a></li>

</ul>
</details>

**标签**: `#Apple`, `#AI`, `#LLM`, `#China`, `#Regulation`

---

<a id="item-7"></a>
## [CERN 与 Mistral AI 合作打造面向物理学的 AI 模型 Flare](https://news.google.com/rss/articles/CBMimwFBVV95cUxOZWJqM3BLWVJseG5Rd3E0c2lYR2VjQ3g5bGxjMkVoYlgxRU5lV0ZiUVRodHIzMmxhSExkQjc1UEVHb3pyOW1fcUJpTVRtMHRsLXJSUFBMRE9JUGppY3l1ZUdpN2w1NFRkUWpsZnNxT1lwVVkwY3ZSaC1xdmFoTjVUekh1X3BaYklDaWVIeFhGVmF2dWp1V0VURm04Yw?oc=5) ⭐️ 7.0/10

欧洲核子研究中心（CERN）与法国 AI 公司 Mistral AI 宣布建立合作伙伴关系，共同开发 Flare——一个专为物理学应用量身定制的新型 AI 模型。据 The Mighty 790 KFGO 报道，这标志着欧洲旗舰粒子物理实验室与欧洲最知名的大语言模型开发商之一的合作。 这一合作表明，面向特定领域的科学 AI 模型（而非通用聊天机器人）正获得越来越多的关注，并有望加速物理学家检索文献、分析数据以及与复杂模拟和探测器信息交互的方式。同时，与欧洲最负盛名的研究机构之一结盟，也进一步巩固了 Mistral 作为欧洲主权 AI 领军者的地位。 该公告几乎没有提供技术细节：具体模型架构、参数规模、训练数据、发布时间表，以及 Flare 将采用开放权重还是专有模式，目前均不明确。目前也不清楚 Flare 是会基于 Mistral 现有模型系列构建，还是会使用物理学专用语料库从零开始训练。

google_news · The Mighty 790 KFGO · 10月15日 18:11

**背景**: CERN（欧洲核子研究组织）是一家成立于 1954 年、总部位于瑞士日内瓦附近的国际组织，专注于高能粒子物理研究，也是大型强子对撞机的所在地。Mistral AI 是一家总部位于巴黎、成立于 2023 年的公司，致力于开发大语言模型，并以开放权重和主权 AI 产品为定位。科学界正越来越多地探索面向特定领域的 AI 模型，以处理通用模型往往难以应对的专业术语、数据格式和推理任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mistral_AI">Mistral AI - Wikipedia</a></li>
<li><a href="https://www.britannica.com/topic/CERN">CERN | Definition, Abbreviation, Large Hadron Collider... | Britannica</a></li>
<li><a href="https://mistral.ai/">Mistral | #1 in Sovereign AI: Frontier Open Models You Own</a></li>

</ul>
</details>

**标签**: `#AI`, `#Mistral`, `#CERN`, `#physics`, `#partnership`

---

<a id="item-8"></a>
## [AI 审稿人在里程碑式范围综述测试中与人类专家表现相当](https://news.google.com/rss/articles/CBMikwFBVV95cUxQSHdBaWladl9ZaENIWFd5THNfVkhaMTJOTUNLWHpiOVVuU2JheTdwQm5ncXJ3Nng1SW5RSDRYNzdkTkowbWVYTDJtWnNweEd5cTJTeVAtTVBFRTM2a2wybV84el9vSmx1Y2tCS2ZSaG5MVHhFVkN1OVRvamhOU3FfUXE1MmFpcUNWTlV6czRvcWdZZWs?oc=5) ⭐️ 7.0/10

Bioengineer.org 报道的一项里程碑式研究显示，AI 审稿人在一项范围综述测试中与人类专家表现相当，表明文献综述有望实现自动化。这一发现说明 AI 系统在这一特定的研究综合任务上能够达到专家级水平。 如果 AI 能在范围综述中可靠地达到人类专家的水平，就能大幅加速研究综合、降低人工筛选的成本与时间负担，并帮助研究团队跟上快速增长的文献数量。这对医学、公共卫生和政策等依赖证据的领域意义重大，因为范围综述和系统综述会直接影响决策。 该新闻摘要未披露所使用的具体 AI 模型、数据集或评估指标，也没有详述研究方法和局限性。读者应注意，在单次范围综述测试中达到人类水平并不一定能推广到所有综述类型或领域，仍需对完整研究进行同行评审以评估其稳健性。

google_news · Bioengineer.org · 10月15日 10:33

**背景**: 范围综述是一种结构化综合方法，用于梳理某一主题证据的范围、数量和性质，回答的是存在哪些文献、空白在哪里，而非某种干预是否有效。系统综述和范围综述传统上需要人类审稿团队筛选成千上万的标题和摘要，过程极为耗时。自然语言处理（NLP）作为 AI 中处理人类语言的子领域，已被越来越多地用于自动化这一流程的部分环节，而本研究正是在检验这种自动化能达到何种程度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9580325/">Steps for Conducting a Scoping Review - PMC</a></li>
<li><a href="https://thereviewprotocol.com/types/scoping/">Scoping Review: A Complete Guide | The Review Protocol</a></li>
<li><a href="https://en.wikipedia.org/wiki/Natural_language_processing">Natural language processing - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI`, `#systematic review`, `#scoping review`, `#research automation`, `#NLP`

---

<a id="item-9"></a>
## [Datalab 发布 OmniParseBench：含 16,288 项通过/失败测试的开源 OCR 基准](https://news.google.com/rss/articles/CBMiqAFBVV95cUxNTkFGMC15WFN4SGlZbldqRGFPWFdFUk81eGFiTktkQWZldFJYTXVqa1BiT0Y1dE4tODN5TGJlMXh4NWc4UVI2ZkNRQ01lZUMya1llMVV5OHlBTUR3UWt6N0ZVVHBKLVgtTDBTUmtDWW5IOTdBVXhNVGRkNXBpMEZnci1iVXFGQU5fdjVUNjR4R1ZrMzcyMVB2T0tSV0V6R0xxN3ltXzFsSlLSAagBQVVfeXFMTU5BRjAteVhTeEhpWW5XakRhT1hXRVJPNXhhYk5LZEFmZXRSWE11amtQYk9GNXROLTgzeUxiZTF4eDVnOFFSNmZDUUNNZWVDMmtZZTFVeTh5QU1Ed1FrejdGVVRwSi1YLUwwU1JrQ1luSDk3QVV4TVRkZDVwaTBGZ3ItYlVxRkFOX3Y1VDY0eEdWazM3MjFQdk9LUldFekdMcTd5bV8xbEpS?oc=5) ⭐️ 7.0/10

Datalab 发布了 OmniParseBench，这是一个包含 16,288 项通过/失败测试的开源 OCR 基准，用于审计和比较 OCR 与文档解析系统。该基准已在 GitHub 的 datalab-to 组织下公开，并在 Hugging Face 上展示了 Datalab 自家 Indra OCR 模型在其页面上的输出示例。 标准化的通过/失败式评估填补了 OCR 与文档 AI 生态中的一个真实空白——此前解析器常以不一致或专有的指标进行比较。一个大规模的开源基准让开发者和研究者能更客观地对比 Chandra、PaddleOCR-VL、GLM-OCR 等模型，并及时发现布局、表格和阅读顺序方面的性能退化。 该基准采用二元的通过/失败格式，而非模糊的相似度评分，使结果更易解读和复现。Datalab 已在 OmniParseBench 页面上发布了其 Indra OCR 模型的参考输出，代码仓库托管于 github.com/datalab-to/omni_parse_bench。

google_news · MarkTechPost · 10月14日 23:37

**背景**: OCR（光学字符识别）将文本图像和 PDF 转换为机器可读格式，而现代文档 AI 解析器更进一步，将布局、表格和阅读顺序保留为结构化的 HTML、Markdown 或 JSON。Datalab 是 Chandra OCR 和 Indra OCR 模型背后的公司，专注于面向科学论文、多语言资料和长篇书籍的高精度文档智能。由于解析器的输出是结构化且开放式的，评估难度较大，因此像 OmniParseBench 这样的基准旨在提供一致、可复现的质量衡量方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/datalab-to/omni_parse_bench">GitHub - datalab-to/omni_parse_bench</a></li>
<li><a href="https://huggingface.co/datalab-to/indra-ocr">datalab-to/indra- ocr · Hugging Face</a></li>
<li><a href="https://github.com/datalab-to/chandra">GitHub - datalab-to/chandra: OCR model that handles complex ...</a></li>

</ul>
</details>

**标签**: `#OCR`, `#benchmark`, `#document AI`, `#evaluation`, `#open source`

---
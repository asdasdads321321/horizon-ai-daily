---
layout: default
title: "Horizon Summary: 2026-10-06 (ZH)"
date: 2026-10-06
lang: zh
---

> 从 51 条内容中筛选出 8 条重要资讯。

---

1. [vLLM v0.31.0 发布：DeepSeek-V4.1-Flash 优化与快速重启](#item-1) ⭐️ 8.0/10
2. [在 10 亿棋局上蒸馏 Stockfish 为 ResNet/ViT 模型](#item-2) ⭐️ 8.0/10
3. [Yandex Music 的 Sona：单个 Transformer 取代 15+ 推荐组件](#item-3) ⭐️ 8.0/10
4. [Anthropic 将 Cowork 虚拟机执行从本地迁移至云端](#item-4) ⭐️ 7.0/10
5. [微型 Transformer 仅用合成 T1DM 数据实现血糖零样本预测](#item-5) ⭐️ 7.0/10
6. [阿贡实验室的智能体 AI 将自然语言转化为自主显微实验](#item-6) ⭐️ 7.0/10
7. [OpenAI 依据欧盟《人工智能法案》启动分阶段文本水印](#item-7) ⭐️ 7.0/10
8. [GPT-4o 聊天机器人在普通人呼吸道疾病诊断中胜过网页搜索](#item-8) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [vLLM v0.31.0 发布：DeepSeek-V4.1-Flash 优化与快速重启](https://github.com/vllm-project/vllm/releases/tag/v0.31.0) ⭐️ 8.0/10

vLLM 发布了 v0.31.0，这是一次包含 717 个提交、来自 307 位贡献者（其中 96 位是新贡献者）的重大更新，核心亮点是针对 DeepSeek-V4.1-Flash 的性能优化，例如将搭载 V4.1 NVFP4 压缩 KV 缓存的 FlashMLA mega attention 设为 SM100 默认实现、为 indexer 引入 DeepGEMM 稀疏 MQA logits，以及把 gate GEMM 与专家选择融合的 Mega-Gate。该版本还新增了 `vllm preload` 命令行工具，通过权重缓存守护进程让量化后的权重在引擎重启期间常驻 GPU 显存，并提供了基于 CRIU 的实验性引擎快照功能（`vllm snapshot create/restore`）。 vLLM 是目前使用最广泛的开源大语言模型推理服务引擎之一，因此它的性能与稳定性改进会直接影响生产环境推理部署的成本和延迟。针对 DeepSeek-V4.1-Flash 的优化以及快速重启的权重缓存，对大规模运行大型 MoE 模型的团队尤为重要，因为重启耗时和显存压力正是这类场景的主要运维痛点。 该版本包含多项破坏性变更：除非设置 `--trust-request-mm-kwargs`，否则按请求传入的多模态 kwargs 会被拒绝；`tokenizer_mode="slow"` 被移除；`--enable-mamba-fine-grained-prefix-cache` 重命名为 `--enable-mamba-shared-prefix-checkpoint`；通过 `quantization="fp8"` 进行的在线量化被 `fp8_per_tensor` 简写取代；AllSpark INT8 W8A16 后端被移除。此外还新增了 `--max-num-active-seqs` 和 `--long-prefill-token-threshold` 等调度控制项，以及 MoonEP 均衡 EP all2all 后端、带序列并行的 DeepEPv2 等大规模服务特性。

github · khluu · 10月5日 06:44

**背景**: vLLM 是一个用于大语言模型和多模态模型推理与服务的开源框架，最初由加州大学伯克利分校 Sky Computing Lab 开发，其核心是 PagedAttention——一种针对 Transformer 键值缓存的内存管理方法，并支持连续批处理、分布式推理、量化和兼容 OpenAI 的 API。DeepSeek-V4.1-Flash 是 DeepSeek 推出的多模态大语言模型，基于 45T token 的多模态语料从零训练，采用稀疏注意力并将上下文扩展到 100 万 token；FlashMLA 则是 DeepSeek 为其模型打造的优化注意力内核库。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/VLLM">VLLM</a></li>
<li><a href="https://www.deepseek.com/en/news/deepseek-v4-1-flash/">Introducing DeepSeek - V 4 . 1 - Flash : smarter, faster, more efficient.</a></li>
<li><a href="https://github.com/deepseek-ai/FlashMLA">GitHub - deepseek-ai/ FlashMLA : FlashMLA : Efficient Multi-head...</a></li>

</ul>
</details>

**标签**: `#vllm`, `#llm-inference`, `#release`, `#performance-optimization`, `#deepseek`

---

<a id="item-2"></a>
## [在 10 亿棋局上蒸馏 Stockfish 为 ResNet/ViT 模型](https://www.reddit.com/r/MachineLearning/comments/1wxz5qq/distilling_stockfish_on_a_billion_positions_full/) ⭐️ 8.0/10

一位开发者利用 Gigafish 数据集中的 10 亿个棋局，将 Stockfish 的价值函数蒸馏到一个 ResNet 与 ViT 结合的神经网络中，并在 Hugging Face 上公开了完整的 39 亿棋局数据集。该数据集由 37 个月的 Lichess 对局构建而成，目标是让神经网络比 Stockfish 本身更快地逼近深度受限搜索的结果。 这项工作表明，知识蒸馏可以将顶级国际象棋引擎的棋力迁移到一个紧凑的神经网络评估器中，有望成为 Stockfish NNUE 之外更快的替代方案。同时，39 亿棋局数据集的公开也为机器学习社区提供了一个大规模的真实世界基准，用于训练和研究棋类模型。 作者发现，纯视觉 Transformer 学习棋盘的速度很慢，而 CNN 由于固有的几何归纳偏置在训练初期更有效，最终将两者结合取得了最佳效果。保持搜索深度恒定至关重要，因为目标是在固定深度下逼近搜索树的价值，而不是完整搜索。

reddit · r/MachineLearning · /u/microscope1024 · 10月5日 04:11

**背景**: Stockfish 是最强的开源国际象棋引擎之一，自 2020 年起使用高效可更新神经网络（NNUE）进行评估，并在 2023 年基本取代了手工设计的评估函数。知识蒸馏是一种训练较小“学生”模型来模仿较大“教师”模型的技术，常用于压缩大型神经网络。Gigafish 数据集提供了数十亿个带有 Stockfish 评估的棋局，非常适合此类蒸馏实验。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Stockfish_NNUE">Stockfish NNUE</a></li>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation - Wikipedia</a></li>
<li><a href="https://huggingface.co/datasets/lukesalamone/gigafish-3.8b-d10">lukesalamone/ gigafish -3.8b-d10 · Datasets at Hugging Face</a></li>

</ul>
</details>

**标签**: `#chess`, `#knowledge-distillation`, `#neural-networks`, `#dataset`, `#machine-learning`

---

<a id="item-3"></a>
## [Yandex Music 的 Sona：单个 Transformer 取代 15+ 推荐组件](https://www.reddit.com/r/MachineLearning/comments/1wy4qxm/sona_one_transformer_replaced_our_15_candidate/) ⭐️ 8.0/10

Yandex Music 推出了 Sona，一个单一的生成式 Transformer 推荐模型，在为期 7 天、每组 15% 用户的智能音箱 A/B 测试中取代了 15+ 个候选生成器、预排序器和排序器。Sona 相比生产对照组实现了 +4.53% 的活跃用户和 +6.30% 的总收听时长，两者均在 p < 0.01 水平上显著，但目前尚未全量上线。 这表明单个端到端生成式推荐模型可以在生产级音乐服务中超越复杂的多阶段级联架构，有望简化推荐系统架构并降低工程开销。如果正在进行的长期 A/B 测试能够验证这一结果，可能会影响整个行业工业推荐系统的设计方式。 Sona 可读取多达 8,192 个事件，并采用 History Compression 技术，将历史拆分为较早的 6,144 个事件和最近的 2,048 个事件，两者通过交叉注意力和一个全历史自注意力层交换信息，从而将推理成本大约减半。随后一个 7 层堆栈仅在最近的 2,048 个事件上运行，解码器和排序模块共享同一编码器输出，因此编码器每次请求只运行一次；目录覆盖率低于生产堆栈，正在调查原因。

reddit · r/MachineLearning · /u/SettingAccording8986 · 10月5日 10:07

**背景**: 工业推荐系统通常以多阶段级联方式部署，包含独立的候选生成器、预排序器和最终排序器，每个阶段使用数百个特征。近期大语言模型的进展启发了单模型生成式推荐器，旨在用一个端到端 Transformer 取代整个级联。Sona 将这一方法应用于 Yandex Music 的音乐推荐，使用束搜索生成的 Semantic ID 作为候选。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.marktechpost.com/2026/10/05/yandex-introduces-sona-a-single-generative-recommender-that-replaces-entire-recommendation-cascade/">Yandex Introduces Sona: A Single Generative Recommender That...</a></li>
<li><a href="https://www.geeksforgeeks.org/nlp/cross-attention-mechanism-in-transformers/">Cross-Attention Mechanism in Transformers - GeeksforGeeks</a></li>
<li><a href="https://www.catalyzex.com/s/Recommender+Systems">Recommender Systems</a></li>

</ul>
</details>

**标签**: `#recommender-systems`, `#transformer`, `#generative-models`, `#efficiency`, `#production-ml`

---

<a id="item-4"></a>
## [Anthropic 将 Cowork 虚拟机执行从本地迁移至云端](https://simonwillison.net/2026/Oct/5/felix-rieseberg/) ⭐️ 7.0/10

Anthropic 的 Claude Cowork 工程负责人 Felix Rieseberg 解释称，"新版" Cowork 将模型推理和虚拟机都放在云端运行，而"旧版"虽然推理在云端，但工具调用是在随应用下发的本地虚拟机中执行的。每个云端会话拥有独立的沙箱，当虚拟机需要访问用户设备上的文件时，由桌面应用负责执行该文件访问的工具调用。 这一转变解决了本地虚拟机执行的主要痛点——磁盘占用、电池消耗、性能开销，以及合上笔记本就中断工作——并使 Cowork 能够从手机端使用或在后台持续运行长任务。这也反映了行业将 AI 智能体执行环境从用户机器迁移到隔离云沙箱的更广泛趋势。 每个会话拥有独立沙箱，不与其他会话共享状态，本地文件访问由桌面应用而非虚拟机本身来中介。Rieseberg 指出，这应当能支持手机端使用、持续运行的工作，以及在不牺牲电池续航的情况下获得完整算力。

rss · Simon Willison · 10月5日 23:56

**背景**: Cowork 是 Anthropic 的智能体产品，让 Claude 通过调用工具来执行多步骤任务，包括读写用户电脑上的文件。为保证这些工具调用的安全性，Anthropic 最初向每位用户的机器下发一个虚拟机，使智能体在隔离环境中运行，且只映射用户明确添加的数据。然而本地运行虚拟机会占用大量磁盘空间、电池和 CPU，这促成了此次架构重构。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://x.com/felixrieseberg/status/2107206431376334975">Felix Rieseberg on X: "Hi! I work on Cowork. Probably no ...</a></li>
<li><a href="https://www.lennysnewsletter.com/p/how-the-engineer-behind-claude-cowork">How the engineer behind Claude Cowork actually uses Claude ...</a></li>
<li><a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview">Tool use with Claude - Claude Platform Docs</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#cloud computing`, `#virtual machines`, `#tool calls`, `#architecture`

---

<a id="item-5"></a>
## [微型 Transformer 仅用合成 T1DM 数据实现血糖零样本预测](https://www.reddit.com/r/MachineLearning/comments/1wy99gd/i_have_trained_a_model_to_predict_my_blood_sugar/) ⭐️ 7.0/10

一位开发者仅使用自建的 T1DM 患者模拟器输出，训练了一个仅含 31,251 个参数的编码器-only Transformer，并在三种不同 CGM 传感器（Libre 3 plus、Anytime CT5、Linx）过去 30 天的真实血糖数据上进行了零样本测试。未附加任何 LoRA 适配器的基础模型实现了零样本泛化，并通过 ExecuTorch 后端部署在 Android 应用上，支持 2 小时及 8 小时夜间自回归预测。 这表明仅用合成数据训练的极小模型也能泛化到真实医疗时间序列，对隐私保护和低资源医疗机器学习具有重要意义。同时说明，在无需暴露敏感患者数据的前提下，反事实推理和端侧推理在个性化糖尿病管理中具有可行性。 该模型有 16 层、每层 1 个注意力头、隐藏维度为 16，在 NVIDIA DGX Spark 上训练不到 60 分钟。它是编码器-only 架构，预测未来 2 小时，并可通过自回归用于更长时域；应用中使用了 LoRA 适配器在实际 CGM 数据上进行轻量微调，但报告的结果来自未附加适配器的基础模型。

reddit · r/MachineLearning · /u/0xdeadf1sh · 10月5日 13:58

**背景**: 编码器-only Transformer（如 BERT）双向处理输入序列，常用于表示学习和预测。零样本学习指模型在训练时未见过特定领域的任何样本，却能完成该任务。LoRA（低秩适配）是一种参数高效微调方法，它冻结基础模型并训练小型适配矩阵，实现轻量级个性化。CGM（连续血糖监测）设备实时追踪血糖，而 T1DM（1 型糖尿病）需要精细的血糖管理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Transformer_(deep_learning)">Transformer (deep learning) - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2506.03128">[2506.03128] Zero-Shot Time Series Forecasting with ... Zero-Shot Time Series Forecasting with Covariates via In ... Benchmarking Foundation Models for Time-Series Forecasting ... Time series foundation models can be few-shot learners LGTime: Leveraging LLMs with feature-aware processing and ... GitHub - PriorLabs/tabpfn-time-series: Zero-shot Time Series ... GitHub - NX-AI/tirex: TiRex: Zero-Shot Forecasting Across ...</a></li>
<li><a href="https://www.emergentmind.com/topics/lora-adapters">LoRA Adapters : Efficient Model Fine - Tuning</a></li>

</ul>
</details>

**标签**: `#machine-learning`, `#healthcare`, `#transformer`, `#time-series`, `#synthetic-data`

---

<a id="item-6"></a>
## [阿贡实验室的智能体 AI 将自然语言转化为自主显微实验](https://news.google.com/rss/articles/CBMiuAFBVV95cUxOTlI5eUFGX21UdFZsei1aMnM0Y0Ffa1J5ZGhyeEtMNm5CTzdVcFU5RmJVOUJ0VXBxNWRwc2Jyd0ZjcGFVMVJtVGxmOHBJMEluWUtGVXBmb3lldmNLVGZUWjJRal9DMElSN3d5RnhIOHJhR3o5TG1Vb2tGZDk2bDlXdnNMUllYS3hsQjU2ZmNJNjI5a1Z1WTU5U2h0SjZGR1BfSGRGdktYR01SVnJhWkRKYkM1R1ZFZXY0?oc=5) ⭐️ 7.0/10

美国能源部阿贡国家实验室的研究人员展示了一种智能体 AI 能力，可将简单的自然语言指令转化为自主进行的显微实验，该成果属于“协同中子与光子科学—智能”（SYNAPS-I）项目的一部分。科学家只需用日常语言描述想要研究的内容，AI 便能自主规划并执行成像流程，实际上相当于一种新型显微镜。 这标志着 AI 驱动科学发现迈出了重要一步：自主智能体承担实验中繁琐、反复的环节，让研究人员能专注于更高层次的问题。如果得到广泛应用，这类系统有望通过让先进的中子、X 射线和显微设施更易用、更高效，从而加速材料科学等领域的研究。 该能力属于 SYNAPS-I 项目，该项目旨在将各国家实验室的中子、X 射线和显微实验数据整合为统一的协同工作。阿贡的相关工作（如 FAST）利用 AI 在高分辨率扫描中仅识别和测量稀疏的关键区域——缺陷或界面，因为大部分有用信息都集中在那里。

google_news · anl.gov · 10月5日 12:00

**背景**: 智能体 AI（Agentic AI）指的是能够自主追求目标、跨多个步骤推进的系统：它会把目标拆解为任务、调用工具，并在较少人工干预下完成工作，而不是只对单次提示作出回应。高分辨率扫描显微镜会产生海量数据，但大部分信息集中在缺陷或界面等稀疏区域，因此自动定位目标非常有价值。阿贡国家实验室是美国能源部下属的顶尖研究中心，运营着多个大型科学用户设施，而 SYNAPS-I 等项目旨在将 AI 与这些仪器结合以加速科学发现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anl.gov/article/a-new-kind-of-microscope-agentic-ai-turns-simple-language-into-selfguided-experimentation">A new kind of microscope: Agentic AI turns simple language ...</a></li>
<li><a href="https://www.anl.gov/pse/ai-drives-autonomous-scanning-microscopy">AI Drives Autonomous Scanning Microscopy | Argonne National ...</a></li>
<li><a href="https://getmorefromai.com/glossary/agentic-ai">Agentic AI : Definition , Examples, and Why It Matters | GetMoreFromAI</a></li>

</ul>
</details>

**标签**: `#agentic AI`, `#scientific discovery`, `#microscopy`, `#laboratory automation`, `#AI for science`

---

<a id="item-7"></a>
## [OpenAI 依据欧盟《人工智能法案》启动分阶段文本水印](https://news.google.com/rss/articles/CBMiigFBVV95cUxNVEpZTFpIcEFGUlo1SThrMEdnMzItS0Nqczh5b0UtcUNhTENLeHVvRWdXS3Y2dy1BLWdvaVRlb2lmOTR6VHI4SVRaLXBEQ3pLRHJYTm02NzNVTUoyWjBtZTZObGhhSWIxdHBIWG8wRUFDX1BRX21SNTE0Rk9xY2RkbnJlTE1ERm04MHc?oc=5) ⭐️ 7.0/10

OpenAI 已开始对其人工智能生成的文本输出分阶段部署文本水印，以遵守欧盟《人工智能法案》。此举是领先模型提供商首次大规模生产部署统计式文本水印之一。 这一进展可能为其他人工智能提供商树立合规先例，因为欧盟《人工智能法案》对任何在欧盟拥有用户的提供商都具有域外效力。它还会影响出版、教育和媒体生态中对人工智能生成内容的检测与溯源方式。 大多数已部署的文本水印算法依赖只有模型提供商知晓的密钥，因此检测通常需要访问该密钥或提供商的 API，而非使用通用检测器。欧盟《人工智能法案》与加州《人工智能透明度法案》的水印义务预计将于 2026 年 8 月开始适用。

google_news · Unite.AI · 10月5日 15:37

**背景**: 文本水印是一种对生成式人工智能模型（如大语言模型）输出进行细微修改的技术，以便日后识别文本由人工智能生成。欧盟《人工智能法案》于 2024 年 8 月 1 日生效，是全球首部综合性人工智能法律，对通用人工智能提供商施加透明度义务，相关条款在 6 至 36 个月内逐步实施。内容溯源工作，如 C2PA 标准和 Adobe 的内容真实性倡议，同样旨在为数字内容来源建立可验证的记录。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Text_watermarking">Text watermarking</a></li>
<li><a href="https://en.wikipedia.org/wiki/EU_AI_Act">EU AI Act</a></li>
<li><a href="https://c2pa.org/">C2PA | Verifying Media Content Sources</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#watermarking`, `#OpenAI`, `#EU AI Act`, `#content provenance`

---

<a id="item-8"></a>
## [GPT-4o 聊天机器人在普通人呼吸道疾病诊断中胜过网页搜索](https://news.google.com/rss/articles/CBMipAFBVV95cUxPZUdSTjN1LUR3aHZiRXZ2UXdTN2FxT0xsclFKVmZNR2NSOUFicTRQRG9IMjRiZEp2NWlOUzFxaVhLMDUtQWswd0dtaGFMcV9MaE1sR0JPV1B5NHlpVnRoelBvWmg4Z1FtZFBPRzF2V0llMkNUckVlM3NzZmoxMGl0VFhCWFZXcXE1QWs3ZWVpUU12QXNPbjNaNnYzamw4NnhPUU5EUw?oc=5) ⭐️ 7.0/10

一项在中国进行的随机预注册试验，涉及 2400 名普通人，发现嵌入微信的基于 GPT-4o 的呼吸道聊天机器人在 88 个临床案例中的诊断准确性优于传统网页搜索。 这展示了 AI 聊天机器人相对于传统网页搜索在非专家医疗诊断中的实际优势，可能影响医疗技术的采用和患者行为，有望减少误诊并改善早期分诊。 该试验为随机预注册研究，涉及 2400 名中国普通人，使用嵌入微信的基于 GPT-4o 的聊天机器人，针对 88 个呼吸道疾病临床案例进行评估。

google_news · Bioengineer.org · 10月5日 12:39

**背景**: 呼吸道疾病如感冒和流感很常见，普通人常通过网页搜索进行诊断，这可能导致不准确的自我评估。基于 GPT-4o 等 AI 聊天机器人可以进行对话式症状评估，可能提供更准确的指导。本研究在受控环境中比较了这两种方法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bioengineer.org/ai-chatbot-beats-web-search-at-helping-laypeople-diagnose-respiratory-illness/">AI Chatbot Beats Web Search at Helping Laypeople Diagnose ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Healthcare`, `#Diagnosis`, `#Chatbots`, `#Medical AI`

---
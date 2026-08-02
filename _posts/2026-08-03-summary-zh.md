---
layout: default
title: "Horizon Summary: 2026-08-03 (ZH)"
date: 2026-08-03
lang: zh
---

> 从 66 条内容中筛选出 16 条重要资讯。

---

1. [公开信辩论美国开放权重 AI 模型政策](#item-1) ⭐️ 8.0/10
2. [中国 DFSX 芯片内存带宽达 NVIDIA GB200 两倍](#item-2) ⭐️ 8.0/10
3. [llama.cpp 为 DeepSeek V4 Flash 添加 MTP/DSpark 支持](#item-3) ⭐️ 8.0/10
4. [通过 NVMe 流式加载，Kimi K3 在单 CPU 和 8GB 内存上运行](#item-4) ⭐️ 8.0/10
5. [LLM 上下文退化：研究见解与实践习惯](#item-5) ⭐️ 7.0/10
6. [CausalVLBench：大型视觉语言模型视觉因果推理的新基准](#item-6) ⭐️ 7.0/10
7. [DeepSeek-V4-Flash-0731 在国际象棋基准上超越 Fable-5、Sol 和 Kimi-K3](#item-7) ⭐️ 7.0/10
8. [用户计划搭建 16 台 DGX Spark 集群以运行前沿开源模型](#item-8) ⭐️ 7.0/10
9. [Vacuum 16T：虚假 16.5T 模型暴露 Hugging Face 参数计数漏洞](#item-9) ⭐️ 7.0/10
10. [KV 缓存量化损害 DeepSeek V4 Flash 质量](#item-10) ⭐️ 7.0/10
11. [llama.cpp 推出官方 Mac 应用和简化的 'llama serve' 命令](#item-11) ⭐️ 7.0/10
12. [DeepSeek-V4-Flash-0731：低推理模式比高模式消耗更多令牌](#item-12) ⭐️ 7.0/10
13. [欧盟《人工智能法案》通用人工智能规则正式生效](#item-13) ⭐️ 7.0/10
14. [非洲群体创建 4216 项 AI 安全测试，覆盖 8 种语言](#item-14) ⭐️ 7.0/10
15. [澳大利亚书商警告：稀有书籍被毁以训练 AI](#item-15) ⭐️ 7.0/10
16. [中国警方 AI 以 90%准确率追踪比特币洗钱](#item-16) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [公开信辩论美国开放权重 AI 模型政策](https://simonwillison.net/2026/Aug/2/open-letters/#atom-everything) ⭐️ 8.0/10

Simon Willison 总结了近期主要 AI 公司的公开信，包括由微软牵头、235 家公司签署的支持开放权重 AI 模型的信件，以及随后 Anthropic 的信件和由 1,324 名前沿 AI 公司员工签署的“Pacing the Frontier”信件。这些信件旨在反对美国政府可能基于安全担忧对开放权重模型实施的限制。 这些信件可能影响美国 AI 监管，决定开放权重模型是被限制还是被推广。辩论凸显了微软和英伟达等支持开放权重的公司与强调风险的 Anthropic 之间的分歧，影响 AI 发展和竞争的未来。 微软牵头的信件明确支持蒸馏技术，即模型利用其他模型的输出进行训练，该技术因可能被滥用而存在争议。值得注意的是，Anthropic 未签署该信件，而是在三天后发布了自己的立场，呼吁打击工业规模的蒸馏操作，同时否认主张禁止开放权重模型。

rss · Simon Willison · 8月2日 04:16

**背景**: 开放权重 AI 模型是指其核心组件（包括训练后的权重和偏置）公开发布，任何人都可以下载和使用的模型。这与封闭模型形成对比，后者是专有的，只能通过 API 访问。关于开放权重的辩论涉及在创新和透明度与潜在安全风险（如被用于网络攻击或生物攻击）之间取得平衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>
<li><a href="https://www.nytimes.com/2026/07/28/technology/open-weight-ai.html">What Is Open-Weights A.I.? - The New York Times</a></li>
<li><a href="https://simonw.substack.com/">Simon Willison ’s Newsletter | Substack</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#open-weight models`, `#regulation`, `#industry`, `#Simon Willison`

---

<a id="item-2"></a>
## [中国 DFSX 芯片内存带宽达 NVIDIA GB200 两倍](https://www.reddit.com/r/LocalLLaMA/comments/1vduej3/chinas_dfsx_offers_2x_the_memory_bandwidth_of/) ⭐️ 8.0/10

中国的 DFSX 发布了 DF2000 芯片和 TY64 超级节点，声称内存带宽达到 960TB/s，是 NVIDIA GB200 NVL72 系统 576TB/s 的两倍。 这一进展表明，尽管美国实施出口管制，中国在 AI 硬件方面仍取得进步，可能在 AI 加速器市场上提供具有竞争力的替代方案。 DF2000 芯片采用 14nm 工艺，并采用跳过微凸块的垂直计算-内存塔结构，从而实现高带宽。TY64 超级节点由 64 颗此类芯片组成，提供 960TB/s 的聚合带宽。

reddit · r/LocalLLaMA · /u/MundanePercentage674 · 8月2日 21:39

**背景**: 内存带宽对 AI 工作负载至关重要，因为它决定了数据馈送到计算单元的速度。NVIDIA 的 GB200 NVL72 使用 HBM3e 内存，而 DFSX 采用新颖的封装技术，在较旧的 14nm 工艺上实现了更高的带宽。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wccftech.com/chinas-dfsx-offers-2x-the-memory-bandwidth-of-nvidias-gb200-nvl72-system-with-a-14nm-supernode-that-skips-microbumps-for-vertical-compute-memory-towers/">China's DFSX Offers 2x The Memory Bandwidth Of NVIDIA's ... - Wccftech</a></li>
<li><a href="https://finance.yahoo.com/technology/ai/articles/chinese-ai-startup-dfsx-releases-045700649.html">Chinese AI Startup DFSX Releases Chip to Take on the West</a></li>
<li><a href="https://hellochinatech.com/p/dfsx-14nm-ai-chip-wager">Can China's 14nm AI Chip Challenge 4nm Designs?</a></li>

</ul>
</details>

**标签**: `#AI hardware`, `#China`, `#NVIDIA`, `#memory bandwidth`, `#semiconductors`

---

<a id="item-3"></a>
## [llama.cpp 为 DeepSeek V4 Flash 添加 MTP/DSpark 支持](https://www.reddit.com/r/LocalLLaMA/comments/1vdhgq9/llamacpp_just_added_mtp_dspark_support_for/) ⭐️ 8.0/10

llama.cpp 已为 DeepSeek V4 Flash 添加 MTP（多令牌预测）和 DSpark 支持，使得该模型能够在本地硬件上进行投机解码和多令牌生成。此更新紧随社区移植之后，是广受欢迎的本土推理引擎持续增强的一部分。 此更新显著提高了在本地运行 DeepSeek V4 Flash 的效率和速度，该模型是一个拥有 2840 亿总参数但仅 130 亿激活参数的大型 MoE 模型。它使得硬件有限的用户能够更实际地运行该模型，扩大了本地社区对最先进 LLM 的可及性。 llama.cpp 中的 MTP 支持基于 DSpark 论文，该论文引入了用于投机解码的置信度调度验证。该实现可能包含一个单独的 MTP 头，并使用两阶段验证过程来提高令牌接受率，这在相关的功能请求和社区移植中可以看到。

reddit · r/LocalLLaMA · /u/rmhubbert · 8月2日 12:58

**背景**: DeepSeek V4 Flash 是一个混合专家（MoE）模型，总参数为 2840 亿，但每个令牌仅激活 130 亿参数，这使得推理效率更高。MTP（多令牌预测）是一种模型同时预测多个未来令牌的技术，可提高速度和连贯性。DSpark 是一种投机解码方法，使用单独的草稿模型提出令牌，然后由目标模型验证，从而减少延迟。llama.cpp 是一个流行的开源 C++ 库，用于在消费级硬件上本地运行 LLM。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/ggml-org/llama.cpp/issues/25096">Feature Request: DSpark confidence-scheduled verification...</a></li>
<li><a href="https://huggingface.co/LordNeel/DeepSeek-V4-Flash-Acti-MTP-W4A16-FP8">LordNeel/DeepSeek-V4-Flash-Acti-MTP-W4A16-FP8 · Hugging Face</a></li>
<li><a href="https://github.com/NeelM0906/Mference/blob/main/README.md">Mference /README.md at main · NeelM0906/ Mference · GitHub</a></li>

</ul>
</details>

**社区讨论**: Reddit 帖子重点介绍了一个名为 Mference 的相关项目，这是一个独立的引擎，通过从 SSD 流式传输 MoE 专家来在低内存 Mac 上运行大型模型，包括 DeepSeek V4 Flash。社区讨论可能集中在在有限硬件上运行此类大型模型的实用性上，用户分享性能数据并对进一步优化表示兴趣。

**标签**: `#llama.cpp`, `#DeepSeek`, `#MTP`, `#DSpark`, `#local LLM`

---

<a id="item-4"></a>
## [通过 NVMe 流式加载，Kimi K3 在单 CPU 和 8GB 内存上运行](https://www.reddit.com/r/LocalLLaMA/comments/1vd874t/i_pushed_kimi_k3_onto_one_cpu_with_8_gb_of_ram/) ⭐️ 8.0/10

一位开发者用 C99 编写了一个推理引擎，通过从 NVMe 流式加载专家并打包稠密主干，在仅有 8GB 内存的单 CPU 上运行了 1.56TB 的 MoE 模型 Kimi K3。在最小预设下，该引擎实现了约 33 秒/令牌的速度，且在不同内存预算下输出字节一致。 这展示了一种在极度受限硬件上运行大规模 MoE 模型的新方法，可能降低本地实验和研究的门槛。同时，它也凸显了基于 CPU/NVMe 的推理作为昂贵 GPU 集群替代方案的日益增长趋势。 该引擎每个令牌仅从 NVMe 读取 16 个激活的专家，直接从打包的 4 位形式进行乘法运算而无需反量化，并从重新打包的文件中逐层流式加载稠密主干。它不使用 BLAS 或 GPU，由六个 C 文件组成，使用 OpenMP，生成 176KB 的二进制文件；仓库包含一个测试模式，无需下载权重即可在一分钟内运行。

reddit · r/LocalLLaMA · /u/FareedKhan557 · 8月2日 04:26

**背景**: Kimi K3 是 Moonshot AI 最新的开源权重多模态 MoE 模型，总参数约 2.8T，上下文窗口为 1M 令牌。在 MoE（混合专家）模型中，每个令牌只激活一小部分专家，这使得模型可以拥有庞大的参数量，同时保持推理计算量可控。传统推理需要将所有权重加载到内存中，但按需从 NVMe 流式加载专家，使得在内存有限的机器上运行此类模型成为可能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://vast.ai/model/kimi-k3">Kimi K 3 - AI Model Library | Build on Vast.ai</a></li>
<li><a href="https://kie.ai/blog/what-is-kimi-k3">What Is Kimi K 3 ? Moonshot's 2.8T, 1M-Context Flagship</a></li>
<li><a href="https://dev.to/randyap8wq/i-streamed-mixtral-8x7b-from-nvme-on-a-040hour-vm-and-got-332-tps-heres-how-19bf">I streamed Mixtral 8x7B from NVMe on... - DEV Community</a></li>

</ul>
</details>

**社区讨论**: Reddit 上的讨论可能包括对工程努力的赞赏，以及关于速度与内存使用之间权衡的技术辩论。一些人可能会质疑 33 秒/令牌的实用性，而另一些人则欣赏其教育价值和新颖的流式方法。

**标签**: `#MoE`, `#inference`, `#CPU`, `#Kimi K3`, `#optimization`

---

<a id="item-5"></a>
## [LLM 上下文退化：研究见解与实践习惯](https://www.reddit.com/r/MachineLearning/comments/1vdsgcj/context_degradation_in_llms_what_the_papers/) ⭐️ 7.0/10

r/MachineLearning 上的一篇 Reddit 帖子讨论了关于 LLM 上下文退化的研究实际显示的内容，并分享了长分析会话的实用习惯。帖子引用了论文和实证指标，如事实保留率和指令漂移。 上下文退化对于在长上下文任务中使用 LLM 的从业者来说是一个关键问题，因为它影响可靠性和性能。理解研究并采用有效习惯有助于缓解这些问题，改善实际应用。 该帖子可能强调上下文退化是渐进且可测量的，使用最大有效上下文窗口（MECW）等指标量化差距。它还可能讨论上下文工程和 RAG 等技术来缓解退化。

reddit · r/MachineLearning · /u/usernamehere93 · 8月2日 20:20

**背景**: 上下文退化，也称为“上下文腐烂”，指的是随着 LLM 输入长度增加，模型在召回、连贯性和指令遵循方面逐渐退化。研究表明，即使具有大上下文窗口的模型也会性能下降，这使其成为长上下文应用的重大挑战。实用习惯，如分块信息或使用检索增强生成，有助于保持性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/topics/context-degradation-in-large-language-models">Context Degradation in LLMs</a></li>
<li><a href="https://morphi.vercel.app/context-rot">Context Rot: Why LLMs Degrade as Context Grows (Complete Guide)</a></li>
<li><a href="https://atlan.com/know/llm-context-window-limitations/">LLM Context Window Limitations in 2026</a></li>

</ul>
</details>

**标签**: `#LLM`, `#context window`, `#machine learning`, `#practical tips`

---

<a id="item-6"></a>
## [CausalVLBench：大型视觉语言模型视觉因果推理的新基准](https://www.reddit.com/r/MachineLearning/comments/1vdd7ty/r_causalvlbench_benchmarking_visual_causal/) ⭐️ 7.0/10

CausalVLBench 是一个新推出的基准，旨在评估大型视觉语言模型（LVLMs）的视觉因果推理能力。它包含三个任务，测试模型从描述可见状态到识别潜在因果机制的能力。 该基准解决了 LVLMs 中一个未被充分探索的能力，这些模型通常在识别和基本推理方面被评估，但很少涉及因果理解。通过突出这一差距，CausalVLBench 可能推动未来模型架构和训练范式的改进，最终提升 AI 在视觉情境中推理因果关系的能力。 该基准围绕三个任务构建，要求模型从视觉输入中推断因果机制，超越简单的状态描述。研究人员希望它能揭示现有 LVLMs 的缺陷，并激发视觉因果推理的新研究方向。

reddit · r/MachineLearning · /u/moschles · 8月2日 09:07

**背景**: 大型视觉语言模型（LVLMs）如 GPT-4V 和 CLIP 在图像描述和视觉问答等任务上表现出色。然而，标准基准通常侧重于识别和表面推理，未测试更深层次的因果理解。因果推理是人类智能的基本方面，在 AI 系统中评估它对于迈向通用人工智能至关重要。CausalVLBench 旨在通过提供视觉因果推理的结构化评估来填补这一空白。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.remio.ai/post/causalvlbench-pushes-visual-ai-beyond-recognition-and-exposes-a-reasoning-gap">CausalVLBench Pushes Visual AI Beyond Recognition, and Exposes...</a></li>
<li><a href="https://arxiv.org/html/2506.11034">CausalVLBench: Benchmarking Visual Causal Reasoning in Large...</a></li>

</ul>
</details>

**标签**: `#benchmark`, `#vision-language models`, `#causal reasoning`, `#AI evaluation`

---

<a id="item-7"></a>
## [DeepSeek-V4-Flash-0731 在国际象棋基准上超越 Fable-5、Sol 和 Kimi-K3](https://www.reddit.com/r/LocalLLaMA/comments/1vdq8en/deepseekv4flash0731_surpasses_fable5_sol_kimik3/) ⭐️ 7.0/10

DeepSeek-V4-Flash-0731 是 DeepSeek V4-Flash 模型的最新官方版本，据报道在国际象棋基准上超越了 Fable-5、Sol 和 Kimi-K3。该消息发布在 Reddit 的 r/LocalLLaMA 社区。 这一结果凸显了 DeepSeek 在快速迭代和特定领域（如国际象棋）的竞争力，可能吸引对游戏 AI 感兴趣的用户。同时，这也表明前沿大模型之间的竞争日益激烈，不同实验室的新模型正在相互基准测试。 DeepSeek-V4-Flash-0731 是一个稀疏混合专家模型，总参数 284B，激活参数 13B，定价为每百万输入 token 0.09 美元，每百万输出 token 0.18 美元。它取代了预览版，并增强了智能体能力，在 Artificial Analysis 智能指数上得分为 50，比上一版本高出 10 分。

reddit · r/LocalLLaMA · /u/mrwang89 · 8月2日 18:54

**背景**: 国际象棋基准用于评估大语言模型的战略推理和规划能力，因为下棋需要深度搜索和模式识别。DeepSeek-V4-Flash-0731 是 DeepSeek V4-Flash 系列的一部分，该系列旨在保持高性能的同时实现高效推理。Fable-5（可能是 Claude Fable 5）是 Anthropic 的模型，而 Kimi-K3 是 Kimi 推出的 2.8 万亿参数模型，两者都是大模型领域的顶级竞争对手。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731">deepseek-ai/DeepSeek-V4-Flash-0731 · Hugging Face</a></li>
<li><a href="https://artificialanalysis.ai/articles/deepseek-v4-flash-0731-scores-50-on-the-artificial-analysis-intelligence-index-10-points-above-previous-deepseek-v4-flash">DeepSeek V4 Flash 0731 scores 50 on the Artificial Analysis Intelligence Index, 10 points above previous DeepSeek V4 Flash</a></li>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-flash-0731">DeepSeek V4 Flash 0731 - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#LLM`, `#benchmark`, `#chess`

---

<a id="item-8"></a>
## [用户计划搭建 16 台 DGX Spark 集群以运行前沿开源模型](https://www.reddit.com/r/LocalLLaMA/comments/1vdcgpm/setting_up_of_a_16xgb10_dgx_spark_cluster/) ⭐️ 7.0/10

一位 Reddit 用户分享了搭建 16 节点 DGX Spark（GB10）集群的计划，使用华硕 GX10 设备，通过 MikroTik CRS804-4DDQ 交换机以 400G 到 100G 分支线缆连接。该集群旨在运行前沿开源模型，如 DeepSeek V4 Pro、Kimi K3，以及未来的 GLM 5.5 和 Minimax M4 等模型。 这一设置代表了在本地运行前沿开源模型的重要一步，可能使家庭环境能够处理 AGI 规模的工作负载。它凸显了个人 AI 超级计算的增长趋势，以及集群网络和配置的实际挑战。 用户计划在 8 节点集群上分别运行两个模型，但也希望具备运行 2T+参数模型的能力。网络使用 MikroTik CRS804-4DDQ，通过 4 根分支线缆将 400G 转换为 100G，集群基于 Nvidia 的 GB10 超级芯片，并配备 ConnectX-7 网络。

reddit · r/LocalLLaMA · /u/ciprianveg · 8月2日 08:22

**背景**: DGX Spark 是 Nvidia 基于 Grace Blackwell 架构的个人 AI 超级计算机，在 FP4 精度下提供高达 1 petaFLOP 的 AI 性能。GB10 超级芯片集成了 GPU、CPU 和网络，ConnectX-7 提供 200Gbps 带宽。MikroTik CRS804-4DDQ 是一款紧凑型 400G 交换机，具有四个 QSFP-DD 端口，专为 AI 和边缘计算设计，可使用 QSFP28 线缆将 400G 分支为 100G。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/">Personal AI Supercomputer Powered by Blackwell | NVIDIA DGX Spark</a></li>
<li><a href="https://www.servethehome.com/mikrotik-crs804-ddq-announced-4-port-400gbe-switch/">MikroTik CRS 804 DDQ Announced 4-Port 400GbE... - ServeTheHome</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>

</ul>
</details>

**标签**: `#DGX Spark`, `#local LLM`, `#cluster`, `#hardware`, `#open models`

---

<a id="item-9"></a>
## [Vacuum 16T：虚假 16.5T 模型暴露 Hugging Face 参数计数漏洞](https://www.reddit.com/r/LocalLLaMA/comments/1vdh1us/vacuum_16t/) ⭐️ 7.0/10

一位用户向 Hugging Face 上传了一个名为“Vacuum 16T”的模型，声明拥有 16.5 万亿参数，但实际内容全为零，利用参数计数仅基于 safetensors 头部而不读取实际数据这一漏洞，使该模型在 Hub 的参数数量排名中登顶。 这一演示凸显了 Hugging Face 在评估和信任模型规模方面存在的关键缺陷，可能误导用户并削弱对 AI 基础设施的信任。它强调了需要对模型元数据和内容进行更健壮的验证。 该模型使用 3,841 个形状为[65536, 65536]的 4 位张量，分布在 385 个分片中，外加一个形状为[4294967296, 1]的位置嵌入张量，全部填充为零。上传利用 Xet 内容定义分块对相同块进行去重，实际传输仅约 692 KB，尽管声明了 8.25 TB，但存储配额仍按完整逻辑大小计费。

reddit · r/LocalLLaMA · /u/alerikaisattera · 8月2日 12:39

**背景**: Hugging Face 通过 safetensors 头部中的张量形状乘积之和来计算仓库的参数数量，而不读取实际张量数据。Safetensors 是一种安全存储张量的格式，其头部包含形状和数据类型等元数据。这种设计使得如果头部被精心构造，声明的参数数量可以被操纵。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/docs/safetensors/index">Safetensors · Hugging Face</a></li>
<li><a href="https://huggingface.co/docs/safetensors/v0.3.2rc1/en/metadata_parsing">Metadata Parsing</a></li>

</ul>
</details>

**标签**: `#AI`, `#Hugging Face`, `#model evaluation`, `#security`, `#satire`

---

<a id="item-10"></a>
## [KV 缓存量化损害 DeepSeek V4 Flash 质量](https://www.reddit.com/r/LocalLLaMA/comments/1vduxth/you_really_should_not_quantize_kv_cache_for/) ⭐️ 7.0/10

一项实证分析表明，将 DeepSeek V4 Flash 的 KV 缓存从 BF16 量化到 Q8 会显著降低输出质量，平均困惑度增加 0.64%，平均 KL 散度升至 0.1459，与 Qwen 397B 的微小影响形成鲜明对比。 这一发现对部署 DeepSeek V4 Flash 的从业者至关重要，因为 KV 缓存量化是减少内存占用和加速推理的常用技术。显著的质量下降表明该优化可能不适用于此模型，可能影响部署策略和成本效益决策。 分析报告显示，平均 PPL 从 5.8397 增加到 5.8771，平均 KLD 为 0.1459，最大值为 12.47，'Same top p'率为 87.19%，而 Qwen 397B 为 97.93%。token 概率变化显示平均Δp 为-0.007%，RMS 为 11.88%，表明分布偏移显著。

reddit · r/LocalLLaMA · /u/erazortt · 8月2日 22:01

**背景**: KV 缓存量化减少了 Transformer 推理期间使用的键值缓存的内存占用，从而支持更长的上下文和更低的延迟。然而，激进的量化可能引入误差，降低模型输出质量。DeepSeek V4 Flash 是一个混合专家模型，总参数 284B，激活参数 13B，支持 1M token 上下文窗口，而 Qwen 397B 是阿里云开发的稠密模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek -ai/ DeepSeek - V 4 - Flash · Hugging Face</a></li>
<li><a href="https://ollama.com/library/deepseek-v4-flash">deepseek - v 4 - flash</a></li>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-flash">DeepSeek V 4 Flash - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论可能包含从业者分享类似经验或质疑方法论，但新闻条目中未提供具体评论。

**标签**: `#KV cache quantization`, `#DeepSeek V4 Flash`, `#LLM inference`, `#quality degradation`, `#empirical analysis`

---

<a id="item-11"></a>
## [llama.cpp 推出官方 Mac 应用和简化的 'llama serve' 命令](https://www.reddit.com/r/LocalLLaMA/comments/1vdt1i2/psa_llamaapp_mac_app_and_llama_serve_from_llamacpp/) ⭐️ 7.0/10

llama.cpp 团队发布了名为 llama.app 的官方 Mac 应用，可通过 DMG 安装包获取，并推出了新的 'llama serve' 命令，取代 'llama-server'，无需参数即可运行，并能根据传入请求自动加载合适的模型。 此次更新使 llama.cpp 对非技术用户更加友好，可能将本地大语言模型的用户群扩展到开发者之外。这也标志着其向用户友好设计（类似 Ollama）的战略转变，可能会加剧本地 AI 服务领域的竞争。 Mac 应用提供菜单栏工具，显示 API URL、已安装模型和模型推荐，并支持一键安装，无需 Homebrew 或 winget。'llama serve' 命令简化了服务器启动，但一些用户指出它借鉴了 Ollama 的设计，可能不是最佳用户体验。

reddit · r/LocalLLaMA · /u/rm-rf-rm · 8月2日 20:44

**背景**: llama.cpp 是一个开源的 C/C++ 库，用于大语言模型推理，与 GGML 张量库共同开发，被认为是本地推理的事实标准，为 Ollama 和 LM Studio 等工具提供支持。它通常需要命令行操作，但新的应用和命令旨在降低普通用户的使用门槛。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Llama.cpp">Llama.cpp</a></li>
<li><a href="https://github.com/ggml-org/llama.cpp">GitHub - ggml-org/llama.cpp: LLM inference in C/C++ · GitHub</a></li>
<li><a href="https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md">llama.cpp/tools/server/README.md at master · ggml-org/llama.cpp</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论显示，许多用户此前并不知道 llama.app，对设计选择存在不同看法，有人称赞其方向，也有人批评其用户体验过于类似 Ollama。总体而言，社区认为这是提高可访问性的积极一步，尤其对新手有利。

**标签**: `#llama.cpp`, `#local LLM`, `#Mac app`, `#LLM serving`, `#open source`

---

<a id="item-12"></a>
## [DeepSeek-V4-Flash-0731：低推理模式比高模式消耗更多令牌](https://www.reddit.com/r/LocalLLaMA/comments/1vdqsod/deepseekv4flash0731_when_low_is_higher_than_high/) ⭐️ 7.0/10

一位用户测试了 DeepSeek-V4-Flash-0731 的推理努力模式，发现“低”模式在本地和官方 API 上消耗的令牌数都明显多于“高”模式。他们还发现 OpenRouter 中存在一个破坏推理努力模式的 bug。 这一发现对依赖推理努力模式来控制令牌使用和成本的从业者很重要，因为它挑战了预期行为，可能导致意外支出。同时，它也凸显了 OpenRouter 中可能影响其他使用类似推理控制的模型的潜在问题。 用户对每种模式平均进行了 20 次请求，并报告了本地（Unsloth UD-Q2_K_XL 量化）和 DeepSeek API 的令牌数。例如，“低”模式本地总令牌数为 1,227.5（推理 874.4），而“高”模式为 605.8（推理 410.5）；“最大”模式本地为 1,301.4，但 API 仅为 698.7。OpenRouter 的 bug 导致推理努力模式无法正常工作，用户在验证过程中遇到了该问题。

reddit · r/LocalLLaMA · /u/coder543 · 8月2日 19:16

**背景**: DeepSeek-V4-Flash-0731 是 DeepSeek 最近发布的模型，支持多种推理努力模式（无、低、高、最大）来控制推理令牌的使用量。推理努力模式是现代 LLM 中常见的功能，用于平衡质量和成本。OpenRouter 是一个流行的 API 网关，将请求路由到各种模型，但可能无法正确传递推理努力参数，从而导致 bug。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731">deepseek-ai/ DeepSeek - V 4 - Flash - 0731 · Hugging Face</a></li>
<li><a href="https://openrouter.ai/docs/guides/best-practices/reasoning-tokens">Reasoning Tokens - Improve AI Model Decision Making</a></li>

</ul>
</details>

**社区讨论**: Reddit 帖子下的评论讨论了令人意外的令牌使用情况，一些用户推测模型的行为，另一些则分享了在 OpenRouter 上的类似经历。一些评论者赞赏这些实证数据，并建议 DeepSeek 发布所有努力模式的基准测试。

**标签**: `#DeepSeek`, `#LLM`, `#reasoning`, `#token usage`, `#OpenRouter`

---

<a id="item-13"></a>
## [欧盟《人工智能法案》通用人工智能规则正式生效](https://news.google.com/rss/articles/CBMirAFBVV95cUxQR0N5RG1SZlJJTjdNdU5zUVByNlhBdGhGYTRPMlFiX0JtbFgzQ1RpWElNakc2OTZkdjlhYklZdE0tOVBDa0YzaExySHhwX0dmMFdmeGlGQ0pxOW8xY01OV1hKSTRtVGt3MU9SeXhIWDlvUHMwamJybDhFekRNZFIxUm1CN3dmenlSaktBMlJmc2xCTzd2OGZkREk3dlp5Vk5Qa0NlQlR1ZnpCQ2t3?oc=5) ⭐️ 7.0/10

自 2025 年 8 月起，欧盟《人工智能法案》中关于通用人工智能（GPAI）模型提供者的义务已开始强制执行，标志着这一重要监管里程碑的达成。欧盟委员会还在 2025 年 7 月发布了三项关键文件，以明确这些义务的范围。 这一强制执行将显著影响在欧盟运营或面向欧盟市场的 AI 开发者和部署者，要求他们遵守透明度、文档记录和版权等方面的义务。它为全球 AI 监管树立了先例，可能影响其他司法管辖区并塑造全球行业实践。 GPAI 模型提供者必须提供技术文档、使用说明，遵守《版权指令》，并发布训练内容摘要。处罚机制将于 2026 年全面启动，审计和调查将成为常态，规则适用于欧盟境内的用户以及其 AI 输出在欧盟使用的第三国用户。

google_news · Euronews.com · 8月2日 05:30

**背景**: 欧盟《人工智能法案》是一部全面的人工智能监管框架，旨在确保 AI 系统安全并尊重基本权利。它根据风险对 AI 系统进行分类，其中 GPAI 模型因其广泛适用性而需承担特定义务。该法案分阶段实施，先禁止不可接受风险的系统，随后于 2025 年 8 月对 GPAI 模型实施规则，并将在后续几年扩展至高风险系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialintelligenceact.eu/high-level-summary/">High-level summary of the AI Act | EU Artificial Intelligence Act</a></li>
<li><a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai">AI Act | Shaping Europe's digital future - European Union</a></li>
<li><a href="https://eurocomply.app/regulations/ai-act/timeline">AI Act Enforcement Timeline — Key Dates... — EuroComply</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#EU`, `#policy`, `#compliance`

---

<a id="item-14"></a>
## [非洲群体创建 4216 项 AI 安全测试，覆盖 8 种语言](https://news.google.com/rss/articles/CBMiZkFVX3lxTE9PajdGeF9RM3ZNOGtUc3I2X2hMVmp4YTVHQVl0czl3QXJkUzRlZnhtRTdSRU5yNWRsWHh2aEpNY0J5QXI3cjlCSEVDcUg2aFQzaks0a3g1ZUNneDN1LTBqeGEwSDBNdw?oc=5) ⭐️ 7.0/10

一个非洲协作群体开发了 4216 项 AI 安全测试，覆盖 8 种语言，旨在使 AI 安全评估更加多样化。该举措解决了多语言和文化多样性安全基准缺失的问题。 这一努力意义重大，因为它填补了 AI 安全评估中的关键空白，此前评估主要集中于英语和西方语境。通过纳入非洲语言，它促进了更具包容性和全球代表性的 AI 安全标准，可能影响 AI 系统在非洲大陆的测试和部署方式。 这些测试通过众包方式创建，利用本地知识确保文化和语言的相关性。该倡议覆盖 8 种语言，但具体语言和测试创建方法在现有信息中未详细说明。

google_news · tech.africa · 8月2日 14:12

**背景**: AI 安全测试是用于评估 AI 系统是否安全、合乎道德行为的基准。传统基准往往缺乏多样性，侧重于英语和西方规范，可能导致有偏见或不完整的安全评估。众包已成为一种可扩展的方法，用于收集多样化的视角进行 AI 评估，正如最近关于生成式 AI 负责任众包的研究所强调的那样。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ojs.aaai.org/index.php/HCOMP/article/view/31609">Responsible Crowdsourcing for Responsible Generative AI: Engaging Crowds in AI Auditing and Evaluation | Proceedings of the AAAI Conference on Human Computation and Crowdsourcing</a></li>
<li><a href="https://aclanthology.org/2024.findings-acl.349.pdf">All Languages Matter: On the Multilingual Safety of LLMs</a></li>
<li><a href="https://github.com/Jarviswang94/Multilingual_safety_benchmark">GitHub - Jarviswang94/Multilingual_safety_benchmark: Multilingual safety benchmark for Large Language Models · GitHub</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#multilingual`, `#crowdsourcing`, `#Africa`, `#AI evaluation`

---

<a id="item-15"></a>
## [澳大利亚书商警告：稀有书籍被毁以训练 AI](https://news.google.com/rss/articles/CBMivAFBVV95cUxOTTJBXzBtYmdvNlM2ZERtalkzZDdhUmVXckdVVmVxdnJTUGJYTTBaTlhSVUNVUXhRVkxsMlc4SU5BR2xhYjZ0Tkd6cllkRHlFMzRGVVhuZW0yTEpYZHduMWNiajZfUUMwTDEyZF91S0p3U0NVNEhsNnRiV01ZR29hSGUtaHlVbTNlVTRCLUh0bmxVYjZ3Y3kzWVdyblVsYkljcnFvQk5OQTg5WXg2cEVfVVpYLWdPNzZtMHFlQg?oc=5) ⭐️ 7.0/10

据《卫报》报道，澳大利亚书商对为获取 AI 训练数据而“骇人听闻”地销毁稀有及绝版书籍的行为表示担忧。这种做法涉及批量购买、扫描，然后销毁原书，往往对其文化或历史价值漠不关心。 这一问题凸显了 AI 数据获取中重大的伦理和文化关切，因为销毁稀有书籍威胁到文化遗产，并引发对当前 AI 训练实践可持续性的质疑。它可能促使全行业就负责任的数据采集和珍贵文学作品的保护展开讨论。 根据一项已和解的诉讼，Anthropic 使用液压切割机从采购的书籍中移除书页，并用工业级成像设备扫描，然后销毁原书。据报道，这种做法很普遍，科技巨头外包给中间商秘密购买书籍作为训练材料，Anthropic 因持有盗版书籍库而面临 15 亿美元罚款。

google_news · The Guardian · 8月2日 03:51

**背景**: AI 模型需要大量文本数据进行训练，这些数据通常来自书籍、文章和网站。虽然有些数据通过网页抓取或现有数据集收集，但公司有时会购买实体书以获取受版权保护或绝版的内容，导致扫描后销毁这些书籍。这种做法引发了关于版权侵权和文化遗产保护的伦理和法律问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://futurism.com/artificial-intelligence/ai-companies-destroying-rare-books">AI Companies Are Buying Antique Books, Ingesting Their Contents to Train Models, and Then Destroying Them at Incredible Scale, Even If Almost No Copies Remain</a></li>
<li><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-companies-are-reportedly-shredding-millions-of-books-to-train-models-tech-giants-outsource-to-middlemen-to-secretly-buy-up-books-for-training-material">AI companies are reportedly shredding millions of books after using them to train AI models — tech giants outsource to middlemen to secretly buy up books for training material | Tom's Hardware</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#data sourcing`, `#rare books`, `#cultural heritage`, `#AI training`

---

<a id="item-16"></a>
## [中国警方 AI 以 90%准确率追踪比特币洗钱](https://news.google.com/rss/articles/CBMixgFBVV95cUxObkFhOWRCOWxqWWN2Y09GcmQ1RnViTlM1d1diem5tMUV3YmJJVFVrMDVCcnl3M1FERzBobDJGWEtfVV9JaXlUSEY1ckx1SDk0N2pncm11LVVZeUdFWkRGNGpnV3hwMlpzQ09DSlRLc3I1b2Rabm4zSE9CWmZjYXA1bXBHZXBIUjl1aUVUa1N1T0ExUWtiRWhYX281UEoyZjhvU21HeWItaXl4bV95U215ZHF5VzhNMjBZN1pMUzI3aERQSWRDRVHSAcYBQVVfeXFMTm5BYTlkQjlsalljdmNPRnJkNUZ1Yk5TNXdXYnpubTFFd2JiSVRVazA1QnJ5dzNRREcwaGwyRlhLX1VfSWl5VEhGNXJMdUg5NDdqZ3JtdS1VWXlHRVpERjRqZ1d4cDJac0NPQ0pUS3NyNW9kWm5uM0hPQlpmY2FwNW1wR2VwSFI5dWlFVGtTdU9BMVFrYkVoWF9vNVBKMmY4b1NtR3liLWl5eG1feVNteWRxeVc4TTIwWTdaTFMyN2hEUElkQ0VR?oc=5) ⭐️ 7.0/10

据《南华早报》报道，中国警方开发了一种 AI 算法，能够以 90%的准确率追踪比特币洗钱活动。这标志着人工智能在加密货币领域金融犯罪检测中的一次重要应用。 这一进展意义重大，因为它展示了执法机构在加密货币的伪匿名世界中打击非法金融活动的能力日益增强。它可能影响全球金融犯罪的调查方式，并可能推动加密货币生态系统中更有效的监管和执法。 据报道，该算法达到了 90%的准确率，但有关模型、训练数据或方法的具体技术细节尚未披露。这一说法来自新闻报道，未经同行评审验证，因此实际性能和实施情况仍有待核实。

google_news · South China Morning Post · 8月2日 02:00

**背景**: 比特币和其他加密货币具有一定程度的伪匿名性，使其成为洗钱活动的诱人工具。世界各地的执法机构越来越多地使用区块链分析工具来追踪非法交易。学术界和商业平台（如 Chainalysis 和 TRM Labs）已经探索了机器学习深度学习方法，用于检测比特币交易中的洗钱模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/masterchatter/identifying-money-laundering-in-bitcoin-with-machine-learning-61d850ecde45">Identifying Money Laundering in Bitcoin with Machine... | Medium</a></li>
<li><a href="https://www.chainalysis.com/law-enforcement/">Law Enforcement Blockchain Intelligence - Chainalysis</a></li>
<li><a href="https://www.trmlabs.com/reports-and-whitepapers/why-law-enforcement-agencies-need-blockchain-intelligence">Why Law Enforcement Agencies Need Blockchain Intelligence | TRM Labs</a></li>

</ul>
</details>

**标签**: `#AI`, `#blockchain`, `#money laundering`, `#law enforcement`, `#cybersecurity`

---
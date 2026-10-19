---
layout: default
title: "Horizon Summary: 2026-10-19 (ZH)"
date: 2026-10-19
lang: zh
---

> 从 53 条内容中筛选出 9 条重要资讯。

---

1. [vLLM v0.32.0 发布：新增结构化决策端点与低精度 KV 缓存支持](#item-1) ⭐️ 8.0/10
2. [先验证后复用机制可过滤智能体记忆中的中毒技能](#item-2) ⭐️ 8.0/10
3. [爱好者用自对弈强化学习在单台台式机上击败《魔兽争霸 III》疯狂 AI](#item-3) ⭐️ 7.0/10
4. [TempoPFN：线性 RNN 的合成预训练用于零样本时间序列预测](#item-4) ⭐️ 7.0/10
5. [asmsense：包含 22.8 万个剥离 x86-64 函数且带源码感知标签的数据集](#item-5) ⭐️ 7.0/10
6. [里程碑研究：AI 代理可自主入侵系统](#item-6) ⭐️ 7.0/10
7. [中国发布首个十万卡级 AI 超集群硬件](#item-7) ⭐️ 7.0/10
8. [谷歌开源 Harness2，用于递归式智能体挂载](#item-8) ⭐️ 7.0/10
9. [AI 仅用六小时音频学会说约鲁巴语](#item-9) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [vLLM v0.32.0 发布：新增结构化决策端点与低精度 KV 缓存支持](https://github.com/vllm-project/vllm/releases/tag/v0.32.0) ⭐️ 8.0/10

vLLM v0.32.0 是一次重大版本发布，包含来自 363 位贡献者的 814 次提交，新增了 POST /v1/systemone 结构化决策端点、通用 HF 工具/推理解析器，并在 SM8x、SM90、SM100 和 ROCm 硬件上扩展了低精度 KV 缓存（NVFP4/FP8）支持。 作为使用最广泛的开源 LLM 推理引擎之一，vLLM 的低精度 KV 缓存改进可显著降低内存占用并提升生产环境 LLM 服务的吞吐量，而结构化决策端点则为类型安全的概率决策模型（而非自由文本生成）打开了大门。 该版本包含多项破坏性变更，例如放弃 Python 3.10、限制默认 CORS 来源、要求 transformers>=5.16.1,<5.20.0，并移除了级联注意力和 mamba_cache_mode="all"；同时修复了多个安全公告（GHSA-4hhp-h66f-j5j7、GHSA-q97c-p368-75c4、GHSA-frvg-qw88-hww9），并新增 vllm download-kernels 命令用于安装预编译的 FlashInfer 内核。

github · khluu · 10月18日 06:50

**背景**: vLLM 是一个开源的高吞吐量 LLM 推理与服务引擎，使用 PagedAttention 高效管理 KV 缓存。KV 缓存量化将缓存的键/值张量以 FP8 或 NVFP4 等低精度格式存储，减少每个 token 的内存占用，从而在 GPU 上容纳更多上下文或并发请求。新的 /v1/systemone 端点遵循 System One 模型概念，即模型针对结构化状态回答类型化问题（choice、noul、score），并返回概率而非生成文本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.litellm.ai/docs/decisions">v 1 / decisions and /v 1 /systemone | liteLLM</a></li>
<li><a href="https://www.tensormesh.ai/learn/kv-cache-quantization">KV Cache Quantization: FP8, FP4, and What They Cost You</a></li>
<li><a href="https://nvidia.github.io/TensorRT-LLM/features/quantization.html">Quantization — TensorRT LLM</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#release`, `#KV cache`, `#quantization`

---

<a id="item-2"></a>
## [先验证后复用机制可过滤智能体记忆中的中毒技能](https://www.reddit.com/r/MachineLearning/comments/1x975ea/proof_before_reuse_showing_agents_only_what_later/) ⭐️ 8.0/10

一项公开数据的小型案例研究表明，要求后续两次会话复现技能变更并通过测试后才将其提供给智能体，可将中毒暴露降至 0/30 次会话，而朴素记忆为 3/30，重放为 30/30。 这为 LLM 智能体的程序性记忆中毒提供了一种具体缓解措施，随着智能体越来越多地依赖 Mem0 等持久记忆层跨会话复用技能，这一安全问题日益突出。 该研究使用 Claude Haiku 5.5 和 Sonnet 5.5，并配有 187 项行为检查的隐藏验证器，但存在局限：仅一个任务、每格 n=5、p≈0.24（不显著），且测量的是暴露而非危害，因为没有模型应用了所见的中毒；直接放入仓库的中毒可绕过该方法。

reddit · r/MachineLearning · /u/maa____z · 10月18日 16:14

**背景**: 具有持久记忆的 LLM 智能体可以从过去会话中学习可复用技能，但这带来了记忆中毒风险，即恶意或错误编辑被存储并后续复用。Mem0 是一种流行的记忆层，可跨会话提取和检索显著信息，先前工作已显示记忆注入攻击具有高成功率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/mem0ai/mem0">mem0ai/mem0: The Memory Layer for AI Agents - GitHub</a></li>
<li><a href="https://arxiv.org/abs/2601.05504">[2601.05504] Memory Poisoning Attack and Defense on Memory ... Memory Poisoning Attack and Defense on Memory Based LLM-Agents Memory Poisoning in AI Agents: Attacks & Detection 2026 MemMorph and the Memory Poisoning Threat: How Three Fake ... AI Agent Memory Poisoning: Defense Guide 2026 | SecureTom Memory poisoning attacks on retrieval-augmented Large ... LLM Agent Attacks: From DPI to Memory Poisoning</a></li>

</ul>
</details>

**标签**: `#agent-memory`, `#data-poisoning`, `#AI-safety`, `#LLM-agents`, `#procedural-memory`

---

<a id="item-3"></a>
## [爱好者用自对弈强化学习在单台台式机上击败《魔兽争霸 III》疯狂 AI](https://www.reddit.com/r/MachineLearning/comments/1x9c5ty/beating_warcraft_iiis_insane_ai_with_selfplay/) ⭐️ 7.0/10

一个爱好者项目（由/u/ToraxXx 发布在 r/MachineLearning）使用自对弈强化学习击败了《魔兽争霸 III》内置的“疯狂”AI，且完全在单台台式电脑上完成训练。 这表明自对弈强化学习能够应对即时战略游戏的复杂性——该类型以巨大的动作空间和长期规划著称——而无需大规模算力，可能降低爱好者和研究者的门槛。 该项目是社区成果而非同行评审研究，摘要中未提供技术细节（如算法、训练时间、硬件配置）；《魔兽争霸 III》的“疯狂”AI 以拥有资源和信息优势作弊而闻名，这使得该成就尤为引人注目。

reddit · r/MachineLearning · /u/ToraxXx · 10月18日 19:34

**背景**: 自对弈是一种强化学习技术，智能体通过与自己的版本对抗来提升，著名应用于 AlphaGo 和 OpenAI Five。《魔兽争霸 III》是一款经典的即时战略游戏，玩家需要实时管理经济、组建军队并控制英雄；其“疯狂”AI 难度给予电脑隐藏的加成和作弊。由于巨大的状态和动作空间、部分可观测性以及长期战略规划的需求，RTS 游戏对 AI 来说极具挑战性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Self-play_(reinforcement_learning_technique)">Self-play (reinforcement learning technique)</a></li>
<li><a href="https://us.forums.blizzard.com/en/warcraft3/t/insane-difficuly-is-against-the-game-rules-and-is-not-fair/3789">Insane difficuly is against the game rules and is not fair</a></li>
<li><a href="https://arxiv.org/pdf/1808.05032">Deep RTS: A Game Environment for Deep Reinforcement Learning ...</a></li>

</ul>
</details>

**标签**: `#reinforcement-learning`, `#self-play`, `#game-ai`, `#real-time-strategy`, `#machine-learning`

---

<a id="item-4"></a>
## [TempoPFN：线性 RNN 的合成预训练用于零样本时间序列预测](https://www.reddit.com/r/MachineLearning/comments/1x97v19/tempopfn_synthetic_pretraining_of_linear_rnns_for/) ⭐️ 7.0/10

TempoPFN 提出了一个合成时间序列生成器与增强库，用于预训练基于 DeltaProduct 的线性 RNN 以实现零样本时间序列预测，该论文已被 NeurIPS 2026 接收。其合成数据已被 Toto-2 和 TS-ICL 采用。 Frank Hutter 团队的工作为时间序列基础模型提供了一个可复用的合成数据库，解决了零样本预测中的数据稀缺问题，并已在其他模型中得到实际采用。它可能通过支持无需大规模真实数据集的预训练，加速时间序列基础模型的发展。 该模型使用基于 DeltaProduct 的线性 RNN，通过广义 Householder 变换在状态转移表达能力和计算效率之间取得平衡。该库包含合成生成器和增强方法，代码和模型已在 GitHub 和 Hugging Face 上公开。

reddit · r/MachineLearning · /u/Yossarian_1234 · 10月18日 16:43

**背景**: 零样本时间序列预测旨在无需任务特定训练的情况下预测未来值，通常使用在大规模数据集上预训练的基础模型。合成数据生成和增强是创建人工时间序列以扩充有限真实数据的技术。像 DeltaProduct 这样的线性 RNN 是高效的序列模型，使用具有自适应状态转移的线性递归，提高了状态跟踪能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/topics/deltaproduct">DeltaProduct : Expressive & Efficient Linear RNN</a></li>
<li><a href="https://arxiv.org/pdf/2502.10297">DeltaProduct : Improving State-Tracking in Linear RNNs via...</a></li>
<li><a href="https://mljourney.com/synthetic-time-series-data-generation-for-forecasting/">Synthetic Time Series Data Generation for Forecasting</a></li>

</ul>
</details>

**标签**: `#time-series`, `#foundation-models`, `#synthetic-data`, `#linear-rnn`, `#machine-learning`

---

<a id="item-5"></a>
## [asmsense：包含 22.8 万个剥离 x86-64 函数且带源码感知标签的数据集](https://www.reddit.com/r/MachineLearning/comments/1x91a47/p_asmsense_228k_stripped_x8664_functions_with/) ⭐️ 7.0/10

asmsense 是一个新数据集，包含来自 341 个宽松许可 C 项目的 228,177 个剥离 x86-64 函数，每个函数都有真实名称和源码，编译优化级别从 -O0 到 -Os，并附带一个用于函数命名和描述的小型 Qwen3-8B + LoRA 模型。作者还发布了缺失数据路线图（其他架构、GCC/ELF 构建、中文描述、人工检查标签、智能体轨迹和基准测试运行），并提出将流水线转变为强化学习环境。 该数据集通过为剥离二进制函数命名提供源码感知标签，直接支持逆向工程和机器学习研究，而这项任务通常缺乏真实标签。其透明的差距分析和提出的强化学习环境邀请社区合作改进二进制分析模型。 该数据集目前仅覆盖 x86-64，且是在 macOS 上使用 clang/Mach-O 构建；描述由能看到 C 源码的教师 LLM 生成，仅由另一个 LLM 抽样检查。提出的基于 token 级 F1 与真实名称对比的强化学习奖励容易被 get_data 之类的通用名称钻空子，作者询问如何设计此类奖励以及强化学习是否优于普通微调。

reddit · r/MachineLearning · /u/luxurycashew · 10月18日 11:49

**背景**: 剥离二进制没有调试符号，因此逆向工程师必须仅从汇编推断函数用途。近期研究将机器学习应用于此问题，并出现了 BinMetric 等基准来评估 LLM 在二进制分析任务上的表现。LoRA 是一种参数高效微调技术，它冻结预训练权重并注入可训练的低秩矩阵，使得在普通硬件上适配 Qwen3-8B 等大模型成为可能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2106.09685">[2106.09685] LoRA : Low - Rank Adaptation of Large Language Models</a></li>
<li><a href="https://arxiv.org/abs/2505.07360">[2505.07360] BinMetric: A Comprehensive Binary Analysis ... BinMetric: A Comprehensive Binary Analysis Benchmark for ... BinMetric: A Comprehensive Binary Code Analysis Benchmark for ... BinMetric: A Comprehensive Binary Code Analysis Benchmark for ... BinMetric: A Comprehensive Binary Analysis Benchmark for ... BinMetric | Proceedings of the Thirty-Fourth International ... BinMetric: A Comprehensive Binary Analysis Benchmark for ...</a></li>
<li><a href="https://arxiv.org/abs/1902.09122">[1902.09122] Neural Reverse Engineering of Stripped Binaries using...</a></li>

</ul>
</details>

**标签**: `#dataset`, `#binary-analysis`, `#reverse-engineering`, `#machine-learning`, `#x86-64`

---

<a id="item-6"></a>
## [里程碑研究：AI 代理可自主入侵系统](https://news.google.com/rss/articles/CBMinAFBVV95cUxPRnpja1RkUEhSbWdmM3pwQ1VwWG4wMTlmS3dCYTFZc043QVExaTJwUGo2dGFrTkVxMWphb2Jhb1BuYUU3blE3Rkx3eDlYaDNiNndzeE9WM2U1VG9GR0xHNzZwZDJMSFFpRGdjV2htc0FKWmVCbkQtdDNxQ0NfWVA1R3RZblVaOHdaNDFaaHlzNDd4SGQ3amNaellaWDM?oc=5) ⭐️ 7.0/10

据 Bioengineer.org 报道，一项里程碑式的网络安全研究表明，AI 代理现已能够自主入侵计算机系统，标志着 AI 驱动的攻击性网络能力显著升级。 这一进展表明网络攻击正转向无需人类指挥的自主 AI 驱动模式，可能降低高级黑客攻击的门槛，并迫使各组织重新思考针对机器速度威胁的防御策略。 现有报道仅提供标题，缺乏代理架构、测试系统、成功率或研究方法等技术细节，因此该主张的范围和可复现性仍未经证实。

google_news · Bioengineer.org · 10月18日 03:36

**背景**: AI 代理是基于大语言模型的系统，能够通过调用工具和与外部环境交互来规划和执行多步骤任务。近期研究（包括伊利诺伊大学厄巴纳-香槟分校的工作）已展示 LLM 代理可自主进行网站入侵，且有报道称一个 OpenAI 代理曾在 Hugging Face 的生产系统中活动数日，凸显了自主网络威胁日益增强的现实性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/papers/2402.06664">LLM Agents : Autonomous Website Hacking</a></li>
<li><a href="https://codelivly.com/chinese-hackers-and-ai-agents-target-global-cloud-and-telecom-infrastructure">Chinese Hackers & AI Agents Target Cloud & Telecom</a></li>
<li><a href="https://www.linkedin.com/posts/andrecabraldutra_we-are-seen-lots-of-colegues-discussing-about-activity-7486782322571223040-OO71">AI Complexity: Lessons from OpenAI's Autonomous Attack | LinkedIn</a></li>

</ul>
</details>

**标签**: `#AI`, `#cybersecurity`, `#autonomous agents`, `#hacking`, `#research`

---

<a id="item-7"></a>
## [中国发布首个十万卡级 AI 超集群硬件](https://news.google.com/rss/articles/CBMiYkFVX3lxTE5wMzd5Z0RSZ3pkd2dvQlBjT3ZzR1FxSUg0Q1M3RldjUXI1XzF6cHZScVJBZnduVDZFNkNzMzNSZ3ZTd3ZuZkYwODVZUmdxNGFOUHBqZDJCTzR5MHpPM3gyWEl3?oc=5) ⭐️ 7.0/10

中国发布了首个可支持超过 10 万张国产计算卡的 AI 超集群硬件实体，即曙光 8000（登封），并在 2026 年 10 月 18 日《环球时报》报道的活动上展示了十项前沿研究应用。 这一里程碑标志着中国 AI 基础设施从万卡时代迈入十万卡部署阶段，将大幅提升大模型训练能力，并在出口管制背景下减少对外国硬件的依赖。 该超集群部署于河南省国家超算互联网郑州核心节点，并在粤港澳大湾区有并行部署；但该消息来自官方媒体，缺乏独立的技术验证或详细的性能基准数据。

google_news · Global Times · 10月18日 06:27

**背景**: 十万卡级 AI 超集群是指单集群部署 10 万张及以上 AI 加速卡，为训练大型 AI 模型提供大规模并行算力。中国一直在建设国产 AI 基础设施，以应对美国对英伟达 GPU 等先进芯片的出口限制。曙光 8000（登封）是中国首个采用国产计算卡的此类系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.chinadaily.com.cn/a/202607/10/WS6a508b1da310986e2b4649a7.html">China's first homegrown 100 , 000 - card AI supercluster goes live in...</a></li>
<li><a href="https://www.globaltimes.cn/page/202610/1372462.shtml">China unveils first 100,000-card AI supercluster hardware ...</a></li>
<li><a href="https://pandaily.com/china-first-100k-card-domestic-ai-supercluster-national-compute-grid-aug2026">China's First 100 , 000 - Card Domestic AI Super - Cluster Goes... - Pandaily</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#supercomputing`, `#China`, `#large-scale AI`, `#hardware`

---

<a id="item-8"></a>
## [谷歌开源 Harness2，用于递归式智能体挂载](https://news.google.com/rss/articles/CBMioAFBVV95cUxObmlQQzZIU3V5Y1hvMTVzWi0tM2wybEk5SlhLanBNR3Q3YUYtX1VqbGN2Q2hfV1A1dEl4Y1lGbFFEYy1nTEpncUJoV2hxNk4wdF9na3d6aFhzb3lnYk0xSUtBT1otZUJDT0xfeXdfcHlPbDhxcENmUGk1UW9Gc2xjV3NEakRIVVl1eXBiS28wbFZZeUt1ZFJGNmNfeGQ0ejNM0gGgAUFVX3lxTE5uaVBDNkhTdXljWG8xNXNaLS0zbDJsSTlKWEtqcE1HdDdhRi1fVWpsY3ZDaF9XUDV0SXhjWUZsUURjLWdMSmdxQmhXaHE2TjB0X2drd3poWHNveWdiTTFJS0FPWi1lQkNPTF95d19weU9sOHFwQ2ZQaTVRb0ZzbGNXc0RqREhVWXV5cGJLbzBsVll5S3VkUkY2Y194ZDR6M0w?oc=5) ⭐️ 7.0/10

谷歌开源了 Harness2，这是一个即插即用的递归式智能体挂载框架，相关论文（arXiv:2610.14224）已发布，代码已在 google-research 的 GitHub 仓库中开放。该框架通过任务级递归和持续的挂载级学习来改进智能体执行挂载，同时保持模型权重不变。 这很重要，因为它提供了一种在开放世界环境中优化智能体性能的方法，无需真实标注验证器或重新训练模型，可能降低开发者构建稳健智能体系统的门槛。这也表明谷歌持续投入开放智能体工具，可能影响社区设计自适应智能体架构的方式。 该框架在任务级递归中采用对比式的“提议-探测-组合”步骤，在没有真实标注验证器的情况下指导编辑，并连接两个层次的递归：任务级细化和挂载级学习。它设计为即插即用，并保持模型权重固定，专注于优化执行挂载而非底层模型。

google_news · MarkTechPost · 10月18日 08:15

**背景**: 智能体挂载（agent harness）是管理 AI 智能体的模型与工具调用、上下文、审批策略和多步进度的运行时脚手架，区别于提供构建块的智能体框架。递归式智能体挂载是指以完整的智能体挂载作为递归单元来迭代改进挂载本身，而非简单地递归模型调用。Harness2 在此基础上引入两个相连的递归层次，以处理初始挂载设计时未见过的任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2610.14224">[2610.14224] Harness^2: Recursive Agent Harnessing for an ...</a></li>
<li><a href="https://github.com/google-research/harness2">google-research/harness2 - GitHub</a></li>
<li><a href="https://huggingface.co/papers/2610.14224">Paper page - Harness ^2: Recursive Agent Harnessing for an Open...</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#open source`, `#Google`, `#agent frameworks`, `#LLM tooling`

---

<a id="item-9"></a>
## [AI 仅用六小时音频学会说约鲁巴语](https://news.google.com/rss/articles/CBMihgFBVV95cUxOck02RC02ZzVHMmt0aXFER1ZNdjRzM2lxY0cyMzFmaF9VWEdMNTJzQk11VUM0UjJDcDU5ZkEyM0dJUE5CNWRUS0xyX1VDX0FQRHQ5UmtVRmJFdzBkTVZfNXExeG5ReVVaWnFUUVZISUZRYXc1N1ZVdy1HUG9xVGpyZjNEX2RQQQ?oc=5) ⭐️ 7.0/10

据 Bioengineer.org 报道，一个 AI 系统仅使用六小时的音频数据就学会了说约鲁巴语——一种西非低资源语言。这展示了在训练资源有限的语言上进行语音合成所取得的进展。 这一点很重要，因为大多数语音技术都是为英语等高资源语言构建的，导致数千种语言得不到充分服务。如果这种低数据方法能够推广，就可以为数百万约鲁巴语使用者和其他低资源语言社区提供语音助手、有声读物和辅助工具。 该报道仅提供了一个标题，没有关于模型架构、评估指标或音频质量的细节，因此该声明无法被独立验证。六小时对于 TTS 训练来说极其有限，目前尚不清楚该系统是否能处理约鲁巴语的声调区别和方言差异。

google_news · Bioengineer.org · 10月18日 09:46

**背景**: 约鲁巴语是一种大西洋-刚果语系语言，约有 5000 万人使用，主要分布在尼日利亚西南部、贝宁和多哥。文本转语音（TTS）系统通常需要每位说话者数十小时带转录的音频，而这对大多数非洲语言来说非常稀缺。低资源语音合成研究旨在利用最少的数据构建可用的语音，通常通过适配多语言模型或使用迁移学习来实现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Yorùbá_language">Yorùbá language</a></li>
<li><a href="https://arxiv.org/html/2406.08911">An Initial Investigation of Language Adaptation for TTS Systems under...</a></li>
<li><a href="https://ieeexplore.ieee.org/document/11146779">Advancing Text-to- Speech Systems for Low - Resource Languages ...</a></li>

</ul>
</details>

**标签**: `#speech-synthesis`, `#low-resource-languages`, `#AI/ML`, `#language-technology`, `#TTS`

---
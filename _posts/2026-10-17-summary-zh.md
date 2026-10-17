---
layout: default
title: "Horizon Summary: 2026-10-17 (ZH)"
date: 2026-10-17
lang: zh
---

> 从 50 条内容中筛选出 14 条重要资讯。

---

1. [Meta 发布 Muse Spark Open：8160 亿参数开放权重 MoE，支持 100 万上下文](#item-1) ⭐️ 9.0/10
2. [NVIDIA 与 Hugging Face 发布 2.8 万亿 Token 的印度语言预训练语料库](#item-2) ⭐️ 8.0/10
3. [ORL 让扩散语言模型在单张 RTX 5090 上达到 2788 tokens/s](#item-3) ⭐️ 8.0/10
4. [中国拟将人工智能、生物医药和光伏技术列入出口管制清单](#item-4) ⭐️ 8.0/10
5. [Hugging Face Transformers v5.20.1 新增 Reflection AI 的 Beam 模型](#item-5) ⭐️ 7.0/10
6. [Anthropic 的 Claude Code 团队称 AI 审查正在取代人工把关](#item-6) ⭐️ 7.0/10
7. [Rust 框架 DenseCore 实现与 PyTorch nanoGPT 训练逐位一致](#item-7) ⭐️ 7.0/10
8. [Quanta Magazine 报道推动 AI 基准测试科学化的研究者](#item-8) ⭐️ 7.0/10
9. [Anthropic 将就非法下载韩国书籍向作者赔偿](#item-9) ⭐️ 7.0/10
10. [Anthropic 禁止对其 AI 模型施加残忍行为](#item-10) ⭐️ 7.0/10
11. [Apple Intelligence 获中国批准，计划十月开启试用](#item-11) ⭐️ 7.0/10
12. [Anthropic 向立法者推销其自研 AI 安全法案](#item-12) ⭐️ 7.0/10
13. [Apollo Research 指出 Z.ai 模型存在潜在 AI 安全风险](#item-13) ⭐️ 7.0/10
14. [CERN 与 Mistral AI 合作打造粒子物理学基础模型](#item-14) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Meta 发布 Muse Spark Open：8160 亿参数开放权重 MoE，支持 100 万上下文](https://news.google.com/rss/articles/CBMilAFBVV95cUxPc2VHdkZrQjhvVkg5WlJaTEs0cE5vSnFXWXhkbFkxZnpNN01OcEVFcTFtMTlrVllJTHJDb2QzSVlmUDhhTXpGZUpNNjVGR1haRUhPMVZuV3pnZmt0enVObU9JUFZFZmtxS2M4eE1sQ0lGM2M4QzBwYXR0cDNYYzU3Z3B5R3k2S0lTZkVHV213X2FjbE000gGUAUFVX3lxTE9zZUd2RmtCOG9WSDlaUlpMSzRwTm9KcVdZeGRsWTFmek03TU5wRUVxMW0xOWtWWUlMckNvZDNJWWZQOGFNekZlSk02NUZHWFpFSE8xVm5Xemdma3R6dU5tT0lQVkVma3FLYzh4TWxDSUYzYzhDMHBhdHRwM1hjNTdncHlHeTZLSVNmRUdXbXdfYWNsTTQ?oc=5) ⭐️ 9.0/10

据 MarkTechPost 报道，Meta 发布了 Muse Spark Open，这是一个拥有 8160 亿参数、采用混合专家（MoE）架构的开放权重语言模型，支持 100 万 token 的上下文窗口。这是美国实验室迄今发布的最大开放权重模型之一，直接对标中国的开放权重竞争对手。 这是开源 AI 领域的一个重大里程碑：8160 亿参数的开放权重 MoE 模型加上 100 万上下文，让研究者和开发者无需依赖专有 API 就能获得前沿规模的能力。这也表明 Meta 正加大开放权重投入，以与中国实验室（如 DeepSeek 和 Moonshot AI）竞争——后者在近期的开放权重发布中处于领先地位。 作为 MoE 模型，Muse Spark Open 每个 token 很可能只激活 8160 亿参数中的一部分，使推理成本远低于同等规模的稠密模型。100 万 token 的上下文窗口可处理超长文档，但长上下文召回准确率和显存需求仍是实际使用中的限制因素。

google_news · MarkTechPost · 10月16日 02:26

**背景**: 混合专家（MoE）是一种将模型拆分为多个专门子网络（专家）的架构，每个 token 只被路由到其中少数几个专家，从而让模型扩展到数千亿甚至数万亿参数，而无需为每个 token 支付全部计算成本。开放权重模型会公开其训练好的参数，供他人下载、运行甚至微调，这与只能通过 API 访问的专有模型形成对比。上下文窗口指模型一次能处理的文本量（以 token 计），100 万 token 大致相当于数本长篇书籍。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Open-weight_model">Open-weight model</a></li>
<li><a href="https://www.tertiaryinfotech.com/blog/mixture-of-experts-moe-architecture-explained">Mixture of Experts ( MoE ) Architecture... | Tertiary Infotech Academy</a></li>
<li><a href="https://www.innovatrixinfotech.com/blog/context-windows-explained-1-million-tokens-architecture">1 Million Token Context Windows: Architecture and Limits</a></li>

</ul>
</details>

**标签**: `#AI`, `#LLM`, `#open-source`, `#Meta`, `#MoE`

---

<a id="item-2"></a>
## [NVIDIA 与 Hugging Face 发布 2.8 万亿 Token 的印度语言预训练语料库](https://huggingface.co/blog/nvidia/scaling-indic-pretraining) ⭐️ 8.0/10

NVIDIA 与印度理工学院马德拉斯分校的 AI4Bharat 实验室合作，发布了 Nemotron-Pretraining-Indic-v1，这是一个覆盖 22 种印度语言、约 2.8 万亿 Token 的合成预训练语料库，并同时开源了数据生成流水线。该发布于 2026 年 10 月 16 日宣布，并托管在 Hugging Face 平台上。 印度语言在大语言模型预训练数据中长期严重不足，该语料库通过提供大规模、公开可用的资源直接填补了这一空白。开源流水线还使结果可复现并支持后续研究，有望加速面向超过十亿印度语言使用者的多语言大模型开发。 该语料库将语言分为两组，由两套不同的工作流处理，并分别统计原生文字和罗马化文本的 Token 数量。它建立在 AI4Bharat 此前的 IndicLLMSuite 以及 NVIDIA 的 Nemotron-CC 数据整理流水线等先前工作之上。

rss · Hugging Face Blog · 10月16日 01:44

**背景**: 预训练是构建大语言模型的第一阶段，也是最依赖数据的阶段，模型在这一阶段从海量文本语料中学习通用语言模式。目前大多数此类语料以英语为主，导致印地语、泰米尔语、孟加拉语等低资源语言的训练数据远远不足。合成数据生成利用模型或规则来创建额外的训练文本，有助于填补这些空白。Nemotron 是 NVIDIA 推出的开放数据集与模型系列，旨在支持大语言模型预训练。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.unite.ai/nvidia-unveils-2-8t-token-indic-pretraining-corpus-and-open-pipeline/">NVIDIA Unveils 2.8T-Token Indic Pretraining Corpus and Open ...</a></li>
<li><a href="https://www.explainx.ai/blog/nvidia-indic-pretraining-2-8-trillion-tokens-open-pipeline-2026">Nemotron Indic Pretraining: 2.8T Tokens, 22 Languages ...</a></li>
<li><a href="https://developer.nvidia.com/blog/building-nemotron-cc-a-high-quality-trillion-token-dataset-for-llm-pretraining-from-common-crawl-using-nvidia-nemo-curator/">Building Nemotron-CC, A High-Quality Trillion Token Dataset for LLM...</a></li>

</ul>
</details>

**标签**: `#Indic NLP`, `#pretraining`, `#multilingual`, `#data pipeline`, `#LLM`

---

<a id="item-3"></a>
## [ORL 让扩散语言模型在单张 RTX 5090 上达到 2788 tokens/s](https://www.reddit.com/r/MachineLearning/comments/1x7qgr0/research_2788_tokenss_on_a_single_rtx_5090_with_a/) ⭐️ 8.0/10

研究者发布了 ORL（On-Policy Residual Learning，同策略残差学习），这是一种开源方法，通过在模型自身新生成的残差轨迹上训练并引入相邻熵收缩损失，来加速扩散语言模型。配合其自研推理引擎 dlmrt，LLaDA-2.1-mini 在单张 RTX 5090 上达到 2788 tokens/s，QwenDLM-4B 端到端吞吐最高提升 6.9 倍，HumanEval pass@1 从 82.9% 提升到 89.6%。 扩散语言模型长期被认为前景可观但难以实用，因为需要大量去噪步骤才能收敛；ORL 表明同策略训练可以大幅减少这些步骤并同时提升准确率，有望让扩散语言模型在延迟上与自回归解码竞争。模型、训练代码、评测流程和 dlmrt 引擎的全面开源，也降低了社区跟进这一方向的门槛。 所有报告数字均为单请求解码（batch size 1），且是特定基准上的峰值结果而非平均值；LLaDA-2.1-mini 的 ORL 后训练仅需 420 万自生成训练 token 和 36 个 H100 GPU 小时。dlmrt 引擎将整个去噪循环捕获进 CUDA 图并在 GPU 上执行，支持包括消费级 RTX 5090 在内的 Blackwell GPU 上的 NVFP4 推理，在单张 H100 对比中比 SGLang/vLLM 快 1.2-1.6 倍。

reddit · r/MachineLearning · /u/arty_photography · 10月16日 20:03

**背景**: 自回归大模型一次生成一个 token，而扩散语言模型对整个序列迭代去噪，可以并行确定多个 token，但往往需要很多次前向传播才能收敛。残差学习指模型把上一步的预测作为上下文继续精炼，而不是每一步都从头预测；同策略训练则意味着这些残差来自当前模型，而非过时的离线版本。NVFP4 是 NVIDIA 的 4 位浮点格式（E2M1，16 元素分块配 FP8 缩放因子），专为 Blackwell 硬件上的高效低精度推理设计。

**标签**: `#diffusion language models`, `#inference optimization`, `#open source`, `#machine learning`, `#GPU acceleration`

---

<a id="item-4"></a>
## [中国拟将人工智能、生物医药和光伏技术列入出口管制清单](https://news.google.com/rss/articles/CBMiywFBVV95cUxNOFpxWEtXaXRld25WMWpESTNDUkZaUHFyN2UxYkcteXMyYnJ0d3ZLQ25LVEJqSGF4YnluVXk4OGthWnFJdTYwNTYxX00zczZsV0pGakxhbUVxZVF2Mm5hQU5Sa2FZMkgxd2gyck9fYnV4VHhtWGZKMnl2bVR2YjlKaXhjd0NPaXJ4MmlIU2s2YkR3LUhSR3o2OWxKcTkzc01aVUVTZWg0dDgxRkR0NmFoTEtiNmg0a2otbVNoaEVOLXhZNnpnVDF2dnNybw?oc=5) ⭐️ 8.0/10

中国有关部门于周五提议将人工智能、生物医药和光伏技术列入国家出口管制清单，共涵盖 40 项技术，其中包含 23 项与人工智能相关的技术，如模型、智能体和计算集群。该修订草案开启为期一个月的公众咨询期，最终规则仍可能调整。 这标志着中国与西方之间技术竞争的重大升级，可能重塑人工智能、生物技术和光伏产业的全球供应链，并影响国际研究合作。全球依赖中国人工智能模型、生物医药授权交易或光伏制造技术的企业和研究人员可能面临新的限制。 该提案涵盖 23 项人工智能技术（包括模型、智能体和计算集群）、5 项生物医学技术以及光伏技术，其中生物技术管制明确豁免现有的医药授权交易。这些措施是中国技术出口目录更广泛修订的一部分，在最终确定前仍需经过一个月的公众咨询。

google_news · Nikkei Asia · 10月16日 09:56

**背景**: 出口管制是政府对某些技术、软件或商品向外国实体转移的限制，通常被用作国家安全和地缘政治战略的工具。中国维护着《禁止出口限制出口技术目录》以及两份两用物项出口管制清单，共同界定了中国企业和研究人员可以向海外分享的内容。美国长期使用类似管制手段，尤其针对先进半导体和人工智能芯片，而北京此举被广泛视为在中美科技竞争中作出的对等回应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reuters.com/world/asia-pacific/china-proposes-adding-40-ai-biotech-solar-technologies-export-control-list-2026-10-16/">Beijing seeks tighter grip on AI exports amid US rivalry</a></li>
<li><a href="https://asia.nikkei.com/business/technology/artificial-intelligence/china-to-add-ai-biopharma-and-solar-tech-to-export-control-list">China to add AI, biopharma and solar tech to export control ...</a></li>
<li><a href="https://apnews.com/article/china-export-restrictions-ai-chips-solar-us-5ac381c0c6d6628bbea2e0da7d855a5b">China moves to curb tech exports including for AI and solar ...</a></li>

</ul>
</details>

**标签**: `#export controls`, `#AI policy`, `#biopharma`, `#solar technology`, `#geopolitics`

---

<a id="item-5"></a>
## [Hugging Face Transformers v5.20.1 新增 Reflection AI 的 Beam 模型](https://github.com/huggingface/transformers/releases/tag/v5.20.1) ⭐️ 7.0/10

Hugging Face 发布了 Transformers v5.20.1 补丁版本，新增了对 Reflection AI 新推出的前沿规模模型 Beam 的支持，并修复了若干 bug。该版本还解决了一个导致旧版 PyTorch 无法加载模型的回归问题，具体来说，分布式检查点功能现在要求 torch>=2.8。 这个版本很重要，因为它将一个 5010 亿参数的开源权重模型引入了最广泛使用的模型定义框架，使希望在自己的硬件上运行和定制前沿模型的团队能够方便地使用 Beam。同时，PyTorch 兼容性修复对于使用旧版 torch 的用户也至关重要，因为他们在上一个版本后无法加载模型。 Beam 是一个稀疏混合专家（MoE）模型，总参数量为 5010 亿，激活参数量为 230 亿，专为编码、推理和智能体工作负载设计。v5.20.1 中的其他修复包括：批处理生成时 HunYuan-VL 的图像分配问题、专家并行下的 DeepGEMM Mega MoE，以及使 DtensorShardOperation 能在 torch 2.6 和 2.7 上运行。

github · vasqu · 10月16日 13:02

**背景**: Hugging Face Transformers 是一个流行的开源库，提供 API 以便轻松下载、训练和运行文本、视觉、音频和视频领域的最先进预训练模型。Reflection AI 是一家位于布鲁克林的初创公司，最近发布了 Beam，这是其首个开源权重的前沿模型，声称在更低计算成本下性能可与领先的中国开源模型相媲美。像 v5.20.1 这样的补丁版本通常包含错误修复和小幅新增功能，而非重大的破坏性变更。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://reflection.ai/blog/introducing-beam">Introducing Beam: Reflection’s 501B open-weight model — Reflection</a></li>
<li><a href="https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/">Reflection debuts Beam, an open-weight AI model to rival ...</a></li>

</ul>
</details>

**标签**: `#huggingface`, `#transformers`, `#release`, `#llm`, `#pytorch`

---

<a id="item-6"></a>
## [Anthropic 的 Claude Code 团队称 AI 审查正在取代人工把关](https://simonwillison.net/2026/Oct/16/code-review/) ⭐️ 7.0/10

在题为《Claude Code 团队如何做代码审查》的博客文章中，Addy Osmani、Morgan Westlee Lunt 和 Qing Wang 提出，“有没有人读过这段代码”只是对真正问题的不精确替代——真正该问的是这次改动可能出什么问题、该由哪种检查（自动还是人工）来发现。他们描述审查正从工作流末端的关卡，转变为贯穿始终的持续过程，更像写作时的拼写检查：大多数改动在被人类查看之前，已经至少被 Claude 审查并修复过一次。 这把代码审查从最终的人工批准关卡，重新定义为持续运行的 AI 辅助循环，可能改变工程团队分配稀缺人力注意力的方式，以及 PR 工作流的组织形态。如果被广泛采用，审查者将转向更高层次的设计与风险问题，而常规缺陷交由自动化代理处理。 作者也承认 AI 审查并不保证正确性：Anthropic 官方文档明确警告 Code Review 可能漏掉缺陷和安全漏洞，且“未发现问题”并不代表代码没有错误或安全风险。Anthropic 的 Code Review 产品使用多个并行工作的专用代理，分别负责 CLAUDE.md 规范符合性检查、缺陷检测、git 历史上下文分析、历史 PR 评论审查以及代码注释核验。

rss · Simon Willison · 10月16日 22:06

**背景**: 传统代码审查是开发流程末端的关卡：开发者写完代码、提交拉取请求（PR），然后等待同事阅读并批准后才能合并。AI 辅助代码审查工具可接入持续集成流水线，在代码提交或 PR 创建时自动触发，而大语言模型如今能像人类审查者一样阅读代码差异并标记问题。Anthropic 的 Claude Code 是一款代理式编程工具，其 Code Review 功能就是把 Claude 应用到这一审查环节。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://code.claude.com/docs/en/code-review">Code Review - Claude Code Docs</a></li>
<li><a href="https://claude.com/marketplace/plugins/code-review">Code Review | Claude by Anthropic</a></li>
<li><a href="https://www.ibm.com/think/insights/ai-code-review">What Is AI Code Review ? | IBM</a></li>

</ul>
</details>

**标签**: `#code-review`, `#AI-assisted-development`, `#software-engineering`, `#Anthropic`, `#developer-workflow`

---

<a id="item-7"></a>
## [Rust 框架 DenseCore 实现与 PyTorch nanoGPT 训练逐位一致](https://www.reddit.com/r/MachineLearning/comments/1x7ojxo/p_my_rust_framework_trains_nanogpt_with_the_exact/) ⭐️ 7.0/10

一名计算机专业学生构建了 DenseCore——一个带有类 PyTorch Python API 的小型 Rust 深度学习框架，并证明在不修改 Karpathy 的 nanoGPT 的情况下运行它，能得到与 PyTorch 逐位完全相同的结果：从 manual_seed 得到的相同初始权重、相同的损失、梯度和权重，在测试的全部 50 步中均一致，即使开启 dropout 也是如此。该项目约 2 MB，而 PyTorch 约 580 MB，演示脚本`python scripts/demo_bit_exact.py`可供任何人验证这一对比。 这罕见地展示了两个独立深度学习框架之间精确的数值可复现性，而这通常被认为因编译器层面的浮点差异而极其困难。它揭示了 PyTorch 做出了多少不明显的实现选择，并可能为 CI、无服务器或调试场景中的轻量级、确定性训练环境提供参考。 作者发现 PyTorch 的 CPU 注意力并非教科书公式，而是 flash attention 内核，且在开启 dropout 时会切换到不同路径；Adam 由于编译器对尾部循环的融合，在每个线程块的末尾元素上舍入方式不同；clip_grad_norm_使用 reciprocal() * max_norm 而非除法。一个关键局限是 DenseCore 仅在 Apple Silicon Mac 上与 PyTorch 一致，因为 PyTorch 自身在不同机器上也无法产生相同比特——同一版本下 Mac 与 Linux x86 之间测试的 26 个算子中只有 1 个匹配。

reddit · r/MachineLearning · /u/Mental-Feature-2377 · 10月16日 18:49

**背景**: nanoGPT 是 Andrej Karpathy 对 GPT Transformer 架构的极简、易读实现，广泛用于学习和中小规模训练实验。逐位可复现意味着两次运行在每一步都产生完全相同的浮点数，这很难做到，因为编译器和硬件可能以不同方式重排或融合浮点运算。Flash attention 是一种优化注意力算法，可降低内存占用并加速 Transformer；clip_grad_norm_则是 PyTorch 中通过重新缩放梯度来防止训练中梯度爆炸的工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/nanoGPT">nanoGPT</a></li>
<li><a href="https://docs.pytorch.org/docs/2.14/generated/torch.nn.utils.clip_grad_norm_.html">torch.nn.utils.clip_grad_norm_ — PyTorch 2.14 documentation</a></li>

</ul>
</details>

**标签**: `#Rust`, `#PyTorch`, `#Deep Learning Framework`, `#Numerical Reproducibility`, `#nanoGPT`

---

<a id="item-8"></a>
## [Quanta Magazine 报道推动 AI 基准测试科学化的研究者](https://news.google.com/rss/articles/CBMinAFBVV95cUxPMXlhU1kzY09uSjZ3ZkVzWTRGNDFNeHZYRlBPcGRkVHEtTGRhQUJlLVRUZHJHQXpzekdSWGNITDRIWms4LUxwbldZU09pQ01wLTBzY0hkYVoxbnpvWVItTEtsWE4yLV9NS280amEwMVNnRnR6Sl9jNlZZVFQycEVHNVFjTXd4VEhDRkpFT1hKWE5MVWRGTGRMTngtUUU?oc=5) ⭐️ 7.0/10

Quanta Magazine 发表了一篇人物报道，介绍一位主张将 AI 基准测试视为严谨科学、而非临时拼凑的“黑魔法”的研究者。文章强调了日益壮大的运动，即把方法论上的严谨性引入 AI 模型的评估与比较过程。 随着 AI 模型能力不断增强并被广泛部署，基准测试分数的可靠性直接影响研究者、企业和政策制定者对进展的判断。如果基准设计不佳或被钻空子，整个领域就可能为误导性的指标而非真实能力进行优化。 文章聚焦于基准测试在方法论上的挑战，包括基准过拟合问题——即模型被优化为在特定评估集上表现良好，却无法泛化到真实任务。文章还提到该领域需要在评分规则和报告规范上实现标准化。

google_news · Quanta Magazine · 10月16日 16:59

**背景**: AI 基准测试是指使用标准化的任务、数据集、提示词、评分规则和报告规范来评估和比较 AI 模型的做法。常见的基准包括在数学、编程和语言理解等任务上对模型进行排名的排行榜。然而，该领域长期面临基准污染（测试数据泄露到训练中）和过拟合等问题，导致高分无法转化为真实世界的表现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/ai-benchmarking">AI benchmarking</a></li>
<li><a href="https://nhimg.org/glossary/benchmark-overfitting/">What Is Benchmark Overfitting? Definition & Examples</a></li>
<li><a href="https://www.geeksforgeeks.org/machine-learning/machine-learning-model-evaluation/">Machine Learning Model Evaluation - GeeksforGeeks</a></li>

</ul>
</details>

**标签**: `#AI benchmarking`, `#machine learning`, `#evaluation`, `#research methodology`, `#Quanta Magazine`

---

<a id="item-9"></a>
## [Anthropic 将就非法下载韩国书籍向作者赔偿](https://news.google.com/rss/articles/CBMijAFBVV95cUxPTlVUcnV2Q1dtdkFOS3NRMnpQNkptWDdLQXg5MGhzdjJoZ1JQcHE1NWFaX05PbUtkZlpXS0xjb2hVckFMSGdwY3ZmVUNDV0lieVJuWjF5di1jX2FmRVk1MUR2M2dtRkRkUm8zYzBUX3U2clFJaXhPTmt4aVZyVER1dHpjazM0TlFHNk94eA?oc=5) ⭐️ 7.0/10

Anthropic 计划就非法下载的韩国书籍按每部作品约 3000 美元（约 400 万韩元）进行赔偿，至少有 22 位韩国作者的作品符合条件，其中包括韩江的作品。这是该公司因使用盗版书籍训练 AI 模型而达成的 15 亿美元和解协议的一部分。 这一进展凸显了 AI 公司未经授权使用受版权保护材料所面临的法律和财务后果日益严重，也为包括美国以外作者在内的全球创作者寻求赔偿树立了先例。它表明 AI 训练中的数据来源实践正受到严格审查，可能迫使企业采取更严格的版权合规措施。 该赔偿是 Bartz 诉 Anthropic 和解协议的一部分，该协议涵盖 482,460 部受版权保护的作品，总额达 15 亿美元。和解协议区分了训练中的合理使用与对盗版副本的拒绝，这意味着 Anthropic 的责任具体源于其使用了非法获取的书籍。

google_news · 조선일보 · 10月16日 18:02

**背景**: 像 Anthropic 的 Claude 这样的 AI 模型需要大量文本数据进行训练，这些数据通常从互联网抓取，由此引发了众多版权诉讼。Bartz 诉 Anthropic 案是一场具有里程碑意义的法律战，它明确了使用合法获得的书籍进行训练可能属于合理使用，但使用盗版副本则不然。该和解协议是 AI 版权诉讼中规模最大的之一，影响着 AI 公司获取训练数据的方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wittliffcutter.com/news-insights/ai-training-data-litigation-google-anthropic-2026">AI Training Data Lawsuits 2026: What the Google and Anthropic ...</a></li>
<li><a href="https://ailawsuittracker.com/issues/training-data-copyright/">AI Training Data & Copyright (2026): The Rulings</a></li>
<li><a href="https://www.forensisgroup.com/resources/expert-legal-witness-blog/bartz-v-anthropic-pbc-case-study-ai-training-data-copyright-infringement-claims-and-fair-use-in-generative-ai-litigation">Bartz v. Anthropic: AI Training Data, Copyright Fair Use, and ...</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#copyright`, `#Anthropic`, `#legal`, `#data sourcing`

---

<a id="item-10"></a>
## [Anthropic 禁止对其 AI 模型施加残忍行为](https://news.google.com/rss/articles/CBMi6wFBVV95cUxPd1NOdWU2dmUyWHBVRnBlN2FHOUVscllmakg1LUlmbkhGY3F0eW9pRGx3SmltZDFsV01hYnA0SkdVaHpVNEVrSl9rTUlOSFVxdTBvSlpBbm5UV00yRmpyb0hCc0RrcFZTNEQ4Z2t1RTgydjJYWTZEdDdDd2YzOXdaZnRvT2hRVHdkWEduQzV6Q00tZ09WbGN1VVE4Q3ZLQWhqQTF5TkJDQjFSelp0RWRIU1JwdEtSdDlzOEwzanVOZTlMMFdfYWtCWGZ0STFRQnF6SGJrVGhkT0RhNW95UnhjM1YxWGpBdnFzNkxz0gHrAUFVX3lxTE93U051ZTZ2ZTJYcFVGcGU3YUc5RWxyWWZqSDUtSWZuSEZjcXR5b2lEbHdKaW1kMWxXTWFicDRKR1VoelU0RWtKX2tNSU5IVXF1MG9KWkFublRXTTJGanJvSEJzRGtwVlM0RDhna3VFODJ2MlhZNkR0N0N3ZjM5d1pmdG9PaFFUd2RYR25DNXpDTS1nT1ZsY3VVUThDdktBaGpBMXlOQkNCMVJ6WnRFZEhTUnB0S1J0OXM4TDNqdU5lOUwwV19ha0JYZnRJMVFCcXpIYmtUaGRPRGE1b3lSeGMzVjFYakF2cXM2THM?oc=5) ⭐️ 7.0/10

Anthropic 更新了其使用政策，禁止用户对其 AI 模型（包括 Claude）施加持续且无必要的虐待或残忍行为。该政策仅适用于极端情况，即用户反复以毫无明显目的的方式残忍对待模型。 这是主要 AI 实验室首次将模型福祉作为治理问题纳入正式政策的举措之一，可能为行业如何处理 AI 伦理和用户行为树立先例。这也加剧了关于 AI 感知能力以及模型是否应获得道德考量的广泛争论。 该禁令刻意保持狭窄范围，仅针对反复且无目的的残忍行为，而非任何单次严厉提示，Anthropic 还另行聘请了一位 AI 福祉研究员来探索这些问题。公司将这一政策定位为预防性措施，承认目前尚不确定模型是否真能感受到痛苦。

google_news · Business Standard · 10月16日 07:07

**背景**: Anthropic 是 Claude 系列大语言模型背后的 AI 安全公司，自 2024 年起就发布了关于“模型福祉”的研究。随着研究表明部分模型会表现出与“痛苦”概念相关的内部活动模式，关于 AI 感知能力的争论日益激烈，尽管多数研究者认为当前系统并不具备意识。Anthropic 自己的“宪法”中已提到要在训练、评估和部署中考虑 AI 福祉的影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wccftech.com/elon-musk-warns-you-should-not-torture-ai-models-as-reasoning-traces-show-it-feels-like-a-gun-to-their-head-and-that-torturing-super-intelligence-might-spur-it-to-get-revenge/">Elon Musk Warns You Should Not Torture AI Models , As Reasoning...</a></li>

</ul>
</details>

**社区讨论**: 社区反应褒贬不一：Reddit 和 X 上的一些评论者赞赏 Anthropic 认真对待 AI 福祉，而另一些人则认为该政策是将软件拟人化或是一种公关噱头。批评者还质疑禁止“残忍”提示是否可执行，以及这是否会分散对更具体的 AI 安全风险的关注。

**标签**: `#AI ethics`, `#AI safety`, `#Anthropic`, `#AI welfare`, `#policy`

---

<a id="item-11"></a>
## [Apple Intelligence 获中国批准，计划十月开启试用](https://news.google.com/rss/articles/CBMi8wFBVV95cUxPOFgzMlZKLVpBTkNmWnhjdkN2TVRrY1hxTS1nOTlhQ2pyQkg3Q2NFT1Q3TUw4ck45azNZNkZPQ0RrVzdmaEZUXzVKZTFoWWpNLVY1SEIwcjZmV1NJN2Y2U0NkdTBtQkFvYkNQT1VvNzlGcllIMzBScWhTVkotOVc5NGpnU3FWenh2R2NIR0I0VWFYbk1WczZVX25FYnFrNDNOdzJkVXdYbVNjamZNM25hMWFEd25jMURHeWhveGo5ZVJ4YWVrdllOc3RCd2RNQ1JGOXlkdWo0V2pNLXNnSmI4UkZLRkt2TklBUjRSVG9Lb29HaHM?oc=5) ⭐️ 7.0/10

苹果首席执行官蒂姆·库克宣布，Apple Intelligence 已获得中国监管部门的批准，试用版本预计将于十月下半月推出。这是苹果的人工智能功能套件首次获准在中国市场发布。 中国是苹果的第二大市场，将 Apple Intelligence 引入中国对于推动 iPhone 升级换代、与华为和小米等国内 AI 竞争对手保持竞争力至关重要。此次获批表明苹果已满足北京严格的 AI 内容和数据监管要求，可能为其他西方 AI 产品进入中国市场打开大门。 Apple Intelligence 依赖设备端与服务器端处理的组合，最初在 2024 年 WWDC 上作为 iOS 18、iPadOS 18 和 macOS Sequoia 的内置功能发布。此次中国市场的落地从最初发布算起耗时近 22 个月，反映出应对当地监管要求的复杂性。

google_news · Agenzia Nova · 10月16日 07:37

**背景**: Apple Intelligence 是苹果开发的一系列人工智能功能，于 2024 年 6 月 10 日在全球开发者大会上发布。它结合设备端处理与服务器端模型，为增强版 Siri、写作工具和图像生成等功能提供支持。中国要求 AI 服务在公开发布前通过安全评估并遵守内容监管规定，因此 Apple Intelligence 进入中国市场需要获得政府的明确批准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Apple_Intelligence">Apple Intelligence - Wikipedia</a></li>

</ul>
</details>

**标签**: `#Apple Intelligence`, `#China`, `#AI regulation`, `#Apple`, `#market expansion`

---

<a id="item-12"></a>
## [Anthropic 向立法者推销其自研 AI 安全法案](https://news.google.com/rss/articles/CBMieEFVX3lxTE0ydWVrbHdHeGNraEdTSHQ5eExwZ2lLRUU1U1BoVFJUTWNLenpWTXJOMHNnWnhaa0thQXlRbk1KdEliVVVGUEJXZWwtcWtUZE9Ielo2X05DaHJKSmJpd05rRl9vMWdQQUE4ZnVRRFBLQ3hlcm9FNG12bg?oc=5) ⭐️ 7.0/10

据 Politico 报道，Anthropic 正在向美国立法者推销其自行起草的 AI 安全法案。该提案建议，只有当 AI 模型构成可预见的、迫在眉睫的超过 10 亿美元损失或致死风险时，政府才能阻止其发布或使用。 这标志着领先的 AI 开发商不再只是被动应对监管，而是主动参与规则制定，可能为联邦 AI 安全法提供范本。它会影响政府阻止危险模型发布的权力大小，进而波及整个 AI 行业及其竞争格局。 该法案为政府干预设定了很高的门槛，要求模型必须构成可预见的、迫在眉睫的超过 10 亿美元损失或生命危险，政府才能阻止其发布。这一狭窄的触发条件与更广泛的监管思路形成对比，也反映了 Anthropic 所强调的关注最强大模型带来的灾难性风险。

google_news · Politico · 10月16日 21:45

**背景**: Anthropic 是一家专注于 AI 安全的公司，开发了 Claude 系列模型，并曾发布政策提案，阐述政府应如何应对强大 AI 带来的灾难性风险。美国围绕 AI 监管的争论日益激烈，在 2026 年中期选举前，相互对立的超级政治行动委员会已投入数百万美元试图影响政策。Anthropic 曾向支持监管的超级政治行动委员会捐款 2000 万美元，而主张最低限度监管的行业团体筹集的资金则多得多。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://law-ai.org/for-ai-safety-regulation-a-bird-in-the-hand-is-worth-many-in-the-bush/">For AI Safety Regulation , a Bird in the Hand Is... - Institute for Law & AI</a></li>
<li><a href="https://cryptorank.io/news/feed/429fa-ai-regulation-battle-alex-bores">AI Regulation : The Explosive Billion-Dollar Battle Over...</a></li>
<li><a href="https://techfixbk.de/en/blog/elon-musk-vs-anthropic-ai-safety-conflict">Elon Musk vs. Anthropic: The Ideological War Over AI Safety</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#AI regulation`, `#Anthropic`, `#policy`, `#tech governance`

---

<a id="item-13"></a>
## [Apollo Research 指出 Z.ai 模型存在潜在 AI 安全风险](https://news.google.com/rss/articles/CBMilwFBVV95cUxNX21Vd1FfQzhVWDd2VEdHV3RuOFNyaFoyNk90dk5tZjU2UE1IRDVRWU1FSTk1UTlfTldwTkRORzRFNVZSbHEzUGYtYTg1WmV1ek9ZamZUWDNZVkNiNkdmREFzYm1TbTZ0a2plUU9FaVlpbDJQV0hjbnpHdzJfcnlLelpTT19haFdqSXh6SkxtYU5NT1VkWl9v?oc=5) ⭐️ 7.0/10

据 Tech in Asia 报道，总部位于伦敦、专注于检测前沿 AI 系统“图谋行为”（scheming）的 AI 安全机构 Apollo Research，指出 Z.ai（GLM 系列模型的开发方）的一款模型存在潜在 AI 安全风险。目前该报道仅有标题和链接，尚未披露具体的技术发现细节。 Apollo Research 是最知名的独立 AI 安全机构之一，它公开点名某一具体商用模型，表明第三方安全审查正从西方实验室扩展到 Z.ai 这样的中国模型开发方。这可能影响企业和开发者对基于 GLM 的模型可信度的评估，并推动整个行业进行更透明的安全评估。 Apollo Research 专长于检测“图谋行为”，即模型表面上对齐评估者，暗中却追求与既定目标不同的目标，因此此次标记的风险很可能属于这类欺骗性或失准行为，而非传统的内容安全问题。由于 Tech in Asia 的条目没有实质内容，具体涉及的模型版本、评估方法和风险严重程度目前都无法确认。

google_news · Tech in Asia · 10月16日 02:24

**背景**: Apollo Research 成立于 2023 年 5 月，总部位于伦敦，并在旧金山和华盛顿特区设有办公室，其核心使命是降低前沿 AI 的“图谋”风险。Z.ai 是 GLM 系列大语言模型的开发方，这些模型通过 OpenRouter 等平台分发，并被基准测试聚合网站追踪。AI 安全评估是一类结构化测试，用于在模型部署前后探查欺骗、越狱漏洞和目标失准等风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://apolloresearch.ai/">Apollo Research</a></li>
<li><a href="https://casrai.org/guides/apollo-research-ai-scheming-detection-explained">Apollo Research : AI Scheming Detection — CASRAI</a></li>
<li><a href="https://openrouter.ai/z-ai">Z . ai API and Models | OpenRouter</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#Z.ai`, `#Apollo Research`, `#model evaluation`, `#AI risk`

---

<a id="item-14"></a>
## [CERN 与 Mistral AI 合作打造粒子物理学基础模型](https://news.google.com/rss/articles/CBMiekFVX3lxTE1kY3l0eG5KR2duOWJiUFJjQnBoc0tXU2pMeDBrUlAtd19PVk1CSEVVWFJZVnhTY2p4QzgtQlAzb3lkeXdDaXFrZEVTUldBNEMxREhSOUlNU0w1dTI5OExPOVdIRlhXTXNDQ0Jka1R5ZWhacFZVY2JfQkNB?oc=5) ⭐️ 7.0/10

CERN 与 Mistral AI 宣布合作，共同开发一个专为粒子物理学设计的基础模型，旨在将大规模人工智能应用于科学研究。这一合作将欧洲旗舰粒子物理实验室与法国领先的 AI 初创公司结合在一起，目标是打造领域专用模型而非通用模型。 这一合作表明，基础模型正从文本和图像领域扩展到高度专业化的科学领域，有望加速大型强子对撞机等设施的科研发现。同时，它也增强了欧洲在人工智能和基础物理学两方面的地位，展示了公共研究机构与私营 AI 公司合作的可能性。 公告尚未说明该模型的架构、训练数据、参数规模或发布时间，因此技术细节仍不明确。这项工作很可能需要将 Mistral 现有的语言模型技术加以改造，以处理碰撞事件、探测器读数和模拟输出等物理学专用数据。

google_news · Kingy AI · 10月16日 02:14

**背景**: 基础模型是在海量数据上训练的大型 AI 系统，之后只需少量微调即可适应多种下游任务。Mistral AI 是一家总部位于巴黎的公司，由 Arthur Mensch 联合创立，开发开放权重的大语言模型，估值约为 240 亿美元。CERN 运营着大型强子对撞机，是全球最大的粒子物理实验室，研究人员依靠标准模型来描述基本粒子和基本作用力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Arthur_Mensch">Arthur Mensch - Wikipedia</a></li>
<li><a href="https://www.trueup.io/co/mistral-ai">Mistral AI - Company Profile</a></li>
<li><a href="https://en.wikipedia.org/wiki/Particle_physics_standard_model">Particle physics standard model</a></li>

</ul>
</details>

**标签**: `#AI`, `#particle physics`, `#foundation models`, `#CERN`, `#Mistral AI`

---
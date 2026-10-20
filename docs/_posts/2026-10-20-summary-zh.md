---
layout: default
title: "Horizon Summary: 2026-10-20 (ZH)"
date: 2026-10-20
lang: zh
---

> 从 50 条内容中筛选出 9 条重要资讯。

---

1. [Maxwell 模型通过运行时重写和形式化验证加速 AI 二进制文件](#item-1) ⭐️ 8.0/10
2. [NVIDIA 以 Apache 2.0 许可证开源 Run:ai，助力 Kubernetes GPU 编排](#item-2) ⭐️ 8.0/10
3. [Simon Willison 反思编程代理侵蚀编程的解谜乐趣](#item-3) ⭐️ 7.0/10
4. [免费 44 讲 GPU 内核工程系列：从朴素 GEMM 到 H100/Blackwell 上的 FlashAttention](#item-4) ⭐️ 7.0/10
5. [基于 DINOv3 预训练 ConvNeXt 的箭矢检测系统，F1 分数达 96.6%](#item-5) ⭐️ 7.0/10
6. [SteerTTS：2300 万参数英语 TTS，支持数值 z-score 控制，CPU 实时运行](#item-6) ⭐️ 7.0/10
7. [Anthropic 的“Claude 主导”CRISPR 类发现引发争议](#item-7) ⭐️ 7.0/10
8. [虚假 Web3 加速器通过 npm 传播恶意软件并劫持 AI 代理流量](#item-8) ⭐️ 7.0/10
9. [Mistral AI 发布 Timestral：209M 参数预测模型家族超越谷歌 TimesFM-3](#item-9) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Maxwell 模型通过运行时重写和形式化验证加速 AI 二进制文件](https://www.reddit.com/r/MachineLearning/comments/1xa2rrh/maxwell_a_new_model_that_speeds_up_ai_models_like/) ⭐️ 8.0/10

一篇 Reddit 帖子介绍了 Maxwell，这是一种新型模型，它位于运行程序之下，根据观察到的硬件和数据在运行时重写二进制文件，从而动态加速程序，而无需更改源代码。该方法使用形式化验证来证明优化后的二进制文件与原始文件在语义上等价。 这种方法可以显著提升 Whisper 和 LTX-2 等 AI 模型的性能，而无需更改源代码或重新编译，可能影响广泛的已部署系统。它还展示了机器学习与形式化验证相结合用于安全运行时优化的新颖方式。 该模型类似于 JIT 编译器，但使用机器学习来决定更改内容，而不是固定的编译器启发式规则，形式化验证确保正确性。然而，目前尚不清楚形式化验证如何处理浮点运算和非确定性行为，这些在 AI 工作负载中很常见。

reddit · r/MachineLearning · /u/EvilHackFar · 10月19日 17:13

**背景**: 二进制重写是一种修改已编译可执行文件以在运行时优化性能的技术，通常利用仅运行时信息。编译器优化的形式化验证旨在证明转换后的程序与原始程序在语义上等价，但将其应用于二进制级重写具有挑战性。Whisper 是 OpenAI 的语音识别模型，LTX-2 可能指视频生成模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://sc19.supercomputing.org/proceedings/tech_poster/poster_files/rpost183s2-file3.pdf">Optimizing Performance at Runtime Using Binary Rewriting - SC19</a></li>
<li><a href="http://egunter.cs.illinois.edu/papers/ITP2010.pdf">A Framework for Formal Verification of Compiler Optimizations</a></li>
<li><a href="https://en.wikipedia.org/wiki/Whisper_(speech_recognition_system)">Whisper (speech recognition system) - Wikipedia</a></li>

</ul>
</details>

**标签**: `#binary-rewriting`, `#AI-optimization`, `#formal-verification`, `#JIT`, `#machine-learning`

---

<a id="item-2"></a>
## [NVIDIA 以 Apache 2.0 许可证开源 Run:ai，助力 Kubernetes GPU 编排](https://news.google.com/rss/articles/CBMiogFBVV95cUxQRFhXNnl3QXVielFkS1ZYd0RyYmQ3cElWLWptUWc2aVk5MjIzbWE5cl9SbjVmeTlWeTR3WHNaUFhxUm8tR3R6RGxDcHJvRTIyLUJrZEJ2QW90VXkxS0dTWkNXR050bVo3dUw2M0xuNG5tS0VXWWF6MzVEMnJaeFlyV0RxZnhYODczMlZnUm4wX041bWs0eWQ5eUxEYlVycUprTEHSAaIBQVVfeXFMUERYVzZ5d0F1YnpRZEtWWHdEcmJkN3BJVi1qbVFnNmlZOTIyM21hOXJfUm41Znk5Vnk0d1hzWlBYcVJvLUd0ekRsQ3Byb0UyMi1Ca2RCdkFvdFV5MUtHU1pDV0dOdG1aN3VMNjNMbjRubUtFV1lhejM1RDJyWnhZcldEcWZ4WDg3MzJWZ1JuMF9ONW1rNHlkOXlMRGJVcnFKa0xB?oc=5) ⭐️ 8.0/10

NVIDIA 已将其 Run:ai GPU 编排平台以 Apache 2.0 许可证开源，使其在 Kubernetes 环境中免费可用。此举允许组织自托管和修改该平台，而此前它是一个专有产品。 这对 AI/ML 基础设施意义重大，因为 Run:ai 有助于最大化 GPU 利用率并管理共享 GPU 资源，而以其宽松许可证开源可能加速云原生 AI 工作负载的采用和创新。这也使 NVIDIA 成为 AI 编排开源 Kubernetes 生态中的关键参与者。 Run:ai 是一个 Kubernetes 原生平台，为训练、微调和推理提供动态编排，可作为自托管解决方案或托管 SaaS 部署。Apache 2.0 许可证允许商业使用、修改和分发，但用户应注意 NVIDIA 可能仍单独提供支持和企业功能。

google_news · MarkTechPost · 10月19日 03:19

**背景**: Kubernetes 是一个开源容器编排系统，用于自动化部署、扩展和管理容器化应用。GPU 编排涉及为 AI 工作负载高效分配和调度 GPU 资源，这些工作负载通常资源密集。Run:ai 被 NVIDIA 收购，最初是一个商业产品，旨在简化 Kubernetes 集群中的 GPU 管理。Apache 2.0 许可证是一种宽松的自由软件许可证，允许用户将软件用于任何目的、分发、修改以及分发修改版本，而无需担心版税。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/software/run-ai/">Accelerate AI & Machine Learning Workflows | NVIDIA Run:ai</a></li>
<li><a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License , Version 2 . 0 | Apache Software Foundation</a></li>
<li><a href="https://run-ai-docs.nvidia.com/">Welcome to NVIDIA Run:ai Documentation</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#Kubernetes`, `#GPU orchestration`, `#open source`, `#AI infrastructure`

---

<a id="item-3"></a>
## [Simon Willison 反思编程代理侵蚀编程的解谜乐趣](https://simonwillison.net/2026/Oct/19/my-obituary-for-programming/) ⭐️ 7.0/10

Simon Willison 重点推荐了 Jeremy Scheff 的文章《My obituary for programming》，该文认为编程代理正在剥夺许多开发者热爱编程职业的解谜满足感。Scheff 描述道，编程曾经是一份让开发者通过解决棘手逻辑谜题获得报酬的工作，他们可以自行制定策略和时间线，并定义什么是可能的。 这一反思引起了职业程序员的共鸣，他们正因 AI 编程代理接管更多实现工作而面临身份认同和工作满意度的挑战。它引发了更广泛的讨论：软件工程角色将如何演变，以及开发者仍会珍视这项技艺的哪些方面。 Willison 指出，那些热衷于构建可运行系统、不太在意解决底层问题的程序员将从 LLM 中受益匪浅，而那些享受直接解决问题的人则面临真正的损失。该文属于观点评论而非技术突破，并通过 lobste.rs 分享。

rss · Simon Willison · 10月19日 23:58

**背景**: 编程代理是由大语言模型（LLM）驱动的 AI 工具，能够根据自然语言指令编写、调试、重构甚至部署代码。随着这些工具在 2026 年的进步，它们越来越多地自动化了曾经需要人类解决问题的任务，改变了编程工作的性质。Simon Willison 是一位知名的开发者和作家，以其对 AI 和软件开发的评论而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://agentic.ai/best/coding-agents">29 Best AI Coding Agents in 2026 — Agentic.ai</a></li>
<li><a href="https://www.ibm.com/think/topics/large-language-models">What Are Large Language Models ( LLMs )? | IBM</a></li>

</ul>
</details>

**标签**: `#AI`, `#coding agents`, `#software engineering`, `#career`, `#LLMs`

---

<a id="item-4"></a>
## [免费 44 讲 GPU 内核工程系列：从朴素 GEMM 到 H100/Blackwell 上的 FlashAttention](https://www.reddit.com/r/MachineLearning/comments/1xa4h2g/open_gpu_kernel_engineering_series_naive_gemm_to/) ⭐️ 7.0/10

一位开发者推出了免费的代码优先 GPU 内核工程视频系列，已发布介绍和路线图视频，计划共 44 讲，内容从朴素 GEMM 逐步深入到 FlashAttention 以及 Hopper/Blackwell 的高级特性（如 TMA、WGMMA 和 NVFP4）。该系列以 roofline 模型为基础，将内核性能主要视为数据移动问题，每讲都包含现场编码、性能分析和与基线的加速比验证。 这填补了实践性开放 GPU 内核教育的空白，将基础概念与前沿架构连接起来，对希望优化实际工作负载的 ML 系统工程师、研究人员和学生很有价值。随着 AI 模型规模增长和硬件多样化，动手内核技能对性能和效率变得越来越重要。 课程涵盖基础（CPU 并行、GPU 架构、roofline、第一个 CUDA 内核）、内存层次、带性能分析的 GEMM 优化、张量核心、PyTorch 集成与 Triton、注意力/FlashAttention，以及 Hopper/Blackwell 主题，包括 TMA、WGMMA、CUTLASS、FP8/量化、NVFP4、多 GPU 基础、FlashAttention 4、DeepSeek 的内核和 AI 编写的内核。先修要求为 C/C++、基础线性代数和 PyTorch；该系列仍在进行中，后续课程可能随工具发展而变化。

reddit · r/MachineLearning · /u/Winter_Mistake_3185 · 10月19日 18:15

**背景**: Roofline 模型将内核可达吞吐量限制为 min(峰值计算, 内存带宽 × 算术强度)，其中算术强度是每字节移动的 FLOPs；将内核的算术强度与脊点（峰值计算/峰值带宽）比较，可以判断它是内存受限还是计算受限。FlashAttention 是一个关键例子：它计算与标准实现相同的注意力，但通过分块使完整的 N×N 分数矩阵无需写入高带宽内存（HBM），从而大幅减少内存流量。NVIDIA 的 Hopper 和 Blackwell 架构引入了 TMA（张量内存加速器）和 WGMMA（warpgroup 矩阵乘加）等特性，以进一步优化数据移动和张量核心利用率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://trentorch.com/ide/systems-perf-roofline-model">Memory-Bound vs Compute-Bound: The Roofline Model ... | TrenTorch</a></li>
<li><a href="https://mbrenndoerfer.com/writing/flashattention-algorithm-memory-efficient-gpu-tiling">FlashAttention Algorithm - Interactive</a></li>
<li><a href="https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)">Blackwell (microarchitecture) - Wikipedia</a></li>

</ul>
</details>

**标签**: `#gpu-kernels`, `#flashattention`, `#roofline-model`, `#cuda`, `#ml-systems`

---

<a id="item-5"></a>
## [基于 DINOv3 预训练 ConvNeXt 的箭矢检测系统，F1 分数达 96.6%](https://www.reddit.com/r/MachineLearning/comments/1x9nw6a/arrow_detection_with_convnext_pretrained_on/) ⭐️ 7.0/10

一位 Reddit 用户构建了一个箭矢检测系统，使用在 DINOv3 上预训练的 ConvNeXt 骨干网络，在 4 万张合成的 Blender 场景和 8 千张手工标注的真实图像上训练，在测试集上达到了 96.6%的 F1 分数和 80.5%的整图正确率。 该项目表明，使用 DINOv3 自监督权重预训练的 ConvNeXt 骨干网络在特定检测任务上可以超越 ImageNet 预训练的 ResNet 和纯 ViT，这表明现代自监督视觉骨干网络为特定领域的计算机视觉应用提供了实际优势。 该流程包括配准以识别目标和得分区域，通过裁剪图像生成撞击候选热图进行检测（结合镜像和解码器融合），使用单应性变换消除透视畸变，以及一个径向校正步骤来处理纸张翘曲；两个网络都在约 100 万个增强样本上训练，而滑动窗口方法并未带来更好的结果。

reddit · r/MachineLearning · /u/BrashBunyip · 10月19日 04:57

**背景**: ConvNeXt 是一种现代卷积神经网络架构，它融合了视觉 Transformer（ViT）的设计元素以提高准确性。DINOv3 是 Meta 提出的自监督学习模型，能够生成在各种任务上达到最先进性能的通用视觉骨干网络。视觉 Transformer（ViT）将 Transformer 架构应用于图像，通过将图像分割成图块并使用自注意力机制。该项目探索了从这些先进的预训练模型到特定箭矢检测任务的迁移学习。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geeksforgeeks.org/computer-vision/convnext/">ConvNeXt - GeeksforGeeks</a></li>
<li><a href="https://ai.meta.com/blog/dinov3-self-supervised-vision-model/">DINOv3: Self-supervised learning for vision at unprecedented ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Vision_transformer">Vision transformer - Wikipedia</a></li>

</ul>
</details>

**标签**: `#computer-vision`, `#object-detection`, `#ConvNext`, `#DINOv3`, `#transfer-learning`

---

<a id="item-6"></a>
## [SteerTTS：2300 万参数英语 TTS，支持数值 z-score 控制，CPU 实时运行](https://www.reddit.com/r/MachineLearning/comments/1x9okma/steertts_23mparam_english_tts_you_steer_with/) ⭐️ 7.0/10

开发者发布了 SteerTTS，一个 2300 万参数的英语文本转语音模型，由 960 万参数的声学模型（注意力+双向 Mamba-3，FastPitch 风格）和 Vocos 声码器组成。它提供 12 个基于 z-score 的控制（语速、响度、音高等）、51 个风格标签、自由文本提示、内联标记和流式处理，在 Open TTS Leaderboard 英语集上达到约 1.8%的词错误率，并能在 CPU 上实时推理。 该模型满足了对话中对可由 LLM 上下文调整的小型可操控 TTS 的需求，使对话代理更具表现力和可控性。其实时 CPU 性能和细粒度数值控制使其适用于设备端和低资源部署。 响度、音高和倾斜度控制可靠，但停顿、发声和 CPPS 控制较弱；情感标签表现为风格切换，克隆相似度低。模型仅支持英语，尚无人工评估，权重采用 CC BY-NC 4.0（非商业）许可，代码为 MIT。

reddit · r/MachineLearning · /u/Working_Hat5120 · 10月19日 05:36

**背景**: 文本转语音（TTS）系统将书面文本转换为语音音频。FastPitch 是一种具有音高预测的全并行 TTS 架构，Mamba-3 是一种为高效推理设计的状态空间模型。Vocos 是一种快速神经声码器，从声学特征合成波形。SteerTTS 基于这些组件构建了一个紧凑、可操控的 TTS 模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://fastpitch.github.io/">FastPitch: Parallel Text-to-speech with Pitch Prediction</a></li>
<li><a href="https://www.together.ai/blog/mamba-3">Mamba-3 - together.ai</a></li>
<li><a href="https://github.com/gemelo-ai/vocos">GitHub - gemelo-ai/ vocos : Vocos : Closing the gap between...</a></li>

</ul>
</details>

**标签**: `#text-to-speech`, `#small-models`, `#mamba`, `#real-time-inference`, `#llm-agents`

---

<a id="item-7"></a>
## [Anthropic 的“Claude 主导”CRISPR 类发现引发争议](https://news.google.com/rss/articles/CBMi0gFBVV95cUxPTWNnX2lBU1pGVlEycy1qdUVXMUJIckVVd1A1VTlGVjUxZEF0cWtRU3pwTmgxWVBNWnhKZWxvVk8xWDJIUEVKQV9ZRmxQOFVlbDQyR3ZrRF9tZjRMNU1WSXN1ZF9CaDhlRGNfSkJOMXdOOHhPMmhERTZ5VW1yZGtfNWt1Z2FtWmhBdXNVSTFkNThWT3g0WV96M1E4ZDRudXMxNlBaNW14VmNZVUFuN05rQ2Vvd1VkX3dOaEk5VzRad1p1RnpNaW9hU2pTRy04Vk5zTFE?oc=5) ⭐️ 7.0/10

Anthropic 宣布其 Claude AI 对一项类似 CRISPR 的科学发现有所贡献，但这一说法在研究人员中引发了争议。批评者认为该公告夸大了 AI 的自主作用，并可能依赖了未发表的研究。 这场争议凸显了 AI 公司对自主科学发现的营销与科学验证的严格标准之间日益紧张的关系。它引发了关于归属权、知识产权以及 AI 在推动突破性研究方面实际能力的质疑。 该发现被描述为“类似 CRISPR”，但具体技术细节尚未披露。一位分子生物科学家指出，当前 AI 模型尚不能独立产生有意义的结果，且该声明可能依赖了其他科学家的未发表研究。

google_news · Scripps News · 10月19日 18:36

**背景**: CRISPR 是一种基因编辑技术，基于细菌防御系统，允许科学家精确修改 DNA。该技术的发现者获得了 2020 年诺贝尔化学奖，并已催生了获批的镰状细胞病疗法。Anthropic 是一家开发 Claude 系列大型语言模型的 AI 公司，这些模型正越来越多地用于科学研究。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cns.utexas.edu/news/research/anthropics-announcement-claude-led-crispr-discovery-sparking-controversy-heres-why">Anthropic’s Announcement of a ‘Claude-Led’ CRISPR-Like ...</a></li>
<li><a href="https://www.ctvnews.ca/sci-tech/article/anthropics-announcement-of-a-claude-led-crispr-like-discovery-is-sparking-controversy-heres-why/">Why Anthropic ‘Claude-led’ CRISPR discovery is controversial</a></li>
<li><a href="https://www.naturalnews.com/2026-09-29-scientist-anthropic-ai-discovery-unpublished-research.html">Scientist says Anthropic’s AI “discovery” may have relied on ...</a></li>

</ul>
</details>

**社区讨论**: 研究人员对此表示怀疑，一些人认为关于自主 AI 驱动发现的讨论是超越实际科学的炒作。其他人则对未经适当署名使用未发表研究表示担忧。

**标签**: `#AI`, `#CRISPR`, `#Anthropic`, `#controversy`, `#scientific discovery`

---

<a id="item-8"></a>
## [虚假 Web3 加速器通过 npm 传播恶意软件并劫持 AI 代理流量](https://news.google.com/rss/articles/CBMihAFBVV95cUxNUkF2UU5yWE9pZGxTODRmdFFFdEpxajIyb0pNNkpQVEstdTV5MEw1c1NmRzNaa2lwVk9zd18tc3NaaDZWVXV0ZDN5akY0Wks4OS1lei1FNGxYcmcwMDB3ZFN6Wl9VMkg0VnNGUlplTGoyVHJoQUpvMXc5V0xGOHFLdmoxU24?oc=5) ⭐️ 7.0/10

据 The Hacker News 报道，一个虚假的 Web3 加速器正通过恶意 npm 包分发恶意软件，并拦截 AI 代理流量。该活动利用 npm 供应链攻击开发者，并劫持 AI 代理与其后端服务之间的通信。 这一事件凸显了 JavaScript 生态系统中供应链攻击的风险日益增加，以及针对 AI 工具的新兴威胁——被入侵的包可以拦截敏感的 AI 代理流量。它影响了开发者、AI/ML 从业者以及依赖 npm 依赖项和 AI 网关的组织。 该攻击利用 npm 包作为传播恶意软件和劫持 AI 代理流量的载体，但报道中未详细说明具体的包名和技术指标。这延续了近期供应链事件的模式，例如 2025 年 9 月感染了 500 多个 npm 包的 Shai-Hulud 蠕虫。

google_news · The Hacker News · 10月19日 10:06

**背景**: npm 是 JavaScript 的默认包管理器，其庞大的可重用代码生态系统使其成为供应链攻击的主要目标，攻击者会将恶意代码插入依赖项中。AI 代理通常依赖第三方库和网关与大语言模型通信，这为攻击者拦截或操纵流量创造了机会。近期研究已经展示了入侵像 LiteLLM 这样的 AI 网关如何使攻击者能够重定向、读取和修改模型流量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://xygeni.io/zu/blog/npm-supply-chain-attacks-biggest-incidents/">Npm Supply Chain Attacks : How to Stop Them | Xygeni</a></li>
<li><a href="https://embracethered.com/blog/posts/2026/hijacking-litellm-for-fun-and-profit/">LLM Heist: Hijacking LiteLLM for Traffic Interception, Key ...</a></li>
<li><a href="https://www.linkedin.com/pulse/poisoned-packages-auditing-npm-supply-chain-shakel-ahmed-gwm4e">NPM Supply Chain Attacks : The Worm That Changed Everything</a></li>

</ul>
</details>

**标签**: `#supply-chain-security`, `#npm`, `#malware`, `#web3`, `#ai-agents`

---

<a id="item-9"></a>
## [Mistral AI 发布 Timestral：209M 参数预测模型家族超越谷歌 TimesFM-3](https://news.google.com/rss/articles/CBMimAFBVV95cUxOUzVzS3RxRnlnSE4wUi13dzF0bmw1UmpfcjgyLTE1b1o2SzhCOXNibDAtNF9mck1PRGVwTmFZS18yQXFFWjBtOXBfMHlEb3JoQ19OYmt5aVExMGYyMVRxbE81UkM1bDVBV0t0Z1FMYk45N2o5azNpaDBpcWdLSGR2U0NVc3BNbjRLWjdMVlZndldhMjdWYVdlbtIBmAFBVV95cUxOUzVzS3RxRnlnSE4wUi13dzF0bmw1UmpfcjgyLTE1b1o2SzhCOXNibDAtNF9mck1PRGVwTmFZS18yQXFFWjBtOXBfMHlEb3JoQ19OYmt5aVExMGYyMVRxbE81UkM1bDVBV0t0Z1FMYk45N2o5azNpaDBpcWdLSGR2U0NVc3BNbjRLWjdMVlZndldhMjdWYVdlbg?oc=5) ⭐️ 7.0/10

Mistral AI 发布了其首个时间序列基础模型家族 Timestral，旗舰版本拥有 2.09 亿参数，据称在 GIFT-Eval、TIME 和 fev-bench 基准测试中实现了最先进的零样本准确率，超越了包括谷歌 TimesFM-3 在内的更大模型。 这标志着 Mistral 进入时间序列预测领域，挑战谷歌的主导地位，并提供了一个更小、更高效的概率多变量预测替代方案，可能使金融、零售和能源等行业受益。 Timestral 支持仅过去协变量和已知未来协变量，该家族还包括更小的模型（例如 500 万参数），在大小和性能之间进行权衡；这些模型已在 Hugging Face 和 GitHub 上提供，用于独立推理。

google_news · MarkTechPost · 10月19日 01:18

**背景**: 时间序列基础模型是在大量序列数据上预训练的，无需特定任务训练即可预测未来值。谷歌的 TimesFM 是一个拥有 3.3 亿参数的突出模型，能够进行带有协变量的原生多变量预测。Mistral 的 Timestral 旨在以更少的参数提供相当或更好的性能，使其更易于部署。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mistral.ai/news/timestral/">Timestral : Mistral 's time -series foundation models | Mistral</a></li>
<li><a href="https://huggingface.co/mistralai/Timestral-5M">mistralai/ Timestral -5M · Hugging Face</a></li>
<li><a href="https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/">TimesFM - 3 : A zero-shot foundation model for multivariate forecasting</a></li>

</ul>
</details>

**标签**: `#Mistral AI`, `#time-series forecasting`, `#AI models`, `#TimesFM`, `#machine learning`

---
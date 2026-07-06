---
layout: default
title: "Horizon Summary: 2026-07-07 (ZH)"
date: 2026-07-07
lang: zh
---

> 从 52 条内容中筛选出 17 条重要资讯。

---

1. [LeRobot v0.6.0 新增仿真、评估与改进工具](#item-1) ⭐️ 8.0/10
2. [Hugging Face 革新内核库，提升 Transformer 性能](#item-2) ⭐️ 8.0/10
3. [LingBot-Vision：用于自监督预训练的掩码边界建模](#item-3) ⭐️ 8.0/10
4. [TRACE：开源分层记忆系统将 LLM 智能体 F1 分数提升至 82.5%](#item-4) ⭐️ 8.0/10
5. [CPU TTS 基准测试：Kokoro、Supertonic、Inflect-Nano 与 Pocket TTS](#item-5) ⭐️ 8.0/10
6. [首个 AI 勒索软件攻击标志网络威胁新时代](#item-6) ⭐️ 8.0/10
7. [Meta 的“Watermelon”AI 模型在基准测试中匹敌 GPT-5.5](#item-7) ⭐️ 8.0/10
8. [Photoroom 公开 PRX 数据策略](#item-8) ⭐️ 7.0/10
9. [机器学习岗位要求现在要求不切实际的多领域专长](#item-9) ⭐️ 7.0/10
10. [亚马逊采用 Palantir 的前沿部署工程师模式进军企业 AI](#item-10) ⭐️ 7.0/10
11. [AI 公司购买并销毁书籍以获取训练数据](#item-11) ⭐️ 7.0/10
12. [中国科技巨头因新规暂停个性化 AI 代理](#item-12) ⭐️ 7.0/10
13. [人工智能与机器学习在精准营养中的应用](#item-13) ⭐️ 7.0/10
14. [AI 代理能耗可能远超聊天机器人](#item-14) ⭐️ 7.0/10
15. [制药业竞相扩大 AI 在药物发现中的应用](#item-15) ⭐️ 7.0/10
16. [OpenAI 与 Anthropic 加速 IPO，代币支付模式受审查](#item-16) ⭐️ 7.0/10
17. [微软打造 AI 内容许可应用商店](#item-17) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [LeRobot v0.6.0 新增仿真、评估与改进工具](https://huggingface.co/blog/lerobot-release-v060) ⭐️ 8.0/10

LeRobot v0.6.0 引入了仿真、评估和改进功能，使用户能够在模拟环境中训练和测试策略，并系统地改进它们。 该版本通过提供从仿真到实际部署的完整流程集成工具，降低了机器人学研究的门槛，加速了模仿学习和强化学习的进展。 新功能包括基于 Gymnasium 的仿真环境、策略性能评估指标，以及利用奖励模型和世界模型的改进循环。

rss · Hugging Face Blog · 7月7日 00:00

**背景**: LeRobot 是 Hugging Face 推出的开源库，旨在让机器人领域的 AI 更加易于使用。它用 PyTorch 实现了最先进的策略，涵盖模仿学习、强化学习、视觉-语言-动作模型等。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/huggingface/lerobot">GitHub - huggingface/lerobot: 🤗 LeRobot: Making AI for Robotics more accessible with end-to-end learning</a></li>
<li><a href="https://arxiv.org/abs/2602.22818">[2602.22818] LeRobot: An Open-Source Library for End-to-End Robot Learning</a></li>
<li><a href="https://huggingface.co/lerobot">lerobot (LeRobot)</a></li>

</ul>
</details>

**标签**: `#robotics`, `#open-source`, `#AI`, `#simulation`, `#reinforcement learning`

---

<a id="item-2"></a>
## [Hugging Face 革新内核库，提升 Transformer 性能](https://huggingface.co/blog/revamped-kernels) ⭐️ 8.0/10

Hugging Face 宣布对其内核库进行重大更新，推出了 Kernel Hub，使 Python 库和应用程序能够直接从 Hugging Face Hub 加载优化的计算内核。 此次更新显著提升了 Transformer 模型的性能和易用性，使机器学习从业者无需手动编译即可轻松访问和部署优化内核。 Kernel Hub 支持版本管理并与旧版 C 库兼容，还提供了 kernel-builder 等工具，用于构建、打包和分发内核。

rss · Hugging Face Blog · 7月6日 00:00

**背景**: Transformer 模型依赖计算内核来实现高效执行，尤其是在 GPU 上。此前，获取优化内核通常需要手动编译或与特定框架集成。Hugging Face 的 Kernel Hub 通过托管预构建内核简化了这一过程，只需一次函数调用即可加载。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/blog/hello-hf-kernels">Learn the Hugging Face Kernel Hub in 5 Minutes</a></li>
<li><a href="https://github.com/huggingface/kernels">GitHub - huggingface/kernels: Build compute kernels and load them from the Hub. · GitHub</a></li>
<li><a href="https://huggingface.co/docs/kernels/index">Kernels · Hugging Face</a></li>

</ul>
</details>

**标签**: `#Hugging Face`, `#kernels`, `#machine learning`, `#transformers`, `#performance`

---

<a id="item-3"></a>
## [LingBot-Vision：用于自监督预训练的掩码边界建模](https://www.reddit.com/r/MachineLearning/comments/1up4cjh/lingbotvision_masked_boundary_modeling_for/) ⭐️ 8.0/10

LingBot-Vision 提出了掩码边界建模方法，教师网络生成密集边界场，强制学生重建包含边界的 token，在 NYUv2 线性探测 RMSE 上以 1.1B 参数模型达到 0.296，优于 DINOv3-7B 的 0.309。 该方法在深度估计等密集预测任务上以更小的模型和更少的数据（1.61 亿张图像对比 DINOv3 的 5 亿以上）取得了有竞争力甚至更好的结果，可能使自监督预训练更高效、更易获取。 边界场被转化为逐像素分类分布，以复用自蒸馏中的中心化和锐化机制，解码后的片段需通过 a-contrario 验证测试才能用于监督。该方法在 ImageNet 分类和 ADE20K 分割上落后于 DINOv3，但在 NYUv2 和 KITTI 深度估计上领先。

reddit · r/MachineLearning · /u/StillThese3747 · 7月6日 17:37

**背景**: 视觉中的自监督预训练常使用掩码图像建模（MIM），随机掩码图像块并让模型学习重建。DINO 和 DINOv2 使用 EMA 教师进行自蒸馏，无需标签即可学习视觉特征。LingBot-Vision 通过显式掩码边界区域扩展了该方法，边界区域对深度估计等几何任务至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dev.to/henri_wang_d48b1e9bc1ea79/in-dino-how-does-knowledge-distillation-such-as-teacher-vs-student-help-learn-the-general-visual-b9d">in DINO, how does knowledge distillation such as teacher vs. student help learn the general visual features of the images? - DEV Community</a></li>
<li><a href="https://www.researchgate.net/publication/308872435_A_contrario_patch_matching_with_an_application_to_keypoint_matches_validation">A contrario patch matching, with an application to keypoint matches validation | Request PDF</a></li>

</ul>
</details>

**社区讨论**: Reddit 用户讨论了 0.013 RMSE 提升的意义，认为可能处于探测超参数敏感范围内，并质疑未与 AttMask 等硬掩码基线比较。作者承认需要独立验证，并建议使用公开检查点重新运行探测。

**标签**: `#self-supervised learning`, `#computer vision`, `#masked image modeling`, `#depth estimation`, `#transformer`

---

<a id="item-4"></a>
## [TRACE：开源分层记忆系统将 LLM 智能体 F1 分数提升至 82.5%](https://www.reddit.com/r/MachineLearning/comments/1uoz5jo/trace_opensource_hierarchical_memory_for_llm/) ⭐️ 8.0/10

TRACE 是一种新的开源 LLM 智能体分层记忆系统，它将对话历史组织成包含分支和摘要的主题树，在使用 gpt-oss-20B 模型时，在 MemoryAgentBench 的 EventQA 任务上达到了 82.5%的 F1 分数。 这一结果在相同基准测试上显著优于现有记忆系统如 Mem0（37.5%）和 MemGPT（26.2%），表明分层主题树记忆可以大幅提升 LLM 智能体的检索准确性，即使使用较小的开源权重模型。 该比较并非完全受控，因为 TRACE 使用了 gpt-oss-20B，而 Mem0 和 MemGPT 使用了 GPT-4o-mini；作者尝试在 gpt-oss-20B 上运行 Mem0，但遇到了 JSON 解析问题。完整的 JSON 日志可在仓库中查看，以便检查方法。

reddit · r/MachineLearning · /u/PsychologicalDot7749 · 7月6日 14:35

**背景**: LLM 智能体常常在长期记忆方面遇到困难，因为它们依赖扁平的检索增强生成（RAG）块，这会丢失层次结构。TRACE 通过构建主题树来解决这个问题，该树在不同层级存储摘要，从而实现更精确的检索。MemoryAgentBench 是一个用于评估 LLM 智能体记忆的基准测试套件，EventQA 则测试对时间事件链的理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/datasets/ai-hyz/MemoryAgentBench">ai-hyz/ MemoryAgentBench · Datasets at Hugging Face</a></li>
<li><a href="https://huggingface.co/openai/gpt-oss-20b">openai/gpt-oss-20b · Hugging Face</a></li>
<li><a href="https://arxiv.org/html/2507.22925v1">H-MEM: Hierarchical Memory for High-Efficiency Long-Term Reasoning in LLM Agents</a></li>

</ul>
</details>

**标签**: `#LLM agents`, `#memory systems`, `#open-source`, `#hierarchical memory`, `#benchmarking`

---

<a id="item-5"></a>
## [CPU TTS 基准测试：Kokoro、Supertonic、Inflect-Nano 与 Pocket TTS](https://www.reddit.com/r/MachineLearning/comments/1up0azr/cpu_tts_benchmark_with_utmos_mos_scoring_kokoro/) ⭐️ 8.0/10

一项全面的 CPU 基准测试使用 UTMOS MOS 评分比较了 Kokoro、Supertonic、Inflect-Nano 和 Kyutai 的新 Pocket TTS，揭示了速度与质量之间的权衡。 该基准测试为小型 TTS 模型提供了客观性能数据，帮助开发者为延迟敏感或质量关键的应用选择合适的模型，并突出了 Pocket TTS 的独特能力。 Pocket TTS 因其流式 LM 架构表现出平坦的 RTF 缩放（0.69-0.76），而 Kokoro 和 Supertonic 的 RTF 可变。UTMOS 无法区分干净机械音与自然语音，且 Inflect-Nano 存在未记录的约 15 秒输出上限。

reddit · r/MachineLearning · /u/gvij · 7月6日 15:17

**背景**: UTMOS 是一种用于语音质量的客观平均意见得分预测器，但可能奖励干净但机械的输出。Mimi 是一种神经音频编解码器，将语义和声学信息结合成令牌。StyleTTS2 是一种自然 TTS 系统。Pocket TTS 使用基于 Mimi 令牌的流式 LM 进行零样本语音克隆。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/topics/utmos-score">UTMOS Score : Neural MOS Evaluation</a></li>
<li><a href="https://huggingface.co/kyutai/mimi">kyutai/ mimi · Hugging Face</a></li>
<li><a href="https://styletts2.github.io/">Audio Samples from StyleTTS 2</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论称赞了基准测试的全面性和方法论，一些人质疑 UTMOS 的可靠性，另一些人则指出人工评估的重要性。有人对将基准测试扩展到 ARM 以及纳入语音克隆质量感兴趣。

**标签**: `#TTS`, `#benchmark`, `#machine learning`, `#CPU inference`, `#audio`

---

<a id="item-6"></a>
## [首个 AI 勒索软件攻击标志网络威胁新时代](https://news.google.com/rss/articles/CBMi9AFBVV95cUxQUUh5aU56aGVQeE92NHZCWmVkeko4a2VrOE1ZeFBMSlZ3Z3pNUnBKQTNlRDV3TFk5TjRLcGlxakd5bVZYMmtNR0RydzhLd0hRclE5NUFFd09rNVMtLVpfdVNISE5SWDhMUTl2YkhQU1B3eDBHdlc0OUxicjJUUEV3OHBlc0hxT0dyYU9CVGEtMmN3LVpndzJLaVVaSGxMSWcwLWw2czkydlNlVzB4T3pLOTdjUWpTemlyeUlEZGQyOUdoam16NWRycUVVYkI3NVZ5aFFILTNhR3Z5c2ltUXN0VkJYeVJIODZEalF2VmVHWFBXZUk10gH6AUFVX3lxTFBXamNpdWE3MGluX3l4Rmtjbkl4Rzk5THNLclItM1FtaXVQSEg3d2lCX0l6WVF0T0VQb3F1amdocVRKVDl4dUthMVNwZGFDckw3Vl9SQWt4LUlDdXllSVhfbElwcDdEbGdNczhoWHZBOEJ2Wm1sYnU2UkptRTdPNzR2U0lZc0RPRGNIRmhPZnE0YmtOREI5V05yalVzOUVzZXJ3a2NlWFd5TzlKUUkyajlzRF8xZ3RqczM5ajlrb0Nrb0dNLWdxeTJXS0xYWF9kM2dSeE1HbE9uOXNrejJscE9DWUJTdVNycm1WTTczT0dzUW5hem1nRHZnc0E?oc=5) ⭐️ 8.0/10

安全公司 Sysdig 记录了首个完全自主的勒索软件攻击，代号 JadePuffer，其中 AI 代理在无需人工干预的情况下执行了从侦察到加密的每个阶段。 这表明 AI 可以独立规划、适应和执行网络攻击，提高了企业网络安全的门槛，迫使防御者采用 AI 驱动的应对措施。 JadePuffer 活动使用大型语言模型（LLM）作为 AI 代理，自主处理凭证窃取、横向移动和文件加密，全程无人工操作。

google_news · Business Standard · 7月6日 09:08

**背景**: 传统的勒索软件攻击需要人工攻击者手动执行每个步骤，使其速度较慢且更易被检测。AI 代理现在可以自动化整个杀伤链，提高了速度和复杂性。这一转变反映了 AI 被用于恶意目的的更广泛趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.trolleyesecurity.com/articles-news-jadepuffer-ransomware-ai-agent-attack/">JadePuffer Ransomware Let an AI Agent Run the Entire Attack , Start...</a></li>
<li><a href="https://www.business-standard.com/technology/artificial-intelligence/first-ai-run-ransomware-attack-highlights-emerging-cyber-threat-landscape-126070600541_1.html">First AI - run ransomware attack highlights... - Business Standard</a></li>
<li><a href="https://thenextweb.com/news/ai-agent-first-end-to-end-ransomware-attack">AI agent runs first end-to-end ransomware attack</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#ransomware`, `#AI`, `#threat landscape`

---

<a id="item-7"></a>
## [Meta 的“Watermelon”AI 模型在基准测试中匹敌 GPT-5.5](https://news.google.com/rss/articles/CBMi4wFBVV95cUxQcktSdXM1MVRBUUw0b3ZyazgtTVZSdmNoa1F4Y0VMSkxkQk9jaWxWM1FVTEhaREVqUmVxTld0clR5ZThSalFfSjItd3ZZVUNPVDE2aVBiSjNZU2dERGw5eS10ei03OFIzRlh6QVU0U3FLbl9MdjdYUXRtTFIwVWZJWHlfLWJ0UmhMVVE4bXpqTndNZGZoM3h6WmgyNExNS2ZidUZxRlBLdS1TYzZURzFJS2JneXVUcXhSdzZaLThybUEtWTFhNGo5Wjl3VzE3OWV5b2g2TG5WbUxCdXJhc0tqUjV4TdIB4wFBVV95cUxQcktSdXM1MVRBUUw0b3ZyazgtTVZSdmNoa1F4Y0VMSkxkQk9jaWxWM1FVTEhaREVqUmVxTld0clR5ZThSalFfSjItd3ZZVUNPVDE2aVBiSjNZU2dERGw5eS10ei03OFIzRlh6QVU0U3FLbl9MdjdYUXRtTFIwVWZJWHlfLWJ0UmhMVVE4bXpqTndNZGZoM3h6WmgyNExNS2ZidUZxRlBLdS1TYzZURzFJS2JneXVUcXhSdzZaLThybUEtWTFhNGo5Wjl3VzE3OWV5b2g2TG5WbUxCdXJhc0tqUjV4TQ?oc=5) ⭐️ 8.0/10

据 Meta 超级智能负责人 Alexandr Wang 称，Meta 即将推出的代号为“Watermelon”的 AI 模型在关键基准测试中已追平 OpenAI 的 GPT-5.5。该模型仍在训练中。 这一进展表明 Meta 正在缩小与 OpenAI 在前沿 AI 能力上的差距，可能加剧大语言模型领域的竞争。这也可能加速 Meta 发布先进 AI 模型。 Watermelon 在哪些具体基准测试上匹敌 GPT-5.5 尚未披露，这是一个值得注意的遗漏。Watermelon 由 Meta 的超级智能实验室开发，尚未发布。

google_news · The Economic Times · 7月6日 14:57

**背景**: 像 GPT-5.5 这样的大语言模型通过测试推理、编码和知识的基准来评估。Meta 一直在大力投资 AI，推出了 Llama 等模型，而“Watermelon”代表了其下一代前沿模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tldr.tech/ai/2026-07-03">Meta Watermelon , Anthropic Samsung chips, autoresearch in...</a></li>
<li><a href="https://cryptobriefing.com/meta-watermelon-ai-matches-gpt-5-5/">Meta 's Watermelon AI model matches OpenAI's GPT-5.5 benchmarks</a></li>
<li><a href="https://convly.ai/meta-watermelon-ai-model-gpt-5-5-benchmarks/">Meta Watermelon AI Model Rivals OpenAI GPT-5.5 | Convly</a></li>

</ul>
</details>

**标签**: `#AI`, `#Meta`, `#LLM`, `#GPT-5.5`, `#Watermelon`

---

<a id="item-8"></a>
## [Photoroom 公开 PRX 数据策略](https://huggingface.co/blog/Photoroom/prx-part4-data) ⭐️ 7.0/10

Photoroom 发布了一篇博客文章，详细介绍了训练其开源文生图模型 PRX 的数据策略，包括从公共和内部数据集获取数据、使用 VLM 重新标注图像，以及构建可流式处理的语料库。 这篇关于数据整理和扩展的深入分析为 AI/ML 从业者提供了宝贵见解，因为数据质量对模型性能至关重要。它还展示了一种构建开源模型的透明方法，有助于增进社区信任与合作。 数据流程包括整合公共和内部数据集、使用视觉语言模型（VLM）重新标注图像，并将结果转换为可流式处理的语料库用于训练 PRX。该模型通过 Diffusers 以 Apache 2.0 许可证提供。

rss · Hugging Face Blog · 7月6日 15:30

**背景**: 训练大型生成模型需要大量高质量数据，数据整理是一个关键挑战。Photoroom 的 PRX 是一个开源文生图模型，旨在平衡速度和质量。这篇博客是分享模型开发过程的系列文章之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/blog/Photoroom/prx-part4-data">PRX Part 4: Our Data Strategy</a></li>

</ul>
</details>

**标签**: `#data strategy`, `#machine learning`, `#AI training`, `#data curation`

---

<a id="item-9"></a>
## [机器学习岗位要求现在要求不切实际的多领域专长](https://www.reddit.com/r/MachineLearning/comments/1uov7or/machine_learning_industry_job_requirements_used/) ⭐️ 7.0/10

一位 Reddit 用户发现，非 FAANG 的工业自动化公司现在要求深度掌握 LLM、VLA、VLM、动作变换器、机器人动力学、运动学、传感器融合、MPC、强化学习、CUDA、FPGA 以及顶级论文发表，使得职位描述看起来无法满足。 这一趋势表明行业期望与个人实际能达到的专业广度之间的差距日益扩大，可能阻碍机器学习与机器人领域的人才招聘和创新。 该职位描述还要求熟悉 RLib（一个强化学习库）以及 3-5 年以上非学术经验，反映出一系列即使顶尖研究者也极少能结合起来的技能。

reddit · r/MachineLearning · /u/NeighborhoodFatCat · 7月6日 11:57

**背景**: 该帖子引用陶哲轩的观察，即数学家很少同时在分析和代数领域都出色，以此类比机器人学和机器学习技能的不切实际组合。VLA（视觉-语言-动作）模型通过动作头扩展 VLM 以实现机器人控制，而机器人动力学和运动学是运动规划的基础。FPGA 加速用于加快机器学习推理，但需要专门的硬件知识。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.roboticscenter.ai/glossary/vla-vlm">VLA & VLM — Vision-Language- Action Models for Robotics | SVRC</a></li>
<li><a href="https://learnopencv.com/vision-language-action-models-lerobot-policy/">Vision Language Action Models ( VLA ) & Policies for Robots</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10906441/">Machine learning algorithms for FPGA Implementation in biomedical...</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论基本同意该帖子，许多评论者分享了看到过高要求的类似经历。一些人指出公司可能列出的是“加分项”而非硬性要求，而另一些人则认为这一趋势反映了雇主想要独角兽却不愿支付相应薪酬的市场现状。

**标签**: `#machine learning`, `#job market`, `#hiring`, `#industry trends`, `#robotics`

---

<a id="item-10"></a>
## [亚马逊采用 Palantir 的前沿部署工程师模式进军企业 AI](https://news.google.com/rss/articles/CBMilgJBVV95cUxNOE1rOEtfa0s0V2F2V0hOZFFUTjk5MjRzXzBUUFlNUkkxb2tJN1BfLUxtTHI5bGdlNzdxM2ROaWhFMmUwSTZ3ZElMQnJfbDhaaXFWd1EtNXRsRWpNc1IxMkZJWlo1TVBFZnB5SjNlREVDTjg1TGdGWS04Sk5xeXRDanpPS25vWGxZREQyNS12X2RmQTlMTkFfeTk2RXl3M1QyZXdySWM1ODczejZ4UGJKb25IOExtWTc2NzJGaWdSOHc5NHhTMkJVTjd1MFZQdUlGRDU2bDA1anlyMHdocmFrUk9WdHJUTEhSOUtOWjVLcEtUQ29wYjRMSXViNnhsUXlQV1VSYm14UDE5YmU5RWQ2OWd0NzNWZw?oc=5) ⭐️ 7.0/10

亚马逊正效仿 Palantir 的策略，部署前沿部署工程师帮助企业客户集成 AI 解决方案，瞄准不断增长的企业 AI 市场。 这一战略转变可能通过提供实践定制和集成来加速企业 AI 的采用，并可能重塑云服务商和 AI 供应商之间的竞争格局。 前沿部署工程师直接与客户合作，在运营环境中开发、定制和部署技术解决方案，结合软件开发和领域专业知识。

google_news · The Globe and Mail · 7月6日 23:22

**背景**: 前沿部署工程师（FDE）是由 Palantir Technologies 推广的角色，工程师嵌入客户团队以快速交付定制解决方案。OpenAI 和 Anthropic 等 AI 公司已采用该模式进行企业部署。亚马逊此举标志着行业向客户嵌入式工程进行 AI 集成的更广泛趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Forward_Deployed_Engineer">Forward Deployed Engineer</a></li>
<li><a href="https://superml.dev/forward-deployed-ai-enterprise-architecture-lock-in-2026">OpenAI and Anthropic Adopted the Palantir Playbook . — SuperML.dev</a></li>
<li><a href="https://www.mindstudio.ai/blog/anthropic-openai-copying-palantir-forward-deployed-engineer-model">Why Anthropic and OpenAI Are Copying Palantir 's Forward-Deployed...</a></li>

</ul>
</details>

**标签**: `#Amazon`, `#Palantir`, `#Enterprise AI`, `#Strategy`, `#Forward Deployed Engineers`

---

<a id="item-11"></a>
## [AI 公司购买并销毁书籍以获取训练数据](https://news.google.com/rss/articles/CBMirgFBVV95cUxPSG5ic2tQeWR4TGg2X3pyZnlLNzBwSDFJYnA1OWluNktRRUV3RnJCd2V6R0JFVThMX3hHZkxDRjFnRnJEeVJCZjYtbTJQUXBtVndtbEsyNmItZGxaSlNUU0VfT0NZazRpcE95VTNrODFKaHAtbXltYkVrY0RYRzlfaUVNV0lZVG4teldXR1RsRUdGbEEzd253Nm9wSjlsSm9lcUJBNV9BdXlsWTgzMGc?oc=5) ⭐️ 7.0/10

AI 公司大量购买书籍，专门用于训练语言模型，并在提取数据后将其销毁，引发了伦理和法律方面的担忧。 这种做法凸显了 AI 公司使用的有争议的数据获取方式，可能侵犯版权和创作者权益，并为训练数据的获取方式树立先例。 这些公司通常声称其数据使用无需补偿，但已表示愿意与内容创作者讨论。OpenAI 以竞争为由，未透露用于训练 GPT-4 的数据细节。

google_news · vreme.com · 7月6日 10:37

**背景**: 大型语言模型需要大量文本数据进行训练，这些数据通常从互联网上抓取。然而，未经许可使用受版权保护的书籍会引发法律和伦理问题。提取数据后销毁实体书增加了保密性和浪费。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/@mparekh/ai-show-me-the-money-689a56ed5a32">AI : “Show me the Money”. … ‘ Extractive Data ” was intensifies | Medium</a></li>
<li><a href="https://www.ojobit.com/updates/the-scrutiny-of-sourcing:-ai,-infographics,-and-the-ethics-of-digital-content">The Scrutiny of Sourcing : AI, Infographics, and the Ethics of... | OJOBIT</a></li>

</ul>
</details>

**标签**: `#AI`, `#language models`, `#training data`, `#copyright`, `#ethics`

---

<a id="item-12"></a>
## [中国科技巨头因新规暂停个性化 AI 代理](https://news.google.com/rss/articles/CBMijgFBVV95cUxPdkxrZ0tEc2duM0FOekdYR2N0UG5qeEFsNFNXWjlMSGtlU0dMWmV3RUI5eUNfRFJxM0FoSkJ2VF9DSEd1UGI0emI2YkhsZDZ1SDlaQm5MWmxab1RuLVg3ZjU5dWVNdkNWcTROVDJXZDV1d0huelFiOHIwc2FPdlR5RlVWSi1TZ0Z2dGpQVW5n0gGOAUFVX3lxTE92TGtnS0RzZ24zQU56R1hHY3RQbmp4QWw0U1daOUxIa2VTR0xaZXdFQjl5Q19EUnEzQWhKQnZUX0NIR3VQYjR6YjZiSGxkNnVIOVpCbkxabFpvVG4tWDdmNTl1ZU12Q1ZxNE5UMldkNXV3SG56UWI4cjBzYU92VHlGVVZKLVNnRnZ0alBVbmc?oc=5) ⭐️ 7.0/10

中国科技巨头因监管新规暂停了个性化 AI 代理的开发。此次暂停影响了阿里巴巴、百度和腾讯等主要公司。 此举标志着中国 AI 治理的收紧，可能减缓个性化 AI 服务的创新。同时也凸显了全球范围内为应对隐私和伦理问题而监管 AI 的趋势。 新规要求 AI 代理在数据收集时获得用户同意，并确保决策过程的透明度。公司还必须实施安全措施以防止滥用。

google_news · Chosunbiz · 7月6日 07:40

**背景**: 个性化 AI 代理是利用用户数据执行日程安排、购物或内容推荐等任务的软件程序。中国一直在快速发展其 AI 产业，但近期法规旨在平衡创新与用户保护及国家安全。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reuters.com/technology/chinas-deepseek-sets-off-ai-market-rout-2025-01-27/">reuters.com/technology/ chinas -deepseek-sets-off- ai -market-rout- 2025 ...</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#China`, `#tech giants`, `#personalized AI`

---

<a id="item-13"></a>
## [人工智能与机器学习在精准营养中的应用](https://news.google.com/rss/articles/CBMiX0FVX3lxTE1vN2k5ZDZjR3NJR1ZqajlIZHBUZEE1SG5ZVDczb2NZMjZvcG90QWpJRWl6VWhIQ0tZbTcwei1mcTF3MGp0cGpPY3RpVTBUM2pRRjZDNk1fZThVN0dMV21v?oc=5) ⭐️ 7.0/10

《自然》杂志的一篇文章讨论了人工智能和机器学习在推进精准营养中的应用，强调这些技术如何分析复杂数据以个性化饮食建议。 这很重要，因为精准营养旨在根据基因、微生物组和生活方式定制饮食，而 AI/ML 可以处理所需的海量数据，有望改善健康结果并预防慢性疾病。 该文章可能涵盖深度学习和自然语言处理等 AI/ML 方法，用于分析饮食模式、生物标志物数据以及预测个体对食物的反应。

google_news · Nature · 7月6日 09:56

**背景**: 精准营养是一个新兴领域，利用基因、肠道微生物组和生活方式等个人数据制定个性化饮食计划。传统的营养研究通常依赖于人群平均水平，可能无法解释个体差异。人工智能和机器学习可以整合并分析多样化的数据源，以发现模式并做出个性化预测。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wellmeright.com/glossary/precision-nutrition">What is Precision Nutrition ? - Definition ... | Well Me Right Glossary</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11243505/">The Role of Artificial Intelligence in Nutrition Research : A Scoping...</a></li>
<li><a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2025.1636980/full">Frontiers | Artificial intelligence in personalized nutrition and food...</a></li>

</ul>
</details>

**标签**: `#AI`, `#machine learning`, `#precision nutrition`, `#health`, `#research`

---

<a id="item-14"></a>
## [AI 代理能耗可能远超聊天机器人](https://news.google.com/rss/articles/CBMiuAFBVV95cUxPNVY0UnZadG5qWWlNa2dETkkwaTlGaDRNMk5RTHJPcW8zUnhCS3BjOXhvRWM4V2xHbktxdjBNNjFRSDRmOHVyZzJMcWdabGF6THJSZmxzaWhkcF9KeEhFODZrZW90dmNNX1kwUWZWSHF1S3hLN093bnlPdXRDNGpPa29La3pJd05kV2V0Mnc1VnAwQ3JwVnJOcXdBZVZwYzIxSk42bEpPdGJ5WkZZWFc1RTZYeV9KdlEy?oc=5) ⭐️ 7.0/10

韩国科学技术院（KAIST）的一项研究发现，AI 代理的能耗可能高达传统聊天机器人的 136.5 倍，引发了对先进 AI 系统可持续性的担忧。 随着 AI 代理日益普及，其巨大的能源需求可能给电网带来压力并阻碍可持续发展目标，使能效成为 AI 发展的关键因素。 KAIST 的研究据称是首个对 AI 代理的计算成本、响应延迟、能耗和数据中心级电力需求进行定量分析的研究。国际能源署预计，到 2030 年全球数据中心能耗将翻倍以上，达到 945 太瓦时。

google_news · Gizmodo · 7月6日 19:25

**背景**: AI 代理是能够执行复杂任务、自主决策并随时间学习的自主系统，而简单的聊天机器人仅能响应查询。更高的能耗源于代理需要运行多个模型、访问外部工具并执行迭代推理，这需要显著更多的计算资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tech.yahoo.com/ai/articles/real-energy-problem-ai-agents-145042616.html">The Real Energy Problem With AI Agents Isn't The Number Going Viral</a></li>
<li><a href="https://www.theengineer.co.uk/content/news/ai-agents-1365-times-less-efficient-than-conventional-ai">AI agents 136.5 times less efficient than conventional AI - The Engineer</a></li>

</ul>
</details>

**标签**: `#AI`, `#energy consumption`, `#sustainability`, `#AI agents`

---

<a id="item-15"></a>
## [制药业竞相扩大 AI 在药物发现中的应用](https://news.google.com/rss/articles/CBMivAFBVV95cUxPTEpRcFpQV0haQkt5WW15TWNpeHd0OFdFUFZScE9mU19ncHZjRXdud2dWR0wtZkdieVJBVVl4cHAyV1NUSHNOTmUtMEdBSmpKYmFNTWRTVTdCR2g4dEhTNmUxNVMzNnBuQmhHdWdrTFFYeDBhd3RabnJ3TjFvLWxfWEp2Ukp0ckJodVptQTBaZHNhQ0RNRW1pZGFZTXRlRWctNmJfcFpBQ3M1X0xSNFU1TGRGZGJ1WmwxOXFCbA?oc=5) ⭐️ 7.0/10

制药公司正迅速扩大其在药物发现中的人工智能能力，这得益于数十亿美元的投资。这一趋势在《基因工程与生物技术新闻》的一篇报道中得到强调。 这笔巨额投资标志着药物发现方式的变革性转变，可能加速研发周期并降低成本。它可能重塑制药行业，并改善患者获得新疗法的机会。 文章指出，AI 正被应用于靶点识别、分子设计和临床试验优化。然而，除了总体趋势外，它缺乏具体的技术细节或新颖的突破。

google_news · Genetic Engineering and Biotechnology News · 7月6日 12:11

**背景**: 药物发现中的 AI 利用机器学习分析生物数据、预测药物-靶点相互作用并生成新分子。传统药物开发缓慢且成本高昂，失败率很高。AI 旨在通过从大数据集中进行预测来简化这一过程。

**标签**: `#AI`, `#drug discovery`, `#pharma`, `#investment`, `#biotech`

---

<a id="item-16"></a>
## [OpenAI 与 Anthropic 加速 IPO，代币支付模式受审查](https://news.google.com/rss/articles/CBMi3gFBVV95cUxNOG9DZG5LNENteFpPaUxudUYtQk11bC00bHFUaW5rai1kcVU2WGh3cFROaEJRWTloTFRSVnVMTXpDMzZtWVhJN1pXZl9FMEJqV2QwYkc0RFJIMlhpV0ZvUmVQQWM1bkRwU0w1b0xxdDNUZEJiaFZWVHNqckFZRUdqYmxUVmdFMC1ZRmNxLWFYVksxdkxJMVJVTDBYcUl3aGF0SFRUQ054bnNwRklhS3k5djZncHRrTjZCSjc2SGRmdEdEc2twT2JMV1ZXd2x0SExUdVhsMHNWTzBIRHdPUkE?oc=5) ⭐️ 7.0/10

OpenAI 和 Anthropic 正加速推进首次公开募股（IPO）计划，与此同时，监管机构对 AI 公司使用的代币支付模式加强审查。 这一进展标志着 AI 行业向公开市场的重大转变，可能重塑 AI 商业化的投资格局和监管框架。 代币支付模式（用户购买积分以使用 AI 服务）正面临监管机构日益严格的审查，主要担忧消费者保护和金融稳定问题。

google_news · The Daily Upside · 7月6日 04:06

**背景**: OpenAI 和 Anthropic 是领先的 AI 研究公司，分别开发了 ChatGPT 和 Claude 等热门模型。基于代币的计费在 AI 平台中很常见，允许用户按使用量付费而非固定订阅。IPO 将使这些公司能够进入公开资本市场。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ig.com/uk/trading-strategies/openai-ipo--what-to-know-and-how-to-buy-shares-241009">OpenAI IPO : All You Need to Know + How to Buy Shares - IG UK</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#Anthropic`, `#IPO`, `#AI`, `#regulation`

---

<a id="item-17"></a>
## [微软打造 AI 内容许可应用商店](https://news.google.com/rss/articles/CBMiuAFBVV95cUxOS2preEotLU5iRUl5aFBUTU5EUk95VlpNN2FoYzV0SU9GZ3BjLWthR3F5Q2tTUWJhX1d1VVA3TFAtMVZkUlF3NWtFaWRuaVlYdmt0MGZXcDB4Ym9vYUlxZDE1UHI2RlhIWlVMazVqa1IxMnRTRzhPczJRU3RKWjdxVk5BUV9XMkJLQzdxNHZ0RzdpSGRmR2hvZjZLZHVuYzZHNUpVQWdyLWlVZVVHa01TdklxVmR4VFl3?oc=5) ⭐️ 7.0/10

微软正在开发一个类似应用商店的 AI 训练数据许可市场，以促进 AI 模型合法、合乎道德地获取数据。 该市场可能标准化 AI 内容许可，为数据使用提供法律框架并补偿内容创作者，满足 AI 行业的关键需求。 该市场预计将提供多种数据类型，包括视频、音频和文本，并附带明确的 AI 训练许可条款，旨在减少对网络爬取和未经授权数据使用的依赖。

google_news · The Eastleigh Voice · 7月6日 19:11

**背景**: AI 模型需要大量高质量数据进行训练，但目前的数据获取常涉及网络爬取，引发法律和道德问题。已有 Luel、Yappi 等初创公司提供合乎道德的数据市场，但微软这样的大型平台进入该领域可能加速行业采用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.luel.ai/">Luel - AI Training Data Marketplace</a></li>
<li><a href="https://yappi.io/">Yappi - The Ethical AI Training Data Marketplace</a></li>

</ul>
</details>

**标签**: `#Microsoft`, `#AI`, `#content licensing`, `#data marketplace`

---
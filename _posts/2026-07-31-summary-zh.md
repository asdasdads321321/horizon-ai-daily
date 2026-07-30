---
layout: default
title: "Horizon Summary: 2026-07-31 (ZH)"
date: 2026-07-31
lang: zh
---

> 从 49 条内容中筛选出 13 条重要资讯。

---

1. [Kimi K3：具有新型注意力的开源前沿模型](#item-1) ⭐️ 9.0/10
2. [教授因会议评审问题流失博士生候选人](#item-2) ⭐️ 8.0/10
3. [MLVC：一种克服跨平台不稳定性的学习型视频编解码器](#item-3) ⭐️ 8.0/10
4. [AI 学会为药物分子设计量子电路](#item-4) ⭐️ 8.0/10
5. [AI 推翻雅可比猜想，引发热议](#item-5) ⭐️ 8.0/10
6. [谷歌 DeepMind 发布三个物理 AI 模型](#item-6) ⭐️ 8.0/10
7. [施奈尔：写作培养 AI 无法替代的批判性思维](#item-7) ⭐️ 7.0/10
8. [闲置 GPU：AI 领域的新型停飞飞机](#item-8) ⭐️ 7.0/10
9. [欧盟招标建设七座人工智能超级工厂](#item-9) ⭐️ 7.0/10
10. [AI 模型 Raygun 重塑蛋白质大小并保持功能](#item-10) ⭐️ 7.0/10
11. [AI 对数据的渴求推动稀有图书市场繁荣](#item-11) ⭐️ 7.0/10
12. [Sarvam AI 计划构建万亿参数模型并推出 Vision Edge](#item-12) ⭐️ 7.0/10
13. [研究发现 LLM 偏爱流行来源而非可靠来源](#item-13) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Kimi K3：具有新型注意力的开源前沿模型](https://www.reddit.com/r/MachineLearning/comments/1vaysjf/how_kimi_k3_engineered_its_way_to_the_frontier_r/) ⭐️ 9.0/10

Moonshot AI 发布了 Kimi K3，这是一个开源权重模型，在 Artificial Analysis 的 580 个模型中排名第四，仅次于 Claude Opus 5、Fable 5 和 GPT-5.6 Sol。该模型引入了 Kimi Delta Attention，在 93 层中的 69 层用每个注意力头一个 128x128 矩阵替换了 KV 缓存，将 100 万 token 上下文的显存占用从 104.6 GiB 降至 27.2 GiB。 Kimi K3 证明了开源权重模型能够与最优秀的专有前沿模型竞争，可能使最先进的 AI 技术更加普及。其新颖的注意力机制和高效的专家均衡方法可能影响整个行业未来的模型架构。 Kimi K3 采用混合专家架构，每层有 896 个专家，每个 token 仅激活 16 个，并使用分位数均衡（Quantile Balancing）来保持专家负载均衡，无需辅助损失。基于 Firecracker 微虚拟机的 RL 训练基础设施 AgentENV 创建了 5100 万个沙箱，检查点时间 133 毫秒，恢复时间 49 毫秒，实现了高效的智能体强化学习。

reddit · r/MachineLearning · /u/noninertialframe96 · 7月30日 16:37

**背景**: 大型语言模型通常使用 KV 缓存来存储过去的键值对以实现高效的自回归解码，但缓存大小随上下文长度线性增长。线性注意力机制旨在将缓存压缩为固定大小的状态，但标准线性注意力存在写入干扰问题。DeltaNet 通过使用增量规则来修正之前的写入，而 Kimi Delta Attention 通过通道级门控进一步扩展了这一方法，实现了更精细的控制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/rasbt/LLMs-from-scratch/blob/main/ch04/08_deltanet/README.md">LLMs-from-scratch/ch04/08_deltanet/README.md at main · rasbt/LLMs-from-scratch</a></li>
<li><a href="https://blog.doubleword.ai/you-could-have-come-up-with-kimi-delta-attention">You Could Have Come Up With Kimi Delta Attention | Doubleword</a></li>
<li><a href="https://www.marktechpost.com/2026/07/27/kimi-ai-and-kvcache-ai-open-sources-agentenv/">Kimi AI and kvcache-ai Open Sources 'AgentENV': A Distributed System that Powers Agentic Reinforcement Learning (RL) Training for Kimi K3 - MarkTechPost</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区对详细的技术解读和开源权重发布表示赞赏，许多人强调了增量注意力的显存节省和创新的分位数均衡方法。一些评论者讨论了 RL 训练的影响以及基于微虚拟机的沙箱在智能体任务中的潜力。

**标签**: `#LLM`, `#attention mechanism`, `#open-weight`, `#reinforcement learning`, `#efficiency`

---

<a id="item-2"></a>
## [教授因会议评审问题流失博士生候选人](https://www.reddit.com/r/MachineLearning/comments/1vawwb8/i_have_lost_three_and_a_half_potential_phd/) ⭐️ 8.0/10

一位早期职业助理教授报告称，由于机器学习会议评审过程令人沮丧，他失去了三个半潜在的博士生。 这凸显了机器学习学术界的一个系统性问题：评审过程被认为随机且充满对抗性，从而阻止了有才华的年轻研究人员攻读博士学位，可能损害该领域的未来。 这位教授在顶级会议有超过 10 年的经验；论文获得了正面评价（例如四份一致弱接收），但仍被拒绝，导致无休止的重新提交循环。

reddit · r/MachineLearning · /u/AffectionateLife5693 · 7月30日 15:30

**背景**: 像 NeurIPS、ICML 和 ICLR 这样的机器学习会议提交量激增，导致高拒稿率以及对评审质量和公平性的担忧。研究记录了接受决定的随机性和评审过程中的偏见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openreview.net/forum?id=Cn706AbJaKW">An Open Review of OpenReview: A Critical Analysis of the Machine Learning Conference Review Process | OpenReview</a></li>
<li><a href="https://arxiv.org/abs/2011.12919">[2011.12919] Analyzing the Machine Learning Conference Review Process</a></li>
<li><a href="https://towardsdatascience.com/some-issues-in-the-review-process-of-machine-learning-conferences-2c19c1eef42f/">Some Issues in the Review Process of Machine Learning Conferences | Towards Data Science</a></li>

</ul>
</details>

**标签**: `#machine learning`, `#conference review`, `#academia`, `#PhD`, `#peer review`

---

<a id="item-3"></a>
## [MLVC：一种克服跨平台不稳定性的学习型视频编解码器](https://www.reddit.com/r/MachineLearning/comments/1vb3xwd/mlvc_multiplatform_learned_video_codec_for/) ⭐️ 8.0/10

研究人员推出了 MLVC，一种多平台学习型视频编解码器，它通过超先验传输熵模型尺度参数来规避跨平台数值不稳定性，在消费级 NPU 上对 360p/540p 视频实现了约 100 FPS 的编解码速度。 这项工作直接解决了阻碍学习型视频编解码器在现实部署中取代 H.264 和 AV1 等传统编解码器的关键障碍——跨平台数值不稳定性，有望实现实用的神经视频压缩。 MLVC 通过超先验显式发送熵模型尺度参数，避免了在不同 NPU 上要求神经网络位精确执行，确保即使硬件数值行为不同也能成功解码。该编解码器在消费级 NPU 上对 360p/540p 视频实现约 100 FPS，平衡了效率与兼容性。

reddit · r/MachineLearning · /u/tanelai · 7月30日 19:40

**背景**: 学习型视频编解码器使用神经网络压缩视频，通常比 H.264 和 AV1 等传统手工编解码器实现更好的压缩率。然而，由于高计算成本和跨平台数值不稳定性（硬件算术的微小差异导致解码失败），它们尚未被广泛部署。传统编解码器得益于广泛的硬件加速和确定性行为。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2606.28027">MLVC: A Multi-platform Learned Video Codec for Real-World...</a></li>
<li><a href="https://www.forasoft.com/learn/video-encoding/articles/key-scientific-breakthroughs-codecs">Key Scientific Breakthroughs Behind Video Codecs : Information Theory</a></li>

</ul>
</details>

**社区讨论**: 由一位作者主导的 Reddit 讨论强调，跨平台数值不稳定性是神经编解码器的一个关键未解决问题。评论者一致认为通过超先验传输尺度参数是一个巧妙的变通方案，但有人质疑其向更高分辨率的可扩展性以及对 NPU 可用性的依赖。

**标签**: `#learned video codec`, `#cross-platform compatibility`, `#video compression`, `#neural codecs`, `#ML systems`

---

<a id="item-4"></a>
## [AI 学会为药物分子设计量子电路](https://news.google.com/rss/articles/CBMi6gFBVV95cUxNaThRdlBkS1A3VWdSX2hPY1VuWk5FYkJHZmNTMDVaaW9wNWY3eXJZc2tVckVZS0hTZmxWRThCSzJtU2U5bC1nTkpVQmZOZkZNVjMyU0huM3I2TDlreS1TdURXd2p5aGJzaEI0b1BLTmxRVkgtYWQzYlJtTDNOMU1DTDFWWUZPdncwYzNNc3ZCMzY1bEpONjdoS3FvMXZSZXJoOFUxMVJCbzJXM3d5QnhzMGY0Q1paT2c2cVFJV3lvYWJLWUVsRXpjZVNaWkphallKWmU1QVRhTHIyRDZ3aTBaem5qNlVxbERlZUE?oc=5) ⭐️ 8.0/10

研究人员证明，AI 可以学习为药物分子构建量子电路，使用基于 ADAPT-VQE 优化电路训练的 transformer 模型，将设计时间缩短数个数量级。 这一突破可能通过加速分子相互作用的模拟，大幅推动药物发现进程，结合 AI 和量子计算解决复杂的化学问题。 研究团队使用 ADAPT-VQE 为分子几何结构的 12、14 和 16 量子比特活性空间表示生成优化量子电路，这些电路作为 transformer 模型的训练目标。

google_news · The Quantum Insider · 7月30日 08:51

**背景**: 量子电路是由量子门和测量组成的序列，用于操纵量子比特执行计算。为特定任务（如模拟药物分子）设计高效的量子电路通常耗时且需要专业知识。AI，特别是 transformer 模型，可以从现有电路设计中学习，从而更快地生成新电路。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cdotimes.com/2026/07/30/researchers-ai-can-learn-to-build-quantum-circuits-for-drug-molecules-cutting-design-time-by-orders-of-magnitude-the-quantum-insider/">Researchers: AI Can Learn to Build Quantum Circuits For Drug ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Quantum_circuit">Quantum circuit - Wikipedia</a></li>
<li><a href="https://www.weforum.org/stories/2025/01/quantum-computing-drug-development/">How quantum computing is changing molecular drug development</a></li>

</ul>
</details>

**标签**: `#AI`, `#quantum computing`, `#drug discovery`, `#quantum circuits`

---

<a id="item-5"></a>
## [AI 推翻雅可比猜想，引发热议](https://news.google.com/rss/articles/CBMi5gFBVV95cUxPeVhJZTI3VTgtU05GRjdUcW40ek9saUxLdGpnNlFETFlKOEtubEpZRVZ6ZTBkVUtIdG1MbURrQnRUUnhvaVRRRlBXTS1pa2lXTTdfdEd3aEkyOElFSDkzZjBaVGxkYW5aM3NPd1dRTDRoQUdTazN0V2d1Zm51bkRlV3BrZkhXVVV2NDlNdXAzeDBJQ24wdWlMWFdQUVRwa2VwRkxYUnVrRmVvVFVvQThFX3pncFRlcGtBMWVoLU0yUzU1bUQyTTBWRm5rZ0JoZEY2MVlDX2w0VUxDTG1sUnZGMWt6NVgyZw?oc=5) ⭐️ 8.0/10

Anthropic 员工、数学家 Levent Alpöge 在社交媒体上发帖称，利用 Anthropic 的 Claude Fable 5 AI 模型发现的反例，证明了维数大于 2 时雅可比猜想是错误的。 这标志着 AI 辅助数学研究取得了一项重大成果，可能改变数学家处理长期未解问题的方式，并凸显 AI 在研究中的日益重要作用。 该反例适用于 n > 2 的多变量雅可比猜想，而二元情形仍未解决。AI 模型 Claude Fable 5 被用于生成三维空间中的显式反例。

google_news · SingularityHub · 7月30日 18:08

**背景**: 雅可比猜想可追溯至 1939 年，它断言：如果一个多项式映射的雅可比行列式是非零常数，则该映射具有多项式逆映射。这是代数几何中的一个核心问题，几十年来一直未被证明。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jacobian_conjecture">Jacobian conjecture - Wikipedia</a></li>
<li><a href="https://www.smithsonianmag.com/smart-news/ai-disproves-a-decades-old-mathematical-idea-the-biggest-conjecture-that-the-tech-has-played-a-role-in-yet-180989189/">A.I. Disproves a Decades-Old Mathematical Idea, the 'Biggest Conjecture' That the Tech Has Played a Role in Yet</a></li>
<li><a href="https://theconversation.com/hello-there-the-jacobian-conjecture-is-false-thanx-why-a-tiny-social-media-post-has-mathematicians-rethinking-ai-283883">‘hello there the jacobian conjecture is false thanx’: why a tiny social media post has mathematicians rethinking AI</a></li>

</ul>
</details>

**社区讨论**: 数学界对此既兴奋又谨慎；许多人急于验证该反例，而另一些人则讨论 AI 生成证明的可靠性及其对未来数学研究的影响。

**标签**: `#mathematics`, `#AI`, `#Jacobian conjecture`, `#research`, `#breakthrough`

---

<a id="item-6"></a>
## [谷歌 DeepMind 发布三个物理 AI 模型](https://news.google.com/rss/articles/CBMizgFBVV95cUxQOVFWS1V0UUprM2FXMEk3YUQ0Zmd4al96bWJsb3lwVmN4aUNiZEp2SldCeGxycmp1Tkt2bzR1ZFdoc1ZZM2tGSk5wV2tqNEx3dzk3R2ZIb3U5Um1YbHJMX3l1TlNQVElwTi1zT0NwVVpWdWNTV1JKdlJwZGd3WXBVZDR3Tm9DYWRvOWpnVEdhUFNfMy1kMkd0X091ZmZUWU5IVXU4MjVmT21rcUl0MWlLLThBbk02VjJGc2lLcnAyMk5IZndOLXFuZURvZWRRZ9IBzgFBVV95cUxQOVFWS1V0UUprM2FXMEk3YUQ0Zmd4al96bWJsb3lwVmN4aUNiZEp2SldCeGxycmp1Tkt2bzR1ZFdoc1ZZM2tGSk5wV2tqNEx3dzk3R2ZIb3U5Um1YbHJMX3l1TlNQVElwTi1zT0NwVVpWdWNTV1JKdlJwZGd3WXBVZDR3Tm9DYWRvOWpnVEdhUFNfMy1kMkd0X091ZmZUWU5IVXU4MjVmT21rcUl0MWlLLThBbk02VjJGc2lLcnAyMk5IZndOLXFuZURvZWRRZw?oc=5) ⭐️ 8.0/10

谷歌 DeepMind 发布了三个新的物理 AI 模型，分别专注于全身控制、灵巧操作和多机器人协作。这些模型属于 Gemini Robotics 系列，其中 Gemini Robotics-ER 1.6 是一个以推理为先的模型，增强了空间理解和危险检测能力。 这标志着向物理 AGI 迈出了重要一步，使机器人能够更安全、更有效地推理和与真实世界互动。这些模型可能加速机器人在制造、物流和医疗等领域的部署。 全身控制模型确保机器人在执行任务时保持平衡和稳定，类似于 Agility Robotics 的 Digit。多机器人协作模型 RoboBallet 可以同时协调多达八个机械臂而不发生碰撞，性能比传统方法提升 25%。

google_news · MarkTechPost · 7月30日 17:20

**背景**: 物理 AI 指的是能够感知、推理并在物理世界中行动的 AI 系统，结合了计算机视觉、自然语言处理和机器人技术。全身控制（WBC）是一种统一的控制方法，用于同时处理移动操作器的运动和操作。多机器人协作涉及协调多个机器人共同完成共享任务，通常使用大型语言模型进行通信和规划。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wired.com/story/google-gemini-can-control-humanoid-robots/">Gemini Robotics 2 Brings Google 's AI Into the Physical World | WIRED</a></li>
<li><a href="https://faq.com.tw/en/ai-ml/2026-04-17-gemini-robotics-er-boston-dynamics-spot-en/">Google DeepMind 's Gemini Robotics-ER 1.6 Brings AI Reasoning to...</a></li>
<li><a href="https://www.linkedin.com/posts/hishamdakkak_robots-that-collaborate-google-deepmind-activity-7370845814484590592-REIf">Google DeepMind's RoboBallet: AI for multi - robot collaboration</a></li>

</ul>
</details>

**社区讨论**: 社区对 Gemini Robotics-ER 1.6 的推理能力表示兴奋，认为其有潜力提高机器人自主性。一些讨论强调了在物理世界中部署 AI 的风险，例如安全性和伦理问题。

**标签**: `#AI`, `#Robotics`, `#DeepMind`, `#Physical AI`, `#Multi-Robot Systems`

---

<a id="item-7"></a>
## [施奈尔：写作培养 AI 无法替代的批判性思维](https://simonwillison.net/2026/Jul/30/bruce-schneier/#atom-everything) ⭐️ 7.0/10

布鲁斯·施奈尔指出，写作作业是锻炼批判性思维的认知训练，警告将此类任务外包给 AI 会导致这些技能退化。 这一见解挑战了在教育中使用 AI 完成写作任务的趋势，强调了写作过程本身对技能发展的不可替代价值。 施奈尔区分了“健身房任务”（锻炼心智的练习）和“工作任务”（以产出为导向），并指出雇主已经注意到毕业生批判性思维能力的下降。

rss · Simon Willison · 7月30日 18:25

**背景**: 布鲁斯·施奈尔是著名的安全技术专家和作家。写作作业传统上用于教育中教授论证和分析，但随着生成式 AI 的兴起，学生现在可以在不参与底层思考过程的情况下生成文本。

**标签**: `#AI`, `#education`, `#critical thinking`, `#writing`

---

<a id="item-8"></a>
## [闲置 GPU：AI 领域的新型停飞飞机](https://huggingface.co/blog/Dharma-AI/gpu-management) ⭐️ 7.0/10

Dharma AI 的一篇博客文章将闲置 GPU 比作停飞飞机，指出 AI 工作负载中 GPU 利用率低下带来的巨大浪费和成本，并提供了优化 GPU 管理的策略。 随着 GPU 成本飙升，闲置 GPU 对运行 AI 工作负载的组织来说是一笔巨大的财务浪费；提高利用率可以直接降低成本并加速 AI 开发周期。 研究表明，Kubernetes 环境中的平均 GPU 利用率约为 26.3%，意味着近 74%的 GPU 支出被浪费；根本原因通常是 CPU 中心的调度而非 GPU 感知的调度。

rss · Hugging Face Blog · 7月30日 15:09

**背景**: GPU 是用于并行计算的专用硬件，对于训练和运行 AI 模型至关重要。它们价格昂贵，每个通常价值数万美元。在许多 AI 流水线中，由于调度效率低下、数据瓶颈或工作负载不匹配，GPU 处于闲置状态，导致成本高昂且迭代速度变慢。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ai.plainenglish.io/your-50-000-gpu-is-sitting-idle-while-your-data-scientists-are-stuck-in-queue-45250e86fcd9">Your $50,000 GPU Is Sitting Idle While Your Data Scientists Are Stuck...</a></li>
<li><a href="https://www.nops.io/blog/gpu-sharing-automation/">GPU Sharing & Automation: Cut AI Infrastructure Costs in 2026</a></li>

</ul>
</details>

**标签**: `#GPU management`, `#resource optimization`, `#AI infrastructure`, `#cost efficiency`

---

<a id="item-9"></a>
## [欧盟招标建设七座人工智能超级工厂](https://news.google.com/rss/articles/CBMiS0FVX3lxTFBtNGIwZVpjR25IUXEzemlSaWVnTDQxeE5ZNmF5cHA3cVNyWDBOd0JMcDh3ajdtODJ0RmdIWXFHZExkN09sQmt0Z2NXVdIBS0FVX3lxTFBtNGIwZVpjR25IUXEzemlSaWVnTDQxeE5ZNmF5cHA3cVNyWDBOd0JMcDh3ajdtODJ0RmdIWXFHZExkN09sQmt0Z2NXVQ?oc=5) ⭐️ 7.0/10

欧盟宣布招标建设七座人工智能超级工厂，旨在大幅提升该地区的 AI 计算能力。 这一举措标志着欧盟在 AI 基础设施上的重大战略投资，使其能够在全球 AI 开发和部署中竞争，并为初创企业和大型企业提供大规模计算资源。 这些超级工厂将在欧洲高性能计算联合体（EuroHPC JU）框架下建设，专注于处理超大型 AI 模型的完整生命周期。招标细节和时间表尚未完全公布。

google_news · Наша Ніва · 7月30日 17:29

**背景**: AI 超级工厂是先进的大型设施，旨在支持超大型 AI 模型的完整生命周期，从训练到部署。欧盟一直在投资高性能计算，以减少对非欧洲基础设施的依赖，并促进本地 AI 创新。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eurohpc-ju.europa.eu/ai-gigafactories_en">AI Gigafactories - The European High Performance Computing Joint...</a></li>

</ul>
</details>

**标签**: `#AI`, `#EU`, `#infrastructure`, `#policy`, `#gigafactories`

---

<a id="item-10"></a>
## [AI 模型 Raygun 重塑蛋白质大小并保持功能](https://news.google.com/rss/articles/CBMiVEFVX3lxTE14dFlXRDZNcE1pdDdVaVV1X2NuMHZQVnRsbHBVSHFrQ2w2Q0NUWVgySVh5RHhXbllsRTZ5ZERFUWNLNm1wbWdhLWlGM0FOYUZFUXVidQ?oc=5) ⭐️ 7.0/10

研究人员开发了一种名为 Raygun 的 AI 模型，可以缩小或放大天然蛋白质而不破坏其形状或功能。该工具使用基于概率的方法添加或删除氨基酸，从而有效改变蛋白质大小。 这一突破使得蛋白质的轻松编辑成为可能，可用于设计更稳定的酶或治疗性蛋白质。它可能加速蛋白质工程，并为生物技术和医学开辟新的可能性。 Raygun 由杜克大学生物统计学和生物信息学助理教授 Rohit Singh 博士领导的团队开发。该模型可以通过添加或删除氨基酸来修改现有蛋白质，本质上是在保持功能的同时“缩小”或“放大”它们。

google_news · 동아사이언스 · 7月30日 07:00

**背景**: 蛋白质是由氨基酸组成的大分子，在生物体中执行基本功能。传统的蛋白质工程通常需要大量的试错来改变蛋白质大小而不失去功能。像 Raygun 这样的 AI 模型可以预测哪些氨基酸可以添加或删除，同时保持蛋白质的结构和活性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nature.com/articles/d41586-026-02335-5?error=cookies_not_supported&code=3e2055a5-2f3f-4a56-a944-d94b46180fbd">This AI ‘ Raygun ’ can shrink and supersize proteins — opening the...</a></li>
<li><a href="https://www.linkedin.com/posts/duke-department-of-biostatistics-bioinformatics_honey-i-shrunk-the-proteins-activity-7321198253503307777-n8Qt">Raygun : AI tool for protein modification by Rohit Singh | LinkedIn</a></li>

</ul>
</details>

**标签**: `#AI`, `#protein engineering`, `#bioinformatics`, `#machine learning`

---

<a id="item-11"></a>
## [AI 对数据的渴求推动稀有图书市场繁荣](https://news.google.com/rss/articles/CBMi_gFBVV95cUxQanJfUUJPcWdhODNsWnA0M3RTTFNVRE1UWjJUTW9kbUNVeE1hZnNxbFhCNjRXY282VWNYWnViV0ttekF6X19GSDRRM3p2a3hodlFsNHFieFJVZkJFVUs3WVp3M2tyU2VvTlFSMkNvU19kN2lWMFV5NDlsREVUaWRfc1BkMHhrVDktMUFCMnZYdGh1dkRmUUFXRU4tR2psMmdrLTJsZVUzWWNSZWUwNjFrcG9Ha1NydFN2dFdXckFRelpxaTF2WlNKRzZYNW03bXE5RklaVG9VWnIyZ2NxUkczbnVYM041VUNiUGhKX0VqN19qNFB0MDJhZDVhUk45d9IB_gFBVV95cUxQanJfUUJPcWdhODNsWnA0M3RTTFNVRE1UWjJUTW9kbUNVeE1hZnNxbFhCNjRXY282VWNYWnViV0ttekF6X19GSDRRM3p2a3hodlFsNHFieFJVZkJFVUs3WVp3M2tyU2VvTlFSMkNvU19kN2lWMFV5NDlsREVUaWRfc1BkMHhrVDktMUFCMnZYdGh1dkRmUUFXRU4tR2psMmdrLTJsZVUzWWNSZWUwNjFrcG9Ha1NydFN2dFdXckFRelpxaTF2WlNKRzZYNW03bXE5RklaVG9VWnIyZ2NxUkczbnVYM041VUNiUGhKX0VqN19qNFB0MDJhZDVhUk45dw?oc=5) ⭐️ 7.0/10

AI 公司越来越多地购买稀有和二手书籍来训练模型，有时会切掉书脊进行扫描，然后销毁书籍，这推高了稀有图书市场的价格。 这一趋势引发了关于未经许可使用受版权保护作品进行 AI 训练的重大伦理和法律问题，并可能加速稀有文化藏品的枯竭。 报道称，AI 公司通过中间商秘密购买数百万本书以避免公众反弹，部分书籍在扫描后被销毁。来自精心编辑书籍的训练数据质量能提升 AI 模型的连贯性。

google_news · The Economic Times · 7月30日 14:04

**背景**: 像大型语言模型这样的 AI 模型需要大量高质量文本数据进行训练。传统上，数据从互联网抓取，但对版权和数据质量的担忧促使公司寻找替代来源，包括实体书籍。稀有图书因其独特且精心编辑的内容而特别有价值。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-companies-are-reportedly-shredding-millions-of-books-to-train-models-tech-giants-outsource-to-middlemen-to-secretly-buy-up-books-for-training-material">AI companies are reportedly shredding millions of books after using...</a></li>
<li><a href="https://www.tigerdroppings.com/rant/o-t-lounge/ai-companies-are-buying-rare-books-cutting-the-spine-off-to-scan-then-shredding-them/124288398/">AI companies are buying rare books , cutting the spine off to scan, then...</a></li>
<li><a href="https://digg.com/tech/nrq562ec">Bulk Book Orders Fuel Amazon Arbitrage Not AI Training · Digg</a></li>

</ul>
</details>

**社区讨论**: 在线讨论意见不一：一些人批评这种做法具有破坏性且不道德，而另一些人则认为这是 AI 进步的必要步骤。一种相反观点认为，某些批量购书实际上可能是为了亚马逊套利，而非 AI 训练。

**标签**: `#AI`, `#data sourcing`, `#ethics`, `#copyright`

---

<a id="item-12"></a>
## [Sarvam AI 计划构建万亿参数模型并推出 Vision Edge](https://news.google.com/rss/articles/CBMitAFBVV95cUxQNnplQllXY3UzUXJLdUZjZF9jSGNvWkNzQTlqbmt0WVJqa085RTRWQ0hsa1lDUlQycmJEY2F2YXNZQ2laQVFiLThvQ0JkbXZ5VTBFTTBGNjZjUVhzcnhPd0lxdkJOclp2SjNzb3ZZc3JvbVFlVlZDTF9RTEVMWjRhVjRHSXZKNDMtbWlpQ2dQYVZzLW1rY3BaaHF5d29FZ3FUdWhzOUFDSjRhMUY5aElRNmhKaGk?oc=5) ⭐️ 7.0/10

Sarvam AI 宣布计划构建一个万亿参数的 AI 模型，并商业发布了边缘 AI 产品 Vision Edge。 这标志着印度 AI 初创公司的重大规模升级，可能挑战全球大语言模型领导者，并推动主权 AI 能力的发展。 该万亿参数模型可能采用混合专家（MoE）架构，因为 Sarvam AI 现有模型基于 MoE。Vision Edge 专为设备端 AI 推理设计。

google_news · CXO Digitalpulse · 7月30日 09:53

**背景**: Sarvam AI 是一家印度初创公司，开发全栈生成式 AI 平台，专注于印度语言和主权控制。万亿参数模型是最大的 AI 模型之一，需要大量计算资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Sarvam_AI">Sarvam AI - Wikipedia</a></li>
<li><a href="https://www.sarvam.ai/">Sarvam | India's Full-Stack Sovereign AI Platform</a></li>

</ul>
</details>

**标签**: `#AI`, `#large language models`, `#Sarvam`, `#trillion-parameter`

---

<a id="item-13"></a>
## [研究发现 LLM 偏爱流行来源而非可靠来源](https://news.google.com/rss/articles/CBMiekFVX3lxTE05c2l2amtNUXhQV0JoSjlfNzQyeFV3SHZJUGtyTTlmZTdFRFRjelRnWXp5dFlZZzBwUV9QTEVTdWFPZWJtd1MweG5GdEJucEVDcWQ1YTREdkFMN21lTWV1Yy1UZldFaTNYdC1UQ1k0Y1l0blN2eGc4NzF3?oc=5) ⭐️ 7.0/10

包括 Ashkinaze 在内的研究人员的一项研究发现，大多数大型语言模型（LLM）在评估信息时，并未始终给予可靠来源比流行但可靠性较低来源更高的权重。 这一盲点削弱了 AI 生成信息的可信度，可能放大错误信息，并降低 LLM 在新闻摘要或事实核查等关键应用中的可靠性。 该研究检查了多个 LLM，发现它们通常优先考虑来源的流行度（如引用次数或社交媒体分享数）而非可靠性，这一缺陷在不同模型和提示中持续存在。

google_news · Tech Xplore · 7月30日 11:00

**背景**: 像 GPT-4 和 Claude 这样的大型语言模型（LLM）在大量互联网文本上训练，这些文本包含高质量和低质量的来源。在生成答案时，LLM 依赖训练数据中的模式，这可能导致它们偏爱频繁提及或广泛分享的信息，而非事实准确但不太流行的内容。这项研究揭示了 LLM 评估信息可信度时的系统性问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techxplore.com/news/2026-07-popular-reliable-sources-llms.html">Popular vs . reliable sources —a blind spot in how LLMs assess...</a></li>

</ul>
</details>

**标签**: `#LLMs`, `#AI reliability`, `#information assessment`, `#misinformation`

---
---
layout: default
title: "Horizon Summary: 2026-11-03 (ZH)"
date: 2026-11-03
lang: zh
---

> 从 49 条内容中筛选出 10 条重要资讯。

---

1. [OpenAI 构建 Pando：为 Codex 规模开发打造的 Git 兼容后端](#item-1) ⭐️ 8.0/10
2. [GPT-6 Astra 可原生读写神经网络权重](#item-2) ⭐️ 8.0/10
3. [vLLM v0.33.0rc3：升级 PyTorch 2.14、CUDA 13.0 并新增多款模型](#item-3) ⭐️ 7.0/10
4. [OpenAI 推出 LifeVal 基准，评估 AI 处理日常任务能力](#item-4) ⭐️ 7.0/10
5. [笔记本规模复现测试 Balestriero 与 LeCun 的“好视图”对齐主张](#item-5) ⭐️ 7.0/10
6. [LightMIS：面向边缘设备的 13.1 万参数医学图像分割模型](#item-6) ⭐️ 7.0/10
7. [研究发现谷歌 AI 搜索摘要中超过 10%的事实性陈述缺乏来源支持](#item-7) ⭐️ 7.0/10
8. [AI 系统可根据自然语言指令设计蛋白质](#item-8) ⭐️ 7.0/10
9. [VOLTA 信息窃取木马利用 Claude、Gemini 和 Kimi AI 按财务价值对受害者排序](#item-9) ⭐️ 7.0/10
10. [苹果与阿里巴巴 Qwen 合作，在中国推出 AI 功能](#item-10) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [OpenAI 构建 Pando：为 Codex 规模开发打造的 Git 兼容后端](https://openai.com/index/scaling-git-at-openai) ⭐️ 8.0/10

OpenAI 发布了一篇工程博客，详细介绍了 Pando——一个自定义的 Git 兼容后端，旨在处理其 Codex 编程智能体所支持的高并发开发工作流。Pando 的设计目标是突破标准 Git 的扩展性限制，以应对大量 AI 智能体并行操作时的版本控制需求。 随着 Codex 等 AI 编程智能体以机器速度生成提交和分支，传统 Git 基础设施可能成为大型工程组织的瓶颈。Pando 标志着 AI 厂商正在重新架构开发者工具以支持智能体驱动的软件开发，这一趋势可能影响版本控制系统的未来演进方向。 Pando 被描述为 Git 兼容，意味着它旨在保留现有的 Git 工作流和工具链，同时提供更具扩展性的后端。OpenAI 尚未披露具体的性能基准，也未说明 Pando 是否会开源或对外提供。

rss · OpenAI News · 11月2日 15:30

**背景**: Git 是全球软件团队广泛使用的分布式版本控制系统，但其设计初衷是支持人类节奏的协作，在面对超大仓库或极高提交量时可能力不从心。Codex 是 OpenAI 的 AI 编程智能体，可以并行运行多个智能体，并使用计算机和浏览器工具验证工作，这大幅提高了代码变更的频率。Pando 是 OpenAI 为跟上这种智能体驱动开发模式而构建的版本控制后端。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/scaling-git-at-openai/">Scaling Git at OpenAI | OpenAI</a></li>
<li><a href="https://openai.com/codex/">Codex | AI Coding Partner from OpenAI | OpenAI</a></li>
<li><a href="https://github.com/openai/codex">GitHub - openai / codex : Lightweight coding agent that runs in your...</a></li>

</ul>
</details>

**标签**: `#git`, `#developer-tools`, `#infrastructure`, `#version-control`, `#openai`

---

<a id="item-2"></a>
## [GPT-6 Astra 可原生读写神经网络权重](https://www.reddit.com/r/MachineLearning/comments/1xm89ef/sparks_of_weightspace_programming_llms_can/) ⭐️ 8.0/10

一篇新博客文章报告称，前沿大语言模型（尤其是 GPT-6 Astra）无需任何训练或梯度下降，即可原生读写神经网络权重，表现超越传统算法。该模型能从原始权重推断网络功能，并从零生成小型游戏网络，其表现击败了经过 1 亿步 PPO 训练的网络。 这一能力可能从根本上改变我们优化和解释神经网络的方式，使得直接编辑权重以调试或创建网络而无需训练成为可能。它暗示了一种新范式：大语言模型作为权重空间程序员，可能影响 AI 安全、模型编辑和自动化机器学习。 这种方法被称为权重空间编程，大语言模型读取原始权重张量，并根据自然语言规范修改它们，无需环境反馈。值得注意的是，据报道 GPT-6 Astra 仅编辑 Qwen3 权重的 0.016%即可实现行为改变，凸显了极高的稀疏性和精确性。

reddit · r/MachineLearning · /u/RobbinDeBank · 11月2日 20:18

**背景**: 神经网络权重是定义模型行为的学习参数，通常通过梯度下降等训练算法调整。PPO（近端策略优化）是一种流行的强化学习算法，用于训练智能体，包括大语言模型中的 RLHF。权重空间编程是一种新兴技术，语言模型直接推理并编辑这些权重，绕过传统训练循环。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://elsolitario.org/en/2026/11/02/mit-csail-astra-edits-0-016-of-qwen3-weights/">Weight-Space Programming: How Astra Edits Weights</a></li>
<li><a href="https://en.wikipedia.org/wiki/Proximal_policy_optimization">Proximal policy optimization - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-6">GPT-6 - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Reddit 帖子引发了惊讶和怀疑，评论者指出这种能力在未明确优化的模型中出现令人意外。一些人讨论了对可解释性和优化的影响，而另一些人则质疑结果的可重复性和普适性。

**标签**: `#LLM`, `#neural network weights`, `#interpretability`, `#optimization`, `#weight-space programming`

---

<a id="item-3"></a>
## [vLLM v0.33.0rc3：升级 PyTorch 2.14、CUDA 13.0 并新增多款模型](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3) ⭐️ 7.0/10

vLLM 发布了 v0.33.0rc3，这是一个包含 927 次提交、389 位贡献者参与的重大更新，新增了 Reflection Beam-1.0、Yandex AliceAI-Foundation-80B-A3B 等多款模型，升级至 PyTorch 2.14.0，放弃 CUDA 12.9 支持转而仅提供 CUDA 13.0，并引入了 ABI 稳定的 libtorch CUDA wheel。 此版本大幅扩展了模型支持并带来性能优化，包括投机解码改进以及在 NVIDIA 和 AMD 硬件上更快的解码速度，直接惠及大规模部署 LLM 的从业者。转向 CUDA 13.0 和 ABI 稳定的 wheel 也简化了依赖管理，并提升了与未来 PyTorch 版本的兼容性。 值得注意的技术变更包括移除 Medusa 和 MLP 投机器、弃用--mamba-cache-mode，以及新增/v1/decisions 端点和支持延迟分块的 token 嵌入。该版本还提供了用于多节点服务的 AWS EFA 镜像，并将默认 ROCm 镜像升级至 ROCm 10.0。

github · khluu · 11月2日 10:10

**背景**: vLLM 是一个高吞吐、内存高效的大语言模型推理和服务引擎，最初由加州大学伯克利分校开发，现已被广泛用于生产环境。它利用 PagedAttention 和连续批处理等技术来优化 GPU 利用率。此候选版本是 vLLM 快速发布周期的一部分，整合了最新的 PyTorch 和 CUDA 更新，以保持在推理性能的前沿。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm">vllm -project/ vllm : A high-throughput and memory-efficient inference ...</a></li>
<li><a href="https://github.com/vllm-project/vllm/issues/26946">[RFC]: Enable libtorch - ABI - stable vLLM cuda wheels · Issue #26946...</a></li>
<li><a href="https://aws.amazon.com/hpc/efa/">Elastic Fabric Adapter — Amazon Web Services</a></li>

</ul>
</details>

**标签**: `#vllm`, `#llm-inference`, `#pytorch`, `#cuda`, `#release`

---

<a id="item-4"></a>
## [OpenAI 推出 LifeVal 基准，评估 AI 处理日常任务能力](https://openai.com/index/lifeval) ⭐️ 7.0/10

OpenAI 推出了 LifeVal，这是一个新的基准测试，旨在衡量 AI 模型在帮助人们完成日常任务方面的表现，例如寻找托儿服务、管理财务和处理政府文书。 该基准通过关注实际现实世界的实用性而非技术能力，填补了现有评估的空白，可能影响 AI 模型在日常有用性方面的评估方式，并塑造未来模型开发的优先方向。 LifeVal 评估 AI 在托儿搜索、财务管理和政府文书等任务上的表现，但具体的评分方法和任务细节尚未广泛公开；它来自 OpenAI 这一可靠来源，但并非技术突破。

rss · OpenAI News · 11月2日 09:00

**背景**: AI 基准测试是用于比较模型在编码、推理或知识等特定能力上表现的标准化测试。现有大多数基准侧重于技术或学术任务，而 LifeVal 则针对普通用户关心的实际日常活动。这一转变反映了行业日益关注在原始能力之外衡量现实世界的实用性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/lifeval/">LifeVal | OpenAI</a></li>
<li><a href="https://benchlm.ai/benchmarks">AI Benchmarks : 706 LLM Evaluations Ranked (October... | BenchLM. ai</a></li>
<li><a href="https://livebench.ai/">A challenging, contamination-free long-horizon AI benchmark</a></li>

</ul>
</details>

**标签**: `#AI benchmark`, `#evaluation`, `#everyday tasks`, `#OpenAI`, `#AI utility`

---

<a id="item-5"></a>
## [笔记本规模复现测试 Balestriero 与 LeCun 的“好视图”对齐主张](https://www.reddit.com/r/MachineLearning/comments/1xlzoze/smallscale_check_of_good_views_beat_nexttoken/) ⭐️ 7.0/10

一位 Reddit 用户复现了 Balestriero 与 LeCun 在 2026 年提出的主张，即用“好视图”（每张图片多个描述）训练文本模型能比下一词预测更快地与图像模型对齐，该复现仅使用人类描述和 1100 万参数编码器。在 1 万张 COCO 图像上，好视图的互 10 近邻对齐得分为 0.320，差视图为 0.192，下一词预测为 0.148，尽管规模缩小但排序保持不变。 这项独立复现通过仅使用人类撰写的描述，解决了关键的方法学担忧——即图像描述生成器可能泄露信息，并提供了具体证据表明“好视图”优势即使在笔记本规模下也成立。它增强了柏拉图表示假说的可信度，并为多模态对齐的未来研究提供了可复现的基线。 实验使用冻结的 DINOv2-base 图像嵌入和一个 4 层、宽度 256 的文本编码器（1100 万参数），采用 VICReg 风格的防坍缩损失而非论文中的 SIGReg，训练 3000 步，批量大小 256。检索 R@1 显示差距较小（0.084 对 0.063 对 0.057），作者指出局限性包括规模（8000 张训练照片 vs. 论文的 720 亿）以及需要已知的描述分组。

reddit · r/MachineLearning · /u/Traditional_Frame763 · 11月2日 15:08

**背景**: Balestriero 和 LeCun 的 2026 年论文认为，分别训练的图像和语言模型会发展出相似的内部表示，并且用“好视图”（同一图像的多个描述）训练的文本 JEPA 比下一词预测使用少得多的样本就能与视觉模型对齐。DINOv2 是一种自监督视觉 Transformer，无需微调即可产生通用的视觉特征。VICReg 是一种正则化方法，通过对嵌入施加方差和协方差约束来防止表示坍缩。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://xenospectrum.com/en/jepa-platonic-representation-sample-efficiency/">LeCun's Team Aligns Image and Language Representations With ...</a></li>
<li><a href="https://aiweekly.co/alerts/lecun-and-balestriero-prove-platonic-representation-theorem-for-jepas">LeCun and Balestriero prove Platonic Representation Theorem ...</a></li>
<li><a href="https://dinov2.metademolab.com/">DINOv 2 by Meta AI</a></li>

</ul>
</details>

**标签**: `#representation-learning`, `#self-supervised-learning`, `#multimodal-alignment`, `#replication-study`, `#machine-learning-research`

---

<a id="item-6"></a>
## [LightMIS：面向边缘设备的 13.1 万参数医学图像分割模型](https://www.reddit.com/r/MachineLearning/comments/1xm8dbo/lightmis_ultralightweight_medical_image/) ⭐️ 7.0/10

LightMIS 是一个仅有 13.1 万参数的超轻量 2D 二值医学图像分割模型，在相同的 nnU-Net 协议下，其模态宏平均 Dice 和 IoU 与 nnWNet 相当，但参数量减少 98.14%，GFLOPs 减少 94.58%。在 Arm Mali-G52 MC2 边缘 GPU 上，完整模型运行速度约为 nnWNet 的 10.5 倍，且实现了 100%的 GPU 算子覆盖，无需 CPU 回退。 这表明精心的架构设计能够以极低的计算成本实现有竞争力的医学图像分割精度，使在移动 GPU 等低功耗边缘设备上实时部署成为可能。这有望惠及即时诊断、便携式超声以及其他资源受限、无法使用重型模型的临床场景。 LightMIS 直接聚合多尺度编码器特征，无需学习式的逐阶段解码器；研究在受控环境下使用 nnU-Net v2.3.1 从零训练了多种轻量和重量级架构，并在六个数据集和五种成像模态上进行了对比。源代码、检查点和复现细节均已公开。

reddit · r/MachineLearning · /u/OkLion2068 · 11月2日 20:22

**背景**: 医学图像分割为 MRI 或 CT 等扫描中的每个像素分配标签，通常采用 U-Net 等编码器-解码器架构。nnU-Net 是一个自配置框架，能针对新数据集自动调整预处理、架构和训练，是强有力的基线。nnWNet 是近期提出的混合 CNN-Transformer 架构，融合卷积和 Transformer 进行生物医学分割。Arm Mali-G52 等边缘 GPU 是低功耗移动图形处理器，旨在有限的芯片面积和能耗预算内高效运行机器学习。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/1809.10486">nnU-Net: Self-adapting Framework for U-Net-Based Medical ...</a></li>
<li><a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Zhou_nnWNet_Rethinking_the_Use_of_Transformers_in_Biomedical_Image_Segmentation_CVPR_2025_paper.pdf">nnWNet : Rethinking the Use of Transformers in Biomedical Image...</a></li>
<li><a href="https://www.arm.com/products/silicon-ip-multimedia/gpu/mali-g52">Mali-G52 | Boosting mobile visuals and AI – Arm®</a></li>

</ul>
</details>

**标签**: `#medical-imaging`, `#segmentation`, `#edge-computing`, `#model-efficiency`, `#deep-learning`

---

<a id="item-7"></a>
## [研究发现谷歌 AI 搜索摘要中超过 10%的事实性陈述缺乏来源支持](https://news.google.com/rss/articles/CBMipAFBVV95cUxQellEcldoMGlCaGVtTnBJWDgzWl9xaUVGRm9hY0x0ZEkxMHN2NVRSTlZTVmNFSTZTRDVKN0Vxc1hnSmdmZkRlZzJLZXdNNVRJOWJ4VkFyVkZhb2s5aGtYdEdBbTFJbWRrVWM1R2haejlkWFRENzNaWmdWRWN5WmVWUU9PTVotdENuUjJlVk9HNDFfOXR2N1dacVBVSWVxazJkQm5WVQ?oc=5) ⭐️ 7.0/10

一项新研究发现，谷歌 AI 生成的搜索摘要（AI Overviews）中超过 10%的事实性陈述并未得到其引用来源的支持。这一发现引发了人们对搜索结果中 AI 生成内容可靠性的担忧。 这很重要，因为谷歌的 AI Overviews 被广泛使用，可能影响公众认知，而缺乏支持的陈述会削弱人们对 AI 搜索以及更广泛的检索增强生成（RAG）系统的信任。它凸显了在 AI 生成的摘要中改进引用验证和事实准确性的必要性。 该研究专门检查了 AI Overviews——出现在谷歌搜索结果顶部的 AI 生成摘要——并发现相当一部分事实性陈述并未得到所引用网页的支持。这表明即使采用检索增强生成，生成的文本与其来源之间仍可能存在差距。

google_news · PsyPost · 11月2日 14:22

**背景**: 谷歌的 AI Overviews 是一项使用大型语言模型生成简洁摘要以回应搜索查询的功能，通常会引用来源。检索增强生成（RAG）是一种技术，模型检索相关文档并利用它们来支撑其输出，旨在提高准确性和可追溯性。然而，确保每个陈述都忠实得到引用来源的支持仍然是一个挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">Retrieval-augmented generation - Wikipedia</a></li>
<li><a href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/">Do people click on links in Google AI summaries ?</a></li>

</ul>
</details>

**标签**: `#AI search`, `#RAG`, `#factual accuracy`, `#Google`, `#AI reliability`

---

<a id="item-8"></a>
## [AI 系统可根据自然语言指令设计蛋白质](https://news.google.com/rss/articles/CBMipwFBVV95cUxPS1hheS1zX05XRFY2dG14X3pnN2d6c3VIV29FUE5qZjY4VmZfZndySy1LYjExZWF4ejlDUUgyTFJMbGszbzRtUmlQN2FjbHFRMFpyXzR6VjkzUkt0bm0xUW1fTVliUmhNN0k1N1gzSl9QcGY0MjlkV1FpMjJNU0dEM05oUnZ6Tlp0eXRvbGRkTWZqV3dlSDl0WlVJSk9jZzE2ZUl4T3l0TQ?oc=5) ⭐️ 7.0/10

研究人员开发出一种 AI 工具，用户只需用自然语言描述所需的蛋白质功能，系统即可自动生成候选蛋白质设计方案，无需具备专业的结构生物学和化学知识。据 SingularityHub 报道，该工作建立在近期的基础模型之上，例如在 17 亿条合成蛋白质序列上训练的 160 亿参数模型 Pinal，以及文本条件全原子结构生成模型 Prompteina。 这降低了蛋白质工程的门槛，使生物学家、临床医生甚至非专业人士能够用日常语言指定功能目标，而不必掌握复杂的设计软件。通过让生成式蛋白质设计惠及更广泛的研究群体，它有望加速药物发现、酶工程和合成生物学的发展。 该方法依赖蛋白质语言模型和文本条件生成模型，将自然语言描述映射为氨基酸序列或三维结构。然而，该新闻摘要缺乏关于验证率、实验成功率以及设计是否经过实验室测试的技术细节，因此其实际性能仍有待充分验证。

google_news · SingularityHub · 11月3日 00:19

**背景**: 蛋白质是由氨基酸组成的链，其三维结构决定其功能，而从零开始设计新蛋白质传统上需要深厚的结构生物学知识和专业软件。蛋白质语言模型在大量已知序列数据库上训练，学习其中的模式，从而能够生成具有所需特性的新序列。近期进展将这些模型与自然语言接口相结合，使用户能够以对话方式而非技术参数来指定设计目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://singularityhub.com/2026/11/02/scientists-can-now-ask-ai-to-design-proteins-using-plain-language/">Scientists Can Now Ask AI to Design Proteins Using Plain Language</a></li>
<li><a href="https://www.nature.com/articles/s41586-026-11205-z">Programmable design of functional proteins from natural language</a></li>
<li><a href="https://www.techtimes.com/articles/328972/20261014/plain-english-ai-produces-validated-drug-candidate-proteins-against-rare-disease-target.htm">Plain-English AI Produces Validated Drug-Candidate Proteins ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#protein design`, `#natural language processing`, `#biotechnology`, `#generative models`

---

<a id="item-9"></a>
## [VOLTA 信息窃取木马利用 Claude、Gemini 和 Kimi AI 按财务价值对受害者排序](https://news.google.com/rss/articles/CBMifEFVX3lxTE93OElTMGR4MzhRckpfc04xZkp1RmNBTkFpN0JVRDFjTmc1QXFZV3lxZDFIWG1jakRuNkEyb1ZNRzRTeGJvSkNVcndtQzVEY1pIWGt1ZjJIMkJzY0ZWVUF4RWgtQ3dCR190amVpRjZkYlJTcWVDQjgtWXFYb0Q?oc=5) ⭐️ 7.0/10

研究人员发现了一种名为 VOLTA-AUTODOXER（简称 VOLTA）的新型 Windows 信息窃取木马，它利用包括 Claude、Gemini 和 Kimi 在内的多个大语言模型，按变现价值对窃取的受害者数据进行排序，并通过 Telegram 发送 AI 生成的受害者评估报告。 这标志着以经济利益为动机的网络犯罪的一次进化，表明攻击者正在将大语言模型武器化，以优先锁定高价值目标并自动化受害者筛选，这可能提高凭据窃取和欺诈的效率与影响。 据 Cisco Talos 研究员 Ryan Fetterman 称，VOLTA 是一款成熟的信息窃取程序，收集数据的范围很广，并且它专门要求 AI 模型对其受害者进行排序；该恶意软件针对 Windows 系统，并通过 Telegram 外传评估结果。

google_news · The Hacker News · 11月2日 05:51

**背景**: 信息窃取木马是一种恶意软件，旨在从受感染设备中收集凭据、浏览器数据和财务信息。Claude、Gemini 和 Kimi 等大语言模型（LLM）是能够分析和排序数据的 AI 系统，其中 Kimi 是由中国公司 Moonshot AI 开发的聊天机器人和模型系列。VOLTA 使用多个 LLM，代表了 AI 融入网络犯罪攻击链的一种新方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/11/new-volta-infostealer-uses-claude.html">New VOLTA Infostealer Uses Claude, Gemini, and Kimi AI to ...</a></li>
<li><a href="https://www.wired.com/story/kernel-panic-volta-autodoxer-ai-infostealer-malware/">Spooky New Infostealer Malware Uses AI to ‘Autodox’ Victims | WIRED</a></li>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(AI)">Kimi (AI) - Wikipedia</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#malware`, `#LLM`, `#infostealer`, `#AI misuse`

---

<a id="item-10"></a>
## [苹果与阿里巴巴 Qwen 合作，在中国推出 AI 功能](https://news.google.com/rss/articles/CBMidEFVX3lxTE5vNkVvSHFNQVFhVWFsYjJvOXJpS1RUNWQ4djZQTUVnb295bEU2TXFwaF80WEpHd2p1YXdCaXBTc190eGZ2aFZRckV1SU9aZTF4Q1JkTHRBVnJnQnQ5Q21EUTJGLWk4R0NBVFFtc3ZhMFNwRElG?oc=5) ⭐️ 7.0/10

据报道，苹果已与阿里巴巴合作，将其 Qwen 大语言模型集成到面向中国大陆销售的设备的 Apple Intelligence 中。这标志着苹果在中国首次确认的 AI 合作伙伴关系，因为 ChatGPT 等外国 AI 服务在中国不可用。 这一合作对苹果在中国提供有竞争力的 AI 功能至关重要，中国是一个关键市场，华为和小米等本土竞争对手正在积极整合 AI。这也凸显了全球科技公司必须通过国内合作伙伴实现 AI 本地化，以遵守法规并获得服务。 集成将使用阿里巴巴的 Qwen 模型，该模型具备文本、图像、音频和视频的多模态能力。目前尚不清楚苹果是否会在中国采用多合作伙伴策略，类似于其在海外使用 OpenAI 的 ChatGPT。

google_news · Businesskorea · 11月2日 03:12

**背景**: Apple Intelligence 是苹果在其设备上推出的一套 AI 功能，最初仅在美国英语中可用，在欧盟和中国不可用。在中国，ChatGPT 等外国 AI 服务无法访问，促使苹果寻求本地合作伙伴。阿里巴巴的 Qwen 是由阿里云开发的一系列大语言模型，以其多模态能力和开源发布而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Apple_Intelligence">Apple Intelligence - Wikipedia</a></li>
<li><a href="https://www.theverge.com/news/611992/apple-intelligence-ai-china-alibaba-iphone">iPhone AI features will be powered by Alibaba in China | The Verge</a></li>
<li><a href="https://en.wikipedia.org/wiki/Qwen">Qwen - Wikipedia</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Alibaba`, `#Qwen`, `#AI`, `#China`

---
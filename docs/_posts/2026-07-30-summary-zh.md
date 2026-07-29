---
layout: default
title: "Horizon Summary: 2026-07-30 (ZH)"
date: 2026-07-30
lang: zh
---

> 从 55 条内容中筛选出 16 条重要资讯。

---

1. [OpenAI 发布 GPT-5.6：前沿智能与效率融合](#item-1) ⭐️ 9.0/10
2. [自复制提示注入蠕虫攻击微软 Word](#item-2) ⭐️ 8.0/10
3. [马修·格林：AI 或可增强后量子密码学](#item-3) ⭐️ 8.0/10
4. [两个 API 设置使 GPT-5.6 在 ARC-AGI-3 上的得分提高三倍](#item-4) ⭐️ 8.0/10
5. [OpenAI 向 10 万名研究人员免费提供 ChatGPT 访问](#item-5) ⭐️ 8.0/10
6. [通过 Vulkan 实现边缘设备上的供应商无关机器学习推理](#item-6) ⭐️ 8.0/10
7. [Moonshot AI 开源 2.8 万亿参数模型 Kimi K3](#item-7) ⭐️ 8.0/10
8. [DeepMind 解散 AlphaFold 团队，转向 Gemini](#item-8) ⭐️ 8.0/10
9. [ICLR 2027 截稿日期与 NeurIPS 2026 决策冲突](#item-9) ⭐️ 7.0/10
10. [NeurIPS 审稿人失联引发惩罚措施讨论](#item-10) ⭐️ 7.0/10
11. [NIST 启动基于盲测数据的 AI 模型评估计划](#item-11) ⭐️ 7.0/10
12. [杰富瑞警告：廉价中国 AI 或摧毁美国资本](#item-12) ⭐️ 7.0/10
13. [NVIDIA B300 GPU 引发行业热议](#item-13) ⭐️ 7.0/10
14. [Krafton 发布韩语语音 AI 基础模型，排名第一](#item-14) ⭐️ 7.0/10
15. [中国在开放 AI 领域领先，引发美国担忧](#item-15) ⭐️ 7.0/10
16. [中国 AI 崛起分裂硅谷](#item-16) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [OpenAI 发布 GPT-5.6：前沿智能与效率融合](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency) ⭐️ 9.0/10

OpenAI 宣布推出 GPT-5.6，这是一个新模型，在模型、推理和智能体工作流方面提升了 AI 效率，旨在以更低的成本提供更有用的智能。 这一公告标志着向高性价比 AI 的转变，使企业和开发者更容易获得先进智能。它可能加速 AI 在智能体工作流和推理密集型应用中的采用。 GPT-5.6 专注于三个方面的效率提升：模型架构、推理速度和智能体工作流集成。公告中未提供具体的性能指标或发布日期。

rss · OpenAI News · 7月29日 00:00

**背景**: GPT-5.6 是 OpenAI GPT 系列的最新版本，基于 GPT-4 和 GPT-5 构建。智能体工作流是指由 AI 驱动的流程，其中自主智能体在最少人工干预下做出决策并采取行动，这是 AI 发展的关键领域。推理效率对于降低实际 AI 应用中的计算成本和延迟至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ibm.com/think/topics/agentic-workflows">What are agentic workflows? - IBM</a></li>
<li><a href="https://www.linode.com/linode/en/documents/white-paper/ai-inference-efficiency.pdf">AI inference efficiency : Spend less and do more | Akamai</a></li>

</ul>
</details>

**标签**: `#AI`, `#OpenAI`, `#GPT-5.6`, `#efficiency`, `#machine learning`

---

<a id="item-2"></a>
## [自复制提示注入蠕虫攻击微软 Word](https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything) ⭐️ 8.0/10

研究人员 Håkon Måløy 发现了一种新的提示注入变体，可将微软 Word 中的 Copilot 转变为自复制蠕虫：文档中隐藏的指令会诱使 Copilot 执行并将它们传播到其他文档。 这是首个针对广泛使用的 AI 助手的自复制提示注入攻击演示，构成重大安全风险，因为它可以在用户不知情的情况下将恶意指令传播到整个组织。 该攻击使用隐藏的白底白字文本，Copilot 将其视为用户请求的一部分，然后将指令复制到新文档中实现自复制。微软在 144 天前已收到通知，但尚未发布完整的缓解措施。

rss · Simon Willison · 7月29日 18:43

**背景**: 提示注入是一种网络安全利用方式，恶意输入会导致 AI 模型产生意外行为。在此案例中，攻击者将指令嵌入文档，Copilot for Word 读取并执行这些指令，然后将其传播到其他文档，形成类似蠕虫的行为。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection_attack">Prompt injection attack</a></li>
<li><a href="https://thehackernews.com/2026/06/researchers-build-self-replicating-ai.html">Researchers Build Self-Replicating AI Worm That Operates ...</a></li>
<li><a href="https://www.sentinelone.com/cybersecurity-101/cybersecurity/ai-worms/">AI Worms Explained: Adaptive Malware Threats - SentinelOne</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者指出，虽然隐藏文本攻击已知，但自复制方面是新颖且令人担忧的。一些人质疑微软对 Copilot 的安全承诺是否足够，因为 144 天后仍未修复。

**标签**: `#prompt injection`, `#AI security`, `#Microsoft Copilot`, `#LLM attacks`, `#cybersecurity`

---

<a id="item-3"></a>
## [马修·格林：AI 或可增强后量子密码学](https://simonwillison.net/2026/Jul/29/matthew-green/#atom-everything) ⭐️ 8.0/10

密码学家马修·格林指出，当前向后量子密码学的过渡时期是 AI 推进密码分析的理想时机，这可能会增强对新算法的信心，而非削弱它们。 这一观点意义重大，因为它将 AI 在密码学中的角色从威胁重新定义为机遇，尤其是在 NIST 标准化 HAWK 等后量子方案之际。如果 AI 能够稳健地分析这些算法，将加速其采用并增强全球抵御量子攻击的能力。 格林引用了 Anthropic 最近的工作，其中 Claude 在 60 小时内改进了对 HAWK 的最佳已知攻击，使其密钥强度减半。他还提到了 Impagliazzo 的“Minicrypt”世界，其中存在单向函数但不存在公钥密码学。

rss · Simon Willison · 7月29日 18:18

**背景**: 后量子密码学旨在开发能够抵抗量子计算机的算法，因为量子计算机可能破解当前的 RSA 和椭圆曲线密码学。NIST 目前正在评估 HAWK 等候选方案，这是一种基于格的数字签名。AI 在密码分析方面日益增长的能力可能破解这些新方案，也可能帮助验证其安全性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://decrypt.co/374600/claude-mythos-cracked-post-quantum-cryptography">Claude Mythos Cracked Post - Quantum Cryptography That... - Decrypt</a></li>
<li><a href="https://www.resultsense.com/news/2026-07-29-claude-cryptographic-weaknesses-hawk-aes/">AI model weakens NIST post - quantum candidate in 60 hours</a></li>
<li><a href="https://fanpu.io/blog/2022/impagliazzos-five-worlds/">Impagliazzo 's Five Worlds , or The Computational... | Fan Pu Zeng</a></li>

</ul>
</details>

**标签**: `#cryptography`, `#post-quantum`, `#AI`, `#cryptanalysis`, `#security`

---

<a id="item-4"></a>
## [两个 API 设置使 GPT-5.6 在 ARC-AGI-3 上的得分提高三倍](https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores) ⭐️ 8.0/10

OpenAI 透露，启用两个 API 设置——保留推理（retaining reasoning）和启用压缩（compaction）——使 GPT-5.6 在 ARC-AGI-3 基准测试中的得分提高了三倍，同时提升了性能和效率。 这一突破表明，简单的配置更改就能在具有挑战性的基准测试中大幅提升 AI 推理能力，有望在不重新训练模型的情况下降低成本并实现更强大的智能体。 压缩设置将先前的推理和状态压缩为更少的 token，而保留推理则跨运行保留模型的思维链。两者结合使 GPT-5.6 的得分比默认设置高出三倍。

rss · OpenAI News · 7月29日 15:00

**背景**: ARC-AGI-3 是一个交互式基准测试，用于测试 AI 智能体在没有指令或明确目标的新颖回合制环境中的表现。压缩是一种技术，它将先前步骤中的关键上下文总结为紧凑、不透明的表示，在保留必要信息的同时减少 token 使用量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arcprize.org/arc-agi/3">ARC-AGI-3</a></li>
<li><a href="https://arcprize.org/blog/arc-agi-3-launch">Announcing ARC-AGI-3 - ARC Prize</a></li>
<li><a href="https://developers.openai.com/api/docs/guides/compaction">Compaction | OpenAI API</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#ARC-AGI-3`, `#GPT-5.6`, `#AI reasoning`, `#benchmark`

---

<a id="item-5"></a>
## [OpenAI 向 10 万名研究人员免费提供 ChatGPT 访问](https://openai.com/index/chatgpt-for-academic-researchers) ⭐️ 8.0/10

OpenAI 宣布将向 10 万名学术研究人员免费提供其最先进的 ChatGPT 模型访问权限，以加速科学发现。 这一举措可能通过为科学家提供强大的 AI 工具用于数据分析、文献综述和假设生成，显著加速各学科的研究，从而可能带来更快的突破。 该优惠包括访问 OpenAI 最先进的模型，如 GPT-4 和 GPT-4 Turbo，面向全球认可机构的科研人员。该计划旨在促进学术界的合作与创新。

rss · OpenAI News · 7月29日 10:00

**背景**: ChatGPT 是 OpenAI 开发的大型语言模型，能够生成类似人类的文本并协助完成各种任务。学术研究人员通常因成本或许可限制而无法使用最先进的 AI 工具，这限制了他们在工作中利用 AI 的能力。

**标签**: `#AI`, `#OpenAI`, `#research`, `#education`, `#scientific discovery`

---

<a id="item-6"></a>
## [通过 Vulkan 实现边缘设备上的供应商无关机器学习推理](https://www.reddit.com/r/MachineLearning/comments/1v9s4mz/vendoragnostic_ml_inference_on_production_edge/) ⭐️ 8.0/10

视频编辑工具 PostSlate 使用 ncnn 的 Vulkan 后端，在生产边缘设备上实现了供应商无关的机器学习推理，相比 ONNX CPU 获得了 10 倍加速，且无需特定供应商的运行时。 这种方法消除了对 CUDA 或 ROCm 等专有 GPU 运行时的依赖，使得跨多种硬件（NVIDIA、AMD、Intel、Apple Silicon）的高效设备端机器学习成为可能。它降低了部署复杂性，扩大了边缘 AI 应用的范围。 在 RTX 4070 上使用 fp16，ArcFace R50 运行时间为 3 毫秒（ONNX CPU 为 30 毫秒），SCRFD 人脸检测为 2.5 毫秒（ONNX CPU 为 25 毫秒）。模型大小也从 174 MB（ONNX fp32）减半至 87 MB（ncnn fp16）。

reddit · r/MachineLearning · /u/ppchaos · 7月29日 10:22

**背景**: ncnn 是一个针对移动和嵌入式平台优化的高性能神经网络推理框架，其 Vulkan 后端用于 GPU 加速。Vulkan 是一个跨平台的图形和计算 API，提供对 GPU 的直接控制，其驱动程序在现代设备上广泛可用，使其成为 GPU 计算的供应商无关选择。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Tencent/ncnn/wiki/FAQ-ncnn-vulkan">FAQ ncnn vulkan · Tencent/ncnn Wiki · GitHub</a></li>
<li><a href="https://ncnn.readthedocs.io/en/latest/how-to-build/how-to-build.html">how to build — ncnn documentation - Read the Docs</a></li>
<li><a href="https://aitechinspire.com/one-backend-to-rule-the-edge-vulkan-ncnn-for-vendor-agnostic-inference/">One Backend to Rule the Edge: Vulkan + ncnn for Vendor - Agnostic ...</a></li>

</ul>
</details>

**标签**: `#ML inference`, `#Vulkan`, `#edge computing`, `#ncnn`, `#vendor-agnostic`

---

<a id="item-7"></a>
## [Moonshot AI 开源 2.8 万亿参数模型 Kimi K3](https://news.google.com/rss/articles/CBMiQkFVX3lxTE1GWlFtQm9teGprNG5lTm5DVC1URUs0dGJUT3pMeVdvNnJySFh4WDk1TVFERFhOem5hWWFhbEFFZmtFd9IBQkFVX3lxTE1GWlFtQm9teGprNG5lTm5DVC1URUs0dGJUT3pMeVdvNnJySFh4WDk1TVFERFhOem5hWWFhbEFFZmtFdw?oc=5) ⭐️ 8.0/10

2026 年 7 月 16 日，Moonshot AI 发布了开源权重模型 Kimi K3，拥有 2.8 万亿参数，成为史上最大的开源模型。 这一里程碑将前沿规模的人工智能民主化，挑战美国巨头的专有模型，并推动更广泛的研究和应用开发。 Kimi K3 采用 Kimi Delta Attention (KDA) 和注意力残差机制，支持 100 万 token 的上下文窗口，并具备原生视觉理解能力。

google_news · VOI.ID · 7月29日 11:02

**背景**: 拥有万亿参数的大型语言模型需要巨大的计算资源，通常保持专有。开源权重模型允许开发者自由下载、微调和部署。在 Kimi K3 之前，最大的开源模型拥有 1 万亿参数。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://www.labellerr.com/blog/kimi-k3-world-first-open-2-8t-ai-model/">Kimi K3: World's First Open 2.8T Parameter AI Model</a></li>
<li><a href="https://blockonomi.com/moonshot-ai-unveils-kimi-k3-a-2-8-trillion-parameter-model-challenging-us-ai-giants/">Moonshot AI Unveils Kimi K3: A 2.8 Trillion-Parameter Model ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#open-source`, `#large language model`, `#Moonshot AI`

---

<a id="item-8"></a>
## [DeepMind 解散 AlphaFold 团队，转向 Gemini](https://news.google.com/rss/articles/CBMiekFVX3lxTE9FTFM2eU93XzNvbWJveVRBOHJsejF5am9NMFk0S2lLZENMT1UyVDNpU1ZOU3BOckVacWJqUDdZX0xMUGE1TnFIVnFCVG1wVGtnM3VnUVNwRFdWQ3JpME14U1pEWndrQ3Ixa1BEMGRPRlNFaHg1UjZkQmhB0gGOAUFVX3lxTE9UbzdJZlZwb05SRURPcnhzSXdMZkFfUkhlRDlHcnNjZHI0LXFYV2toRzlvSF9Cc0xoV2R6UFpOczR5dE9Ha0F2RmVHa1BnYVM0TmJtODg4UjZKNFNNdnhTQksyOTV0NFQzcHNVMjEyR1RYRDZydWpPMk43bE5iakk0RkdqNmcwbWJMM0ZCX3c?oc=5) ⭐️ 8.0/10

Google DeepMind 已解散曾获诺贝尔奖的 AlphaFold 团队，并将大部分员工重新分配至通用 AI 模型 Gemini 的开发。这标志着从专业科学 AI 向广泛的多模态 AI 系统的战略转向。 这一转变表明，即使是成功的领域专用 AI 项目也被降级，以支持大型通用模型。这可能会减缓 AI 驱动的药物发现和结构生物学的进展，同时加速生成式 AI 领域的竞争。 AlphaFold 2 获得了 2024 年诺贝尔化学奖，其数据库包含超过 2 亿个预测蛋白质结构。部分 AlphaFold 核心成员已跳槽至竞争对手 Anthropic。

google_news · Chosunbiz · 7月29日 11:07

**背景**: AlphaFold 是 DeepMind 开发的 AI 系统，能从氨基酸序列预测蛋白质三维结构，于 2020 年取得突破性精度。Gemini 是 Google 的大语言模型系列，可处理文本、图像、音频和视频。此次重组反映了 Google 将 AI 整合到其产品中的更广泛推动。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AlphaFold">AlphaFold</a></li>
<li><a href="https://en.wikipedia.org/wiki/Gemini_AI">Gemini AI</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepMind">DeepMind</a></li>

</ul>
</details>

**标签**: `#DeepMind`, `#AlphaFold`, `#Gemini`, `#AI`, `#research`

---

<a id="item-9"></a>
## [ICLR 2027 截稿日期与 NeurIPS 2026 决策冲突](https://www.reddit.com/r/MachineLearning/comments/1v9v4e7/iclr_2027_deadline_is_before_neurips_2026/) ⭐️ 7.0/10

ICLR 2027 将完整论文截稿日期定在 2026 年 9 月 16 日，比 NeurIPS 2026 的决策公布日期早 8 天，造成了日程冲突。 这种日程重叠可能使那些在 NeurIPS 被拒后可以改进的论文处于不利地位，迫使作者在不知道 NeurIPS 结果的情况下向 ICLR 投稿。 ICLR 2027 的截稿日期比 NeurIPS 2026 的决策早 8 天，意味着作者无法将 NeurIPS 评审的反馈纳入 ICLR 投稿中。

reddit · r/MachineLearning · /u/1414vo · 7月29日 12:43

**背景**: ICLR 和 NeurIPS 是顶级的机器学习会议，研究社区有重叠。作者经常向多个会议投稿，日程冲突可能影响投稿策略和公平性。

**社区讨论**: Reddit 帖子表达了对日程安排的不满，认为这可能损害那些在被拒后改进的论文。评论者可能讨论公平性和后勤问题。

**标签**: `#conference scheduling`, `#machine learning`, `#research community`, `#ICLR`, `#NeurIPS`

---

<a id="item-10"></a>
## [NeurIPS 审稿人失联引发惩罚措施讨论](https://www.reddit.com/r/MachineLearning/comments/1va5io6/neurips_reviewers_not_engaging_d/) ⭐️ 7.0/10

Reddit 上的一场讨论揭示了 NeurIPS 审稿人在 rebuttal 期间失联的持续问题，作者们寻求鼓励参与的策略，并提议对不参与的审稿人实施类似区域主席未按时提交元评审的惩罚措施。 审稿人失联会破坏同行评审流程，可能导致不公正的决定，并削弱对 NeurIPS 等顶级机器学习会议的信任。解决这一问题对于维护会议的质量和公信力至关重要。 原帖作者建议 NeurIPS 对不参与讨论的审稿人惩罚其自己的论文，这与现有政策类似——未按时提交元评审的区域主席将被扣分。讨论中还提到，在一个引用的例子中，四位审稿人中只有一位回复了。

reddit · r/MachineLearning · /u/grumpket · 7月29日 18:59

**背景**: NeurIPS 是机器学习领域的顶级会议，依赖大量志愿审稿人评估投稿。Rebuttal 期间允许作者回应评审意见，但审稿人失联——即不回复或不更新评分——已成为常见抱怨。2025 年，NeurIPS 引入了“评审扣留机制”并对缺失或低质量评审实施更严格的惩罚，以提高问责制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.neurips.cc/2025/05/02/responsible-reviewing-initiative-for-neurips-2025/">Responsible Reviewing Initiative for NeurIPS 2025 – NeurIPS Blog</a></li>
<li><a href="https://cspaper.org/topic/93/neurips-2025-detailed-policy-on-penalties-for-missing-reviews-including-official-ac-email-text">NeurIPS 2025: Detailed Policy on Penalties for Missing Reviews ...</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区表达了复杂情绪：一些人支持惩罚不参与的审稿人，而另一些人则担心会产生劝阻志愿者的意外后果。多位用户分享了个人被失联的经历，并提出了实用策略，例如在讨论帖中发布礼貌提醒。

**标签**: `#NeurIPS`, `#peer review`, `#conference culture`, `#ML community`

---

<a id="item-11"></a>
## [NIST 启动基于盲测数据的 AI 模型评估计划](https://news.google.com/rss/articles/CBMi0wFBVV95cUxPZ1lfQkRkMUlFZXU4aUphdmlReExfcHFVZE8tVUJnMzdtVU9BcG9uNGZQa2Z5Vlo3MXBMUzY1MElIM0xMS2tfU3lOWlZVTE9SQTluQWZjS3I4OVhPQW83NDNWMzVjUnF5NURGVVZxQ3puMGotNDlROWVaMlpWeUlabmk0ZnRUWEFlV1JYdERtejVMOHdjOHNtbDdoRGl0QXlzWlYxQXEzMHpzd2hSZWpPWkFjMDlIS1FBaDNIY090SlVRRGZQcnZKb2laQ28tdG4za0NN?oc=5) ⭐️ 7.0/10

美国国家标准与技术研究院（NIST）启动了人工智能技术评估（AITE）计划，该计划提供一个隔离的测试环境，用于在跨多种数据集、模态和领域的盲测数据上对 AI 模型性能进行基准测试。 该计划解决了对标准化、可复现的 AI 评估的迫切需求，通过减少过拟合和基准测试作弊来帮助建立对 AI 系统的信任。它将通过提供客观的性能指标，使研究人员、开发者和政策制定者受益。 AITE 计划由 NIST 技术测试与评估部门运营，提供一个隔离的测试环境，模型在未公开发布的任务上进行评估。这种方法旨在防止数据污染并确保公平比较。

google_news · PYMNTS.com · 7月29日 14:58

**背景**: AI 模型性能通常通过公共基准来测量，但模型可能会无意中记忆或过拟合这些数据集，导致分数虚高。盲测数据对模型开发者保密，能更真实地评估泛化能力。NIST 作为美国政府机构，在制定测量标准（包括 AI 标准）方面有着悠久历史。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nist.gov/ai-test-evaluation-validation-and-verification-tevv">AI test, evaluation, validation and verification (TEVV) | NIST</a></li>
<li><a href="https://ai-challenges.nist.gov/pub/22">NIST AI Technology Evaluation (AITE) Overview & Road Map ...</a></li>
<li><a href="https://www.ansi.org/standards-news/all-news/7-28-26-nist-launches-ai-technology-evaluation-program">NIST Launches AI Technology Evaluation Program - ansi.org</a></li>

</ul>
</details>

**标签**: `#AI`, `#benchmarking`, `#NIST`, `#evaluation`, `#standards`

---

<a id="item-12"></a>
## [杰富瑞警告：廉价中国 AI 或摧毁美国资本](https://news.google.com/rss/articles/CBMiwwFBVV95cUxOXzQtc1JwR0FyOFpwMUpVamlxcFg5THBtRXVlVjZmZnFfbFZMLXBfVkRQZVZrNkg3eUVORGhoQzVwWlBnWmtRNmcxVkQyeDFQeDU5alZXUzdCRU1lN3Z3cDBNWHJSNjV3ZFQ3NnNMcnMzRk5vSmdQNWdRZ243WUFaaHhVRlROU0RZNFhzUVIweUhmdVlLc1B2ZmtteTYtUGlhRTZPSDhJaExmSTVESXhUbGhfRkxtTmpBcUM0REQyRUlDOHfSAcYBQVVfeXFMTndleVBmU001WDRUNDBSNHFaODB6OUE5bmhiN1pEWG0ycWRvdjZ1bG5TcEp4azVzcEZGWmZYQTZ0M1NjVklaT0dRTmF6d3JOQ3dlMGczWFRWdXZiRG5ldHd3Qm9CRTRmdzJGcGhIeTJoZUhMQno3RGpTclpNdld2S2gxVXgwTmQzQ3JTeGRWMmc4ZGpJV1ZUM2pPb215Q1cxaU1BdU04VGZrY3JIeW42aVNCTUV0YW1VNVlhRUY4ZUhXTUJINWRB?oc=5) ⭐️ 7.0/10

投资银行杰富瑞警告称，更便宜的中国 AI 模型的出现可能导致美国市场出现“大规模资本破坏”，因为低成本替代品挑战了昂贵的美国 AI 公司的估值。 这一警告凸显了全球 AI 格局可能发生重大转变，成本效益高的中国模型可能颠覆美国科技巨头的主导地位，并引发投资者的重大财务损失。 领先投资银行杰富瑞认为，中国 AI 模型的快速发展和较低成本可能削弱美国 AI 公司的高估值，导致资本市场调整。

google_news · rediff.com · 7月29日 09:12

**背景**: AI 行业在美国获得了大量投资，OpenAI 和谷歌等公司估值很高。与此同时，百度、阿里巴巴等中国公司以较低成本开发了具有竞争力的 AI 模型，可能重塑市场格局。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jefferies_Group">Jefferies Group - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Jefferies_Financial_Group">Jefferies Financial Group - Wikipedia</a></li>
<li><a href="https://www.jefferies.com/">Jefferies | Global Investment Banking & Capital Markets</a></li>

</ul>
</details>

**标签**: `#AI`, `#economics`, `#China`, `#markets`

---

<a id="item-13"></a>
## [NVIDIA B300 GPU 引发行业热议](https://news.google.com/rss/articles/CBMijwFBVV95cUxOMS1GOE43aDBHamFxNWdaVmxPeWtwYThEVkQzNjY3Q2g3b3dDTVFHRzdhZ2pWN0hMRXBGeGRncnc1N2w4NG0wUXU4cnh0aW5vZ045Q3dtWU4yTHpjQkJ6UE5KUEttd21FUndCWTZwdzB5N25zNDltRG5xWUlXN3R2dmxoRUJzaWZhMGpVUGhOVQ?oc=5) ⭐️ 7.0/10

据 Nasscom 报道，NVIDIA 即将推出的基于 Blackwell Ultra 架构的 B300 GPU 在 AI 和计算领域引起了广泛关注。该 GPU 配备 144GB HBM3e 显存、20480 个着色单元，功耗达 1400W，理论性能高达 105.5 TFLOPS。 B300 GPU 预计将大幅加速大语言模型（LLM）的推理和训练，DGX B300 系统可提供 144 petaFLOPS 的推理性能。这使 NVIDIA 得以维持其在 AI 硬件领域的主导地位，并让企业能够像超大规模云服务商一样运营。 B300 GPU 是 DGX B300 系统的一部分，该系统包含八块 B300 GPU，总显存达 2.1TB，内存带宽为 64 TB/s。与之前的 Blackwell GPU 相比，其密集 FP4 Tensor Core FLOPS 提升 1.5 倍，注意力性能提升 2 倍。

google_news · Nasscom · 7月29日 04:28

**背景**: NVIDIA 的 GPU 系列（包括 Blackwell 架构）专为 AI 和高性能计算（HPC）设计。B300 是 B200 的继任者，属于 Blackwell Ultra 系列，面向企业级 AI 工作负载，如 LLM 训练和推理。Tensor Core 是专门加速深度学习常见矩阵运算的硬件单元。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.techpowerup.com/gpu-specs/b300.c4375">NVIDIA B300 Specs | TechPowerUp GPU Database</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/dgx-b300/">An AI Factory for AI Reasoning NVIDIA DGX B300</a></li>
<li><a href="https://cputronic.com/en/gpu/nvidia-b300">NVIDIA B300: Detailed Specifications and Benchmark Ratings ...</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#GPU`, `#hardware`, `#AI`

---

<a id="item-14"></a>
## [Krafton 发布韩语语音 AI 基础模型，排名第一](https://news.google.com/rss/articles/CBMinwFBVV95cUxPNGp3bW1MNkUtdVJVUmhaa3FFRGFZYUtPbF83Q0dkc1NKUmRrUloxQjBMaE9KSEF5eEtpTFZpXy1pdkQ4OVczSklCallsTHRBalBYZ2J5NXNMN25GWjA4M0VzZ0NoX01vWEhKcUpVZTBkOFFBcGVhYzBsYW9IeWlPVHhndUNiTTZCUG93ZnoyLTFGVmhqLXVHTU9GTnhDNU0?oc=5) ⭐️ 7.0/10

Krafton 宣布推出新的语音 AI 基础模型，该模型在韩语语音 AI 基准测试中排名第一，据首尔经济日报报道。 这标志着韩语语音 AI 的重大进步，可能改善韩语用户的语音助手、翻译和内容创作。同时也凸显了 Krafton 在游戏之外日益增长的 AI 能力。 该模型是专门为语音 AI 任务设计的基础模型，在韩语基准测试中表现优于其他模型。文章未披露具体的基准名称和分数。

google_news · Seoul Economic Daily · 7月29日 00:44

**背景**: 语音 AI 基础模型是在大量语音数据上训练的大型神经网络，用于理解和生成人类语音。韩语语音 AI 因其语音和语法结构而面临独特挑战。Krafton 以游戏《绝地求生》闻名，近年来正扩展至 AI 研究领域。

**标签**: `#AI`, `#Voice AI`, `#Korean Language`, `#Foundation Model`, `#Krafton`

---

<a id="item-15"></a>
## [中国在开放 AI 领域领先，引发美国担忧](https://news.google.com/rss/articles/CBMinwFBVV95cUxORTdfc05Ccmc4amh6REVPbTJyRzZzVW0xZ19vcDYyN2I1WGx5dEdVYm9Pb2dtMHRfSUZqWl94VEE3YmtDcTQwbXdwYTA4OTY0Z05VZWNJRXJJVGZ2VE8xTi05ZmFrX0Zla1g0SFVab0F0TGU2QnMySF9QRDBOTlF1V0EyemtzaHJ3VkFBN01qTms0VHcxQlMxR2lSRkxuUW8?oc=5) ⭐️ 7.0/10

中国在开放 AI 开发方面取得了显著进展，利用开源模型加速创新和部署，这引发了美国对失去技术领先地位的担忧。 这一发展重塑了全球 AI 格局，因为中国的开放 AI 战略可能绕过美国出口管制，挑战美国在 AI 领域的主导地位。它也凸显了开源技术的地缘政治影响。 中国的方法包括两个相互强化的循环：开放模型创新的数字循环，以及在制造业和机器人领域大规模部署的物理循环，生成真实世界数据以改进 AI。随着 DeepSeek 等中国模型在全球获得关注，美国担心失去优势。

google_news · fierce-network.com · 7月29日 15:03

**背景**: 开放 AI 指的是公开发布权重或源代码的 AI 模型，允许他人使用、修改和在此基础上构建。中国一直积极推广开放 AI 作为其工业战略的一部分，而美国历史上在专有 AI 领域领先，但现在面临来自可以绕过出口限制的开放模型的竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.uscc.gov/research/two-loops-how-chinas-open-ai-strategy-reinforces-its-industrial-dominance">Two Loops: How China’s Open AI Strategy Reinforces Its ...</a></li>
<li><a href="https://hai.stanford.edu/policy/beyond-deepseek-chinas-diverse-open-weight-ai-ecosystem-and-its-policy-implications">Beyond DeepSeek: China's Diverse Open-Weight AI Ecosystem and ...</a></li>
<li><a href="https://www.openpioneers.com/p/open-source-is-geopolitical-now">Open Source Is Geopolitical Now - by Jonathan Reimer</a></li>

</ul>
</details>

**标签**: `#AI`, `#open source`, `#geopolitics`, `#China`, `#technology competition`

---

<a id="item-16"></a>
## [中国 AI 崛起分裂硅谷](https://news.google.com/rss/articles/CBMigAFBVV95cUxPOHowOEs2TTlwMlFadEFwRFlIcHFBWExLdUxXbnVsZTNPTjk5SkRLQzlRZ1BiVWlaTXhnQkNNSjBTUVBmMXF6Y2I5WUcyM2tLYU4ybF9lX0tvbHZ4RWFyc1dxYk5MT2c2WXAtcTd2S3VNTmI1enNpYlgyano4VEJiVQ?oc=5) ⭐️ 7.0/10

ThinkChina 的一篇文章分析了中国在人工智能领域的快速进步如何导致硅谷内部在 AI 发展和监管方式上产生分歧。 这种分歧可能影响全球 AI 治理和竞争格局，波及科技公司、政策制定者以及国际关系。 文章强调了两种对立观点：硅谷一些人主张与中国合作，另一些人则推动更严格的管控以维持美国领先地位。

google_news · ThinkChina · 7月29日 09:36

**背景**: 中国通过《新一代人工智能发展规划》等国家支持举措成为 AI 领域的重要参与者。硅谷作为领先 AI 公司的聚集地，在是否与中国市场和技术合作、还是出于安全考虑遏制其崛起的问题上存在分歧。

**标签**: `#AI`, `#geopolitics`, `#China`, `#Silicon Valley`

---
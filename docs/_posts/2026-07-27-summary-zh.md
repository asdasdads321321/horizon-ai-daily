---
layout: default
title: "Horizon Summary: 2026-07-27 (ZH)"
date: 2026-07-27
lang: zh
---

> 从 50 条内容中筛选出 11 条重要资讯。

---

1. [揭秘 LLM 代币折扣转售的代理市场](#item-1) ⭐️ 8.0/10
2. [从头用 ARM64 汇编实现 YOLO26n 推理](#item-2) ⭐️ 8.0/10
3. [小型 4B 模型在瑞典医学问答中接近 o3 准确率](#item-3) ⭐️ 8.0/10
4. [LLM 在 IMO 2026 上对比：前沿模型近乎满分](#item-4) ⭐️ 8.0/10
5. [中国 AI 实验室在成本上挑战美国](#item-5) ⭐️ 8.0/10
6. [英伟达 CEO 宣布与 SK 集团达成 5000 亿美元合作](#item-6) ⭐️ 8.0/10
7. [Black Forest Labs 发布 FLUX 3 多模态模型](#item-7) ⭐️ 8.0/10
8. [为低资源语言适配大语言模型](#item-8) ⭐️ 7.0/10
9. [AI 聊天机器人可能助长生物武器开发，美国担忧](#item-9) ⭐️ 7.0/10
10. [中国 WAICO 联盟可能重塑全球 AI 治理](#item-10) ⭐️ 7.0/10
11. [韩国芯片巨头与美国科技公司达成 9500 亿美元供应协议](#item-11) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [揭秘 LLM 代币折扣转售的代理市场](https://simonwillison.net/2026/Jul/26/relay-market/#atom-everything) ⭐️ 8.0/10

Matt Lenhard 发布了一项调查，揭露了一个中国代理市场，该市场通过滥用免费试用、窃取凭证以及开源代理软件（如 one-api 和 new-api）来转售折扣 LLM 代币。 该市场为模型蒸馏和绕过地理限制提供了廉价访问 LLM 的途径，给 LLM 供应商和合法用户带来了财务和安全风险。 转售商使用开源 API 代理工具（如 one-api 和 new-api）来汇集和负载均衡多个凭证的请求，通过利用免费试用、未受保护的支持机器人、被盗信用卡或退款攻击来实现折扣。

rss · Simon Willison · 7月26日 19:30

**背景**: LLM API 通常按 token 计费，供应商会提供免费试用或积分来吸引用户。像 one-api 这样的开源代理软件允许用户管理多个 API 密钥并高效路由请求，但可能被滥用来聚合被盗或滥用的凭证，以折扣价转售。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://vectoral.com/blog/token-relay-market">An Inside Look at the Relay Market Powering Token Resellers ...</a></li>
<li><a href="https://github.com/songquanpeng/one-api/blob/main/README.en.md">one-api/README.en.md at main · songquanpeng/one-api</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的讨论强调了 LLM 供应商需要更好的 API 密钥上限和速率限制，一些评论者分享了他们自己端点被滥用的经历。

**标签**: `#LLM`, `#security`, `#fraud`, `#API`, `#AI economics`

---

<a id="item-2"></a>
## [从头用 ARM64 汇编实现 YOLO26n 推理](https://www.reddit.com/r/MachineLearning/comments/1v6w394/i_implemented_the_yolo26n_model_inference_from/) ⭐️ 8.0/10

一位开发者完全从头使用 ARM64 汇编和 C 语言在树莓派 4 上实现了 YOLO26n 目标检测模型的推理，没有依赖任何现有框架。 这项工作展示了对神经网络推理的底层深刻理解，并为边缘 AI 提供了实用的优化技术，可能有助于在资源受限设备上实现更高效的部署。 该实现包括 ARM NEON SIMD 优化、Winograd 卷积、优化的 GEMM 内核、缓存感知分块、自定义微内核、算子融合和注意力机制，但性能提升低于预期。

reddit · r/MachineLearning · /u/Forward_Confusion902 · 7月26日 06:43

**背景**: YOLO（You Only Look Once）是一个流行的实时目标检测模型系列。ARM64 汇编和 NEON SIMD 扩展允许对 CPU 指令进行细粒度控制以优化性能。Winograd 卷积降低了 CNN 中常见小卷积的算术复杂度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/topics/winograd-convolution">Winograd Convolution in CNNs</a></li>
<li><a href="https://www.linkedin.com/pulse/introduction-arm-neon-simd-optimization-vijay-panchal">Introduction to ARM Neon SIMD Optimization</a></li>
<li><a href="https://docs.ultralytics.com/guides/yolo-architecture">YOLO Architecture Explained | Ultralytics</a></li>

</ul>
</details>

**标签**: `#YOLO`, `#ARM64`, `#Edge AI`, `#Assembly`, `#Optimization`

---

<a id="item-3"></a>
## [小型 4B 模型在瑞典医学问答中接近 o3 准确率](https://www.reddit.com/r/MachineLearning/comments/1v71wds/openweight_4b_models_approach_o3level_medical/) ⭐️ 8.0/10

开源 4B 模型（包括 Qwen3.5-4B 和 Gemma4-E4B）在瑞典医学执照考试题（MedQA-SWE）上达到高达 87%的准确率，接近 o3 的 88%。这是通过后训练（SFT）和推理技术（如 S-GRPO 的早退干预）实现的。 这表明小型开源模型在专业任务上可以媲美大型专有模型，减少了对大规模计算的需求，并能在资源受限的医疗环境中部署。同时凸显了推理技术对瑞典语等低资源语言的有效性。 Qwen3.5-4B 零样本达到 77%，启用推理后达到 87%，而 MedGemma-1.5-4B 经 SFT 后达到 60%。S-GRPO 的早退干预通过在预定长度注入短语关闭思考轨迹，防止推理循环。有趣的是，Qwen3.5-4B 尽管提示为瑞典语，但推理过程使用英语。

reddit · r/MachineLearning · /u/AccomplishedCat4770 · 7月26日 11:58

**背景**: MedQA-SWE 是一个瑞典语临床多选题数据集，包含 3180 道医学执照考试题。Gemma 和 Qwen 等开源模型是公开可用的 LLM，可进行微调。链式思维等推理技术可提高准确率，但可能导致输出冗长或重复；早退方法可缓解此问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/google/medgemma-1.5-4b-it">google/medgemma-1.5-4b-it · Hugging Face</a></li>
<li><a href="https://arxiv.org/abs/2505.07686">[2505.07686] S-GRPO: Early Exit via Reinforcement Learning in Reasoning Models</a></li>
<li><a href="https://huggingface.co/datasets/nicher92/medqa-swe">nicher92/medqa-swe · Datasets at Hugging Face</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论称赞了实用见解以及使用早退控制推理长度的方法。一些评论者注意到英语推理对瑞典语任务的有效性令人惊讶，并对其他低资源语言的泛化性提出疑问。

**标签**: `#LLM`, `#medical QA`, `#open-weight models`, `#reasoning`, `#Swedish`

---

<a id="item-4"></a>
## [LLM 在 IMO 2026 上对比：前沿模型近乎满分](https://www.reddit.com/r/MachineLearning/comments/1v6wskz/we_compared_different_llms_on_imo_2026_r/) ⭐️ 8.0/10

一项针对新 IMO 2026 问题的 LLM 比较显示，sol 和 fable 等前沿模型获得了近乎满分的成绩，而 Sonnet 和 Opus 等其他模型在使用名为 AutoFyn 的自定义多智能体框架后性能显著提升。 该基准测试为 LLM 的数学推理能力提供了严格检验，表明前沿模型在奥赛问题上正接近人类水平，同时也凸显了框架工程对提升较弱模型性能的重要性。 评分由前沿模型执行，并由前 IMO 奖牌获得者手动验证；幻觉问题仍然存在，例如 Sonnet 在问题 3 上错误声称找到了解。最难的问题（P3）未被任何次前沿模型解决，即使运行了 20 小时。

reddit · r/MachineLearning · /u/pequalnp92 · 7月26日 07:21

**背景**: 国际数学奥林匹克（IMO）是一项面向高中生的著名竞赛，其问题因新颖且需要多步逻辑推理而被视为 AI 推理的强基准。框架（harness）是一种软件框架，用于编排 AI 代理与工具和记忆的交互，提升其完成复杂任务的能力。AutoFyn 是作者开发的可定制多智能体框架，用于增强 LLM 在此类任务上的表现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/RyanAlberts/best-of-Agent-Harnesses">GitHub - RyanAlberts/best-of-Agent-Harnesses: 🏆 Curated, ranked list of AI agent harnesses (100+) — plus an MCP server, llms.txt & JSON so agents can recommend them too. Rescored weekly.</a></li>
<li><a href="https://learn.microsoft.com/en-us/agent-framework/agents/harness">Agent Harnesses | Microsoft Learn</a></li>
<li><a href="https://benchlm.ai/benchmarks/imo2026">IMO 2026 Leaderboard & Scores — July 2026 | BenchLM.ai</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区称赞了严谨的方法论和对新基准的使用。一些评论者讨论了这对 AI 安全的影响以及前沿模型与开源模型之间仍存在的差距，另一些人则质疑结果对其他领域的泛化能力。

**标签**: `#LLM`, `#benchmark`, `#mathematical reasoning`, `#multi-agent`, `#AI evaluation`

---

<a id="item-5"></a>
## [中国 AI 实验室在成本上挑战美国](https://news.google.com/rss/articles/CBMikAFBVV95cUxQaEV5NHNvbGZGZjM0S2E4WVVLQXhWMU1zcVhnRTBWNVFQX1BOUFlxN3JGYTM3T0xuLXhPMHpQVlhNY1h0TFRkeXIyTGNuYVZXSUQwTk5ybUdLRjF4am5OdjFvY01tbk9ER3RrSDNRQ1VaSFJlLThLTS0zcFd4REpBSHdHRmxRRm4wUHduQ3NWSGw?oc=5) ⭐️ 8.0/10

据《财富》杂志报道，包括 Moonshot AI、智谱 AI（Z.AI）和 DeepSeek 在内的中国 AI 实验室正在与美国实验室竞争，并取得了显著的成本优势。 这种成本效率可能重塑全球 AI 格局，使先进 AI 更易获取，并可能改变美国主导的竞争态势。 DeepSeek 训练其 V3 模型仅花费 600 万美元，而 OpenAI 的 GPT-4 花费 1 亿美元，且其使用的计算能力约为 Meta Llama 3.1 的十分之一。

google_news · Fortune · 7月26日 21:00

**背景**: 尽管美国实施芯片出口限制，中国 AI 实验室仍在快速进步。DeepSeek 成立于 2023 年，采用混合专家模型等技术并使用性能较弱的芯片来降低成本。Moonshot AI 以其长上下文助手 Kimi 闻名，而智谱 AI 则开发了 ChatGLM 系列模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek</a></li>
<li><a href="https://chinaidb.com/companies/moonshot/">Moonshot AI — China AI Index</a></li>
<li><a href="https://www.turingpost.com/p/zhipu">Zhipu AI ( Z . ai ): China 's AI Unicorn Behind ChatGLM & GLM-4"</a></li>

</ul>
</details>

**标签**: `#AI`, `#China`, `#cost`, `#competition`, `#industry`

---

<a id="item-6"></a>
## [英伟达 CEO 宣布与 SK 集团达成 5000 亿美元合作](https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5UOGhLNzUzeE4wUHQtSzF0c2V0ejN0UjNOOGpkQVRFelozeGNsYnVqcUlqNTVlZDdIRGVaTEZGY3FVbjZvcXZkenhBQ2M5RDZWWFhEcmliVXF0a1YwZDYzdWgxZEt2cjg?oc=5) ⭐️ 8.0/10

英伟达 CEO 黄仁勋宣布与 SK 集团达成一项 5000 亿美元的合作伙伴关系，即将正式公布，涉及 AI 工厂和下一代内存。 这笔巨额投资标志着 AI 基础设施建设的重大升级，将巩固英伟达的供应链以及 SK 海力士在 AI 芯片高带宽内存领域的地位。 该合作包括 SK Telecom 建设一座 2 吉瓦的 AI 工厂，采用英伟达的 Vera Rubin DSX 平台，以及与 SK 海力士的长期 AI 内存合作。

google_news · thelec.net · 7月26日 02:31

**背景**: SK 集团是韩国第二大企业集团，旗下 SK 海力士是领先的内存芯片制造商，也是英伟达 AI 加速器所需 HBM（高带宽内存）的关键供应商。此次合作是在现有合作基础上的扩展，旨在满足激增的 AI 计算需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/SK_Group">SK Group - Wikipedia</a></li>
<li><a href="https://investor.nvidia.com/news/press-release-details/2026/SK-Group-and-NVIDIA-Expand-Strategic-Partnership-Across-AI-Factories-and-Next-Generation-Memory/default.aspx">NVIDIA Corporation - SK Group and NVIDIA Expand Strategic ...</a></li>
<li><a href="https://www.remio.ai/post/nvidia-and-sk-group-unveil-500-billion-ai-infrastructure-partnership">Nvidia and SK Group Unveil $500 Billion AI Infrastructure Partnership</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#SK Group`, `#AI`, `#semiconductors`, `#partnership`

---

<a id="item-7"></a>
## [Black Forest Labs 发布 FLUX 3 多模态模型](https://news.google.com/rss/articles/CBMi5wFBVV95cUxNNTAtMjNqQ3VSRDcwdUN6R2VfZHFSMEFCT1JlQUF1eWtPRmI5N1hGNC00c0Rrb0NIXzFRbDZ3cG1xUjUza29PQVpTenU3ZFRrNUZZYUxJdU8xdlB0UUl2bGhGNDU0clNPSWxMQ1J3d3FFdmJqTTR2bUdYVlpuMGNfRGoxVXhYa2hxaTdGTUtHRGs4UnFNSm1kUUxBeFN2SXlOdVhIRnhLSjluZFZjd0xQaGJqN2NfcVRzTlBZVkRCSlRfZnJ3SzUyM1FJR2ZRb0xCcXhMQl9XNkNKVHcyeDk3SDYwNWNnWlk?oc=5) ⭐️ 8.0/10

Black Forest Labs 发布了 FLUX 3，这是一个统一的多模态流模型，能够联合学习图像、视频、音频和机器人动作预测。该模型已提供早期访问，包括 FLUX 3 Video 和开放权重的“Dev”版本。 FLUX 3 代表了向通用多模态 AI 迈出的重要一步，可能实现更连贯的内容创作和机器人应用。其统一架构可能超越 Seedance 2.0、Gemini Omni 和 Grok Imagine 等专用模型。 FLUX 3 采用基于流的生成模型架构，直接建模似然并支持高效采样。“Dev”版本有 320 亿参数，而更小的“Klein”变体（4B 和 9B）预计稍后发布。

google_news · MarkTechPost · 7月26日 17:50

**背景**: 基于流的生成模型学习从简单分布到数据分布的可逆变换，从而实现精确的似然计算和高效采样。FLUX 3 将此方法扩展到多种模态，旨在成为视觉智能和机器人技术的骨干。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bfl.ai/blog/flux-3">FLUX 3 - Real World Models: Towards Multimodal Flow Models as the Backbone of Visual Intelligence. | Black Forest Labs</a></li>
<li><a href="https://www.latent.space/p/ainews-black-forest-labs-flux-3-multimodal">[AINews] Black Forest Labs FLUX 3 - Multimodal Flow Models that beat Seedance 2.0, Gemini Omni and Grok Imagine, and FLUX-mimic video-action robotics model</a></li>
<li><a href="https://www.reddit.com/r/StableDiffusion/comments/1v4gpka/flux_3_real_world_models_towards_multimodal_flow/">r/StableDiffusion on Reddit: FLUX 3 - Real World Models: Towards Multimodal Flow Models as the Backbone of Visual Intelligence.</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区对开放权重的多模态骨干用于内容创作和动作预测表示兴奋，但指出 32B 参数的“Dev”模型很重，他们期待像 FLUX.2 Klein 这样更小、更高效的版本。

**标签**: `#multimodal AI`, `#generative models`, `#robotics`, `#computer vision`, `#audio processing`

---

<a id="item-8"></a>
## [为低资源语言适配大语言模型](https://news.google.com/rss/articles/CBMifEFVX3lxTE44VmktaW9La0g2UVZrRTVBMHhIVTl4S1FEV3duSUROa2wxdldwV0ZuY3c5dXlHanBjTnd4aTU4eFZhdXpmak13V0lrRnlQaWk3VlY5V0RyMG5zNy1hcUloYmY3VDdDclQxMUVkbGVfNmJGSFNnS3ZzV293ckY?oc=5) ⭐️ 7.0/10

一篇题为《面向小语言的大语言模型》的文章探讨了将大语言模型应用于数字资源有限的语言所面临的挑战和方法。 这项工作解决了语言技术公平性的关键问题，因为大多数大语言模型以英语为中心，在低资源语言上表现不佳，限制了数百万使用者的访问。 该文章可能讨论了持续预训练、合成数据生成和分词器优化等技术，以降低低资源语言的分词器碎片率。

google_news · logos-pres.md · 7月26日 15:33

**背景**: 低资源语言缺乏大型标注数据集和计算资源，使得训练或微调大语言模型变得困难。大多数大语言模型在英语为主的数据上训练，导致分词器碎片率高——低资源语言中的一个单词被拆分成多个子词，增加了成本并降低了性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/neuralspace/challenges-in-using-nlp-for-low-resource-languages-and-how-neuralspace-solves-them-54a01356a71b">Challenges in using NLP for low-resource languages and how NeuralSpace solves them | by Felix Laumann, PhD | NeuralSpace | Medium</a></li>
<li><a href="https://arxiv.org/abs/2504.03931">NAACL2025 Tutorial: Adaptation of Large Language Models Toward Robust Multilingual Adaptation of LLMs for Low ... Efficient LLM Adaptation to Low-Resource Languages via Cross ... Adapting Multilingual LLMs to Low-Resource Languages using ... Adaptation of Large Language Models - raihanjoty.github.io LLMs for Low Resource Languages in Multilingual, Multimodal ... Fine-tuning large language models for domain adaptation ...</a></li>
<li><a href="https://ieeexplore.ieee.org/document/11458819">Efficient LLM Adaptation to Low-Resource Languages via Cross ...</a></li>

</ul>
</details>

**标签**: `#LLM`, `#low-resource languages`, `#NLP`, `#language models`

---

<a id="item-9"></a>
## [AI 聊天机器人可能助长生物武器开发，美国担忧](https://news.google.com/rss/articles/CBMiywFBVV95cUxPR18tVDlWckFQYkhHUUZUYWktcGFSa3J0SnNnYk5FREc4ZzMwV2RsMTNocUszeHp2S3Y3eW1VenhIOWFNcUNDZDZxNlZCOXFJWUNJNjNHb0ZTM2x4cVhuQy12M0RYbjd0YW5tend0SDByWTktOFRuanRmbTY0MllGUjVKUTA3aDNqOFdQcVhwZkM3bi1WNl9ySUNhQ09jSHJQNVVzV1YybDlJLS1NUWQ0anpHUHdHQkhBelhsZzhiaVp4YUttUm5pd1JuNA?oc=5) ⭐️ 7.0/10

《华尔街日报》报道称，AI 聊天机器人可能提供有关生物武器的线索，引发美国警觉。此前兰德公司的研究表明，基础 AI 模型能够引导用户完成开发生物武器的技术流程。 这凸显了关键的 AI 安全与生物安全风险，因为广泛可用的聊天机器人可能降低恶意行为者获取危险知识的门槛。它强调了迫切需要建立强大的防护措施和政策框架，以防止大型语言模型被滥用。 兰德公司研究检查了当代基础 AI 模型，发现它们能成功引导用户完成生物武器开发流程。OpenAI 已对 ChatGPT 进行了生物安全压力测试，并于 2023 年春季发布了系统卡以应对相关风险。

google_news · Agenzia Nova · 7月26日 08:07

**背景**: 像 ChatGPT 这样的 AI 聊天机器人是大型语言模型，训练数据包括大量科学文献。虽然它们有许多有益用途，但人们担心它们可能无意中提供制造有害生物制剂的指导。美国目前缺乏统一的联邦法律来监管 AI 模型的生物安全与生物安保。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.rand.org/pubs/perspectives/PEA3853-1.html">Contemporary Foundation AI Models Increase Biological Weapons ...</a></li>
<li><a href="https://www.nature.com/articles/d41586-026-01476-x">AI can design viruses, toxins and other bioweapons. How ...</a></li>
<li><a href="https://thebulletin.org/2024/09/apathy-and-hyperbole-cloud-the-real-risks-of-ai-bioweapons/">Apathy and hyperbole cloud the real risks of AI bioweapons</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#biosecurity`, `#LLM risks`, `#policy`

---

<a id="item-10"></a>
## [中国 WAICO 联盟可能重塑全球 AI 治理](https://news.google.com/rss/articles/CBMiqgFBVV95cUxPV2dNYW1uN0JieXUwQkM2RDl3cFl0XzdoQWp4SzZwcHp0MzdlY2JVNHhrSXIxb093TXVac0pVaGNBYmw3T0FReE9oME51MUt1aEpVUzVrTkZKdjRnRDJfbEEwREFiNVpsd3VBMkRtQ052Q3htNHBvVmtZVTV3ZWM0SkJBM2QtQWt5cENfNUU4NFhQNmo0RlNRdWlKbjZKT2dxeFVhNmdEVkZyQQ?oc=5) ⭐️ 7.0/10

中国正式成立了世界人工智能合作组织（WAICO），这是一个由 29 个国家组成的 AI 联盟，总部设在上海，是其更广泛的全球 AI 治理倡议（GAIGI）的一部分。 WAICO 代表了中国创建西方主导的 AI 治理框架替代方案的雄心，可能改变国际 AI 监管和标准制定中的力量平衡。 WAICO 于 2025 年正式成立，基于习近平主席 2023 年 10 月提出的全球 AI 治理倡议，重点关注基础设施、数据标准和可持续发展。

google_news · Modern Diplomacy · 7月26日 07:33

**背景**: 全球 AI 治理目前处于碎片化状态，西方国家（如欧盟 AI 法案、美国行政命令）和中国提出了相互竞争的框架。2023 年宣布的 GAIGI 倡导 AI 造福人类和'人类命运共同体'。WAICO 是这一愿景的组织体现，旨在让全球南方拥有更强的话语权。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/World_Artificial_Intelligence_Cooperation_Organization">World Artificial Intelligence Cooperation Organization - Wikipedia</a></li>
<li><a href="https://www.news18.com/world/china-global-ai-alliance-what-is-waico-news-ws-l-10219162.html">'Not A Solo Performance': China Launches Global AI Alliance As AI ...</a></li>
<li><a href="https://www.cigionline.org/articles/chinas-ai-governance-initiative-and-its-geopolitical-ambitions/">China’s AI Governance Initiative and Its Geopolitical Ambitions - Centre for International Governance Innovation</a></li>

</ul>
</details>

**标签**: `#AI governance`, `#China`, `#geopolitics`, `#WAICO`

---

<a id="item-11"></a>
## [韩国芯片巨头与美国科技公司达成 9500 亿美元供应协议](https://news.google.com/rss/articles/CBMiqwFBVV95cUxQaUhJaUxGMVZ4OWZTSGhQR0hYRTZmV1RyeWFpMkRDcVNlYklHOU16bnhFOER4RlZ5YWN0T1lia2NIbmF1RVY1aUFrVU9mTGF0ZjVzbmRsamhtZXN2azdLYkphUU9UVmk4UmRkMVFaMXJvdFZVVzJ2akFDUzJjUnY2NWlrdUxqQXlTdnVnRFNWYjltZFF6NWNxZ3lCY3c4aE92c0hlRldyZ2dVbjDSAasBQVVfeXFMUGlISWlMRjFWeDlmU0hoUEdIWEU2ZldUcnlhaTJEQ3FTZWJJRzlNem54RThEeEZWeWFjdE9ZYmtjSG5hdUVWNWlBa1VPZkxhdGY1c25kbGpobWVzdms3S2JKYVFPVFZpOFJkZDFRWjFyb3RWVVcydmpBQ1MyY1J2NjVpa3VMakF5U3Z1Z0RTVmI5bWRRejVjcWd5QmN3OGhPdnNIZUZXcmdnVW4w?oc=5) ⭐️ 7.0/10

包括三星和 SK 海力士在内的韩国半导体制造商已同意向美国科技公司供应芯片，交易总额约 9500 亿美元。 这笔巨额交易凸显了韩国芯片制造商在全球半导体供应链中的战略重要性，可能重塑美国科技公司对亚洲制造的依赖格局。 这些交易涵盖多种先进芯片，包括存储芯片和逻辑半导体，预计在未来几年内交付。具体公司和条款尚未披露。

google_news · Daily Sabah · 7月26日 07:57

**背景**: 韩国拥有全球最大的两家存储芯片制造商——三星电子和 SK 海力士。美国科技公司如苹果、亚马逊和谷歌严重依赖这些芯片用于其数据中心和消费设备。9500 亿美元的金额可能代表多年累计交易价值。

**标签**: `#semiconductors`, `#South Korea`, `#US tech`, `#supply chain`, `#industry news`

---
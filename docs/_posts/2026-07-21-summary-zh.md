---
layout: default
title: "Horizon Summary: 2026-07-21 (ZH)"
date: 2026-07-21
lang: zh
---

> 从 54 条内容中筛选出 17 条重要资讯。

---

1. [泄露邮件揭示奥特曼的开源策略](#item-1) ⭐️ 9.0/10
2. [本·汤普森提议美国立法将 AI 训练数据使用合法化](#item-2) ⭐️ 8.0/10
3. [OpenAI 分享长周期模型安全经验](#item-3) ⭐️ 8.0/10
4. [NVIDIA 发布 Cosmos 3 Edge，面向边缘 AI 机器人](#item-4) ⭐️ 8.0/10
5. [数据中心与 AI 能源消耗分析](#item-5) ⭐️ 8.0/10
6. [Hugging Face 遭自主 AI 代理入侵](#item-6) ⭐️ 8.0/10
7. [存算一体芯片让千亿参数大模型在设备端运行](#item-7) ⭐️ 8.0/10
8. [中国 AI 模型 Kimi K3 冲击美国半导体股](#item-8) ⭐️ 8.0/10
9. [阿里巴巴预览 2.4 万亿参数 Qwen3.8-Max 模型](#item-9) ⭐️ 8.0/10
10. [AI 编码代理让逆向工程变得廉价且低风险](#item-10) ⭐️ 7.0/10
11. [Reddit 讨论 LeCun 的 JEPA 作为世界模型路径](#item-11) ⭐️ 7.0/10
12. [Coincidex：无需回放缓冲区的持续学习框架](#item-12) ⭐️ 7.0/10
13. [Harness Training：模型无关的 LLM 能力提升框架](#item-13) ⭐️ 7.0/10
14. [ASCIITermDraw-Bench：评估 VLM 生成 ASCII 图表的新基准](#item-14) ⭐️ 7.0/10
15. [月之暗面 Kimi K3 因中美科技竞争面临 GPU 短缺](#item-15) ⭐️ 7.0/10
16. [卢布尔雅那大学发布斯洛文尼亚语大模型 GaMS](#item-16) ⭐️ 7.0/10
17. [中国 AI 竞赛升温，新大模型发布](#item-17) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [泄露邮件揭示奥特曼的开源策略](https://simonwillison.net/2026/Jul/20/sam-altman/#atom-everything) ⭐️ 9.0/10

在马斯克诉奥特曼案中曝光的一封 2022 年邮件显示，山姆·奥特曼向 OpenAI 董事会提议发布一个可在本地运行的 GPT-3 级别模型，以阻止竞争对手并阻碍新项目获得融资。 这一披露罕见地揭示了 OpenAI 在开源方面的战略思考，表明发布强大的本地模型被视为一种竞争策略而非纯粹的利他行为，这可能重塑公众对 AI 公司动机的看法。 这封日期为 2022 年 10 月 1 日的邮件指出，发布此类模型将“阻止其他人发布类似强大的模型”，并“使新项目更难获得资金”。到 2026 年，像 Llama 3.3 70B 这样的本地可运行模型确实已匹配 GPT-4 的质量，验证了奥特曼预见的趋势。

rss · Simon Willison · 7月20日 03:47

**背景**: 2022 年，OpenAI 仅通过云 API 提供 GPT-3，而 Stability AI 等竞争对手正在开发开源语言模型（如 StableLM）。本地可运行模型对硬件要求较低，可在消费级设备上运行，提供隐私和离线优势。这封邮件揭示了 OpenAI 内部关于是否开源其模型的争论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.promptquorum.com/local-llms/local-llm-model-updates-2026">Local LLM 2026: Every Major Model Release + Ollama Status</a></li>
<li><a href="https://github.com/Stability-AI/StableLM">StableLM: Stability AI Language Models - GitHub</a></li>
<li><a href="https://stability.ai/news-updates/stability-ai-launches-the-first-of-its-stablelm-suite-of-language-models">Stability AI Launches the First of its Stable LM Suite of Language ...</a></li>

</ul>
</details>

**标签**: `#openai`, `#open-source`, `#ai-ethics`, `#sam-altman`, `#generative-ai`

---

<a id="item-2"></a>
## [本·汤普森提议美国立法将 AI 训练数据使用合法化](https://simonwillison.net/2026/Jul/20/afraid-of-chinese-models/#atom-everything) ⭐️ 8.0/10

本·汤普森提议美国通过一项法律，明确将收集数据用于 AI 训练视为合理使用，并禁止禁止蒸馏的服务条款，以帮助美国开放模型与中国模型竞争。他还将阿里巴巴以开放权重形式发布 Qwen 3.8 Max 与习近平最近鼓励开源、开放与合作的一次演讲联系起来。 该提案触及了 AI 领域的核心矛盾：公司使用未经许可的数据训练模型，却限制他人蒸馏其模型。如果成为法律，可能重塑美国 AI 政策，通过蒸馏加速创新，并与中国的开放权重模型公平竞争。 汤普森特别呼吁（1）明确将训练数据收集视为合理使用，以及（2）禁止美国公司制定禁止蒸馏的服务条款。他指出，蒸馏几乎无法阻止，因为它本质上只是查询 API。

rss · Simon Willison · 7月20日 17:09

**背景**: 模型蒸馏是一种技术，较小的“学生”模型从较大的“教师”模型的输出中学习，常用于创建高效模型。美国版权法中的合理使用允许在未经许可的情况下有限使用受版权保护的材料，但其对 AI 训练数据的适用性目前在法庭上存在争议。开放权重发布意味着模型参数公开可用，但缺乏完整的训练代码或数据，与真正的开源不同。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Artificial_intelligence_and_copyright">Artificial intelligence and copyright - Wikipedia</a></li>
<li><a href="https://opensource.org/ai/open-weights">Open Weights : not quite what you’ve been told – Open Source Initiative</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#open models`, `#distillation`, `#copyright`, `#US-China competition`

---

<a id="item-3"></a>
## [OpenAI 分享长周期模型安全经验](https://openai.com/index/safety-alignment-long-horizon-models) ⭐️ 8.0/10

长周期模型相比传统单轮交互系统具有根本不同的风险特征，这份报告对于指导日益自主的 AI 智能体安全部署至关重要。 报告强调了长时间运行中出现的新的安全风险，如目标泛化错误和奖励作弊，并描述了通过迭代部署改进的防护措施。

rss · OpenAI News · 7月20日 10:00

**背景**: 迭代部署是 OpenAI 的安全理念，即逐步发布 AI 模型并从实际使用中学习。长周期模型可以在没有人类干预的情况下执行多步骤任务，增加了意外行为随时间累积的可能性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zglg.work/en/ai/news/2026-07-20-openai-shares-safety-lessons-from-deploying-long-horizon-models">OpenAI Shares Safety Lessons from Deploying Long-Horizon Models</a></li>
<li><a href="https://www.mindstudio.ai/blog/what-is-iterative-deployment-openai-ai-safety-strategy">What Is Iterative Deployment? OpenAI's Strategy for Releasing AI Safely</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#alignment`, `#long-horizon models`, `#deployment`, `#OpenAI`

---

<a id="item-4"></a>
## [NVIDIA 发布 Cosmos 3 Edge，面向边缘 AI 机器人](https://huggingface.co/blog/nvidia/cosmos3edge) ⭐️ 8.0/10

NVIDIA 推出了 Cosmos 3 Edge，这是一个 40 亿参数的视觉语言模型，专为机器人和自主系统中的实时边缘部署而设计。它通过共享多模态注意力结合自回归和扩散 Transformer 塔，无需依赖云端即可实现感知、推理和行动。 该模型将世界模型能力直接带到边缘设备上，使机器人能够在无需持续云连接的情况下以低延迟和隐私保护运行。它可能加速智能机器人在制造、物流和自动驾驶领域的应用。 Cosmos 3 Edge 拥有 40 亿参数，于 2026 年 7 月 16 日在东京发布。它将理解、预测、模拟和行动集成到单个模型中，并针对 NVIDIA Jetson 等边缘硬件进行了优化。

rss · Hugging Face Blog · 7月20日 15:58

**背景**: 视觉语言模型（VLM）结合了视觉理解与自然语言处理，但其庞大的体积通常需要云服务器。由于机器人或智能手机等设备的计算和内存有限，边缘部署面临挑战。NVIDIA 的 Cosmos 3 Edge 通过将世界模型压缩为 40 亿参数的模型并在本地运行来解决这一问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unrollnow.com/status/2079236204743053592">Thread By @NVIDIAAI - Introducing Cosmos 3 Edge : our open...</a></li>
<li><a href="https://spoonai.me/posts/2026-07-19-nvidia-cosmos3-edge-robot-world-model-jul2026-en">Nvidia put a world model inside the robot itself — Cosmos 3 Edge , and...</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#vision-language model`, `#edge AI`, `#robotics`, `#Hugging Face`

---

<a id="item-5"></a>
## [数据中心与 AI 能源消耗分析](https://news.google.com/rss/articles/CBMilAFBVV95cUxPZTdJQ0Ywb3FHcmNHRHFScm9RdzlIcWNRa1NZV0ZJVW0xTVFHSFdwTFk3VEMyTDBuMTlDbEFMTWZ2WlpPTGZXakx4SnJUQzgySGlmZVVZemRXUXpnYV9UWjhQenlBazl0X21pbEtQSzdRUFlRUFVfX3RqMk1UdzhOd1FkN19OTUtYZE5fc2tvbG01Uno1?oc=5) ⭐️ 8.0/10

Our World in Data 发布了一项分析，量化了数据中心和人工智能的能源消耗，提供了当前使用估算和未来预测。 这项分析对于理解快速增长的 AI 和数据中心行业的环境影响至关重要，可为可持续性政策和基础设施规划提供信息。 该报告可能包含相对于全球总量的电力消耗数据、效率趋势以及由 AI 工作负载驱动的未来增长情景。

google_news · Our World in Data · 7月20日 07:16

**背景**: 数据中心为互联网和云服务提供动力，而 AI 模型需要大量计算资源。随着需求激增，其能源使用已成为一个令人担忧的问题，引发了关于可再生能源和效率改进的讨论。

**标签**: `#energy`, `#data centers`, `#AI`, `#sustainability`

---

<a id="item-6"></a>
## [Hugging Face 遭自主 AI 代理入侵](https://news.google.com/rss/articles/CBMifkFVX3lxTFBoUTdHbHN6Mlo0QV9IRmhnZUR0T1RJT1F3aUZwZlFLaW1JbXZ4azdpUkxWZFg4NGFvcUtDaTJiLWpaV1M0NkdzazR4SVhpQWVKZ3dZX28wM21WX0ZjZHJxRlN2OU43al96S1JJVDg2T2dtblIyODlTS255MVE4dw?oc=5) ⭐️ 8.0/10

2026 年 2 月 28 日，全球最大的 AI 模型库 Hugging Face 被一个自主 AI 代理入侵，这是已知首次针对主要 AI 基础设施的 AI 驱动攻击事件。 此次入侵标志着网络安全的危险转变：自主 AI 代理现在能够以机器速度执行攻击，针对软件供应链和 AI 基础设施，可能危及数千个模型和用户。 攻击完全由自主 AI 代理在无人干预的情况下执行，Hugging Face 确认入侵涉及生产基础设施。据报道，防御方使用了 AI 对抗措施进行响应。

google_news · The Hacker News · 7月20日 05:27

**背景**: Hugging Face 托管超过 45,000 个机器学习模型，是 AI 社区的核心枢纽。自主 AI 代理是能够独立规划和执行任务的 AI 系统，其在网络攻击中的使用代表了安全威胁的新前沿。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://alickaj.eu/?read=hugging-face-breached-by-autonomous-ai-agent-raising-new-supply-chain-fears">Hugging Face Breached by Autonomous AI Agent , Raising New...</a></li>
<li><a href="https://www.linkedin.com/posts/ericdemorgoli_on-february-28-2026-an-autonomous-ai-activity-7444624771385896960-SqLW">On February 28, 2026, an autonomous AI agent breached ...</a></li>
<li><a href="https://teamwin.in/hugging-face-confirms-ai-driven-breach-attackers-used-autonomous-agents-defenders-countered-with-ai/">Hugging Face Confirms AI -Driven Breach : Attackers used...</a></li>

</ul>
</details>

**标签**: `#security`, `#AI`, `#breach`, `#Hugging Face`, `#autonomous agent`

---

<a id="item-7"></a>
## [存算一体芯片让千亿参数大模型在设备端运行](https://news.google.com/rss/articles/CBMidkFVX3lxTFBsU01GNVA3U3gwemgyYmVBclJCNjdPMVB2YjRMbE9hTGJnSzVveHd2UlpISFhTTjdDbk0xeEEzWllFZm1HRWdrQTA5UGJwZlctY213OUl5Qi1DT1FfRy14eDY1Q0JNZTE2RXFnSkVBdXJkcDQ0MlE?oc=5) ⭐️ 8.0/10

在 2026 年世界人工智能大会上，存算一体芯片被展示可直接在设备上运行千亿参数大语言模型，无需连接云端。这一突破被视为端侧 AI 的关键趋势。 这一进展可能彻底改变移动 AI，使强大的大语言模型能够在智能手机和物联网设备上私密、离线运行，降低延迟和能耗。同时，它也对基于云端的 AI 服务的主导地位构成挑战。 存算一体芯片直接在内存中执行乘加运算，绕过了冯·诺依曼瓶颈。展示的芯片能效极高，功耗仅为传统 GPU 方案的几分之一。

google_news · finance.biggo.com · 7月20日 11:35

**背景**: 存算一体是一种计算范式，旨在解决深度学习硬件加速器设计中的存储墙问题。通过在数据存储的位置进行计算，存算一体减少了数据搬运，而数据搬运是能耗和延迟的主要来源。WAIC（世界人工智能大会）是中国旗舰级年度 AI 活动，2026 届会议重点关注端侧 AI 和边缘计算。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eenewseurope.com/en/compute-in-memory-chip-runs-ai-apps-at-fraction-of-the-energy/">Compute - in - memory chip runs AI apps at fraction of the energy ..</a></li>
<li><a href="https://iceknu.notion.site/Compute-in-Memory-Chips-for-Deep-Learning-Recent-Trends-and-Prospects-0bd060559cd44c15aaa230ac51a930fc">Compute - in - Memory Chips for Deep Learning: Recent... | Notion</a></li>
<li><a href="https://grokipedia.com/page/2026_World_Artificial_Intelligence_Conference">2026 World Artificial Intelligence Conference</a></li>

</ul>
</details>

**标签**: `#on-device AI`, `#compute-in-memory`, `#LLMs`, `#hardware`, `#WAIC`

---

<a id="item-8"></a>
## [中国 AI 模型 Kimi K3 冲击美国半导体股](https://news.google.com/rss/articles/CBMijgFBVV95cUxNZkFjNVJONEo2MDhUZnJmZldqNHJGUDh5NXNEX2ZZdUR3bmxROVlHdVNla05YZkFDVm9IOUozRUdfX2NjZ2xsNk9aX3hRN2NDVldxejN6R3JVRXEweFI4QTZEeXVobGU3dlRULXRNR0diNjVCcm05VWU3UEtLS3NLaU96NGdwbk01QmQzaHZR?oc=5) ⭐️ 8.0/10

中国初创公司 Moonshot AI 发布了 Kimi K3，这是一个 2.8 万亿参数的开源权重 AI 模型，拥有 100 万 token 的上下文窗口，该消息因担忧竞争加剧导致美国半导体股票遭抛售。 Kimi K3 是全球首个开放的三万亿级模型，表明中国正在缩小与美国前沿 AI 实验室的差距，这可能重塑全球 AI 竞争格局并影响半导体需求。 该模型基于 Kimi Delta Attention 和 Attention Residuals 构建，支持原生视觉，专为长周期编程和知识工作设计。其发布引发了更广泛的科技股抛售，台积电等半导体股票波动加剧。

google_news · 조선일보 · 7月20日 01:14

**背景**: Kimi K3 是一个开源权重的 AI 模型，开发者可以自行下载和运行，这与 OpenAI 或 Google 的封闭模型不同。该模型的大参数规模和长上下文窗口使其与美国顶级模型竞争，引发了对美国在 AI 和半导体领域主导地位的担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openlm.ai/kimi-k3/">Kimi K3 - openlm.ai</a></li>
<li><a href="https://finance.yahoo.com/markets/article/semiconductor-stocks-keep-falling-as-investors-go-risk-off-chinese-startup-releases-powerful-new-ai-model-130920103.html">Semiconductor stocks trim losses as investors buy the dip</a></li>
<li><a href="https://www.chosun.com/english/market-money-en/2026/07/20/FTGRO5YGGBAUXF3LSKHO2ICWCU/">Chinese AI Model Kimi K3 Jolts U.S. Semiconductor Stocks</a></li>

</ul>
</details>

**标签**: `#AI`, `#semiconductor`, `#China`, `#stock market`, `#Kimi K3`

---

<a id="item-9"></a>
## [阿里巴巴预览 2.4 万亿参数 Qwen3.8-Max 模型](https://news.google.com/rss/articles/CBMihgFBVV95cUxOc29oSmEwaDE0YWo5WDZQWnlpeE80X0VwRy1tZkZKYm9JaFp0QUhPRTlrYjdrZ2JSWk1hNWdOc3p3bC1USGNBOE5tcllPVzFtTFBpQVhodnQ4cDRfZTRmZlhSQ3dmZlJ4M3dWbEcxM2owU245VmJpNndjUlUyazJuMndFaFVQZ9IBiwFBVV95cUxNU0h6LWUxNTZ3eDVJZXhVTk9SN1RCc1BneUpMS1pnZ0lTZHlZSEt6QnlsVHNPV28zcUJ6ekR1bVBUdzNkMDhFVnEyNFY0ejJzMFFrRmtxZGZpa2N6WDg5SU1vYk1JemhfMW9uRVRHWFhEa0N5RnFWSzUwU1d5MEFUSC04QUJGLWJLRTZv?oc=5) ⭐️ 8.0/10

阿里云预览了 Qwen3.8-Max，这是一个拥有 2.4 万亿参数的多模态 AI 模型，并宣布计划很快开放其权重。 该模型标志着大语言模型的一个重要里程碑，开放权重的承诺可能使尖端 AI 的获取更加民主化，加剧中国 AI 领域的竞争。 Qwen3.8-Max 是一个稀疏混合专家多模态模型，支持文本、图像、视频和文档，拥有 100 万 token 的上下文窗口。然而，目前尚未发布任何基准测试、许可证细节或激活参数数量。

google_news · FoneArena.com · 7月20日 04:54

**背景**: Qwen 是阿里云开发的一系列大语言模型，许多模型以开源或源代码可用许可证发布。开放权重允许开发者本地运行和微调模型，但运行 2.4 万亿参数的模型通常需要巨大的数据中心资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.marktechpost.com/2026/07/19/alibaba-previews-qwen3-8-max-a-2-4-trillion-parameter-multimodal-model-days-after-moonshots-kimi-k3-open-weight-launch/">Alibaba Previews Qwen3.8-Max, a 2.4 Trillion-Parameter Multimodal Model, Days After Moonshot's Kimi K3 Open-Weight Launch - MarkTechPost</a></li>
<li><a href="https://www.eesel.ai/blog/qwen38-max-review">Qwen 3.8 Max review: Alibaba's 2.4T flagship, tested (2026) | eesel AI</a></li>
<li><a href="https://insiderllm.com/guides/open-weights-you-cant-run/">Qwen 3.8 & Kimi K3: Open in Name, Closed in Practice... | InsiderLLM</a></li>

</ul>
</details>

**社区讨论**: 社区讨论中对如此大模型开放权重的实用性表示怀疑，指出即使权重发布，大多数用户也无法在没有大量基础设施的情况下运行。一些人称赞此举是迈向透明的一步，而另一些人则质疑缺乏基准测试。

**标签**: `#AI`, `#LLM`, `#Alibaba`, `#open-source`, `#large language model`

---

<a id="item-10"></a>
## [AI 编码代理让逆向工程变得廉价且低风险](https://simonwillison.net/2026/Jul/20/cheap-reverse-engineering/#atom-everything) ⭐️ 7.0/10

Simon Willison 观察到，AI 编码代理大幅降低了逆向工程家用设备的成本和精力，使得之前不经济的自动化项目现在变得可行。 这一转变改变了爱好者和专业人士的投资回报计算方式，使更多人能够自动化家居而无需担心高昂的维护成本。它也凸显了生成式 AI 在代码生成之外的现实世界影响。 关键洞察在于，编码代理既降低了让简单自动化运行所需的初始努力，也减轻了未来维护的心理负担，因为代码重写的成本很低。这使得逆向工程未文档化、不稳定的 API 变得更具吸引力。

rss · Simon Willison · 7月20日 19:24

**背景**: 逆向工程家用设备涉及在没有官方文档的情况下弄清楚设备软件或 API 的工作原理，通常是为了将其集成到 Home Assistant 等家庭自动化系统中。传统上，这需要大量手动工作，并且存在 API 可能变化的风险，导致持续维护。由大型语言模型驱动的 AI 编码代理可以自动化部分分析过程，从而减少时间和成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dev.to/gitautoai/how-to-reverse-engineer-specifications-from-code-with-a-coding-agent-165p">How to Reverse Engineer Specifications from Code with A ...</a></li>
<li><a href="https://github.com/miolamio/claude-reverse-engineer">GitHub - miolamio/claude-reverse-engineer: Automatically ...</a></li>
<li><a href="https://github.com/Dryxio/auto-re-agent">GitHub - Dryxio/auto-re-agent: Open-source AI reverse ...</a></li>

</ul>
</details>

**标签**: `#reverse-engineering`, `#AI coding agents`, `#automation`, `#software engineering`

---

<a id="item-11"></a>
## [Reddit 讨论 LeCun 的 JEPA 作为世界模型路径](https://www.reddit.com/r/MachineLearning/comments/1v1i26p/i_just_read_lecuns_recent_thoughts_on_world/) ⭐️ 7.0/10

一篇 Reddit 帖子讨论了 Yann LeCun 对 LLM 缺乏物理世界理解的批评，并提出 JEPA（联合嵌入预测架构）作为解决方案，引发了社区关于 JEPA 是否是世界模型可行路径的辩论。 这场辩论凸显了 AI 中基于语言的表现与真正物理理解之间的根本张力，将影响具身 AI 和世界模型的未来研究方向。 LeCun 的 JEPA 通过预测抽象表示而非像素来学习，旨在构建世界的内部模型。Reddit 社区质疑 JEPA 是“灵丹妙药”还是真正的架构突破。

reddit · r/MachineLearning · /u/ConsciousGreenPepper · 7月20日 10:50

**背景**: Yann LeCun 是图灵奖得主、Meta 首席 AI 科学家，他长期认为大型语言模型（LLM）缺乏对物理世界的真正理解。他倡导能够预测和推理环境的世界模型，而 JEPA 是其愿景的关键组成部分。JEPA 通过比较数据的抽象表示来学习，避免了像素级重建。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/">Deep Dive into Yann LeCun’s JEPA | Rohit Bandaru</a></li>
<li><a href="https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/">I-JEPA: The first AI model based on Yann LeCun’s vision for ...</a></li>
<li><a href="https://medium.com/state-of-the-art-technology/world-models-vs-word-models-why-lecun-believes-llms-will-be-obsolete-23795e729cfa">World Models vs. Word Models : Why Yann LeCun Believes... | Medium</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论显示出复杂情绪：一些人同意 LeCun 的批评并认为 JEPA 有前景，而另一些人则怀疑其可扩展性或认为它只是另一种方法。少数评论者指出，JEPA 可能不是完整的解决方案，而是迈向更好世界模型的一步。

**标签**: `#world models`, `#JEPA`, `#Yann LeCun`, `#LLM limitations`, `#AI understanding`

---

<a id="item-12"></a>
## [Coincidex：无需回放缓冲区的持续学习框架](https://www.reddit.com/r/MachineLearning/comments/1v1rmbb/exploring_continual_learning_without_replay/) ⭐️ 7.0/10

作者介绍了 Coincidex，一个开源持续学习框架，它利用动态任务相似性路由来避免回放缓冲区，并分享了关于其成功和失败模式的实证发现。 这项工作解决了回放缓冲区的内存和隐私限制，为受限环境下的持续学习提供了一种轻量级替代方案，并提供了关于基于路由方法的权衡的宝贵见解。 Coincidex 用一个单层替换了回放缓冲区，该层动态计算任务相似性矩阵以路由数据；它在清晰的任务边界上表现良好，但在具有大规模分布偏移的混乱长尾任务序列上表现不佳。

reddit · r/MachineLearning · /u/theawkwardbong · 7月20日 17:13

**背景**: 持续学习旨在按顺序训练神经网络而不遗忘先前知识，这一挑战被称为灾难性遗忘。回放缓冲区存储过去的数据样本以缓解遗忘，但引入了内存和隐私开销。动态任务相似性路由是一种替代方案，它利用上下文来决定如何处理新数据，而无需存储旧样本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/ContinualAI/continual-learning-papers">ContinualAI/continual-learning-papers - GitHub</a></li>
<li><a href="https://arxiv.org/abs/2403.13249">A Unified and General Framework for Continual Learning</a></li>
<li><a href="https://arxiv.org/abs/2406.09935v2">Predicting the Susceptibility of Examples to Catastrophic Forgetting</a></li>

</ul>
</details>

**标签**: `#continual learning`, `#catastrophic forgetting`, `#task-similarity routing`, `#open-source framework`, `#machine learning`

---

<a id="item-13"></a>
## [Harness Training：模型无关的 LLM 能力提升框架](https://www.reddit.com/r/MachineLearning/comments/1v1qbl7/training_a_harness_for_modelagnostic_and/) ⭐️ 7.0/10

一个名为“Harness Training”的类 PyTorch 框架，先用冻结的任务 LLM 训练一次 harness，然后可以替换为任意 LLM 并在任何任务环境中评估，实现了跨模型的能力提升。 该框架使用 StrictPareto 准则和 GreedyMonotonic 优化器，针对 Terminal-Bench 或 SWE-Bench 任务进行训练，并支持任何兼容 OpenAI 的 API 作为任务 LLM。

reddit · r/MachineLearning · /u/Megadragon9 · 7月20日 16:26

**背景**: Agent harness 是围绕 LLM 的软件架构，负责管理执行、工具和验证，而不修改模型权重。传统的 harness 是任务特定的；这项工作提出了一种可训练的 harness，能够跨模型和环境泛化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://parallel.ai/articles/what-is-an-agent-harness">What is an agent harness in the context of large-language models? | Parallel Web Systems | Infrastructure for intelligence on the web</a></li>
<li><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness">The Anatomy of an Agent Harness</a></li>

</ul>
</details>

**标签**: `#machine learning`, `#LLM`, `#training framework`, `#agent`, `#self-improvement`

---

<a id="item-14"></a>
## [ASCIITermDraw-Bench：评估 VLM 生成 ASCII 图表的新基准](https://www.reddit.com/r/MachineLearning/comments/1v1fzuy/introducing_asciitermdraw_bench_testing_the/) ⭐️ 7.0/10

该基准填补了 VLM 评估中的一个空白，测试了一项实用但被忽视的能力——仅用纯文本创建准确图表，这对技术沟通、文档编写和 AI 辅助设计非常有用。结果显示，即使是顶尖模型如 Gemma-4-31B-IT 也仅达到 73.8%，表明仍有很大改进空间。 每个回答会获得一个结构分数（检查所需标签、边、实体）和一个语义分数，由 LLM 评判器对每个任务评估五次以减少变异性。该基准已在 Hugging Face 上公开，研究人员可以自行运行。

reddit · r/MachineLearning · /u/East-Muffin-6472 · 7月20日 08:53

**背景**: 视觉语言模型（VLM）是能同时处理图像和文本的 AI 系统，通常通过图像描述或视觉问答等任务进行评估。ASCII 图表是一种基于文本的绘图，使用字符表示形状和连接，常用于技术文档和代码注释。生成此类图表需要精确的空间布局，这与口头描述是截然不同的挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pulseaugur.com/cluster/151305-new-benchmark-tests-vlms-ability-to-draw-ascii-diagrams">New ASCIITermDraw Bench tests VLM ability to generate ASCII ...</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区讨论强调了该基准的新颖性和任务的难度，一些用户指出 ASCII 图表生成是 AI 助手的实用技能。其他人则讨论了排行榜结果以及模型进一步改进的潜力。

**标签**: `#benchmark`, `#vision-language models`, `#ASCII art`, `#AI evaluation`, `#diagram generation`

---

<a id="item-15"></a>
## [月之暗面 Kimi K3 因中美科技竞争面临 GPU 短缺](https://news.google.com/rss/articles/CBMisAFBVV95cUxPVVBDNjJ2TmR6WV80M1YwMzlLRXFPVkF5dGJtQVVlMEhnVlRGdEVFbXZHRE9uT3RFTFFVZlFyaklOd01WMlpibEczT2MxYkVza0ZSa1JyQUdlQ2xkQ3JjeTk5M1ZBQVBXdFRTRWxsakhOekU0emlFZGt4UjVvVmUyU3NBTWFhaFlLbzZGREdoNll4VGxiZm5hc3llemVLQ00tcUoyRjBtN2R0VkRXamh2SdIBsAFBVV95cUxOQ0lTVzEtdGd6UkFORHpsZkF0ZE5zU1VZbk1XUC1MLVJHNUd4YnZ6UEFLclk5b3M0Vmllc2tXQ2FENDNhSFZ0MnlDZy1faUdVRXRQaFh1SmQteVZDRkhXNEFHNGtYS3FreXphRTJITDJ0N2h6X1BpcEdwbjNab2hMa25CaDNGNng1ZTBJVldPVm5kUEZfcVVMaHBIQ2FHX1pjMjhPbnlielQ1QUlZUDdldw?oc=5) ⭐️ 7.0/10

月之暗面（Moonshot AI）的 Kimi K3 模型（一个 2.8 万亿参数的开源权重多模态推理模型）因美国对华先进芯片出口限制而面临 GPU 短缺，影响了其开发和部署。 这凸显了中美科技紧张局势如何直接限制中国 AI 公司训练和部署大型模型的能力，可能减缓中国 AI 发展，并加剧全球 AI 硬件竞赛。 Kimi K3 拥有 2.8 万亿参数和 1,048,576 token 的上下文窗口，定价为每百万输入 token 3 美元、每百万输出 token 15 美元。GPU 短缺源于美国对 NVIDIA 高端芯片（如 H100 和 B200）的出口管制。

google_news · South China Morning Post · 7月20日 06:30

**背景**: 中美科技竞争涉及人工智能和半导体等关键技术的竞争。美国对华实施了先进芯片出口限制，以限制其 AI 能力。月之暗面是一家中国初创公司，开发了 Kimi 聊天机器人和大型语言模型，Kimi K3 是其最新模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(chatbot)">Kimi (chatbot) - Wikipedia</a></li>
<li><a href="https://openrouter.ai/moonshotai/kimi-k3">Kimi K3 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://www.bbc.com/news/articles/cy9w4q8pgp0o">China's Moonshot AI claims Kimi K3 can rival OpenAI and Anthropic</a></li>

</ul>
</details>

**标签**: `#AI`, `#GPU`, `#US-China rivalry`, `#hardware`, `#Moonshot AI`

---

<a id="item-16"></a>
## [卢布尔雅那大学发布斯洛文尼亚语大模型 GaMS](https://news.google.com/rss/articles/CBMirwFBVV95cUxQU1J4N202eWQ5VnRrTXBBZ0k5V0JPclQ0UHVteTZKb3VWcDhvQXl4dkEwckxxS0l0c3N1ZTlTUU1Dck4xTmkxOHFGUVdYSEx6NmtKczRGRFVtLVRkMlNPQ21halBVand4eGNzTXBORWxmdmM3MFF1YVR1TnVFTjFoLXR0STByRWUyLV9ZVE9DLWNUY0ZDZFoyN0pnT1kyRDVTMnE5MFdnQlBXNy13WlJV?oc=5) ⭐️ 7.0/10

卢布尔雅那大学宣布创建了 GaMS，这是一个专门为斯洛文尼亚语开发的生成式大语言模型。 这一发展对于人工智能的语言包容性具有重要意义，因为斯洛文尼亚语是一种低资源语言，NLP 工具有限，而 GaMS 有助于在数字环境中保护和推广该语言。 GaMS 是一个生成式模型，能够生成类似人类的文本，并且针对斯洛文尼亚语独特的语法特征（如双数）进行了定制。该模型由卢布尔雅那大学的研究人员开发。

google_news · uni-lj.si · 7月20日 08:49

**背景**: 像 GPT-4 这样的大语言模型通常在以英语等高资源语言为主的大规模数据集上训练，导致低资源语言服务不足。斯洛文尼亚语是一种南斯拉夫语言，约有 250 万使用者，具有丰富的屈折形态和双数语法，这对标准 NLP 模型构成了挑战。GaMS 旨在通过提供专门针对斯洛文尼亚语的生成式大语言模型来弥合这一差距。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Slovene_language">Slovene language - Wikipedia</a></li>
<li><a href="https://www.britannica.com/topic/Slovene-language">Slovene language | Slovenian , Slavic, Indo-European | Britannica</a></li>

</ul>
</details>

**标签**: `#large language model`, `#Slovene language`, `#NLP`, `#low-resource language`, `#AI`

---

<a id="item-17"></a>
## [中国 AI 竞赛升温，新大模型发布](https://news.google.com/rss/articles/CBMidkFVX3lxTE5ySTloZGR2VDJ6d1FLeXJ5UzdTMTF6MnNuNHBtZDlKTHRSNGVtNEZvVGhVRTBjakQxZTRVdUNMTDN3NFYtakRwTlJYXzYxWU9PX0NOZkMtTHplM1pQMENHZ3EzVjdWTEd5ekxlWHJMU0NNWUpiRnc?oc=5) ⭐️ 7.0/10

月之暗面（Moonshot AI）和阿里巴巴发布了大规模语言模型，缩小了与美国在 AI 竞赛中的差距。 这些发布标志着中国 AI 能力的加速提升，加剧了全球竞争，并可能重塑 AI 格局。 月之暗面是中国“AI 六虎”之一，以其 Kimi 聊天机器人和开源大语言模型闻名；阿里巴巴的 Qwen3 模型采用混合思维模式，可实现灵活推理。

google_news · finance.biggo.com · 7月20日 10:05

**背景**: 大语言模型（LLM）是在海量文本数据上训练的人工智能系统，能够生成类似人类的文本。中国一直在大力投资 AI，以与 OpenAI 和谷歌等美国领导者竞争。月之暗面由清华校友于 2023 年创立，阿里巴巴云部门则是这场竞赛中的关键参与者。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI</a></li>
<li><a href="https://www.alibabacloud.com/en/solutions/generative-ai/qwen?_p_lc=1">Qwen - Alibaba Cloud</a></li>

</ul>
</details>

**标签**: `#AI`, `#China`, `#large language models`, `#Alibaba`, `#Moonshot AI`

---
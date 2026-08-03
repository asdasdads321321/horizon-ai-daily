---
layout: default
title: "Horizon Summary: 2026-08-04 (ZH)"
date: 2026-08-04
lang: zh
---

> 从 54 条内容中筛选出 13 条重要资讯。

---

1. [LLM 让开源自由变得切实可行](#item-1) ⭐️ 8.0/10
2. [OpenAI 的 GPT-Live 实现连续语音交互](#item-2) ⭐️ 8.0/10
3. [呼吁对无可复现代码的论文进行桌面拒稿](#item-3) ⭐️ 8.0/10
4. [深度解析视频：RL 与在线策略蒸馏在 LLM 训练中的应用](#item-4) ⭐️ 8.0/10
5. [特朗普下令美国政府与 Anthropic 断绝关系，称其构成供应链风险](#item-5) ⭐️ 8.0/10
6. [脑引导语言模型增强稳健推理](#item-6) ⭐️ 8.0/10
7. [大语言模型根本性缺陷使其极易遭受攻击](#item-7) ⭐️ 8.0/10
8. [DeepSeek V4：廉价 AI 模型震动硅谷](#item-8) ⭐️ 8.0/10
9. [阿里巴巴发布 Qwen3.8-Max，2.4 万亿参数 MoE 模型](#item-9) ⭐️ 8.0/10
10. [ARPL：为 ARM 上的 llama.cpp 提供运行时 ISA/拓扑检测](#item-10) ⭐️ 7.0/10
11. [理解物理现实的新型 AI 可能重塑世界](#item-11) ⭐️ 7.0/10
12. [美国禁止中国 AI 模型或致年损失 120 亿美元](#item-12) ⭐️ 7.0/10
13. [阿里巴巴与 MiniMax 开源 AI 模型以降低成本](#item-13) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [LLM 让开源自由变得切实可行](https://simonwillison.net/2026/Aug/3/devtools-must-be-open-source-exedev/#atom-everything) ⭐️ 8.0/10

Simon Willison 认为，LLM 降低了阅读和修改开源代码的门槛，使开源的原始梦想更加可行。他描述了一个工作流程：提示 Claude 克隆并构建 GitHub 仓库，将编译视为零时间投入的挑战。 这一转变可能显著增加积极参与开源代码的开发者数量，促进更深入的理解和贡献。它也凸显了 LLM 作为工具的新角色，使开发者能够更自由地探索和修改软件。 Willison 指出，他尚未习惯性地修改软件，但看到了一条一年前不存在的路径。他使用 Codex 或 Claude Code 等工具来检出和构建项目，并提示常规 Claude 聊天克隆仓库并解释其工作原理。

rss · Simon Willison · 8月3日 15:30

**背景**: 开源软件赋予用户检查和修改代码的自由，但实践中，时间投入对大多数人（甚至专家程序员）来说是一个障碍。LLM 可以通过辅助代码理解和构建过程来减少这种摩擦，使自由更加实用。Willison 是一位著名的开源开发者，以 Datasette 和 LLM 命令行工具等闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/simonw/llm">GitHub - simonw/llm: Access large language models from the ...</a></li>
<li><a href="https://simonwillison.net/">Simon Willison’s Weblog</a></li>
<li><a href="https://blog.ollien.com/posts/llm-friction/">LLMs Reduce Development Friction. Is That a Good Thing? - bloglien</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论包含多种观点，一些人同意 LLM 降低了代码探索的门槛，而另一些人则警告潜在的缺点，如过度依赖 AI 生成的解释或减少深入理解。一些评论者分享了他们自己利用 LLM 进行类似目的的工作流程和工具。

**标签**: `#open source`, `#LLMs`, `#developer tools`, `#software engineering`

---

<a id="item-2"></a>
## [OpenAI 的 GPT-Live 实现连续语音交互](https://openai.com/index/continuous-voice-interaction-with-gpt-live) ⭐️ 8.0/10

OpenAI 推出了 GPT-Live，这是一个支持与 AI 连续语音交互的实时系统，采用无轮次语音模型和低延迟架构。该系统在六个月内构建完成，旨在实现更快、更自然的对话。 这一进展显著提升了语音 AI 的响应速度和自然度，可能改变虚拟助手、客户服务和实时翻译等领域的用户体验。同时，它也展示了 OpenAI 在构建大规模低延迟系统方面的工程能力，为行业树立了新标杆。 该系统采用无轮次语音模型，无需显式轮转，并采用针对实时交互优化的低延迟架构。OpenAI 还重建了其 WebRTC 栈，以支持全球规模和流畅的对话轮转，相关细节在另一篇博文中有所描述。

rss · OpenAI News · 8月3日 07:00

**背景**: 传统的语音 AI 系统依赖于基于轮次的交互，用户必须等待系统处理完成才能说话，这导致延迟和不自然的停顿。GPT-Live 旨在通过实现连续、实时的语音交互来克服这一问题，类似于人类对话。低延迟架构和流式模型对于实现这一目标至关重要，因为它们允许即时处理和响应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/delivering-low-latency-voice-ai-at-scale/">How OpenAI delivers low-latency voice AI at scale | OpenAI</a></li>
<li><a href="https://www.infoq.com/news/2026/05/openai-voice-ai-scale/">OpenAI Outlines WebRTC Architecture for Low-Latency Voice AI at Scale - InfoQ</a></li>

</ul>
</details>

**标签**: `#voice AI`, `#real-time systems`, `#OpenAI`, `#speech recognition`, `#low-latency`

---

<a id="item-3"></a>
## [呼吁对无可复现代码的论文进行桌面拒稿](https://www.reddit.com/r/MachineLearning/comments/1vei12v/its_time_to_desk_reject_papers_that_dont_include/) ⭐️ 8.0/10

一位审稿人报告称，今年为机器学习顶会审稿的 12 篇论文中，只有 1 篇提供了完整代码，5 篇提供代码的论文中有 3 篇存在使结果无效的明显错误，因此提议对缺乏可复现代码的论文进行桌面拒稿。 该提议可能通过为作者发布代码创造强大激励，显著提高机器学习研究的可复现性，并可能影响会议政策，减少不可复现结果的出现。 审稿人观察到 12 篇论文中有 7 篇未提供代码，4 篇仅提供部分代码。他们认为在审稿过程中隐藏代码没有成本，而发布代码会增加因发现错误而被拒稿的风险，因此需要政策变革。

reddit · r/MachineLearning · /u/Flaky-Ambition5900 · 8月3日 16:17

**背景**: 桌面拒稿是指编辑在同行评审前直接拒绝论文，通常是因为不符合期刊政策。AUROC 是机器学习中二分类性能的常用指标。可复现性是机器学习领域日益关注的问题，许多论文缺乏代码或存在错误。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://manusights.com/blog/desk-rejection-reasons">Desk Rejection : 7 Reasons & Exactly What to Do Next</a></li>
<li><a href="https://glassboxmedicine.com/2019/02/23/measuring-performance-auc-auroc/">Measuring Performance: AUC ( AUROC ) – Glass Box Medicine</a></li>

</ul>
</details>

**标签**: `#reproducibility`, `#machine learning`, `#research policy`, `#peer review`

---

<a id="item-4"></a>
## [深度解析视频：RL 与在线策略蒸馏在 LLM 训练中的应用](https://www.reddit.com/r/MachineLearning/comments/1veat29/deep_dive_on_rl_and_opd_for_training_llms_d/) ⭐️ 8.0/10

John Olafenwa 发布了一个深度解析视频及配套材料，解释了用于训练大型语言模型（LLM）的强化学习（RL）和在线策略蒸馏（OPD）背后的数学原理与代码实现。内容将这些技术连接到预训练和监督微调，并引用了 Kimi、DeepSeek、Qwen 和 GLM 等前沿模型。 该资源对从业者很有价值，因为 RL 和在线策略蒸馏是训练最先进推理模型的核心，但其数学和实现细节往往不透明。通过连接理论与代码，它帮助社区更好地理解和应用这些技术，可能加速 LLM 训练的进展。 视频可在提供的 YouTube 链接上观看，作者活跃于 Reddit 讨论中，并愿意回答问题。内容涵盖 GRPO 风格算法和在线策略蒸馏，这些在 Kimi、DeepSeek、Qwen 和 GLM 的技术报告中均有提及。

reddit · r/MachineLearning · /u/johnolafenwa · 8月3日 11:30

**背景**: 强化学习（RL）是一种训练范式，模型通过与环境的交互和接收奖励来学习。组相对策略优化（GRPO）是一种 RL 优化器，相比 PPO 简化了优势估计并减少了内存使用，因此在训练推理模型时很受欢迎。在线策略蒸馏（OPD）结合了 RL 的在线相关性和蒸馏的密集奖励信号，其中教师模型使用学生模型自身的输出来指导其学习。这些技术对于 LLM 的后训练至关重要，可提升推理能力和对齐效果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cameronrwolfe.substack.com/p/grpo">Group Relative Policy Optimization (GRPO)</a></li>
<li><a href="https://thinkingmachines.ai/blog/on-policy-distillation/">On-Policy Distillation - Thinking Machines Lab</a></li>
<li><a href="https://arxiv.org/abs/2601.18734">[2601.18734] Self-Distilled Reasoner: On-Policy Self-Distillation for Large Language Models</a></li>

</ul>
</details>

**标签**: `#LLM`, `#Reinforcement Learning`, `#On-Policy Distillation`, `#GRPO`, `#Training`

---

<a id="item-5"></a>
## [特朗普下令美国政府与 Anthropic 断绝关系，称其构成供应链风险](https://news.google.com/rss/articles/CBMirAFBVV95cUxPazMyTEtZY2RWSjJJaC05T0Y2NDE4bG9NeF9od29uVmtubVYxQnVNOGFuY0hrNjM1bW0xRFVGUkJHbEJNSjJWVGc0YzA0TFZKcl9fRlM0YnVjcU55aXhDcTk1Nl9PYkhXWWZYUnVpMUx5XzNIVTBwR0VPUkxfMnltUEExbGE0alRYZXQtUzhJWDZrTTFqbm1EMW5LbTd1UGx0Z1JCejgxVU1BOWs30gGyAUFVX3lxTE45MVA4TGJmSW1LU1BrdW5MOFhVb1UwU0FDdTZwcnhiNUN5NlhHaW4wTjc5ZDFya2NRUEE0TjEtU21INHhORE5LRUxoeEhNYmo5YXBVcEtjWm1JOGdUaFVYMHV4RndneXVIZ2EwWEN0QjVzOHBRVFVJODR3MzJGSVlPM0RfZTJQWENuaGZHck1zMmZUd0tsOFc0bUpRRmdjUzFTYUFtZHJGUmoxel9oV2t2MXc?oc=5) ⭐️ 8.0/10

特朗普总统已下令所有联邦机构停止使用 Anthropic 的 AI 技术，并给予六个月的过渡期，五角大楼已正式将 Anthropic 列为供应链风险，立即生效。这是美国公司首次被贴上供应链风险的标签。 该指定源于 2025 年 7 月合同重新谈判失败，该合同使 Claude 成为首个获准用于机密网络的尖端 AI。Anthropic 拒绝放弃对大规模国内监控和全自主武器系统的限制，导致政府采取行动。

google_news · ABC News - Breaking News, Latest News and Videos · 8月3日 13:05

**背景**: Anthropic 是一家 AI 安全与研究公司，由前 OpenAI 成员于 2021 年创立，以其 Claude 大型语言模型而闻名。美国政府的供应链风险指定通常用于外国实体，因此对国内公司采取这一行动极为罕见，很可能引发法律挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.npr.org/2026/03/06/g-s1-112713/pentagon-labels-ai-company-anthropic-a-supply-chain-risk">Pentagon labels AI company Anthropic a supply chain risk 'effective immediately' : NPR</a></li>
<li><a href="https://www.bbc.com/news/articles/cn5g3z3xe65o">Anthropic officially designated a supply chain risk by Pentagon</a></li>
<li><a href="https://www.mayerbrown.com/en/insights/publications/2026/03/anthropic-supply-chain-risk-designation-takes-effect--latest-developments-and-next-steps-for-government-contractors">Anthropic Supply Chain Risk Designation Takes Effect — Latest Developments and Next Steps for Government Contractors | Insights | Mayer Brown</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#Anthropic`, `#government`, `#supply chain`, `#regulation`

---

<a id="item-6"></a>
## [脑引导语言模型增强稳健推理](https://news.google.com/rss/articles/CBMiX0FVX3lxTFBFOUlfTThjZUNreENQdDNRUmt3d2Y1cHkxSVJ2R0lYenZ2eXJ1ZDhSRl94eWx1VkprMWhqeGxUYVNja3lkZXE1N1ZpNGFpNXJGd1c1RUU2Qi1TQ1VpT3Zj?oc=5) ⭐️ 8.0/10

一篇新的《自然》论文提出了一种脑引导框架，通过沿模型与大脑表征联合结构诱导的方向来引导语言模型表征，并在推理时进行干预、训练时进行微调，以提升稳健推理能力。 这项工作超越了简单的表征对齐，有望使语言模型具备更稳健的推理和更好的泛化能力，连接人工智能与神经科学。它可能影响未来 AI/ML 社区的模型设计和训练范式。 该框架利用模型与大脑表征之间的部分对齐，在推理时进行干预，并在训练期间进行微调。论文可在 arXiv（2606.11893）上获取，并发表在《自然》杂志上，表明经过了严格的同行评审。

google_news · nature.com · 8月3日 10:43

**背景**: 表征对齐是一个框架，通过几何或功能相似性来量化不同系统在可比刺激下内部表征的对齐程度。大型语言模型通常通过预测下一个词元进行训练，这不一定能复现人脑使用的机制，因为人类的语言和推理依赖于部分不同的神经回路。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2606.11893">[2606.11893] Beyond representational alignment with brain ...</a></li>
<li><a href="https://arxiv.org/html/2606.11893v1">Beyond representational alignment with brain-guided language ...</a></li>
<li><a href="https://bioengineer.org/brain-guided-language-models-move-beyond-representational-alignment-for-robust-reasoning/">Brain-Guided Language Models Move Beyond Representational ...</a></li>

</ul>
</details>

**标签**: `#AI/ML`, `#Language Models`, `#Neuroscience`, `#Reasoning`

---

<a id="item-7"></a>
## [大语言模型根本性缺陷使其极易遭受攻击](https://news.google.com/rss/articles/CBMiywFBVV95cUxPaWw4WmkxczhIaVVOdUdOVjlWSEZ5bFpDNTFlQUhXaWtSWlFCdGx3MUdHck5nczFmU00zX3RmMUxEX1pfNVMxRjJtT2d3U2RocW54bjRVS3dBdFBrcjF2bkJBYWdzVW5wcnlOVy1ZYmxwajQxNG9oVmo3TC1ISlpnaG5IZU5VY0RqQ3F6am4yNllfS2RpQ2dWTWdsQ09CaDhOSVU3SkZWQ3RMdmxrc0pRS3h1QmZIXzgzekZmNEZzRC1xM2VxVEFkbFpMTQ?oc=5) ⭐️ 8.0/10

《麻省理工科技评论》报道称，大语言模型（LLM）的一个根本性缺陷使其极易受到对抗性攻击，这凸显了尽管 AI 安全取得进展，但依然存在的严峻安全挑战。 这一漏洞对现实世界中的 AI 部署构成重大风险，攻击者可能利用 LLM 生成有害内容、泄露敏感信息或操纵决策过程。这凸显了在 AI 系统中采取强健安全措施的紧迫性，影响开发者、企业和最终用户。 该缺陷源于 LLM 的自回归特性，即逐词预测，使其容易受到精心设计的提示词攻击，从而绕过安全过滤器。文章可能讨论了对抗性攻击的实例，如提示注入或越狱，并指出当前的防御措施不足以完全缓解这些风险。

google_news · The Pennsylvania State University · 8月3日 16:39

**背景**: 大语言模型（如 GPT-4）在海量文本数据上训练，通过预测下一个词来生成类似人类的文本。对 LLM 的对抗性攻击利用这一行为，通过精心构造输入使模型产生非预期输出，例如泄露隐藏指令或生成有害内容。这些攻击不同于传统机器学习攻击（针对训练数据或模型权重），而是聚焦于运行时行为，包括提示词、工具和记忆在生产系统中的交互方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/">Adversarial Attacks on LLMs | Lil'Log</a></li>
<li><a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/">OWASP Top 10 for Large Language Model ... | OWASP Foundation</a></li>
<li><a href="https://medium.com/@gaurvi.i.vishnoi/adversarial-attacks-on-llm-systems-a-practical-guide-to-threats-and-defenses-815687920260">Adversarial Attacks on LLM Systems: A Practical Guide to... | Medium</a></li>

</ul>
</details>

**标签**: `#LLM`, `#security`, `#vulnerability`, `#AI`, `#adversarial attacks`

---

<a id="item-8"></a>
## [DeepSeek V4：廉价 AI 模型震动硅谷](https://news.google.com/rss/articles/CBMiygFBVV95cUxQSW5vN0ppc1VxeTcxbVNnWFJOZ3o0cFBMRmh5X3F2d3RIMnozcUUyQ3Zkay0wVktWWkI3cXFkTnBXYzNfRHNac2dqelNsN0tvTVg2ZVZVanVUdDJJaUhNaG1Wdzdib0xaUzVqRWJXNjlLTnJOeW95NzZMNS1IN2JqVUVLTV9EbVdvdFBrY0tJeEZGQTRwWjI0V3pNMEJxS3V1aVF1Skp3QTBESGZ3UGJSVTFPbUtTYnZDMGs2dmVFX09tMTN3YUFfc0xR0gHKAUFVX3lxTE84bW5aS283anptQmxMYTdMVmpndGhqT1VYVDJzYkw4ay0tSGJuNHFaNXVUcHVRcGQtWGllR1Z0eGlUanNmcU91U1pnbzY3Ukh0R1ZqZFd0LWhxYmJ6OEc5RHFNMXlPZFJqcXFweXlGMmhwZTNyX0NSaG5nWGl2Z1gxTEFZN0kwOU1PcHBtR0tFa1QxSXVWM0tCbGcxSERyYW50dktjQUdlRERiOURINXNBSGNaR3lLN0dYSTlpVnE3cTJXTlFGVHJOc1E?oc=5) ⭐️ 8.0/10

中国的 DeepSeek 发布了其 V4 AI 模型系列的预览版，包括 DeepSeek-V4-Pro 和 DeepSeek-V4-Flash，这些模型比同类模型便宜得多。此次发布正在测试新的“AI harness”技术，该技术为模型提供工具和结构，使其能够作为代理执行任务。 这一进展可能通过挑战硅谷公司昂贵专有模型的主导地位，从而颠覆 AI 行业。DeepSeek V4 的低成本和高性能可能加速 AI 的采用并加剧竞争，可能重塑全球 AI 格局。 DeepSeek-V4-Pro 拥有 1.6 万亿参数，激活 490 亿；DeepSeek-V4-Flash 拥有 2840 亿参数，激活 130 亿，两者均支持 100 万 token 的上下文长度。这些模型采用混合专家（MoE）架构，并已在网页、应用和 API 上提供。

google_news · South China Morning Post · 8月3日 11:00

**背景**: DeepSeek 是一家以开发大型语言模型闻名的中国 AI 公司。“AI harness”指的是围绕 AI 模型的软件基础设施，提供工具和结构，使其成为功能性的代理。这种方法顺应了让 AI 模型更实用、更具成本效益的广泛趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>
<li><a href="https://deepseek.com/en/index.html">DeepSeek</a></li>
<li><a href="https://fe-static.deepseek.com/chat/transparency/deepseek-V4-model-card-EN.pdf">DeepSeek V4 Technical Documentation</a></li>

</ul>
</details>

**标签**: `#AI`, `#DeepSeek`, `#LLM`, `#China`, `#Silicon Valley`

---

<a id="item-9"></a>
## [阿里巴巴发布 Qwen3.8-Max，2.4 万亿参数 MoE 模型](https://news.google.com/rss/articles/CBMiqwFBVV95cUxQRnI1TXFlQnotVUdmZTFXQW1xbDZCZjRfVTFFUWhSSlgtdkFlYXdNNXJrMHJ6M1B4OTRuR1ROQy1POEl1cDA3LU1jbGcybWJKOERsc3ZSWjBieEdQaFZBVXVOYWlVNV9lalE1R3E2aEpLSWc5bDRPZXdNWlN5S05mSzAyekJZeFVqSU1TOGY4MTNtRzR0M2lmNWZUXzhMOUFpcFhuUFJOM1V0MEk?oc=5) ⭐️ 8.0/10

阿里巴巴发布了 Qwen3.8-Max，这是一款具有先进编码和研究能力的新旗舰 AI 模型。该模型是一个 2.4 万亿参数的混合专家（MoE）模型，拥有 100 万 token 的上下文窗口，预计下周将开放权重。 此次发布加剧了 AI 模型领域的竞争，直接挑战了 GPT-5.6 Sol 和 Claude Fable 5 等模型。它可能影响开放权重模型的采用，并塑造 AI 研发的方向。 基准测试显示，Qwen3.8-Max 在 7 项编码和通用评估任务以及 36 项多模态基准测试中优于 Fable 5 和 GPT-5.6 Sol。该模型是阿里巴巴云开发的 Qwen 系列的一部分，该系列包括开源和专有模型。

google_news · entARABI · 8月3日 16:15

**背景**: Qwen（又称通义千问）是阿里巴巴云开发的大型语言模型系列。许多 Qwen 模型在 Apache 2.0 等开源许可下分发，而其他模型则是专有的，通过阿里云提供服务。Qwen3.8-Max 的发布代表了 Qwen 系列的重大进步，专注于编码和研究能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Qwen3.8-Max">Qwen3.8-Max</a></li>
<li><a href="https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/">Alibaba Qwen Releases Qwen3.8-Max: A 2.4 Trillion Parameter ...</a></li>
<li><a href="https://www.neowin.net/news/alibaba-releases-qwen38-max-challenging-gpt-56-sol-and-claude-fable-5-on-ai-benchmarks/">Alibaba releases Qwen3.8-Max, challenging GPT-5.6 Sol and ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Alibaba`, `#Qwen`, `#LLM`, `#Machine Learning`

---

<a id="item-10"></a>
## [ARPL：为 ARM 上的 llama.cpp 提供运行时 ISA/拓扑检测](https://www.reddit.com/r/MachineLearning/comments/1ven68z/arpl_runtime_isatopology_detection_for_llamacpp/) ⭐️ 7.0/10

ARPL 是一个新的开源工具，为 ARM 设备上的 llama.cpp 提供运行时 ISA 和拓扑检测，自动配置线程数、上下文参数以及 SDOT、I8MM 和 SME2 等 ISA 扩展。它已在三星 S25 Ultra 上构建并测试，并以非商业许可证发布。 这解决了 llama.cpp 在 ARM 设备上的一个重大性能差距，此前硬件特定的优化要么手动进行，要么缺失。通过自动化配置，ARPL 可以提高移动 AI 应用的推理速度和效率，使 Snapdragon 8 Elite 等设备的开发者和最终用户受益。 ARPL 使用 HWCAPs 进行运行时 ISA 检测，并映射核心拓扑以推荐线程数。它还根据硬件能力修补上下文参数，如 flash attention 和 KV cache 量化。该项目是非商业展示版本，异构 CPU/GPU/NPU 分区仍在开发中。

reddit · r/MachineLearning · /u/OpeningTough145 · 8月3日 19:22

**背景**: llama.cpp 是一个流行的 C++库，用于在各种硬件上本地运行大型语言模型。在 ARM 设备上，性能可能因具体的 CPU 特性和核心布局而有显著差异。ARM 处理器支持不同的 ISA 扩展，如 SDOT、I8MM 和 SME2，这些扩展可以加速矩阵运算。通过 Linux/Android 上的 HWCAPs 等机制，可以对这些特性进行运行时检测。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/noplayeryt1511-lang/ARPL-public-">GitHub - noplayeryt1511-lang/ARPL-public-: ARPL configures ...</a></li>
<li><a href="https://kernel-internals.org/arch/arm64/cpu-features/">CPU Features and Alternatives - Linux Kernel Internals</a></li>
<li><a href="https://developer.arm.com/community/arm-community-blogs/b/operating-systems-blog/posts/runtime-detection-of-cpu-features-on-an-armv8-a-cpu">Arm Community - Arm Developer</a></li>

</ul>
</details>

**标签**: `#llama.cpp`, `#ARM`, `#runtime optimization`, `#mobile AI`, `#hardware detection`

---

<a id="item-11"></a>
## [理解物理现实的新型 AI 可能重塑世界](https://news.google.com/rss/articles/CBMiwgFBVV95cUxOdGpVV2RWYWJZRU92emhqTU02Y0NlTVMxTXlqMWh1V1dEeHNySDIta240dEpQbVJQRmFYa0NCREtjRUNEUUlUVzMtZWNzcnBRR1oxdVg4aVk0Q3hwS2p1bTBDVjVtSmVWUVU4X1dSSGRfV3NNcnpxTFl3ZElFdDdfdzBua0dyLXlrMVFnOG1vRVFyOUJuLWE1REhscEZLM3l5bHlmNmhqSmNHVV9pMjZIRmVtVmVHQmRsUXVJclpzemZwdw?oc=5) ⭐️ 7.0/10

《新科学家》报道了一种新兴的 AI 类别，能够理解物理现实，超越了基于文本的聊天机器人。这包括 Nvidia 的 Cosmos Reason 1 和 Yann LeCun 的 AMI Labs 等努力，旨在构建理解因果关系的世界模型。 这种转变可能导致 AI 能够与物理世界互动并进行推理，从而在机器人技术、自主系统和科学发现方面取得突破。它代表了一种潜在的重大技术转变，可与大型语言模型的兴起相媲美。 文章指出，当前的 AI 聊天机器人能用文字描述现实，但缺乏对因果关系的真正理解。新方法，如 LeCun 的联合嵌入预测架构，从感官数据和摄像头观察中学习，而不是预测下一个词元。

google_news · New Scientist · 8月3日 15:01

**背景**: 传统的 AI 模型，如大型语言模型，处理文本并根据模式生成响应，但它们没有物理世界的内部模型。“世界模型”旨在创建能够模拟和推理物理交互的 AI，类似于人类理解环境的方式。这可能会为需要物理推理的任务带来更强大的 AI。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.newscientist.com/article/2580566-will-a-new-kind-of-ai-that-understands-physical-reality-change-the-world-again/">Will a new kind of AI that understands physical reality change the...</a></li>
<li><a href="https://bloomtechdaily.com/stories/2026-03-09-ami-labs-lecun-raise.html">Yann LeCun's AMI Labs Raises $1.03 Billion to Build AI That ...</a></li>
<li><a href="https://www.linkedin.com/pulse/nvidia-unveils-reason-one-ai-understands-our-physical-dusan-simic-pxcbf">Nvidia Unveils Reason One: The AI That Understands Our Physical ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#physical reality`, `#technology`, `#future`

---

<a id="item-12"></a>
## [美国禁止中国 AI 模型或致年损失 120 亿美元](https://news.google.com/rss/articles/CBMi0wFBVV95cUxONFAtSFlmMHVVYlZ5RGtSTjY1OEdndGxXelBULUhhaGFjU1h5cm4ycUVmdllwSk82SURCZVdvT0hmYmM4Ujd5UE5MNHQ1alhvOTQxckZlcUpQRkRJczdnSVVFcnJ4d0VGQ0tpN0Zrakh6SFZVQkliWG5PUXQ4NUxTUGRBbWhnTGt1c1IxQTgta2lvc1ByVHR0ckQxaFlhcVREd0FUT0lXNnhRY0VwVGczQW1VdkZrUGRPekoxaE5yNzFmNDJmOGNmc0JSRk13blVqOXA00gHTAUFVX3lxTFBBZlcwTmJtLUk1LU4tZHhFTFY4MVdrV2FJUi1VUlZqRmJqSXRaVTFkTkJTYU8xcmNhNS1TWXNyVk82R2NaR1hPc19oSWhSUTdMTldIMndmVHFkNVlCa3o0NzNpd2xzOEpsSWxSVmxTaVNRcWFONzFnT21Ga2R5QlRXYl80el9VR1EwQUdneWVLZklmdDgzMnZEMXNLbGlQd0Z6dVVGUkVlNDBlcnY2SnEtbWhicjNIM2Ftb3F5NkFVQy10SmxFXzRxYU1KOUsxcnVlNEE?oc=5) ⭐️ 7.0/10

据《南华早报》报道，美国可能禁止中国 AI 模型，这每年可能给企业造成 120 亿美元的损失。该报道强调了此类政策举措可能带来的重大经济影响。 这一潜在的禁令将扰乱 AI 供应链，增加依赖中国 AI 模型的美国企业的成本，可能减缓 AI 的采用和创新。这也反映了美中在科技领域日益紧张的局势，对全球 AI 发展和贸易具有深远影响。 估计的每年 120 亿美元成本代表了企业因更换模型或失去中国 AI 能力而可能承担的财务负担。该报道未明确哪些中国 AI 模型将受影响，但可能包括阿里巴巴、百度和腾讯等主要提供商开发的模型。

google_news · South China Morning Post · 8月3日 03:00

**背景**: 中国的 AI 模型，如阿里巴巴的 Qwen、百度的文心一言和腾讯的混元，因其有竞争力的性能和开源可用性在全球广受欢迎。美国禁令可能会限制它们在美国市场的使用，迫使企业寻找替代方案，这可能既昂贵又耗时。此举将是美国限制中国技术影响力的更广泛努力的一部分，此前美国已对中国电信和半导体公司实施了类似限制。

**标签**: `#AI policy`, `#US-China relations`, `#economic impact`, `#artificial intelligence`

---

<a id="item-13"></a>
## [阿里巴巴与 MiniMax 开源 AI 模型以降低成本](https://news.google.com/rss/articles/CBMiYkFVX3lxTE1BQUFnYU9pYkFEay1Ud28teVc4R2RZenBEaHlTRlhYcWdSYU50aHY5NHcyZ2VTek04Q195N0JGQ3hoVkVPa1lxbkgtTHpxaEZKQkcxX3Voc3JJdTlYa1Bld2ZB?oc=5) ⭐️ 7.0/10

阿里巴巴和 MiniMax 宣布计划开源新的 AI 模型，旨在降低全球开发者和用户的成本。此举包括阿里巴巴的 Qwen 系列和 MiniMax 的 M3 模型，后者具有 1M 上下文窗口和多模态能力。 这一进展意义重大，因为它使先进 AI 技术的获取民主化，可能降低初创企业和个人开发者的门槛。同时加剧了 AI 行业的竞争，推动其他公司创新和降价。 阿里巴巴自 2023 年 8 月起开源模型，最初是 Qwen-7B，最近发布了原生多模态模型 Qwen3.5。MiniMax 的 M3 模型采用 MSA 架构，专为编码和智能体任务设计，具有 1M 上下文窗口。

google_news · Global Times · 8月3日 08:34

**背景**: 开源 AI 模型允许开发者自由使用、修改和部署，通常比专有 API 成本更低。阿里巴巴和 MiniMax 是 AI 领域的主要参与者，他们的开源发布为 OpenAI 和 Google 等公司的闭源模型提供了替代方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/MiniMaxAI">MiniMaxAI ( MiniMax )</a></li>
<li><a href="https://www.minimax.io/models/text/m3">MiniMax M3 - Coding & Agentic Frontier, 1M Context, Multimodal</a></li>
<li><a href="https://www.alibabacloud.com/blog/alibabas-open-source-ai-journey-innovation-collaboration-and-future-visions_602026">Alibaba's Open-Source AI Journey: Innovation, Collaboration ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Open Source`, `#Alibaba`, `#MiniMax`, `#Cost Reduction`

---
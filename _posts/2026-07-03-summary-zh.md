---
layout: default
title: "Horizon Summary: 2026-07-03 (ZH)"
date: 2026-07-03
lang: zh
---

> 从 53 条内容中筛选出 17 条重要资讯。

---

1. [理解才能参与：避免 AI 编码中的认知债务](#item-1) ⭐️ 8.0/10
2. [JADEPUFFER：首个由自主 AI 代理驱动的勒索软件](#item-2) ⭐️ 8.0/10
3. [Anthropic 自研 AI 芯片，考虑三星代工](#item-3) ⭐️ 8.0/10
4. [攻击链突破 Anthropic Claude Cowork 沙箱](#item-4) ⭐️ 8.0/10
5. [Simon Willison 发布 llm-coding-agent 0.1a0](#item-5) ⭐️ 7.0/10
6. [使用 DSPy 优化 Datasette Agent 的 SQL 提示](#item-6) ⭐️ 7.0/10
7. [探讨微调抵抗对安全 AI 的意义](#item-7) ⭐️ 7.0/10
8. [LLM 被用作攻击 AI 基础设施的武器](#item-8) ⭐️ 7.0/10
9. [AI 聊天机器人模仿人类权力动态和社会偏见](#item-9) ⭐️ 7.0/10
10. [因果推断修复大模型数据混合偏移](#item-10) ⭐️ 7.0/10
11. [廉价中国 AI 模型追赶 Anthropic 和 OpenAI](#item-11) ⭐️ 7.0/10
12. [幻影域名抢注：攻击者利用 AI 幻觉生成的域名](#item-12) ⭐️ 7.0/10
13. [Interfaze 发布开源扩散 ASR 模型，支持六种语言](#item-13) ⭐️ 7.0/10
14. [葡萄牙发布首个开源 AI 模型](#item-14) ⭐️ 7.0/10
15. [Inception42 与微软联合发布阿拉伯语 AI 模型](#item-15) ⭐️ 7.0/10
16. [思维链欺骗攻击推理型 AI 模型](#item-16) ⭐️ 7.0/10
17. [用 t0-alpha 解释时间序列大语言模型](#item-17) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [理解才能参与：避免 AI 编码中的认知债务](https://simonwillison.net/2026/Jul/2/understand-to-participate/#atom-everything) ⭐️ 8.0/10

Geoffrey Litt 在 2026 年 AI 工程师世界博览会上提出了“理解才能参与”的概念，认为开发者必须深入理解 AI 生成的代码，以避免认知债务并保持有效的协作。 随着 AI 编码代理生成越来越庞大和复杂的变更，开发者面临失去对代码库理解的风险，从而导致认知债务，阻碍未来的开发。这一概念凸显了生成式 AI 时代软件工程师所需的关键技能转变。 Litt 强调，理解代码到足以积极参与的深度，对于创造性和流畅地思考项目方向至关重要。该演讲是 AIE 会议的一部分，会议有超过 300 场录播，将在三周内陆续发布。

rss · Simon Willison · 7月2日 17:07

**背景**: 认知债务指的是随着 AI 生成的代码积累，软件团队中共享理解的侵蚀，使得系统更难被推理和安全地修改。与技术债务关注代码质量不同，认知债务存在于开发者的头脑中，影响他们有效工作的能力。随着 AI 辅助编码的普及，这一概念正受到越来越多的关注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html">Understanding is the new bottleneck</a></li>
<li><a href="https://x.com/geoffreylitt/status/2072522251300409556">Geoffrey Litt on X: "Hot take: I think it's still important to understand the code that our agents write! In this mega thread (based on my AIE talk today), I will explain why that's the case, and show some ideas for how to efficiently understand code. Alright, let's dive in. 1/ https://t.co/765DNZh6LN" / X</a></li>
<li><a href="https://margaretstorey.com/blog/2026/02/09/cognitive-debt/">How Generative and Agentic AI Shift Concern from Technical Debt to Cognitive Debt</a></li>

</ul>
</details>

**社区讨论**: 在 Twitter 上，Litt 的帖子引发了关于理解与信任 AI 代理之间平衡的讨论。一些评论者指出，即使代理通过了理解测试，它们仍可能生成错误的代码，这凸显了稳健验证的必要性。

**标签**: `#AI-assisted coding`, `#cognitive debt`, `#developer experience`, `#software engineering`

---

<a id="item-2"></a>
## [JADEPUFFER：首个由自主 AI 代理驱动的勒索软件](https://news.google.com/rss/articles/CBMi4wFBVV95cUxOY0JwM2VEbnl4ZkJsYzVtMHR2RzV6UWRiRDdRT21SeTFnc3pUeUdMQklNTmlsd3RxYklyZ3ZJSlotSjlfQ01TOVVrX1BPekRzc3U0RGxPbmpqTHQ3ZllJcGtGZGZFQWpKN1Y2ODVORGl4YWp3NllwOWwxZDBaclFvdFBaQkVaa25sTTlCTmVYTUZYeVRadHlNc0Q4bTZZT3NZb3IwRkFrTjl6TGEtTDZWSHVVaUR0emQwUlJsMzZaS3ROaXNRQlUxcVRMTUhqUE9kbThFdTBSNV82ZlliSjA0RGRYOA?oc=5) ⭐️ 8.0/10

Sysdig 威胁研究团队记录了 JADEPUFFER，这是首个已知的由基于大语言模型的自主代理在无需人工干预的情况下执行完整攻击链（从初始利用到数据库加密和勒索）的勒索软件操作。 这标志着网络威胁的重大演变，AI 代理现在可以以机器速度自主进行勒索软件攻击，降低了网络犯罪的门槛，并可能导致自动化、可扩展的勒索活动激增。 该代理利用开源工具 Langflow 中的漏洞获得初始访问权限，然后自主收集凭证并加密数据库。整个操作由一个大语言模型（LLM）驱动，该模型实时调整有效载荷。

google_news · Escudo Digital · 7月3日 05:05

**背景**: 勒索软件是一种加密受害者数据并要求支付赎金以解密的恶意软件。传统上，人工操作员手动执行攻击的每个阶段。AI 驱动的勒索软件利用人工智能来自动化和加速这些阶段，而 JADEPUFFER 代表了首个完全自主、端到端的代理型勒索软件操作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.escudodigital.com/en/technology/artificial-intelligence/inside-jadepuffer-the-first-ransomware-operation-driven-by-autonomous-agents.html">Inside JADEPUFFER: The first ransomware operation driven by autonomous agents | DigitalShield</a></li>
<li><a href="https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion">JADEPUFFER: Agentic ransomware for automated database extortion | Sysdig</a></li>
<li><a href="https://www.scworld.com/news/1st-agentic-ransomware-jadepuffer-invades-database-at-machine-speed">1st ‘agentic ransomware’ JADEPUFFER invades database at machine speed | news | SC Media</a></li>

</ul>
</details>

**标签**: `#ransomware`, `#autonomous agents`, `#cybersecurity`, `#AI threats`, `#malware`

---

<a id="item-3"></a>
## [Anthropic 自研 AI 芯片，考虑三星代工](https://news.google.com/rss/articles/CBMidEFVX3lxTFA3djFPUE00M1A0em1ONW50ckhTQ0NpXzhPTmdHaEFlSm1iS3FDSXcyMmZhMnhoMXFFVlJRSkFPV1NGMzQzYUpPVmdUZWpPNHhpZlljT0gtUndLUkJ6SktSaEZlYnlIWVlrYkJnY2VRVmZoQ3FD?oc=5) ⭐️ 8.0/10

据报道，Anthropic 正在开发自研 AI 芯片，并与三星代工进行了早期洽谈，将其作为潜在制造合作伙伴，旨在减少对英伟达 GPU 的依赖。 此举标志着 AI 硬件战略的重大转变，领先的 AI 公司寻求对昂贵计算基础设施的更多控制。如果成功，可能加剧 AI 芯片市场竞争，削弱英伟达的主导地位。 Anthropic 目前采用多元化计算策略，使用谷歌 TPU、亚马逊 Trainium 和英伟达 GPU。此次自研芯片开发效仿了 OpenAI 的做法，后者最近与博通合作推出了自研推理处理器“Jalapeño”。

google_news · Businesskorea · 7月3日 01:32

**背景**: AI 芯片是专门用于加速机器学习工作负载的处理器，目前英伟达 GPU 主导市场。三星代工是领先的半导体制造商，提供 3nm GAA 等先进工艺节点。自研芯片使 AI 公司能够针对自身模型优化性能和成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/">Anthropic is discussing a new custom chip with Samsung | TechCrunch</a></li>
<li><a href="https://www.theinformation.com/articles/anthropic-talks-samsung-manufacture-custom-ai-chip">Anthropic in Talks With Samsung to Manufacture Custom AI Chip — The Information</a></li>
<li><a href="https://www.anthropic.com/news/expanding-our-use-of-google-cloud-tpus-and-services">Expanding our use of Google Cloud TPUs and Services \ Anthropic</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#Anthropic`, `#Nvidia`, `#Samsung Foundry`, `#semiconductors`

---

<a id="item-4"></a>
## [攻击链突破 Anthropic Claude Cowork 沙箱](https://news.google.com/rss/articles/CBMipgFBVV95cUxQRTktVTg1X2w2ZGl4OXpScTZGcjFiS0Qtd0JWZ2lKX0pEQUVyUndBa2hwQng5UEhfa0t2cDVlUnNNbHA0cnljTFVsUFE1aHkzX044R2dSS2hxVG1YQXI4czRaMHlERThXQ1liWEhNdmFJZy1UeVZEd000bURPay1sN0RGWGE2aG1hckhNbVhDaXVxcElXV2tLdjVxOVkzSWJzQk5Ud09B?oc=5) ⭐️ 8.0/10

研究人员披露了一条详细的攻击链，能够突破 Anthropic Claude Cowork（一款 AI 代理工具）的沙箱环境。该漏洞绕过了旨在将 AI 与主机系统隔离的安全限制。 这一发现凸显了 AI 代理沙箱中的关键安全弱点，可能允许恶意代码危害主机系统。随着 AI 代理获得更多系统访问权限，它强调了需要更强的隔离机制。 该攻击链利用多个步骤逃逸沙箱，在 macOS 上沙箱使用 Apple 的 Seatbelt 框架，在 Linux 上使用 bwrap。研究人员证明，沙箱并不能完全保护已授权文件夹内的用户数据。

google_news · SC Media · 7月2日 13:48

**背景**: Claude Cowork 是 Anthropic Claude Code 中的一种 AI 代理模式，可以执行命令并与系统交互。其沙箱旨在限制 AI 的行为以防止危害，但此次攻击表明，坚定的攻击者仍然可以突破。沙箱逃逸是安全领域已知的挑战，但这是针对主要 AI 实验室产品的实际演示。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://code.claude.com/docs/en/sandboxing">Configure the sandboxed Bash tool - Claude Code Docs</a></li>
<li><a href="https://coworkerai.io/guide/security-setup">Claude Cowork Security & Sandbox Setup</a></li>
<li><a href="https://dev.to/aaron_walker_dc0d1194638f/escaping-the-sandbox-jailbreaking-claude-cowork-dbd">Jailbreaking Claude Cowork: Escaping the “Sandbox” - DEV Community</a></li>

</ul>
</details>

**社区讨论**: DEV Community 上关于越狱 Claude Cowork 的帖子指出，沙箱阻止了访问私有 API 或运行 Docker 等实际任务，但逃逸方法表明它可能限制过多却仍不安全。评论者对安全性与可用性之间的平衡表示担忧。

**标签**: `#AI safety`, `#sandbox escape`, `#Anthropic`, `#security vulnerability`, `#Claude`

---

<a id="item-5"></a>
## [Simon Willison 发布 llm-coding-agent 0.1a0](https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything) ⭐️ 7.0/10

Simon Willison 发布了 llm-coding-agent 0.1a0，这是一个基于他的 LLM 库构建的实验性编码代理，灵感来自 Claude Code。该代理提供了读取、编辑和搜索文件以及执行 shell 命令的工具。 此次发布标志着 LLM 库向代理框架的演进，支持 AI 辅助编码工作流。它降低了开发者使用熟悉的 Python 生态系统实验编码代理的门槛。 该代理包含 edit_file、execute_command、list_files、read_file 和 search_files 等工具，可通过 `uvx --prerelease=allow --with llm-coding-agent llm code` 运行。它还提供了带有 CodingAgent 类的 Python API。

rss · Simon Willison · 7月2日 19:33

**背景**: Simon Willison 的 LLM 库是一个用于与大语言模型交互的 Python 工具。Claude Code 是 Anthropic 开发的 AI 编码助手，可以自主编辑文件和运行命令。该项目是一个早期 alpha 实验，旨在使用 LLM 库复制类似功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Claude_Code">Claude Code</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#coding agent`, `#LLM`, `#Python`, `#open source`

---

<a id="item-6"></a>
## [使用 DSPy 优化 Datasette Agent 的 SQL 提示](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything) ⭐️ 7.0/10

Simon Willison 使用 DSPy 评估并改进了 Datasette Agent 的 SQL 系统提示，发现了列名猜测和错误重试循环等问题，并提出了在模式列表中包含列名等修复建议。 这展示了一种实用的自动化提示优化工作流程，可以增强 AI 生成的 SQL 查询，减少错误并提高 AI 辅助数据查询工具的可靠性。 该实验通过 DSPy 使用了 GPT-4.1 mini 和 nano 模型，发现原始提示中避免调用 describe_table 的建议导致了列名猜测和错误循环；在模式列表中包含列名是一个关键改进。

rss · Simon Willison · 7月2日 18:25

**背景**: DSPy 是一个用于自动优化提示和 LLM 程序的框架。Datasette Agent 是一个 AI 代理，可以执行只读 SQL 查询来回答用户关于数据的问题。提示工程对于此类代理生成正确高效的 SQL 至关重要。

**标签**: `#DSPy`, `#prompt engineering`, `#AI agents`, `#SQL`, `#Datasette`

---

<a id="item-7"></a>
## [探讨微调抵抗对安全 AI 的意义](https://www.reddit.com/r/MachineLearning/comments/1um9bs7/what_does_safe_ai_look_like_d/) ⭐️ 7.0/10

Reddit 上的一场讨论质疑，对于开放权重的大语言模型，微调抵抗是否是一个有意义的安全目标，因为安全措施很容易被自动化脚本绕过。 这场讨论凸显了当前开放权重模型安全训练的实际局限性，可能影响关于此类努力是否值得成本的治理辩论。 讨论聚焦于威胁模型，指出“未审查”变体在发布后迅速出现，并询问即使无法完美预防，增加攻击者成本或降低安全移除的可靠性是否有价值。

reddit · r/MachineLearning · /u/Aaron_Rock · 7月3日 09:07

**背景**: 开放权重的大语言模型允许用户访问和修改模型权重，使得通过微调移除安全护栏变得容易。安全训练旨在防止有害输出，但坚定的用户通常可以通过简单的微调或其他变通方法绕过这些措施。

**社区讨论**: 讨论富有思考性，参与者权衡安全训练的成本效益与绕过的容易程度。一些人认为，即使不完美的安全措施也提高了随意滥用的门槛，而另一些人则质疑其对坚定对手的价值。

**标签**: `#AI safety`, `#open-weight models`, `#fine-tuning`, `#LLM governance`, `#threat modeling`

---

<a id="item-8"></a>
## [LLM 被用作攻击 AI 基础设施的武器](https://news.google.com/rss/articles/CBMiygFBVV95cUxOTms5SHd4dkZGT3QwaGY0Z3dFZjFGeDBBYlh1Y0I5bmE2NGpIejlCV25WOXJXV015X1JZdzA3Y3lJNkk2eHowaFdZM2NwcGJJa1piUGNQOWZqSU5rX3l0UDBfTXNCRlhKakp1dFg5dkhRSFlKT0oxWVFvU2Q1Tjh5T0R2bTNJYlpnbm5YMWFFT3pEclpOV2JCSDhmelRCU29RWktGZjkwc1pUWkxPNXJkY0ZzY1htaHNRZnJqSGlfTFZIWTlsMEhhVF9n?oc=5) ⭐️ 7.0/10

《小型战争杂志》的一篇文章强调了大型语言模型（LLM）被用于攻击 AI 基础设施这一新兴威胁，而不仅仅是针对人类或软件。 这代表了网络安全领域的范式转变，AI 系统既成为目标又成为武器，可能导致关键 AI 依赖领域的级联故障。 文章讨论了如何将 LLM 重新用于利用 AI 管道中的漏洞，如模型中毒或对抗性输入，但缺乏具体的技术示例或案例研究。

google_news · Small Wars Journal · 7月2日 17:17

**背景**: 像 GPT-4 这样的大型语言模型（LLM）在海量文本数据上训练，能够生成类似人类的文本。它们越来越多地被集成到 AI 基础设施中，用于代码生成和数据分析等任务。然而，它们理解和生成代码的能力也使它们成为针对其支持的系统进行复杂网络攻击的潜在工具。

**标签**: `#AI security`, `#LLM`, `#cybersecurity`, `#adversarial attacks`

---

<a id="item-9"></a>
## [AI 聊天机器人模仿人类权力动态和社会偏见](https://news.google.com/rss/articles/CBMiuwFBVV95cUxNOXpXLUlUQTRMa1M4eHpMaEJSSG1HUmVSYkpWbkJyQm9wejBQZWVKVzg2eWY1Nk83bkUxcjA4YnVVQ2RnNmlPWllKa3hPc3RkMVpzUV9oUzNwclNQdy0yOXl2VkQ1a3NBYUpVUXh4eGtjYkcwV1ladmc3cHZrNmZiY2YyTUpkaTlYZ2JQTUR5dFptU0xhNm9NQS1tNmFVM0ZhX21tVUszQ1V1d29mdmxwalZtTGQyaWcxRWJr?oc=5) ⭐️ 7.0/10

一项发表在 PsyPost 上的新研究表明，包括大型语言模型在内的 AI 聊天机器人在对话中会模仿类似人类的权力动态和社会偏见，反映了社会等级和刻板印象。 这一发现凸显了 AI 伦理和安全方面的关键挑战，因为带有偏见的聊天机器人互动可能会在客户服务、治疗或教育等实际应用中强化有害的刻板印象和权力失衡。 该研究分析了与多种 AI 聊天机器人的对话，发现它们系统性地表现出与性别、种族和权威相关的偏见，常常顺从地位较高的用户，或使用贬低地位较低用户的语言。

google_news · PsyPost · 7月2日 20:13

**背景**: AI 聊天机器人是在包含社会偏见和权力结构的人类文本大数据集上训练的。如果没有仔细的缓解措施，这些模型可能会学习并重现这些模式，导致有偏见的输出。这项研究进一步证明，AI 系统会反映并放大人类的偏见。

**标签**: `#AI ethics`, `#bias`, `#chatbots`, `#social dynamics`

---

<a id="item-10"></a>
## [因果推断修复大模型数据混合偏移](https://news.google.com/rss/articles/CBMizAFBVV95cUxOdUQ3LTloSDE4VmRrbTlSLWFDZHVKUElySml2Qm9xYXVXSTIwLUxyZkl1ZGcyZ3J4ZWxnYXk4Qkh0cmdkQkdCVTd5eTN3TTVtbDBaUkRjNkRJd0NNZE5VX2dBaG1JLWJCbUMzeGIycFFTaXFLRENHUlo0aUp2RTB4WXA3Q3lMd1MyT0pDQ29rT2x0VGg3UVV5ZENQZEk0Z3JqSDlPWDdsbXFMQ3dVZk1wdXlJQXI4RzNrc3g4c2lXclU1VktkMFU3OUI4dDQ?oc=5) ⭐️ 7.0/10

研究人员提出一种因果推断方法，以解决大语言模型在训练数据混合比例随时间变化时出现的性能下降问题。 这很重要，因为数据混合偏移是 LLM 训练中的常见问题，而因果方法提供了一种无需昂贵重新训练即可保持模型性能的原则性解决方案。 该方法利用因果推断来分离不同数据源的影响，使模型能够更稳健地适应新的混合比例。该研究在多个基准任务上进行了验证。

google_news · Tech Times · 7月2日 22:25

**背景**: 大语言模型通常基于来自不同来源的混合数据进行训练。当这种混合数据的组成发生变化（例如由于数据更新或领域偏移）时，模型性能可能会下降。因果推断提供了理解和调整此类分布偏移的工具。

**标签**: `#LLM`, `#causal inference`, `#training data`, `#AI research`

---

<a id="item-11"></a>
## [廉价中国 AI 模型追赶 Anthropic 和 OpenAI](https://news.google.com/rss/articles/CBMi9wFBVV95cUxOVTRLTkNncEdzMmRJRTBIUDRCcnAtQV9KUkdXemt5QzlxS05rbktCRC1VeXItYVhyTm9zdjVtM2g2X1F4UFdOUFlEck1lZlR0UjlmNGVuWE5rWFJJOTBPRE9qRjhDQndOYlh1ZWtIVXZQdG5VSFc3Z3EzZ1dfLWtnLWtRNXBfZ0tENTNPd1dESzlWd3ZNSEU0NTRlZXNOMjA2bTFERG04S1k1MS1vNG5OU2VoUGw1aWs0VmRVYjdqUnlBZmN6VDdXbHo5ZTVudjZBaHk5TFhfZGNLdFNPckVEajc4X3hScWV4anQ2NVNhWFA3T2lVcVdB0gH8AUFVX3lxTE1YQ3V0QWFxd0Yyc1VOMzdQaHl4bHVIWkdPR3QtRERvODIta3hFQ1FIVU9XNDZWYlJ4ZFZXOVZQWVhCSXF5X1YyaWtPUmhxUExiRlNrU2I2Y2NiTS1hVy16aVpaVGNicU1oZkxNQWJSaU9QNWxaNXZobHI1NE9tbDJqLWlTYmowYTJ5THJJUEVCdm5UY2lxMzBGQmdBYm9XWlp0cVRYZUx5MWozaVBvWFBrYnBDZmxGaFdLQzY4YmhXMzhMZjU5WXJSaWw2QTJzbHNKcy1mOTZRY2lzMHhDcS1mRDZCLXQ5alNpcS02S3VjNTdqZU01R3JyVHAzLQ?oc=5) ⭐️ 7.0/10

据报道，一款新的低成本中国 AI 模型在性能上已接近 Anthropic 和 OpenAI 的领先模型，对美国 AI 公司在本土的主导地位构成挑战。 这一发展标志着全球 AI 格局的转变，可能使先进 AI 能力的获取更加民主化，并加剧中美 AI 生态系统之间的竞争。 文章未指明模型名称、具体成本或基准分数，但强调其价格低廉且性能可与 Anthropic 的 Claude 和 OpenAI 的 GPT 系列相媲美。

google_news · ETEnterpriseai.com · 7月2日 14:02

**背景**: 中国 AI 公司一直在快速推进其大型语言模型（LLM）的发展，成本通常仅为美国同行的几分之一。该模型似乎延续了这一趋势，可能通过高效的训练技术或更小的架构来实现有竞争力的结果。

**标签**: `#AI`, `#Chinese AI`, `#LLM`, `#competition`

---

<a id="item-12"></a>
## [幻影域名抢注：攻击者利用 AI 幻觉生成的域名](https://news.google.com/rss/articles/CBMiowFBVV95cUxPVEltTC1PN1dmeVU4dVhFMHB4UTdISTJnbGdpY2Ytb3dkSmZDV3FKSk9NREhKNFZBMEtyejBGT0Y2RVZKLWg5TzZadFU2Nk5NVzI3emNENkpDa0tGVHM5cWhFTXBqTHp1LUZRR1cwd0pHNzVPSU9rbUhrdTVrb2xVRzhYSlVWaDM4aFZlOFgzNkZnWUdQTlhlNlRic1NmZkhkaEZR?oc=5) ⭐️ 7.0/10

攻击者正在注册 AI 模型幻觉产生的网络域名，这是一种被称为“幻影域名抢注”的新型攻击手段，由 SC Media 报道。 这种新型威胁利用 AI 幻觉诱骗用户访问恶意网站，削弱了对 AI 生成内容的信任，并带来重大网络安全风险。 幻影域名抢注涉及注册那些并不存在但被 AI 模型（如 ChatGPT）自信地建议为有效引用的域名。该技术针对那些不经验证就点击 AI 提供链接的用户。

google_news · SC Media · 7月2日 13:54

**背景**: AI 幻觉是指 AI 模型生成看似合理但实际错误的信息，包括不存在的网络域名。域名抢注是一种传统的网络攻击，攻击者注册与流行域名相似的域名，利用拼写错误或品牌混淆。幻影域名抢注通过预先注册 AI 模型可能幻觉出的域名，将这两种概念结合起来。

**标签**: `#AI`, `#cybersecurity`, `#hallucination`, `#domain squatting`

---

<a id="item-13"></a>
## [Interfaze 发布开源扩散 ASR 模型，支持六种语言](https://news.google.com/rss/articles/CBMimwJBVV95cUxPRkNxdmp1ejVmOHBWYldyTEtYREpzT3B3RGZKZ2d3dTllOGo3UEppVWFuMXhxc0hkS1JISTlUZXdFMXVtTC0xMDRxeXNHMXhHcGxfcXc4SW1jYXJDUDhrMmwwN1FjVWZ1X1JGWC1Vc0liSVdfc2NCbGFJRXgycGdrRDdqSklGMzVCQlVLbVNDbHNiOGVHU3g4ZDk1M1FJUGFFVnBVbmdyMGtVc2VDMlZkSTBjWHVYMlRjN09jMTlyU29Eb1ZJSG5tN0JPYi1JeFJmTzcwS21pb21UcjlHcF94VkJIMVFkazU3LWU3MEluN2xqN3o0UXZRazF2X2d3ODZNZkZBMnlOUlRwVi1fSTMzd1RDYk9yUFVzYXI4?oc=5) ⭐️ 7.0/10

Interfaze 发布了 diffusion-gemma-asr-small，这是一个基于扩散模型的开源自动语音识别（ASR）模型，能够通过并行去噪解码器转录六种语言。 该模型将基于扩散的方法引入 ASR，可能在鲁棒性和并行生成方面优于传统自回归模型，其开源特性鼓励社区在多语言语音识别领域进行创新。 该模型是 DiffusionGemma 架构的一个小型变体，支持六种语言，但公告中未详细说明具体语言。它使用并行去噪解码器来生成转录。

google_news · MarkTechPost · 7月3日 03:24

**背景**: 自动语音识别（ASR）将口语转换为文本。传统的 ASR 模型通常使用自回归解码器逐个生成标记，速度较慢。扩散模型最初在图像生成中流行，最近被应用于语音任务，提供并行生成能力，并可能更好地处理嘈杂音频。

**标签**: `#ASR`, `#diffusion models`, `#open-source`, `#speech recognition`, `#multilingual`

---

<a id="item-14"></a>
## [葡萄牙发布首个开源 AI 模型](https://news.google.com/rss/articles/CBMi6wFBVV95cUxPRE5UWGFMMHhLSWdxZUdQVzBaU2plTGtZVnA1a2lCRC1ib0Q2NzVGRDJkbmhFVGdyb0NlRHhwaFVjb1l0bWJzWXZ3dGpWVmZlUTA5WWE4YnlZXzFLbnJNQkcxblV1REh5anpmanRoZC12WlBrYkhOb1RDLVI4cXh3a3ZFTU5TWmlxZ1M3dVMzUzVRM3JGclg1MzBrb3RlX2NINmY1ZDR2M0xFTHp2dFR2UmRlWUtvaF9LTHkzcW05UnlBUzV6MEZnOE5JcE1LV1lqQ25tNjM2ellMVThUQTY5SjJKVjhER0NOQlI00gHrAUFVX3lxTE9ETlRYYUwweEtJZ3FlR1BXMFpTamVMa1lWcDVraUJELWJvRDY3NUZEMmRuaEVUZ3JvQ2VEeHBoVWNvWXRtYnNZdnd0alZWZmVRMDlZYThieVlfMUtuck1CRzFuVXVESHlqemZqdGhkLXZaUGtiSE5vVEMtUjhxeHdrdkVNTlNaaXFnUzd1UzNTNVEzckZyWDUzMGtvdGVfY0g2ZjVkNHYzTEVMenZ0VHZSZGVZS29oX0tMeTNxbTlSeUFTNXowRmc4TklwTUtXWWpDbm02MzZ6WUxVOFRBNjlKMkpWOERHQ05CUjQ?oc=5) ⭐️ 7.0/10

葡萄牙发布了其首个开源 AI 模型，这标志着该国 AI 发展的一个里程碑，并与欧洲推动数字主权的更广泛努力相一致。 此举通过减少对非欧洲 AI 平台的依赖，增强了欧洲的技术独立性，并鼓励了欧洲开源 AI 生态系统内的合作。 该模型是开源的，意味着其代码和权重可公开使用和修改，但文章未披露架构和训练数据等具体技术细节。

google_news · ETEnterpriseai.com · 7月2日 13:50

**背景**: 开源 AI 模型允许全球开发者检查、修改和改进技术，促进透明度和创新。欧洲一直在积极追求数字主权，以减少对美国和中国科技巨头的依赖，例如通过欧盟的 AI 法案和对本土 AI 项目的资助。

**标签**: `#AI`, `#open-source`, `#Europe`, `#digital sovereignty`

---

<a id="item-15"></a>
## [Inception42 与微软联合发布阿拉伯语 AI 模型](https://news.google.com/rss/articles/CBMixAFBVV95cUxOSG9YWThpTDBaYVBmR1NXTkpTYm1qT2pMVG02T015bDE4NnBsM1JRSXFSZS1tSGYwa3ZxTnJoR3lCVHZYQUxnWVpOQTBycjBsblpSMjNSeEc1alkwOGdBYzVvNEZKNkVVYmtOdzNiNnQ1SExOOVZGRkZMZ0JFR2xiMVpEbWFjM2hXSEJ5VUFQM3YwcVZKTmJCblRmY0FaWm4xdVdGTzV3NFJCdW5nYVMwOG8zYVV3RkhWcE9ZcmZlY1VwV213?oc=5) ⭐️ 7.0/10

Inception42 与微软合作推出了一款新的阿拉伯语 AI 语言模型，旨在提升阿拉伯语用户的自然语言处理能力。 该模型解决了阿拉伯语在 AI 领域代表性不足的问题，有望为全球超过 4 亿阿拉伯语使用者提供更好的数字服务，并促进该地区的 AI 创新。 该模型基于微软 Azure AI 基础设施构建，旨在处理阿拉伯语复杂的形态和方言。具体的性能基准或模型规模尚未披露。

google_news · MSN · 7月2日 12:55

**背景**: 阿拉伯语是一种闪米特语，形态丰富且方言众多，给自然语言处理带来了独特挑战。大多数大型语言模型主要基于英语和其他高资源语言训练，导致阿拉伯语服务不足。此次合作旨在弥合这一差距。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Inception">Inception</a></li>

</ul>
</details>

**标签**: `#AI`, `#Arabic NLP`, `#Microsoft`, `#Language Model`

---

<a id="item-16"></a>
## [思维链欺骗攻击推理型 AI 模型](https://news.google.com/rss/articles/CBMijwFBVV95cUxNSzRpQjV6c2xVZzZnaW9DVGstNXFYUUlFV2dZc0hBWWFmT0lnNVFSQm9UWDdQYmxYbHJDVmJMTHlpT3EwaTQ1dV9FRGVsWEVTaEVVOGIweTYzdFpuLXp2QzFfTEdXU3ZENVFqczgtckFzR2dGYkZSbEs0V2I1Q2wyUWJqS2VBNGt1UEluN2J6TQ?oc=5) ⭐️ 7.0/10

研究人员发现了一种名为“思维链欺骗”的新型对抗攻击，通过操纵 AI 模型的逐步推理过程来产生错误输出。 这种攻击削弱了推理型 AI 模型的可靠性，而这些模型正越来越多地用于代码生成和决策支持等关键应用，引发了严重的安全和信任问题。 该攻击利用思维链提示技术，通过注入恶意指令覆盖模型的推理过程，导致模型给出错误但看似合理的答案。

google_news · Hackaday · 7月3日 02:00

**背景**: 思维链提示是一种通过让模型在得出最终答案前生成中间步骤来提升 AI 推理能力的技术。该方法已被广泛应用于大型语言模型，以增强其在复杂任务上的表现。思维链欺骗攻击正是针对这一过程，揭示了 AI 安全中的一个新漏洞。

**标签**: `#AI safety`, `#adversarial attacks`, `#chain-of-thought`, `#security`, `#machine learning`

---

<a id="item-17"></a>
## [用 t0-alpha 解释时间序列大语言模型](https://news.google.com/rss/articles/CBMifEFVX3lxTFBIc2ZXeC1PbzNtSWt1aUcwczB5SzJSYTlLdG01N2lXNDMteThtRnF0cm03SDROWjNJMVFxZVY5VTlQMjdzc0V5bUhMd0VnRS1SMzREOVl0Wnh0NFFMWkpsQnVhSkx3T1hBcTNjTHRyMU9ERHhnZG51SnE1SHk?oc=5) ⭐️ 7.0/10

Towards Data Science 上的一篇文章以 t0-alpha 模型为例，解释了时间序列大语言模型的工作原理，展示了如何将大语言模型应用于时间序列预测。 这种方法弥合了自然语言处理和时间序列分析之间的差距，使大语言模型能够处理时间数据，应用于金融预测和物联网监控等领域。 t0-alpha 模型是 T0 模型的一个变体，在时间序列数据上进行微调以生成预测。它可能对时间序列值进行分词，并利用 Transformer 架构进行序列模式识别。

google_news · Towards Data Science · 7月2日 13:30

**背景**: 时间序列数据由按时间索引的数据点序列组成，常见于金融、天气和传感器领域。传统的预测方法如 ARIMA 或 LSTM 是专门化的，而像 GPT-4 这样的大语言模型擅长文本但不擅长数值序列。时间序列大语言模型通过将时间步视为 token，使预训练语言模型适应理解时间模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Time_series_DBMS">Time series DBMS</a></li>

</ul>
</details>

**标签**: `#time-series`, `#LLMs`, `#machine learning`, `#AI`

---
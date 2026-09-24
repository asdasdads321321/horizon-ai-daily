---
layout: default
title: "Horizon Summary: 2026-09-24 (ZH)"
date: 2026-09-24
lang: zh
---

> 从 56 条内容中筛选出 11 条重要资讯。

---

1. [OpenAI 发布 MentalHealthBench，评估 AI 心理健康对话安全性](#item-1) ⭐️ 8.0/10
2. [Simon Willison 为 Gemini 3.8 TTS 打造自带密钥试验场](#item-2) ⭐️ 7.0/10
3. [山姆·奥特曼在联合国安理会就 AI 安全发表讲话](#item-3) ⭐️ 7.0/10
4. [Airbnb 扩大工程团队对 OpenAI GPT-6 Astra 的访问权限](#item-4) ⭐️ 7.0/10
5. [Kyutai 发布 Voice of Reason：语音原生模型通过强化学习解决口语数学问题](#item-5) ⭐️ 7.0/10
6. [诺基亚开源 AnyJev：无需训练即可校准任意开源大模型](#item-6) ⭐️ 7.0/10
7. [AI 化学家通过编辑分子使其可合成药物](#item-7) ⭐️ 7.0/10
8. [盖茨基金会发起 60 家机构 AI 联盟，致力于弥合语言鸿沟](#item-8) ⭐️ 7.0/10
9. [OpenAI 的 AI 证明引发纳维-斯托克斯问题争论](#item-9) ⭐️ 7.0/10
10. [研究者将广告拍卖嵌入大模型 Token 生成过程](#item-10) ⭐️ 7.0/10
11. [阿里巴巴发布真武 V900 AI 芯片及扩展模型，股价大涨 5%](#item-11) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [OpenAI 发布 MentalHealthBench，评估 AI 心理健康对话安全性](https://openai.com/index/introducing-mentalhealthbench) ⭐️ 8.0/10

OpenAI 于 2026 年 9 月 23 日发布了 MentalHealthBench，这是一个包含 1,215 段合成心理健康对话的开放基准，旨在评估 AI 系统在从日常心理健康话题到紧急心理危机等真实场景中的回应表现。该基准由 80 多位持证心理健康专家共同参与开发，并明确将有用性和安全性同时作为评估目标。 随着 ChatGPT 等 AI 系统被超过十亿人用于情感支持和危机求助，MentalHealthBench 填补了评估模型在这些高风险场景中实际表现的关键空白。它通过为开发者提供一套由专家参与制定的共享标准来衡量心理健康方面的能力，很可能影响 AI 安全研究和负责任 AI 的发展方向。 该基准包含 1,215 段合成对话，覆盖从日常支持到急性危机的多种情境，并由 80 多位持证临床专家共同创建。不过也有观察者指出，公告中强调了临床专家的参与以及一些方法并未完全说明的图表，因此评估方法的透明度仍值得关注。

rss · OpenAI News · 9月23日 10:00

**背景**: 基准测试是标准化的测试集，让研究人员能够比较不同 AI 模型在特定任务上的表现，类似于给软件出考卷。心理健康对话是一个特别敏感的应用场景，因为 AI 回应不当可能造成真实伤害，但此前一直没有广泛共享、由专家参与制定的方法来衡量模型在这类交互中的行为。MentalHealthBench 正是为了提供这样一把同时衡量有用性和安全性的共同标尺。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-mentalhealthbench/">Introducing MentalHealthBench - OpenAI</a></li>
<li><a href="https://www.unite.ai/openai-debuts-mentalhealthbench-for-ai-mental-health-conversations/">OpenAI Debuts MentalHealthBench for AI Mental Health ...</a></li>
<li><a href="https://cdn.openai.com/ctf-cdn/MentalHealthBench_A_Comprehensive_Benchmark_of_AI_Capabilities_in_Realistic_Mental_Health_Conversations.pdf">PDF MentalHealthBench: An Expert-Informed Benchmark of AI Capabilities in ...</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#mental health`, `#benchmark`, `#responsible AI`, `#OpenAI`

---

<a id="item-2"></a>
## [Simon Willison 为 Gemini 3.8 TTS 打造自带密钥试验场](https://simonwillison.net/2026/Sep/23/gemini-tts-playground/) ⭐️ 7.0/10

Simon Willison 发布了一个自带密钥（BYOK）的网页试验场，用于 Google 新推出的 Gemini 3.8 Flash TTS 和 Flash-Lite TTS 模型，该工具是他用 GPT-6 Astra 通过“氛围编程”完成的。该试验场开放了模型内置的 2,000 多种声音库、多说话人对话编排，以及仅凭 30 秒音频样本即可克隆自定义声音的能力。 这个试验场让开发者和创作者无需安装即可立即测试 Google 的新 TTS 模型，并在正式接入 API 前比较音质、延迟和成本。它还凸显了 Gemini API 开放的 CORS 策略如何支持完全客户端、密钥安全的演示，可能鼓励更多围绕 Gemini 的第三方工具出现。 该工具仅将用户的 Gemini API 密钥保存在页面内存中并直接发送给 Google，绝不写入浏览器存储，同时加载了 2,089 种声音，可按声音 ID、名称或语言搜索。在 Willison 的演示中，使用非 Lite 版的 Gemini 3.8 Flash TTS 生成 1 分 18 秒的多说话人音频耗时约 20 秒，成本为 2.74 美分。

rss · Simon Willison · 9月23日 17:12

**背景**: 文本转语音（TTS）模型将书面文字转换为语音，而近期的生成式模型还能根据短样本或自然语言提示模仿或设计声音。自带密钥（BYOK）工具让用户提供自己的 API 凭证，使应用充当客户端而非转售访问权限，从而让成本和配额归属于用户自己的账户。CORS（跨源资源共享）是一种浏览器安全机制，决定网页能否调用其他域名上的 API；开放的 CORS 策略正是这类纯客户端试验场能够直接与 Google 服务器通信的前提。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/">Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS - The Keyword</a></li>
<li><a href="https://www.marktechpost.com/2026/09/23/google-releases-gemini-3-8-flash-tts-and-flash-lite-tts-with-prompt-based-voice-design/">Google Releases Gemini 3.8 Flash TTS and Flash-Lite TTS With ...</a></li>
<li><a href="https://llmplayground.net/blog/en/what-is-byok">What Is Bring-Your-Own-Key (BYOK) AI Chat? Cost & Privacy ...</a></li>

</ul>
</details>

**标签**: `#text-to-speech`, `#Gemini`, `#Google AI`, `#voice-cloning`, `#developer-tools`

---

<a id="item-3"></a>
## [山姆·奥特曼在联合国安理会就 AI 安全发表讲话](https://openai.com/index/sam-altman-un-security-council-remarks) ⭐️ 7.0/10

2026 年 9 月 23 日（周三），OpenAI 首席执行官山姆·奥特曼在联合国安理会发表讲话，就 AI 安全、人类对 AI 系统的控制以及国际合作的必要性阐述了观点。同日，Anthropic 首席执行官达里奥·阿莫代伊也向安理会作了单独简报。 这是联合国安理会首次正式召集领先 AI 企业高管，讨论是否以及如何对先进 AI 进行国际治理。这表明 AI 安全正从技术和学术讨论上升为高层全球政策议题，可能影响未来面向全球开发者、部署者和用户的监管规则。 奥特曼和阿莫代伊分别进行简报，而非联合发言，两人都将先进 AI 描述为可能危及全人类的风险，并呼吁国际协调。此次会议在联合国大会期间举行，而两人的发言紧随美国总统唐纳德·特朗普在同一场合的讲话之后。

rss · OpenAI News · 9月23日 12:00

**背景**: 联合国安理会是主要负责维护国际和平与安全的联合国机构，通常处理武装冲突和制裁等事务。近年来其议程扩展到新兴技术风险，包括人工智能。OpenAI 和 Anthropic 是全球领先的两家 AI 实验室，其首席执行官的发言反映出对具有广泛社会影响的 AI 系统进行全球治理的压力日益增大。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theguardian.com/world/2026/sep/23/unga-sam-altman-dario-amodei">OpenAI’s Altman and Anthropic’s Amodei address UN security ...</a></li>
<li><a href="https://www.cnbc.com/2026/09/23/altman-amodei-un-ai-safety.html">Altman pushes for AI cooperation at UN after Trump rebuffs ...</a></li>
<li><a href="https://openai.com/index/sam-altman-un-security-council-remarks/">Sam Altman’s remarks at the United Nations Security Council</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#AI governance`, `#international cooperation`, `#OpenAI`, `#policy`

---

<a id="item-4"></a>
## [Airbnb 扩大工程团队对 OpenAI GPT-6 Astra 的访问权限](https://openai.com/index/airbnb-gpt-6-astra) ⭐️ 7.0/10

Airbnb 正在扩大其工程团队对 OpenAI GPT-6 Astra 及其他前沿模型的访问权限，使团队能够调试代码、设计系统并更快地交付软件。该消息以 OpenAI 案例研究的形式发布，凸显了企业对其最先进 AI 模型的采用。 这标志着大型消费科技公司对前沿 AI 模型的重要企业级采用，表明核心软件工程工作流程对先进 AI 的依赖日益增长。这可能促使其他大型企业将前沿模型整合到其开发流程中，从而重塑软件的构建方式。 GPT-6 Astra 于 2026 年 9 月 3 日首次向获批用户发布，次日全面开放，OpenAI 称其是迄今最智能、最对齐的模型，在计算机使用、编程、网络安全和科学领域具备最先进的能力。面向公众的受限版本会拒绝网络安全等领域的某些提示。

rss · OpenAI News · 9月23日 01:00

**背景**: GPT-6 Astra 是 OpenAI 开发的大型语言模型，定位为早期 GPT 模型的继任者，以其先进的推理和编程能力为卖点。OpenAI 的“前沿模型”指其能力最强、最尖端的人工智能系统，专为推理、智能体和软件开发等复杂任务而设计。企业越来越多地采用这些模型来提升开发者生产力并加速产品交付。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-6_Astra">GPT-6 - Wikipedia</a></li>
<li><a href="https://openai.com/index/gpt-6-astra/">GPT-6 Astra: A new generation of intelligence | OpenAI</a></li>
<li><a href="https://openai.com/index/introducing-openai-frontier/">Introducing OpenAI Frontier | OpenAI</a></li>

</ul>
</details>

**标签**: `#AI`, `#OpenAI`, `#GPT-6`, `#Software Engineering`, `#Enterprise Adoption`

---

<a id="item-5"></a>
## [Kyutai 发布 Voice of Reason：语音原生模型通过强化学习解决口语数学问题](https://news.google.com/rss/articles/CBMi5AFBVV95cUxQM2x0TlRNX01YbUlTaFBncF9VMUlneVZJUmljMlQ4MmNKLUU5ejVvZkxBVU9vay1fdndGd2Z5bVN4RTZCb2pvV05zR1ctbEc5cHB4aEtZWFZtMFJ3SVZTbW1fR1VJWkJvbERZTmZ1XzdNWDVQOVN1MGVYU2dhTGJLMU14MDNTUWZYaW9XNE81bVNOVmpiX3NwOXRsRmlxczRqN00zWk9uc0U1NjdiZGFkUzJIZWNsaDJMaFZYQTVZYkk1MTRIWjFocVZ4UE90WGtfWnplT1JoWkFaMW1TWkw3WVJsZEzSAeQBQVVfeXFMUDNsdE5UTV9NWG1JU2hQZ3BfVTFJZ3lWSVJpYzJUODJjSi1FOXo1b2ZMQVVPb2stX3Z3RndmeW1TeEU2Qm9qb1dOc0dXLWxHOXBweGhLWVhWbTBSd0lWU21tX0dVSVpCb2xEWU5mdV83TVg1UDlTdTBlWFNnYUxiSzFNeDAzU1FmWGlvVzRPNW1TTlZqYl9zcDl0bEZpcXM0ajdNM1pPbnNFNTY3YmRhZFMySGVjbGgyTGhWWEE1WWJJNTE0SFoxaHFWeFBPdFhrX1p6ZU9SaFpBWjFtU1pMN1lSbGRM?oc=5) ⭐️ 7.0/10

Kyutai 发布了 Voice of Reason，这是一个语音原生模型，使用带有可验证奖励的强化学习，直接从音频输入解决口语数学问题。该工作详见 arXiv 论文 2609.18677，旨在缩小语音语言模型与文本模型在数学推理基准上的准确率差距。 与级联的语音转文本流程相比，语音语言模型能够实现更丰富、延迟更低的语音交互，但其推理准确率一直落后于文本模型。Voice of Reason 表明强化学习可以直接应用于语音领域以提升数学推理能力，这可能惠及语音助手、辅导系统和无障碍 AI 界面。 该模型是语音原生的，意味着它直接处理音频而无需单独的转录步骤，从而保留副语言信息并降低延迟。它使用带有可验证奖励的强化学习，这一技术已被证明能有效扩展文本模型的数学能力，不过公告中未详细说明具体的基准分数和模型规模。

google_news · MarkTechPost · 9月23日 06:33

**背景**: Kyutai 是一家法国 AI 研究实验室，以 Hibiki 等开源语音模型及其 STT 文档而闻名。语音原生模型与传统级联系统的不同之处在于直接处理音频，而不是将语音转换为文本、处理后再转换回来。带有可验证奖励的强化学习最近在文本模型中实现了奥林匹克级别的形式数学推理，而 Voice of Reason 将这一方法扩展到了语音领域。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2609.18677">[2609.18677] Voice of Reason: Reinforcement Learning for ...</a></li>
<li><a href="https://kyutai.org/next/stt/">kyutai .org/next/stt</a></li>
<li><a href="https://huggingface.co/kyutai?_bhlid=05b3d9279f30aa7154e68e309f4d6281a7688d8a">Org profile for Kyutai on Hugging Face, the AI community building the...</a></li>

</ul>
</details>

**标签**: `#speech recognition`, `#reinforcement learning`, `#math reasoning`, `#AI models`, `#Kyutai`

---

<a id="item-6"></a>
## [诺基亚开源 AnyJev：无需训练即可校准任意开源大模型](https://news.google.com/rss/articles/CBMi4wFBVV95cUxOdWQ4dDJpbDNpQzFyQ1R3ZU9RRWRVR0dRSTVjbElZdTZiLUJEcUhxOEViTE5SQjN2ZFkyd1c5VnZPWXpwYVdpcHc1SWxfeEFYYzBZeHV6WWVaSldUYzhGaDBYVjBsMVduN2ZIUDJCaEpKVFpaaEU2cnloZlNLdGhJeDd0Mjh6aUtfQWFkcUotejlZdzB6Z2dSX21DWjktZHFXYjhERGtVYWdEYzhpUlk4cjBTTUZQcThQSUZIWXZDNXpMN1ZLcEZVMzRTQUdCTW15Y29ENXhZc1dLSjZiY2NicFFpUdIB4wFBVV95cUxOdWQ4dDJpbDNpQzFyQ1R3ZU9RRWRVR0dRSTVjbElZdTZiLUJEcUhxOEViTE5SQjN2ZFkyd1c5VnZPWXpwYVdpcHc1SWxfeEFYYzBZeHV6WWVaSldUYzhGaDBYVjBsMVduN2ZIUDJCaEpKVFpaaEU2cnloZlNLdGhJeDd0Mjh6aUtfQWFkcUotejlZdzB6Z2dSX21DWjktZHFXYjhERGtVYWdEYzhpUlk4cjBTTUZQcThQSUZIWXZDNXpMN1ZLcEZVMzRTQUdCTW15Y29ENXhZc1dLSjZiY2NicFFpUQ?oc=5) ⭐️ 7.0/10

诺基亚应用研究团队开源了 AnyJev，这是一个 Python 库，无需任何训练或标注数据，就能把任意开源大语言模型转变为经过校准的决策模型。据 MarkTechPost 报道，该层能够读取结构化类型的答案，并消除位置偏差与标签偏差，使模型输出的概率更真实地反映其置信度。 大模型校准是模型落地到决策场景时的一个实际瓶颈，因为过度自信或存在位置偏差的输出会导致自动化决策不可靠。来自工业研究实验室的免训练、即插即用层，降低了那些无力微调或缺乏标注数据的团队的使用门槛，并有望成为大模型评测与智能体流水线中的标准组件。 AnyJev 以 Python 库的形式发布，被描述为无需训练、无需标签，采用循环式方法来纠正结构化答案中的位置偏差和标签偏差。MarkTechPost 的报道指出，团队对项目来源保持了坦诚，不过目前所提供的材料中尚无针对其校准精度的独立技术评估。

google_news · MarkTechPost · 9月23日 07:09

**背景**: 机器学习中的校准指的是模型预测的概率与其实际正确率之间的匹配程度——一个校准良好的模型若表示自己有 80% 的把握，那么它大约应有 80% 的概率答对。大语言模型往往校准不佳，倾向于过度自信，同时也可能对答案选项的呈现顺序（位置偏差）或标签措辞敏感。AnyJev 以包装层的形式在推理阶段解决这些问题，而不是通过重新训练或微调底层模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.marktechpost.com/2026/09/23/nokia-open-sources-anyjev-a-training-free-layer-that-turns-any-open-llm-into-a-calibrated-decision-model/">Nokia Open-Sources AnyJev: A Training-Free Layer That Turns Any Open LLM Into a Calibrated Decision Model - MarkTechPost</a></li>
<li><a href="https://x.com/Marktechpost/status/2102660770941321233">Marktechpost AI on X: "Nokia AI Research Open-Sources AnyJev: A Training-Free Layer ...</a></li>
<li><a href="https://learnprompting.org/docs/reliability/calibration">Calibrating LLMs</a></li>

</ul>
</details>

**社区讨论**: 围绕此次发布的讨论有限但总体正面，X 和 LinkedIn 上的评论者强调 AnyJev 无需任何标签即可同时解决位置偏差和标签偏差，并指出诺基亚对项目来源保持了透明。现有材料中尚未出现详细的技术性批评或反驳观点。

**标签**: `#LLM`, `#calibration`, `#open-source`, `#decision-making`, `#Nokia`

---

<a id="item-7"></a>
## [AI 化学家通过编辑分子使其可合成药物](https://news.google.com/rss/articles/CBMijAFBVV95cUxQX1hzN3ZOV0JOZGY4dEF4S1oyOGVwYUp6dWF0OFYwSzY4WHZaU3VZaXpGWG9VTTNQQk9RLWtwZ2UxVkVQOW1lMXVkektld0IzcUVwV0RhSkRqNW44V2ZNVF90MHJ1Y1E3NE0xTW5ueWE4a0s5cU5fWmRNbV95b2pTaTBsalhma3A2YldTTA?oc=5) ⭐️ 7.0/10

研究人员开发了一种 AI 框架，能够对分子进行最小化、有原则的编辑，使其可合成，同时保留关键的结合相互作用。这解决了生成模型能想象出的分子与化学家实际能构建的分子之间长期存在的差距。 这一进展可能将废弃的 AI 生成设计转化为可用的候选药物库，通过关注需要改变哪几个原子而非生成更多分子，有望加速 AI 驱动的药物发现。它可能对药物化学和制药行业产生重大影响。 该框架对分子进行最小化编辑以提高可合成性，同时保留结合相互作用，解决了 AI 生成分子通常难以合成的常见问题。这种方法与传统的逆合成工具不同，侧重于编辑而非路线规划。

google_news · bioengineer.org · 9月23日 13:05

**背景**: 在 AI 驱动的药物发现中，生成模型经常提出理论上很有前景但合成上不可行的新分子，造成瓶颈。逆合成 AI 工具帮助规划合成路线，但许多 AI 设计的分子仍然过于复杂而无法制造。这种新型 AI 化学家通过编辑分子使其可合成来弥合这一差距。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bioengineer.org/ai-chemist-learns-to-edit-molecules-into-makeable-medicines/">AI Chemist Learns to Edit Molecules Into Makeable Medicines</a></li>
<li><a href="https://www.chemcopilot.com/blog/ai-retrosynthesis-tools-revolutionizing-organic-chemistry-and-drug-discovery">AI Retrosynthesis Tools: Revolutionizing Organic Chemistry and Drug Discovery — ChemCopilot: PLM + AI for Chemical Industry</a></li>
<li><a href="https://www.synthiaonline.com/resources/articles/ai-retrosynthesis-software-synthesizable-drug-hits">AI-Powered Retrosynthesis Software for Prioritizing Synthesizable Hits in In Silico Drug Discovery</a></li>

</ul>
</details>

**标签**: `#AI`, `#drug discovery`, `#chemistry`, `#machine learning`, `#medicinal chemistry`

---

<a id="item-8"></a>
## [盖茨基金会发起 60 家机构 AI 联盟，致力于弥合语言鸿沟](https://news.google.com/rss/articles/CBMi6gFBVV95cUxQSXVBNmZ1NE5Ja3FWeUt6c0I1ZWpJUnVBMG5VNFZ1bWNjbXZSVmY2Wm0tamMtTFZrclB3Y045TkN1cklwMVM5RlF6M1ZJbTB2dEVMV2lQOFVoY1VjWHVYc19KS3FWejAyckxPR1gxdlFCV3hRN3k0Ni1KczR5SlNGYVktOHdnTjJoUDlXNHIyOVdkbFhtTG8tajlnYmFMYmx4R0pNUnVGZE5IaWkwTzctU3Zpb3A4aEhzRmd1WUs4TVpBbFdCRjlaZU1LRmZpUUl5R3BZcGxudzlINWp2bWNycHUySmVuc2pxZlE?oc=5) ⭐️ 7.0/10

盖茨基金会宣布成立一个由 60 家签署机构组成的全球 AI 联盟，成员包括 Anthropic、微软和谷歌，承诺让 AI 工具能够支持当前模型覆盖不足的语言和语音。合作方设定了五年目标，计划覆盖约 34 亿人，并将共享语言数据基础设施与隐私、知情同意和数据主权方面的承诺相结合。 大多数大语言模型在英语和少数高资源语言上表现远好于其他语言，导致数十亿使用低资源语言的用户难以获得良好的 AI 服务。这个涵盖主要模型开发商、慈善机构、政府和民间社会的联盟，有望加速共享数据集和治理规范的建立，而单靠个别企业往往缺乏动力去做这件事。 该计划汇集了 60 家机构的资源，将在未来一年内建立治理框架和工作组，目标是构建可供开发者使用多种语言的数据基础设施和应用。五年内覆盖 34 亿人的目标伴随着对隐私、知情同意和数据主权的明确承诺，但具体的资金规模和技术里程碑尚未公布。

google_news · indiagazette.com · 9月23日 08:33

**背景**: 大语言模型主要使用英语和其他资源丰富的语言进行训练，因此对于数字化文本和语音数据较少的语言，其质量会急剧下降。这种“语言数据鸿沟”意味着使用数千种语言的用户无法可靠地使用 AI 助手、翻译工具或语音界面。盖茨基金会近年来日益关注 AI 在全球发展中的应用，该联盟将语言覆盖视为一项共享基础设施问题，而非纯商业问题，从而延续了这一方向。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gatesfoundation.org/ideas/media-center/press-releases/2026/09/ai-language-partnership">Global organizations announce five-year goal to help more ...</a></li>
<li><a href="https://economictimes.indiatimes.com/tech/artificial-intelligence/gates-foundation-forms-global-ai-coalition-to-bridge-language-gap-anthropic-microsoft-google-among-signatories/articleshow/134426834.cms">Gates Foundation forms global AI coalition to bridge language ...</a></li>
<li><a href="https://letsdatascience.com/news/gates-foundation-coalition-targets-ais-language-data-gap-8d851904">Gates Foundation coalition targets AI's language-data gap</a></li>

</ul>
</details>

**标签**: `#AI`, `#Gates Foundation`, `#language technology`, `#global coalition`, `#tech industry`

---

<a id="item-9"></a>
## [OpenAI 的 AI 证明引发纳维-斯托克斯问题争论](https://news.google.com/rss/articles/CBMiVEFVX3lxTE91RlFsbUJhSWNSSTNQaW50eFBQb3dkWXpUWURvOHg1Y1pvMFRvVzBMaThlVjM1ZHkxM1l2VUpEM3BVQlFDZVpTY1ZyZ1hESndseXVZNw?oc=5) ⭐️ 7.0/10

OpenAI 宣布其内部 AI 系统给出了纳维-斯托克斯方程存在性与光滑性问题的解答，该问题是七大千禧年大奖难题之一，其结论称流体方程的解会在有限时间内产生奇点。该结果尚未得到独立数学界的验证，据报道还引发了优先权争议。 如果该结论正确，它将解决流体力学中一个悬而未决近百年的难题，并成为 AI 驱动数学发现的一个里程碑，可能改变该领域攻克开放问题的方式。即便尚未验证，它也加剧了关于 AI 能否产出可信证明以及这类声明应如何被验证的争论。 克莱数学研究所规定，千禧年大奖难题的解答必须在发表至少两年后才会被正式审议，而 OpenAI 表示无意申领 100 万美元奖金。该证明关于有限时间奇点形成的结论，与人们普遍预期的光滑解始终存在这一可能性相矛盾。

google_news · DongA Science · 9月23日 05:59

**背景**: 纳维-斯托克斯方程描述流体的运动，是物理学和工程学的核心，但数学家从未证明三维情况下光滑解是否始终存在，或者是否会失效。克莱数学研究所于 2000 年将这一问题连同另外六个问题列为千禧年大奖难题，每项悬赏 100 万美元；迄今只有庞加莱猜想被正式解决，由格里戈里·佩雷尔曼于 2010 年完成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_existence_and_smoothness">Navier–Stokes existence and smoothness - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Millennium_Prize_Problems">Millennium Prize Problems</a></li>
<li><a href="https://openai.com/index/navier-stokes-solution/">On the Navier–Stokes Millennium Prize Problem | OpenAI</a></li>

</ul>
</details>

**社区讨论**: 数学界的线上讨论对 AI 生成的证明是否构成真正的新数学表示怀疑，许多人认为这类结果需要经过严格的独立验证才能被认真对待。一些评论者将 AI 视为未来定理证明的加速器，另一些人则担忧炒作以及未经证实的声明扩散的风险。

**标签**: `#AI`, `#mathematics`, `#Navier-Stokes`, `#Millennium Prize`, `#OpenAI`

---

<a id="item-10"></a>
## [研究者将广告拍卖嵌入大模型 Token 生成过程](https://news.google.com/rss/articles/CBMiU0FVX3lxTFBEZ3dIQnZ4cWZscWVBRVVIcVVuSm5HSW1FSTBqcEMwLVBISEpxZGFBRUVZc2h6cXpZOTUwcnY5Mlh0NGdtTnJWcnYySHVlUXlUSTZn?oc=5) ⭐️ 7.0/10

来自中国人民大学、GL Ventures 和斯坦福大学的研究者提出了一种名为“拍卖嵌入式 Token 生成”（LAMA）的方法，将搜索广告直接整合进大语言模型逐 Token 输出的过程中。在每一步生成时，广告主报告将答案引向不同方向的价值，平台将这些出价与基础语言模型结合来选择下一个 Token，同时更新每个广告主赢得最终曝光的概率。 这项工作回应了一个快速浮现的挑战：随着基于大模型的搜索引擎直接回答查询，传统搜索广告位正受到冲击，出版商已报告流量下降高达 40%。将拍卖嵌入 Token 生成可能为谷歌、OpenAI 等平台提供一种新的 AI 答案变现方式，进而可能重塑价值数千亿美元的数字广告市场。 该方法被称为 LAMA，将生成视为分配：广告主在每一步 Token 生成时对答案方向进行出价，平台联合决定下一个 Token 并更新获胜概率。这目前是一项研究提案而非已部署的产品，因此关于延迟、用户体验和拍卖公平性的问题仍待解答。

google_news · eu.36kr.com · 9月23日 03:41

**背景**: 大语言模型逐 Token 生成文本，根据上下文预测下一个 Token。传统搜索广告依赖关键词拍卖，广告主竞标搜索结果旁边的展示位置。随着基于大模型的助手越来越多地直接回答问题，经典广告位模式正在瓦解，促使研究者探索如何将拍卖机制编织进生成过程本身。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.besthub.dev/articles/generation-as-allocation-lama-embeds-ad-auctions-into-llm-token-generation-5eec33fbecfd">Generation as Allocation: LAMA Embeds Ad Auctions Int… | BestHub</a></li>
<li><a href="https://www.singular.net/blog/llm-search-advertising/">The emerging LLM search advertising landscape: infographic</a></li>
<li><a href="https://www.forbes.com/councils/forbestechcouncil/2025/08/27/why-llm-advertising-could-change-the-search-industry/">Council Post: Why LLM Advertising Could Change The Search Industry</a></li>

</ul>
</details>

**标签**: `#LLM`, `#advertising`, `#auction-mechanisms`, `#search`, `#AI-economics`

---

<a id="item-11"></a>
## [阿里巴巴发布真武 V900 AI 芯片及扩展模型，股价大涨 5%](https://news.google.com/rss/articles/CBMijAFBVV95cUxQME4yQ0R4cVZ2Qm41ZzVVcG8wRTRzMmRSei0yUFlRTnlLMGZhZmNVRktYLXRlT3JTeW1MMnhvV3NST0JqNzNPUDk3RlUzRUFzYThkWnJhLXY4a0VYVUZxM0kxZWwzUjlOQVl3ejd4ZFQxcmpyYUdDYUE2b0tZaVNCRC1yR0wzLXFuSS1Lbg?oc=5) ⭐️ 7.0/10

阿里巴巴发布了新一代真武 V900 AI 芯片，并称其为目前中国最强大的 AI 芯片，同时公布了扩展后的 AI 模型，推动其股价上涨 5%。真武 V900 计划于 2027 年第一季度量产并商用，阿里巴巴还预告了一款参数规模高达 10 万亿的模型。 这标志着在美国出口管制背景下，中国在 AI 芯片自主可控方面迈出重要一步，使阿里巴巴成为英伟达在国内加速器市场的直接挑战者。股价 5%的涨幅表明市场高度认可阿里巴巴覆盖芯片、云数据中心和大模型的整合式 AI 战略。 据报道，真武 V900 的性能是阿里巴巴现有真武芯片的三倍，阿里巴巴计划借助它在 2032 年前支撑 20GW 的数据中心容量。该芯片预计要到 2027 年第一季度才会量产，这意味着它距离商业化上市还有一段时间。

google_news · briefasia.com · 9月23日 10:34

**背景**: AI 芯片（也称加速器）是类似英伟达 GPU 的专用处理器，用于承担训练和运行大型 AI 模型所需的海量计算。美国的出口管制限制了中国企业获取英伟达先进芯片的渠道，促使阿里巴巴、华为、百度等国内厂商自主研发替代方案。阿里巴巴的 Qwen 系列大语言模型是其 AI 布局的核心，而将自研芯片与自有模型及云基础设施相结合，是其战略的关键。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/09/22/alibaba-ai-alibabacloud-zhenwu-v900-.html">Alibaba shares jump as new AI chip, data center buildout plans unveiled - CNBC</a></li>
<li><a href="https://www.bloomberg.com/news/articles/2026-09-22/alibaba-unveils-ai-chip-to-drive-20gw-of-data-centers-by-2032">Alibaba Unveils New AI Chip, Calls It China's Most Powerful - Bloomberg.com</a></li>
<li><a href="https://www.reddit.com/r/hardware/comments/1wn1ev0/alibaba_unveils_chinas_top_ai_chip_teases/">Alibaba unveils 'China's top AI chip', teases 10-trillion-parameter model : r/hardware</a></li>

</ul>
</details>

**社区讨论**: r/hardware 上的讨论聚焦于真武 V900 宣称的三倍性能提升以及预告的 10 万亿参数模型，评论者既对中国芯片的进展表示关注，也对其性能宣称能否在真实工作负载中与英伟达抗衡持怀疑态度。

**标签**: `#AI chips`, `#Alibaba`, `#semiconductors`, `#AI models`, `#tech industry`

---
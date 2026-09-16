---
layout: default
title: "Horizon Summary: 2026-09-16 (ZH)"
date: 2026-09-16
lang: zh
---

> 从 47 条内容中筛选出 5 条重要资讯。

---

1. [Prior Labs 发布 TabPFN-3.5，新的表格基础模型 SOTA](#item-1) ⭐️ 8.0/10
2. [俄罗斯情报机构据报利用 Claude AI 逆向工程军用无人机](#item-2) ⭐️ 8.0/10
3. [Simon Willison 为 Gemini 3.8 Live 打造浏览器语音界面](#item-3) ⭐️ 7.0/10
4. [IBM 的 ALTK-Evolve 解决 AI 智能体一致性难题](#item-4) ⭐️ 7.0/10
5. [44M 三值量化大模型以 19.8 MB 在 CPU 上达到 1,900 tok/s](#item-5) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Prior Labs 发布 TabPFN-3.5，新的表格基础模型 SOTA](https://www.reddit.com/r/MachineLearning/comments/1wh4xhy/tabpfn35_is_released_as_the_next_sota_tabular/) ⭐️ 8.0/10

Prior Labs 发布了 TabPFN-3.5，这是一款新的表格基础模型，在 TabArena 和 BeyondArena 两个基准测试中均排名第一，支持最多 100 万行和 2 万个特征。此次发布包含三个变体：TabPFN-3.5-Fast（alpha 阶段，比基础模型快 6 倍）、TabPFN-3.5-Thinking（通过 API 以计算换精度）以及 TabPFN-3.5-Plus。 TabPFN-3.5 在 BeyondArena 的文本丰富、高基数和高维数据上取得领先表现，表明表格基础模型正在挑战传统树模型在非 IID 场景下的优势。这对处理真实世界表格数据的机器学习从业者意义重大，因为梯度提升树长期占据主导地位。 在 BeyondArena 上，TabPFN-3.5 比之前最强基线高出 250 Elo 分，比之前的总领先者高出 150 Elo 分；TabPFN-3.5-Thinking 在 BeyondArena 上比基础模型提升 20 Elo，在 TabArena 上提升 44 Elo。Fast 变体仍处于 alpha 阶段，而 Thinking 变体仅能通过 API 使用。

reddit · r/MachineLearning · /u/tuanacelik · 9月15日 16:18

**背景**: TabPFN（表格先验数据拟合网络）是 Prior Labs 推出的表格数据基础模型，旨在无需针对特定任务训练即可在小数据集上做出准确预测。TabArena 是一个持续维护的“活”基准，用于评估表格机器学习模型；BeyondArena 则将评估扩展到 IID 之外，涵盖时间序列和分组任务。表格数据基础模型试图将改变 NLP 和视觉领域的预训练范式引入结构化数据领域，而该领域传统上由 XGBoost 和 LightGBM 等梯度提升树占据主导。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/TabPFN">TabPFN - Wikipedia</a></li>
<li><a href="https://github.com/autogluon/tabarena">GitHub - autogluon/tabarena: A Living Benchmark for Machine Learning ...</a></li>
<li><a href="https://huggingface.co/datasets/TabArena/BeyondArena">TabArena/BeyondArena · Datasets at Hugging Face</a></li>

</ul>
</details>

**标签**: `#tabular-data`, `#foundation-models`, `#machine-learning`, `#benchmarking`, `#SOTA`

---

<a id="item-2"></a>
## [俄罗斯情报机构据报利用 Claude AI 逆向工程军用无人机](https://news.google.com/rss/articles/CBMi1AFBVV95cUxQNGZqVEsxZUJSSFhjaVUzX21ZSnR5d1M0bXlFbFNGSS1OZlp0MS1pUDNGM21ueG9URWRXdUo3MERjcFZqN28yUmJnc281RmQ4MVJpN2VPSWo0cGJqT0t1Q01VX1Fjbkd2MEpQQzNLQ2FNMDRpT1lPcS1VRlF2MFNmNHQ5cG9xaEFwNGFya0tiLWtwVTJzN0pHSHlSU3MzcUk3aDFOMDZVbHRxbklnWDlWM0l4SnYxeV9ldkFFTVVoLXZFNUswcmpqYXlTckEtbWhTTEdkWQ?oc=5) ⭐️ 8.0/10

据 Escudo Digital 报道，俄罗斯情报机构一直在使用 Anthropic 公司的 Claude 大语言模型来逆向工程军用无人机的视觉系统，并开发规避网络防御的技术。报道称，Claude 被用于重建无人机的产品架构、硬件物料清单和供应商依赖关系，甚至揭示了某款尚未公布产品的细节。 该报道凸显了先进语言模型的双重用途风险，表明国家情报机构可以将一款为安全和生产力而设计的商业 AI 助手改用于军事侦察和网络规避。这为 AI 开发者、政策制定者和网络安全专业人员提出了紧迫问题，涉及出口管制、使用监控以及广泛可及的前沿模型所带来的地缘政治影响。 报道具体提到，Claude 被用于逆向工程无人机的视觉系统，重建其产品架构、硬件物料清单和供应商依赖关系，并揭示某款未公布产品的细节。然而，该消息仅来自单一新闻来源，缺乏深入的技术细节，目前尚不清楚使用的是哪个具体的 Claude 模型版本，以及该情报机构是如何获得访问权限的。

google_news · Escudo Digital · 9月15日 05:20

**背景**: Claude 是 Anthropic 公司开发的一系列大语言模型，于 2023 年 3 月作为 AI 聊天机器人发布，经过训练以确保安全、准确和可靠。逆向工程是指通过分析产品来理解其设计、组件和制造过程，已被用于军事领域，例如伊朗对捕获的美国无人机的研究。AI 正日益塑造网络安全军备竞赛，攻击者利用强化学习和生成对抗网络等技术来制造能够规避防御的攻击。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Claude_(AI)">Claude ( AI ) - Wikipedia</a></li>
<li><a href="https://www.escudodigital.com/en/cybersecurity/russian-intelligence-uses-claude-reverse-engineer-military-drones-evade-cyber-defences.html">Russian intelligence uses Claude to reverse - engineer military drones ...</a></li>
<li><a href="https://theconversation.com/how-ai-is-shaping-the-cybersecurity-arms-race-167017">How AI is shaping the cybersecurity arms race</a></li>

</ul>
</details>

**标签**: `#AI security`, `#cyber warfare`, `#LLM misuse`, `#military drones`, `#geopolitics`

---

<a id="item-3"></a>
## [Simon Willison 为 Gemini 3.8 Live 打造浏览器语音界面](https://simonwillison.net/2026/Sep/15/gemini-live/) ⭐️ 7.0/10

谷歌发布了 Gemini 3.8 Live 和 3.8 Live Extended Thinking 两款新的语音到语音模型，Simon Willison 随即发布了一个基于浏览器的语音聊天工具供人们试用。该工具允许用户选择模型和语音预设、可选地设置系统提示词，并进行语音对话，还支持在模型说话时打断它。 该工具让开发者和好奇的用户无需编写任何代码，就能立即上手体验谷歌最新的实时语音模型，这在语音到语音成为各大 AI 实验室重要竞争领域的当下意义重大。它也展示了一个独立开发者能多快地把刚发布的 API 变成可用的演示，从而降低了评估新语音能力的门槛。 该实现不使用任何第三方库：它直接连接谷歌的 BidiGenerateContent WebSocket 端点，并使用 Web Audio API 的 AudioContext 同时完成麦克风采集和音频播放。界面包含会话控制、麦克风电平表、计时器、可下载和清空的实时转录文本，以及一个文本输入框——发送消息会打断当前正在播放的语音回复。

rss · Simon Willison · 9月15日 22:47

**背景**: 语音到语音模型在单一系统内处理语音输入并生成语音输出，避免了将语音识别、语言模型和文本转语音等独立组件串联所带来的延迟。谷歌的 Gemini 3.8 Live 模型定位为快速、高性价比、适合对延迟敏感的实时对话场景，形态上与 OpenAI 的 GPT-Live 系列相似，后者采用可同时听和说的全双工架构。Simon Willison 是一位知名开发者和技术作者，经常发布用于试验新 AI 模型的单文件小型网页工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/">New Gemini Audio models for developers - The Keyword</a></li>
<li><a href="https://openai.com/index/introducing-gpt-live/">Introducing GPT-Live | OpenAI</a></li>
<li><a href="https://deepgram.com/learn/speech-to-speech-models-enterprise-explained">Speech-to-Speech Models for Enterprise: Real-Time Voice AI Guide</a></li>

</ul>
</details>

**标签**: `#AI`, `#Gemini`, `#speech-to-speech`, `#LLM`, `#developer-tools`

---

<a id="item-4"></a>
## [IBM 的 ALTK-Evolve 解决 AI 智能体一致性难题](https://huggingface.co/blog/ibm-research/altk-evolve-consistency) ⭐️ 7.0/10

IBM Research 在 Hugging Face 上发布了一篇博客文章，介绍了 ALTK-Evolve 框架，该框架不仅评估 AI 智能体在单次任务上的成功，还评估其在多次重复运行中持续复现成功的能力。该框架在 AppWorld 上进行了评估，智能体通过 API 完成现实的多步骤任务，平均涉及 1.8 个应用、9.5 次 API 调用。 一致性是智能体评估中一个关键但常被忽视的维度，因为一个只能间歇性成功的智能体在生产部署中是不可靠的。该框架填补了智能体基准测试中的一个重要空白，很可能引起构建真实世界智能体系统的从业者的高度关注。 ALTK-Evolve 将智能体的经验转化为可复用的即时指导，在不膨胀上下文的情况下提高现实多步骤任务（尤其是困难任务）的可靠性。它使用 MCP 服务器进行工具集成、向量存储作为记忆，并通过基于 LLM 的冲突解决来优化其知识库，同时能与流行的智能体技术栈顺畅集成。

rss · Hugging Face Blog · 9月15日 16:00

**背景**: AI 智能体是由大语言模型驱动的系统，能够通过调用工具和 API 来规划和执行多步骤任务。像 SWE-bench 和 WebArena 这样的传统基准测试衡量智能体能否完成任务，但通常每个任务只运行一次，忽略了如果再次尝试同一任务智能体是否仍能成功。一致性评估通过衡量智能体在多次重复运行中复现成功的可靠程度来解决这一问题，这对于可信部署至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ibm.com/new/announcements/altk-evolve-on-the-job-learning-for-ai-agents">ALTK Evolve: On‑the‑job learning for AI agents now ... - IBM</a></li>
<li><a href="https://huggingface.co/blog/ibm-research/altk-evolve">ALTK‑Evolve: On‑the‑Job Learning for AI Agents</a></li>
<li><a href="https://github.com/AgentToolkit/altk-evolve">GitHub - AgentToolkit/altk-evolve: Self improving agents ...</a></li>

</ul>
</details>

**标签**: `#AI agents`, `#evaluation`, `#consistency`, `#benchmarking`, `#IBM Research`

---

<a id="item-5"></a>
## [44M 三值量化大模型以 19.8 MB 在 CPU 上达到 1,900 tok/s](https://www.reddit.com/r/MachineLearning/comments/1wgzpli/i_trained_a_44m_parameter_quantized_llm_from/) ⭐️ 7.0/10

一位开发者发布了 SHADOW-50M，这是一个从零开始、在 45B token 上训练的 44M 参数语言模型，完整模型仅 19.8 MB，采用三值 {-1,0,+1} 权重，在笔记本 CPU 上以约 1,900 tok/s 运行，内存占用约 41 MB。该模型使用 73,880 词表，以固定 512 位指纹而非训练得到的嵌入表表示，并配有一个 159 KB 的编译内核，同一内核编译为 WebAssembly 后可在浏览器中约 500 tok/s 运行。 这表明，极端的三值量化结合基于指纹的词表和极小的编译内核，可以让语言推理在普通 CPU 甚至浏览器标签页中可行，无需 GPU 或云服务。它为完全离线、内存映射的边缘 AI 指出了一条实用路径，使大型档案库能以极低内存被查询。 SHADOW-50M 是概念验证而非产品：在 ARC-Easy（0.307 对 0.435）、PIQA（0.570 对 0.600）和 WikiText-2 困惑度（186 对 165）等标准基准上，它不如 51.8M 参数的 bf16 Llama 风格模型 Supra-50M-Reasoning。它的优势在于算术、日期、百分比和记录检索，通过 1 比特注意力状态磁盘存储（288 字节/token）和 22 字节/token 的索引实现，并带有持久化痕迹，使 top-1 检索率在未重新训练的情况下从 0.571 提升到 0.743。

reddit · r/MachineLearning · /u/Final-Data-1410 · 9月15日 12:59

**背景**: 三值量化将神经网络权重映射为三个离散值 {-1, 0, +1}，大幅缩小模型体积并支持快速整数运算，但通常会导致质量下降，不如全精度或 8 比特权重。这里的基于指纹的词表是指每个 token 由固定的 512 位编码表示，而非学习得到的嵌入向量，从而节省内存并避免训练嵌入表。编译内核是预先构建的底层例程，能在特定目标（此处为 CPU 和 WebAssembly）上高效执行模型运算。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.emergentmind.com/topics/ternary-quantization">Ternary Quantization in Neural Networks - Emergent Mind</a></li>
<li><a href="https://arxiv.org/abs/2303.01505">[2303.01505] Ternary Quantization: A Survey - arXiv</a></li>
<li><a href="https://arxiv.org/pdf/2309.08978">Empowering In-Browser Deep Learning Inference on Edge Devices...</a></li>

</ul>
</details>

**社区讨论**: 作者指出，前作 SHADOW-250M 在 r/MachineLearning 获得 360 个赞、在 r/LocalLLaMA 获得 293 个赞以及 94 个 GitHub star，表明社区对小型、CPU 友好模型有浓厚兴趣。讨论将 SHADOW-50M 定位为专注于推理与计算的实验性后续工作，而非基准测试领先者，作者也刻意公布较弱的基准结果以保持对局限性的透明。

**标签**: `#quantization`, `#efficient-inference`, `#language-models`, `#edge-computing`, `#ternary-weights`

---
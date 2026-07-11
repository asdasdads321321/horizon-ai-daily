---
layout: default
title: "Horizon Summary: 2026-07-12 (ZH)"
date: 2026-07-12
lang: zh
---

> 从 48 条内容中筛选出 7 条重要资讯。

---

1. [OpenAI 获美国政府批准广泛部署 GPT-5.6](#item-1) ⭐️ 9.0/10
2. [vLLM v0.25.0：Model Runner V2 成为默认，PagedAttention 被移除](#item-2) ⭐️ 8.0/10
3. [VultronRetriever 模型登顶 MTEB 排行榜](#item-3) ⭐️ 8.0/10
4. [中国芯片公司在 AI 热潮和美国限制下创下收入纪录](#item-4) ⭐️ 7.0/10
5. [AI 公司推动削弱澳大利亚版权法](#item-5) ⭐️ 7.0/10
6. [AI 自主设计实验发现急性髓系白血病药物组合](#item-6) ⭐️ 7.0/10
7. [摩根大通 AI 代理在回测中击败 60/40 投资组合](#item-7) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [OpenAI 获美国政府批准广泛部署 GPT-5.6](https://news.google.com/rss/articles/CBMiqwFBVV95cUxOUW5JUVlTaDMxenMzMmdudFhFSFRIMUh4NkpkUkVqeWVQdXE5bFkxX281eUZic0NJcVVvYWlZYXVGalNFcjA5RXVsbWZ0WEhiZmdPOWcxYjVLd0tWMDFEcTdoS0VfVVBoMF9FRFJmdDcxdm5pbW96ck5vUnJ2NUpNMktwaTN2dnFkTGtsWGV1QTdaY1dBcm80dVlwY3dyQ1NLbVAwTVR4b2RkNlE?oc=5) ⭐️ 9.0/10

OpenAI 已获得美国政府批准，广泛部署其 GPT-5.6 模型系列，该系列包括三个版本：Luna、Terra 和 Sol。这标志着首个主要 AI 模型获得此类监管许可进行大规模部署。 这一批准为美国 AI 监管树立了先例，可能加速先进 AI 在政府和企业中的采用。它也表明 AI 开发者与监管机构之间的合作关系，可能影响未来的 AI 政策。 GPT-5.6 系列包括 Sol，这是为编码、网络安全和研究等复杂任务设计的最强大模型。然而，审批过程仍不透明，六个内阁机构需在 8 月前制定正式框架。

google_news · BW Businessworld · 7月11日 06:09

**背景**: 美国政府一直在制定 AI 指南，包括 2024 年 11 月的一份备忘录，概述了政府在 AI 发展中的角色。GPT-5.6 的批准正值简化 AI 基础设施许可和确保国家安全的持续努力中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt">GPT-5.6 in ChatGPT | OpenAI Help Center</a></li>
<li><a href="https://www.aichatdaily.com/ai-security/openai-releases-sol-no-clear-us-government-approval">OpenAI releases Sol with no clear US government approval process — AI Chat Daily</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#GPT-5.6`, `#AI regulation`, `#government approval`

---

<a id="item-2"></a>
## [vLLM v0.25.0：Model Runner V2 成为默认，PagedAttention 被移除](https://github.com/vllm-project/vllm/releases/tag/v0.25.0) ⭐️ 8.0/10

vLLM v0.25.0 将 Model Runner V2 设为所有稠密模型的默认执行路径，移除了旧的 PagedAttention 实现，并引入了新的流式解析引擎，同时新增了对 GLM-5 和 MiniMax-M3 等多个新模型的支持。 此版本标志着 vLLM 的重大架构转变，简化了代码库并提升了稠密模型的性能，惠及大规模 LLM 推理生态系统。PagedAttention 的移除和新的流式解析引擎提高了生产部署的效率和功能。 Model Runner V2 现在支持 EVS、实时嵌入、Mamba 混合模型的前缀缓存，以及带有完整 CUDA 图的动态推测解码。Transformers 建模后端已优化至与原生 vLLM 速度相当，此版本包含来自 232 位贡献者的 558 次提交。

github · khluu · 7月11日 20:06

**背景**: vLLM 是一个开源的高吞吐量 LLM 推理引擎，使用 PagedAttention 高效管理键值缓存内存。Model Runner V2 是一个较新的执行后端，旨在统一和优化模型执行路径。移除旧的 PagedAttention 表明已完全迁移到 V1/MRv2 后端。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm/releases">Releases · vllm -project/ vllm</a></li>
<li><a href="https://docs.vllm.ai/en/latest/design/paged_attention/">Paged Attention - vLLM</a></li>
<li><a href="https://docs.vllm.ai/en/latest/models/supported_models/">Supported Models - vLLM</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#open source`, `#AI infrastructure`, `#release`

---

<a id="item-3"></a>
## [VultronRetriever 模型登顶 MTEB 排行榜](https://www.reddit.com/r/MachineLearning/comments/1utmxq8/vultronretriever_family_of_models_released_on/) ⭐️ 8.0/10

VultronRetriever 系列检索模型已在 HuggingFace 上发布，在 MTEB 排行榜上获得第一名，索引存储占用减少高达 16 倍，吞吐量提升 12 倍，并且能够在 iPhone 上完全离线运行。 这一突破使得在边缘设备上实现高性能检索成为可能，大幅降低存储和延迟，有望为移动和物联网应用普及先进的搜索与问答能力。 该系列包含三个模型：VultronRetrieverPrime-8B（全球第一）、VultronRetrieverCore-4.5B（仅次于 Prime）和 VultronRetrieverFlash-0.8B（性能超过其 5 倍大小的模型）。所有模型均采用 Hydra 架构实现后期交互检索，并在零跨数据集重复和零评估污染的数据集上训练。

reddit · r/MachineLearning · /u/madkimchi · 7月11日 15:22

**背景**: 检索模型用于根据查询从大型语料库中找出相关文档或段落，是搜索引擎和问答系统等许多 NLP 系统的核心组件。MTEB 排行榜对嵌入模型进行多任务基准测试。Hydra 架构支持高效的后期交互，在精度和内存之间取得平衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/spaces/mteb/leaderboard">MTEB Leaderboard - a Hugging Face Space by mteb</a></li>
<li><a href="https://docs.vultr.com/models">Model Library | Vultr Docs</a></li>

</ul>
</details>

**标签**: `#retrieval`, `#MTEB`, `#edge AI`, `#embedding`, `#NLP`

---

<a id="item-4"></a>
## [中国芯片公司在 AI 热潮和美国限制下创下收入纪录](https://news.google.com/rss/articles/CBMi_gNBVV95cUxQYnc1cTJCUWZIaENDN0JPRWt1RUhaU05xSENNRHM3YkRHWG5walVtQzZ6QnVnbUphTXJPcGs5dG5wa1NGcnJzM3B1cnVJeUFPZDJPX1Z5NEZXNzdTV21wTWdCc2RoZFVoRGlvWnprQ0NQSWlRdlVhdWlFaFFrbGMxaUN0a3AyTTlDSVlEWm9MUjNMTnV4UnZ0b2ZRekRhMG1NWVpzdHQ2TVc2VjN4REZUZDdqdi1vdkdPc3dtX1V5R3RxdmE1QXVpNzFxVkltR1ZSV04tTDFjaHJZNHJxTkd1cHpOcE9CMm9pRXRIX2ZZQVBlLXFGUlI1al93eHB6TXdhRjBCeUxxWVZreXAtSEVRbFdURGlIUkE1UXE0TF9zbzlXelpKWGFQSnZDelJfSWl0cVlsZFNxSkczRHJ2MjloU01ONi1xRGJ4VUEtNkhSQkt4Vk1HNjcyM1Bxa2ZrbmlSRXZERXZrTEJrNUVseWdZQWRuUmJjeE9MQnh0czcxOWtSTWdQdnVjV3lNalExVjlBQnVVZllhQlFUSXJTTDdPM2JMNUNibl9WSzhjQjZjR3VRM3hZYUNmNUxBMmdfbnFkWWJBNjlESTZiS2JYVm1IaUI3Q01ITXBma2N0NFYxNDkxWmI3eTdhTTdkVE10ZEQ5QTFLZi15azlRbF9xc1E?oc=5) ⭐️ 7.0/10

2025-2026 年，中国半导体公司在 AI 需求激增和美国出口限制的推动下，实现了创纪录的收入，这促使北京推广国产替代品。 这一趋势凸显了中国在半导体领域加速自给自足的能力，以及在地缘政治紧张局势下利用 AI 增长的能力，正在重塑全球芯片供应链。 美国对英伟达芯片出口中国的限制促使华为等本土企业用国产替代品填补空白，尽管性能仍有差距。全球增长最快的 20 家芯片公司中有 19 家来自中国，而 2020 年只有 8 家。

google_news · MSN · 7月11日 14:14

**背景**: 自 2022 年以来，美国对中国的先进计算和半导体设备实施出口管制，旨在遏制中国的技术进步。作为回应，中国加速了国产芯片的研发，而 AI 热潮也推动了全球半导体需求。全球半导体行业预计 2026 年销售额将达到 9750 亿美元。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/04/03/chinese-chip-firms-record-revenue-ai-boom-us-curbs.html">Chinese chip firms post record high revenue on AI boom, U.S. curbs</a></li>
<li><a href="https://en.wikipedia.org/wiki/United_States_New_Export_Controls_on_Advanced_Computing_and_Semiconductors_to_China">United States New Export Controls on Advanced Computing and Semiconductors to China - Wikipedia</a></li>
<li><a href="https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/semiconductor-industry-outlook.html">2026 Semiconductor Industry Outlook | Deloitte Insights</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#AI`, `#geopolitics`, `#China`, `#industry trends`

---

<a id="item-5"></a>
## [AI 公司推动削弱澳大利亚版权法](https://news.google.com/rss/articles/CBMisgFBVV95cUxPZm1ZbGlKbjZncnFvcFdJLUhFekxmNU52Ml9xekhNSTR2TUFGSkxkWThzLV9TcE9sbmp0YUNLZFZRd0VpM2hiclhJLWw2SFhtWlNnZWgxWmZtWjBIaEtLMkc0XzlqSzlaRmdBdjNTWDctdzJhWkM0ck0zekxMMS1DOUZ0MXZGVk1JeEtpZW05UE1veWtGcEVzalNaWm9qeVB5N2VFNWpmQVVFajNxQ2NxUTFR?oc=5) ⭐️ 7.0/10

AI 公司正在游说澳大利亚政府放宽版权法，引发艺术家愤怒，并导致工党内部分裂。 这场辩论可能为全球 AI 训练数据的监管树立先例，影响创作者的权利和 AI 发展的未来。 《卫报》的报道称，工党政府在这个问题上存在分歧，一些部长支持对艺术家提供更严格的版权保护。

google_news · The Guardian · 7月11日 20:00

**背景**: 版权法保护原创作品免遭未经授权的使用。AI 公司经常在可能包含受版权保护材料的大型数据集上训练模型，导致法律纠纷。澳大利亚目前正在审查其版权框架，以应对与 AI 相关的挑战。

**标签**: `#AI`, `#copyright`, `#Australia`, `#policy`, `#artists`

---

<a id="item-6"></a>
## [AI 自主设计实验发现急性髓系白血病药物组合](https://news.google.com/rss/articles/CBMiVEFVX3lxTE9Bd1NveG1JOGp0Z3RDVXh2aGF5Z3l0eENUTWVUWXdqR1hIMjlCcFVqajBIR0FaS1F2YnJ2NGlBaUJseDhaa3RXOXpySFVrZTRUSmhCVg?oc=5) ⭐️ 7.0/10

一个 AI 系统自主提出假设并设计实验，成功识别出针对急性髓系白血病（AML）的有效药物组合，标志着向全自动化科学发现迈出一步。 这展示了 AI 在加速药物发现方面的潜力，通过减少假设生成和实验设计中的人力投入，可能加快 AML 及其他疾病治疗方法的开发。 该 AI 系统不仅识别出候选药物组合，还设计并执行了验证实验，展示了生物医学研究中的端到端自动化能力。

google_news · 동아사이언스 · 7月10日 23:00

**背景**: 急性髓系白血病是一种快速生长的血液和骨髓癌症，常需联合治疗。传统药物发现耗时且昂贵，研究人员需手动生成假设并运行实验。AI 此前已用于药物发现，但通常仅用于筛选等特定任务；在假设生成和实验设计上实现完全自主是一项重大进步。

**标签**: `#AI`, `#drug discovery`, `#acute myeloid leukemia`, `#biomedical research`

---

<a id="item-7"></a>
## [摩根大通 AI 代理在回测中击败 60/40 投资组合](https://news.google.com/rss/articles/CBMiuAFBVV95cUxPSUxMOEh6SGV6RjlVZ3RGb18wMG9zMUI1eXJudjRBQmZXaWxQV1FyRmxqak1KU1NjM0lmZ1lsbEk5RW5Hd1IzX1NnSDJCR3VMVGVEZ1YyUWVuM0dTcDdMeEJQbGZQaFhDUTFZT1U4U1FPYXZsNG94UW5iR0VUNzdSSHU4amh3TUE2dS1RZ2NNcWtQNTVWbXRVMmh5RU4xZ3FfVDJEZVkwV0g0UlV3TklSekVPUVNsaHdz?oc=5) ⭐️ 7.0/10

据《卢森堡时报》报道，摩根大通开发了在回测中表现优于传统 60/40 投资组合模型的 AI 代理。 这标志着 AI 在金融领域的重大实际应用，可能重塑投资组合管理策略，并挑战长期存在的投资基准。 这些 AI 代理在回测中与经典的 60/40 投资组合（60%股票，40%债券）进行了对比，并取得了更优的结果，但具体表现指标未披露。

google_news · Luxembourg Times · 7月11日 01:30

**背景**: 60/40 投资组合几十年来一直是标准的平衡投资策略，通过股票提供增长，通过债券提供稳定性。金融领域的 AI 代理利用机器学习分析数据并做出交易决策，通常能改进传统的基于规则的策略。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.morningstar.com/podcasts/investing-insights/elevate-your-6040-portfolio-with-these-simple-tweaks">Elevate Your 60 / 40 Portfolio With These Simple Tweaks | Morningstar</a></li>
<li><a href="https://myretirementnetwork.com/rethinking-60-40-the-portfolio-that-built-an-era-but-can-it-still-hold/">Rethinking 60 / 40 : The Portfolio That Built an... - My Retirement Network</a></li>
<li><a href="https://www.linkedin.com/pulse/6040-portfolio-still-relevant-merlyn-black-ejo4e">Is the 60 / 40 portfolio still relevant?</a></li>

</ul>
</details>

**标签**: `#AI`, `#finance`, `#machine learning`, `#portfolio management`

---
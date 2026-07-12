---
layout: default
title: "Horizon Summary: 2026-07-13 (ZH)"
date: 2026-07-13
lang: zh
---

> 从 49 条内容中筛选出 5 条重要资讯。

---

1. [Zer0Fit MCP 服务器封装谷歌 TabFM 和 TimesFM 实现零样本机器学习](#item-1) ⭐️ 8.0/10
2. [谷歌 TurboQuant AI 压缩技术降低数据中心能耗](#item-2) ⭐️ 7.0/10
3. [AI 模型比人类更容易被提示误导](#item-3) ⭐️ 7.0/10
4. [AI 公司推动削弱澳大利亚版权，艺术家抗议](#item-4) ⭐️ 7.0/10
5. [智能材料像电脑芯片一样控制热量](#item-5) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Zer0Fit MCP 服务器封装谷歌 TabFM 和 TimesFM 实现零样本机器学习](https://www.reddit.com/r/MachineLearning/comments/1uue8cc/zer0fit_i_took_googles_new_tabfm_timesfm_ml/) ⭐️ 8.0/10

一名研究生创建了 Zer0Fit，这是一个 MCP 服务器，封装了谷歌的 TabFM 和 TimesFM 基础模型，可通过 Open WebUI 等聊天界面实现零样本分类、回归和时间序列预测。 该项目通过简单的 MCP 接口，让非专家也能使用谷歌强大的零样本表格和时间序列模型，降低了之前需要大量模型训练和调优的机器学习任务的门槛。 Zer0Fit 在单个 Docker 容器中运行两个模型，需要 16GB VRAM（仅 CUDA），并支持动态加载/卸载模型（TTL 5 分钟）。在 Iris 数据集上达到 94.7% 准确率，在加州房价回归任务上 R² 为 0.91。

reddit · r/MachineLearning · /u/Porespellar · 7月12日 12:32

**背景**: TabFM 和 TimesFM 是谷歌研究团队分别针对表格数据和时间序列预测开发的基础模型。它们利用上下文学习进行零样本预测，无需微调。MCP（模型上下文协议）是一种将 AI 模型连接到工具和数据源的标准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/">Introducing TabFM: A zero-shot foundation model for tabular data</a></li>
<li><a href="https://github.com/google-research/tabfm">GitHub - google-research/tabfm</a></li>
<li><a href="https://github.com/google-research/timesfm">google-research/ timesfm : TimesFM ( Time Series Foundation Model )...</a></li>

</ul>
</details>

**标签**: `#MCP`, `#foundation models`, `#zero-shot learning`, `#time series`, `#tabular data`

---

<a id="item-2"></a>
## [谷歌 TurboQuant AI 压缩技术降低数据中心能耗](https://news.google.com/rss/articles/CBMiX0FVX3lxTE4zN3hmVnJYbVJiRU1aUHF5MnBTZ0YxZFpCdTE3QnNmSUtYeWZ5TUw0T29MM1JTWVRKSnIwbWpPVWQybVdJRktxT19kdDJJVVNBVmRva0MtRng3ampzSnRj?oc=5) ⭐️ 7.0/10

谷歌研究院推出了 TurboQuant，这是一种针对大语言模型和向量搜索引擎的压缩算法，可大幅降低数据中心的显存需求和能耗。 这一突破解决了 AI 数据中心能耗飙升的问题，使大规模 AI 部署更加可持续和成本效益，并可能加速代理式 AI 的采用。 TurboQuant 是一种压缩算法，可在不显著损失性能的情况下减少 AI 模型的显存占用，由于压缩模型能更高效地利用现有硬件，反而可能增加对 AI 显存的需求。

google_news · Mashable · 7月12日 17:19

**背景**: 数据中心消耗大量电力，AI 工作负载进一步推高了能源使用。像 TurboQuant 这样的压缩技术旨在减少 AI 推理所需的显存和计算，降低运营成本和环境影响。这一趋势延续了 DeepSeek 等早期努力，后者证明了更小、更高效的模型可以与大型模型竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mashable.com/article/google-ai-compression">Google AI compression technology saves data center energy | Mashable</a></li>
<li><a href="https://www.networkworld.com/article/4154034/google-research-talks-compression-technology-it-says-will-greatly-reduce-memory-needed-for-ai-processing.html">Google Research touts memory-compression breakthrough for AI processing | Network World</a></li>
<li><a href="https://www.forbes.com/sites/tomcoughlin/2026/03/26/googles-turboquant-compression-could-increase-demand-for-ai-memory/">Google’s TurboQuant Compression Could Increase Demand For AI Memory</a></li>

</ul>
</details>

**标签**: `#AI`, `#compression`, `#energy efficiency`, `#Google`, `#data centers`

---

<a id="item-3"></a>
## [AI 模型比人类更容易被提示误导](https://news.google.com/rss/articles/CBMipwFBVV95cUxPLUlUM1poeXkxeERqd2dxcE1sWTRPbS14T1hKeVV3OFlzYkNHMUlabEJSVjlGUmJ5VlpMcExjdHhVWlJnTjVxX2IxWU1RNTBhNktLWVc2ZVlQU3Z6dnlzaXZsVVRjZllmR1FpOWRQME5EWlFBVkpkSHBtYVlINXpwcXlYUUVuZmhpREcwN19fVEZDVEZ6ZmdBa2V0ellBdVJmdnNfV25CYw?oc=5) ⭐️ 7.0/10

一项发表在《PNAS》上的研究发现，大型语言模型（LLM）对提示中的细微暗示比人类敏感得多，常常偏离人类基线行为，产生不必要的成本或忽略可用信息。 这一脆弱性凸显了当前 AI 系统的关键弱点，对 AI 安全、对齐以及在高风险领域的部署具有重要意义，因为通过微妙提示进行的操纵可能导致有害结果。 该研究测试了多种 LLM 在不同提示策略下的反应，并与人类行为进行比较，发现那些对人类选择影响微弱的线索对模型决策产生了不成比例的巨大影响。

google_news · PsyPost · 7月12日 12:33

**背景**: 对抗性提示是一种已知风险，精心设计的输入会诱使 LLM 产生不安全或意外的输出。这项研究进一步表明，即使是良性的微妙暗示也能显著改变模型行为，而人类对此类线索则更为稳健。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.pnas.org/doi/abs/10.1073/pnas.2537030123?af=R">AI agents are sensitive to nudges | PNAS</a></li>
<li><a href="https://www.promptingguide.ai/risks/adversarial">Adversarial Prompting in LLMs | Prompt Engineering Guide</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#adversarial robustness`, `#human-AI comparison`, `#misinformation`

---

<a id="item-4"></a>
## [AI 公司推动削弱澳大利亚版权，艺术家抗议](https://news.google.com/rss/articles/CBMisgFBVV95cUxPZm1ZbGlKbjZncnFvcFdJLUhFekxmNU52Ml9xekhNSTR2TUFGSkxkWThzLV9TcE9sbmp0YUNLZFZRd0VpM2hiclhJLWw2SFhtWlNnZWgxWmZtWjBIaEtLMkc0XzlqSzlaRmdBdjNTWDctdzJhWkM0ck0zekxMMS1DOUZ0MXZGVk1JeEtpZW05UE1veWtGcEVzalNaWm9qeVB5N2VFNWpmQVVFajNxQ2NxUTFR?oc=5) ⭐️ 7.0/10

AI 公司正在游说澳大利亚政府放宽版权法，允许在未经许可的情况下使用受版权保护的作品训练 AI 模型，这引发了艺术家的愤怒，并导致执政的工党内部出现分歧。 这场辩论可能为澳大利亚如何在 AI 创新与创作者权利之间取得平衡树立先例，并影响全球关于 AI 训练数据和版权的讨论。其结果可能影响澳大利亚艺术家的生计以及本地 AI 公司的竞争力。 文章报道称，工党在这个问题上存在分歧，一些成员支持 AI 行业推动更宽松的版权规则，而另一些成员则站在艺术家一边。文中未提及具体的立法提案，但游说活动正在进行中。

google_news · The Guardian · 7月12日 01:58

**背景**: 版权法通常授予创作者复制和分发其作品的专有权。AI 公司经常从互联网上抓取大量数据来训练模型，其中可能包含未经明确许可的受版权保护的材料。这已在全球范围内引发诉讼和政策辩论，澳大利亚现在成为一个关键战场。

**标签**: `#AI`, `#copyright`, `#Australia`, `#policy`, `#artists`

---

<a id="item-5"></a>
## [智能材料像电脑芯片一样控制热量](https://news.google.com/rss/articles/CBMiigFBVV95cUxOcUx3cWwtdTFwdWZyS1MwTWhKeTYyZFdob3IyWGNoeXhtbEZJcUFOamN1V0R3TzJCeXUyQW50VUpRT0VpVEV5aEU1LUlzenVyeFk3c1NjSTNVLTc3UjNFTHgxaXNjRFNtZWtnRlhkSGM3RG5vZzI5bDhwYzdkQ2tLRl82LUJodEVJb3c?oc=5) ⭐️ 7.0/10

研究人员开发出一种智能材料，能够以可编程的方式控制和引导热流，类似于电脑芯片管理电信号。 这一突破可能彻底改变电子设备、数据中心和能源系统的热管理，实现更高效的冷却以及新型基于热量的计算设备。 该材料利用磁场或温度变化等外部触发条件，在不同热导率状态之间切换，从而精确控制热路径。

google_news · SciTechDaily · 7月12日 02:02

**背景**: 传统材料具有固定的热学性质，难以动态管理热量。具有可调热导率的智能材料能够适应变化的条件，为热管理提供了新的可能性。这项工作建立在相变材料和纳米结构复合材料的进展之上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.sciencedaily.com/releases/2026/07/260707025046.htm">Incredible new material makes heat programmable | ScienceDaily</a></li>
<li><a href="https://www.sciencetimes.com/articles/62063/20260708/new-programmable-material-lets-scientists-control-redirect-heat-demand.htm">New Programmable Material Lets Scientists Control and Redirect...</a></li>
<li><a href="https://link.springer.com/article/10.1007/s11433-022-1925-2">Thermal smart materials with tunable thermal conductivity: Mechanisms ...</a></li>

</ul>
</details>

**标签**: `#materials science`, `#thermal management`, `#electronics`, `#smart materials`

---
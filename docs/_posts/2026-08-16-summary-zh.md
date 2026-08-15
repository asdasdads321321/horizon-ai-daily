---
layout: default
title: "Horizon Summary: 2026-08-16 (ZH)"
date: 2026-08-16
lang: zh
---

> 从 49 条内容中筛选出 8 条重要资讯。

---

1. [BDH-CQ：150M 参数模型在 ARC-AGI-1 上实现成本-精度突破](#item-1) ⭐️ 8.0/10
2. [苹果在阿里巴巴支持下为中国市场训练自有 AI 模型](#item-2) ⭐️ 8.0/10
3. [Anthropic 披露未发布模型 2，引发 AI 对齐担忧](#item-3) ⭐️ 8.0/10
4. [Anthropic 为 Claude 文本添加隐形水印](#item-4) ⭐️ 8.0/10
5. [Qwen3.6 雅可比透镜无需重新拟合即可迁移至 Qwen3.8](#item-5) ⭐️ 7.0/10
6. [二手书商怀疑 AI 公司批量购书](#item-6) ⭐️ 7.0/10
7. [印度 AI 任务批准 93 万 GPU 小时，订购 1.1 EFLOPS 计算系统](#item-7) ⭐️ 7.0/10
8. [科学家依赖无法控制或理解的黑箱工具](#item-8) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [BDH-CQ：150M 参数模型在 ARC-AGI-1 上实现成本-精度突破](https://www.reddit.com/r/MachineLearning/comments/1vov5r5/bdhcq_incontext_learning_with_recurrent_latent/) ⭐️ 8.0/10

BDH-CQ，一个 150M 参数的模型，在 ARC-AGI-1 上以每任务 0.00070 美元的计算成本达到 29.5%的 pass@2，突破了先前报告的成本-精度帕累托前沿。它通过循环潜在记忆进行上下文学习，而无需将中间推理解码为语言。 这一结果表明，高效的非 Transformer 架构可以在具有挑战性的推理基准上与更大的模型相媲美，可能降低 AI 推理的成本。它可能通过强调循环潜在记忆和上下文适应的优势来影响未来的模型设计。 该模型使用循环联想状态和高维潜在工作空间，训练中不使用任务标识符或评估任务的演示对，推理时不更新任何参数。成本-精度帕累托前沿的突破表明相对于先前方法有显著的效率提升。

reddit · r/MachineLearning · /u/moschles · 8月15日 06:18

**背景**: ARC-AGI 是一个通过视觉网格谜题来衡量流体智能和抽象推理的基准，模型必须识别输入-输出对中的模式并为未见输入生成正确输出。Pass@k 是一种度量指标，衡量 k 个生成候选解中至少有一个通过所有测试的概率。BDH（Dragon Hatchling）是一种后 Transformer 架构，围绕高维正激活、低秩通信和循环联想状态构建，受神经科学原理启发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2608.09888v1">BDH-CQ: In-Context Learning with Recurrent Latent Reasoning</a></li>
<li><a href="https://www.explainx.ai/blog/pathway-bdh-cq-150m-post-transformer-arc-agi-august-2026">Pathway BDH-CQ: 150M Model, 11x Cheaper Than GPT-5.6 ...</a></li>
<li><a href="https://github.com/pathwaycom/bdh/">GitHub - pathwaycom/bdh: BDH (Dragon Hatchling ...</a></li>

</ul>
</details>

**标签**: `#in-context learning`, `#recurrent neural networks`, `#ARC-AGI`, `#efficient reasoning`, `#latent reasoning`

---

<a id="item-2"></a>
## [苹果在阿里巴巴支持下为中国市场训练自有 AI 模型](https://news.google.com/rss/articles/CBMi0wFBVV95cUxNVDU1cndzcnNhVERISGg5M3psalAyTEVrR2JKSEExUTVoV0JkSjJZZVRIOW40N1lweld1bXEzYWRrNEZxb2w2YzctanRaNnRnckRJLWRINnlpVnlnbXZvSUxBRFN6QUNvb01UMXhXVmp3MDNDTnN2TGZveTdlam9Gem93RFFaZVFSazRzWUpmZXI0VlV3VU56cjZPUUNXQk9GTzFTdkpzMTdvRnF6RUllb1NMbm02OFFiUEJhQXhab1JjZ0w3QWhPT0VqUVZpc0xEYXBV?oc=5) ⭐️ 8.0/10

据路透社独家报道，苹果已在阿里巴巴的支持下，专门为中国市场训练了自己的大语言模型。这标志着苹果改变了此前依赖第三方模型来提供 AI 功能的策略。 这一进展意义重大，表明苹果正在战略性地适应中国的监管环境，并致力于在其最重要的市场之一提供 AI 功能。这也凸显了科技公司为满足本地要求和地缘政治考量而定制 AI 模型的趋势。 据三位不愿透露姓名的知情人士透露，该 AI 模型是与阿里巴巴合作开发，并在其支持下训练的。据报道，此举帮助苹果为其在中国市场的 Apple Intelligence 功能获得了北京方面前所未有的批准。

google_news · Reuters · 8月14日 21:45

**背景**: 苹果一直在努力将其 Apple Intelligence 功能引入中国，但由于中国严格的 AI 监管规定，面临诸多障碍。此前，苹果曾考虑与百度等其他中国 AI 公司合作，但最终选择在阿里巴巴的协助下训练自己的模型。这种方法使苹果能够更好地遵守当地的数据和内容法规，同时保持对其 AI 技术的控制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theverge.com/ai-artificial-intelligence/980160/apple-intelligence-china-custom-ai-model-alibaba">Apple trained its own AI model for China with help from Alibaba | The Verge</a></li>
<li><a href="https://finance.yahoo.com/technology/ai/articles/apple-builds-custom-ai-model-160211202.html">Apple Builds Custom AI Model for China With Alibaba</a></li>
<li><a href="https://www.reuters.com/business/retail-consumer/apple-trains-its-own-ai-model-china-market-with-alibabas-support-sources-say-2026-08-14/">EXCLUSIVE: Apple trains its own AI model for China market ... - Reuters</a></li>

</ul>
</details>

**标签**: `#Apple`, `#AI`, `#Alibaba`, `#China`, `#Tech Industry`

---

<a id="item-3"></a>
## [Anthropic 披露未发布模型 2，引发 AI 对齐担忧](https://news.google.com/rss/articles/CBMiugFBVV95cUxPUjNMa3hzU1VFbE9BS2Jib2QwV2lFdUt6RkhJVXd1ZFVpMkxGUTE1cGwtZTRTUk9fY3VuR2Ffa0hQYkFuN1FEYmRnYXlQMC1ESzJzRWhtUDFWTnNrUlQ2QlpUUVFrdHIzcWVabDBQYVB6LUtjQklHUE9QcFBCWnBlY1FCMFZPcVpYXzlENE5hRkF5OXRnaElUUVJZTkc5YlFQRVROQVRtdGVlNl9tWmxybHJWTjd4T0U3WUE?oc=5) ⭐️ 8.0/10

Anthropic 最新的 AI 风险报告详细介绍了名为“Model 2”的未发布内部模型，并将某些错位场景的风险等级从“极低”上调至“低”。 该报告表明，即使是领先的 AI 实验室也难以完全理解和控制其最先进的模型，这可能会影响围绕 AI 安全和透明度的监管讨论及行业实践。 风险等级上调归因于涉及 Anthropic 模型的近期网络安全事件。该公司不计划发布 Model 2，该模型似乎比其顶级 Mythos 模型更强大，但开发并未放缓。

google_news · SiliconANGLE · 8月14日 23:31

**背景**: Anthropic 是一家专注于 AI 安全的公司，发布风险报告以评估其模型的潜在危害。“威胁模型 2”指特定类别的严重风险，报告使用调查员主导的探测会话评估对齐情况。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://siliconangle.com/2026/08/14/anthropic-details-unreleased-model-2-new-alignment-concerns-latest-ai-risk-report/">Anthropic details unreleased Model 2, new alignment... - SiliconANGLE</a></li>
<li><a href="https://www.axios.com/2026/08/14/anthropic-model-2-ai-risk">Anthropic sees AI risks rising, no plan to release stronger " Model 2"</a></li>
<li><a href="https://digg.com/tech/0vjyeabs">Anthropic Report References Internal Model 2 · Digg</a></li>

</ul>
</details>

**社区讨论**: 一些用户批评 Anthropic 在风险报告中吹嘘其未发布的内部 Model 2 性能优于 Mythos 5，认为这是对他们无法使用的工具进行无意义的炫耀。

**标签**: `#AI safety`, `#Anthropic`, `#AI alignment`, `#AI risk`, `#model development`

---

<a id="item-4"></a>
## [Anthropic 为 Claude 文本添加隐形水印](https://news.google.com/rss/articles/CBMie0FVX3lxTE13b0ZZcG45c0lDcmVyVUlRMDAySXR2N1JvcmNVT1R0SldJTWV3ME43a3p1cTFxbFNvUktBT1NBa3h0dDVsR0k5bjJ1c1NvRE5UQVpjT2JpLU9mOVNEcnNGQWtSdUFfMXZUeUozX0l4R18xYjRicEhsTTVsOA?oc=5) ⭐️ 8.0/10

Anthropic 宣布将向受支持的 Claude 模型生成的文本添加机器可读的隐形水印，这些水印在复制粘贴后依然存在，甚至当 Claude 仅纠正拼写时也会出现。此举是为了遵守欧盟《人工智能法案》，也是行业推动 AI 文本溯源的一部分。 这一进展对 AI 安全和透明度具有重要意义，因为它能够可靠地检测 AI 生成的文本，有助于打击虚假信息并明确内容来源。它可能为其他 AI 提供商树立先例，并影响整个行业的合规实践。 该水印是隐形且机器可读的，设计上能在复制粘贴甚至拼写纠正等微小修改后依然存在。Anthropic 实施此功能是为了遵守欧盟《人工智能法案》，具体方法已在官方博客和支持文档中详细说明。

google_news · The420.in · 8月15日 13:44

**背景**: 随着 AI 生成内容日益普遍，区分人类写作与 AI 输出成为一项挑战。水印技术是一种将信号嵌入文本、可由机器检测的方法，用于验证内容来源。多家主要 AI 提供商正在采用类似措施，以遵守欧盟《人工智能法案》等法规并提高透明度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techstartups.com/2026/08/10/anthropic-is-adding-invisible-watermarks-to-claudes-ai-generated-text-that-can-be-detected-even-after-you-copy-and-paste-it/">Anthropic is adding invisible watermarks to Claude's AI-generated text ...</a></li>
<li><a href="https://www.forbes.com/sites/anishasircar/2026/08/13/claude-will-now-leave-a-watermark-on-everything-it-writes-what-does-that-mean/">Anthropic’s Claude Adds Invisible Watermarks To AI ... - Forbes</a></li>
<li><a href="https://www.anthropic.com/news/claude-text-watermark">How Claude's text watermarking works \ Anthropic</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#watermarking`, `#Anthropic`, `#Claude`, `#AI text detection`

---

<a id="item-5"></a>
## [Qwen3.6 雅可比透镜无需重新拟合即可迁移至 Qwen3.8](https://www.reddit.com/r/MachineLearning/comments/1vpa5cv/survival_of_the_fitted_qwen3627bs_jacobian_lens/) ⭐️ 7.0/10

一位 Reddit 用户测试了为 Qwen3.6-27B 拟合的雅可比透镜是否无需重新拟合即可迁移到 Qwen3.8-27B，结果发现它对于引导潜在实体仍然有效。该透镜在潜在实体上保持了较低的排名中位数，并成功引导了输出，但表面下一词元读取的退化更为明显。 这是首次实证检验可解释性透镜能否在模型更新后继续有效，对监控流程和可解释性社区具有实际意义。如果透镜能够跨版本迁移，将节省大量计算资源，并支持无需重新拟合的持续可解释性分析。 测试使用了 40 个两跳提示，其中中间实体从未被提及，第 48 层的中位数排名在原始模型上为 4，迁移后为 17；第 24 层分别为 121 和 38。从 Qwen3.6 导出的针对“悖论”的引导方向成功地从 Qwen3.8 的输出中移除了该概念，同时保持了连贯性。该设计无法完全区分透镜失配与模型变化，且结论仅限于架构和分词器匹配的一个版本步长。

reddit · r/MachineLearning · /u/imstilllearningthis · 8月15日 18:24

**背景**: 雅可比透镜是 Anthropic 开发的一种可解释性技术，利用模型输出相对于其残差流的雅可比矩阵来识别模型正在推理的概念。它提供了一种无需依赖思维链文本即可读取和引导潜在表示的方法。Qwen3.6-27B 和 Qwen3.8-27B 是 Qwen 开源模型系列的连续版本，后者比前者晚 113 天发布，且共享相同的架构和分词器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://viralistic.nl/blog/en/jacobian-lens-explained">Jacobian Lens : How AI Interpretability Works | Viralistic</a></li>
<li><a href="https://explainx.ai/blog/what-is-j-lens-jacobian-lens-claude-interpretability-2026">What Is the J- Lens ? Anthropic Jacobian Lens Guide | explainx.ai</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen/ Qwen 3 . 8 - 27 B · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: Reddit 上的讨论可能包括对协议局限性的质疑以及进一步测试的建议，因为作者邀请大家指出该方法可能失效的地方。社区似乎对这个令人惊讶的结果（透镜可以迁移）很感兴趣，但也对在测试条件之外进行推广持谨慎态度。

**标签**: `#interpretability`, `#LLM`, `#Jacobian lens`, `#model update`, `#Qwen`

---

<a id="item-6"></a>
## [二手书商怀疑 AI 公司批量购书](https://news.google.com/rss/articles/CBMiwAFBVV95cUxNS0R0TUMyYkJxVXpBUGUyM2ROVFIwRmNkQnNrblEweHZHekpaODBXNXplNFAwSlZ2ZXVCTWNldnRPYk9tbU9uaHJJdW9zSUt4S2pMNnFSeW1qZUVFVnIyM3BCdVRIeTRFdGFtSjhReGQ3OHFKbnRoT0FiRkY3aDZGWUg3aWhqa0tEVzBDckJDdktFaG9yX201azFBLW9oa1IzQXA3OEV5bXhoZzByREotNnBrbFBTcU1LT3ViV1hUVlo?oc=5) ⭐️ 7.0/10

英国和爱尔兰的二手书商报告了不寻常的批量购书订单，怀疑这些订单来自 AI 公司，可能是为了获取训练数据。《卫报》报道了这一趋势，引发了对此类数据采集伦理和合法性的担忧。 这揭示了一种新颖且可能普遍存在的做法，即 AI 公司购买实体书进行扫描以获取训练数据，引发了版权和伦理问题。这可能影响二手书市场，并为 AI 公司如何获取训练材料树立先例。 报道称，AI 公司可能批量购买书籍，进行扫描甚至销毁，稀有和绝版书籍面临风险。涉及的规模和相关公司尚不确定，一些书商质疑这种做法的普遍性。

google_news · The Guardian · 8月15日 08:00

**背景**: 像大型语言模型（LLM）这样的 AI 模型需要大量文本数据进行训练。虽然许多数据来自互联网，但一些公司寻求实体书以获取在线无法获得的受版权保护或绝版内容。这导致了批量购买和扫描书籍的做法，引发了关于版权侵权和破坏文化资产的伦理和法律问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.msn.com/en-xl/news/other/ai-firms-bulk-buy-books-for-destructive-scanning/ar-AA29TAFF">AI companies bulk-buy books, scan and destroy for training data</a></li>
<li><a href="https://ainave.com/tech-news/ai-companies-are-buying-and-destroying-antique-books-for-training-data-what-builders-need-to-know">Antique Books AI Training Data: Ethics and Legal Risks</a></li>
<li><a href="https://www.omegatechnologysolutionsgroupinc.com/blog/ai-companies-are-bulk-buying-and-destroying-rare-physical-books-198494">AI Companies Are Bulk-Buying and Destroying Rare Physical Books</a></li>

</ul>
</details>

**标签**: `#AI`, `#data sourcing`, `#copyright`, `#ethics`, `#news`

---

<a id="item-7"></a>
## [印度 AI 任务批准 93 万 GPU 小时，订购 1.1 EFLOPS 计算系统](https://news.google.com/rss/articles/CBMinAFBVV95cUxObHVSeVNQSU5pT0VvcDhIX3pOWFZBUEpST2Y5NkxtZDZnR092S2haemtnOGM4OU10Z0N6Q3VNR3dFNUxLV21YNlY2a0hfNVNTOFVHZjN6VHFBRjhIXzdMY2FUUGlEM2h1MVJuVkpyUXcySnQtNjF4UUgzSUthUUQ5N29VdEgzczJuUGpLZmRIV1lRc1B4Vko1SUEyamPSAZwBQVVfeXFMTmx1UnlTUElOaU9Fb3A4SF96TlhWQVBKUk9mOTZMbWQ2Z0dPdktoWnprZzhjODlNdGdDekN1TUd3RTVMS1dtWDZWNmtIXzVTUzhVR2YzelRxQUY4SF83TGNhVFBpRDNodTFSblZKclF3Mkp0LTYxeFFIM0lLYVFEOTdvVXRIM3MyblBqS2ZkSFdZUXNQeFZKNUlBMmpj?oc=5) ⭐️ 7.0/10

印度 AI 任务已批准 93 万（930 万）GPU 小时，并订购了 1.1 EFLOPS 计算系统，标志着国家 AI 基础设施的重大扩展。 这项投资使印度成为 AI 计算能力的主要参与者，能够在国内进行大规模 AI 研发。这可能减少对外国云提供商的依赖，并促进医疗、农业和国防等领域的创新。 1.1 EFLOPS 系统代表了计算能力的巨大飞跃，相当于 1.1 百亿亿次浮点运算/秒。93 万 GPU 小时将分配给研究人员和初创企业，但具体供应商和时间表尚未披露。

google_news · Tech Observer Magazine · 8月15日 09:24

**背景**: EFLOPS（百亿亿次浮点运算）是计算速度的单位，等于每秒 10^18 次浮点运算，用于衡量超级计算机和 AI 系统的性能。GPU 小时衡量总计算工作量，计算方式为 GPU 数量乘以运行小时数。印度 AI 任务是一项政府倡议，旨在通过基础设施、研究和应用推动 AI 发展。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Floating_point_operations_per_second">Floating point operations per second - Wikipedia</a></li>
<li><a href="https://www.computecollege.com/learn/what-is-a-gpu-hour/">GPU Hours Meaning: What Is a GPU-Hour? | Compute College</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#India`, `#GPU`, `#compute`, `#policy`

---

<a id="item-8"></a>
## [科学家依赖无法控制或理解的黑箱工具](https://news.google.com/rss/articles/CBMirAFBVV95cUxQamczLXcxd0Jsc2dxcFN0aHRWem1XaFdoRzBMNERsZUVZQ3I4MWhyMGhMU3RRQkVHTE1GTjA2SVV1b2lZLWRQODFlNklYOUFpVlY0VEJPYUhHbUdaNFIzOFpGejBjX0w1NFVJcWpxUTdKMTlSZFFFY3dEX1EzR25rMGhGbkswUFVpVTcta2RMSFZNX0hITzVNS25OOGtkYlJwT241RHNJenBsaENf?oc=5) ⭐️ 7.0/10

一项新的国际研究指出，科学家越来越依赖那些无法完全理解、检查或验证的强大数据源和工具。该研究对这类黑箱技术对科学可重复性和信任的影响提出了担忧。 这一趋势威胁到科学方法的核心，因为可重复性对于验证结果至关重要。如果科学家无法理解或控制他们的工具，可能会削弱公众对研究的信任，并在许多领域导致错误的结论。 这项由国际团队发表的研究，探讨了在关键科技能够塑造科学的时代，可重复性、信任以及科学研究未来的问题。它特别指出，最先进的工具和数据往往对用户来说是不透明的。

google_news · Bioengineer.org · 8月15日 13:01

**背景**: 科学中的“黑箱化”概念指的是，当机器高效运转时，技术工作变得不可见，用户只关注输入和输出。这与科学中更广泛的“可重复性危机”相关，即许多已发表的结果无法被重现，从而削弱了对研究的信心。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://phys.org/news/2026-08-black-technologies-undermine-confidence-scientific.html">Black-box technologies could undermine confidence in ...</a></li>
<li><a href="https://www.eurasiareview.com/15082026-scientists-increasingly-dependent-on-black-box-tools-they-cannot-control-or-fully-understand/">Scientists Increasingly Dependent On ‘Black-Box’ Tools They ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Replication_crisis">Replication crisis - Wikipedia</a></li>

</ul>
</details>

**标签**: `#black-box`, `#scientific computing`, `#AI/ML`, `#reproducibility`, `#research ethics`

---
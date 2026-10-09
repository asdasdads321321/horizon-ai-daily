---
layout: default
title: "Horizon Summary: 2026-10-09 (ZH)"
date: 2026-10-09
lang: zh
---

> 从 58 条内容中筛选出 11 条重要资讯。

---

1. [NVIDIA 的 DreamDojo 论文因代码缺陷和微弱提升而受到质疑](#item-1) ⭐️ 8.0/10
2. [ThinkingBox-Bench 通过 20 次重复运行以终端数据库状态评估 AI 智能体](#item-2) ⭐️ 7.0/10
3. [开发者训练 126 万参数模型，将终端界面转换为结构化 UI 组件](#item-3) ⭐️ 7.0/10
4. [AI 模型按“同性恋”“异性恋”或“罪犯”刻板印象修改人脸](#item-4) ⭐️ 7.0/10
5. [SAP 首席 AI 战略官解释为何向 Prior Labs 投资 10 亿欧元](#item-5) ⭐️ 7.0/10
6. [ARTEX AI 渗透测试工具被用于针对韩国金融机构的数据窃取攻击](#item-6) ⭐️ 7.0/10
7. [博通寻求超 500 亿美元为 OpenAI 定制 AI 芯片融资](#item-7) ⭐️ 7.0/10
8. [Anthropic 的 Claude 主导类 CRISPR 发现引发科学界争议](#item-8) ⭐️ 7.0/10
9. [JetBrains 发布 Mellum2.1：面向编码智能体的 12B MoE 开源模型](#item-9) ⭐️ 7.0/10
10. [Perplexity AI 发布 pplx-embed-v2-late 嵌入模型系列](#item-10) ⭐️ 7.0/10
11. [OpenAI 发布 722 篇 AI 生成的数学论文，令数学家震惊](#item-11) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [NVIDIA 的 DreamDojo 论文因代码缺陷和微弱提升而受到质疑](https://www.reddit.com/r/MachineLearning/comments/1x0i6b5/nvidias_erroneous_paper_accepted_as_icmls/) ⭐️ 8.0/10

一篇 Reddit 帖子声称，NVIDIA 基于 Cosmos 2.5 构建的机器人世界模型 DreamDojo 被 ICML 接收为 spotlight，但其性能相比基线仅提升了 0.5 dB PSNR。发帖者及其同事据称在训练后代码中发现了一个 bug，而 GitHub 上报告的另外两个 bug 影响了整个预训练阶段，表明发布的代码和评估存在缺陷。 这引发了人们对 ICML 等顶级机器学习会议同行评审流程的严重担忧，尤其是当知名作者和大型工业实验室参与其中时。如果得到证实，这可能削弱人们对已报告结果的信任，并凸显在 AI 研究中加强可复现性检查的必要性。 据报道，该论文使用了约 44,000 小时的人类数据和 256 块 H100 GPU 进行预训练，但相比 Cosmos 2.5 仅获得了 0.5 dB PSNR 的微弱提升。代码被描述为写得很差且并非 AI 生成，所报告的 bug 影响了预训练、训练后和评估，发帖者称这解释了结果为何如此微弱。

reddit · r/MachineLearning · /u/Amazing-Fox-7295 · 10月8日 04:58

**背景**: ICML 是顶级机器学习会议之一，spotlight 论文被选为最受关注的接收论文之一。机器人世界模型是一种根据当前输入和动作预测未来感官观察（如视频或运动）的模型，使机器人能够在模拟中学习。Cosmos 2.5 是 NVIDIA 此前面向物理 AI 的世界基础模型，而 DreamDojo 通过在大规模人类数据上进行预训练来构建于其上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/nvidia-cosmos/cosmos-predict2.5">GitHub - nvidia-cosmos/cosmos-predict2.5: Cosmos-Predict2.5 ...</a></li>
<li><a href="https://research.nvidia.com/labs/cosmos-lab/cosmos-predict2.5/">Cosmos-Predict2.5: Improved World Simulation with Video ...</a></li>
<li><a href="https://arxiv.org/abs/2501.10100">[2501.10100] Robotic World Model: A Neural Network Simulator ... World models for robotics - Harvard AI and Robotics Lab World Models for Robotics | Guide | world-models.io Awesome World Models for Robotics - GitHub Robotic world models—conceptualization, review ... - Frontiers World Models for Robotics | world-models.io</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论对这样的论文如何通过同行评审表示强烈怀疑，评论者质疑审稿人是否检查了代码或注意到微弱的提升。一些人强调了主要机器学习会议上可复现性和评审质量的更广泛问题，而另一些人指出作者的声誉可能影响了接收决定。

**标签**: `#peer-review`, `#ICML`, `#NVIDIA`, `#machine-learning`, `#research-integrity`

---

<a id="item-2"></a>
## [ThinkingBox-Bench 通过 20 次重复运行以终端数据库状态评估 AI 智能体](https://www.reddit.com/r/MachineLearning/comments/1x17shf/thinkingbox_solving_an_agent_task_once_vs_solving/) ⭐️ 7.0/10

微软研究人员发布了 ThinkingBox-Bench，这是一个包含 507 个策略条件业务工作流的基准测试，覆盖零售、旅行/酒店、汽车保险、数字银行内部 IT、咨询 IT/HR 五个领域，每个任务从相同的干净后端出发独立运行 20 次，每个模型共 10,140 次试验。评分将终端后端状态和副作用与要求的最终状态进行对比，论文、代码、数据集以及 Hugging Face OpenEnv 环境均已公开。 该基准表明，发现能力和可重复性对模型的排名截然不同：Kimi-K3 至少成功解决 93.89% 的任务，但仅 13.41% 的任务在全部 20 次尝试中成功；而 Claude Opus 5 发现的任务较少（79.09%），但重复成功率远高（47.53%）。这一点很重要，因为单次运行通过率可能严重误导将智能体部署到生产环境的团队，在那里稳定正确的后端状态比偶尔成功更重要。 在对 12 个模型、121,680 次有效试验的回顾性消融分析中，有 79,853 次未通过可执行检查，但其中 67.24% 的失败仍然干净终止、调用了改变状态的工具且没有最终工具错误，这意味着以完成度为标准的代理指标会把它们评为已完成。作者提醒，任务是合成重建的，20/20 是观测计数而非未来可靠性的保证，模拟用户是固定的 LLM，且原始评估轨迹未公开。

reddit · r/MachineLearning · /u/tuhin_k · 10月9日 00:50

**背景**: AI 智能体基准测试传统上衡量 pass@1 或 pass@k，它们反映任务能否至少被解决一次，却不反映智能体能否稳定重复这一成功。ThinkingBox 改为评估隔离后端数据库的终端状态，检查字段值错误、非预期的额外副作用以及缺失的必要效果，这更接近企业系统实际验证工作的方式。该基准通过 Hugging Face 的 OpenEnv 发布，后者是一个用于创建和部署智能体强化学习隔离执行环境的开源框架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.explainx.ai/blog/microsoft-thinkingbox-agent-benchmark-database-state-reliability-2026">ThinkingBox: Microsoft Grades AI Agents on Database State ...</a></li>
<li><a href="https://riverfrontai.com/journal/microsoft-s-thinkingbox-grades-ai-agents-on-database-state-n-3ef2c1b9">Microsoft's ThinkingBox Grades AI Agents on Database State ...</a></li>
<li><a href="https://github.com/huggingface/OpenEnv">GitHub - huggingface/ OpenEnv : An interface library for RL post...</a></li>

</ul>
</details>

**标签**: `#agent evaluation`, `#benchmark`, `#reliability`, `#stateful workflows`, `#database state`

---

<a id="item-3"></a>
## [开发者训练 126 万参数模型，将终端界面转换为结构化 UI 组件](https://www.reddit.com/r/MachineLearning/comments/1x0gvnt/instead_of_another_gpu_terminal_renderer_i/) ⭐️ 7.0/10

一位开发者发布了 Phosphene，这是一个 126 万参数（5 MB）的轴向 Transformer，能够为终端屏幕的每个单元格标注 15 种语义角色之一（边框、标题、菜单项、选中行、表格、输入框、状态栏、按键提示等），然后用确定性代码将这些区域转换为 A2UI 声明式 UI 组件。该模型在公开的 asciinema 录像上训练，标签由 Claude 子代理配合合成 TUI 生成器产生，全部在免费的 Colab T4 上完成，在留存的真实屏幕上取得了 mIoU 0.51 的成绩。 这种方法可以让终端应用对屏幕阅读器可访问、在移动设备上可重排，并直接被 AI 代理消费，因为客户端收到的是语义化 UI 组件，而不是不透明的字符网格。它还提出了一种服务端 AI 方案，作为对 Alacritty、Kitty、WezTerm 和 Ghostty 等日益复杂的 GPU 加速终端渲染器的替代思路。 模型只在遇到新屏幕布局时运行；一旦布局被识别，就会锁定为模板，之后只通过 JSON 指针补丁发送变化的内容，因此约 1.4 万块屏幕中有 40%根本不会经过模型。在 less 和 dialog 上准确率约为 90%，但在 htop 和 nano 上表现很差，因为它们的仪表会不断改变布局；此外 A2UI 流比原始 VT 数据大约 25 倍，所以优势在于客户端简化而非带宽节省。

reddit · r/MachineLearning · /u/BuckChancey · 10月8日 03:46

**背景**: Alacritty、Kitty、WezTerm 和 Ghostty 等现代终端模拟器使用 GPU 字形图集、纹理缓存、自定义着色器和 HarfBuzz 文本整形来快速渲染字符网格，但客户端仍然需要解析转义码流并绘制单元格。轴向 Transformer 是一种神经网络，分别沿行和列应用注意力机制，适合终端屏幕这类网格结构数据。A2UI 是谷歌的声明式 UI 流协议，而 asciinema 是一种记录终端会话的格式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepwiki.com/microsoft/terminal/3.2-atlas-engine">Atlas Engine | microsoft/terminal | DeepWiki</a></li>

</ul>
</details>

**标签**: `#terminal`, `#transformer`, `#UI`, `#accessibility`, `#machine-learning`

---

<a id="item-4"></a>
## [AI 模型按“同性恋”“异性恋”或“罪犯”刻板印象修改人脸](https://news.google.com/rss/articles/CBMikgJBVV95cUxNODgxWDJocU1mdHpqV00yd04tTTBnN05HRUVra3hGaC1IZ2syOURmVHdET2luLWxPZlFUVDlsSFVYVDNBTFJBSXRmQ0czSXZ6TWhVZ1lxdkFubnpHeUdJVHZHZF81cWVsbU91LV9YZmk0ejE1amNTQWRiakd4ZnMtYkdjTENJUktYdnpkVC1aMVBBQ1FhRS1faXlnS21PRGZJeFZuY2VXODRIbnVLSzJHTnZXUmZ0RUdsQkE3d1Z4SkN3bklMTGg5NDhPZ0o3el9WYkJTR0t2V0JLdFBHVS1ENXduX0VTZk1lUEQ3SWRCV3loYTF4Y1AtT01qR2pxVDBfZzNYemJ6WGx3dVZYWjNxM2dn?oc=5) ⭐️ 7.0/10

据《拉科尼亚每日太阳报》报道，AI 人脸编辑模型正被用来修改人的面部，使其呈现出与“同性恋”“异性恋”或“罪犯”相关的刻板印象特征。这一做法通过向 AI 工具输入提示词来重塑面部特征，强化的只是社会建构的刻板印象，而非任何真实的生物学标记。 这引发了严重的伦理担忧，因为它把性取向和犯罪倾向当作可以从面部直接读出的特征，可能助长歧视与偏见。它还凸显出生成式 AI 可能大规模放大有害的伪科学观念，影响边缘群体以及公众对 AI 系统的整体信任。 报道指出，这类工具允许用户套用“同性恋”“异性恋”或“罪犯”的刻板面部特征，与早已被否定的面相学和颅相学式推理如出一辙。人脸识别研究已记录到巨大的准确率差异：浅肤色男性的错误率约为 0.8%，而深肤色人群高达 34.7%，说明基于面部的 AI 远非中立。

google_news · The Laconia Daily Sun · 10月8日 13:32

**背景**: 人脸识别与人脸编辑系统依赖大规模图像数据集训练，如果数据集中某些群体过度代表或隐含社会刻板印象，模型就会继承并复制这些偏见。人类长期以来习惯从面部特征推断性格，这种倾向与面孔和行为之间任何真实关联都无关，却仍会导致不公平的结果。生成式 AI 人脸编辑器让修改外貌变得轻而易举，因此用于趣味滤镜的同一技术也可能被用来编码歧视性假设。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techxplore.com/news/2026-08-ai-human-tendency-infer-character.html">AI shares human tendency to infer character from facial features</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#facial recognition`, `#bias`, `#stereotypes`, `#responsible AI`

---

<a id="item-5"></a>
## [SAP 首席 AI 战略官解释为何向 Prior Labs 投资 10 亿欧元](https://news.google.com/rss/articles/CBMiogFBVV95cUxOS1M2VFRrcGZjRnhmNm5DSTloMjJUNXlFRVdwSEQwS1hMbjBaRE0wSjAzRkJRaC1vM0Y1cHJxbnBlNHdtWS10MXNKdGVNY1FiQkpLM3FUMUFrZlg5d1FscDNLZnRJakVLeVJwUFBkSzZEb05ueUpfWkNoX2k0VHBKU0xLb0tBbmhtbUlZMVZmT1lGYlAxMHJIclVSSHEzWGUtNHc?oc=5) ⭐️ 7.0/10

SAP 的首席 AI 战略官公开解释了公司向 Prior Labs 投资 10 亿欧元的决定，Prior Labs 是一家专注于弥补 AI 在表格数据方面短板的初创公司。这位高管将该投资定位为 SAP“商业 AI”战略的核心组成部分，而非通用型 AI 布局。 这笔交易表明，企业软件巨头愿意投入数十亿欧元押注针对结构化业务数据的专用 AI，而不仅仅是面向消费者的生成式模型。这可能重塑 SAP 的 ERP 客户在其核心业务流程中实现分析、预测和维护自动化的方式。 Prior Labs 以表格数据基础模型 TabPFN 闻名，并已与日立合作开展铁路预测性维护项目。10 亿欧元这一数字对于该细分领域的初创公司而言异常庞大，且该文章提供的是战略层面的理由，而非深入的技术基准测试。

google_news · The Next Web · 10月8日 17:25

**背景**: SAP 是全球最大的企业软件供应商之一，其“商业 AI”战略侧重于将 AI 直接嵌入其软件所管理的业务流程中。Prior Labs 的创立旨在解决“表格数据鸿沟”——即大语言模型擅长处理文本和代码，却难以应对支撑大多数业务运营的结构化表格。TabPFN 是 Prior Labs 专为此类表格数据设计的基础模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://priorlabs.ai/">Prior Labs</a></li>
<li><a href="https://www.everydev.ai/developers/prior-labs">Prior Labs - 1 AI Tool | EveryDev.ai</a></li>
<li><a href="https://learning.sap.com/courses/becoming-an-sap-btp-solution-architect/exploring-the-ai-strategy">Describing SAP's AI Strategy</a></li>

</ul>
</details>

**标签**: `#SAP`, `#AI strategy`, `#enterprise AI`, `#investment`, `#Prior Labs`

---

<a id="item-6"></a>
## [ARTEX AI 渗透测试工具被用于针对韩国金融机构的数据窃取攻击](https://news.google.com/rss/articles/CBMiggFBVV95cUxONlBNVWZraTRTTjdzVmN4VWpzd0c0Zy1CNmREQmZnS0hqejkxZEhxODZaVDZ4N3Nxbzg4bnY0eWpnR09qb3RXUHBWT0ppMEJpVVVKakJyT0hWc2dvd0FFV3NLcm5CQXNjM3lMVzJ5SE1XYXNIdkRROXk5emtJTGx3ZEh3?oc=5) ⭐️ 7.0/10

CrowdStrike Intelligence 报告称，一名疑似来自中国的 26 岁攻击者于 2026 年 9 月底至 10 月初，使用开源智能体渗透测试工具 ARTEX 以及 Anthropic 的 Claude Code 入侵了韩国金融机构，导致数据被窃取。调查人员在攻击者控制的开放目录中发现了 Claude Code 会话历史、ARTEX 配置文件以及 Claude 记忆文件。 这是首批有记录的将 AI 智能体渗透测试工具用于真实数据窃取攻击的案例之一，标志着 AI 网络风险已从理论层面转向实际利用。全球金融机构如今面临一类新型的 AI 加速攻击，这类攻击能够大规模自动化地发现漏洞并窃取数据。 ARTEX 是一款近期发布的、由中国开发者开发的开源智能体渗透测试工具，利用大语言模型来自动化安全测试。攻击者还向 Claude 询问威胁行为者通常在何处出售韩国数据泄露信息，并寻求帮助寻找韩国 Telegram 数据交易群组，凸显了大语言模型可能被滥用于攻击行动规划。

google_news · The Hacker News · 10月8日 14:12

**背景**: 渗透测试工具旨在帮助安全专业人员先于攻击者发现自身系统中的漏洞，但当这类工具开源且由 AI 驱动时，就可能被恶意行为者重新利用。像 ARTEX 和 Claude Code 这样的智能体 AI 工具能够自主规划和执行多步骤任务，使其成为网络犯罪分子的强大助力。近年来，韩国金融行业一直是国家关联和以经济利益为动机的黑客组织的频繁攻击目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.crowdstrike.com/en-us/blog/unknown-threat-actor-uses-artex-to-target-south-korean-finance/">Unknown Threat Actor Uses AI-Driven ARTEX to Target South ...</a></li>
<li><a href="https://www.reuters.com/world/suspect-behind-south-korea-bank-hacks-may-be-26-year-old-china-cybersecurity-2026-10-08/">South Korean banks were likely hacked by a China-based actor ...</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#AI`, `#pentesting`, `#data breach`, `#financial sector`

---

<a id="item-7"></a>
## [博通寻求超 500 亿美元为 OpenAI 定制 AI 芯片融资](https://news.google.com/rss/articles/CBMiaEFVX3lxTE1hWWpqTlJuUmE2RnZJTGJudG9ERVNyaVV3Zm5XN2xYeEVXLXJObHNXVFptVTk2eGlXRC1wbjRvcWo4M2Y1Ti1QMDBGRjNpcktIWExZc2lvNEV1ZWk0NV9wTGx0c0Zkd21E?oc=5) ⭐️ 7.0/10

据 TradingView 报道，博通（Broadcom）正在寻求超过 500 亿美元的融资，用于资助 OpenAI 的定制 AI 芯片项目，与此同时甲骨文（Oracle）也在推进其大规模芯片融资计划。此举表明两家公司都在为 AI 工作负载所需的定制芯片做出大规模资金承诺。 这则消息的重要性在于，它显示 AI 硬件供应链正从完全依赖英伟达（Nvidia）的通用 GPU，转向针对特定工作负载打造的定制芯片。如果博通和甲骨文成功，这可能重塑 AI 基础设施的竞争格局，并让 OpenAI 在算力成本和供应上拥有更多掌控权。 报道提到的融资规模超过 500 亿美元，与博通此前宣布的与 Anthropic 达成的 420 亿美元定制芯片交易相当，后者据称可提供 3.5 吉瓦算力，成本比英伟达低约 44%。定制 AI 芯片围绕特定工作负载类型设计，无法高效处理该范围之外的任务，因此它们是对通用 GPU 的补充，而非完全替代。

google_news · TradingView · 10月8日 10:32

**背景**: 定制 AI 芯片（也称定制硅片或 ASIC）是为特定 AI 任务而非通用计算设计的处理器。谷歌从 2015 年起通过张量处理单元（TPU）率先采用这一路线，而 OpenAI 一直在与博通合作开发自己的芯片，据报道名为 Jalapeno，三星也被提及为制造商。随着 AI 领军企业寻求比英伟达 GPU 更便宜、更节能的替代方案，博通的定制 AI 芯片业务迅速增长。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.fool.com/investing/2026/04/27/1-major-reason-why-broadcom-still-has-more-room-to/">Broadcom's custom AI chip business is rapidly growing.</a></li>
<li><a href="https://www.beri.net/article/broadcom-42b-anthropic-deal-custom-silicon-enterprise-ai">Broadcom 's $42B Anthropic Deal Changes AI Pricing | THE D* AI *LY...</a></li>
<li><a href="https://cio.economictimes.indiatimes.com/news/artificial-intelligence/openai-unveils-custom-chip-it-designed-with-broadcom-to-boost-its-ai-infrastructure/131970084">OpenAI unveils custom chip it designed with Broadcom to boost its AI ...</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#Broadcom`, `#OpenAI`, `#Oracle`, `#semiconductors`

---

<a id="item-8"></a>
## [Anthropic 的 Claude 主导类 CRISPR 发现引发科学界争议](https://news.google.com/rss/articles/CBMiyAFBVV95cUxQYUc5R0ROSkZSZ2p1TXBvRGhWNDgxdmU2TWxpMlBQUFFvR0c1TmNpVktZb2pVdDExZU5qTFJtYjUybkVfTnRNbldKZlpHbE1qMTJxUi1vQk04Q1FGTkdreWVoSnNqVTNmRmRHbzVRRm1MM255Q3dUWTFQR1JNcW9hYjQ2MGk0VXhZUjEwNldKWUFZMzNYdzByOTFrb3F3U0pqRUJULVQ3dFlwaXpVakdDdk1Pd3lBTUktbXpBdFlWY09LMzdmUUN0Zw?oc=5) ⭐️ 7.0/10

据援引《麻省理工科技评论》的报道，Anthropic 宣布其 AI 分子生物学实验室取得了所谓“首个发现”，声称其 Claude 模型在一项类 CRISPR 的成果中发挥了主导作用。这一说法迅速在科学界引发争议，争论焦点在于 AI 应获得多少功劳，以及该发现是否真正具有新颖性。 这场争论触及一个更广泛的问题：大语言模型究竟能真正推动科学发现，还是仅仅辅助人类研究者；这可能影响 AI 实验室如何宣传成果，以及科学界如何分配功劳。此事同样重要，因为 CRISPR 式基因编辑是一个具有重大医学和伦理影响的高风险领域。 该新闻只是一则简短报道，缺乏技术细节，因此尚不清楚这项类 CRISPR 发现的具体内容、如何得到验证，以及 Claude 实际发挥了什么作用。争议表明研究人员的质疑更多针对公告的表述方式，而不一定是针对底层研究结果本身。

google_news · KTVQ · 10月8日 15:33

**背景**: CRISPR 基因编辑是一种源自细菌抗病毒防御系统的分子生物学技术，其中 Cas9 核酸酶由合成 RNA 引导，在目标位置切割 DNA，从而实现基因的删除或添加。该技术使 Jennifer Doudna 和 Emmanuelle Charpentier 获得 2020 年诺贝尔化学奖，并催生了首个获批的 CRISPR 药物 Casgevy，用于治疗镰状细胞病和β地中海贫血。Anthropic 是一家美国 AI 公司，其 Claude 系列大语言模型被用于 AI 辅助软件开发等任务，并越来越多地涉足科学研究。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://min.news/en/science/7654795a72f1a29f67dd49da5d0c2480.html">Controversy surrounding AI " scientific discovery ": Anthropic Labs...</a></li>
<li><a href="https://en.wikipedia.org/wiki/CRISPR_gene_editing">CRISPR gene editing</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_(AI)">Claude (AI) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 科学界的反应总体偏向质疑，研究人员质疑 AI 是否能被合理地视为一项发现的功劳方，并对 Anthropic 的公告表述提出反驳。这场辩论反映出 AI 驱动科学中炒作与严谨性之间更广泛的张力。

**标签**: `#AI`, `#CRISPR`, `#Anthropic`, `#controversy`, `#research`

---

<a id="item-9"></a>
## [JetBrains 发布 Mellum2.1：面向编码智能体的 12B MoE 开源模型](https://news.google.com/rss/articles/CBMitAFBVV95cUxNUF9nVDF4bTd4bVNmT0x1RjdhVkt3cmdWLVNvSktGaFhjb0lKeUJlY3ROY0RfRlA4UnRuRjhlcU1MNXFiYlJBYWpQNVNnWUl3eFZnbFNfOGtQVTJtUFE1UEtyVVlsdkZPenM3d0gxcHlnQzZEeTVXWlU1bDIxMDdpSDdlOWNXSkRCbTlLQWthay1hckt6LUM3bEVfNVd3NjR2eVZiTTRqMXhUbGcxcHpRM01HVGTSAbQBQVVfeXFMTVBfZ1QxeG03eG1TZk9MdUY3YVZLd3JnVi1Tb0pLRmhYY29JSnlCZWN0TmNEX0ZQOFJ0bkY4ZXFNTDVxYmJSQWFqUDVTZ1lJd3hWZ2xTXzhrUFUybVBRNVBLclVZbHZGT3pzN3dIMXB5Z0M2RHk1V1pVNWwyMTA3aUg3ZTljV0pEQm05S0FrYWstYXJLei1DN2xFXzVXdzY0dnlWYk00ajF4VGxnMXB6UTNNR1Rk?oc=5) ⭐️ 7.0/10

JetBrains 发布了 Mellum2.1，这是一个拥有 120 亿参数的混合专家（MoE）开源模型，专门面向编码智能体设计。这标志着 Mellum 系列从早期的 4B 稠密代码补全模型扩展到了更大规模、采用稀疏激活架构、面向智能体编码工作流的模型。 作为主流 IDE 厂商，JetBrains 进入开放权重编码智能体模型领域，可能为开发者提供一个由厂商支持的替代方案，与 OpenAI、Anthropic 以及 DeepSeek、Qwen 等开源对手的模型竞争。这表明智能体编码正成为工具厂商而不仅是前沿 AI 实验室的核心战场。 该模型采用混合专家架构，即通过路由机制为每个 token 仅激活部分专家子网络，相比稠密的 12B 模型可降低推理成本。它以开源模型形式发布，但公告中未详细说明具体许可条款、上下文窗口和基准测试结果。

google_news · MarkTechPost · 10月8日 16:17

**背景**: 混合专家（MoE）是一种神经网络架构，其中多个专门的子网络（称为专家）处理输入的不同部分，并由门控机制（路由器）决定为每个 token 激活哪些专家。这种稀疏激活使模型能够扩展到大量参数，同时保持比同等规模稠密模型更低的单 token 计算量。JetBrains 此前发布了 Mellum-4b-base，这是其首个针对代码任务优化的开源大语言模型，基于超过 4 万亿 token 训练，上下文窗口为 8192 token。编码智能体是能够跨代码仓库自主编写、编辑和调试代码的 AI 系统，超越了简单的行内补全。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.jetbrains.com/mellum/">Mellum by JetBrains: Fast language models for real-world AI ...</a></li>
<li><a href="https://huggingface.co/JetBrains/Mellum-4b-base">JetBrains/Mellum-4b-base · Hugging Face</a></li>
<li><a href="https://www.humanpath.si/learn/what-is-mixture-of-experts-moe-architecture">What Is Mixture of Experts ( MoE ) Architecture ?</a></li>

</ul>
</details>

**标签**: `#JetBrains`, `#LLM`, `#Mixture-of-Experts`, `#Coding Agents`, `#Open Models`

---

<a id="item-10"></a>
## [Perplexity AI 发布 pplx-embed-v2-late 嵌入模型系列](https://news.google.com/rss/articles/CBMi2wFBVV95cUxNQTJEM2RHbkhZYjFxSmNmSVF6eTlfaHhZR29nMmFKTkkxTUxjUHgxSHdzVHdJMW0yZmh5ZWhPRDJWSDJ0cjdaT3h4R0NKMUs0TEpaaU9jTUlrUmxNR01kMFpOMVNqd2N6SkJ3OU5YeUV1YndFaUM2TG8yWE13QUJ4Ymd5T3lpLVR5NFl5U2pQNUFhZGNKdUJvLXROTGItUkJFZzFwZDhYbmR1X1EwR01VQkNDMjdtd2pIZ2dEamJmc0w0OHZUbHdteHVXU2Vtb2Z6bkhPS19abElXNEHSAdsBQVVfeXFMTUEyRDNkR25IWWIxcUpjZklRenk5X2h4WUdvZzJhSk5JMU1MY1B4MUh3c1R3STFtMmZoeWVoT0QyVkgydHI3Wk94eEdDSjFLNExKWmlPY01Ja1JsTUdNZDBaTjFTandjekpCdzlOWHlFdWJ3RWlDNkxvMlhNd0FCeGJneU95aS1UeTRZeVNqUDVBYWRjSnVCby10TkxiLVJCRWcxcGQ4WG5kdV9RMEdNVUJDQzI3bXdqSGdnRGpiZnNMNDh2VGx3bXh1V1NlbW9mem5IT0tfWmxJVzRB?oc=5) ⭐️ 7.0/10

Perplexity AI 发布了 pplx-embed-v2-late 系列模型，这是一组多模态后期交互（ColBERT 风格）嵌入模型，包含一个面向边缘设备的 0.6B 版本和一个更大的 9B 版本，其中旗舰模型在 MADQA 基准测试中据称取得了 92.4% 的分数。这些模型基于 Qwen3.5 构建并采用双向注意力机制，旨在对文本、图像和视觉文档进行嵌入。 此次发布表明 Perplexity 正在向 AI 技术栈中的检索与嵌入层发力，而这一领域对 RAG 流程和多模态搜索正变得越来越关键。轻量级边缘模型与高分大型模型的组合，为开发者提供了从端侧应用到云端大规模检索的多种部署选择。 0.6B 模型以开放权重形式发布，上下文窗口为 4096 个 token，适合端侧或资源受限的部署场景。根据 Perplexity 的博客，两个 pplx-embed-v2-late 模型在所有三个评判集上均领先于所有基线，不过 9B 模型的完整技术规格和基准测试方法尚未在公告中详细说明。

google_news · MarkTechPost · 10月8日 05:39

**背景**: 嵌入模型将文本、图像或其他数据转换为能够捕捉语义的数值向量，从而支持语义搜索、检索增强生成（RAG）和分类等任务。ColBERT 等后期交互模型为每个文档存储多个向量而非单一向量，这通常能提升检索准确率，但代价是更大的存储需求。MADQA 是一个通过捕捉完整搜索轨迹而非仅检查最终答案来评估多模态智能体推理能力的基准测试，因此能更全面地衡量检索质量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/perplexity-ai/pplx-embed-v2-late-0.6b">perplexity-ai/ pplx - embed - v 2 - late -0.6b · Hugging Face</a></li>
<li><a href="https://www.perplexity.ai/hub/blog/multimodal-embeddings-beyond-a-single-vector">Multimodal embeddings beyond a single vector</a></li>
<li><a href="https://www.snowflake.com/en/blog/engineering/madqa-multimodal-agent-reasoning-benchmark/">Accuracy at What Cost? Benchmarking AI Agentic Reasoning with...</a></li>

</ul>
</details>

**标签**: `#embeddings`, `#Perplexity AI`, `#model release`, `#edge AI`, `#NLP`

---

<a id="item-11"></a>
## [OpenAI 发布 722 篇 AI 生成的数学论文，令数学家震惊](https://news.google.com/rss/articles/CBMiZEFVX3lxTE1SQUdCU0R0VmVPWktkby11SjVGY2pVcWczbFJzaUh3NVBBem56TkNOeTJFQmhfc1F4aWhsVnVwUEQ5cW51RE5DNGNXX3NFM045T1FnaU9ZaWNBTWVzdkhfZEVOOUk?oc=5) ⭐️ 7.0/10

10 月 7 日，OpenAI 发布了一款未公开的前沿 AI 模型生成的 722 篇数学论文，涵盖从长期未解的数学难题到冷门问题的小幅改进等广泛主题。据报道，这一发布让许多数学家感到“震惊和担忧”，引发了对该领域未来的思考。 这是 AI 在原创数学研究领域贡献能力最大规模的展示之一，可能重塑数学发现的方式。同时，它也引发了关于研究伦理、署名权以及 AI 生成结果在未经严格人工验证的情况下是否可信的紧迫问题。 这些论文由一款未公开的前沿模型生成，而非公开可用的系统，涵盖的主题范围惊人。一篇题为《AI 在数学中的严重错位》的批评性回应警告称，业界急于用 AI 解题的做法威胁到了数学研究的根本目的。

google_news · 아시아경제 · 10月8日 22:00

**背景**: 自动定理证明是自动推理的一个子领域，旨在用计算机程序证明数学定理，自计算机科学诞生之初便是其重要推动因素。近年来 AI 的进步，尤其是大语言模型的发展，使系统能够处理日益复杂的数学问题。OpenAI 和 Anthropic 都曾利用高难度数学问题来展示其先进模型的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.techspot.com/news/114127-openai-publishes-722-ai-generated-math-papers-researchers.html">OpenAI publishes 722 AI-generated math papers as... | TechSpot</a></li>
<li><a href="https://www.newscientist.com/article/2592703-the-most-interesting-mathematical-discoveries-in-openais-722-new-papers/">The most interesting mathematical discoveries in OpenAI's 722 new...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Automated_theorem_proving">Automated theorem proving</a></li>

</ul>
</details>

**标签**: `#AI`, `#Mathematics`, `#Research`, `#Automated Theorem Proving`, `#News`

---
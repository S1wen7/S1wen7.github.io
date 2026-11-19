const translations = {
  en: {
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "profile.role": "MSc student in Computer Control and Automation",
    "profile.affiliation": "Nanyang Technological University",
    "profile.location_label": "Location",
    "profile.location": "Singapore / Nanjing",
    "profile.email_label": "Email",
    "profile.cv_en": "CV (English)",
    "profile.cv_zh": "CV (Chinese)",
    "hero.eyebrow": "Academic Homepage",
    "hero.title": "Control & AI",
    "hero.summary": "My background is in automation and control. During my internship at COMAC, I worked on flight-control algorithms and tested my calculations against experimental data. For my undergraduate project, I used machine learning to estimate blood pressure from pulse signals. I’m now pursuing an MSc in Computer Control and Automation at Nanyang Technological University in Singapore, where I fine-tuned a language model to classify sentiment in product reviews.",
    "about.title": "About",
    "about.body": "My current interests sit at the intersection of control systems, automation, intelligent sensing, and machine learning. I have worked on blood pressure estimation from PPG signals using machine learning and deep learning methods, and I previously interned in flight control systems at COMAC Shanghai Aircraft Design and Research Institute.",
    "education.title": "Education",
    "education.ntu.title": "Nanyang Technological University",
    "education.ntu.degree": "MSc, Computer Control and Automation",
    "education.ntu.detail": "CGPA: 4.57/5. Core coursework includes computer control systems, genetic algorithms and machine learning, robotics and intelligent sensors, video signal processing, and 5G communication.",
    "education.city.title": "City St George's, University of London",
    "education.city.degree": "BEng, Electrical and Electronic Engineering (Avionics and Control)",
    "education.city.detail": "Average: 88/100. Graduated with First Class Honours.",
    "education.nuaa.title": "Nanjing University of Aeronautics and Astronautics",
    "education.nuaa.degree": "BEng study, Automation (Avionics and Control)",
    "education.nuaa.detail": "Average: 82/100. Coursework covered digital circuits, analog electronics, computer hardware, circuit theory, Python, mathematics, and physics.",
    "projects.title": "Featured project",
    "projects.ppg.title": "LightGBM- and CNN-LSTM-Based Blood Pressure Estimation from PPG Signals with Interpretability Analysis",
    "projects.ppg.supervisor": "BEng Individual Project · Supervisor: Professor Caroline Li",
    "projects.ppg.item1": "Integrated physiological waveform data from MIMIC-BP with clinical information from MIMIC-III.",
    "projects.ppg.item2": "Preprocessed PPG signals and detected key fiducial points to segment individual pulse cycles.",
    "projects.ppg.item3": "Extracted morphological, time-domain, frequency-domain and amplitude-related features from the segmented cycles.",
    "projects.ppg.item4": "Developed a LightGBM model to estimate blood pressure from engineered PPG features and clinical variables.",
    "projects.ppg.item5": "Built an end-to-end CNN-LSTM model to estimate blood pressure from raw PPG sequences and clinical variables.",
    "projects.ppg.item6": "Applied SHAP to quantify feature contributions, interpret model predictions and guide feature selection and dimensionality reduction.",
    "projects.robot.title": "JIMU Robot Combat Competition",
    "projects.robot.item1": "Designed and decomposed the robot's mechanical structure.",
    "projects.robot.item2": "Built the combat structure for the robot platform.",
    "projects.robot.item3": "Programmed Arduino modules for tracking and obstacle avoidance.",
    "experience.title": "Internship Experience",
    "experience.comac.title": "COMAC Shanghai Aircraft Design and Research Institute",
    "experience.comac.role": "Intern, Flight Control Systems Department",
    "experience.comac.item1": "Learned civil aircraft development workflows and flight control system fundamentals.",
    "experience.comac.item2": "Assisted foundational algorithm research for flight control systems, including inertial parameter correction derivations.",
    "experience.comac.item3": "Conducted simulation analysis and engineering verification with experimental data.",
    "experience.comac.item4": "Supported laboratory tests for typical flight control systems.",
    "skills.title": "Skills",
    "skills.language": "IELTS 7.5; strong English writing and speaking",
    "skills.programming": "Python and MATLAB programming",
    "skills.ai": "Machine learning and deep learning model training",
    "skills.analysis": "Logical thinking, learning ability, and pressure resilience",
    "skills.teamwork": "Communication and teamwork",
    "footer.text": "Hao Wang · Control & AI"
  },
  zh: {
    "nav.education": "教育背景",
    "nav.projects": "项目经历",
    "nav.experience": "实习经历",
    "nav.skills": "技能",
    "profile.role": "计算机控制与自动化硕士研究生",
    "profile.affiliation": "新加坡南洋理工大学",
    "profile.location_label": "所在地",
    "profile.location": "新加坡 / 南京",
    "profile.email_label": "邮箱",
    "profile.cv_en": "英文简历",
    "profile.cv_zh": "中文简历",
    "hero.eyebrow": "个人学术主页",
    "hero.title": "控制与人工智能",
    "hero.summary": "我的专业背景是自动化与控制。在中国商飞飞控系统部实习期间，我参与了飞控算法研究，推导惯性参数修正公式，并用实验数据进行仿真验证。本科毕设让我有机会把机器学习用在一个具体问题上：能否通过脉搏波信号估计血压？目前，我在新加坡南洋理工大学攻读计算机控制与自动化硕士，并在课程项目中微调语言模型，识别商品评论的情感倾向。",
    "about.title": "个人简介",
    "about.body": "我的兴趣集中在控制系统、自动化、智能感知与机器学习的交叉方向。本科毕业设计中，我使用机器学习和深度学习方法基于 PPG 信号估计血压；此前曾在中国商飞上海飞机设计研究院飞控系统部门实习，参与飞控系统基础算法研究和实验验证。",
    "education.title": "教育背景",
    "education.ntu.title": "新加坡南洋理工大学",
    "education.ntu.degree": "硕士，计算机控制与自动化",
    "education.ntu.detail": "CGPA：4.57/5。核心课程包括计算机控制系统、遗传算法与机器学习、机器人学与智能传感器、视频信号处理、5G 通信等。",
    "education.city.title": "伦敦大学城市圣乔治学院",
    "education.city.degree": "本科，电气电子工程（航空电子与控制）",
    "education.city.detail": "平均分：88/100。一等荣誉学位毕业。",
    "education.nuaa.title": "南京航空航天大学",
    "education.nuaa.degree": "本科阶段学习，自动化（航空电子与控制）",
    "education.nuaa.detail": "平均分：82/100。课程覆盖数字电路、模拟电子技术、计算机硬件基础、电路、电子学、Python、数学和物理等。",
    "projects.title": "精选项目",
    "projects.ppg.title": "基于 LightGBM 和 CNN-LSTM 的 PPG 血压估计与可解释性分析",
    "projects.ppg.supervisor": "本科毕业设计 · 指导教师：Caroline Li 教授",
    "projects.ppg.item1": "将 MIMIC-BP 的生理波形数据与 MIMIC-III 的临床信息进行匹配。",
    "projects.ppg.item2": "对 PPG 信号进行预处理，检测关键特征点并划分单个脉搏周期。",
    "projects.ppg.item3": "从分割后的脉搏周期中提取形态、时域、频域和幅值相关特征。",
    "projects.ppg.item4": "使用提取的 PPG 特征和临床变量训练 LightGBM 模型，估计血压。",
    "projects.ppg.item5": "构建端到端 CNN-LSTM 模型，结合原始 PPG 序列与临床变量估计血压。",
    "projects.ppg.item6": "使用 SHAP 量化特征贡献、解释模型预测，并指导特征选择与降维。",
    "projects.robot.title": "“积木”机器人对抗赛",
    "projects.robot.item1": "参与机器人结构分解与设计。",
    "projects.robot.item2": "设计并搭建机器人对抗结构。",
    "projects.robot.item3": "编写 Arduino 代码，实现循迹与避障模块。",
    "experience.title": "实习经历",
    "experience.comac.title": "中国商飞上海飞机设计研究院",
    "experience.comac.role": "飞控系统部门实习生",
    "experience.comac.item1": "学习大型民用飞机研发流程和飞控系统基础工作方法。",
    "experience.comac.item2": "参与飞控系统基础理论算法研究，独立推导惯性参数修正算法相关公式。",
    "experience.comac.item3": "基于实验数据开展仿真分析与工程验证。",
    "experience.comac.item4": "支持飞控系统典型实验室测试。",
    "skills.title": "技能",
    "skills.language": "雅思 7.5，具备较强英语写作与口语能力",
    "skills.programming": "Python 与 MATLAB 编程",
    "skills.ai": "机器学习与深度学习模型训练",
    "skills.analysis": "逻辑思维、学习能力与抗压能力",
    "skills.teamwork": "沟通协作与团队合作",
    "footer.text": "汪昊 · 控制与人工智能"
  }
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
    button.setAttribute("aria-pressed", String(button.dataset.langSwitch === lang));
  });

  localStorage.setItem("preferredLanguage", lang);
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
});

const queryLanguage = new URLSearchParams(window.location.search).get("lang");
applyLanguage(queryLanguage === "zh" ? "zh" : localStorage.getItem("preferredLanguage") || "en");

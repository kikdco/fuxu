(() => {
  "use strict";

  const STORAGE_KEY = "fuxu-demo-v1";

  const ICONS = {
    house:
      '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    archive:
      '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M9 12h6"/>',
    chart:
      '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/><path d="M19 8h-4"/><path d="M19 8v4"/>',
    flask:
      '<path d="M10 2v7.5a2 2 0 0 1-.2.9L4.7 20.6a1 1 0 0 0 .9 1.4h12.8a1 1 0 0 0 .9-1.4L14.2 10.4a2 2 0 0 1-.2-.9V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    sun:
      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.42 1.42"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M20.9 13.1A9 9 0 1 1 10.9 3a7 7 0 1 0 10 10.1Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    sparkles:
      '<path d="m12 3-1.4 3.9L7 8.3l3.6 1.4L12 13.6l1.4-3.9L17 8.3l-3.6-1.4Z"/><path d="m5 15-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8Z"/><path d="m19 14-.6 1.4L17 16l1.4.6L19 18l.6-1.4L21 16l-1.4-.6Z"/>',
    arrowUpRight:
      '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
    settings:
      '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
    droplets:
      '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 5.4 7 4c0 1.4-1.15 1.9-2.29 3.06C3.57 8 3 9.1 3 10.25c0 2.22 1.8 4.05 4 4.05Z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
    alert:
      '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    calendar:
      '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    leaf:
      '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    shield:
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
    circleAlert:
      '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    circleCheck:
      '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    refresh:
      '<path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5"/>',
    trash:
      '<path d="M3 6h18"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  };

  const INGREDIENT_DB = {
    水: {
      role: "溶剂",
      tone: "neutral",
      note: "多数水基配方的基础成分，本身不承担主要功效。",
    },
    甘油: {
      role: "保湿",
      tone: "green",
      note: "常见保湿剂，帮助产品吸收水分并减少紧绷感。",
    },
    烟酰胺: {
      role: "提亮 / 控油",
      tone: "gold",
      note: "常见多效成分。添加多款含烟酰胺的产品时，需要留意功效重复。",
      active: true,
    },
    水杨酸: {
      role: "去角质",
      tone: "coral",
      note: "常见于控油和角质护理产品。建议从低频开始，并关注干燥或刺痛。",
      active: true,
    },
    视黄醇: {
      role: "抗老 / 更新",
      tone: "coral",
      note: "常见活性成分。初期通常需要低频建立使用习惯，避免与其他刺激性步骤密集叠加。",
      active: true,
    },
    神经酰胺: {
      role: "修护",
      tone: "green",
      note: "帮助补充屏障相关脂质，常用于修护和保湿配方。",
    },
    透明质酸钠: {
      role: "保湿",
      tone: "green",
      note: "常见保湿成分，适合搭配封闭性保湿产品使用。",
    },
    泛醇: {
      role: "舒缓 / 保湿",
      tone: "green",
      note: "常见于修护类配方，用于提升使用感和保湿体验。",
    },
    角鲨烷: {
      role: "柔润",
      tone: "green",
      note: "常见柔润成分，帮助减少水分流失并改善肤感。",
    },
    生育酚: {
      role: "抗氧化",
      tone: "gold",
      note: "常见抗氧化成分，也常用于保护配方中的油脂。",
    },
    氧化锌: {
      role: "防晒",
      tone: "blue",
      note: "常见物理防晒成分，具体防护能力需结合完整配方和标注判断。",
    },
    甲氧基肉桂酸乙基己酯: {
      role: "防晒",
      tone: "blue",
      note: "常见有机防晒成分，使用时应关注产品完整防晒标识。",
    },
    椰油酰甘氨酸钾: {
      role: "清洁",
      tone: "green",
      note: "常见温和表活，通常用于洁面产品。",
    },
    抗坏血酸: {
      role: "抗氧化 / 提亮",
      tone: "gold",
      note: "常见维生素 C 类成分。配方稳定性和使用频率会影响体验。",
      active: true,
    },
    维生素C: {
      role: "抗氧化 / 提亮",
      tone: "gold",
      note: "常见提亮类成分。具体效果与浓度、配方稳定性和使用方式有关。",
      active: true,
    },
    熊果苷: {
      role: "提亮",
      tone: "gold",
      note: "常见提亮成分，通常需要持续使用并配合防晒。",
    },
    传明酸: {
      role: "提亮",
      tone: "gold",
      note: "常见提亮类成分，具体配方定位需结合产品说明。",
    },
    乙醇: {
      role: "溶剂 / 肤感调节",
      tone: "coral",
      note: "可改善清爽感。敏感或干燥肌肤可留意使用后的紧绷感。",
    },
    变性乙醇: {
      role: "溶剂 / 肤感调节",
      tone: "coral",
      note: "常见挥发性溶剂。是否适合取决于配方整体和使用感受。",
    },
    香精: {
      role: "气味",
      tone: "coral",
      note: "用于提供气味。对气味敏感的用户可以留意使用体验。",
    },
    苯氧乙醇: {
      role: "防腐",
      tone: "neutral",
      note: "常见防腐剂，通常以法规允许范围添加。",
    },
    卡波姆: {
      role: "增稠",
      tone: "neutral",
      note: "常见配方增稠剂，用于形成凝胶或乳液质地。",
    },
    黄原胶: {
      role: "增稠",
      tone: "neutral",
      note: "常见天然来源增稠剂，用于稳定产品质地。",
    },
    二氧化钛: {
      role: "防晒 / 着色",
      tone: "blue",
      note: "常见物理防晒和着色成分，具体功能需结合产品类别。",
    },
  };

  const CATEGORY_META = {
    洁面: {
      role: "清洁",
      shape: "bottle",
      pack: "#e8e3d8",
      cap: "#1d4339",
      order: 1,
    },
    化妆水: {
      role: "补水",
      shape: "dropper",
      pack: "#dce8df",
      cap: "#2f6a59",
      order: 2,
    },
    精华: {
      role: "重点护理",
      shape: "dropper",
      pack: "#ead4ca",
      cap: "#5e3d34",
      order: 3,
    },
    乳液: {
      role: "保湿",
      shape: "bottle",
      pack: "#f0eadb",
      cap: "#b49b69",
      order: 4,
    },
    面霜: {
      role: "保湿 / 修护",
      shape: "jar",
      pack: "#f4f0e8",
      cap: "#9a9c93",
      order: 5,
    },
    防晒: {
      role: "防晒",
      shape: "tube",
      pack: "#e7d39b",
      cap: "#2f6a59",
      order: 7,
    },
    去角质: {
      role: "角质护理",
      shape: "dropper",
      pack: "#e8d2cb",
      cap: "#994f3e",
      order: 3,
    },
    彩妆: {
      role: "彩妆",
      shape: "tube",
      pack: "#d9c9ba",
      cap: "#3d3a36",
      order: 9,
    },
    其他: {
      role: "辅助护理",
      shape: "bottle",
      pack: "#e5e6df",
      cap: "#4b5f58",
      order: 8,
    },
  };

  const VIEW_META = {
    today: { title: "今日护肤", eyebrow: "TODAY" },
    vanity: { title: "我的化妆台", eyebrow: "COLLECTION" },
    analysis: { title: "分析与工具", eyebrow: "INSIGHT" },
    experiment: { title: "个人观察", eyebrow: "EXPERIMENT" },
  };

  const ui = {
    view: "today",
    productFilter: "全部",
    analysisMode: "overview",
  };

  let state = loadState();
  let toastTimer = null;

  const app = document.getElementById("app");
  const modalRoot = document.getElementById("modalRoot");
  const toast = document.getElementById("toast");

  init();

  function init() {
    const hashView = window.location.hash.replace("#", "");
    if (VIEW_META[hashView]) {
      ui.view = hashView;
    }

    hydrateIcons(document);
    bindEvents();
    render();
  }

  function bindEvents() {
    document.addEventListener("click", handleClick);
    document.addEventListener("input", handleInput);
    document.addEventListener("submit", handleSubmit);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modalRoot.classList.contains("is-open")) {
        closeModal();
        return;
      }

      const product = event.target.closest("[data-product-id]");
      if (product && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openProduct(product.dataset.productId);
      }
    });
  }

  function handleClick(event) {
    const nav = event.target.closest("[data-nav]");
    if (nav) {
      event.preventDefault();
      navigate(nav.dataset.nav);
      return;
    }

    const analysisMode = event.target.closest("[data-analysis-mode]");
    if (analysisMode) {
      ui.analysisMode = analysisMode.dataset.analysisMode;
      render();
      return;
    }

    const product = event.target.closest("[data-product-id]");
    if (product) {
      openProduct(product.dataset.productId);
      return;
    }

    const step = event.target.closest("[data-step-id]");
    if (step) {
      toggleStep(step.dataset.stepId);
      return;
    }

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      ui.productFilter = filter.dataset.filter;
      render();
      return;
    }

    if (event.target === modalRoot) {
      closeModal();
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;

    const action = actionTarget.dataset.action;
    const actions = {
      "open-add-product": openAddProduct,
      "open-profile": openProfile,
      "open-checkin": openCheckin,
      "open-analysis": () => navigate("analysis"),
      "close-modal": closeModal,
      "toggle-product-status": () =>
        toggleProductStatus(actionTarget.dataset.id),
      "open-experiment": () => navigate("experiment"),
      "focus-add-product": openAddProduct,
      "open-tool-overlap": openToolOverlap,
      "open-tool-calendar": openToolCalendar,
      "open-tool-cost": openToolCost,
      "open-tool-expiry": openToolExpiry,
      "open-tool-routine": openToolRoutine,
      "show-analysis-tools": () => {
        ui.analysisMode = "tools";
        render();
      },
    };

    if (actions[action]) {
      actions[action]();
    }
  }

  function handleInput(event) {
    if (event.target.matches('input[type="range"]')) {
      const output = document.querySelector(
        `[data-output-for="${event.target.name}"]`,
      );
      if (output) {
        output.textContent = rangeLabel(
          event.target.name,
          Number(event.target.value),
        );
      }
    }
  }

  function handleSubmit(event) {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();

    if (form.dataset.form === "add-product") {
      addProductFromForm(form);
    }

    if (form.dataset.form === "profile") {
      saveProfile(form);
    }

    if (form.dataset.form === "checkin") {
      saveCheckin(form);
    }
  }

  function navigate(view) {
    if (!VIEW_META[view]) return;
    ui.view = view;
    closeModal();
    if (window.location.hash !== `#${view}`) {
      history.replaceState(null, "", `#${view}`);
    }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function render() {
    updateShell();
    const templates = {
      today: renderToday,
      vanity: renderVanity,
      analysis: renderAnalysis,
      experiment: renderExperiment,
    };
    app.innerHTML = templates[ui.view]();
    hydrateIcons(app);
    saveState();
  }

  function updateShell() {
    const meta = VIEW_META[ui.view];
    document.getElementById("pageTitle").textContent = meta.title;
    document.getElementById("pageEyebrow").textContent =
      `${meta.eyebrow} / ${formatCompactDate(new Date())}`;
    document.getElementById("profileSummary").textContent =
      state.profile.skinType;
    document.getElementById("sidebarName").textContent = state.profile.name;
    document.getElementById("sidebarSkin").textContent =
      `${state.profile.skinType} · ${state.profile.sensitivity}`;
    document.getElementById("sidebarAvatar").textContent =
      state.profile.name.slice(0, 1) || "肤";

    document.querySelectorAll("[data-nav]").forEach((item) => {
      const isActive = item.dataset.nav === ui.view;
      item.classList.toggle("is-active", isActive);
      if (item.classList.contains("nav-item")) {
        item.setAttribute("aria-current", isActive ? "page" : "false");
      }
    });

    const priority = getPriorityInsight();
    document.getElementById("sidebarInsight").textContent =
      priority?.description || "当前产品组合没有发现明显重复或时间冲突。";
  }

  function renderToday() {
    const routine = buildRoutine();
    const totalSteps = routine.morning.length + routine.evening.length;
    const doneSteps = [...routine.morning, ...routine.evening].filter(
      (step) => isStepDone(step.id),
    ).length;
    const progress = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;
    const checkins = getExperimentCheckins();
    const todayCheckin = getTodayCheckin();
    const priority = getPriorityInsight();
    const streak = getCheckinStreak();

    return `
      <section class="view">
        <div class="view-intro">
          <div>
            <span class="eyebrow">Daily Brief</span>
            <h2>今天，先照顾好皮肤的真实感受。</h2>
            <p>${escapeHtml(state.profile.skinType)}、${escapeHtml(state.profile.sensitivity)}，当前目标是${escapeHtml(state.profile.goal)}。流程可以调整，持续记录比追求完美更重要。</p>
          </div>
          <button class="secondary-button" type="button" data-action="open-checkin">
            ${icon("calendar")}
            <span>${todayCheckin ? "更新今日状态" : "记录今日状态"}</span>
          </button>
        </div>

        <section class="decision-strip">
          <span class="decision-symbol">${icon(priority?.type === "conflict" ? "alert" : "sparkles")}</span>
          <div class="decision-copy">
            <span class="panel-kicker">Today's Priority</span>
            <strong>${escapeHtml(priority?.title || "保持当前流程，继续观察")}</strong>
            <p>${escapeHtml(priority?.shortDescription || "基础步骤完整，今天只需按计划完成并记录真实感受。")}</p>
          </div>
          <div class="decision-meta">
            <span class="tag ${priority?.tone || "green"}">${escapeHtml(priority?.tag || "状态稳定")}</span>
            <button class="text-link light" type="button" data-nav="analysis">
              查看判断依据
              ${icon("chevronRight")}
            </button>
          </div>
        </section>

        <div class="metric-strip">
          ${metric("今日流程", `${progress}`, "%", `${doneSteps}/${totalSteps} 个步骤完成`)}
          ${metric("使用中产品", `${state.products.filter((p) => p.status !== "paused").length}`, "瓶", `${state.products.length} 瓶已完成建档`, "archive")}
          ${metric("观察进度", `${checkins.length}`, "/ 7", checkins.length >= 7 ? "本轮数据已完整" : "再记录一天即可完成", "flask")}
          ${metric("连续记录", `${streak}`, "天", "记录会帮助流程逐步稳定", "calendar")}
        </div>

        <div class="today-grid">
          <section class="panel">
            <div class="panel-header">
              <div>
                <span class="panel-kicker">Today's Sequence</span>
                <h2 class="panel-title">今日流程</h2>
              </div>
              <button class="text-link" type="button" data-nav="experiment">
                查看观察
                ${icon("chevronRight")}
              </button>
            </div>
            <div class="routine-columns">
              ${routineColumn("早间", "sun", routine.morning)}
              ${routineColumn("晚间", "moon", routine.evening)}
            </div>
            <div class="routine-footer">
              <div class="progress-meta">
                <span>今日完成度</span>
                <strong>${progress}%</strong>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width:${progress}%"></div>
              </div>
            </div>
          </section>

          <div class="panel-stack">
            <section class="panel experiment-mini">
              <div class="experiment-mini-head">
                <div>
                  <span class="panel-kicker">Personal Experiment</span>
                  <h3>${escapeHtml(state.experiment.title)}</h3>
                </div>
                <span class="tag gold">进行中</span>
              </div>
              <p>${escapeHtml(state.experiment.hypothesis)}</p>
              <div class="mini-chart">
                ${renderLineChart(getExperimentCheckins(), true)}
              </div>
              <div class="experiment-progress-row">
                <span>已完成 ${checkins.length} / 7 天</span>
                <div class="mini-days">
                  ${getExperimentDates()
                    .map((date, index) => {
                      const done = checkins.some((item) => item.date === date);
                      const isToday = date === todayKey();
                      return `<span class="mini-day ${done ? "done" : ""} ${isToday ? "today" : ""}">${index + 1}</span>`;
                    })
                    .join("")}
                </div>
              </div>
              <button class="ghost-button" type="button" data-action="open-experiment" style="width:100%;margin-top:14px">
                打开观察记录
                ${icon("chevronRight")}
              </button>
            </section>
          </div>
        </div>

        <div class="insight-band">
          <div class="insight-band-copy">
            <span class="insight-band-icon">${icon("flask")}</span>
            <div>
              <strong>新增产品后，流程会自动重排</strong>
              <p>系统会检查使用顺序、功效重复和频率冲突，并把变化直接写回今天的流程。</p>
            </div>
          </div>
          <button class="ghost-button" type="button" data-action="focus-add-product">
            ${icon("plus")}
            添加一瓶产品
          </button>
        </div>
      </section>
    `;
  }

  function metric(label, value, unit, note, iconName) {
    return `
      <div class="metric">
        <div class="metric-label">
          ${iconName ? icon(iconName) : ""}
          <span>${escapeHtml(label)}</span>
        </div>
        <div class="metric-value">${escapeHtml(value)} <small>${escapeHtml(unit)}</small></div>
        <div class="metric-note">${escapeHtml(note)}</div>
      </div>
    `;
  }

  function routineColumn(title, iconName, steps) {
    const done = steps.filter((step) => isStepDone(step.id)).length;
    return `
      <section class="routine-column">
        <div class="routine-column-head">
          <div class="routine-column-title">
            <span class="time-symbol ${iconName === "moon" ? "moon" : ""}">${icon(iconName)}</span>
            <span>${title}</span>
          </div>
          <span class="routine-count">${done}/${steps.length}</span>
        </div>
        ${
          steps.length
            ? steps
                .map((step) => {
                  const doneClass = isStepDone(step.id) ? "is-done" : "";
                  return `
                    <div class="routine-step ${doneClass}">
                      <button class="step-check" type="button" data-step-id="${step.id}" aria-label="${isStepDone(step.id) ? "取消完成" : "标记完成"}">
                        ${icon("check")}
                      </button>
                      <div class="step-copy">
                        <span class="step-name">${escapeHtml(step.label)}</span>
                        <span class="step-product">${escapeHtml(step.product.brand)} · ${escapeHtml(step.product.name)}</span>
                      </div>
                      <span class="step-frequency">${escapeHtml(step.frequency || "每日")}</span>
                    </div>
                  `;
                })
                .join("")
            : `<div class="muted" style="padding:14px 0;font-size:11px">还没有安排产品。</div>`
        }
      </section>
    `;
  }

  function renderFocusRows(priority) {
    if (!priority) {
      return `
        <div class="focus-row">
          <span class="focus-dot green"></span>
          <div><strong>流程结构稳定</strong><span>基础清洁、保湿和防晒步骤齐全。</span></div>
        </div>
        <div class="focus-row">
          <span class="focus-dot green"></span>
          <div><strong>继续记录</strong><span>今天完成后，本轮个人观察会更完整。</span></div>
        </div>
      `;
    }

    const rows = [
      {
        dot: priority.type === "conflict" ? "gold" : "",
        title: priority.title,
        copy: priority.shortDescription,
      },
    ];

    const expiring = getExpiringProducts()[0];
    if (expiring) {
      rows.push({
        dot: "",
        title: `${expiring.name} 需要优先使用`,
        copy: `按记录的开封时间推算，预计还有 ${getDaysLeft(expiring)} 天。`,
      });
    } else {
      rows.push({
        dot: "green",
        title: "保质期状态正常",
        copy: "近期没有需要优先消耗的产品。",
      });
    }

    return rows
      .map(
        (row) => `
          <div class="focus-row">
            <span class="focus-dot ${row.dot}"></span>
            <div><strong>${escapeHtml(row.title)}</strong><span>${escapeHtml(row.copy)}</span></div>
          </div>
        `,
      )
      .join("");
  }

  function renderVanity() {
    const categories = [
      "全部",
      ...new Set(state.products.map((product) => product.category)),
    ];
    if (!categories.includes(ui.productFilter)) {
      ui.productFilter = "全部";
    }
    const filtered =
      ui.productFilter === "全部"
        ? state.products
        : state.products.filter(
            (product) => product.category === ui.productFilter,
          );
    const expiring = getExpiringProducts().length;
    const averageCost = getAverageCostPerUse();

    return `
      <section class="view">
        <div class="view-intro">
          <div>
            <span class="eyebrow">My Collection</span>
            <h2>化妆台不是仓库，是一套正在运行的配方。</h2>
            <p>记录产品的成分、开封时间和使用频率，系统会在新增产品后重新计算流程与重复风险。</p>
          </div>
          <button class="primary-button" type="button" data-action="open-add-product">
            ${icon("plus")}
            添加产品
          </button>
        </div>

        <div class="metric-strip">
          ${metric("产品档案", `${state.products.length}`, "瓶", `${state.products.filter((p) => p.status !== "paused").length} 瓶正在使用`, "archive")}
          ${metric("功能标签", `${getUniqueRoleCount()}`, "类", "覆盖清洁、护理与防护", "sparkles")}
          ${metric("临近保质期", `${expiring}`, "瓶", expiring ? "建议优先使用" : "当前状态正常", "clock")}
          ${metric("平均单次成本", averageCost ? `¥${averageCost}` : "暂无", "", "按已记录使用次数估算", "chart")}
        </div>

        <div class="vanity-toolbar">
          <div class="filter-chips" role="group" aria-label="产品分类筛选">
            ${categories
              .map(
                (category) => `
                  <button class="filter-chip ${ui.productFilter === category ? "is-active" : ""}" type="button" data-filter="${escapeAttr(category)}">
                    ${escapeHtml(category)}
                  </button>
                `,
              )
              .join("")}
          </div>
          <span class="muted" style="font-size:10px">${filtered.length} 个产品档案</span>
        </div>

        <div class="product-grid">
          ${filtered.map((product, index) => productCard(product, index)).join("")}
          <button class="add-product-card" type="button" data-action="open-add-product">
            <span class="add-product-inner">
              <span class="add-product-circle">${icon("plus")}</span>
              <strong>添加一瓶产品</strong>
              <span>粘贴成分表，自动生成产品档案与流程建议</span>
            </span>
          </button>
        </div>
      </section>
    `;
  }

  function productCard(product, index) {
    const left = getDaysLeft(product);
    const tags = getProductTags(product);
    return `
      <article class="product-card" data-product-id="${escapeAttr(product.id)}" tabindex="0" role="button" aria-label="查看 ${escapeAttr(product.name)}">
        <div class="pack-stage" style="--pack-bg:${escapeAttr(product.packBg || product.packColor)};--pack-color:${escapeAttr(product.packColor)};--cap-color:${escapeAttr(product.capColor)}">
          <span class="pack-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="pack-status">${product.status === "paused" ? "已停用" : product.category}</span>
          <div class="product-pack pack-${escapeAttr(product.shape)}"></div>
        </div>
        <div class="product-card-body">
          <span class="product-brand">${escapeHtml(product.brand || "个人档案")}</span>
          <h3 class="product-name">${escapeHtml(product.name)}</h3>
          <span class="product-role">${escapeHtml(product.role || categoryRole(product.category))}</span>
          <div class="tag-row">
            ${tags
              .slice(0, 3)
              .map(
                (tag, tagIndex) =>
                  `<span class="tag ${tagIndex === 0 ? "" : "neutral"}">${escapeHtml(tag)}</span>`,
              )
              .join("")}
          </div>
          <div class="product-footer">
            <span>开封 <strong>${getOpenedDays(product)}</strong> 天</span>
            <span class="${left <= 45 ? "warning" : ""}">${left <= 45 ? "预计 " : "约 "}${left} 天可用</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderAnalysis() {
    const isTools = ui.analysisMode === "tools";
    return `
      <section class="view">
        <div class="view-intro">
          <div>
            <span class="eyebrow">${isTools ? "Analysis Toolkit" : "Vanity Checkup"}</span>
            <h2>${isTools ? "把分析结果，变成可以直接使用的工具。" : "把整张化妆台，当成一组可以分析的数据。"}</h2>
            <p>${isTools ? "选择一个工具，查看具体产品、时间或成本依据，并把结论带回到今天的流程。" : "体检结果来自产品组合、活性成分、开封时间与近 7 天记录，目的是发现重复和过度叠加，而不是给皮肤下诊断。"}</p>
          </div>
          <button class="ghost-button" type="button" data-action="open-checkin">
            ${icon("calendar")}
            ${getTodayCheckin() ? "更新今日数据" : "补充今日数据"}
          </button>
        </div>

        <div class="analysis-switch" role="tablist" aria-label="分析与工具视图">
          <button class="analysis-switch-item ${isTools ? "" : "is-active"}" type="button" data-analysis-mode="overview" role="tab" aria-selected="${isTools ? "false" : "true"}">
            体检概览
          </button>
          <button class="analysis-switch-item ${isTools ? "is-active" : ""}" type="button" data-analysis-mode="tools" role="tab" aria-selected="${isTools ? "true" : "false"}">
            分析工具
            <span>${getActiveOverlaps().length + getExpiringProducts().length || ""}</span>
          </button>
        </div>

        ${isTools ? renderAnalysisTools() : renderAnalysisOverviewBody()}
      </section>
    `;
  }

  function renderAnalysisOverviewBody() {
    const analysis = getAnalysis();
    const expiring = getExpiringProducts();
    const overlaps = getActiveOverlaps();
    const insights = getInsights();
    const circumference = 2 * Math.PI * 52;
    const dash = (analysis.score / 100) * circumference;

    return `
        <div class="analysis-top">
          <section class="panel health-score">
            <div class="score-ring" aria-label="化妆台组合结构分 ${analysis.score} 分">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <circle class="score-ring-track" cx="60" cy="60" r="52"></circle>
                <circle class="score-ring-value" cx="60" cy="60" r="52" stroke-dasharray="${dash} ${circumference}" stroke-dashoffset="0"></circle>
              </svg>
              <div class="score-copy">
                <strong>${analysis.score}</strong>
                <span>结构分</span>
              </div>
            </div>
            <div class="health-summary">
              <h3>${analysis.label}</h3>
              <p>${escapeHtml(analysis.summary)} 结构分只评估产品组合与使用安排，不评价皮肤健康。</p>
              <div class="tag-row">
                <span class="tag ${analysis.conflicts ? "coral" : ""}">${analysis.conflicts} 处时间提醒</span>
                <span class="tag ${analysis.duplicates ? "gold" : "neutral"}">${analysis.duplicates} 处功效重复</span>
                <span class="tag neutral">${getCheckinStreak()} 天连续记录</span>
              </div>
            </div>
          </section>

          <section class="panel analysis-card">
            <div class="analysis-card-head">
              <div>
                <h3>六个维度的组合状态</h3>
                <p>分数用于比较产品组合，不代表皮肤健康诊断。</p>
              </div>
              <span class="tag neutral">实时计算</span>
            </div>
            <div class="dimension-list">
              ${analysis.dimensions
                .map(
                  (dimension) => `
                    <div class="dimension-row">
                      <span>${escapeHtml(dimension.label)}</span>
                      <div class="dimension-bar ${dimension.tone || ""}">
                        <span style="width:${dimension.value}%"></span>
                      </div>
                      <strong>${dimension.value}</strong>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>
        </div>

        <div class="analysis-grid">
          <section class="panel analysis-card">
            <div class="analysis-card-head">
              <div>
                <h3>活性成分周历</h3>
                <p>根据当前产品频率生成的示例排期。</p>
              </div>
              <span class="tag blue">7 DAYS</span>
            </div>
            ${renderActiveCalendar()}
            <div class="calendar-legend">
              <span><i class="legend-dot"></i>活性成分</span>
              <span><i class="legend-dot gold"></i>低频使用</span>
              <span><i class="legend-dot coral"></i>修护休息日</span>
            </div>
          </section>

          <section class="panel analysis-card">
            <div class="analysis-card-head">
              <div>
                <h3>成分重叠矩阵</h3>
                <p>只展示值得关注的活性成分重叠。</p>
              </div>
              <span class="tag ${overlaps.length ? "coral" : "neutral"}">${overlaps.length ? "需留意" : "无明显重复"}</span>
            </div>
            ${renderOverlapMatrix()}
          </section>

          <section class="panel analysis-card">
            <div class="analysis-card-head">
              <div>
                <h3>使用效率</h3>
                <p>按价格和已记录使用次数估算。</p>
              </div>
              <span class="tag gold">COST / USE</span>
            </div>
            <div class="efficiency-list">
              ${[...state.products]
                .sort((a, b) => costPerUse(b) - costPerUse(a))
                .slice(0, 4)
                .map(
                  (product) => `
                    <div class="efficiency-item">
                      <div>
                        <strong>${escapeHtml(product.name)}</strong>
                        <span>使用 ${product.usedCount || 0} 次 · 开封 ${getOpenedDays(product)} 天</span>
                      </div>
                      <div class="efficiency-value">
                        <strong>¥${costPerUse(product).toFixed(1)}</strong>
                        <span>单次成本</span>
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="panel analysis-card">
            <div class="analysis-card-head">
              <div>
                <h3>本次体检得到的三条洞察</h3>
                <p>每条洞察都应能转化为一个具体动作。</p>
              </div>
              <span class="tag neutral">ACTIONABLE</span>
            </div>
            <div class="insight-list">
              ${insights
                .slice(0, 3)
                .map(
                  (insight, index) => `
                    <div class="insight-item">
                      <span class="insight-index">${String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>${escapeHtml(insight.title)}</strong>
                        <p>${escapeHtml(insight.description)}</p>
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>
        </div>

        ${
          expiring.length
            ? `
              <div class="insight-band">
                <div class="insight-band-copy">
                  <span class="insight-band-icon">${icon("clock")}</span>
                  <div>
                    <strong>${expiring.length} 瓶产品即将进入优先使用区</strong>
                    <p>${escapeHtml(expiring.map((product) => product.name).join("、"))} 预计在 45 天内到期。</p>
                  </div>
                </div>
                <button class="ghost-button" type="button" data-nav="vanity">查看化妆台</button>
              </div>
            `
            : ""
        }
    `;
  }

  function renderAnalysisTools() {
    const overlaps = getActiveOverlaps();
    const expiring = getExpiringProducts();
    const activeProducts = state.products.filter(
      (product) =>
        product.status !== "paused" && getProductActives(product).length,
    );
    const routine = buildRoutine();
    const totalSteps = routine.morning.length + routine.evening.length;
    const highestCost = [...state.products]
      .filter((product) => product.status !== "paused" && product.usedCount > 0)
      .sort((a, b) => costPerUse(b) - costPerUse(a))[0];
    const nextExpiry = [...state.products]
      .filter((product) => product.status !== "paused")
      .sort((a, b) => getDaysLeft(a) - getDaysLeft(b))[0];
    const checkins = getExperimentCheckins();
    const latestCheckin = checkins[checkins.length - 1];

    const tools = [
      {
        icon: "sparkles",
        kicker: "Ingredient Scan",
        title: "成分重叠扫描",
        question: "哪些产品包含相同活性成分？",
        value: overlaps.length ? `${overlaps.length} 组重复` : "无明显重复",
        meta: overlaps.length
          ? overlaps[0].shared.join("、")
          : "当前活性成分组合没有明显重叠",
        tone: overlaps.length ? "coral" : "green",
        action: "open-tool-overlap",
        button: "查看重叠结果",
      },
      {
        icon: "calendar",
        kicker: "Active Calendar",
        title: "活性成分日历",
        question: "本周哪些天需要使用活性产品？",
        value: `${activeProducts.length} 瓶活性产品`,
        meta: "按当前流程频率排入一周",
        tone: "blue",
        action: "open-tool-calendar",
        button: "打开本周排期",
      },
      {
        icon: "chart",
        kicker: "Cost Per Use",
        title: "使用成本计算",
        question: "哪瓶产品最贵但使用得最少？",
        value: highestCost ? `¥${costPerUse(highestCost).toFixed(1)}` : "暂无数据",
        meta: highestCost
          ? `${highestCost.name} 当前单次成本最高`
          : "添加产品和打卡后自动计算",
        tone: "gold",
        action: "open-tool-cost",
        button: "查看成本排序",
      },
      {
        icon: "clock",
        kicker: "Expiry Radar",
        title: "临期雷达",
        question: "现在最应该优先用掉哪些产品？",
        value: expiring.length ? `${expiring.length} 瓶临期` : "状态正常",
        meta: nextExpiry
          ? `${nextExpiry.name} 预计还剩 ${getDaysLeft(nextExpiry)} 天`
          : "45 天内没有临期产品",
        tone: expiring.length ? "coral" : "green",
        action: "open-tool-expiry",
        button: "查看优先顺序",
      },
      {
        icon: "flask",
        kicker: "Observation Report",
        title: "个人观察报告",
        question: "这 7 天的记录能支持什么判断？",
        value: `${checkins.length} / 7 天`,
        meta: latestCheckin
          ? `最近记录于 ${formatDateCN(latestCheckin.date)}`
          : "还没有观察记录",
        tone: "green",
        action: "open-experiment",
        button: "打开观察报告",
      },
      {
        icon: "shield",
        kicker: "Routine Complexity",
        title: "流程复杂度检查",
        question: "当前流程是否步骤过多或安排过度？",
        value: `${totalSteps} 个步骤`,
        meta: `早间 ${routine.morning.length} 步 · 晚间 ${routine.evening.length} 步`,
        tone: totalSteps > 8 ? "gold" : "green",
        action: "open-tool-routine",
        button: "查看复杂度",
      },
    ];

    return `
      <section class="toolbox-intro">
        <div>
          <span class="panel-kicker">Six Useful Tools</span>
          <h3>先问一个具体问题，再看对应的数据。</h3>
        </div>
        <p>这些工具共用当前产品档案、开封时间和最近 7 天记录。打开后会显示具体依据，而不是另一组静态图表。</p>
      </section>
      <div class="tool-grid">
        ${tools
          .map(
            (tool) => `
              <article class="tool-card ${tool.tone}">
                <div class="tool-card-top">
                  <span class="tool-icon">${icon(tool.icon)}</span>
                  <span class="tool-kicker">${escapeHtml(tool.kicker)}</span>
                </div>
                <h3>${escapeHtml(tool.title)}</h3>
                <p class="tool-question">${escapeHtml(tool.question)}</p>
                <div class="tool-result">
                  <strong>${escapeHtml(tool.value)}</strong>
                  <span>${escapeHtml(tool.meta)}</span>
                </div>
                <button class="tool-button" type="button" data-action="${escapeAttr(tool.action)}">
                  <span>${escapeHtml(tool.button)}</span>
                  ${icon("chevronRight")}
                </button>
              </article>
            `,
          )
          .join("")}
      </div>
      <p class="toolbox-footnote">工具结果用于整理产品与流程，不构成皮肤诊断或产品功效结论。</p>
    `;
  }

  function renderActiveCalendar() {
    const days = ["一", "二", "三", "四", "五", "六", "日"];
    const activeProducts = state.products.filter((product) =>
      getProductActives(product).length,
    );
    const schedule = {
      视黄醇: [1, 4],
      水杨酸: [0, 3],
      烟酰胺: [0, 1, 2, 3, 4, 5, 6],
      抗坏血酸: [0, 1, 2, 3, 4, 5, 6],
      维生素C: [0, 1, 2, 3, 4, 5, 6],
    };
    const rows = activeProducts.slice(0, 3);
    const todayIndex = (new Date().getDay() + 6) % 7;

    return `
      <div class="active-calendar">
        <span class="calendar-label"></span>
        ${days.map((day) => `<span class="calendar-day">周${day}</span>`).join("")}
        ${rows
          .map((product) => {
            const active = getProductActives(product)[0] || "活性成分";
            const activeDays = schedule[active] || [0, 2, 4];
            return `
              <span class="calendar-label">${escapeHtml(active)}</span>
              ${days
                .map((_, index) => {
                  const isActive = activeDays.includes(index);
                  const isRest = !isActive && index % 2 === 0;
                  const level = isActive
                    ? active.includes("烟酰胺") || active.includes("维生素C")
                      ? 2
                      : index === todayIndex
                        ? 3
                        : 1
                    : 0;
                  return `<span class="calendar-cell ${level ? `active-${level}` : isRest ? "rest" : ""}">${level ? "用" : isRest ? "休" : ""}</span>`;
                })
                .join("")}
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderOverlapMatrix() {
    const products = state.products
      .filter((product) => getProductActives(product).length)
      .slice(0, 4);

    if (products.length < 2) {
      return `<p class="muted" style="font-size:11px">添加两瓶以上含活性成分的产品后，矩阵会自动生成。</p>`;
    }

    return `
      <table class="overlap-matrix" aria-label="活性成分重叠矩阵">
        <thead>
          <tr>
            <th></th>
            ${products.map((product) => `<th>${escapeHtml(shortName(product.name))}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${products
            .map(
              (rowProduct, rowIndex) => `
                <tr>
                  <th>${escapeHtml(shortName(rowProduct.name))}</th>
                  ${products
                    .map((columnProduct, columnIndex) => {
                      if (rowIndex === columnIndex) {
                        return `<td class="is-self">本瓶</td>`;
                      }
                      const shared = sharedActives(rowProduct, columnProduct);
                      return `<td class="${shared.length ? "is-overlap" : ""}">${shared.length ? escapeHtml(shared[0]) : "—"}</td>`;
                    })
                    .join("")}
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <p class="muted" style="margin:12px 0 0;font-size:9px">“—”表示没有检测到值得关注的活性成分重叠，不代表配方完全相同。</p>
    `;
  }

  function renderExperiment() {
    const checkins = getExperimentCheckins();
    const todayCheckin = getTodayCheckin();
    const progress = Math.min(100, Math.round((checkins.length / 7) * 100));
    const complete = checkins.length >= 7;

    return `
      <section class="view">
        <div class="view-intro">
          <div>
            <span class="eyebrow">Personal Experiment</span>
            <h2>把“感觉不错”，变成可以回看的记录。</h2>
            <p>这是一个轻量个人观察，不替代医学判断。它帮助你保持流程一致，并比较使用前后的主观感受。</p>
          </div>
          <span class="experiment-status">${complete ? "本轮已完成" : "观察进行中"}</span>
        </div>

        <div class="experiment-layout">
          <div class="experiment-side">
            <section class="panel experiment-summary">
              <span class="panel-kicker">Research Question</span>
              <h2>${escapeHtml(state.experiment.title)}</h2>
              <p>${escapeHtml(state.experiment.hypothesis)}</p>
              <div class="experiment-facts">
                <div class="experiment-fact"><span>观察变量</span><strong>${escapeHtml(state.experiment.variable)}</strong></div>
                <div class="experiment-fact"><span>观察周期</span><strong>${formatDateCN(state.experiment.startedAt)} 起 · 7 天</strong></div>
                <div class="experiment-fact"><span>每日完成</span><strong>${checkins.length} / 7 天</strong></div>
                <div class="experiment-fact"><span>数据完整度</span><strong>${progress}%</strong></div>
              </div>
              <div class="progress-track" style="margin-top:16px">
                <div class="progress-fill" style="width:${progress}%"></div>
              </div>
            </section>

            <section class="panel checkin-card">
              <span class="panel-kicker">Quick Check-in</span>
              <h3>${todayCheckin ? "更新今天的记录" : "记录今天的感受"}</h3>
              <p>${todayCheckin ? "保持同样的判断尺度，更容易看出趋势。" : "只需要 20 秒，使用 1～5 分记录当前状态。"}</p>
              ${renderCheckinForm(todayCheckin, "inline")}
            </section>
          </div>

          <div class="panel-stack">
            <section class="panel chart-panel">
              <div class="chart-panel-head">
                <div>
                  <h3>7 天主观状态趋势</h3>
                  <p>舒适度为记录项的反向换算，仅用于观察变化。</p>
                </div>
                <div class="chart-legend">
                  <span><i></i>舒适度</span>
                  <span><i class="gold"></i>出油程度</span>
                </div>
              </div>
              <div class="main-chart">
                ${renderLineChart(checkins, false)}
              </div>
            </section>

            <section class="panel chart-panel">
              <div class="chart-panel-head">
                <div>
                  <h3>每日记录</h3>
                  <p>记录不追求漂亮，只需要稳定和真实。</p>
                </div>
                <span class="tag neutral">${checkins.length} 条数据</span>
              </div>
              ${renderCheckinHistory(checkins)}
            </section>
          </div>
        </div>
      </section>
    `;
  }

  function renderCheckinForm(values, mode) {
    const current = values || {
      oiliness: 3,
      redness: 2,
      tightness: 2,
      note: "",
    };
    const formId = mode === "modal" ? "checkinModalForm" : "checkinInlineForm";
    return `
      <form class="checkin-form" id="${formId}" data-form="checkin">
        ${rangeControl("oiliness", "出油程度", current.oiliness)}
        ${rangeControl("redness", "泛红程度", current.redness)}
        ${rangeControl("tightness", "紧绷程度", current.tightness)}
        <label class="field">
          <span style="color:var(--muted);font-size:10px;font-weight:700">今日备注</span>
          <textarea name="note" placeholder="例如：下午额头出油较明显；使用新产品时有轻微刺痛">${escapeHtml(current.note || "")}</textarea>
        </label>
        <button class="primary-button" type="submit" style="width:100%">
          ${icon("check")}
          ${values ? "更新今日记录" : "保存今日记录"}
        </button>
      </form>
    `;
  }

  function rangeControl(name, label, value) {
    return `
      <div class="slider-row">
        <div class="slider-meta">
          <span>${escapeHtml(label)}</span>
          <strong data-output-for="${name}">${rangeLabel(name, Number(value))}</strong>
        </div>
        <input type="range" name="${name}" min="1" max="5" step="1" value="${Number(value)}" aria-label="${escapeAttr(label)}" />
      </div>
    `;
  }

  function renderCheckinHistory(checkins) {
    if (!checkins.length) {
      return `<p class="muted" style="font-size:11px">还没有记录，完成今天的打卡后会在这里出现。</p>`;
    }

    return `
      <div class="checkin-history">
        ${[...checkins]
          .reverse()
          .map(
            (checkin) => `
              <div class="history-row">
                <span class="history-date">${formatMonthDay(checkin.date)}</span>
                <div class="history-values">
                  <span>出油 ${checkin.oiliness}</span>
                  <span>泛红 ${checkin.redness}</span>
                  <span>紧绷 ${checkin.tightness}</span>
                </div>
                <span class="history-note">${escapeHtml(checkin.note || "—")}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function renderLineChart(checkins, mini) {
    const width = mini ? 300 : 680;
    const height = mini ? 92 : 250;
    const pad = mini
      ? { top: 8, right: 4, bottom: 7, left: 4 }
      : { top: 12, right: 18, bottom: 30, left: 28 };
    const dates = getExperimentDates();
    const byDate = new Map(checkins.map((item) => [item.date, item]));
    const oilValues = dates.map((date) => byDate.get(date)?.oiliness ?? null);
    const comfortValues = dates.map((date) => {
      const item = byDate.get(date);
      if (!item) return null;
      return round1(
        6 -
          (Number(item.oiliness) +
            Number(item.redness) +
            Number(item.tightness)) /
            3,
      );
    });
    const yFor = (value) =>
      pad.top +
      ((5 - value) / 4) * (height - pad.top - pad.bottom);
    const xFor = (index) =>
      pad.left + (index / 6) * (width - pad.left - pad.right);

    const grid = mini
      ? ""
      : [1, 2, 3, 4, 5]
          .map(
            (value) => `
              <line x1="${pad.left}" x2="${width - pad.right}" y1="${yFor(value)}" y2="${yFor(value)}" stroke="#e5e7e0" stroke-width="1" />
              <text x="${pad.left - 8}" y="${yFor(value) + 3}" fill="#8a938f" font-size="8" text-anchor="end">${value}</text>
            `,
          )
          .join("");

    const labels = mini
      ? ""
      : dates
          .map(
            (date, index) => `
              <text x="${xFor(index)}" y="${height - 7}" fill="#8a938f" font-size="8" text-anchor="middle">${formatMonthDay(date)}</text>
            `,
          )
          .join("");

    const comfortPath = buildLinePath(comfortValues, xFor, yFor);
    const oilPath = buildLinePath(oilValues, xFor, yFor);
    const points = (values, color) =>
      values
        .map((value, index) =>
          value == null
            ? ""
            : `<circle cx="${xFor(index)}" cy="${yFor(value)}" r="${mini ? 2.1 : 3.4}" fill="${color}" stroke="#fbfaf6" stroke-width="${mini ? 1 : 2}" />`,
        )
        .join("");

    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="7 天护肤状态趋势图">
        ${grid}
        ${labels}
        <path d="${comfortPath}" fill="none" stroke="#2f6a59" stroke-width="${mini ? 2 : 2.6}" stroke-linecap="round" stroke-linejoin="round" />
        <path d="${oilPath}" fill="none" stroke="#c59a43" stroke-width="${mini ? 1.7 : 2.2}" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${mini ? "4 4" : "5 4"}" />
        ${points(comfortValues, "#2f6a59")}
        ${points(oilValues, "#c59a43")}
      </svg>
    `;
  }

  function buildLinePath(values, xFor, yFor) {
    let path = "";
    let drawing = false;
    values.forEach((value, index) => {
      if (value == null) {
        drawing = false;
        return;
      }
      path += `${drawing ? " L" : " M"} ${xFor(index).toFixed(2)} ${yFor(value).toFixed(2)}`;
      drawing = true;
    });
    return path.trim();
  }

  function openAddProduct() {
    const today = todayKey();
    modalRoot.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="addProductTitle">
        <div class="modal-header">
          <div>
            <span class="panel-kicker">New Product</span>
            <h2 id="addProductTitle">添加一瓶产品</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-modal" aria-label="关闭">
            ${icon("x")}
          </button>
        </div>
        <form data-form="add-product">
          <div class="modal-body">
            <div class="form-grid">
              <label class="field">
                <span>品牌</span>
                <input name="brand" type="text" placeholder="例如：禾屿" required maxlength="30" />
              </label>
              <label class="field">
                <span>产品名称</span>
                <input name="name" type="text" placeholder="例如：烟酰胺精华" required maxlength="40" />
              </label>
              <label class="field">
                <span>品类</span>
                <select name="category">
                  ${Object.keys(CATEGORY_META)
                    .map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`)
                    .join("")}
                </select>
              </label>
              <label class="field">
                <span>开封日期</span>
                <input name="openedAt" type="date" value="${today}" max="${today}" required />
              </label>
              <label class="field">
                <span>预计使用天数</span>
                <input name="shelfLifeDays" type="number" min="7" max="1095" value="180" required />
                <span class="field-hint">从开封日起估算，仅用于提醒。</span>
              </label>
              <label class="field">
                <span>购买价格</span>
                <input name="price" type="number" min="0" max="99999" step="1" value="129" />
                <span class="field-hint">用于计算单次使用成本。</span>
              </label>
              <label class="field full">
                <span>成分表</span>
                <textarea name="ingredients" required placeholder="粘贴产品成分表，用逗号、顿号或换行分隔。例如：水、烟酰胺、甘油、透明质酸钠"></textarea>
                <span class="field-hint">第一版会识别常见成分并检测重复，未收录成分会保留原文。</span>
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="secondary-button" type="button" data-action="close-modal">取消</button>
            <button class="primary-button" type="submit">
              ${icon("plus")}
              保存并检查流程
            </button>
          </div>
        </form>
      </div>
    `;
    openModal();
  }

  function openProfile() {
    modalRoot.innerHTML = `
      <div class="modal narrow" role="dialog" aria-modal="true" aria-labelledby="profileTitle">
        <div class="modal-header">
          <div>
            <span class="panel-kicker">Skin Profile</span>
            <h2 id="profileTitle">个人护肤档案</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-modal" aria-label="关闭">
            ${icon("x")}
          </button>
        </div>
        <form data-form="profile">
          <div class="modal-body">
            <div class="form-grid">
              <label class="field">
                <span>称呼</span>
                <input name="name" type="text" value="${escapeAttr(state.profile.name)}" required maxlength="20" />
              </label>
              <label class="field">
                <span>肤质</span>
                <select name="skinType">
                  ${["干性", "混合偏干", "中性", "混合偏油", "油性"]
                    .map((value) => `<option ${state.profile.skinType === value ? "selected" : ""}>${value}</option>`)
                    .join("")}
                </select>
              </label>
              <label class="field">
                <span>敏感程度</span>
                <select name="sensitivity">
                  ${["稳定", "轻度敏感", "容易敏感"]
                    .map((value) => `<option ${state.profile.sensitivity === value ? "selected" : ""}>${value}</option>`)
                    .join("")}
                </select>
              </label>
              <label class="field">
                <span>当前目标</span>
                <input name="goal" type="text" value="${escapeAttr(state.profile.goal)}" required maxlength="40" />
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="secondary-button" type="button" data-action="close-modal">取消</button>
            <button class="primary-button" type="submit">保存档案</button>
          </div>
        </form>
      </div>
    `;
    openModal();
  }

  function openCheckin() {
    const values = getTodayCheckin();
    modalRoot.innerHTML = `
      <div class="modal narrow" role="dialog" aria-modal="true" aria-labelledby="checkinTitle">
        <div class="modal-header">
          <div>
            <span class="panel-kicker">Daily Check-in</span>
            <h2 id="checkinTitle">${values ? "更新今日状态" : "记录今日状态"}</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-modal" aria-label="关闭">
            ${icon("x")}
          </button>
        </div>
        <div class="modal-body">
          ${renderCheckinForm(values, "modal")}
        </div>
      </div>
    `;
    openModal();
  }

  function openToolOverlap() {
    const overlaps = getActiveOverlaps();
    const body = overlaps.length
      ? `
        <div class="tool-result-list">
          ${overlaps
            .map(
              (overlap) => `
                <div class="tool-result-row">
                  <div>
                    <strong>${escapeHtml(overlap.shared.join("、"))} 重复</strong>
                    <p>${escapeHtml(overlap.products.map((product) => product.name).join(" × "))}</p>
                  </div>
                  <span class="tag coral">需确认</span>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="tool-callout">
          <strong>怎么使用这个结果</strong>
          <p>先确认两瓶产品是否都有保留价值。如果功效相近，可把其中一瓶改为低频使用，或在观察期内只保留一个主要来源。</p>
        </div>
      `
      : `
        <div class="tool-empty">
          <span class="tool-empty-icon">${icon("circleCheck")}</span>
          <strong>当前没有明显活性成分重叠</strong>
          <p>这不代表配方完全相同，只表示当前成分库没有检测到值得提示的重复项。</p>
        </div>
      `;

    openToolModal({
      kicker: "Ingredient Scan",
      title: "成分重叠扫描",
      body,
      footer: `<button class="ghost-button" type="button" data-nav="vanity">查看化妆台</button>`,
    });
  }

  function openToolCalendar() {
    openToolModal({
      kicker: "Active Calendar",
      title: "活性成分日历",
      body: `
        <p class="tool-leading-copy">下面是当前流程生成的 7 天活性成分安排。低频产品默认穿插在休息日之间，实际使用仍应根据皮肤反馈调整。</p>
        <div class="tool-calendar-wrap">
          ${renderActiveCalendar()}
          <div class="calendar-legend">
            <span><i class="legend-dot"></i>活性成分</span>
            <span><i class="legend-dot gold"></i>低频使用</span>
            <span><i class="legend-dot coral"></i>修护休息日</span>
          </div>
        </div>
        <div class="tool-callout">
          <strong>查看重点</strong>
          <p>不要只关注某一天用了什么，也要确认两种活性产品是否连续安排在相邻晚间。出现持续不适时，应先暂停新增步骤。</p>
        </div>
      `,
      footer: `<button class="ghost-button" type="button" data-nav="today">回到今日流程</button>`,
    });
  }

  function openToolCost() {
    const products = [...state.products]
      .filter((product) => product.status !== "paused")
      .sort((a, b) => costPerUse(b) - costPerUse(a));
    const body = products.length
      ? `
        <p class="tool-leading-copy">排序按“已记录使用次数”计算。没有使用记录的产品会显示购入价，而不是单次成本。</p>
        <div class="tool-result-list">
          ${products
            .map((product) => {
              const used = Number(product.usedCount || 0);
              return `
                <div class="tool-result-row">
                  <div>
                    <strong>${escapeHtml(product.name)}</strong>
                    <p>${used ? `已使用 ${used} 次 · 开封 ${getOpenedDays(product)} 天` : "尚无使用记录 · 暂不计算单次成本"}</p>
                  </div>
                  <div class="tool-result-value">
                    <strong>¥${used ? costPerUse(product).toFixed(1) : Number(product.price || 0).toFixed(0)}</strong>
                    <span>${used ? "单次成本" : "购入价"}</span>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="tool-callout">
          <strong>数据边界</strong>
          <p>单次成本只能反映价格与记录次数的关系，不代表产品价值。使用次数越完整，结果才越接近真实情况。</p>
        </div>
      `
      : `<div class="tool-empty"><strong>还没有可用于计算的产品</strong><p>添加产品并完成打卡后，这里会生成单次使用成本排序。</p></div>`;

    openToolModal({
      kicker: "Cost Per Use",
      title: "使用成本排序",
      body,
      footer: `<button class="ghost-button" type="button" data-action="open-add-product">添加产品</button>`,
    });
  }

  function openToolExpiry() {
    const products = [...state.products]
      .filter((product) => product.status !== "paused")
      .sort((a, b) => getDaysLeft(a) - getDaysLeft(b));
    const body = products.length
      ? `
        <p class="tool-leading-copy">按开封日期和预计使用天数推算。这里只用于安排优先顺序，不替代产品包装上的保质期说明。</p>
        <div class="tool-result-list">
          ${products
            .map((product) => {
              const daysLeft = getDaysLeft(product);
              const tone = daysLeft <= 45 ? "coral" : daysLeft <= 90 ? "gold" : "neutral";
              return `
                <div class="tool-result-row">
                  <div>
                    <strong>${escapeHtml(product.name)}</strong>
                    <p>开封 ${getOpenedDays(product)} 天 · 预计总量 ${product.shelfLifeDays} 天</p>
                  </div>
                  <div class="tool-result-value">
                    <strong>${daysLeft} 天</strong>
                    <span class="tag ${tone}">${daysLeft <= 45 ? "优先使用" : daysLeft <= 90 ? "留意" : "状态正常"}</span>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `
      : `<div class="tool-empty"><strong>还没有产品记录</strong><p>添加产品并填写开封日期后，临期顺序会自动生成。</p></div>`;

    openToolModal({
      kicker: "Expiry Radar",
      title: "产品优先使用顺序",
      body,
      footer: `<button class="ghost-button" type="button" data-nav="vanity">查看化妆台</button>`,
    });
  }

  function openToolRoutine() {
    const routine = buildRoutine();
    const activeSteps = [...routine.morning, ...routine.evening].filter(
      (step) => getProductActives(step.product).length,
    );
    const totalSteps = routine.morning.length + routine.evening.length;
    const complexity =
      totalSteps <= 6
        ? { tone: "green", label: "节奏适中", copy: "当前步骤数量较少，更容易稳定执行。" }
        : totalSteps <= 8
          ? { tone: "gold", label: "接近上限", copy: "步骤开始变多，新增产品前应先确认是否能长期坚持。" }
          : { tone: "coral", label: "建议精简", copy: "当前步骤较多，可优先合并功能重复或低频使用的产品。" };

    const rows = [
      ...routine.morning.map((step) => ({ ...step, period: "早间" })),
      ...routine.evening.map((step) => ({ ...step, period: "晚间" })),
    ];

    openToolModal({
      kicker: "Routine Complexity",
      title: "流程复杂度检查",
      body: `
        <div class="tool-kpi-grid">
          <div><span>当前总步骤</span><strong>${totalSteps}</strong></div>
          <div><span>活性成分步骤</span><strong>${activeSteps.length}</strong></div>
          <div><span>使用中产品</span><strong>${state.products.filter((product) => product.status !== "paused").length}</strong></div>
        </div>
        <div class="tool-status-card ${complexity.tone}">
          <strong>${complexity.label}</strong>
          <p>${complexity.copy}</p>
        </div>
        <div class="tool-result-list compact">
          ${rows
            .map(
              (step) => `
                <div class="tool-result-row">
                  <div>
                    <strong>${escapeHtml(step.label)}</strong>
                    <p>${escapeHtml(step.period)} · ${escapeHtml(step.product.name)}</p>
                  </div>
                  <span class="tag ${getProductActives(step.product).length ? "coral" : "neutral"}">${escapeHtml(step.frequency || "每日")}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      `,
      footer: `<button class="ghost-button" type="button" data-nav="today">查看今日流程</button>`,
    });
  }

  function openToolModal({ kicker, title, body, footer = "" }) {
    modalRoot.innerHTML = `
      <div class="modal tool-modal" role="dialog" aria-modal="true" aria-labelledby="toolModalTitle">
        <div class="modal-header">
          <div>
            <span class="panel-kicker">${escapeHtml(kicker)}</span>
            <h2 id="toolModalTitle">${escapeHtml(title)}</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-modal" aria-label="关闭">
            ${icon("x")}
          </button>
        </div>
        <div class="modal-body tool-modal-body">${body}</div>
        <div class="modal-footer">
          <button class="secondary-button" type="button" data-action="close-modal">关闭</button>
          ${footer}
        </div>
      </div>
    `;
    openModal();
  }

  function openProduct(productId) {
    const product = state.products.find((item) => item.id === productId);
    if (!product) return;
    const ingredientRows = product.ingredients.map((name) => {
      const info = getIngredientInfo(name);
      return `
        <div class="ingredient-row">
          <div>
            <span class="ingredient-name">${escapeHtml(name)}</span>
            <span class="ingredient-role">${escapeHtml(info.role)}</span>
          </div>
          <p>${escapeHtml(info.note)}</p>
        </div>
      `;
    });
    const relatedConflict = getConflicts().find((item) =>
      item.pair.some((entry) => entry.id === product.id),
    );
    const relatedDuplicate = getActiveOverlaps().find((item) =>
      item.products.some((entry) => entry.id === product.id),
    );

    modalRoot.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="productDetailTitle">
        <div class="modal-header">
          <div>
            <span class="panel-kicker">${escapeHtml(product.category)} / Ingredient Card</span>
            <h2 id="productDetailTitle">${escapeHtml(product.name)}</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-modal" aria-label="关闭">
            ${icon("x")}
          </button>
        </div>
        <div class="modal-body">
          <div class="product-detail">
            <div class="detail-pack" style="--pack-bg:${escapeAttr(product.packBg || product.packColor)};--pack-color:${escapeAttr(product.packColor)};--cap-color:${escapeAttr(product.capColor)}">
              <div class="product-pack pack-${escapeAttr(product.shape)}"></div>
            </div>
            <div class="detail-copy">
              <span class="product-brand">${escapeHtml(product.brand || "个人档案")}</span>
              <h3>${escapeHtml(product.name)}</h3>
              <p>${escapeHtml(product.role || categoryRole(product.category))} · 当前${product.status === "paused" ? "已停用" : "使用中"}</p>
              <div class="tag-row">
                ${getProductTags(product)
                  .map(
                    (tag, index) =>
                      `<span class="tag ${index === 0 ? "" : "neutral"}">${escapeHtml(tag)}</span>`,
                  )
                  .join("")}
              </div>
              <div class="detail-stats">
                <div class="detail-stat"><span>开封天数</span><strong>${getOpenedDays(product)} 天</strong></div>
                <div class="detail-stat"><span>预计余量</span><strong>${getDaysLeft(product)} 天</strong></div>
                <div class="detail-stat"><span>单次成本</span><strong>¥${costPerUse(product).toFixed(1)}</strong></div>
                <div class="detail-stat"><span>已记录使用</span><strong>${product.usedCount || 0} 次</strong></div>
              </div>
              ${
                relatedConflict
                  ? `
                    <div class="routine-note">
                      <strong>流程提示</strong>
                      <p>${escapeHtml(relatedConflict.description)}</p>
                    </div>
                  `
                  : relatedDuplicate
                    ? `
                      <div class="routine-note">
                        <strong>功效重复</strong>
                        <p>${escapeHtml(relatedDuplicate.description)}</p>
                      </div>
                    `
                    : ""
              }
            </div>
          </div>

          <div class="section-heading" style="margin-top:24px">
            <h3>成分翻译</h3>
            <span class="tag neutral">${product.ingredients.length} 项</span>
          </div>
          <div class="ingredient-list">${ingredientRows.join("")}</div>
        </div>
        <div class="modal-footer">
          <button class="danger-button" type="button" data-action="toggle-product-status" data-id="${escapeAttr(product.id)}">
            ${product.status === "paused" ? "重新启用" : "暂时停用"}
          </button>
          <button class="primary-button" type="button" data-action="close-modal">完成查看</button>
        </div>
      </div>
    `;
    openModal();
  }

  function openModal() {
    modalRoot.classList.add("is-open");
    document.body.style.overflow = "hidden";
    hydrateIcons(modalRoot);
  }

  function closeModal() {
    modalRoot.classList.remove("is-open");
    modalRoot.innerHTML = "";
    document.body.style.overflow = "";
  }

  function addProductFromForm(form) {
    const data = new FormData(form);
    const category = String(data.get("category") || "其他");
    const meta = CATEGORY_META[category] || CATEGORY_META.其他;
    const ingredients = parseIngredients(String(data.get("ingredients") || ""));
    const product = {
      id: `p-${Date.now()}`,
      brand: String(data.get("brand") || "个人档案").trim(),
      name: String(data.get("name") || "未命名产品").trim(),
      category,
      role: categoryRole(category),
      shape: meta.shape,
      packColor: meta.pack,
      packBg: lighten(meta.pack, 8),
      capColor: meta.cap,
      ingredients,
      openedAt: String(data.get("openedAt") || todayKey()),
      shelfLifeDays: Math.max(7, Number(data.get("shelfLifeDays") || 180)),
      price: Math.max(0, Number(data.get("price") || 0)),
      usedCount: 0,
      status: "active",
      times: deriveRoutineTimes(category, ingredients),
      frequency: getProductActives({ ingredients }).length ? "按观察计划" : "每日",
      tags: deriveProductTags(category, ingredients),
    };

    state.products.unshift(product);
    saveState();
    closeModal();
    ui.view = "vanity";
    ui.productFilter = "全部";
    render();

    const conflict = getConflicts().filter((item) =>
      item.pair.some((entry) => entry.id === product.id),
    ).length;
    const duplicate = getActiveOverlaps().filter((item) =>
      item.products.some((entry) => entry.id === product.id),
    ).length;

    if (conflict) {
      showToast(`产品已加入。当前流程发现 ${conflict} 处使用时间需要调整。`);
    } else if (duplicate) {
      showToast(`产品已加入。当前化妆台发现 ${duplicate} 处功效成分重叠。`);
    } else {
      showToast("产品已加入，并已重新生成护肤流程。");
    }
  }

  function saveProfile(form) {
    const data = new FormData(form);
    state.profile = {
      name: String(data.get("name") || "用户").trim(),
      skinType: String(data.get("skinType") || "中性"),
      sensitivity: String(data.get("sensitivity") || "稳定"),
      goal: String(data.get("goal") || "稳定护肤").trim(),
    };
    saveState();
    closeModal();
    render();
    showToast("个人护肤档案已更新。");
  }

  function saveCheckin(form) {
    const data = new FormData(form);
    const entry = {
      date: todayKey(),
      oiliness: clamp(Number(data.get("oiliness") || 3), 1, 5),
      redness: clamp(Number(data.get("redness") || 2), 1, 5),
      tightness: clamp(Number(data.get("tightness") || 2), 1, 5),
      note: String(data.get("note") || "").trim(),
    };
    const existingIndex = state.checkins.findIndex(
      (item) => item.date === entry.date,
    );

    if (existingIndex >= 0) {
      state.checkins[existingIndex] = entry;
    } else {
      state.checkins.push(entry);
    }

    state.checkins.sort((a, b) => a.date.localeCompare(b.date));
    saveState();
    closeModal();
    render();
    showToast(
      getExperimentCheckins().length >= 7
        ? "今日记录已保存，本轮 7 天观察数据已完整。"
        : "今日状态已保存，趋势图已更新。",
    );
  }

  function toggleStep(stepId) {
    const key = todayKey();
    const completed = new Set(state.completed[key] || []);
    if (completed.has(stepId)) {
      completed.delete(stepId);
    } else {
      completed.add(stepId);
    }
    state.completed[key] = [...completed];
    saveState();
    render();
  }

  function toggleProductStatus(productId) {
    const product = state.products.find((item) => item.id === productId);
    if (!product) return;
    product.status = product.status === "paused" ? "active" : "paused";
    saveState();
    closeModal();
    render();
    showToast(
      product.status === "paused"
        ? `${product.name} 已停用，流程已重新计算。`
        : `${product.name} 已重新加入流程。`,
    );
  }

  function buildRoutine() {
    const products = state.products.filter(
      (product) => product.status !== "paused",
    );
    const morning = [];
    const evening = [];

    products.forEach((product) => {
      const times =
        product.times && product.times.length
          ? product.times
          : deriveRoutineTimes(product.category, product.ingredients);
      const step = {
        id: `step-${product.id}`,
        product,
        label: routineLabel(product),
        frequency: product.frequency || "每日",
      };
      if (times.includes("morning")) morning.push(step);
      if (times.includes("evening")) evening.push(step);
    });

    const sorter = (a, b) => {
      const orderA = CATEGORY_META[a.product.category]?.order || 8;
      const orderB = CATEGORY_META[b.product.category]?.order || 8;
      return orderA - orderB;
    };

    morning.sort(sorter);
    evening.sort(sorter);

    return { morning, evening };
  }

  function deriveRoutineTimes(category, ingredients) {
    const activeNames = getProductActives({ ingredients });
    if (category === "防晒") return ["morning"];
    if (category === "去角质") return ["evening"];
    if (category === "彩妆") return [];
    if (category === "洁面") return ["morning", "evening"];
    if (category === "面霜" || category === "乳液") {
      return ["morning", "evening"];
    }
    if (
      activeNames.includes("视黄醇") ||
      activeNames.includes("水杨酸")
    ) {
      return ["evening"];
    }
    return ["morning", "evening"];
  }

  function routineLabel(product) {
    const labels = {
      洁面: "清洁",
      化妆水: "补水",
      精华: "精华",
      乳液: "保湿",
      面霜: "面霜",
      防晒: "防晒",
      去角质: "角质护理",
      彩妆: "彩妆",
      其他: "护理",
    };
    return labels[product.category] || product.role || "护理";
  }

  function categoryRole(category) {
    return CATEGORY_META[category]?.role || "辅助护理";
  }

  function getProductActives(product) {
    return product.ingredients.filter((name) => {
      const info = findIngredient(name);
      return Boolean(info?.active);
    });
  }

  function getIngredientInfo(name) {
    return (
      findIngredient(name) || {
        role: "其他",
        tone: "neutral",
        note: "暂未收录，建议结合产品说明、配方浓度与个人使用感受判断。",
      }
    );
  }

  function findIngredient(name) {
    const normalized = String(name).replace(/\s/g, "");
    const key = Object.keys(INGREDIENT_DB).find(
      (item) => normalized.includes(item) || item.includes(normalized),
    );
    if (!key) return null;
    return { name: key, ...INGREDIENT_DB[key] };
  }

  function parseIngredients(raw) {
    const parts = raw
      .split(/[,，、;；\n]/)
      .map((item) => item.trim())
      .filter(Boolean);
    return [...new Set(parts)];
  }

  function deriveProductTags(category, ingredients) {
    const roles = [
      ...new Set(
        ingredients
          .map((name) => getIngredientInfo(name).role)
          .filter((role) => role !== "溶剂" && role !== "其他"),
      ),
    ];
    return roles.length ? roles.slice(0, 3) : [categoryRole(category)];
  }

  function getProductTags(product) {
    if (product.tags && product.tags.length) return product.tags;
    return deriveProductTags(product.category, product.ingredients);
  }

  function getActiveOverlaps() {
    const results = [];
    const activeProducts = state.products.filter(
      (product) =>
        product.status !== "paused" && getProductActives(product).length,
    );

    for (let i = 0; i < activeProducts.length; i += 1) {
      for (let j = i + 1; j < activeProducts.length; j += 1) {
        const shared = sharedActives(activeProducts[i], activeProducts[j]);
        if (!shared.length) continue;
        results.push({
          type: "duplicate",
          shared,
          products: [activeProducts[i], activeProducts[j]],
          title: `检测到${shared.join("、")}重复`,
          description: `${activeProducts[i].name} 和 ${activeProducts[j].name} 都包含${shared.join("、")}，建议确认是否需要同时保留。`,
        });
      }
    }

    return results;
  }

  function sharedActives(productA, productB) {
    const a = getProductActives(productA);
    const b = getProductActives(productB);
    return a.filter((name) => b.includes(name));
  }

  function getConflicts() {
    const products = state.products.filter(
      (product) => product.status !== "paused",
    );
    const conflicts = [];

    for (let i = 0; i < products.length; i += 1) {
      for (let j = i + 1; j < products.length; j += 1) {
        const first = getProductActives(products[i]);
        const second = getProductActives(products[j]);
        const retinolWithAcid =
          (first.includes("视黄醇") && second.includes("水杨酸")) ||
          (second.includes("视黄醇") && first.includes("水杨酸"));
        const retinolWithVitaminC =
          (first.includes("视黄醇") &&
            (second.includes("抗坏血酸") || second.includes("维生素C"))) ||
          (second.includes("视黄醇") &&
            (first.includes("抗坏血酸") || first.includes("维生素C")));

        if (retinolWithAcid) {
          conflicts.push({
            type: "conflict",
            severity: "space-out",
            tone: "coral",
            tag: "建议错开",
            pair: [products[i], products[j]],
            title: "视黄醇与水杨酸不宜密集叠加",
            shortDescription: "两款产品都有晚间护理定位，建议错开日期。",
            description:
              "视黄醇和水杨酸都可能带来干燥或刺激感。根据当前记录，建议不要把两者安排在同一晚，并从低频开始观察。",
          });
        }

        if (retinolWithVitaminC) {
          conflicts.push({
            type: "conflict",
            severity: "caution",
            tone: "gold",
            tag: "注意频率",
            pair: [products[i], products[j]],
            title: "视黄醇与维生素 C 需要关注使用感受",
            shortDescription: "可分开使用，敏感期建议降低叠加频率。",
            description:
              "两款产品都属于活性护理。可以安排在不同时间段，或根据皮肤反馈减少同一天的使用频率。",
          });
        }
      }
    }

    return conflicts;
  }

  function getPriorityInsight() {
    const conflict = getConflicts()[0];
    if (conflict) {
      return {
        ...conflict,
        shortDescription: conflict.shortDescription,
      };
    }

    const duplicate = getActiveOverlaps()[0];
    if (duplicate) {
      return {
        ...duplicate,
        tone: "gold",
        tag: "功效重复",
        shortDescription: "同一种活性成分出现多次，建议只保留一个主要来源。",
      };
    }

    const expiring = getExpiringProducts()[0];
    if (expiring) {
      return {
        type: "expiry",
        tone: "coral",
        tag: "优先使用",
        title: `${expiring.name} 即将到期`,
        shortDescription: `按开封时间推算，预计还剩 ${getDaysLeft(expiring)} 天。`,
        description: `按当前开封时间与预计使用天数推算，${expiring.name} 已进入优先使用区。`,
      };
    }

    return null;
  }

  function getInsights() {
    const insights = [];
    const conflict = getConflicts()[0];
    if (conflict) {
      insights.push({
        title: conflict.title,
        description: conflict.description,
      });
    }

    const duplicate = getActiveOverlaps()[0];
    if (duplicate) {
      insights.push({
        title: duplicate.title,
        description: duplicate.description,
      });
    } else {
      insights.push({
        title: "活性成分没有明显重复",
        description:
          "当前产品中未发现需要提示的活性成分重叠，继续记录使用感受即可。",
      });
    }

    const expiring = getExpiringProducts();
    if (expiring.length) {
      insights.push({
        title: `${expiring.length} 瓶产品进入优先使用区`,
        description: `${expiring.map((product) => product.name).join("、")} 按记录时间推算将在 45 天内到期。`,
      });
    } else {
      insights.push({
        title: "开封时间管理正常",
        description: "近期没有产品进入 45 天优先使用区。",
      });
    }

    const lowUse = [...state.products]
      .filter((product) => product.usedCount > 0)
      .sort((a, b) => costPerUse(b) - costPerUse(a))[0];
    if (lowUse) {
      insights.push({
        title: `${lowUse.name} 的单次使用成本较高`,
        description: `按 ¥${lowUse.price || 0} 和 ${lowUse.usedCount || 0} 次使用记录估算，当前单次成本约 ¥${costPerUse(lowUse).toFixed(1)}。`,
      });
    }

    return insights;
  }

  function getAnalysis() {
    const conflicts = getConflicts();
    const duplicates = getActiveOverlaps();
    const expiring = getExpiringProducts();
    const coverage = getCategoryCoverage();
    const overlapScore = clamp(
      100 - duplicates.length * 18 - conflicts.length * 22,
      28,
      100,
    );
    const adherence = clamp(
      Math.round((getExperimentCheckins().length / 7) * 100),
      0,
      100,
    );
    const expiryScore = clamp(100 - expiring.length * 18, 40, 100);
    const complexity = clamp(
      100 - Math.max(0, state.products.length - 6) * 8,
      55,
      100,
    );
    const dimensions = [
      { label: "功能覆盖", value: coverage },
      { label: "成分重复", value: overlapScore, tone: "coral" },
      { label: "使用依从", value: adherence },
      { label: "保质期风险", value: expiryScore, tone: "gold" },
      { label: "流程复杂度", value: complexity },
      {
        label: "数据完整度",
        value: Math.round((getExperimentCheckins().length / 7) * 100),
      },
    ];
    const score = Math.round(
      coverage * 0.18 +
        overlapScore * 0.22 +
        adherence * 0.2 +
        expiryScore * 0.16 +
        complexity * 0.12 +
        dimensions[5].value * 0.12,
    );
    const label =
      score >= 88
        ? "组合状态稳定"
        : score >= 75
          ? "有少量需要调整的地方"
          : "建议先简化当前流程";
    const summary =
      conflicts.length > 0
        ? "当前产品组合的基础步骤较完整，但活性成分的时间安排需要调整。先把频率拉开，再继续记录。"
        : duplicates.length > 0
          ? "产品组合整体可用，但存在功效重复。减少重复步骤会让流程更容易坚持。"
          : "当前组合结构清晰，继续完成个人观察可以提升数据完整度。";

    return {
      score,
      label,
      summary,
      dimensions,
      conflicts: conflicts.length,
      duplicates: duplicates.length,
    };
  }

  function getCategoryCoverage() {
    const categories = new Set(state.products.map((product) => product.category));
    const target = ["洁面", "精华", "面霜", "防晒"];
    const covered = target.filter((item) => categories.has(item)).length;
    return Math.round((covered / target.length) * 100);
  }

  function getUniqueRoleCount() {
    return new Set(
      state.products.map((product) => product.role || product.category),
    ).size;
  }

  function getAverageCostPerUse() {
    const valid = state.products.filter(
      (product) => product.usedCount > 0 && product.price >= 0,
    );
    if (!valid.length) return 0;
    const average =
      valid.reduce((sum, product) => sum + costPerUse(product), 0) /
      valid.length;
    return average.toFixed(1);
  }

  function costPerUse(product) {
    const used = Number(product.usedCount || 0);
    const price = Number(product.price || 0);
    if (used <= 0) return price;
    return price / used;
  }

  function getExpiringProducts() {
    return state.products.filter(
      (product) => product.status !== "paused" && getDaysLeft(product) <= 45,
    );
  }

  function getDaysLeft(product) {
    return Math.max(
      0,
      Number(product.shelfLifeDays || 180) - getOpenedDays(product),
    );
  }

  function getOpenedDays(product) {
    const start = dateFromKey(product.openedAt);
    const today = dateFromKey(todayKey());
    return Math.max(
      0,
      Math.floor((today.getTime() - start.getTime()) / 86400000),
    );
  }

  function getExperimentDates() {
    return Array.from({ length: 7 }, (_, index) =>
      dateKey(addDays(dateFromKey(state.experiment.startedAt), index)),
    );
  }

  function getExperimentCheckins() {
    const range = new Set(getExperimentDates());
    return state.checkins.filter((item) => range.has(item.date));
  }

  function getTodayCheckin() {
    return state.checkins.find((item) => item.date === todayKey());
  }

  function getCheckinStreak() {
    const dates = new Set(state.checkins.map((item) => item.date));
    let cursor = dateFromKey(todayKey());
    if (!dates.has(todayKey())) {
      cursor = addDays(cursor, -1);
    }
    let streak = 0;
    while (dates.has(dateKey(cursor))) {
      streak += 1;
      cursor = addDays(cursor, -1);
    }
    return streak;
  }

  function isStepDone(stepId) {
    return (state.completed[todayKey()] || []).includes(stepId);
  }

  function rangeLabel(name, value) {
    const labels = {
      oiliness: {
        1: "1 · 清爽",
        2: "2 · 轻微",
        3: "3 · 适中",
        4: "4 · 明显",
        5: "5 · 很强",
      },
      redness: {
        1: "1 · 稳定",
        2: "2 · 轻微",
        3: "3 · 可见",
        4: "4 · 明显",
        5: "5 · 很强",
      },
      tightness: {
        1: "1 · 柔软",
        2: "2 · 轻微",
        3: "3 · 适中",
        4: "4 · 明显",
        5: "5 · 很强",
      },
    };
    return labels[name]?.[value] || String(value);
  }

  function icon(name) {
    const path =
      ICONS[name] ||
      ICONS.sparkles ||
      '<circle cx="12" cy="12" r="10"/>';
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  }

  function hydrateIcons(root) {
    root.querySelectorAll("[data-icon]").forEach((element) => {
      if (element.querySelector("svg")) return;
      const name = element.dataset.icon.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      );
      element.innerHTML = icon(name);
    });
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3200);
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultState();
      const parsed = JSON.parse(raw);
      return {
        ...getDefaultState(),
        ...parsed,
        profile: { ...getDefaultState().profile, ...(parsed.profile || {}) },
        experiment: {
          ...getDefaultState().experiment,
          ...(parsed.experiment || {}),
        },
      };
    } catch (error) {
      return getDefaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      // Local storage may be unavailable in hardened browser contexts.
    }
  }

  function getDefaultState() {
    const today = todayKey();
    return {
      version: 1,
      profile: {
        name: "林知夏",
        skinType: "混合偏油",
        sensitivity: "轻度敏感",
        goal: "稳定水油与提亮",
      },
      products: [
        {
          id: "p-cleanser",
          brand: "禾屿",
          name: "氨基酸净润洁面",
          category: "洁面",
          role: "清洁",
          shape: "bottle",
          packColor: "#f1eadc",
          packBg: "#ded8ca",
          capColor: "#1d4339",
          ingredients: ["水", "甘油", "椰油酰甘氨酸钾", "透明质酸钠"],
          openedAt: dateKey(addDays(new Date(), -52)),
          shelfLifeDays: 180,
          price: 89,
          usedCount: 46,
          status: "active",
          times: ["morning", "evening"],
          frequency: "每日",
          tags: ["温和清洁", "保湿"],
        },
        {
          id: "p-serum",
          brand: "未岚",
          name: "5% 烟酰胺精华",
          category: "精华",
          role: "提亮 / 控油",
          shape: "dropper",
          packColor: "#e6bfb3",
          packBg: "#d7b0a4",
          capColor: "#5e3d34",
          ingredients: ["水", "烟酰胺", "甘油", "透明质酸钠", "泛醇"],
          openedAt: dateKey(addDays(new Date(), -28)),
          shelfLifeDays: 120,
          price: 129,
          usedCount: 31,
          status: "active",
          times: ["morning"],
          frequency: "每日",
          tags: ["提亮 / 控油", "保湿"],
        },
        {
          id: "p-retinol",
          brand: "夜航",
          name: "0.1% 视黄醇精华乳",
          category: "精华",
          role: "抗老 / 更新",
          shape: "tube",
          packColor: "#dcd9bc",
          packBg: "#cbc8aa",
          capColor: "#24473d",
          ingredients: ["水", "视黄醇", "角鲨烷", "生育酚", "神经酰胺"],
          openedAt: dateKey(addDays(new Date(), -19)),
          shelfLifeDays: 150,
          price: 169,
          usedCount: 17,
          status: "active",
          times: ["evening"],
          frequency: "每周 2 次",
          tags: ["抗老 / 更新", "修护"],
        },
        {
          id: "p-moisturizer",
          brand: "原野",
          name: "神经酰胺修护霜",
          category: "面霜",
          role: "修护 / 保湿",
          shape: "jar",
          packColor: "#f2ede4",
          packBg: "#e0dbd2",
          capColor: "#9a9c93",
          ingredients: ["水", "甘油", "神经酰胺", "角鲨烷", "泛醇"],
          openedAt: dateKey(addDays(new Date(), -73)),
          shelfLifeDays: 210,
          price: 159,
          usedCount: 60,
          status: "active",
          times: ["morning", "evening"],
          frequency: "每日",
          tags: ["修护", "保湿"],
        },
        {
          id: "p-sunscreen",
          brand: "晴川",
          name: "轻透防晒乳 SPF50",
          category: "防晒",
          role: "防晒",
          shape: "tube",
          packColor: "#e4cf92",
          packBg: "#d3bd7e",
          capColor: "#2f6a59",
          ingredients: ["水", "氧化锌", "甲氧基肉桂酸乙基己酯", "甘油"],
          openedAt: dateKey(addDays(new Date(), -35)),
          shelfLifeDays: 365,
          price: 119,
          usedCount: 29,
          status: "active",
          times: ["morning"],
          frequency: "每日",
          tags: ["防晒", "保湿"],
        },
        {
          id: "p-exfoliant",
          brand: "砂时",
          name: "2% 水杨酸精华",
          category: "去角质",
          role: "去角质 / 控油",
          shape: "dropper",
          packColor: "#e7d0c8",
          packBg: "#d6bdb4",
          capColor: "#994f3e",
          ingredients: ["水", "水杨酸", "泛醇", "甘油"],
          openedAt: dateKey(addDays(new Date(), -92)),
          shelfLifeDays: 120,
          price: 139,
          usedCount: 11,
          status: "active",
          times: ["evening"],
          frequency: "每周 2 次",
          tags: ["去角质", "控油"],
        },
      ],
      completed: {
        [today]: ["step-p-cleanser", "step-p-serum"],
      },
      checkins: [
        { date: dateKey(addDays(new Date(), -6)), oiliness: 4, redness: 3, tightness: 2, note: "下午额头出油明显" },
        { date: dateKey(addDays(new Date(), -5)), oiliness: 3, redness: 2, tightness: 2, note: "使用新产品，状态稳定" },
        { date: dateKey(addDays(new Date(), -4)), oiliness: 3, redness: 2, tightness: 1, note: "晚间流程完成" },
        { date: dateKey(addDays(new Date(), -3)), oiliness: 2, redness: 2, tightness: 2, note: "两颊略微干燥" },
        { date: dateKey(addDays(new Date(), -2)), oiliness: 2, redness: 1, tightness: 1, note: "出油较前几日轻" },
        { date: dateKey(addDays(new Date(), -1)), oiliness: 2, redness: 2, tightness: 1, note: "保持同一套流程" },
      ],
      experiment: {
        id: "experiment-niacinamide",
        title: "烟酰胺精华的 7 天观察",
        hypothesis: "观察加入烟酰胺精华后，下午出油与两颊舒适度是否发生变化。",
        variable: "早间加入 5% 烟酰胺精华",
        productId: "p-serum",
        startedAt: dateKey(addDays(new Date(), -6)),
      },
    };
  }

  function todayKey() {
    return dateKey(new Date());
  }

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function dateFromKey(key) {
    const [year, month, day] = String(key).split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function addDays(date, days) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
  }

  function formatMonthDay(key) {
    const date = dateFromKey(key);
    return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }

  function formatDateCN(key) {
    const date = dateFromKey(key);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }

  function formatCompactDate(date) {
    return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }

  function shortName(name) {
    return name.length > 7 ? `${name.slice(0, 7)}…` : name;
  }

  function lighten(hex, amount) {
    const value = hex.replace("#", "");
    if (value.length !== 6) return hex;
    const channels = [0, 2, 4].map((index) =>
      clamp(parseInt(value.slice(index, index + 2), 16) + amount, 0, 255),
    );
    return `#${channels
      .map((channel) => channel.toString(16).padStart(2, "0"))
      .join("")}`;
  }

  function round1(value) {
    return Math.round(value * 10) / 10;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[character],
    );
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }
})();

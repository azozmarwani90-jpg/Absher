// بيانات تجريبية موحدة لكل الصفحات
const mockData = {
  user: {
    name: " عبدالرحمن احمد",
    id: "10XXXXXXXX",
    level: "مستخدم موثّق",
    mobile: "05XXXXXXX9",
  },
  reminders: [
    { title: "موعد فحص المركبة الاثنين 9 صباحاً", tag: "مركبة", note: "الوصول قبل الموعد بربع ساعة لتأكيد الحجز.", link: "checkout.html?service=vehicle-inspection" },
    { title: "انتهاء جواز السفر خلال 30 يوماً", tag: "الجوازات", note: "ابدأ التجديد لتجنب أي تأخير في السفر.", link: "checkout.html?service=passport-renew" },
    { title: "اعتراض على المخالفة المسجلة", tag: "المرور", note: "أرفق أدلتك لبدء الاعتراض فوراً.", link: "checkout.html?service=complaint" },
  ],
  quickActions: [
    { label: "اعتراض مخالفة", icon: "fa-scale-balanced", link: "checkout.html?service=complaint" },
    { label: "زيارة عائلية", icon: "fa-plane-departure", link: "checkout.html?service=family-visit" },
    { label: "تجديد الجواز", icon: "fa-passport", link: "checkout.html?service=passport-renew" },
  ],
  suggestions: [
    { title: "ابدأ اعتراضك على المخالفة المسجلة", detail: "إرفاق الأدلة والمتابعة الفورية", link: "checkout.html?service=complaint" },
    { title: "حجز زيارة عائلية للأخت", detail: "دقائق لإكمال الطلب", link: "checkout.html?service=family-visit" },
    { title: "تجديد الجواز قبل انتهاء 30 يوماً", detail: "توصيل عبر البريد السعودي", link: "checkout.html?service=passport-renew" },
  ],
  insights: [
    { title: "المساعد الذكي جاهز", detail: "اختر سؤالاً جاهزاً في صفحة المحادثة لرؤية الرد والإجراء", link: "chat.html" },
  ],
  tasks: [
    { title: "رفع مستند التطعيم للحج", due: "اليوم", status: "عالي" },
    { title: "تحديث عنوان التوصيل للجواز", due: "غداً", status: "متوسط" },
    { title: "تأكيد بيانات المركبة", due: "هذا الأسبوع", status: "منخفض" },
  ],
  fines: [
    { id: "F-28192", title: "سرعة زائدة", amount: 500, date: "12-02-2025", city: "الرياض" },
    { id: "F-99213", title: "عدم ربط الحزام", amount: 150, date: "05-02-2025", city: "جدة" },
  ],
  passport: {
    number: "P2338892",
    expiry: "2026-08-12",
    status: "ساري",
    type: "سعودي",
    note: "ينصح بالتجديد قبل 30 يوماً من الانتهاء.",
  },
  vehicle: {
    plate: "ح ص د 4532",
    type: "تويوتا كامري 2021",
    inspection: "2025-01-22",
    insurance: "2025-03-10",
    renewal: "2025-02-01",
  },
  visa: {
    type: "زيارة عائلية",
    status: "مبدئية",
    invited: "الأخت - نورة",
    eligibility: "مؤهل للتقديم",
  },
};

const servicesData = [
  {
    id: "complaint",
    title: "اعتراض على مخالفة",
    category: "المرور",
    description: "رفع اعتراض مع إرفاق الأدلة والمتابعة الفورية.",
    steps: ["تحديد المخالفة", "رفع المستندات", "إرسال الاعتراض", "متابعة الرد"],
    cta: "رفع الاعتراض",
    link: "checkout.html?service=complaint",
    fees: [{ label: "رسوم الاعتراض", amount: 25 }],
  },
  {
    id: "fine-payment",
    title: "سداد المخالفة",
    category: "المرور",
    description: "سداد المخالفات المسجلة فوراً وإصدار إيصال.",
    steps: ["عرض تفاصيل المخالفة", "اختيار وسيلة الدفع", "تأكيد السداد", "الحصول على الإيصال"],
    cta: "سداد الآن",
    link: "checkout.html?service=fine-payment",
    fees: [{ label: "إجمالي المخالفة", amount: 500 }],
  },
  {
    id: "family-visit",
    title: "تأشيرة زيارة عائلية",
    category: "التأشيرات",
    description: "طلب زيارة عائلية للأخت مع تتبع فوري.",
    steps: ["إدخال بيانات الضيف", "تحميل المستندات", "الدفع الإلكتروني", "متابعة المعالجة"],
    cta: "بدء الطلب",
    link: "checkout.html?service=family-visit",
    fees: [
      { label: "رسوم التأشيرة", amount: 200 },
      { label: "رسوم المعالجة", amount: 75 },
      { label: "ضريبة القيمة المضافة", amount: 30 },
    ],
  },
  {
    id: "passport-renew",
    title: "تجديد الجواز",
    category: "الجوازات",
    description: "تجديد جواز السفر مع توصيل منزلي.",
    steps: ["التحقق من البيانات", "رفع الصورة الشخصية", "اختيار عنوان التوصيل", "الدفع واستلام الجواز"],
    cta: "بدء تجديد الجواز",
    link: "checkout.html?service=passport-renew",
    fees: [
      { label: "رسوم الخدمة", amount: 300 },
      { label: "تكلفة التوصيل", amount: 35 },
      { label: "ضريبة القيمة المضافة", amount: 50 },
    ],
  },
  {
    id: "vehicle-inspection",
    title: "حجز فحص المركبة",
    category: "المركبات",
    description: "حجز موعد للفحص الدوري مع أقرب محطة.",
    steps: ["اختيار المركبة", "تحديد المدينة والمحطة", "اختيار الموعد", "تأكيد الحجز"],
    cta: "احجز الموعد",
    link: "checkout.html?service=vehicle-inspection",
    fees: [
      { label: "رسوم الحجز", amount: 85 },
      { label: "ضريبة القيمة المضافة", amount: 13 },
    ],
  },
];

const chatScenarios = [
  {
    question: "هل أقدر أجيب أختي للسعودية؟",
    answer: "يمكنك تقديم طلب زيارة عائلية للأخت. تأكد من صلاحية الجواز   وسيتم إرسال رسالة حال إصدار التأشيرة.",
    action: { label: "بدء طلب زيارة عائلية", link: "checkout.html?service=family-visit" },
  },
  {
    question: "متى ينتهي جواز سفري؟",
    answer: `جوازك الحالي رقم ${mockData.passport.number} ينتهي بتاريخ ${mockData.passport.expiry}. يفضّل البدء بالتجديد مبكراً.`,
    action: { label: "تجديد الجواز الآن", link: "checkout.html?service=passport-renew" },
  },
  {
    question: "كيف أجدد فحص المركبة؟",
    answer: "الفحص الدوري لمركبتك مستحق بتاريخ 22 يناير 2025. احجز أقرب موعد واختر طريقة الدفع المناسبة.",
    action: { label: "حجز فحص المركبة", link: "checkout.html?service=vehicle-inspection" },
  },
  {
    question: "عندي مخالفة مرورية، وش أسدد؟",
    answer: "يوجد لديك 2 مخالفات بإجمالي 650 ر.س. يمكنك السداد دفعة واحدة أو اختيار المخالفة المطلوبة.",
    action: { label: "عرض ودفع المخالفات", link: "checkout.html?service=fine-payment" },
  },
  {
    question: "هل أنا مؤهل للحج؟",
    answer: "بياناتك الصحية محدثة، ولا توجد مخالفات تمنع التسجيل. أنت مؤهل للحج هذا العام.",
    action: { label: "عرض باقات الحج", link: "chat.html" },
  },
  {
    question: "أريد معرفة حالة طلب الزيارة",
    answer: "حالة طلب الزيارة الحالية: قيد المراجعة. يتم التحديث عادة خلال 48 ساعة.",
    action: { label: "متابعة حالة الطلب", link: "checkout.html?service=family-visit" },
  },
  {
    question: "كيف أرفع اعتراض على مخالفة؟",
    answer: "يمكنك رفع اعتراض خلال 30 يوماً من تاريخ المخالفة مع إرفاق الأدلة والصور.",
    action: { label: "رفع الاعتراض الآن", link: "checkout.html?service=complaint" },
  },
  {
    question: "كيف أجدد الجواز؟",
    answer: "نحتاج فقط صورة حديثة وعنوان التوصيل، يتم التوصيل خلال أيام عمل قليلة.",
    action: { label: "تجديد الجواز", link: "checkout.html?service=passport-renew" },
  },
  {
    question: "كيف أحجز فحص المركبة؟",
    answer: "حدد المدينة والمحطة ثم اختر الموعد المناسب، يستغرق الحجز دقائق.",
    action: { label: "حجز الفحص", link: "checkout.html?service=vehicle-inspection" },
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const toast = {
  el: null,
  init() {
    this.el = document.getElementById("toast");
  },
  show(message) {
    if (!this.el) return;
    this.el.textContent = message;
    this.el.classList.add("show");
    setTimeout(() => this.el.classList.remove("show"), 2400);
  },
};

function setActiveNav() {
  const page = document.body.dataset.page;
  $$(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.nav === page);
  });
}

function renderHome() {
  const nameEl = $("#user-name");
  const idEl = $("#user-id");
  if (nameEl) nameEl.textContent = mockData.user.name;
  if (idEl) idEl.textContent = `الهوية: ${mockData.user.id}`;

  const reminderWrap = $("#reminders");
  if (reminderWrap) {
    reminderWrap.innerHTML = mockData.reminders
      .map(
        (item) => `
        <div class="card flat">
          <div class="card-row">
            <div>
              <strong>${item.title}</strong>
              <div class="muted">${item.note}</div>
            </div>
            <span class="tag">${item.tag}</span>
          </div>
          <a class="btn btn-primary full" href="${item.link}">
            <i class="fa fa-play"></i> بدء الخدمة
          </a>
        </div>
      `
      )
      .join("");
  }

  const quick = $("#quick-actions");
  if (quick) {
    quick.innerHTML = mockData.quickActions
      .map(
        (action) => `
        <a class="card service-card" href="${action.link}">
          <div class="service-meta">
            <span class="tag">${action.label}</span>
          </div>
          <div class="muted"><i class="fa ${action.icon}"></i> انتقال سريع</div>
        </a>
      `
      )
      .join("");
  }

  const suggestions = $("#smart-suggestions");
  if (suggestions) {
    suggestions.classList.add("assistant-suggestions");
    suggestions.innerHTML = mockData.suggestions
      .map(
        (s) => `
        <div class="assistant-suggestion">
          <a class="assistant-cta" href="${s.link}">
            <span>O"O_O?</span>
            <span>OU,OrO_U.Oc</span>
          </a>
          <div class="assistant-body">
            <strong>${s.title}</strong>
            <div class="muted">${s.detail}</div>
          </div>
        </div>
      `
      )
      .join("");
  }

  const insights = $("#insights");
  if (insights) {
    insights.innerHTML = mockData.insights
      .map(
        (ins) => `
        <div class="card flat">
          <div class="card-row">
            <strong>${ins.title}</strong>
            <span class="tag">جديد</span>
          </div>
          <div class="muted">${ins.detail}</div>
          <a class="btn btn-text" href="${ins.link}"><i class="fa fa-arrow-left"></i> المزيد</a>
        </div>
      `
      )
      .join("");
  }
}

function renderServices() {
  const container = $("#services-list");
  if (!container) return;
  container.innerHTML = servicesData
    .map(
      (srv) => `
      <div class="card service-card" data-service="${srv.id}">
        <div class="card-row">
          <h4>${srv.title}</h4>
          <span class="tag">${srv.category}</span>
        </div>
        <div class="muted">${srv.description}</div>
        <div class="service-meta">
          <span class="chip">${srv.steps.length} خطوات</span>
          <button class="btn btn-primary" data-open-service="${srv.id}" type="button">${srv.cta}</button>
        </div>
      </div>
    `
    )
    .join("");
}

function renderFines() {
  const container = $("#fines-list");
  if (!container) return;
  container.innerHTML = mockData.fines
    .map(
      (fine) => `
      <div class="card flat">
        <div class="card-row">
          <strong>${fine.title}</strong>
          <span class="tag">${fine.amount} ر.س</span>
        </div>
        <div class="muted">${fine.city} - ${fine.date}</div>
        <button class="btn btn-primary full pay-fine" type="button" data-id="${fine.id}">
          <i class="fa fa-credit-card"></i> سداد المخالفة
        </button>
      </div>
    `
    )
    .join("");
}

function renderTasks() {
  const container = $("#tasks-list");
  if (!container) return;
  container.innerHTML = mockData.tasks
    .map(
      (task) => `
      <div class="card-row">
        <div>
          <strong>${task.title}</strong>
          <div class="muted">الاستحقاق: ${task.due}</div>
        </div>
        <span class="tag">${task.status}</span>
      </div>
    `
    )
    .join("");
}

function renderPassport() {
  if ($("#passport-number")) $("#passport-number").textContent = mockData.passport.number;
  if ($("#passport-expiry")) $("#passport-expiry").textContent = mockData.passport.expiry;
  if ($("#passport-note")) $("#passport-note").textContent = mockData.passport.note;
  if ($("#passport-status")) $("#passport-status").textContent = mockData.passport.status;
}

function renderVehicle() {
  if ($("#vehicle-plate")) $("#vehicle-plate").textContent = mockData.vehicle.plate;
  if ($("#vehicle-type")) $("#vehicle-type").textContent = mockData.vehicle.type;
  if ($("#vehicle-inspection")) $("#vehicle-inspection").textContent = mockData.vehicle.inspection;
  if ($("#vehicle-insurance")) $("#vehicle-insurance").textContent = mockData.vehicle.insurance;
}

function renderVisa() {
  if ($("#visa-type")) $("#visa-type").textContent = mockData.visa.type;
  if ($("#visa-status")) $("#visa-status").textContent = mockData.visa.status;
  if ($("#visa-invited")) $("#visa-invited").textContent = mockData.visa.invited;
}

function renderCheckout() {
  const serviceId = new URLSearchParams(window.location.search).get("service") || "passport-renew";
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  document.body.dataset.serviceId = service.id;

  const titleEl = $("#checkout-title");
  if (titleEl) titleEl.textContent = service.title;

  const summary = $("#checkout-summary");
  if (summary) {
    summary.innerHTML = service.steps
      .map(
        (step, idx) => `
          <div class="summary-row">
            <span>${idx + 1}. ${step}</span>
            <i class="fa fa-circle-check" style="color: var(--green);"></i>
          </div>
        `
      )
      .join("");
  }

  const feesList = $("#fees-list");
  if (feesList) {
    const fees = service.fees && service.fees.length ? service.fees : [{ label: "رسوم الخدمة", amount: 0 }];
    const total = fees.reduce((acc, f) => acc + f.amount, 0);
    feesList.classList.add("fees-grid");
    feesList.innerHTML = fees
      .map(
        (fee) => `
          <div class="summary-row">
            <span>${fee.label}</span>
            <strong class="amount">${fee.amount} ر.س</strong>
          </div>
        `
      )
      .join("");
    feesList.innerHTML += `
      <div class="summary-row">
        <strong>الإجمالي</strong>
        <strong class="amount">${total} ر.س</strong>
      </div>
    `;
  }
}

function renderConfirmation() {
  const serviceId = new URLSearchParams(window.location.search).get("service") || "passport-renew";
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const title = $("#confirm-title");
  const desc = $("#confirm-desc");
  const list = $("#confirm-fees");
  const steps = $("#confirm-steps");
  if (title) title.textContent = service.title;
  if (desc) desc.textContent = service.description;
  if (list) {
    const fees = service.fees && service.fees.length ? service.fees : [{ label: "رسوم الخدمة", amount: 0 }];
    const total = fees.reduce((a, b) => a + b.amount, 0);
    list.innerHTML = fees
      .map(
        (fee) => `
          <div class="summary-row">
            <span>${fee.label}</span>
            <strong class="amount">${fee.amount} ر.س</strong>
          </div>
        `
      )
      .join("");
    list.innerHTML += `
      <div class="summary-row">
        <strong>الإجمالي المدفوع</strong>
        <strong class="amount">${total} ر.س</strong>
      </div>
    `;
  }
  if (steps) {
    steps.innerHTML = service.steps
      .map(
        (step, idx) => `
          <div class="summary-row">
            <span>${idx + 1}. ${step}</span>
            <i class="fa fa-circle-check" style="color: var(--green);"></i>
          </div>
        `
      )
      .join("");
  }
  const ref = $("#confirm-ref");
  if (ref) {
    const refNum = Math.floor(100000 + Math.random() * 900000);
    ref.textContent = `رقم المتابعة: ${refNum}`;
  }
}

function renderProfile() {
  if ($("#profile-name")) $("#profile-name").textContent = mockData.user.name;
  if ($("#profile-id")) $("#profile-id").textContent = mockData.user.id;
  if ($("#profile-mobile")) $("#profile-mobile").textContent = mockData.user.mobile;
}

function renderChat() {
  const quick = $("#chat-quick");
  const log = $("#chat-log");
  const input = $("#chat-input");
  const send = $("#chat-send");
  if (!quick || !log || !input || !send) return;

  function appendMessage(type, text, action) {
    const bubble = document.createElement("div");
    bubble.className = `bubble ${type}`;
    bubble.innerHTML = `<div>${text}</div>`;
    if (action) {
      const actions = document.createElement("div");
      actions.className = "actions";
      const btn = document.createElement("a");
      btn.className = "btn btn-secondary";
      btn.textContent = action.label;
      btn.href = action.link;
      actions.appendChild(btn);
      bubble.appendChild(actions);
    }
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
  }

  quick.innerHTML = chatScenarios
    .map(
      (scenario) => `
      <button class="btn btn-secondary" data-scenario="${scenario.question}" type="button">
        <i class="fa fa-message"></i> ${scenario.question}
      </button>
    `
    )
    .join("");

  quick.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-scenario]");
    if (!btn) return;
    const scenario = chatScenarios.find((s) => s.question === btn.dataset.scenario);
    if (!scenario) return;
    appendMessage("user", scenario.question);
    setTimeout(() => appendMessage("bot", scenario.answer, scenario.action), 200);
  });

  send.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    appendMessage("user", text);
    input.value = "";
    setTimeout(() => {
      appendMessage("bot", "تم تسجيل سؤالك، اقترح عليك استخدام أحد الخيارات السريعة أو بدء الخدمة الآن.", {
        label: "فتح الخدمات",
        link: "services.html",
      });
    }, 250);
  });
  input.addEventListener("keypress", (e) => e.key === "Enter" && send.click());
}

function openServiceModal(serviceId) {
  const modal = $("#service-modal");
  if (!modal) return;
  const srv = servicesData.find((s) => s.id === serviceId);
  if (!srv) return;
  $("#modal-title").textContent = srv.title;
  $("#modal-desc").textContent = srv.description;
  $("#modal-steps").innerHTML = srv.steps.map((s) => `<li>${s}</li>`).join("");
  const cta = $("#modal-cta");
  cta.textContent = srv.cta;
  cta.dataset.link = srv.link;
  modal.classList.add("active");
}

function closeServiceModal() {
  $("#service-modal")?.classList.remove("active");
}

function bindEvents() {
  document.body.addEventListener("click", (e) => {
    const serviceBtn = e.target.closest("[data-open-service]");
    if (serviceBtn) {
      openServiceModal(serviceBtn.dataset.openService);
      return;
    }

    const closeModalBtn = e.target.closest("[data-close-modal]");
    if (closeModalBtn) {
      closeServiceModal();
      return;
    }

    const cta = e.target.closest("#modal-cta");
    if (cta) {
      toast.show("تم بدء الخدمة، جارٍ نقلك للصفحة المختصة.");
      if (cta.dataset.link) {
        setTimeout(() => (window.location.href = cta.dataset.link), 600);
      }
      return;
    }

    const payFineBtn = e.target.closest(".pay-fine");
    if (payFineBtn) {
      window.location.href = "checkout.html?service=fine-payment";
      return;
    }

    const confirmCheckout = e.target.closest("#confirm-checkout");
    if (confirmCheckout) {
      const serviceId = document.body.dataset.serviceId || new URLSearchParams(window.location.search).get("service") || "passport-renew";
      toast.show("تمت معالجة الدفع بنجاح.");
      setTimeout(() => {
        window.location.href = `confirmation.html?service=${serviceId}`;
      }, 500);
      return;
    }
  });
}

function init() {
  toast.init();
  setActiveNav();
  bindEvents();

  const page = document.body.dataset.page;
  const renderMap = {
    home: renderHome,
    services: renderServices,
    chat: renderChat,
    checkout: renderCheckout,
    confirmation: renderConfirmation,
    profile: renderProfile,
    tasks: renderTasks,
    fines: renderFines,
    passport: renderPassport,
    vehicle: renderVehicle,
    visa: renderVisa,
  };
  if (renderMap[page]) renderMap[page]();
}

document.addEventListener("DOMContentLoaded", init);

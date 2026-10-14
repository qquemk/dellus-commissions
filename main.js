/* =========================================================
   dellus — commissions
   ---------------------------------------------------------
   EDIT HERE: everything the artist may want to change
   (status, slots, prices, gallery) lives in CONFIG below.
   ========================================================= */
const CONFIG = {
  instagram: 'dellusart',
  open: true,               // false → shows "Commissions closed"
  slots: { total: 5, free: 3 },
  currency: '$',

  tiers: [
    { id: 'headshot', price: 40, img: 'assets/w07.jpg',
      name: { en: 'Headshot', ru: 'Портрет' },
      desc: { en: 'Face & shoulders, full render', ru: 'Лицо и плечи, полная отрисовка' } },
    { id: 'half', price: 60, img: 'assets/w10.jpg', badge: { en: 'most loved', ru: 'хит' },
      name: { en: 'Half-body', ru: 'По пояс' },
      desc: { en: 'Up to the waist, with hands & outfit', ru: 'До пояса, с руками и одеждой' } },
    { id: 'full', price: 85, img: 'assets/w11.jpg',
      name: { en: 'Full-body', ru: 'В полный рост' },
      desc: { en: 'Whole figure, pose of your choice', ru: 'Персонаж целиком, любая поза' } },
    { id: 'scene', price: 130, from: true, img: 'assets/w09.jpg', bgIncluded: true,
      name: { en: 'Illustration', ru: 'Иллюстрация' },
      desc: { en: 'A full scene with detailed background', ru: 'Целая сцена с детальным фоном' } },
  ],
  includes: {
    en: ['Simple background', '2 sketch revisions', 'High-res PNG'],
    ru: ['Простой фон', '2 правки на скетче', 'PNG в высоком разрешении'],
  },

  // pricing rules used by the calculator and the "Extras" list
  extraCharacter: 0.8,      // +80% of base per extra character
  detailedBg: 30,           // + flat
  addons: [
    { id: 'timelapse', type: 'flat', value: 10,
      label: { en: 'Timelapse video', ru: 'Таймлапс-видео' }, hint: { en: 'process recording', ru: 'запись процесса' } },
    { id: 'rush', type: 'mult', value: 1.3,
      label: { en: 'Rush order', ru: 'Срочный заказ' }, hint: { en: 'under 7 days', ru: 'до 7 дней' } },
    { id: 'commercial', type: 'mult', value: 2,
      label: { en: 'Commercial use', ru: 'Коммерческое использование' }, hint: { en: 'merch, covers, ads', ru: 'мерч, обложки, реклама' } },
    { id: 'private', type: 'flat', value: 0,
      label: { en: 'Keep it private', ru: 'Не публиковать' }, hint: { en: 'no posting in portfolio', ru: 'без публикации в портфолио' } },
  ],

  gallery: [
    { src: 'assets/w04.jpg', w: 598, h: 640, cat: 'portrait', title: 'Morpho' },
    { src: 'assets/w06.jpg', w: 560, h: 640, cat: 'illustration', title: 'Koi' },
    { src: 'assets/w02.jpg', w: 640, h: 640, cat: 'fanart', title: 'Jinx was here' },
    { src: 'assets/w09.jpg', w: 589, h: 640, cat: 'illustration', title: 'Fern & frog' },
    { src: 'assets/w07.jpg', w: 640, h: 640, cat: 'portrait', title: 'Ginger' },
    { src: 'assets/w12.jpg', w: 640, h: 640, cat: 'portrait', title: 'Little green friend' },
    { src: 'assets/w11.jpg', w: 512, h: 640, cat: 'illustration', title: 'Graffiti' },
    { src: 'assets/w10.jpg', w: 640, h: 640, cat: 'portrait', title: 'Choker' },
  ],

  marquee: {
    en: ['Portraits', 'Original characters', 'Fanart', 'Couples', 'Illustrations', 'Avatars & icons'],
    ru: ['Портреты', 'Ваши OC', 'Фанарт', 'Парные арты', 'Иллюстрации', 'Аватарки'],
  },
};

/* ---------- Russian translation (English lives in the HTML) ---------- */
const RU = {
  'nav.work': 'Работы', 'nav.prices': 'Цены', 'nav.process': 'Процесс', 'nav.terms': 'Условия', 'nav.faq': 'FAQ',
  'nav.order': 'Заказать', 'nav.orderLong': 'Заказать арт',
  'hero.eyebrow': 'Цифровая художница · заказы',
  'hero.title': 'Нежные портреты<br>с <em>маленькой</em> историей',
  'hero.lead': 'Рисую людей, персонажей и настроение — тёплые оттенки кожи, выразительные глаза, бабочки, карпы кои и тихие зелёные леса. Давай создадим что-то, что будет ощущаться как&nbsp;ты.',
  'hero.cta': 'Заказать арт', 'hero.cta2': 'Смотреть цены',
  'hero.turnaround': 'срок ~ 2–3 недели', 'hero.note': 'привет, я dellus ♡',
  'work.kicker': 'портфолио', 'work.title': 'Избранные <em>работы</em>',
  'work.lead': 'Несколько любимых работ. Нажми на любую, чтобы рассмотреть поближе.',
  'work.all': 'Все', 'work.portrait': 'Портреты', 'work.illustration': 'Иллюстрации', 'work.fanart': 'Фанарт',
  'work.more': 'Больше в Instagram',
  'about.kicker': 'обо мне',
  'about.quote': '«Привет! Я <em>dellus</em>. Обожаю рисовать лица крупным планом — свет на коже, веснушки, пирсинг, выбившуюся прядь — и прятать вокруг них маленькие истории.»',
  'about.sub': 'Каждый заказ рисую в цифре с нуля, в своём стиле — от первого скетча до финального рендера. Никакого ИИ.',
  'prices.kicker': 'прайс', 'prices.title': 'Цены и <em>форматы</em>',
  'prices.lead': 'Цены указаны за одного персонажа с простым фоном (цвет, градиент или мягкая текстура). Итог зависит от сложности — я всегда согласую цену до оплаты.',
  'prices.extrasTitle': 'Дополнительно',
  'process.kicker': 'как это работает', 'process.title': 'От идеи до <em>готового файла</em>',
  'process.s1t': 'Заявка', 'process.s1': 'Заполни форму ниже или напиши мне в директ Instagram: идея и референсы.',
  'process.s2t': 'Цена и бронь', 'process.s2': 'Отвечаю за 1–2 дня с итоговой ценой. Предоплата 50% бронирует место.',
  'process.s3t': 'Скетч', 'process.s3': 'Присылаю скетч позы и композиции — до 2 раундов правок бесплатно.',
  'process.s4t': 'Цвет и рендер', 'process.s4': 'Сначала базовые цвета, затем полная отрисовка. Показываю прогресс по ходу.',
  'process.s5t': 'Финал', 'process.s5': 'После оставшихся 50% ты получаешь PNG в высоком разрешении и кроп для соцсетей.',
  'terms.kicker': 'важные детали', 'terms.title': 'Что я <em>рисую</em> и условия',
  'terms.will': 'С радостью нарисую', 'terms.wont': 'Не рисую',
  'terms.w1': 'Портреты по вашим фото', 'terms.w2': 'Оригинальных персонажей (OC)', 'terms.w3': 'Фанарт по играм, сериалам, аниме',
  'terms.w4': 'Пары и друзей', 'terms.w5': 'Питомцев и маленьких существ в сцене', 'terms.w6': 'Аватарки, иконки, баннеры',
  'terms.n1': 'NSFW / откровенный контент', 'terms.n2': 'Ненависть, травлю, реалистичную жестокость', 'terms.n3': 'Сложных мехов и тяжёлую архитектуру',
  'terms.n4': 'Гиперреализм и копирование чужого стиля', 'terms.n5': 'Всё для обучения ИИ и NFT',
  'terms.payT': 'Оплата', 'terms.pay': '50% предоплата, 50% перед отправкой финала. PayPal или банковская карта — детали в директе.',
  'terms.revT': 'Правки', 'terms.rev': '2 бесплатных раунда на этапе скетча. Крупные изменения после покраса — за доплату.',
  'terms.delT': 'Передача', 'terms.del': 'PNG в высоком разрешении (от 3000px по длинной стороне) — на почту, в Telegram или Google Drive.',
  'terms.timeT': 'Сроки', 'terms.time': 'Обычно 1–3 недели в зависимости от очереди. Срочные заказы до 7 дней — возможны.',
  'terms.useT': 'Использование', 'terms.use': 'Личное: аватарки, посты с указанием автора, печать для себя. Коммерческое — по договорённости.',
  'terms.refT': 'Возврат', 'terms.ref': 'Полный возврат до скетча, 50% после скетча, после начала покраса — без возврата.',
  'faq.kicker': 'вопросы', 'faq.lead': 'Не нашёл ответ?', 'faq.dm': 'Напиши мне', 'faq.title': 'Полезно <em>знать</em>',
  'faq.q1': 'Можешь нарисовать меня по фото?', 'faq.a1': 'Да! Пришли одно или несколько чётких фото с хорошим светом. Я сохраню узнаваемые черты и нарисую их в своём стиле.',
  'faq.q2': 'Что прислать вместе с заявкой?', 'faq.a2': 'Референсы человека или персонажа, позу или настроение, любимые цвета и важные детали (пирсинг, тату, аксессуары, питомцы).',
  'faq.q3': 'Можно распечатать арт?', 'faq.a3': 'Конечно — для личного использования. Размер файла подходит для печати A4–A3, постеров и открыток.',
  'faq.q4': 'Можно оставить заказ приватным?', 'faq.a4': 'Конечно, просто скажи. По умолчанию я могу публиковать готовые работы в портфолио и Instagram.',
  'faq.q5': 'Рисуешь в других стилях?', 'faq.a5': 'Я остаюсь в своём стиле, но могу сделать мягче или ярче, реалистичнее или стилизованнее — просто покажи, что нравится.',
  'faq.q6': 'Это подарок — успеешь к дате?', 'faq.a6': 'Да — укажи дату в заявке, и я спланирую очередь. Лучше бронировать минимум за 3 недели.',
  'order.kicker': 'начнём', 'order.title': 'Заявка на <em>арт</em>',
  'order.lead': 'Выбери параметры и опиши идею — форма соберёт аккуратное сообщение и примерную цену. Останется только отправить его мне в Instagram.',
  'order.typeL': 'Формат', 'order.charsL': 'Персонажи', 'order.bgL': 'Фон', 'order.bgSimple': 'Простой', 'order.bgDetailed': 'Детальный',
  'order.addL': 'Опции', 'order.aboutL': 'О тебе и идее',
  'order.name': 'Имя или ник', 'order.contact': 'Куда ответить (Instagram / Telegram / e-mail)',
  'order.idea': 'Опиши идею', 'order.ideaPh': 'Кто на арте, поза, настроение, цвета, важные детали…',
  'order.refs': 'Ссылки на референсы (необязательно)', 'order.refsPh': 'Pinterest, Google Диск, фото…',
  'order.deadline': 'Дедлайн (необязательно)',
  'order.estimate': 'Примерная цена', 'order.note': 'Приблизительно. Итоговую цену подтвержу, когда прочитаю заявку.',
  'order.submit': 'Собрать заявку', 'order.err': 'Заполни, пожалуйста, имя, контакт и идею.',
  'modal.title': 'Заявка готова ♡', 'modal.lead': 'Скопируй текст и отправь мне в директ Instagram. Туда же можно приложить фото-референсы.',
  'modal.copy': 'Скопировать текст', 'modal.dm': 'Открыть директ',
  'foot.big': 'Нарисуем<br><em>твою историю</em>', 'foot.order': 'Оставить заявку',
  'foot.rights': 'Все работы © dellusart. Не репостить без указания автора и не использовать для ИИ.',
  'foot.top': 'Наверх ↑',
};

const UI = {
  en: {
    open: 'Commissions open', closed: 'Commissions closed',
    slots: (f, t) => `${f} of ${t} slots free`, choose: 'Choose', from: 'from',
    base: 'Base', chars: n => `Characters × ${n}`, bg: 'Detailed background',
    copied: 'Copied ✓', cat: { portrait: 'Portrait', illustration: 'Illustration', fanart: 'Fanart' },
    perChar: '% per extra character', extraChar: 'Extra character', detailed: 'Detailed background',
    reqHead: 'Hi! I’d like to request a commission ♡', ring: 'digital artist · commissions open · ',
    r: { name: 'Name', contact: 'Contact', format: 'Format', chars: 'Characters', bg: 'Background', addons: 'Add-ons', idea: 'Idea', refs: 'References', deadline: 'Deadline', est: 'Estimate from the site' },
    simple: 'simple', detailed2: 'detailed', none: '—', included: 'included',
  },
  ru: {
    open: 'Заказы открыты', closed: 'Заказы закрыты',
    slots: (f, t) => `Свободно ${f} из ${t} мест`, choose: 'Выбрать', from: 'от',
    base: 'База', chars: n => `Персонажи × ${n}`, bg: 'Детальный фон',
    copied: 'Скопировано ✓', cat: { portrait: 'Портрет', illustration: 'Иллюстрация', fanart: 'Фанарт' },
    perChar: '% за каждого доп. персонажа', extraChar: 'Доп. персонаж', detailed: 'Детальный фон',
    reqHead: 'Привет! Хочу заказать арт ♡', ring: 'цифровая художница · заказы открыты · ',
    r: { name: 'Имя', contact: 'Контакт', format: 'Формат', chars: 'Персонажей', bg: 'Фон', addons: 'Опции', idea: 'Идея', refs: 'Референсы', deadline: 'Дедлайн', est: 'Оценка с сайта' },
    simple: 'простой', detailed2: 'детальный', none: '—', included: 'включён',
  },
};

/* ================= helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};
const money = n => `${CONFIG.currency}${Math.round(n)}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let lang = store.get('lang') || ((navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en');

/* ================= theme ================= */
(function theme() {
  const saved = store.get('theme');
  if (saved) document.documentElement.dataset.theme = saved;
  else if (matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
  $('#themeBtn').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    store.set('theme', next);
  });
})();

/* ================= i18n ================= */
const EN = {};
$$('[data-i18n]').forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
$$('[data-i18n-ph]').forEach(el => { EN[el.dataset.i18nPh] = el.placeholder; });

function applyLang() {
  document.documentElement.lang = lang;
  const dict = lang === 'ru' ? RU : EN;
  $$('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  $$('[data-i18n-ph]').forEach(el => { const v = dict[el.dataset.i18nPh]; if (v != null) el.placeholder = v; });
  $$('.lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
  renderStatus(); renderMarquee(); renderGallery(); renderTiers(); renderExtras(); renderOrderOptions(); updateTotal();
  $('#ringText').textContent = UI[lang].ring.repeat(2);
}
$$('.lang button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; store.set('lang', lang); applyLang(); }));

/* ================= status ================= */
function renderStatus() {
  const t = UI[lang];
  $('#statusCard').classList.toggle('closed', !CONFIG.open);
  $('#statusLabel').textContent = CONFIG.open ? t.open : t.closed;
  $('#slotsText').textContent = t.slots(CONFIG.open ? CONFIG.slots.free : 0, CONFIG.slots.total);
  $('#slots').innerHTML = Array.from({ length: CONFIG.slots.total }, (_, i) =>
    `<i class="${CONFIG.open && i < CONFIG.slots.free ? 'free' : ''}"></i>`).join('');
}

/* ================= marquee ================= */
function renderMarquee() {
  const words = CONFIG.marquee[lang];
  const one = words.map(w => `<span>${esc(w)}</span><span class="sep">✦</span>`).join('');
  $('#marquee').innerHTML = one + one + one + one;
}

/* ================= gallery + lightbox ================= */
let filter = 'all';
function renderGallery() {
  const t = UI[lang];
  $('#gallery').innerHTML = CONFIG.gallery.map((g, i) => `
    <figure class="g-item reveal${filter !== 'all' && g.cat !== filter ? ' hide' : ''}" data-cat="${g.cat}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(g.title)}">
      <img src="${g.src}" width="${g.w}" height="${g.h}" alt="${esc(g.title)} — ${t.cat[g.cat]}" loading="lazy">
      <figcaption><strong>${esc(g.title)}</strong><span>${t.cat[g.cat]}</span></figcaption>
    </figure>`).join('');
  observeReveals($('#gallery'));
}
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('.chip'); if (!b) return;
  filter = b.dataset.filter;
  $$('#filters .chip').forEach(c => { const on = c === b; c.classList.toggle('is-active', on); c.setAttribute('aria-selected', on); });
  $$('.g-item').forEach(el => el.classList.toggle('hide', filter !== 'all' && el.dataset.cat !== filter));
});

const lb = $('#lightbox');
let lbIndex = 0;
const visibleItems = () => CONFIG.gallery.map((g, i) => i).filter(i => filter === 'all' || CONFIG.gallery[i].cat === filter);
function showLb(i) {
  lbIndex = i;
  const g = CONFIG.gallery[i];
  const img = $('#lbImg');
  img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
  img.src = g.src; img.alt = g.title;
  $('#lbTitle').textContent = g.title;
  $('#lbCat').textContent = UI[lang].cat[g.cat];
}
function stepLb(d) { const v = visibleItems(); const p = v.indexOf(lbIndex); showLb(v[(p + d + v.length) % v.length]); }
$('#gallery').addEventListener('click', e => { const f = e.target.closest('.g-item'); if (!f) return; showLb(+f.dataset.i); lb.showModal(); });
$('#gallery').addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.g-item')) { e.preventDefault(); e.target.click(); } });
$('.lb-prev').addEventListener('click', () => stepLb(-1));
$('.lb-next').addEventListener('click', () => stepLb(1));
lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') stepLb(-1); if (e.key === 'ArrowRight') stepLb(1); });
let touchX = null;
lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => { if (touchX == null) return; const dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1); touchX = null; });

/* ================= tiers & extras ================= */
function renderTiers() {
  const t = UI[lang];
  $('#tiers').innerHTML = CONFIG.tiers.map((x, i) => `
    <article class="tier reveal" style="--d:${i * 0.08}s">
      <div class="tier-img">
        ${x.badge ? `<span class="tier-badge">${esc(x.badge[lang])}</span>` : ''}
        <img src="${x.img}" alt="${esc(x.name[lang])}" loading="lazy">
      </div>
      <div class="tier-body">
        <h3 class="tier-name">${esc(x.name[lang])}</h3>
        <p class="tier-desc">${esc(x.desc[lang])}</p>
        <ul class="tier-incl">${CONFIG.includes[lang].map((s, k) =>
          `<li>${k === 0 && x.bgIncluded ? esc(t.detailed) : esc(s)}</li>`).join('')}</ul>
        <div class="tier-price">${x.from ? `<span class="from">${t.from}</span>` : ''}<strong>${money(x.price)}</strong></div>
        <a class="btn btn-ghost btn-sm" href="#order" data-pick="${x.id}" style="margin-top:16px">${t.choose} →</a>
      </div>
    </article>`).join('');
  observeReveals($('#tiers'));
}
$('#tiers').addEventListener('click', e => {
  const a = e.target.closest('[data-pick]'); if (!a) return;
  const input = $(`#typeGrid input[value="${a.dataset.pick}"]`);
  if (input) { input.checked = true; syncBg(); updateTotal(); }
});

function renderExtras() {
  const t = UI[lang];
  const rows = [
    [t.extraChar, `+${Math.round(CONFIG.extraCharacter * 100)}%`],
    [t.detailed, `+${money(CONFIG.detailedBg)}`],
    ...CONFIG.addons.filter(a => a.value && !(a.type === 'flat' && a.value === 0)).map(a => [
      `${a.label[lang]} <small style="color:var(--muted)">· ${esc(a.hint[lang])}</small>`,
      a.type === 'mult' ? (a.value >= 2 ? `×${a.value}` : `+${Math.round((a.value - 1) * 100)}%`) : `+${money(a.value)}`,
    ]),
  ];
  $('#extrasList').innerHTML = rows.map(([l, v]) => `<li><span>${l}</span><b>${v}</b></li>`).join('');
}

/* ================= order form ================= */
const form = $('#orderForm');
let chars = 1;

function renderOrderOptions() {
  const current = form.querySelector('input[name="type"]:checked')?.value || 'half';
  const checked = new Set($$('#addons input:checked').map(i => i.value));
  $('#typeGrid').innerHTML = CONFIG.tiers.map(x => `
    <label class="type-opt">
      <input type="radio" name="type" value="${x.id}" ${x.id === current ? 'checked' : ''}>
      <span class="type-card"><img src="${x.img}" alt="" loading="lazy"><span>${esc(x.name[lang])}<small>${x.from ? UI[lang].from + ' ' : ''}${money(x.price)}</small></span></span>
    </label>`).join('');
  $('#addons').innerHTML = CONFIG.addons.map(a => `
    <label class="toggle">
      <input type="checkbox" name="addon" value="${a.id}" ${checked.has(a.id) ? 'checked' : ''}>
      <span class="sw" aria-hidden="true"></span>
      <span class="t-label">${esc(a.label[lang])}<small>${esc(a.hint[lang])}</small></span>
    </label>`).join('');
  syncBg();
}

function syncBg() {
  const tier = currentTier();
  const detailed = form.querySelector('input[name="bg"][value="detailed"]');
  const simple = form.querySelector('input[name="bg"][value="simple"]');
  if (tier.bgIncluded) { detailed.checked = true; simple.disabled = true; }
  else { simple.disabled = false; }
}
const currentTier = () => CONFIG.tiers.find(x => x.id === (form.querySelector('input[name="type"]:checked')?.value)) || CONFIG.tiers[0];

function calc() {
  const t = UI[lang];
  const tier = currentTier();
  const lines = [[`${t.base}: ${tier.name[lang]}`, tier.price]];
  let sum = tier.price;
  if (chars > 1) { const add = tier.price * CONFIG.extraCharacter * (chars - 1); sum += add; lines.push([t.chars(chars), add]); }
  const bg = form.querySelector('input[name="bg"]:checked').value;
  if (bg === 'detailed' && !tier.bgIncluded) { sum += CONFIG.detailedBg; lines.push([t.bg, CONFIG.detailedBg]); }
  const picked = $$('#addons input:checked').map(i => CONFIG.addons.find(a => a.id === i.value));
  picked.filter(a => a.type === 'flat' && a.value).forEach(a => { sum += a.value; lines.push([a.label[lang], a.value]); });
  picked.filter(a => a.type === 'mult').forEach(a => { const add = sum * (a.value - 1); sum += add; lines.push([a.label[lang], add]); });
  return { sum, lines, tier, bg, picked };
}

let lastTotal = null;
function updateTotal() {
  const { sum, lines } = calc();
  const el = $('#total');
  const txt = (currentTier().from ? (lang === 'ru' ? 'от ' : '') : '') + money(sum) + (currentTier().from && lang === 'en' ? '+' : '');
  if (txt !== lastTotal) {
    el.textContent = txt;
    el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 260);
    lastTotal = txt;
  }
  $('#lines').innerHTML = lines.map(([l, v], i) => `<li><span>${esc(l)}</span><span>${i ? '+' : ''}${money(v)}</span></li>`).join('');
  $('#charOut').textContent = chars;
}

form.addEventListener('change', e => { if (e.target.name === 'type') syncBg(); updateTotal(); });
$('#charMinus').addEventListener('click', () => { chars = Math.max(1, chars - 1); updateTotal(); });
$('#charPlus').addEventListener('click', () => { chars = Math.min(6, chars + 1); updateTotal(); });

form.addEventListener('submit', e => {
  e.preventDefault();
  const req = ['name', 'contact', 'idea'];
  let ok = true;
  req.forEach(n => {
    const f = form.elements[n];
    const bad = !f.value.trim();
    f.closest('.field').classList.toggle('invalid', bad);
    if (bad && ok) { f.focus(); ok = false; }
  });
  $('#formError').hidden = ok;
  if (!ok) return;

  const t = UI[lang], r = t.r;
  const { sum, tier, bg, picked } = calc();
  const v = n => form.elements[n].value.trim();
  const text = [
    t.reqHead, '',
    `${r.name}: ${v('name')}`,
    `${r.contact}: ${v('contact')}`,
    `${r.format}: ${tier.name[lang]}`,
    `${r.chars}: ${chars}`,
    `${r.bg}: ${tier.bgIncluded ? t.included : (bg === 'detailed' ? t.detailed2 : t.simple)}`,
    `${r.addons}: ${picked.length ? picked.map(a => a.label[lang]).join(', ') : t.none}`,
    v('deadline') ? `${r.deadline}: ${new Date(v('deadline') + 'T12:00').toLocaleDateString(lang)}` : null,
    '', `${r.idea}:`, v('idea'),
    v('refs') ? `\n${r.refs}:\n${v('refs')}` : null,
    '', `${r.est}: ~${(tier.from ? t.from + ' ' : '')}${money(sum)}`,
  ].filter(x => x !== null).join('\n');

  $('#reqText').textContent = text;
  $('#reqModal').showModal();
});

const modal = $('#reqModal');
modal.querySelector('[data-close]').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

async function copyText(s) {
  try { await navigator.clipboard.writeText(s); return true; }
  catch {
    const ta = document.createElement('textarea'); ta.value = s; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove(); return ok;
  }
}
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2200); }
$('#copyBtn').addEventListener('click', async () => { if (await copyText($('#reqText').textContent)) toast(UI[lang].copied); });
$('#dmBtn').addEventListener('click', () => { copyText($('#reqText').textContent).then(ok => ok && toast(UI[lang].copied)); });

/* ================= nav ================= */
const nav = $('.nav');
const burger = $('#burger'), menu = $('#mobileMenu');
function setMenu(open) {
  burger.setAttribute('aria-expanded', open);
  menu.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}
burger.addEventListener('click', () => setMenu(menu.hidden));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20), { passive: true });

const sectionIds = ['work', 'prices', 'process', 'terms', 'faq', 'order'];
function markActive() {
  let cur = null;
  sectionIds.forEach(id => { if (document.getElementById(id).getBoundingClientRect().top < innerHeight * 0.45) cur = id; });
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}
addEventListener('scroll', markActive, { passive: true });

/* ================= reveal on scroll ================= */
const revealObs = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealObs.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
function observeReveals(root = document) {
  $$('.reveal:not(.in)', root).forEach((el, i) => {
    if (!revealObs || reduceMotion) { el.classList.add('in'); return; }
    if (!el.style.getPropertyValue('--d') && root !== document) el.style.setProperty('--d', `${(i % 3) * 0.08}s`);
    revealObs.observe(el);
  });
}

/* ================= hero parallax ================= */
(function parallax() {
  const art = $('#heroArt');
  if (reduceMotion || !matchMedia('(pointer: fine)').matches) return;
  const cards = $$('.card', art);
  let raf = null;
  addEventListener('mousemove', e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      cards.forEach(c => { const d = +c.dataset.depth; c.style.transform = `translate(${x * d}px, ${y * d}px)`; });
      raf = null;
    });
  });
})();

/* ================= pause off-screen loops ================= */
if ('IntersectionObserver' in window) {
  const loopObs = new IntersectionObserver(entries => {
    entries.forEach(en => en.target.classList.toggle('is-offscreen', !en.isIntersecting));
  });
  $$('.hero, .marquee, .about').forEach(el => loopObs.observe(el));
}

/* ================= init ================= */
$('#year').textContent = new Date().getFullYear();
const igUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
$('#igMore').href = igUrl; $('#footIg').href = igUrl; $('#dmBtn').href = $('#faqDm').href = `https://ig.me/m/${CONFIG.instagram}`;
applyLang();
observeReveals();
// hero reveals stagger
$$('.hero .reveal').forEach((el, i) => el.style.setProperty('--d', `${0.1 + i * 0.1}s`));

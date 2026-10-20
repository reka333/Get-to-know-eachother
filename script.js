// ---------- Fotók (ugyanebben a mappában, forrás: Unsplash) ----------
const img = (key) => `${key}.jpg`;

// ---------- Kategóriák és kérdések ----------
// q: [kérdés, [3 fotó kulcs]]
const CATEGORIES = [
  {
    title: "Közös élmények", tags: "Közös múlt · emlékek · nosztalgia",
    color: "#c47a78", cover: "polaroids",
    q: [
      ["Mi az a közös emlékünk, amit soha nem szeretnél elfelejteni?", ["polaroids", "handHeart", "coupleBikes"]],
      ["Mikor érezted magad a legboldogabbnak mellettem?", ["coupleKiss", "sparklers", "sunsetSea"]],
      ["Mi volt az első benyomásod rólam, és ez mennyit változott?", ["coffeeCheers", "rose", "cafeFriends"]],
      ["Melyik közös programunkat élnéd át újra pontosan ugyanúgy?", ["cinema", "coupleBikes", "sunsetSky"]],
      ["Mi volt a legviccesebb közös pillanatunk?", ["laughing", "confetti", "friendsJoy"]],
      ["Mikor érezted először, hogy komolyabb lehet köztünk valami?", ["holdingHands", "hearts", "handHeart"]],
      ["Mi az, amit az elején még nem tudtál rólam, de azóta megszerettél bennem?", ["roseWhite", "tea", "peonies"]],
      ["Melyik közös utazásunk vagy kirándulásunk volt a kedvenced?", ["planeWindow", "roadtrip", "santorini"]],
      ["Melyik nehéz időszakunkból tanultad a legtöbbet?", ["rain", "lakePerson", "sunrise"]],
      ["Van olyan közös élményünk, amelyet szerinted én teljesen máshogy éltem meg, mint te?", ["camera", "polaroids", "deskCamera"]],
      ["Mi az a kis dolog, amit együtt csináltunk, de neked sokat jelentett?", ["coffee", "tea", "yellowFlowers"]],
      ["Ha egyetlen fotót választhatnál a kapcsolatunkból, melyik lenne az, és miért?", ["deskCamera", "polaroids", "camera"]],
    ],
  },
  {
    title: "Jövőbeli közös célok", tags: "Közös álmok · életmód · tervek",
    color: "#b07f5f", cover: "livingCozy",
    q: [
      ["Hol szeretnél tartani a kapcsolatunkban 3 év múlva?", ["weddingChairs", "holdingHands", "sunrise"]],
      ["Milyen lenne számodra az ideális közös életünk?", ["livingCozy", "kitchen", "coupleField"]],
      ["Szeretnél egyszer együtt élni velem? Ha igen, hogyan képzeled el?", ["interior", "livingWhite", "kitchen"]],
      ["Milyen helyen tudnád elképzelni a közös otthonunkat: városban, kertvárosban vagy vidéken?", ["nycSkyline", "livingCozy", "sunrise"]],
      ["Mi az a három dolog, amit mindenképpen szeretnél velem átélni?", ["aurora", "sparklers", "maldives"]],
      ["Milyen közös utazás szerepel a bakancslistádon?", ["baliTemple", "tokyo", "maldives"]],
      ["Mi lenne az a közös hobbi vagy szokás, amit szívesen kialakítanál?", ["tent", "feast", "hiking"]],
      ["Hogyan osztanád fel a házimunkát és a pénzügyeket, ha együtt élnénk?", ["kitchen", "sprout", "finance"]],
      ["Milyen hagyományt szeretnél, hogy csak a miénk legyen?", ["christmas", "sparklers", "campfire"]],
      ["Mi az a közös cél, amiért szívesen dolgoznál velem együtt akár évekig?", ["sprout", "holdingHands", "mountainLake"]],
      ["Mit jelent számodra az, hogy egy pár sikeres életet épít együtt?", ["weddingCouple", "sunrise", "holdingHands"]],
      ["Milyen lenne számodra az álomévünk, ha egy teljes évet megtervezhetnénk közösen?", ["tokyoNight", "santorini", "nycTimes"]],
    ],
  },
  {
    title: "Saját jövőbeli célok", tags: "Karrier · tanulás · utazás · önmegvalósítás",
    color: "#8a7aa0", cover: "deskTop",
    q: [
      ["Hol szeretnél tartani a karrieredben 5 év múlva?", ["deskTop", "laptop", "typing"]],
      ["Mi az az álommunka, amit akkor is kipróbálnál, ha nem a pénz számítana?", ["deskCamera", "pen", "singapore"]],
      ["Mi lenne számodra a siker legfontosabb jele?", ["freedom", "sprout", "mountainClouds"]],
      ["Inkább magas fizetést és több stresszt választanál, vagy nyugodtabb munkát több szabadidővel?", ["finance", "lakePerson", "typing"]],
      ["Melyik országban vagy városban élnél szívesen legalább egy évig?", ["london", "tokyo", "venice"]],
      ["Mi az a készség, amit mindenképpen szeretnél elsajátítani?", ["library", "pen", "camera"]],
      ["Milyen nagyobb dolgot szeretnél megvenni vagy elérni a saját pénzedből?", ["sprout", "carNight", "interior"]],
      ["Mi az a félelmed a jövőddel kapcsolatban, amit ritkán mondasz ki?", ["rain", "foggyForest", "nightSky"]],
      ["Milyen életet szeretnél élni 30 éves korodra?", ["freedom", "livingCozy", "santorini2"]],
      ["Inkább saját vállalkozást építenél, vagy egy cégnél jutnál el vezető pozícióig?", ["singapore", "typing", "deskTop"]],
      ["Mi az az álom, amit eddig halogattál, pedig nagyon szeretnéd megvalósítani?", ["plants", "milkyWay", "pen"]],
      ["Ha egy évig nem kellene dolgoznod a megélhetésedért, mivel töltenéd az idődet?", ["maldives", "tent", "library"]],
    ],
  },
  {
    title: "Szerelem és kapcsolat", tags: "Érzelmek · intimitás · kötődés",
    color: "#b23f55", cover: "coupleKiss",
    q: [
      ["Mitől érzed igazán, hogy szeretlek?", ["hearts", "handHeart", "rose"]],
      ["Milyen apró gesztusomnak örülsz a legjobban?", ["rose", "peonies", "coffee"]],
      ["Mikor érzed magad hozzám a legközelebb?", ["holdingHands", "coupleKiss", "sunsetSea"]],
      ["Mi az, amitől biztonságban érzed magad egy kapcsolatban?", ["livingCozy", "tea", "holdingHands"]],
      ["Miből érzed, hogy valaki valóban figyel rád?", ["coffeeCheers", "roseWhite", "rose"]],
      ["Milyen romantikus programra vágysz, amit ritkán vagy még soha nem csináltunk?", ["sparklers", "milkyWay", "eiffel"]],
      ["Milyen gyakran lenne ideális számodra egy kettesben töltött, telefonmentes este?", ["livingCozy", "nightSky", "drinks"]],
      ["Mitől érzed magad kívánatosnak és vonzónak?", ["womanDress", "rose", "peonies"]],
      ["Mi az, amiből szívesen kapnál többet a kapcsolatunkban?", ["hearts", "roseWhite", "handHeart"]],
      ["Mi az, amit szerinted különösen jól csinálunk párként?", ["coupleBikes", "coupleField", "weddingCouple"]],
      ["Miben változott meg a szeretetről alkotott elképzelésed, mióta együtt vagyunk?", ["weddingChairs", "roseWhite", "holdingHands"]],
      ["Mit jelent számodra a romantika egy hosszú kapcsolatban?", ["weddingCouple", "paris", "sunsetSky"]],
    ],
  },
  {
    title: "Személyiség és belső világ", tags: "Önismeret · értékek · gondolkodás",
    color: "#6f8a7e", cover: "lakePerson",
    q: [
      ["Mi az, amit szerinted mások gyakran félreértenek benned?", ["lakePerson", "foggyForest", "roseWhite"]],
      ["Mire vagy a legbüszkébb magaddal kapcsolatban?", ["freedom", "mountainClouds", "sunflowers"]],
      ["Mi az a tulajdonságod, amin szeretnél változtatni?", ["plants", "pen", "rain"]],
      ["Mitől félsz a legjobban, ha a jövődre gondolsz?", ["nightSky", "foggyForest", "rain"]],
      ["Milyen helyzetekben érzed magad a leginkább önmagadnak?", ["lakePerson", "hiking", "yellowFlowers"]],
      ["Mi az, amit gyerekként nagyon szerettél volna, és ma is hiányzik?", ["balloons", "confetti", "dog"]],
      ["Mi motivál akkor, amikor semmihez sincs kedved?", ["sunrise", "hiking", "coffee"]],
      ["Inkább a szívedre vagy az eszedre hallgatsz fontos döntéseknél?", ["hearts", "library", "roseWhite"]],
      ["Mi az az érték, amiből soha nem engednél?", ["mountainLake", "library", "sunrise"]],
      ["Mit szeretnél, hogyan emlékezzenek rád az emberek?", ["milkyWay", "aurora", "polaroids"]],
      ["Mi az a dolog, amiben az elmúlt években a legtöbbet változtál?", ["plants", "sunflowers", "pen"]],
      ["Mitől érzed úgy, hogy igazán megértettek?", ["coffeeCheers", "friendsTalk", "holdingHands"]],
    ],
  },
  {
    title: "Konfliktusok és kommunikáció", tags: "Nehéz helyzetek · megértés · kompromisszum",
    color: "#7f93ab", cover: "tea",
    q: [
      ["Ha rossz napod van, inkább megoldást keresel, vagy arra vágysz, hogy meghallgassalak?", ["tea", "rain", "coffee"]],
      ["Mi az, ami egy vita során a legjobban tud bántani?", ["rain", "roseWhite", "foggyForest"]],
      ["Hogyan tudok neked a legjobban segíteni, amikor stresszes vagy?", ["tea", "lakePerson", "livingCozy"]],
      ["Könnyen kimondod, ha valami rosszul esik?", ["pen", "coffeeCheers", "friendsTalk"]],
      ["Mi segít neked abban, hogy egy vita után újra közel érezd magad hozzám?", ["holdingHands", "handHeart", "sunsetSea"]],
      ["Mi az, amit megtanultál a korábbi konfliktusainkból?", ["plants", "library", "pen"]],
      ["Mit jelent számodra a kompromisszum, és hol vannak a határai?", ["holdingHands", "coffeeCheers", "mountainLake"]],
      ["Milyen helyzetben nehéz neked bocsánatot kérni?", ["roseWhite", "rose", "rain"]],
      ["Mi az, amit szeretnél, hogy jobban megértsek a reakcióidból?", ["waves", "lakePerson", "nightSky"]],
      ["Hogyan tudnánk jelezni egymásnak, ha valamelyikünknek egy kis térre van szüksége?", ["forest", "lakeBoat", "hiking"]],
      ["Mitől érzed azt, hogy egy vita során is tiszteletben tartanak?", ["friendsTalk", "coffeeCheers", "tea"]],
      ["Milyen egy jó bocsánatkérés számodra?", ["peonies", "rose", "pen"]],
    ],
  },
  {
    title: "Vicces, random és „mi lenne, ha?”", tags: "Nevetés · játékosság · váratlan válaszok",
    color: "#cf9550", cover: "confetti",
    q: [
      ["Ha egy napra testet cserélnénk, mi lenne az első dolgod?", ["confetti", "laughing2", "laughing"]],
      ["Ha nyernénk egymilliárd forintot, mi lenne az első három dolog, amit megvennénk?", ["finance", "maldives", "carNight"]],
      ["Ha egy lakatlan szigetre mennénk, milyen három dolgot vinnél magaddal?", ["island", "beachPalm", "beachAerial"]],
      ["Melyik filmszereplőre hasonlítok a legjobban?", ["cinema", "popcorn", "camera"]],
      ["Mi az a szokásom, amin titokban nevetsz?", ["laughing", "dog", "confetti"]],
      ["Ha egy realityműsorban szerepelnénk, melyikben lennénk a legjobbak?", ["cinema", "party", "tokyoNight"]],
      ["Ki élné túl tovább egy zombiapokalipszisben, és miért?", ["foggyForest", "desertRoad", "campfire"]],
      ["Ha most azonnal elutazhatnánk bárhová, hová mennénk?", ["planeWing", "nycTimes", "baliTemple"]],
      ["Mi lenne a közös vállalkozásunk neve?", ["coffee", "pizza", "deskTop"]],
      ["Ha a kapcsolatunk egy film lenne, mi lenne a címe?", ["cinema", "popcorn", "sparklers"]],
      ["Melyikünk költené el hamarabb a lottónyereményt?", ["finance", "drinks", "carNight"]],
      ["Ha újra találkoznánk, de nem ismernénk egymást, szerinted újra egymásba szeretnénk?", ["coupleKiss", "cafeFriends", "hearts"]],
    ],
  },
  {
    title: "Hétköznapok és közös élet", tags: "Szokások · pénz · otthon · életstílus",
    color: "#a0836f", cover: "kitchen",
    q: [
      ["Milyen lenne számodra egy tökéletes, átlagos hétköznapunk?", ["coffee", "kitchen", "livingCozy"]],
      ["Inkább otthon pihennél velem, vagy rendszeresen mennél programokra?", ["livingCozy", "party", "cinema"]],
      ["Mennyire fontos neked, hogy legyen külön időnk és saját baráti körünk?", ["cafeFriends", "friendsTalk", "groupView"]],
      ["Mire költenél szívesen többet, és min spórolnál?", ["finance", "sprout", "pizza"]],
      ["Inkább közösen gyűjtenél egy nagy célra, vagy mindenki külön kezelné a pénzét?", ["sprout", "finance", "interior"]],
      ["Milyen otthonban éreznéd magad igazán jól?", ["interior", "livingWhite", "livingCozy"]],
      ["Mennyire szereted előre megtervezni a programokat?", ["pen", "deskTop", "deskCamera"]],
      ["Mi az a hétköznapi feladat, amit kifejezetten utálsz?", ["kitchen", "livingWhite", "coffee"]],
      ["Mennyire fontos számodra a családdal töltött idő?", ["feast", "christmas", "groupView"]],
      ["Hogyan képzeled el az ünnepeket, ha egyszer saját közös otthonunk lesz?", ["christmasFlat", "christmas", "sparklers"]],
      ["Milyen szokást nem szeretnél feladni akkor sem, ha együtt élünk?", ["coffee", "library", "hiking"]],
      ["Mitől éreznéd úgy, hogy kiegyensúlyozott az életünk a munka, a kapcsolat és a pihenés között?", ["lakeBoat", "typing", "coupleField"]],
    ],
  },
  {
    title: "Kalandok és bakancslista", tags: "Utazás · élmények · komfortzóna",
    color: "#55868f", cover: "baliCoast",
    q: [
      ["Mi az az ország, ahová mindenképpen el szeretnél jutni?", ["nycTimes", "baliTemple", "tokyo"]],
      ["Inkább tengerparti pihenés vagy hegyi kirándulás?", ["beachPalm", "mountainLake", "beachSunrise"]],
      ["Kipróbálnál velem egy spontán, előre meg nem tervezett utazást?", ["roadtrip", "planeWindow", "train"]],
      ["Mi az az élmény, amitől egy kicsit félsz, de mégis szeretnéd kipróbálni?", ["mountainClouds", "hiking", "waves"]],
      ["Inkább olcsó, sok kalanddal teli utazásokat választanál, vagy ritkábban mennél, de luxuskörülmények közé?", ["tent", "maldives", "baliPool"]],
      ["Melyik városban tudnál elképzelni egy romantikus hétvégét?", ["eiffel", "venice", "santorini"]],
      ["Mi az a sport vagy szabadtéri program, amit szívesen kipróbálnál?", ["hiking", "lakeBoat", "waves"]],
      ["Ha egy hónapig bárhol élhetnénk, hol rendezkednénk be?", ["baliPool", "santorini2", "tokyoNight"]],
      ["Mi az a közös kaland, amelyre még tíz év múlva is emlékezni szeretnél?", ["aurora", "mountainDock", "campfire"]],
      ["Inkább autós road trip, vonatos utazás vagy repülős városnézés?", ["roadtrip", "train", "planeWing"]],
      ["Melyik a három legfontosabb dolog, amit egy utazástól vársz?", ["beachAerial", "feast", "groupView"]],
      ["Mi lenne az a spontán program, amire most azonnal igent mondanál?", ["sparklers", "planeWindow", "desertRoad"]],
    ],
  },
  {
    title: "Mélyebb kérdések és közös fejlődés", tags: "Bizalom · szükségletek · jövőkép",
    color: "#74506a", cover: "milkyWay",
    q: [
      ["Mi az, amitől a legjobban félsz egy hosszú kapcsolatban?", ["rain", "roseWhite", "nightSky"]],
      ["Szerinted miben változtunk a legtöbbet, amióta együtt vagyunk?", ["plants", "polaroids", "sunflowers"]],
      ["Van olyan oldalad, amelyet még nem igazán mutattál meg nekem?", ["aurora", "milkyWay", "lakePerson"]],
      ["Mit szeretnél, hogy mindig megőrizzünk a kapcsolatunkban?", ["holdingHands", "rose", "polaroids"]],
      ["Milyen helyzetben érezted azt, hogy igazán melletted álltam?", ["handHeart", "coupleKiss", "sunsetSea"]],
      ["Mi az, amiben szeretnéd, hogy jobban támogassalak?", ["holdingHands", "plants", "mountainLake"]],
      ["Mit jelent számodra az elköteleződés?", ["weddingChairs", "weddingCouple", "peonies"]],
      ["Hogyan tudnánk úgy fejlődni külön-külön, hogy közben együtt is erősödjünk?", ["sunflowers", "plants", "coupleBikes"]],
      ["Mi az a dolog, amit szerinted még meg kell tanulnunk egymásról?", ["library", "pen", "coffeeCheers"]],
      ["Mit szeretnél, hogy soha ne felejtsek el veled kapcsolatban?", ["polaroids", "roseWhite", "milkyWay"]],
      ["Miben szeretnél bátrabb lenni a következő évben?", ["mountainClouds", "freedom", "hiking"]],
      ["Mi az, amiért most hálás vagy a kapcsolatunkban?", ["handHeart", "hearts", "sunflowers"]],
    ],
  },
];

const MIX = -1;
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

// ---------- Állapot ----------
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

const state = {
  cat: store.get("mk.cat", 0),
  used: store.get("mk.used", {}), // { catIndex: [questionIndex, ...] }
  turn: store.get("mk.turn", 0),
  rotation: 0,
  spinning: false,
  current: null,
};

const $ = (id) => document.getElementById(id);
const wheel = $("wheel");
const spinBtn = $("spinBtn");
const pointer = document.querySelector(".pointer");

const usedOf = (c) => state.used[c] || [];
const save = () => { store.set("mk.used", state.used); store.set("mk.turn", state.turn); store.set("mk.cat", state.cat); };

// ---------- Játékosok ----------
["p1", "p2"].forEach((id, i) => {
  const el = $(id);
  el.value = store.get("mk." + id, el.value);
  el.addEventListener("input", () => { store.set("mk." + id, el.value); renderTurn(); });
});
const names = () => [$("p1").value.trim() || "1. játékos", $("p2").value.trim() || "2. játékos"];

function renderTurn() {
  $("turn").innerHTML = `Most <b>${escapeHtml(names()[state.turn])}</b> válaszol`;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- Kategória sáv ----------
function renderChips() {
  const nav = $("cats");
  nav.innerHTML = "";
  const mk = (idx, label, thumb) => {
    const b = document.createElement("button");
    b.className = "chip" + (state.cat === idx ? " active" : "");
    b.innerHTML = thumb + `<span>${label}</span>`;
    b.addEventListener("click", () => selectCategory(idx));
    nav.appendChild(b);
    return b;
  };
  mk(MIX, "Vegyes", `<span class="mix">✦</span>`);
  CATEGORIES.forEach((c, i) => mk(i, c.title, `<img src="${img(c.cover)}" alt="">`));
  nav.querySelector(".active")?.scrollIntoView({ inline: "center", block: "nearest" });
}

function selectCategory(idx) {
  if (state.spinning) return;
  state.cat = idx;
  save();
  renderChips();
  renderInfo();
  renderWheel();
}

// ---------- Infó kártya ----------
function renderInfo() {
  const isMix = state.cat === MIX;
  const c = isMix ? null : CATEGORIES[state.cat];
  const color = isMix ? "#b8475b" : c.color;
  document.documentElement.style.setProperty("--accent", color);

  const cover = $("coverImg");
  cover.classList.remove("in");
  cover.style.opacity = 0;
  cover.onload = () => { cover.style.opacity = 1; requestAnimationFrame(() => cover.classList.add("in")); };
  cover.src = img(isMix ? "hearts" : c.cover);

  $("catNum").textContent = isMix ? "minden kategória" : `${ROMAN[state.cat]}. kategória`;
  $("catTitle").textContent = isMix ? "Vegyes pörgetés" : c.title;
  $("catTags").textContent = isMix ? "a kerék dönti el, miről beszélgettek" : c.tags;

  const total = isMix ? CATEGORIES.length * 12 : 12;
  const done = isMix ? CATEGORIES.reduce((s, _, i) => s + usedOf(i).length, 0) : usedOf(state.cat).length;
  $("progBar").style.width = (done / total) * 100 + "%";
  $("progTxt").textContent = `${done} / ${total}`;
}

// ---------- Kerék ----------
const SVGNS = "http://www.w3.org/2000/svg";

function slices() {
  if (state.cat === MIX) {
    return CATEGORIES.map((c, i) => ({ label: ROMAN[i], color: c.color, used: usedOf(i).length >= 12 }));
  }
  const c = CATEGORIES[state.cat];
  const used = usedOf(state.cat);
  return c.q.map((_, i) => ({ label: String(i + 1), color: c.color, used: used.includes(i) }));
}

function polar(cx, cy, r, deg) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function renderWheel() {
  const items = slices();
  const n = items.length;
  const step = 360 / n;
  const R = 190, C = 200;
  wheel.innerHTML = "";

  const el = (tag, attrs, parent = wheel) => {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    parent.appendChild(e);
    return e;
  };

  el("circle", { cx: C, cy: C, r: 199, fill: "#fffaf6" });

  const tones = [
    (c) => c,
    (c) => `color-mix(in srgb, ${c} 45%, #fdf3ee)`,
    (c) => `color-mix(in srgb, ${c} 75%, #3b2128)`,
  ];

  items.forEach((it, i) => {
    const a0 = i * step, a1 = (i + 1) * step;
    const [x0, y0] = polar(C, C, R, a0);
    const [x1, y1] = polar(C, C, R, a1);
    const g = el("g", { class: it.used ? "used" : "" });
    const tone = n % 3 === 0 ? i % 3 : i % 2 === 0 ? 0 : 1;
    const fill = tones[tone](it.color);
    const path = el("path", {
      d: `M${C},${C} L${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} Z`,
      stroke: "#fffaf6",
      "stroke-width": 2,
    }, g);
    path.style.fill = fill;

    const mid = a0 + step / 2;
    const [tx, ty] = polar(C, C, R * 0.74, mid);
    const t = el("text", {
      x: tx, y: ty,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      transform: `rotate(${mid} ${tx} ${ty})`,
      fill: tone === 1 ? "#3b2128" : "#fffaf6",
    }, g);
    t.textContent = it.label;

    const [hx, hy] = polar(C, C, R * 0.52, mid);
    const h = el("text", {
      x: hx, y: hy, class: "small",
      "text-anchor": "middle",
      "dominant-baseline": "central",
      transform: `rotate(${mid} ${hx} ${hy})`,
      fill: tone === 1 ? "#3b2128" : "#fffaf6",
      opacity: .7,
    }, g);
    h.textContent = it.used ? "✓" : "♡";
  });

  // díszítő gyűrűk és pöttyök
  el("circle", { cx: C, cy: C, r: R, fill: "none", stroke: "#fffaf6", "stroke-width": 6 });
  el("circle", { cx: C, cy: C, r: R - 6, fill: "none", stroke: "rgba(255,255,255,.35)", "stroke-width": 1 });
  for (let i = 0; i < n; i++) {
    const [dx, dy] = polar(C, C, R, i * step);
    el("circle", { cx: dx, cy: dy, r: 3.2, fill: "#e8c9b8" });
  }

  spinBtn.disabled = false;
}

// ---------- Pörgetés ----------
function pickTarget() {
  const items = slices();
  let free = items.map((it, i) => (it.used ? -1 : i)).filter((i) => i >= 0);
  if (!free.length) {
    // minden elfogyott: újrakezdjük az aktuális kategóriát
    if (state.cat === MIX) state.used = {};
    else delete state.used[state.cat];
    save();
    renderWheel();
    renderInfo();
    free = slices().map((_, i) => i);
  }
  return free[Math.floor(Math.random() * free.length)];
}

function spin() {
  if (state.spinning) return;
  state.spinning = true;
  spinBtn.disabled = true;

  const n = slices().length;
  const step = 360 / n;
  const target = pickTarget();

  const jitter = (Math.random() - 0.5) * step * 0.6;
  const want = -((target + 0.5) * step + jitter);
  const current = state.rotation % 360;
  let delta = ((want - current) % 360 + 360) % 360;
  state.rotation += 360 * (5 + Math.floor(Math.random() * 3)) + delta;
  wheel.style.transform = `rotate(${state.rotation}deg)`;

  trackTicks(step);

  const done = () => {
    wheel.removeEventListener("transitionend", done);
    state.spinning = false;
    land(target);
  };
  wheel.addEventListener("transitionend", done);
}

// a mutató kis "kattanása" minden szeletváltáskor
function trackTicks(step) {
  let last = null;
  const loop = () => {
    if (!state.spinning) return;
    const m = getComputedStyle(wheel).transform;
    if (m && m !== "none") {
      const [a, b] = m.slice(7, -1).split(",").map(Number);
      const deg = (Math.atan2(b, a) * 180) / Math.PI;
      const seg = Math.floor(((deg % 360) + 360) % 360 / step);
      if (last !== null && seg !== last) {
        pointer.classList.remove("tick");
        void pointer.offsetWidth;
        pointer.classList.add("tick");
      }
      last = seg;
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

function land(target) {
  let catIdx, qIdx;
  if (state.cat === MIX) {
    catIdx = target;
    const used = usedOf(catIdx);
    const free = CATEGORIES[catIdx].q.map((_, i) => i).filter((i) => !used.includes(i));
    qIdx = free[Math.floor(Math.random() * free.length)];
  } else {
    catIdx = state.cat;
    qIdx = target;
  }
  state.current = { catIdx, qIdx };
  state.used[catIdx] = [...usedOf(catIdx), qIdx];
  save();
  showCard(catIdx, qIdx);
}

// ---------- Kérdés kártya ----------
function showCard(catIdx, qIdx) {
  const c = CATEGORIES[catIdx];
  const [text, pics] = c.q[qIdx];
  document.documentElement.style.setProperty("--accent", c.color);

  const box = $("polaroids");
  box.innerHTML = "";
  pics.forEach((key) => {
    const fig = document.createElement("figure");
    fig.className = "polaroid";
    fig.style.margin = "0";
    const im = new Image();
    im.alt = "";
    im.src = img(key);
    im.onerror = () => { im.style.visibility = "hidden"; };
    fig.appendChild(im);
    box.appendChild(fig);
  });

  $("qMeta").textContent = `${ROMAN[catIdx]} · ${c.title} · ${qIdx + 1}. kérdés`;
  $("qText").textContent = text;
  $("answerer").innerHTML = `<b>${escapeHtml(names()[state.turn])}</b> válaszol először — aztán ${escapeHtml(names()[1 - state.turn])} ♡`;

  $("overlay").hidden = false;
  $("nextBtn").focus();
}

function closeCard(thenSpin) {
  $("overlay").hidden = true;
  state.turn = 1 - state.turn;
  save();
  renderTurn();
  renderInfo();
  renderWheel();
  if (thenSpin) setTimeout(spin, 250);
}

$("nextBtn").addEventListener("click", () => closeCard(true));
$("closeBtn").addEventListener("click", () => closeCard(false));
$("overlay").addEventListener("click", (e) => { if (e.target.id === "overlay") closeCard(false); });

$("resetBtn").addEventListener("click", () => {
  if (state.spinning) return;
  if (state.cat === MIX) state.used = {};
  else delete state.used[state.cat];
  save();
  renderInfo();
  renderWheel();
});

spinBtn.addEventListener("click", spin);
wheel.addEventListener("click", spin);

document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;
  const open = !$("overlay").hidden;
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    open ? closeCard(true) : spin();
  } else if (e.code === "Escape" && open) {
    closeCard(false);
  }
});

// ---------- Szirmok ----------
(function petals() {
  const box = document.querySelector(".petals");
  const count = window.innerWidth < 600 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("i");
    const size = 8 + Math.random() * 10;
    p.style.left = Math.random() * 100 + "vw";
    p.style.width = size + "px";
    p.style.height = size * 0.85 + "px";
    p.style.setProperty("--drift", (Math.random() * 200 - 100) + "px");
    p.style.animationDuration = 12 + Math.random() * 14 + "s";
    p.style.animationDelay = -Math.random() * 20 + "s";
    box.appendChild(p);
  }
})();

// ---------- Indítás ----------
if (state.cat !== MIX && !CATEGORIES[state.cat]) state.cat = 0;
renderChips();
renderInfo();
renderWheel();
renderTurn();

const markerRoot = document.getElementById("marker-root");
const statusEl = document.getElementById("status");
const lensTextEl = document.getElementById("lensText");

const quoteEl = document.getElementById("quote");
const layerMain = document.getElementById("layer-main");
const layerOverlay = document.getElementById("layer-overlay");
const hotspot = document.getElementById("hotspot");

const toggleQuoteBtn = document.getElementById("toggleQuote");
const toggleLayerBtn = document.getElementById("toggleLayer");
const cycleLensBtn = document.getElementById("cycleLens");

let quoteVisible = true;
let layersVisible = true;

const lenses = [
  {
    key: "Χώρος",
    text: "Εστίαση στον χώρο: το δωμάτιο ως σύμβολο εγκλωβισμού.",
    hotspot: "Hotspot: Ο χώρος δείχνει κοινωνική απομόνωση και σταδιακή αποανθρωποποίηση.",
    image: "#scene-room",
    quote: "Το δωμάτιο γίνεται όριο, καταφύγιο και φυλακή μαζί.",
  },
  {
    key: "Οικογένεια",
    text: "Εστίαση στην οικογένεια: από φροντίδα σε απόρριψη.",
    hotspot: "Hotspot: Η αλλαγή στάσης της οικογένειας αποκαλύπτει όρια της ενσυναίσθησης.",
    image: "#scene-family",
    quote: "Η οικογένεια μετακινείται σταδιακά από τη συγγένεια στην απόσταση.",
  },
  {
    key: "Σώμα",
    text: "Εστίαση στο σώμα: το σώμα ως πεδίο ταυτότητας και ντροπής.",
    hotspot: "Hotspot: Η μεταμόρφωση λειτουργεί ως οπτική αλληγορία του κοινωνικού αποκλεισμού.",
    image: "#scene-body",
    quote: "Το σώμα παύει να είναι οικείο και γίνεται ξένο θέαμα.",
  },
];

let lensIndex = 0;

function applyLens() {
  const activeLens = lenses[lensIndex];
  cycleLensBtn.textContent = `Λογοτεχνικός Φακός: ${activeLens.key}`;
  lensTextEl.textContent = activeLens.text;
  layerMain.setAttribute("src", activeLens.image);
  quoteEl.setAttribute("value", activeLens.quote);
}

markerRoot.addEventListener("targetFound", () => {
  quoteVisible = true;
  quoteEl.setAttribute("visible", true);
  toggleQuoteBtn.textContent = "Απόκρυψη Αποσπάσματος";
  statusEl.textContent = "Marker εντοπίστηκε. Πάτησε hotspot ή επίλεξε διαφορετικό φακό ανάγνωσης.";
});

markerRoot.addEventListener("targetLost", () => {
  statusEl.textContent = "Χάθηκε ο marker. Στόχευσε ξανά για να συνεχίσεις.";
});

toggleQuoteBtn.addEventListener("click", () => {
  quoteVisible = !quoteVisible;
  quoteEl.setAttribute("visible", quoteVisible);
  toggleQuoteBtn.textContent = quoteVisible ? "Απόκρυψη Αποσπάσματος" : "Εμφάνιση Αποσπάσματος";
});

toggleLayerBtn.addEventListener("click", () => {
  layersVisible = !layersVisible;
  layerMain.setAttribute("visible", layersVisible);
  layerOverlay.setAttribute("visible", layersVisible);
  toggleLayerBtn.textContent = layersVisible ? "Απόκρυψη Εικόνων" : "Εμφάνιση Εικόνων";
});

cycleLensBtn.addEventListener("click", () => {
  lensIndex = (lensIndex + 1) % lenses.length;
  applyLens();
});

hotspot.addEventListener("click", () => {
  statusEl.textContent = lenses[lensIndex].hotspot;
});

applyLens();

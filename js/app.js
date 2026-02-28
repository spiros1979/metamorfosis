const markerRoot = document.getElementById("marker-root");
const statusEl = document.getElementById("status");
const quoteEl = document.getElementById("quote");
const layerMain = document.getElementById("layer-main");
const layerOverlay = document.getElementById("layer-overlay");
const hotspot = document.getElementById("hotspot");

const toggleQuoteBtn = document.getElementById("toggleQuote");
const toggleLayerBtn = document.getElementById("toggleLayer");

let quoteVisible = false;
let layersVisible = true;

markerRoot.addEventListener("targetFound", () => {
  statusEl.textContent = "Marker εντοπίστηκε. Άγγιξε το φωτεινό σημείο για ανάλυση συμβολισμού.";
});

markerRoot.addEventListener("targetLost", () => {
  statusEl.textContent = "Χάθηκε ο marker. Στόχευσε ξανά για να συνεχίσεις.";
});

toggleQuoteBtn.addEventListener("click", () => {
  quoteVisible = !quoteVisible;
  quoteEl.setAttribute("visible", quoteVisible);
  toggleQuoteBtn.textContent = quoteVisible
    ? "Απόκρυψη Αποσπάσματος"
    : "Εμφάνιση Αποσπάσματος";
});

toggleLayerBtn.addEventListener("click", () => {
  layersVisible = !layersVisible;
  layerMain.setAttribute("visible", layersVisible);
  layerOverlay.setAttribute("visible", layersVisible);
  toggleLayerBtn.textContent = layersVisible ? "Απόκρυψη Εικόνων" : "Εμφάνιση Εικόνων";
});

hotspot.addEventListener("click", () => {
  statusEl.textContent = "Hotspot: Ο χώρος του δωματίου λειτουργεί ως οπτικό σύμβολο εγκλωβισμού.";
});

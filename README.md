# Metamorphosis WebAR

Διαδραστικό WebAR κολάζ για το έργο *The Metamorphosis* του Franz Kafka, με στόχο εκπαιδευτική χρήση.

## Δομή

- `index.html`: βασική AR σκηνή
- `js/app.js`: interactions και λογική
- `styles/main.css`: UI overlay
- `assets/images/`: εικόνες κολάζ
- `assets/targets.mind`: placeholder για μελλοντικό δικό σου image-target
- `docs/analysis.md`: σύντομη ανάλυση εργασίας

## Τοπική εκτέλεση

1. Πήγαινε στον φάκελο του project.
2. Τρέξε έναν απλό local server:

```bash
python3 -m http.server 8080
```

3. Άνοιξε `http://localhost:8080` από browser κινητού στο ίδιο δίκτυο.

## GitHub Pages

1. `git add .`
2. `git commit -m "Initial WebAR scaffold"`
3. `git push origin main`
4. Στο GitHub: `Settings -> Pages -> Deploy from a branch -> main / root`
5. Περίμενε 1-2 λεπτά και άνοιξε το URL του Pages.

## Τι να αντικαταστήσεις

- Στο `index.html` άλλαξε το απόσπασμα κειμένου.
- Στο `assets/images/` βάλε τις δικές σου εικόνες κολάζ.
- Όταν ετοιμάσεις δικό σου marker, δημιούργησε `assets/targets.mind` με το MindAR compiler και άλλαξε το `imageTargetSrc` στο `index.html`.

## Τρέχουσα κατάσταση demo

Για να τρέχει άμεσα, το project χρησιμοποιεί προσωρινά το δημόσιο marker/target του MindAR demo (remote URL).

## Σημείωση πνευματικών δικαιωμάτων

Το πρωτότυπο έργο του Kafka είναι public domain, αλλά οι μεταφράσεις μπορεί να έχουν δικαιώματα. Χρησιμοποίησε νόμιμες πηγές.

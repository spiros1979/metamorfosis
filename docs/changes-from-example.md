# Αλλαγές Πάνω στο Έτοιμο Παράδειγμα MindAR

Βάση: `mind-ar-js/examples/image-tracking`.

## Τι διατηρήθηκε από το παράδειγμα

- Βασική υποδομή A-Frame + MindAR image tracking.
- Marker pipeline με `imageTargetSrc`.

## Τι τροποποιήθηκε/προστέθηκε

1. Προστέθηκε πλήρες HUD σε ελληνική γλώσσα για διδακτική χρήση.
2. Προστέθηκαν δύο επίπεδα κολάζ (`layer-main`, `layer-overlay`) για συν-ανάγνωση εικόνας.
3. Προστέθηκε δυναμικό απόσπασμα κειμένου (`a-text`) με toggle εμφάνισης.
4. Προστέθηκε hotspot (`a-sphere`) με animation και context feedback.
5. Υλοποιήθηκε μηχανισμός `Λογοτεχνικός Φακός` με 3 ερμηνευτικές οπτικές:
   - Χώρος
   - Οικογένεια
   - Σώμα
6. Προστέθηκε custom event logic σε JavaScript:
   - `targetFound` / `targetLost`
   - UI state toggles
   - cycle mode logic
7. Προστέθηκε custom CSS theme και responsive ρυθμίσεις για κινητά.

## Γιατί μετράει ως προσαρμογή κώδικα

Οι αλλαγές δεν είναι μόνο αισθητικές. Περιλαμβάνουν νέα δομή διεπαφής, νέο interaction model, state handling στη JavaScript και εκπαιδευτική λογική που δεν υπάρχει στο αρχικό demo.

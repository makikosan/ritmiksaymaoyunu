import { soruOlustur } from "./ritmik_etkilesim.js";
// Konumlar layout açılırken otomatik okunur. Hücreler güncel kaynak görsele göre tanımlıdır.
const soru = soruOlustur({
  "layout": "soru3",
  "mode": "choice",
  "options": [
    "s3_b1",
    "s3_b2",
    "s3_b3"
  ],
  "correct": 1
});
export const { baslat, guncelle, kontrolEt, temizle } = soru;

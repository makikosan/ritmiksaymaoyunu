import { soruOlustur } from "./ritmik_etkilesim.js";
const soru = soruOlustur({
  "layout": "soru16",
  "mode": "choice",
  "options": [
    "s3_b1",
    "s3_b3",
    "s3_b2"
  ],
  "correct": 2
});
export const { baslat, guncelle, kontrolEt, temizle } = soru;

import { soruOlustur } from "./ritmik_etkilesim.js";
const soru = soruOlustur({
  "layout": "soru15",
  "mode": "choice",
  "options": [
    "btn1",
    "btn2",
    "btn3",
    "btn4",
    "btn5",
    "btn6",
    "btn7"
  ],
  "correct": 3,
  "feedbackFrames": false
});
export const { baslat, guncelle, kontrolEt, temizle } = soru;

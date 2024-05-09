const gunE = document.getElementById("gun");
const saatE = document.getElementById("saat");
const dakikaE = document.getElementById("dakika");
const saniyeE = document.getElementById("saniye");

const yeniYilTarihi = new Date("Jan 1, 2025 00:00:00").getTime();

guncelSayici();

function guncelSayici() {
  const simdi = new Date().getTime();
  const bosluk = yeniYilTarihi - simdi;

  const saniye = 1000;
  const dakika = saniye * 60;
  const saat = dakika * 60;
  const gun = saat * 24;

  const g = Math.floor(bosluk / gun);
  const s = Math.floor((bosluk % gun) / saat);
  const d = Math.floor((bosluk % saat) / dakika);
  const sa = Math.floor((bosluk % dakika) / saniye);

  gunE.innerText = g;
  saatE.innerText = s;
  dakikaE.innerText = d;
  saniyeE.innerText = sa;
  setTimeout(guncelSayici, 1000);
}
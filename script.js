// Pulseira de Ritmo | script.js
// ------------------------------
// Autor: Mikey aka NunchuckCoder
// https://github.com/NunchuckCoder
// ------------------------------
const mToKm = 1.609344;

const raceData = [
  { length: 5, sectors: [0,1,2,3,4,5], desc: ['Início',1,2,3,4,'Final'] },
  { length: 5/mToKm, sectors: [0,1,2,3,5/mToKm], desc: ['Início',1,2,3,'Final'] },
  { length: 5*mToKm, sectors: [0,1,2,3,4,5,6,7,8,5*mToKm], desc: ['Início',1,2,3,4,5,6,7,8,'Final'] },
  { length: 5, sectors: [0,1,2,3,4,5], desc: ['Início',1,2,3,4,'Final'] },
  { length: 10, sectors: [0,1,2,3,4,5,6,7,8,9,10], desc: ['Início',1,2,3,4,5,6,7,8,9,'Final'] },
  { length: 10/mToKm, sectors: [0,1,2,3,4,5,6,10/mToKm], desc: ['Início',1,2,3,4,5,6,'Final'] },
  { length: 10*mToKm, sectors: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,10*mToKm], desc: ['Início',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,'Final'] },
  { length: 10, sectors: [0,1,2,3,4,5,6,7,8,9,10], desc: ['Início',1,2,3,4,5,6,7,8,9,'Final'] },
  { length: 21.0975, sectors: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21.0975], desc: ['Início',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,'Final'] },
  { length: 13.1, sectors: [0,1,2,3,4,5,6,7,8,9,10,11,12,13.1], desc: ['Início',1,2,3,4,5,6,7,8,9,10,11,12,'Final'] },
  { length: 42.195, sectors: [0,2,4,6,8,10,12,14,16,18,20,21.0975,22,24,26,28,30,32,34,36,38,40,42,42.195], desc: ['Início',2,4,6,8,10,12,14,16,18,20,'Metade',22,24,26,28,30,32,34,36,38,40,42,'Final'] },
  { length: 26.2, sectors: Array.from({length:27},(_,i)=>i).concat([26.2]), desc: Array.from({length:26},(_,i)=>i+1).concat(['Metade','Final']) }
];

function pad(n) {
  return n < 10 ? '0' + n : n;
}

function makeTime(sec) {
  if (isNaN(sec) || sec < 0) return '00:00:00';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function calcTime() {
  const h = Number(document.getElementById('hour').value) || 0;
  const m = Number(document.getElementById('min').value) || 0;
  const s = Number(document.getElementById('sec').value) || 0;
  const totalSec = h * 3600 + m * 60 + s;

  if (totalSec <= 0) {
    alert('Por favor insira um tempo válido.');
    return;
  }

  const distIdx = Number(document.getElementById('dist').value);
  const unitIdx = Number(document.getElementById('distType').value);
  const raceIdx = distIdx * 2 + unitIdx;
  const race = raceData[raceIdx];
  const secPerUnit = totalSec / race.length;
  const unit = unitIdx === 0 ? 'km' : 'M';

  // --- EMERGÊNCIA ---
  const name = document.getElementById('emergencyName').value.trim();
  const phone = document.getElementById('emergencyPhone').value.trim();
  const block = document.getElementById('emergencyBlock');
  const nameEl = document.getElementById('printName');
  const phoneEl = document.getElementById('printPhone');

  if (name || phone) {
    nameEl.textContent = name || '—';
    phoneEl.textContent = phone || '—';
    block.style.display = 'block';
  } else {
    block.style.display = 'none';
  }

  document.getElementById('unitHeader').textContent = unit;

  const tbody = document.getElementById('paceRows');
  tbody.innerHTML = '';

  race.sectors.forEach((dist, i) => {
    if (i >= race.desc.length) return;
    const desc = race.desc[i];
    if (desc === undefined || dist === undefined) return;
    const time = makeTime(dist * secPerUnit);
    const row = document.createElement('tr');
    row.innerHTML = `<td><strong>${desc}</strong></td><td>${time}</td>`;
    tbody.appendChild(row);
  });

  document.getElementById('paceband').style.display = 'block';
}
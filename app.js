// app.js — Jisho-FR Application Logic

// ── State ──────────────────────────────────────────────
const state = {
  query: '',
  level: 'all',
  category: 'all',
  view: 'grid',
  favorites: new Set(JSON.parse(localStorage.getItem('jisho_favs') || '[]')),
  openWord: null,
};

// ── DOM refs ───────────────────────────────────────────
const grid = document.getElementById('word-grid');
const searchInput = document.getElementById('search-input');
const countEl = document.getElementById('count');
const overlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

// ── Filter ─────────────────────────────────────────────
function filteredWords() {
  let words = WORDS;

  if (state.category === 'favoris') {
    words = words.filter(w => state.favorites.has(w.id));
  } else if (state.category !== 'all') {
    words = words.filter(w => w.category === state.category);
  }

  if (state.level !== 'all') {
    words = words.filter(w => w.level === state.level);
  }

  if (state.query.trim()) {
    const q = state.query.trim().toLowerCase();
    words = words.filter(w =>
      w.kanji.includes(q) ||
      w.reading.includes(q) ||
      w.romaji.toLowerCase().includes(q) ||
      w.translation.toLowerCase().includes(q)
    );
  }

  return words;
}

// ── Render grid ────────────────────────────────────────
function renderGrid() {
  const words = filteredWords();
  countEl.innerHTML = `<span>${words.length}</span>`;
  grid.innerHTML = '';

  if (words.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-kanji">無</span>
        Aucun mot trouvé pour cette recherche.
      </div>`;
    return;
  }

  const frag = document.createDocumentFragment();
  words.forEach(word => {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.level = word.level;
    card.innerHTML = `
      <div class="card-top">
        <div class="card-kanji">${word.kanji}</div>
        <span class="card-level-badge badge-${word.level}">${word.level}</span>
      </div>
      <div class="card-reading">${word.reading}</div>
      <div class="card-romaji">${word.romaji}</div>
      <div class="card-translation">${word.translation}</div>
      <div class="card-category">${catLabel(word.category)}</div>
      <button class="card-fav ${state.favorites.has(word.id) ? 'active' : ''}" data-id="${word.id}" title="Ajouter aux favoris">⭐</button>
    `;
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('card-fav')) return;
      openModal(word);
    });
    card.querySelector('.card-fav').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(word.id, card.querySelector('.card-fav'));
    });
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

function catLabel(cat) {
  const map = { nom:'Nom', verbe:'Verbe', adjectif:'Adjectif', adverbe:'Adverbe', expression:'Expression' };
  return map[cat] || cat;
}

// ── Favorites ──────────────────────────────────────────
function toggleFav(id, btn) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    btn && btn.classList.remove('active');
  } else {
    state.favorites.add(id);
    btn && btn.classList.add('active');
  }
  localStorage.setItem('jisho_favs', JSON.stringify([...state.favorites]));
  // Update modal fav btn if open
  const modalFav = document.getElementById('modal-fav-btn');
  if (modalFav && state.openWord && state.openWord.id === id) {
    modalFav.classList.toggle('active', state.favorites.has(id));
    modalFav.textContent = state.favorites.has(id) ? '⭐ Favori' : '☆ Favoris';
  }
}

// ── Modal ──────────────────────────────────────────────
function openModal(word) {
  state.openWord = word;
  document.getElementById('m-kanji').textContent = word.kanji;
  document.getElementById('m-reading').textContent = word.reading;
  document.getElementById('m-romaji').textContent = word.romaji;
  document.getElementById('m-translation').textContent = word.translation;

  // Examples
  const exWrap = document.getElementById('m-examples-wrap');
  const exDiv = document.getElementById('m-examples');
  exDiv.innerHTML = '';
  if (word.examples && word.examples.length > 0) {
    exWrap.style.display = 'block';
    word.examples.forEach(ex => {
      exDiv.innerHTML += `
        <div class="modal-example">
          <div class="modal-ex-jp">${ex.jp}</div>
          <div class="modal-ex-fr">${ex.fr}</div>
        </div>`;
    });
  } else {
    exWrap.style.display = 'none';
  }

  // Meta
  const meta = document.getElementById('m-meta');
  const isFav = state.favorites.has(word.id);
  meta.innerHTML = `
    <span class="modal-badge badge-${word.level}">${word.level}</span>
    <span class="modal-cat-tag">${catLabel(word.category)}</span>
    <button class="modal-fav-btn ${isFav ? 'active' : ''}" id="modal-fav-btn">${isFav ? '⭐ Favori' : '☆ Favoris'}</button>
  `;
  document.getElementById('modal-fav-btn').addEventListener('click', () => {
    toggleFav(word.id, null);
    // Also update card in grid
    const cardFav = grid.querySelector(`.card-fav[data-id="${word.id}"]`);
    if (cardFav) cardFav.classList.toggle('active', state.favorites.has(word.id));
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  state.openWord = null;
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ── Search ────────────────────────────────────────────
searchInput.addEventListener('input', () => {
  state.query = searchInput.value;
  renderGrid();
});

// ── Level buttons ─────────────────────────────────────
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.level = btn.dataset.level;
    document.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('inactive', b.dataset.level !== state.level));
    renderGrid();
  });
});

// ── Category select ───────────────────────────────────
document.getElementById('cat-select').addEventListener('change', (e) => {
  state.category = e.target.value;
  renderGrid();
});

// ── View toggle ───────────────────────────────────────
gridBtn.addEventListener('click', () => {
  state.view = 'grid';
  grid.classList.remove('list-view');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});
listBtn.addEventListener('click', () => {
  state.view = 'list';
  grid.classList.add('list-view');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});

// ── Offline detection ─────────────────────────────────
const offlineBadge = document.getElementById('offline-badge');
function updateOnlineStatus() {
  offlineBadge.classList.toggle('visible', !navigator.onLine);
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// ── PWA Install ───────────────────────────────────────
let deferredPrompt = null;
const installBanner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');
const installDismiss = document.getElementById('install-dismiss');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem('jisho_install_dismissed')) {
    installBanner.classList.add('show');
  }
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBanner.classList.remove('show');
});

installDismiss.addEventListener('click', () => {
  installBanner.classList.remove('show');
  localStorage.setItem('jisho_install_dismissed', '1');
});

// ── Service Worker ────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.warn('SW failed:', err));
  });
}

// ── Init ──────────────────────────────────────────────
renderGrid();

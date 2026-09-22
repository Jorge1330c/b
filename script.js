/* =========================================================
   1. CONFIGURACIÓN DE IMÁGENES
   ========================================================= */
const CARPETA_IMG = 'img/';
const EXTENSION   = '.png';

/* =========================================================
   2. CATEGORÍAS
   ========================================================= */
const CATEGORIAS = {
    cuello:  'Cuello',
    espalda: 'Espalda',
    piernas: 'Piernas',
    brazos:  'Brazos'
};

/* =========================================================
   3. CATÁLOGO · 83 PRODUCTOS
   ========================================================= */
const PRODUCTOS = [
    { file:'LM 144 COLLARIN CERVICAL BLANDO',                                   cat:'cuello',  tipo:'Cervical',    precio:24.90, badge:'',            emoji:'🧣' },
    { file:'LM 167 COJIN CERVICAL VICOELÁSTICO',                                cat:'cuello',  tipo:'Cervical',    precio:39.90, badge:'',            emoji:'🛏️' },

    { file:'BRA 257 CINTURILLA DEPORTIVA',                                      cat:'espalda', tipo:'Cinturilla',  precio:19.90, badge:'',            emoji:'🩹' },
    { file:'BRA 260 CINTURILLA 3 BANDAS THERMO REDUCTOR',                       cat:'espalda', tipo:'Cinturilla',  precio:29.90, badge:'',            emoji:'🔥' },
    { file:'BRA 293 FAJA POST PARTO',                                           cat:'espalda', tipo:'Faja',        precio:34.90, badge:'',            emoji:'🤰' },
    { file:'LM 100 FAJA POST OPERATORIA',                                       cat:'espalda', tipo:'Faja',        precio:39.90, badge:'',            emoji:'🏥' },
    { file:'LM 101 CABESTRILLO CON INMOVILIZADOR DE HOMBRO',                    cat:'espalda', tipo:'Cabestrillo', precio:44.90, badge:'',            emoji:'🩹' },
    { file:'LM 101 KIDS CABESTRILLO INMOVILIZADOR DE HOMBRO',                   cat:'espalda', tipo:'Cabestrillo', precio:34.90, badge:'',            emoji:'🧒' },
    { file:'LM 102 FAJA PRE NATAL',                                             cat:'espalda', tipo:'Faja',        precio:32.90, badge:'',            emoji:'🤰' },
    { file:'LM 103 CORRECTOR DE POSTURA PERITA',                                cat:'espalda', tipo:'Corrector',   precio:27.90, badge:'',            emoji:'🧍' },
    { file:'LM 104 CABESTRILLO UNIVERSAL BILATERAL',                            cat:'espalda', tipo:'Cabestrillo', precio:24.90, badge:'',            emoji:'🩹' },
    { file:'LM 105 BOOX',                                                       cat:'espalda', tipo:'Corrector',   precio:36.90, badge:'',            emoji:'📦' },
    { file:'LM 105 FAJA DORSO LUMBAR',                                          cat:'espalda', tipo:'Faja',        precio:42.90, badge:'',            emoji:'🩹' },
    { file:'LM 106 CORRECTOR DE POSTURA EN 8 kids',                             cat:'espalda', tipo:'Corrector',   precio:29.90, badge:'',            emoji:'🧒' },
    { file:'LM 106 CORRECTOR DE POSTURA EN 8',                                  cat:'espalda', tipo:'Corrector',   precio:32.90, badge:'',            emoji:'🧍' },
    { file:'LM 107 SOPORTE DE CLAVÍCULA',                                       cat:'espalda', tipo:'Soporte',     precio:31.90, badge:'',            emoji:'🦴' },
    { file:'LM 108 FAJA LABORAL',                                               cat:'espalda', tipo:'Faja',        precio:37.90, badge:'',            emoji:'🦺' },
    { file:'LM 109 FAJA SACRO LUMBAR',                                          cat:'espalda', tipo:'Faja',        precio:44.90, badge:'',            emoji:'🩹' },
    { file:'LM 112 CORRECTOR BRASIER',                                          cat:'espalda', tipo:'Corrector',   precio:34.90, badge:'',            emoji:'👙' },
    { file:'LM 120 FAJA LUMBAR CON REFUERZO',                                   cat:'espalda', tipo:'Faja',        precio:49.90, badge:'',            emoji:'🩹' },
    { file:'LM 121 FAJA MATERNA',                                               cat:'espalda', tipo:'Faja',        precio:36.90, badge:'',            emoji:'🤰' },
    { file:'LM 123 FAJA INDUSTRIAL',                                            cat:'espalda', tipo:'Faja',        precio:54.90, badge:'',            emoji:'🦺' },
    { file:'LM 131 CORRECTOR POSTURAL DOS PIEZAS',                              cat:'espalda', tipo:'Corrector',   precio:39.90, badge:'',            emoji:'🧍' },
    { file:'LM 131-k CORRECTOR DE POSTURA DOS PIEZAS KIDS',                     cat:'espalda', tipo:'Corrector',   precio:34.90, badge:'',            emoji:'🧒' },
    { file:'LM 136 CABESTRILLO PEDIÁTRICO KIDS',                                cat:'espalda', tipo:'Cabestrillo', precio:26.90, badge:'',            emoji:'🧒' },
    { file:'LM 136 CABESTRILLO PEDIÁTRICO',                                     cat:'espalda', tipo:'Cabestrillo', precio:29.90, badge:'',            emoji:'🩹' },
    { file:'LM 137 CABESTRILLO UNIVERSAL ACOLCHONADO',                          cat:'espalda', tipo:'Cabestrillo', precio:32.90, badge:'',            emoji:'🩹' },
    { file:'LM 145 POST CESÁREA',                                               cat:'espalda', tipo:'Faja',        precio:41.90, badge:'',            emoji:'🤰' },
    { file:'LM 161 COJIN PICARON VISCOELASTICO CON GEL',                        cat:'espalda', tipo:'Cojín',       precio:34.90, badge:'',            emoji:'🛋️' },
    { file:'LM 170 COJIN TIPO DONA PARA COXIS, HEMORROIDES, CIÁTICA Y EMBARAZO',cat:'espalda', tipo:'Cojín',       precio:29.90, badge:'',            emoji:'🛋️' },

    { file:'BRA 103 RODILLERA ARTICULADA',                                      cat:'piernas', tipo:'Rodillera',   precio:34.90, badge:'Recomendado', emoji:'🦵' },
    { file:'BRA 107 TOBILLERA LARGA',                                           cat:'piernas', tipo:'Tobillera',   precio:19.90, badge:'',            emoji:'🦶' },
    { file:'BRA 108 TOBILLERA CORTA',                                           cat:'piernas', tipo:'Tobillera',   precio:16.90, badge:'',            emoji:'🦶' },
    { file:'BRA 108 TOBILLERA DE VELCRO',                                       cat:'piernas', tipo:'Tobillera',   precio:18.90, badge:'',            emoji:'🦶' },
    { file:'BRA 113 TOBILLERA CON FÉRULA',                                      cat:'piernas', tipo:'Tobillera',   precio:29.90, badge:'',            emoji:'🦶' },
    { file:'BRA 138 TOBILLERA CORTA',                                           cat:'piernas', tipo:'Tobillera',   precio:17.90, badge:'',            emoji:'🦶' },
    { file:'BRA 519 RODILLERA HILO DE COBRE ANTIDESLIZANTE GEL Y VARILLAS',     cat:'piernas', tipo:'Rodillera',   precio:44.90, badge:'Top ventas',  emoji:'🦵' },
    { file:'BRA 697 MUSLERA HILO DE COBRE',                                     cat:'piernas', tipo:'Muslera',     precio:32.90, badge:'',            emoji:'🦵' },
    { file:'LM 213 TOBILLERA CON ESTABILIZADOR REFORZADO',                      cat:'piernas', tipo:'Tobillera',   precio:32.90, badge:'',            emoji:'🦶' },
    { file:'LM 214 TOBILLERA ELASTICA DEPORTIVA',                               cat:'piernas', tipo:'Tobillera',   precio:19.90, badge:'',            emoji:'🦶' },
    { file:'LM 217 ALMOHADILLA DE TALÓN',                                       cat:'piernas', tipo:'Talón',       precio:11.90, badge:'',            emoji:'🦶' },
    { file:'LM 235 ALMOHADILLA DE METATARDAL CON SEPARADOR DE DEDOS',           cat:'piernas', tipo:'Metatarso',   precio:14.90, badge:'',            emoji:'🦶' },
    { file:'LM 242 TUBO DE GEL CON TEJIDO',                                     cat:'piernas', tipo:'Gel',         precio:16.90, badge:'',            emoji:'🧴' },
    { file:'LM 245 PLANTILLA EN GEL REMOVIBLE',                                 cat:'piernas', tipo:'Plantilla',   precio:18.90, badge:'',            emoji:'👟' },
    { file:'LM 246 TALONERA EN SILICONA',                                       cat:'piernas', tipo:'Talonera',    precio:12.90, badge:'',            emoji:'🦶' },
    { file:'LM 247 TALONERA EN GEL',                                            cat:'piernas', tipo:'Talonera',    precio:13.90, badge:'',            emoji:'🦶' },
    { file:'QTM 200 RODILLERA DOBLE AJUSTE',                                    cat:'piernas', tipo:'Rodillera',   precio:28.90, badge:'',            emoji:'🦵' },
    { file:'QTM 202 RODILLERA VELCRO CON RESORTE',                              cat:'piernas', tipo:'Rodillera',   precio:31.90, badge:'',            emoji:'🦵' },
    { file:'QTM 203 RODILLERA CON BANDA ELASTICA',                              cat:'piernas', tipo:'Rodillera',   precio:22.90, badge:'',            emoji:'🦵' },
    { file:'QTM 204 RODILLERA HILO DE COBRE',                                   cat:'piernas', tipo:'Rodillera',   precio:38.90, badge:'',            emoji:'🦵' },
    { file:'QTM 205 TOBILLERA HILO DE COBRE',                                   cat:'piernas', tipo:'Tobillera',   precio:26.90, badge:'',            emoji:'🦶' },
    { file:'QTM 222 RODILLERA HILO DE COBRE CON GEL Y VARILLAS LATERALES',      cat:'piernas', tipo:'Rodillera',   precio:49.90, badge:'Premium',     emoji:'🦵' },
    { file:'LM 255 ANDADOR SIN RUEDAS',                                         cat:'piernas', tipo:'Andador',     precio:79.90, badge:'',            emoji:'🦯' },
    { file:'LM 257 ANDADOR CON RUEDAS',                                         cat:'piernas', tipo:'Andador',     precio:99.90, badge:'',            emoji:'🦽' },
    { file:'LM 259 BASTON DE UN PUNTO',                                         cat:'piernas', tipo:'Bastón',      precio:19.90, badge:'',            emoji:'🦯' },
    { file:'LM 261 BASTON 4 PATAS ESCALERA LARGA',                              cat:'piernas', tipo:'Bastón',      precio:34.90, badge:'',            emoji:'🦯' },
    { file:'LM 262 BASTON 4 PATAS TETRAPODAL CORTA',                            cat:'piernas', tipo:'Bastón',      precio:32.90, badge:'',            emoji:'🦯' },
    { file:'LM 263 MULETA',                                                     cat:'piernas', tipo:'Muleta',      precio:44.90, badge:'',            emoji:'🩼' },
    { file:'LM 265 BASTON TIPO GANSO',                                          cat:'piernas', tipo:'Bastón',      precio:24.90, badge:'',            emoji:'🦯' },

    { file:'BRA 124 INMOVILIZADOR DE PULGAR',                                   cat:'brazos', tipo:'Pulgar',       precio:19.90, badge:'',            emoji:'👍' },
    { file:'BRA 125 MUÑEQUERA BILATERAL',                                       cat:'brazos', tipo:'Muñequera',    precio:22.90, badge:'',            emoji:'🤚' },
    { file:'BRA 126 MUÑEQUERA CORTA',                                           cat:'brazos', tipo:'Muñequera',    precio:14.90, badge:'',            emoji:'🤚' },
    { file:'BRA 127 MUÑEQUERA VELCRO',                                          cat:'brazos', tipo:'Muñequera',    precio:16.90, badge:'',            emoji:'🧤' },
    { file:'BRA 129 MUÑEQUERA CON FERULA BILATERAL',                            cat:'brazos', tipo:'Muñequera',    precio:27.90, badge:'',            emoji:'🤚' },
    { file:'BRA 130 CODERA LARGA',                                              cat:'brazos', tipo:'Codera',       precio:22.90, badge:'',            emoji:'💪' },
    { file:'BRA 131 CODERA DE TENISTA',                                         cat:'brazos', tipo:'Codera',       precio:23.90, badge:'',            emoji:'🎾' },
    { file:'BRA 132 CODERA CORTA',                                              cat:'brazos', tipo:'Codera',       precio:19.90, badge:'',            emoji:'💪' },
    { file:'BRA 134 HOMBRERA UNIVERSAL',                                        cat:'brazos', tipo:'Hombrera',     precio:39.90, badge:'',            emoji:'🦴' },
    { file:'BRA 144 MUÑEQUERA BILATERAL PREMIUM',                               cat:'brazos', tipo:'Muñequera',    precio:29.90, badge:'Premium',     emoji:'🧤' },
    { file:'BRA 155 MUÑEQUERA LARGA CON FERULA PALMAR',                         cat:'brazos', tipo:'Muñequera',    precio:28.90, badge:'',            emoji:'🤚' },
    { file:'BRA 678 CODERA DE COMPRESIÓN',                                      cat:'brazos', tipo:'Codera',       precio:25.90, badge:'',            emoji:'💪' },
    { file:'BRA 681 CODERA HILO DE COBRE',                                      cat:'brazos', tipo:'Codera',       precio:34.90, badge:'',            emoji:'💪' },
    { file:'BRA 695 MUÑEQUERA HILO DE COBRE',                                   cat:'brazos', tipo:'Muñequera',    precio:29.90, badge:'',            emoji:'🧤' },
    { file:'LM 148 INMOVILIZADOR DE DEDOS VELTRO',                              cat:'brazos', tipo:'Dedos',        precio:15.90, badge:'',            emoji:'✋' },
    { file:'LM 149 INMOVILIZADOR DE DEDOS',                                     cat:'brazos', tipo:'Dedos',        precio:13.90, badge:'',            emoji:'✋' },
    { file:'LM 158B SUSPENSOR TRUZA LARGA',                                     cat:'brazos', tipo:'Suspensor',    precio:12.90, badge:'',            emoji:'🩲' },
    { file:'LM 227 MUÑEQUERA LARGA CON FÉRULA',                                 cat:'brazos', tipo:'Muñequera',    precio:26.90, badge:'',            emoji:'🤚' },
    { file:'QTM 206 CODERA HILO DE COBRE',                                      cat:'brazos', tipo:'Codera',       precio:32.90, badge:'',            emoji:'💪' },
    { file:'QTM 207 MUÑEQUERA CON PALMA HILO DE COBRE',                         cat:'brazos', tipo:'Muñequera',    precio:31.90, badge:'',            emoji:'🧤' },
    { file:'QTM 208 MUÑEQUERA CORTA HILO DE COBRE',                             cat:'brazos', tipo:'Muñequera',    precio:26.90, badge:'',            emoji:'🧤' },
    { file:'QTM 212 MUÑEQUERA DEPORTIVA AJUSTABLE',                             cat:'brazos', tipo:'Muñequera',    precio:21.90, badge:'',            emoji:'🤚' },
    { file:'QTM 214 INMOVILIZADOR DE PULGAR',                                   cat:'brazos', tipo:'Pulgar',       precio:19.90, badge:'',            emoji:'👍' },
    { file:'QTM 216 HOMBRERA BILATERAL GRADUABLE',                              cat:'brazos', tipo:'Hombrera',     precio:44.90, badge:'',            emoji:'🦴' }
];

/* =========================================================
   4. UTILIDADES
   ========================================================= */
function imagenProducto(p) {
    return CARPETA_IMG + encodeURIComponent(p.file + EXTENSION);
}

function svgRespaldo(emoji) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
        <rect width="100%" height="100%" fill="#FDE8E8"/>
        <text x="50%" y="50%" font-size="150" text-anchor="middle"
              dominant-baseline="central">${emoji}</text></svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const formatoPrecio = n => 'S/ ' + n.toFixed(2);

function normalizar(txt) {
    return (txt || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/* =========================================================
   5. TOAST
   ========================================================= */
let toastTimer;
function mostrarToast(mensaje, esError = false) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerHTML = `<i class="fas ${esError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${mensaje}`;
    toast.classList.toggle('error', esError);
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* =========================================================
   6. MODO OSCURO
   ========================================================= */
const THEME_KEY = 'borans_tema';
const themeBtn  = document.getElementById('themeBtn');

function cargarTema() {
    try {
        const guardado = localStorage.getItem(THEME_KEY);
        if (guardado === 'dark') {
            document.body.classList.add('dark-mode');
            actualizarIconoTema(true);
        }
    } catch {}
}

function actualizarIconoTema(esOscuro) {
    if (!themeBtn) return;
    const i = themeBtn.querySelector('i');
    if (!i) return;
    i.className = esOscuro ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTema() {
    const esOscuro = document.body.classList.toggle('dark-mode');
    actualizarIconoTema(esOscuro);
    try {
        localStorage.setItem(THEME_KEY, esOscuro ? 'dark' : 'light');
    } catch {}
    mostrarToast(esOscuro ? '🌙 Modo oscuro activado' : '☀️ Modo claro activado');
}

themeBtn?.addEventListener('click', toggleTema);

/* =========================================================
   7. CARRITO
   ========================================================= */
const STORAGE_KEY = 'borans_carrito';
let carrito = [];

function cargarCarrito() {
    try {
        const datos = localStorage.getItem(STORAGE_KEY);
        carrito = datos ? JSON.parse(datos) : [];
    } catch { carrito = []; }
}

function guardarCarrito() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
    } catch {}
}

function totalCarrito() {
    return carrito.reduce((sum, it) => sum + it.precio * it.qty, 0);
}

function totalUnidades() {
    return carrito.reduce((sum, it) => sum + it.qty, 0);
}

function agregarAlCarrito(file) {
    const prod = PRODUCTOS.find(p => p.file === file);
    if (!prod) return;

    const existente = carrito.find(it => it.file === file);
    if (existente) {
        existente.qty++;
    } else {
        carrito.push({
            file: prod.file,
            nombre: prod.file,
            precio: prod.precio,
            emoji: prod.emoji,
            cat: prod.cat,
            tipo: prod.tipo,
            qty: 1
        });
    }
    guardarCarrito();
    renderCarrito();
    actualizarContadorCarrito(true);
    mostrarToast(`✓ Añadido: ${prod.file.split(' ').slice(2).join(' ')}`);
}

function eliminarDelCarrito(file) {
    carrito = carrito.filter(it => it.file !== file);
    guardarCarrito();
    renderCarrito();
    actualizarContadorCarrito();
}

function cambiarCantidad(file, delta) {
    const item = carrito.find(it => it.file === file);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { eliminarDelCarrito(file); return; }
    guardarCarrito();
    renderCarrito();
    actualizarContadorCarrito();
}

function vaciarCarrito() {
    if (carrito.length === 0) return;
    if (!confirm('¿Seguro que quieres vaciar el carrito?')) return;
    carrito = [];
    guardarCarrito();
    renderCarrito();
    actualizarContadorCarrito();
    mostrarToast('Carrito vaciado');
}

function actualizarContadorCarrito(bump = false) {
    const count = document.getElementById('cartCount');
    if (!count) return;
    const total = totalUnidades();
    count.textContent = total;
    count.style.display = total > 0 ? 'inline-flex' : 'none';
    if (bump) {
        count.classList.remove('bump');
        void count.offsetWidth;
        count.classList.add('bump');
    }
}

function renderCarrito() {
    const body    = document.getElementById('cartBody');
    const footer  = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    if (!body) return;

    if (carrito.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <h4>Tu carrito está vacío</h4>
                <p>Añade productos desde el catálogo para verlos aquí.</p>
            </div>`;
        footer.classList.add('hidden');
        return;
    }

    footer.classList.remove('hidden');

    body.innerHTML = carrito.map(it => {
        const img = CARPETA_IMG + encodeURIComponent(it.file + EXTENSION);
        const respaldo = svgRespaldo(it.emoji);
        const code = it.file.split(' ').slice(0, 2).join(' ');
        const nombre = it.file.split(' ').slice(2).join(' ');
        return `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${img}" alt="${nombre}"
                         onerror="this.onerror=null;this.src='${respaldo}';">
                </div>
                <div class="cart-item-info">
                    <h5>${nombre}</h5>
                    <div class="code">${code}</div>
                    <div class="unit-price">${formatoPrecio(it.precio)} c/u</div>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-controls">
                        <button class="qty-btn" data-action="dec" data-file="${it.file}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-value">${it.qty}</span>
                        <button class="qty-btn" data-action="inc" data-file="${it.file}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <span class="cart-item-subtotal">${formatoPrecio(it.precio * it.qty)}</span>
                    <button class="item-remove" data-action="remove" data-file="${it.file}" aria-label="Quitar">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    totalEl.textContent = formatoPrecio(totalCarrito());
}

const cartBodyEl = document.getElementById('cartBody');
if (cartBodyEl) {
    cartBodyEl.addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const action = btn.dataset.action;
        const file   = btn.dataset.file;
        if (action === 'inc')    cambiarCantidad(file, +1);
        if (action === 'dec')    cambiarCantidad(file, -1);
        if (action === 'remove') eliminarDelCarrito(file);
    });
}

const cartDrawer  = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBtn     = document.getElementById('cartBtn');
const cartClose   = document.getElementById('cartClose');

function abrirCarrito() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function cerrarCarrito() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

cartBtn?.addEventListener('click', abrirCarrito);
cartClose?.addEventListener('click', cerrarCarrito);
cartOverlay?.addEventListener('click', cerrarCarrito);

document.getElementById('cartClear')?.addEventListener('click', vaciarCarrito);
document.getElementById('cartCheckout')?.addEventListener('click', () => {
    if (carrito.length === 0) return;
    let msg = 'Hola Boran´s 👋, quiero hacer este pedido:\n\n';
    carrito.forEach(it => {
        msg += `• ${it.qty}x ${it.file} — S/ ${(it.precio * it.qty).toFixed(2)}\n`;
    });
    msg += `\nTotal: S/ ${totalCarrito().toFixed(2)}`;
    window.open('https://wa.me/51910475191?text=' + encodeURIComponent(msg), '_blank');
});

/* =========================================================
   8. WISHLIST / FAVORITOS
   ========================================================= */
const WISH_KEY = 'borans_favoritos';
let favoritos = [];

function cargarFavoritos() {
    try {
        const datos = localStorage.getItem(WISH_KEY);
        favoritos = datos ? JSON.parse(datos) : [];
    } catch { favoritos = []; }
}

function guardarFavoritos() {
    try {
        localStorage.setItem(WISH_KEY, JSON.stringify(favoritos));
    } catch {}
}

function esFavorito(file) { return favoritos.includes(file); }

function toggleFavorito(file) {
    if (esFavorito(file)) {
        favoritos = favoritos.filter(f => f !== file);
        mostrarToast('Eliminado de favoritos');
    } else {
        favoritos.push(file);
        mostrarToast('❤️ Añadido a favoritos');
    }
    guardarFavoritos();
    actualizarContadorWishlist(true);
    renderWishlist();
    document.querySelectorAll(`.wish-toggle[data-file="${CSS.escape(file)}"]`)
        .forEach(btn => {
            btn.classList.toggle('active', esFavorito(file));
            const i = btn.querySelector('i');
            if (i) i.className = esFavorito(file) ? 'fas fa-heart' : 'far fa-heart';
        });
}

function actualizarContadorWishlist(bump = false) {
    const count = document.getElementById('wishlistCount');
    if (!count) return;
    count.textContent = favoritos.length;
    count.style.display = favoritos.length > 0 ? 'inline-flex' : 'none';
    if (bump) {
        count.classList.remove('bump');
        void count.offsetWidth;
        count.classList.add('bump');
    }
}

function renderWishlist() {
    const grid = document.getElementById('wishlistGrid');
    const info = document.getElementById('wishlistFooterInfo');
    const addAllBtn = document.getElementById('wishlistAddAll');
    if (!grid) return;

    if (favoritos.length === 0) {
        grid.innerHTML = `
            <div class="wishlist-empty">
                <i class="far fa-heart"></i>
                <h4>Aún no tienes favoritos</h4>
                <p>Toca el corazón en cualquier producto para guardarlo.</p>
            </div>`;
        if (info) info.textContent = '0 productos guardados';
        if (addAllBtn) { addAllBtn.disabled = true; addAllBtn.style.opacity = '0.5'; }
        return;
    }

    if (info) {
        info.textContent = favoritos.length === 1
            ? '1 producto guardado'
            : `${favoritos.length} productos guardados`;
    }
    if (addAllBtn) { addAllBtn.disabled = false; addAllBtn.style.opacity = '1'; }

    grid.innerHTML = favoritos.map(file => {
        const p = PRODUCTOS.find(x => x.file === file);
        if (!p) return '';
        const img = CARPETA_IMG + encodeURIComponent(p.file + EXTENSION);
        const respaldo = svgRespaldo(p.emoji);
        const code = p.file.split(' ').slice(0, 2).join(' ');
        const nombre = p.file.split(' ').slice(2).join(' ');
        return `
            <div class="wishlist-item" data-file="${p.file}">
                <div class="wishlist-item-img">
                    <img src="${img}" alt="${nombre}"
                         onerror="this.onerror=null;this.src='${respaldo}';">
                </div>
                <div class="wishlist-item-info">
                    <h5>${nombre}</h5>
                    <div class="wcode">${code}</div>
                    <div class="price">${formatoPrecio(p.precio)}</div>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-btn" data-action="add" data-file="${p.file}">
                        <i class="fas fa-cart-plus"></i> Añadir
                    </button>
                    <button class="remove-btn" data-action="remove" data-file="${p.file}">
                        <i class="fas fa-trash-alt"></i> Quitar
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

const wishlistGrid = document.getElementById('wishlistGrid');
if (wishlistGrid) {
    wishlistGrid.addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const { action, file } = btn.dataset;
        if (action === 'add')    agregarAlCarrito(file);
        if (action === 'remove') toggleFavorito(file);
    });
}

document.getElementById('wishlistBtn')?.addEventListener('click', () => {
    renderWishlist();
    abrirModal('modalWishlist');
});

document.getElementById('wishlistAddAll')?.addEventListener('click', () => {
    if (favoritos.length === 0) return;
    favoritos.forEach(f => agregarAlCarrito(f));
    mostrarToast(`✓ ${favoritos.length} productos añadidos al carrito`);
});

/* =========================================================
   9. RENDER CATÁLOGO + FILTROS + BÚSQUEDA + PAGINACIÓN
   ========================================================= */
const grid          = document.getElementById('productGrid');
const counter       = document.getElementById('catalogCounter');
const moreWrap      = document.getElementById('catalogMore');
const loadMoreBtn   = document.getElementById('loadMoreBtn');
const filterButtons = document.querySelectorAll('#filterButtons button');
const searchInput   = document.getElementById('searchInput');
const searchClear   = document.getElementById('searchClear');
const searchBox     = document.querySelector('.catalog-search');
const sortSelect    = document.getElementById('sortSelect');
const tipoSelect    = document.getElementById('tipoSelect');
const priceRange    = document.getElementById('priceRange');
const priceLabel    = document.getElementById('priceLabel');

const PASO = 12;
let filtroActual = 'todos';
let busqueda     = '';
let tipoActual   = 'todos';
let ordenActual  = 'default';
let precioMax    = 100;
let visibles     = PASO;

function poblarTipos() {
    if (!tipoSelect) return;
    const tipos = [...new Set(PRODUCTOS.map(p => p.tipo))].sort();
    tipos.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        tipoSelect.appendChild(opt);
    });
}

function listaFiltrada() {
    let lista = [...PRODUCTOS];

    if (filtroActual !== 'todos') lista = lista.filter(p => p.cat === filtroActual);
    if (tipoActual !== 'todos')   lista = lista.filter(p => p.tipo === tipoActual);
    lista = lista.filter(p => p.precio <= precioMax);

    if (busqueda.trim()) {
        const q = normalizar(busqueda.trim());
        lista = lista.filter(p => normalizar(p.file).includes(q));
    }

    switch (ordenActual) {
        case 'price-asc':
            lista.sort((a,b) => a.precio - b.precio); break;
        case 'price-desc':
            lista.sort((a,b) => b.precio - a.precio); break;
        case 'name-asc':
            lista.sort((a,b) => a.file.localeCompare(b.file)); break;
        case 'name-desc':
            lista.sort((a,b) => b.file.localeCompare(a.file)); break;
    }

    return lista;
}

function renderCatalogo() {
    const lista   = listaFiltrada();
    const mostrar = lista.slice(0, visibles);

    if (mostrar.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No se encontraron productos</h3>
                <p>Prueba con otro término o ajusta los filtros.</p>
            </div>`;
    } else {
        grid.innerHTML = mostrar.map(p => {
            const respaldo = svgRespaldo(p.emoji);
            const code   = p.file.split(' ').slice(0, 2).join(' ');
            const nombre = p.file.split(' ').slice(2).join(' ');
            const fav    = esFavorito(p.file);
            return `
            <div class="product-card" data-category="${p.cat}">
                <div class="product-img">
                    <img src="${imagenProducto(p)}"
                         alt="${nombre}"
                         loading="lazy"
                         onerror="this.onerror=null;this.src='${respaldo}';" />
                    ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
                    <button class="wish-toggle ${fav ? 'active' : ''}"
                            data-file="${p.file}"
                            aria-label="Añadir a favoritos">
                        <i class="${fav ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-body">
                    <h4>${nombre}</h4>
                    <div class="category">${CATEGORIAS[p.cat]} · ${code}</div>
                    <div class="price">${formatoPrecio(p.precio)}</div>
                    <button class="btn-primary btn-sm add-to-cart" data-file="${p.file}">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>`;
        }).join('');
    }

    counter.innerHTML = `Mostrando <strong>${mostrar.length}</strong> de <strong>${lista.length}</strong> productos`;
    moreWrap.classList.toggle('is-hidden', visibles >= lista.length || mostrar.length === 0);
}

grid.addEventListener('click', e => {
    const addBtn = e.target.closest('.add-to-cart');
    if (addBtn) {
        agregarAlCarrito(addBtn.dataset.file);
        return;
    }
    const wishBtn = e.target.closest('.wish-toggle');
    if (wishBtn) {
        toggleFavorito(wishBtn.dataset.file);
    }
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtroActual = btn.dataset.filter;
        visibles = PASO;
        renderCatalogo();
    });
});

searchInput?.addEventListener('input', e => {
    busqueda = e.target.value;
    visibles = PASO;
    searchBox.classList.toggle('has-value', busqueda.length > 0);
    renderCatalogo();
});
searchClear?.addEventListener('click', () => {
    searchInput.value = '';
    busqueda = '';
    visibles = PASO;
    searchBox.classList.remove('has-value');
    searchInput.focus();
    renderCatalogo();
});

sortSelect?.addEventListener('change', e => {
    ordenActual = e.target.value;
    visibles = PASO;
    renderCatalogo();
});
tipoSelect?.addEventListener('change', e => {
    tipoActual = e.target.value;
    visibles = PASO;
    renderCatalogo();
});
priceRange?.addEventListener('input', e => {
    precioMax = +e.target.value;
    if (priceLabel) {
        priceLabel.textContent = precioMax >= 100
            ? 'Sin límite'
            : `Hasta S/ ${precioMax.toFixed(2)}`;
    }
    visibles = PASO;
    renderCatalogo();
});

loadMoreBtn?.addEventListener('click', () => {
    visibles += PASO;
    renderCatalogo();
});

/* =========================================================
   10. MODALES GENERALES
   ========================================================= */
const modalOverlays = document.querySelectorAll('.modal-overlay');

function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function cerrarModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    if (!document.querySelector('.modal-overlay.open')) {
        document.body.style.overflow = '';
    }
    // Limpiar selecciones de servicios SOLO si es modal de servicios
    if (modal.id === 'modalTerapias' || modal.id === 'modalPodologia') {
        modal.querySelectorAll('.service-detail.selected').forEach(el => {
            el.classList.remove('selected');
            el.setAttribute('aria-checked', 'false');
        });
        actualizarResumen(modal);
    }
}

document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => abrirModal(btn.dataset.modal));
});

modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay || e.target.closest('[data-close]')) {
            cerrarModal(overlay);
        }
    });
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open')
                .forEach(m => cerrarModal(m));
    }
});

/* =========================================================
   11. SELECCIÓN DE SERVICIOS → RESERVA
   ========================================================= */
const SERVICIOS_RESERVA = {
    'Terapias': [
        'Masaje descontracturante',
        'Masaje con piedras calientes',
        'Acupuntura',
        'Quiropraxia',
        'Reiki y terapias energéticas',
        'Reflexología podal'
    ],
    'Podología': [
        'Tratamiento de callosidades',
        'Uñas encarnadas',
        'Podología deportiva',
        'Estudio de la pisada',
        'Quiropodia',
        'Hongos (onicomicosis)'
    ],
    'Consulta Ortopédica': [
        'Evaluación postural',
        'Recomendación de soportes',
        'Seguimiento de recuperación'
    ]
};

const HORARIOS = ['09:00','10:00','11:00','12:00','15:00','16:00','17:00','18:00','19:00'];

let reservaCategoria     = '';
let reservaServiciosTemp = [];

const reservaTipo     = document.getElementById('reservaTipo');
const reservaServicio = document.getElementById('reservaServicio');
const reservaFecha    = document.getElementById('reservaFecha');
const reservaHora     = document.getElementById('reservaHora');
const reservaNombre   = document.getElementById('reservaNombre');
const reservaTelefono = document.getElementById('reservaTelefono');
const reservaNotas    = document.getElementById('reservaNotas');
const reservaConfirm  = document.getElementById('reservaConfirm');
const reservaInfo     = document.querySelector('[data-reserva-info] span');
const reservaPreview  = document.getElementById('reservaServiciosPreview');
const reservaChips    = document.getElementById('rspChips');
const reservaCantidad = document.getElementById('rspCantidad');
const reservaClearBtn = document.getElementById('reservaClearServicios');
const reservaCampos   = document.getElementById('reservaCamposManuales');
const reservaSub      = document.getElementById('reservaSubtitulo');

if (reservaFecha) {
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    reservaFecha.min = `${yyyy}-${mm}-${dd}`;
}

/* Actualizar resumen de selección en modales de servicios */
function actualizarResumen(modal) {
    const seleccionados = modal.querySelectorAll('.service-detail.selected');
    const infoBox       = modal.querySelector('[data-selected-info]');
    const btnReservar   = modal.querySelector('[data-reservar]');
    if (!infoBox) return;
    const span = infoBox.querySelector('span');

    if (seleccionados.length === 0) {
        infoBox.classList.remove('active');
        span.textContent = 'Ningún servicio seleccionado';
        if (btnReservar) {
            btnReservar.disabled = true;
            btnReservar.style.opacity = '0.5';
            btnReservar.style.pointerEvents = 'none';
        }
    } else {
        infoBox.classList.add('active');
        span.textContent = seleccionados.length === 1
            ? '1 servicio seleccionado'
            : `${seleccionados.length} servicios seleccionados`;
        if (btnReservar) {
            btnReservar.disabled = false;
            btnReservar.style.opacity = '1';
            btnReservar.style.pointerEvents = 'auto';
        }
    }
}

document.querySelectorAll('.service-detail').forEach(card => {
    const toggle = () => {
        card.classList.toggle('selected');
        card.setAttribute('aria-checked',
            card.classList.contains('selected') ? 'true' : 'false');
        actualizarResumen(card.closest('.modal-overlay'));
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });
});

modalOverlays.forEach(modal => actualizarResumen(modal));

/* Reservar selección → abre modal de reserva con servicios precargados */
document.querySelectorAll('[data-reservar]').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        const grupo = modal.querySelector('[data-service-group]');
        const categoria = grupo?.dataset.serviceGroup || 'Servicios';
        const seleccionados = [...modal.querySelectorAll('.service-detail.selected')]
                                .map(el => el.dataset.service);

        if (seleccionados.length === 0) {
            mostrarToast('Selecciona al menos un servicio', true);
            return;
        }

        // Guardar temporalmente
        reservaCategoria     = categoria;
        reservaServiciosTemp = seleccionados;

        // Cerrar modal de servicios y abrir la de reserva
        cerrarModal(modal);
        abrirModal('modalReserva');

        // Rellenar panel + formulario
        pintarServiciosReserva();
    });
});

/* Pintar chips con los servicios preseleccionados */
function pintarServiciosReserva() {
    if (!reservaPreview) return;

    if (reservaServiciosTemp.length === 0) {
        reservaPreview.hidden = true;
        if (reservaCampos) reservaCampos.style.display = '';
        if (reservaSub) reservaSub.textContent = 'Elige servicio, fecha y hora disponible';
        return;
    }

    reservaPreview.hidden = false;
    if (reservaCampos) reservaCampos.style.display = 'none';
    if (reservaSub) {
        reservaSub.textContent = `${reservaCategoria} · elige fecha y hora`;
    }

    reservaCantidad.textContent = reservaServiciosTemp.length;

    reservaChips.innerHTML = reservaServiciosTemp.map((s, i) => `
        <span class="rsp-chip">
            <i class="fas fa-check"></i>
            ${s}
            <button type="button" data-idx="${i}" aria-label="Quitar ${s}">
                <i class="fas fa-times"></i>
            </button>
        </span>
    `).join('');

    reservaChips.querySelectorAll('button[data-idx]').forEach(b => {
        b.addEventListener('click', () => {
            const idx = +b.dataset.idx;
            reservaServiciosTemp.splice(idx, 1);
            pintarServiciosReserva();
            actualizarResumenReserva();
        });
    });

    actualizarResumenReserva();
}

/* Botón "quitar todos" */
reservaClearBtn?.addEventListener('click', () => {
    reservaServiciosTemp = [];
    reservaCategoria = '';
    pintarServiciosReserva();
    actualizarResumenReserva();
});

/* Servicios manuales */
function llenarServicios() {
    if (!reservaServicio) return;
    const tipo = reservaTipo.value;
    reservaServicio.innerHTML = '<option value="">Selecciona...</option>';
    if (!tipo || !SERVICIOS_RESERVA[tipo]) return;
    SERVICIOS_RESERVA[tipo].forEach(s => {
        const opt = document.createElement('option');
        opt.value = s; opt.textContent = s;
        reservaServicio.appendChild(opt);
    });
}

function llenarHorarios() {
    if (!reservaHora) return;
    reservaHora.innerHTML = '<option value="">Selecciona hora</option>';
    if (!reservaFecha.value) return;
    const fecha = new Date(reservaFecha.value + 'T00:00:00');
    const dia = fecha.getDay();
    if (dia === 0) {
        reservaHora.innerHTML = '<option value="">Domingo cerrado</option>';
        return;
    }
    const horasDisponibles = dia === 6
        ? HORARIOS.filter(h => parseInt(h) < 14)
        : HORARIOS;
    horasDisponibles.forEach(h => {
        const opt = document.createElement('option');
        opt.value = h; opt.textContent = h;
        reservaHora.appendChild(opt);
    });
}

function actualizarResumenReserva() {
    if (!reservaInfo) return;
    const fecha = reservaFecha?.value;
    const hora  = reservaHora?.value;

    const hayServicios = reservaServiciosTemp.length > 0
                      || (reservaTipo?.value && reservaServicio?.value);

    if (!hayServicios || !fecha || !hora) {
        reservaInfo.textContent = 'Completa el formulario para continuar';
        return;
    }

    const partes = fecha.split('-');
    const fechaFmt = `${partes[2]}/${partes[1]}/${partes[0]}`;
    const titulo = reservaServiciosTemp.length > 0
        ? `${reservaServiciosTemp.length} servicio(s)`
        : reservaServicio.value;
    reservaInfo.textContent = `${titulo} · ${fechaFmt} · ${hora}`;
}

reservaTipo?.addEventListener('change', () => { llenarServicios(); actualizarResumenReserva(); });
reservaServicio?.addEventListener('change', actualizarResumenReserva);
reservaFecha?.addEventListener('change', () => { llenarHorarios(); actualizarResumenReserva(); });
reservaHora?.addEventListener('change', actualizarResumenReserva);

reservaConfirm?.addEventListener('click', () => {
    const fecha    = reservaFecha?.value;
    const hora     = reservaHora?.value;
    const nombre   = reservaNombre?.value.trim();
    const telefono = reservaTelefono?.value.trim();
    const notas    = reservaNotas?.value.trim();

    const servicios = reservaServiciosTemp.length > 0
        ? [...reservaServiciosTemp]
        : (reservaTipo?.value && reservaServicio?.value
            ? [reservaServicio.value]
            : []);
    const categoria = reservaCategoria
        || reservaTipo?.value
        || 'Servicios';

    if (servicios.length === 0) {
        mostrarToast('Selecciona al menos un servicio', true);
        return;
    }
    if (!fecha || !hora || !nombre || !telefono) {
        mostrarToast('Completa todos los campos obligatorios', true);
        return;
    }

    const partes = fecha.split('-');
    const fechaFmt = `${partes[2]}/${partes[1]}/${partes[0]}`;

    let msg = `Hola Boran´s 👋, quiero reservar una cita:\n\n`;
    msg += `🗂️ *Categoría:* ${categoria}\n`;
    msg += `📋 *Servicios:*\n`;
    servicios.forEach(s => { msg += `   • ${s}\n`; });
    msg += `📅 *Fecha:* ${fechaFmt}\n`;
    msg += `⏰ *Hora:* ${hora}\n`;
    msg += `👤 *Nombre:* ${nombre}\n`;
    msg += `📞 *Teléfono:* ${telefono}\n`;
    if (notas) msg += `📝 *Notas:* ${notas}\n`;
    msg += `\n¿Me confirman la disponibilidad? ¡Gracias!`;

    window.open('https://wa.me/51910475191?text=' + encodeURIComponent(msg), '_blank');

    document.getElementById('reservaForm')?.reset();
    if (reservaServicio) reservaServicio.innerHTML = '<option value="">Primero elige un tipo</option>';
    if (reservaHora)     reservaHora.innerHTML     = '<option value="">Elige fecha primero</option>';
    reservaServiciosTemp = [];
    reservaCategoria     = '';
    pintarServiciosReserva();
    actualizarResumenReserva();
    cerrarModal(document.getElementById('modalReserva'));
    mostrarToast('✓ Reserva enviada por WhatsApp');
});

/* =========================================================
   12. HAMBURGER MENU
   ========================================================= */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('open');
    });
});

/* =========================================================
   13. HEADER SCROLL + BOTÓN VOLVER ARRIBA
   ========================================================= */
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 20);
    backToTop?.classList.toggle('visible', y > 500);
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   14. NAVEGACIÓN SUAVE
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            const top = targetEl.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

/* =========================================================
   15. ENLACE ACTIVO SEGÚN SCROLL
   ========================================================= */
const sections    = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

/* =========================================================
   16. FORMULARIO DE CONTACTO
   ========================================================= */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

/* =========================================================
   17. INICIALIZACIÓN
   ========================================================= */
cargarTema();
cargarCarrito();
cargarFavoritos();
poblarTipos();
renderCarrito();
actualizarContadorCarrito();
actualizarContadorWishlist();
renderWishlist();
renderCatalogo();
actualizarResumenReserva();

console.log('Boran´s · ' + PRODUCTOS.length + ' productos · Reservas, filtros, wishlist, modo oscuro y UX activos');
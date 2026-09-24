/**
 * CARDÁPIO DIGITAL - CHEF ALEXANDRA (EQUIPE DA COZINHA CAMPAL)
 * Refeições por Dia, Filtros, Carrinho, Pix e WhatsApp
 *
 * REGRA DE NEGÓCIO (definida pela Chef Alexandra e por Jéssica):
 * - São 7 refeições no total, da quinta-feira à noite até o sábado à noite.
 * - Cada refeição tem VALOR ÚNICO E FECHADO (não existe valor por item avulso).
 *   Café da Manhã: R$ 25,00 | Almoço: R$ 33,00 | Café da Noite: R$ 25,00
 * - Sucos, bolos e frutas JÁ ESTÃO INCLUSOS no valor da refeição.
 * - O pedido é identificado por DIA + REFEIÇÃO, para a cozinha saber
 *   exatamente quais refeições cada cliente reservou.
 */

// =============================================================================
// 1. TABELA DE PREÇOS FIXOS POR TIPO DE REFEIÇÃO
// =============================================================================
const MEAL_PRICES = {
  'cafe-manha': 25.00,
  'almoco': 33.00,
  'cafe-noite': 25.00
};

const MEAL_LABELS = {
  'cafe-manha': { name: 'Café da Manhã', icon: '☀️' },
  'almoco': { name: 'Almoço', icon: '🍲' },
  'cafe-noite': { name: 'Café da Noite', icon: '🌙' }
};

const DAY_LABELS = {
  'quinta': { name: 'Quinta-feira', short: 'Quinta' },
  'sexta': { name: 'Sexta-feira', short: 'Sexta' },
  'sabado': { name: 'Sábado', short: 'Sábado' }
};

const DAY_ORDER = ['quinta', 'sexta', 'sabado'];

// =============================================================================
// 2. GRUPOS DE ESCOLHA REUTILIZÁVEIS (TUDO INCLUSO NO VALOR DA REFEIÇÃO)
// =============================================================================
const CHOICE_ALMOCO_PRATO = {
  id: 'prato_principal',
  title: 'Escolha o Prato Principal (já incluso no valor)',
  icon: '🍛',
  singleChoice: true,
  options: [
    { id: 'parmegiana', label: 'Bife à Parmegiana Especial', default: true },
    { id: 'frango_assado', label: 'Frango Assado Douradinho da Casa', default: false },
    { id: 'fricasse_frango', label: 'Fricassê Cremoso de Frango', default: false },
    { id: 'fricasse_veg', label: 'Fricassê Especial Vegetariano 🌱', default: false, isVegetarian: true }
  ]
};

const CHOICE_ALMOCO_ACOMPANHA = {
  id: 'acompanhamentos',
  title: 'Acompanhamentos inclusos na marmita',
  icon: '🍚',
  singleChoice: false,
  options: [
    { id: 'arroz', label: 'Arroz branco soltinho', default: true },
    { id: 'feijao', label: 'Feijão caseiro temperado', default: true },
    { id: 'macarrao', label: 'Macarrão ao molho de tomate', default: true },
    { id: 'salada_cozida', label: 'Salada cozida (cenoura, chuchu e vagem)', default: true },
    { id: 'salada_crua', label: 'Salada crua (alface, tomate e cebola)', default: true },
    { id: 'farofa', label: 'Farofa crocante de banana da terra', default: true }
  ]
};

const CHOICE_MANHA_PRATO = {
  id: 'prato_principal',
  title: 'Escolha o Prato Principal (já incluso no valor)',
  icon: '🍽️',
  singleChoice: true,
  options: [
    { id: 'cuscuz', label: 'Cuscuz Nordestino Temperado com Ovos 🌱', default: true, isVegetarian: true },
    { id: 'batata_doce', label: 'Batata Doce Cozida Nutritiva 🌱', default: false, isVegetarian: true },
    { id: 'pao_ovo', label: 'Pão Francês com Ovos Mexidos Cremosos 🌱', default: false, isVegetarian: true },
    { id: 'sanduiche', label: 'Mini Sanduíches Naturais com Patê', default: false },
    { id: 'mingau', label: 'Mingau Cremoso de Milho Verde 🌱', default: false, isVegetarian: true }
  ]
};

const CHOICE_NOITE_PRATO = {
  id: 'prato_principal',
  title: 'Escolha o Prato Principal (já incluso no valor)',
  icon: '🍲',
  singleChoice: true,
  options: [
    { id: 'caldo_mandioca', label: 'Caldo de Mandioca com Frango', default: true },
    { id: 'caldo_abobora', label: 'Caldo Nutritivo de Abóbora com Frango', default: false },
    { id: 'hamburguer', label: 'Hambúrguer Artesanal Completo', default: false },
    { id: 'pao_pate', label: 'Pão Francês com Patê Caseiro da Chef', default: false }
  ]
};

const CHOICE_SUCO = {
  id: 'suco',
  title: 'Escolha o Suco Natural (incluso, sem custo extra)',
  icon: '🥤',
  singleChoice: true,
  options: [
    { id: 'suco_goiaba_cacau', label: 'Suco de Goiaba com Cacau (Especial do Sul da Bahia)', default: true },
    { id: 'suco_caja', label: 'Suco Natural de Cajá', default: false },
    { id: 'suco_acerola', label: 'Suco Natural de Acerola', default: false },
    { id: 'suco_goiaba', label: 'Suco Natural de Goiaba', default: false },
    { id: 'suco_cupuacu', label: 'Suco Natural de Cupuaçu Cremoso', default: false }
  ]
};

const CHOICE_SOBREMESA = {
  id: 'sobremesa',
  title: 'Escolha o Bolo ou a Fruta (incluso, sem custo extra)',
  icon: '🍰',
  singleChoice: true,
  options: [
    { id: 'bolo_chocolate', label: 'Bolo de Chocolate Cremoso', default: true },
    { id: 'bolo_milho', label: 'Bolo de Milho Tradicional', default: false },
    { id: 'bolo_banana', label: 'Bolo de Banana com Canela', default: false },
    { id: 'bolo_abacaxi', label: 'Bolo de Abacaxi Caramelizado', default: false },
    { id: 'bolo_coco', label: 'Bolo Gelado de Coco Cremoso', default: false },
    { id: 'melancia', label: 'Porção de Melancia Doce em Fatias', default: false }
  ]
};

// =============================================================================
// 3. AS 7 REFEIÇÕES DA CAMPAL (QUINTA À NOITE ATÉ SÁBADO À NOITE)
// =============================================================================
function buildMeal(day, mealKey, config) {
  const mealInfo = MEAL_LABELS[mealKey];
  const dayInfo = DAY_LABELS[day];
  return {
    id: day + '-' + mealKey,
    day: day,
    dayName: dayInfo.name,
    dayShort: dayInfo.short,
    mealKey: mealKey,
    mealName: mealInfo.name,
    mealIcon: mealInfo.icon,
    name: mealInfo.name + ' de ' + dayInfo.name,
    price: MEAL_PRICES[mealKey],
    order: config.order,
    tag: config.tag,
    isPopular: config.isPopular || false,
    image: config.image,
    description: config.description,
    includedSummary: config.includedSummary,
    choiceGroups: config.choiceGroups
  };
}

const MENU_DATA = [
  // ---------- 1a REFEICAO: QUINTA-FEIRA A NOITE ----------
  buildMeal('quinta', 'cafe-noite', {
    order: 1,
    tag: 'Abertura da Campal',
    isPopular: true,
    image: 'assets/dishes/caldo-mandioca.jpg',
    description: 'A refeição que abre a nossa Campal! Caldo quentinho e reconfortante, pão fresquinho e suco natural para começar o encontro com o pé direito.',
    includedSummary: 'Prato principal à sua escolha + pão com patê + suco natural + sobremesa. Tudo incluso no valor.',
    choiceGroups: [CHOICE_NOITE_PRATO, CHOICE_SUCO, CHOICE_SOBREMESA]
  }),

  // ---------- 2a, 3a e 4a REFEICOES: SEXTA-FEIRA ----------
  buildMeal('sexta', 'cafe-manha', {
    order: 2,
    tag: 'Energia para o Dia',
    isPopular: true,
    image: 'assets/dishes/cuscuz-temperado.jpg',
    description: 'Café da manhã completo e caprichado para começar a sexta-feira com energia de sobra: prato principal quentinho, suco natural e bolo caseiro.',
    includedSummary: 'Prato principal à sua escolha + suco natural + bolo ou fruta. Tudo incluso no valor.',
    choiceGroups: [CHOICE_MANHA_PRATO, CHOICE_SUCO, CHOICE_SOBREMESA]
  }),
  buildMeal('sexta', 'almoco', {
    order: 3,
    tag: 'Mais Pedido',
    isPopular: true,
    image: 'assets/dishes/bife-parmegiana.jpg',
    description: 'Almoço completo da Chef Alexandra: prato principal à sua escolha com todos os acompanhamentos, suco natural e sobremesa inclusos.',
    includedSummary: 'Prato principal + arroz, feijão, macarrão, saladas e farofa + suco natural + sobremesa. Tudo incluso.',
    choiceGroups: [CHOICE_ALMOCO_PRATO, CHOICE_ALMOCO_ACOMPANHA, CHOICE_SUCO, CHOICE_SOBREMESA]
  }),
  buildMeal('sexta', 'cafe-noite', {
    order: 4,
    tag: 'Aquecer a Noite',
    isPopular: false,
    image: 'assets/dishes/caldo-abobora.jpg',
    description: 'Café da noite de sexta para encerrar o dia com aconchego: caldo cremoso ou lanche artesanal, acompanhado de suco natural gelado.',
    includedSummary: 'Prato principal à sua escolha + pão com patê + suco natural + sobremesa. Tudo incluso no valor.',
    choiceGroups: [CHOICE_NOITE_PRATO, CHOICE_SUCO, CHOICE_SOBREMESA]
  }),

  // ---------- 5a, 6a e 7a REFEICOES: SABADO ----------
  buildMeal('sabado', 'cafe-manha', {
    order: 5,
    tag: 'Bom Dia Caprichado',
    isPopular: false,
    image: 'assets/dishes/pao-ovo.jpg',
    description: 'Café da manhã de sábado servido com todo carinho: pratos quentinhos, sucos naturais da fruta e bolos caseiros feitos na hora.',
    includedSummary: 'Prato principal à sua escolha + suco natural + bolo ou fruta. Tudo incluso no valor.',
    choiceGroups: [CHOICE_MANHA_PRATO, CHOICE_SUCO, CHOICE_SOBREMESA]
  }),
  buildMeal('sabado', 'almoco', {
    order: 6,
    tag: 'Almoço Especial',
    isPopular: true,
    image: 'assets/dishes/frango-assado.jpg',
    description: 'O almoço mais aguardado do sábado! Prato principal à sua escolha com acompanhamentos fartos, suco natural e sobremesa inclusos.',
    includedSummary: 'Prato principal + arroz, feijão, macarrão, saladas e farofa + suco natural + sobremesa. Tudo incluso.',
    choiceGroups: [CHOICE_ALMOCO_PRATO, CHOICE_ALMOCO_ACOMPANHA, CHOICE_SUCO, CHOICE_SOBREMESA]
  }),
  buildMeal('sabado', 'cafe-noite', {
    order: 7,
    tag: 'Encerramento',
    isPopular: false,
    image: 'assets/dishes/hamburguer.jpg',
    description: 'A última refeição da nossa Campal, preparada com muito amor para fechar o encontro com chave de ouro e o coração cheio.',
    includedSummary: 'Prato principal à sua escolha + pão com patê + suco natural + sobremesa. Tudo incluso no valor.',
    choiceGroups: [CHOICE_NOITE_PRATO, CHOICE_SUCO, CHOICE_SOBREMESA]
  })
];

// Flyers Originais para Visualização
const FLYERS_DATA = [
  { title: 'Almoço: Bife à Parmegiana & Saladas', file: 'assets/flyers/flyer-almoco-parmegiana.jpg' },
  { title: 'Almoço: Frango Assado & Farofa de Banana', file: 'assets/flyers/flyer-almoco-frango.jpg' },
  { title: 'Almoço: Fricassê de Frango & Vegetariano', file: 'assets/flyers/flyer-almoco-fricasse.jpg' },
  { title: 'Café da Manhã: Cuscuz Temperado', file: 'assets/flyers/flyer-cafe-manha-cuscuz.jpg' },
  { title: 'Café da Manhã: Batata Doce Nutritiva', file: 'assets/flyers/flyer-cafe-manha-batata-doce.jpg' },
  { title: 'Café da Manhã: Banana & Acompanhamentos', file: 'assets/flyers/flyer-cafe-manha-banana.jpg' },
  { title: 'Café da Noite: Caldo de Mandioca', file: 'assets/flyers/flyer-cafe-noite-mandioca.jpg' },
  { title: 'Café da Noite: Caldo de Abóbora', file: 'assets/flyers/flyer-cafe-noite-abobora.jpg' },
  { title: 'Café da Noite: Hambúrguer Artesanal', file: 'assets/flyers/flyer-cafe-noite-hamburguer.jpg' }
];

// =============================================================================
// 4. ESTADO DO CARRINHO, FILTROS E SELEÇÃO ATUAL
// =============================================================================
let cart = [];
let currentDishCustomizing = null;
let currentCustomQty = 1;
let qrCodeInstance = null;

// Estados de Filtros Rápidos ('all' | tipo de refeição | dia)
let currentQuickFilter = 'all';
let currentSearchQuery = '';

// =============================================================================
// 5. INICIALIZAÇÃO DA INTERFACE
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderDishesGrid();
  renderFlyersModalGrid();
  setupQuickFiltersAndSearch();
  setupCategoryNav();
  setupCartBar();
  setupReceiptUpload();
  updateCartUI();
  updateFilterPillCounts();
});

// Atualizar contadores visuais nas tags de filtro
function updateFilterPillCounts() {
  const counts = {
    all: MENU_DATA.length,
    'cafe-manha': MENU_DATA.filter(m => m.mealKey === 'cafe-manha').length,
    'almoco': MENU_DATA.filter(m => m.mealKey === 'almoco').length,
    'cafe-noite': MENU_DATA.filter(m => m.mealKey === 'cafe-noite').length,
    'quinta': MENU_DATA.filter(m => m.day === 'quinta').length,
    'sexta': MENU_DATA.filter(m => m.day === 'sexta').length,
    'sabado': MENU_DATA.filter(m => m.day === 'sabado').length
  };

  document.querySelectorAll('.filter-pill-btn').forEach(btn => {
    const filterType = btn.getAttribute('data-filter');
    if (counts[filterType] !== undefined) {
      let countBadge = btn.querySelector('.pill-count');
      if (!countBadge) {
        countBadge = document.createElement('span');
        countBadge.className = 'pill-count';
        btn.appendChild(countBadge);
      }
      countBadge.textContent = counts[filterType];
    }
  });
}

// Configurar Tags de Filtro Rápido e Barra de Pesquisa
function setupQuickFiltersAndSearch() {
  const pillButtons = document.querySelectorAll('.filter-pill-btn');
  const searchInput = document.getElementById('menuSearchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const btnResetFilter = document.getElementById('btnResetFilter');

  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pillButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentQuickFilter = btn.getAttribute('data-filter');
      renderDishesGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (btnClearSearch) {
        btnClearSearch.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
      }
      renderDishesGrid();
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      currentSearchQuery = '';
      btnClearSearch.style.display = 'none';
      renderDishesGrid();
    });
  }

  if (btnResetFilter) {
    btnResetFilter.addEventListener('click', () => {
      currentQuickFilter = 'all';
      currentSearchQuery = '';
      if (searchInput) searchInput.value = '';
      if (btnClearSearch) btnClearSearch.style.display = 'none';
      pillButtons.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
      });
      renderDishesGrid();
    });
  }
}

// Texto legível do filtro ativo
function getActiveFilterLabel() {
  if (MEAL_LABELS[currentQuickFilter]) {
    return MEAL_LABELS[currentQuickFilter].icon + ' ' + MEAL_LABELS[currentQuickFilter].name;
  }
  if (DAY_LABELS[currentQuickFilter]) {
    return '📅 ' + DAY_LABELS[currentQuickFilter].name;
  }
  return '';
}

// Verifica se uma refeição casa com o texto buscado (inclui itens inclusos)
function mealMatchesSearch(meal, query) {
  if (!query) return true;
  const haystack = [
    meal.name, meal.dayName, meal.mealName, meal.description,
    meal.includedSummary, meal.tag
  ];
  meal.choiceGroups.forEach(group => {
    haystack.push(group.title);
    group.options.forEach(opt => haystack.push(opt.label));
  });
  return haystack.join(' ').toLowerCase().includes(query);
}

// Renderizar as refeições agrupadas por DIA, com suporte a filtros e busca
function renderDishesGrid() {
  const container = document.getElementById('menuSectionsContainer');
  const filterNotice = document.getElementById('filterResultNotice');
  const filterText = document.getElementById('filterResultText');
  if (!container) return;

  const filteredData = MENU_DATA.filter(meal => {
    let passFilter = true;
    if (currentQuickFilter !== 'all') {
      if (MEAL_LABELS[currentQuickFilter]) passFilter = meal.mealKey === currentQuickFilter;
      else if (DAY_LABELS[currentQuickFilter]) passFilter = meal.day === currentQuickFilter;
    }
    if (!passFilter) return false;
    return mealMatchesSearch(meal, currentSearchQuery);
  });

  const isFiltering = currentQuickFilter !== 'all' || currentSearchQuery.length > 0;
  if (filterNotice && filterText) {
    if (isFiltering) {
      filterNotice.style.display = 'flex';
      const label = getActiveFilterLabel();
      const searchPart = currentSearchQuery ? ' contendo "' + currentSearchQuery + '"' : '';
      const plural = filteredData.length === 1 ? 'refeição' : 'refeições';
      filterText.textContent = 'Exibindo ' + filteredData.length + ' ' + plural +
        (label ? ' em ' + label : '') + searchPart;
    } else {
      filterNotice.style.display = 'none';
    }
  }

  if (filteredData.length === 0) {
    container.innerHTML =
      '<div class="filter-no-results">' +
        '<div class="filter-no-results-icon">🔍</div>' +
        '<h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 8px;">Nenhuma refeição encontrada</h3>' +
        '<p style="font-size: 0.95rem; margin-bottom: 18px;">Não encontramos nenhuma refeição com os filtros selecionados.</p>' +
        '<button type="button" class="btn-reset-filter" onclick="document.getElementById(\'btnResetFilter\').click()" style="padding: 10px 24px; font-size: 0.9rem;">' +
          'Ver Todas as 7 Refeições' +
        '</button>' +
      '</div>';
    return;
  }

  container.innerHTML = DAY_ORDER.map(dayKey => {
    const mealsOfDay = filteredData.filter(m => m.day === dayKey).sort((a, b) => a.order - b.order);
    if (mealsOfDay.length === 0) return '';
    const dayInfo = DAY_LABELS[dayKey];
    const plural = mealsOfDay.length === 1 ? 'refeição' : 'refeições';

    return '' +
      '<section id="' + dayKey + '" class="category-section">' +
        '<div class="category-header-wrap">' +
          '<h2 class="category-title">📅 ' + dayInfo.name + '</h2>' +
          '<span class="category-badge-price">' + mealsOfDay.length + ' ' + plural + '</span>' +
        '</div>' +
        '<div class="dishes-grid">' +
          mealsOfDay.map(meal => renderDishCardHTML(meal)).join('') +
        '</div>' +
      '</section>';
  }).join('');
}

function renderDishCardHTML(meal) {
  const formattedPrice = meal.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const starBadge = meal.isPopular ? '<span style="color: #f59e0b; margin-left: 4px;" title="Destaque / Mais Pedido">⭐</span>' : '';

  return '' +
    '<article class="dish-card" data-id="' + meal.id + '">' +
      '<div class="dish-card-media" onclick="openDishCustomizer(\'' + meal.id + '\')" style="cursor: pointer;">' +
        '<img src="' + meal.image + '" alt="' + meal.name + '" class="dish-img" loading="lazy" />' +
        '<span class="dish-badge-tag">' + meal.tag + '</span>' +
        '<span class="dish-badge-meal">' + meal.mealIcon + ' ' + meal.mealName + '</span>' +
      '</div>' +
      '<div class="dish-card-body">' +
        '<span class="dish-day-label">' + meal.dayName + ' • Refeição ' + meal.order + ' de 7</span>' +
        '<h3 class="dish-name" onclick="openDishCustomizer(\'' + meal.id + '\')" style="cursor: pointer;">' +
          meal.name + ' ' + starBadge +
        '</h3>' +
        '<p class="dish-desc">' + meal.description + '</p>' +
        '<div class="dish-sides-preview"><strong>Já incluso:</strong> ' + meal.includedSummary + '</div>' +
        '<div class="dish-card-footer">' +
          '<div class="dish-price-wrap">' +
            '<span class="dish-price-prefix">Valor único da refeição</span>' +
            '<span class="dish-price-value">' + formattedPrice + '</span>' +
          '</div>' +
          '<button class="btn-add-dish" onclick="openDishCustomizer(\'' + meal.id + '\')" title="Reservar esta refeição">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
              '<line x1="12" y1="5" x2="12" y2="19"></line>' +
              '<line x1="5" y1="12" x2="19" y2="12"></line>' +
            '</svg>' +
            'Reservar' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</article>';
}

// Configurar navegação entre abas de dias
function setupCategoryNav() {
  const tabs = document.querySelectorAll('.cat-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      if (targetId === 'flyers-modal') {
        openFlyersModal();
        return;
      }

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Limpar filtros ativos para garantir que o dia alvo seja exibido
      if (currentQuickFilter !== 'all' || currentSearchQuery) {
        currentQuickFilter = 'all';
        currentSearchQuery = '';
        const searchInput = document.getElementById('menuSearchInput');
        if (searchInput) searchInput.value = '';
        const btnClear = document.getElementById('btnClearSearch');
        if (btnClear) btnClear.style.display = 'none';
        document.querySelectorAll('.filter-pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
        });
        renderDishesGrid();
      }

      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// =============================================================================
// 6. MODAL DE RESERVA DA REFEIÇÃO (ESCOLHAS INCLUSAS NO VALOR)
// =============================================================================
function openDishCustomizer(mealId) {
  const meal = MENU_DATA.find(m => m.id === mealId);
  if (!meal) return;

  currentDishCustomizing = meal;
  currentCustomQty = 1;

  document.getElementById('customModalDishTitle').textContent = meal.name;
  document.getElementById('customModalDishImg').src = meal.image;
  document.getElementById('customModalDishDesc').textContent = meal.description;
  document.getElementById('customModalDishPrice').textContent =
    meal.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById('customQtyDisplay').textContent = currentCustomQty;
  document.getElementById('dishNotesInput').value = '';

  // Renderizar TODOS os grupos de escolha (prato, suco, sobremesa, acompanhamentos)
  const optionsContainer = document.getElementById('customModalOptionsList');
  const priceNote =
    '<div class="meal-price-note">' +
      '<strong>' + meal.mealIcon + ' ' + meal.name + '</strong> — valor único de ' +
      meal.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '. ' +
      'Todos os itens abaixo já estão inclusos, sem cobrança adicional.' +
    '</div>';

  optionsContainer.innerHTML = priceNote + meal.choiceGroups.map((group, groupIndex) => {
    const isRadio = group.singleChoice === true;
    const inputType = isRadio ? 'radio' : 'checkbox';
    const groupName = 'opt_group_' + meal.id + '_' + group.id;
    const hint = isRadio ? 'Escolha 1 opção' : 'Todos inclusos';

    return '' +
      '<div class="custom-options-group" data-group-id="' + group.id + '" data-group-title="' + group.title + '">' +
        '<h4 class="modal-section-title">' +
          '<span>' + group.icon + '</span> ' + group.title +
          '<span class="group-hint">' + hint + '</span>' +
        '</h4>' +
        group.options.map(opt =>
          '<label class="' + inputType + '-option-row">' +
            '<div class="option-left">' +
              '<input type="' + inputType + '" name="' + groupName + '" value="' + opt.label + '" ' +
                (opt.default ? 'checked' : '') + ' />' +
              '<span>' + opt.label + '</span>' +
            '</div>' +
            '<span style="font-size: 0.78rem; color: #326432; font-weight: 700;">Incluso</span>' +
          '</label>'
        ).join('') +
      '</div>';
  }).join('');

  optionsContainer.style.display = 'block';

  updateCustomModalButtonPrice();
  document.getElementById('dishCustomModal').classList.add('active');
}

function closeDishCustomModal() {
  document.getElementById('dishCustomModal').classList.remove('active');
  currentDishCustomizing = null;
}

function changeCustomQty(delta) {
  currentCustomQty = Math.max(1, currentCustomQty + delta);
  document.getElementById('customQtyDisplay').textContent = currentCustomQty;
  updateCustomModalButtonPrice();
}

function updateCustomModalButtonPrice() {
  if (!currentDishCustomizing) return;
  const total = currentDishCustomizing.price * currentCustomQty;
  const label = currentCustomQty === 1 ? 'Reservar 1 refeição' : 'Reservar ' + currentCustomQty + ' refeições';
  document.getElementById('btnConfirmAddDishText').textContent =
    label + ' • ' + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function confirmAddDishToCart() {
  if (!currentDishCustomizing) return;

  // Coletar as escolhas agrupadas (para a cozinha ver exatamente o que preparar)
  const selectedGroups = [];
  document.querySelectorAll('#customModalOptionsList .custom-options-group').forEach(groupEl => {
    const groupTitle = groupEl.getAttribute('data-group-title');
    const checked = Array.from(groupEl.querySelectorAll('input:checked')).map(i => i.value);
    if (checked.length > 0) {
      selectedGroups.push({ title: groupTitle, values: checked });
    }
  });

  const notes = document.getElementById('dishNotesInput').value.trim();

  const cartItem = {
    cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    mealId: currentDishCustomizing.id,
    day: currentDishCustomizing.day,
    dayName: currentDishCustomizing.dayName,
    mealKey: currentDishCustomizing.mealKey,
    mealName: currentDishCustomizing.mealName,
    mealIcon: currentDishCustomizing.mealIcon,
    order: currentDishCustomizing.order,
    name: currentDishCustomizing.name,
    image: currentDishCustomizing.image,
    unitPrice: currentDishCustomizing.price,
    quantity: currentCustomQty,
    selectedGroups: selectedGroups,
    notes: notes
  };

  cart.push(cartItem);
  updateCartUI();
  closeDishCustomModal();
  showToast('✅ "' + cartItem.name + '" reservado!');
}

// =============================================================================
// 7. GERENCIAMENTO DAS REFEIÇÕES RESERVADAS (CARRINHO)
// =============================================================================
function setupCartBar() {
  const bar = document.getElementById('floatingCartBar');
  if (bar) {
    bar.addEventListener('click', openCartModal);
  }
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const formattedPrice = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Barra flutuante
  const cartBar = document.getElementById('floatingCartBar');
  const countDisplay = document.getElementById('cartBarCount');
  const totalDisplay = document.getElementById('cartBarTotal');

  if (countDisplay) countDisplay.textContent = totalCount;
  if (totalDisplay) totalDisplay.textContent = formattedPrice;

  if (cartBar) {
    if (totalCount > 0) {
      cartBar.classList.add('visible');
    } else {
      cartBar.classList.remove('visible');
    }
  }

  // Se o modal do carrinho estiver aberto, atualizar a lista interna
  renderCartModalContent(totalPrice);
}

function renderCartModalContent(totalPrice) {
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotalAmount');
  const cartTotalEl = document.getElementById('cartTotalAmount');
  const emptyState = document.getElementById('cartEmptyState');
  const checkoutSection = document.getElementById('checkoutFormSection');
  const mealsCountEl = document.getElementById('cartMealsCount');

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (checkoutSection) checkoutSection.style.display = 'none';
    if (cartSubtotalEl) cartSubtotalEl.textContent = 'R$ 0,00';
    if (cartTotalEl) cartTotalEl.textContent = 'R$ 0,00';
    if (mealsCountEl) mealsCountEl.textContent = '0';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = 'block';

  const totalMeals = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (mealsCountEl) mealsCountEl.textContent = totalMeals;

  // Agrupar as refeições reservadas por DIA, para a cozinha distinguir os pedidos
  cartItemsList.innerHTML = DAY_ORDER.map(dayKey => {
    const itemsOfDay = cart.filter(i => i.day === dayKey).sort((a, b) => a.order - b.order);
    if (itemsOfDay.length === 0) return '';

    const dayTotal = itemsOfDay.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);

    return '' +
      '<div class="cart-day-group">' +
        '<div class="cart-day-header">' +
          '<span>📅 ' + DAY_LABELS[dayKey].name + '</span>' +
          '<span class="cart-day-total">' +
            dayTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
          '</span>' +
        '</div>' +
        itemsOfDay.map(item => renderCartItemHTML(item)).join('') +
      '</div>';
  }).join('');

  const formattedTotal = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  if (cartSubtotalEl) cartSubtotalEl.textContent = formattedTotal;
  if (cartTotalEl) cartTotalEl.textContent = formattedTotal;
  const pixTotalEl = document.getElementById('pixTotalValueDisplay');
  if (pixTotalEl) pixTotalEl.textContent = formattedTotal;
}

function renderCartItemHTML(item) {
  const itemTotal = (item.unitPrice * item.quantity)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const choicesHTML = (item.selectedGroups || []).map(group =>
    '<p class="cart-item-customizations">' +
      '<strong>' + group.title.replace(/\s*\(.*?\)\s*$/, '') + ':</strong> ' +
      group.values.join(', ') +
    '</p>'
  ).join('');

  return '' +
    '<div class="cart-item-card">' +
      '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-thumb" />' +
      '<div class="cart-item-details">' +
        '<h4 class="cart-item-name">' + item.quantity + 'x ' + item.mealIcon + ' ' + item.mealName + '</h4>' +
        '<span class="cart-item-day">' + item.dayName + '</span>' +
        choicesHTML +
        (item.notes
          ? '<p class="cart-item-customizations" style="color: #c47620; font-style: italic;">Obs: ' + item.notes + '</p>'
          : '') +
        '<span class="cart-item-price">' + itemTotal + '</span>' +
      '</div>' +
      '<div class="qty-stepper" style="transform: scale(0.85);">' +
        '<button class="btn-qty" onclick="changeItemCartQty(\'' + item.cartId + '\', -1)">-</button>' +
        '<span class="qty-display">' + item.quantity + '</span>' +
        '<button class="btn-qty" onclick="changeItemCartQty(\'' + item.cartId + '\', 1)">+</button>' +
      '</div>' +
      '<button class="btn-remove-cart-item" onclick="removeCartItem(\'' + item.cartId + '\')" title="Remover refeição">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<polyline points="3 6 5 6 21 6"></polyline>' +
          '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
        '</svg>' +
      '</button>' +
    '</div>';
}

function changeItemCartQty(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeCartItem(cartId);
    return;
  }
  updateCartUI();
  refreshPixQRCode();
}

function removeCartItem(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  updateCartUI();
  refreshPixQRCode();
  showToast('Refeição removida do seu pedido.');
}

function openCartModal() {
  if (cart.length === 0) {
    showToast('Reserve pelo menos uma refeição para começar!');
    return;
  }
  document.getElementById('cartModal').classList.add('active');
  refreshPixQRCode();
}

function closeCartModal() {
  document.getElementById('cartModal').classList.remove('active');
}

// =============================================================================
// 8. GERAÇÃO DINÂMICA DO PIX (QR CODE & COPIA E COLA)
// =============================================================================
let currentPixPayload = '';

function refreshPixQRCode() {
  const total = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  if (total <= 0) return;

  const orderId = 'CAMPAL' + Math.floor(1000 + Math.random() * 9000);
  
  // Gerar payload oficial BR Code
  currentPixPayload = PixBRCode.generate({
    key: window.CHEF_PIX_CONFIG.key,
    name: window.CHEF_PIX_CONFIG.name,
    city: window.CHEF_PIX_CONFIG.city,
    amount: total,
    txid: orderId
  });

  const qrContainer = document.getElementById('pixQrCodeContainer');
  if (!qrContainer) return;
  qrContainer.innerHTML = '';

  try {
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrContainer, {
        text: currentPixPayload,
        width: 190,
        height: 190,
        colorDark: '#163016',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  } catch (err) {
    console.error('Erro ao renderizar QR Code:', err);
  }

  // Preencher chave Pix
  const keyDisplay = document.getElementById('pixKeyDisplayValue');
  if (keyDisplay) keyDisplay.textContent = window.CHEF_PIX_CONFIG.key;
}

function copyPixKey() {
  const key = window.CHEF_PIX_CONFIG.key;
  navigator.clipboard.writeText(key).then(() => {
    showToast('📋 Chave Pix (' + key + ') copiada com sucesso!');
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = key;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('📋 Chave Pix copiada!');
  });
}

function copyPixPayloadCode() {
  if (!currentPixPayload) refreshPixQRCode();
  navigator.clipboard.writeText(currentPixPayload).then(() => {
    showToast('✨ Código Pix Copia e Cola gerado e copiado com sucesso!');
  }).catch(() => {
    showToast('Código copiado para a área de transferência!');
  });
}

// =============================================================================
// 9. ENVIO DO PEDIDO VIA WHATSAPP COM COMPROVANTE PRÉ-PREENCHIDO
// =============================================================================
function setupReceiptUpload() {
  const fileInput = document.getElementById('receiptFileInput');
  const previewImg = document.getElementById('receiptPreviewThumb');
  const uploadBox = document.getElementById('receiptUploadBox');

  if (!fileInput || !previewImg) return;

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        previewImg.src = evt.target.result;
        previewImg.style.display = 'block';
        uploadBox.style.borderColor = '#22c55e';
        showToast('📷 Comprovante carregado! Agora clique em Enviar no WhatsApp.');
      };
      reader.readAsDataURL(file);
    }
  });
}

function finalizeAndSendWhatsApp() {
  const nameInput = document.getElementById('customerName');
  const phoneInput = document.getElementById('customerPhone');
  const deliveryType = document.getElementById('deliveryType');
  const locationInput = document.getElementById('deliveryLocation');
  const generalNotes = document.getElementById('generalOrderNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const location = locationInput ? locationInput.value.trim() : '';
  const notes = generalNotes ? generalNotes.value.trim() : '';
  const typeText = deliveryType ? deliveryType.options[deliveryType.selectedIndex].text : 'Retirada';

  if (!name) {
    showToast('⚠️ Por favor, informe o seu Nome Completo.');
    if (nameInput) nameInput.focus();
    return;
  }

  if (cart.length === 0) {
    showToast('⚠️ Você ainda não reservou nenhuma refeição.');
    return;
  }

  const orderNumber = '#CAMPAL-' + Math.floor(1000 + Math.random() * 9000);
  const totalAmount = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const totalFormatted = totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const totalMeals = cart.reduce((acc, item) => acc + item.quantity, 0);

  let message = '🍽️ *NOVO PEDIDO: ' + orderNumber + '*\n';
  message += '*Cozinha da Chef Alexandra - Campal*\n';
  message += '_Sabor, cuidado e carinho em cada refeição!_\n\n';

  message += '👤 *DADOS DO CLIENTE*\n';
  message += '• *Nome:* ' + name + '\n';
  if (phone) message += '• *Contato:* ' + phone + '\n';
  message += '• *Modalidade:* ' + typeText + '\n';
  if (location) message += '• *Local/Alojamento:* ' + location + '\n';
  message += '\n';

  // Refeições agrupadas por dia, para a cozinha saber exatamente o que preparar
  message += '📋 *REFEIÇÕES RESERVADAS (' + totalMeals + ' no total):*\n';

  DAY_ORDER.forEach(dayKey => {
    const itemsOfDay = cart.filter(i => i.day === dayKey).sort((a, b) => a.order - b.order);
    if (itemsOfDay.length === 0) return;

    const dayTotal = itemsOfDay.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);
    message += '\n📅 *' + DAY_LABELS[dayKey].name.toUpperCase() + '*\n';

    itemsOfDay.forEach(item => {
      const itemTotal = (item.unitPrice * item.quantity)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      message += '▪️ *' + item.quantity + 'x ' + item.mealName + '* — ' + itemTotal + '\n';
      (item.selectedGroups || []).forEach(group => {
        const cleanTitle = group.title.replace(/\s*\(.*?\)\s*$/, '');
        message += '   └ ' + cleanTitle + ': ' + group.values.join(', ') + '\n';
      });
      if (item.notes) {
        message += '   └ ⚠️ Observação: ' + item.notes + '\n';
      }
    });

    message += '   _Subtotal do dia: ' +
      dayTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '_\n';
  });

  if (notes) {
    message += '\n📝 *OBSERVAÇÕES GERAIS:* ' + notes + '\n';
  }

  message += '\n💰 *VALOR TOTAL: ' + totalFormatted + '*\n';
  message += '_(Café da Manhã R$ 25,00 • Almoço R$ 33,00 • Café da Noite R$ 25,00 — valores fechados, tudo incluso)_\n';
  message += '💳 *PAGAMENTO:* Pix\n';
  message += '🔑 *Chave Pix Utilizada:* 73988411342 (Alexandra)\n\n';

  message += '🧾 *COMPROVANTE DO PIX:*\n';
  message += '_(Segue anexo o comprovante do pagamento Pix para confirmação da reserva!)_\n\n';
  message += 'Deus abençoe! 🙏❤️';

  navigator.clipboard.writeText(message).catch(() => {});

  const encodedText = encodeURIComponent(message);
  const whatsappUrl = 'https://wa.me/' + window.CHEF_PIX_CONFIG.whatsappRaw + '?text=' + encodedText;

  showToast('🚀 Abrindo WhatsApp com suas refeições reservadas...');
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 400);
}

// =============================================================================
// 10. MODAL DE PANFLETOS ORIGINAIS (FLYERS)
// =============================================================================
function renderFlyersModalGrid() {
  const container = document.getElementById('flyersModalGrid');
  if (!container) return;

  container.innerHTML = FLYERS_DATA.map(flyer => `
    <div class="flyer-thumb-card" onclick="openFlyerFullscreen('${flyer.file}', '${flyer.title}')">
      <img src="${flyer.file}" alt="${flyer.title}" loading="lazy" />
      <div class="flyer-thumb-caption">${flyer.title}</div>
    </div>
  `).join('');
}

function openFlyersModal() {
  document.getElementById('flyersModal').classList.add('active');
}

function closeFlyersModal() {
  document.getElementById('flyersModal').classList.remove('active');
}

function openFlyerFullscreen(src, title) {
  const modal = document.getElementById('flyerFullscreenModal');
  const img = document.getElementById('flyerFullscreenImg');
  const titleEl = document.getElementById('flyerFullscreenTitle');
  if (img) img.src = src;
  if (titleEl) titleEl.textContent = title;
  if (modal) modal.classList.add('active');
}

function closeFlyerFullscreenModal() {
  document.getElementById('flyerFullscreenModal').classList.remove('active');
}


// =============================================================================
// 11. UTILITÁRIOS: TOAST NOTIFICATION
// =============================================================================
let toastTimeout = null;
function showToast(msg) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = msg;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3400);
}

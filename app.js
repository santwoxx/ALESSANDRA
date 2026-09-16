/**
 * CARDÁPIO DIGITAL - CHEF ALESSANDRA (EQUIPE DA COZINHA CAMPAL)
 * Lógica Completa da Aplicação: Catálogo, Filtros Rápidos, Busca, Modais, Carrinho, Pix e WhatsApp
 */

// =============================================================================
// 1. CATÁLOGO COMPLETO DE PRATOS E REFEIÇÕES COM TAGS E FILTROS
// =============================================================================
const MENU_DATA = [
  // --- ALMOÇO COMPLETO ---
  {
    id: 'alm-parmegiana',
    category: 'almoco',
    name: 'Bife à Parmegiana Especial',
    price: 33.00,
    tag: 'Mais Pedido',
    isPopular: true,
    isVegetarian: false,
    isMeal: true,
    image: 'assets/dishes/bife-parmegiana.jpg',
    description: 'Bife empanado crocante, coberto com molho de tomate artesanal especial da Chef e queijo mussarela gratinado irresistível.',
    sidesSummary: 'Arroz soltinho, feijão temperado, macarrão ao molho, salada cozida e salada crua.',
    optionsGroupTitle: 'Acompanhamentos inclusos na Marmita / Prato:',
    options: [
      { id: 'arroz', label: 'Arroz branco soltinho', default: true },
      { id: 'feijao', label: 'Feijão fresquinho e caseiro', default: true },
      { id: 'macarrao', label: 'Macarrão ao molho de tomate', default: true },
      { id: 'salada_cozida', label: 'Salada cozida (cenoura, chuchu e vagem)', default: true },
      { id: 'salada_crua', label: 'Salada crua refrescante (alface e tomate)', default: true }
    ]
  },
  {
    id: 'alm-frango-douradinho',
    category: 'almoco',
    name: 'Frango Assado Douradinho da Casa',
    price: 33.00,
    tag: 'Sabor Caseiro',
    isPopular: true,
    isVegetarian: false,
    isMeal: true,
    image: 'assets/dishes/frango-assado.jpg',
    description: 'Frango assado douradinho e suculento, marinado em temperos naturais e assado na perfeição com muito carinho.',
    sidesSummary: 'Arroz, feijão, batata grelhada com bechamel e mussarela, farofa de banana e salada crua.',
    optionsGroupTitle: 'Acompanhamentos inclusos na Marmita / Prato:',
    options: [
      { id: 'arroz', label: 'Arroz branco soltinho', default: true },
      { id: 'feijao', label: 'Feijão temperado na medida certa', default: true },
      { id: 'batata_bechamel', label: 'Batata grelhada com bechamel e mussarela', default: true },
      { id: 'farofa_banana', label: 'Farofa crocante de banana da terra', default: true },
      { id: 'salada_crua', label: 'Salada crua (alface, tomate, cenoura e cebola)', default: true }
    ]
  },
  {
    id: 'alm-fricasse-frango',
    category: 'almoco',
    name: 'Fricassê Cremoso de Frango',
    price: 33.00,
    tag: 'Cremoso & Especial',
    isPopular: true,
    isVegetarian: false,
    isMeal: true,
    image: 'assets/dishes/fricasse-frango.jpg',
    description: 'Fricassê aveludado de frango desfiado com milho verde fresco, ervilha, cenoura e temperos especiais, coberto com batata palha dourada.',
    sidesSummary: 'Arroz branco, feijão caseiro, salada crua e salada cozida.',
    optionsGroupTitle: 'Acompanhamentos inclusos na Marmita / Prato:',
    options: [
      { id: 'arroz', label: 'Arroz branco soltinho', default: true },
      { id: 'feijao', label: 'Feijão caseiro com tempero especial', default: true },
      { id: 'salada_cozida', label: 'Salada cozida nutritiva (batata, cenoura e vagem)', default: true },
      { id: 'salada_crua', label: 'Salada crua fresca e colorida', default: true },
      { id: 'batata_palha', label: 'Batata palha extra crocante por cima', default: true }
    ]
  },
  {
    id: 'alm-fricasse-vegetariano',
    category: 'almoco',
    name: 'Fricassê Especial Vegetariano',
    price: 33.00,
    tag: 'Opção Vegetariana',
    isPopular: false,
    isVegetarian: true,
    isMeal: true,
    image: 'assets/dishes/fricasse-vegetariano.jpg',
    description: 'Fricassê cremoso e leve à base de proteína vegetal nobre, milho verde, ervilha, cenoura ralada e ervas aromáticas.',
    sidesSummary: 'Arroz branco soltinho, feijão caseiro, salada crua e salada cozida.',
    optionsGroupTitle: 'Acompanhamentos inclusos:',
    options: [
      { id: 'arroz', label: 'Arroz branco soltinho', default: true },
      { id: 'feijao', label: 'Feijão caseiro selecionado', default: true },
      { id: 'salada_cozida', label: 'Salada cozida nutritiva no ponto certo', default: true },
      { id: 'salada_crua', label: 'Salada crua fresca', default: true }
    ]
  },


  // --- BOLOS CASEIROS & SOBREMESAS ---
  {
    id: 'bolo-chocolate',
    category: 'bolos',
    name: 'Bolo de Chocolate Cremoso',
    price: 8.00,
    tag: 'Irresistível',
    isPopular: true,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/bolo-chocolate.jpg',
    description: 'Bolo fofinho de chocolate com cobertura abundante de brigadeiro cremoso e confeitos crocantes de chocolate.',
    sidesSummary: 'Fatia generosa embalada com carinho.'
  },
  {
    id: 'bolo-milho',
    category: 'bolos',
    name: 'Bolo de Milho Tradicional da Fazenda',
    price: 7.00,
    tag: 'Sabor de Infância',
    isPopular: true,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/bolo-milho.jpg',
    description: 'Bolo caseiro de milho com textura fofa e úmida, feito com milho de verdade e aquele sabor acolhedor de café da tarde.',
    sidesSummary: 'Fatia generosa e quentinha.'
  },
  {
    id: 'bolo-banana',
    category: 'bolos',
    name: 'Bolo de Banana com Canela',
    price: 7.00,
    tag: 'Aroma Delicioso',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/bolo-banana.jpg',
    description: 'Massa macia com pedaços de banana caramelizada e toque perfumado de canela em pó. O sabor que abraça!',
    sidesSummary: 'Fatia farta.'
  },
  {
    id: 'bolo-abacaxi',
    category: 'bolos',
    name: 'Bolo de Abacaxi Caramelizado',
    price: 8.00,
    tag: 'Doce na Medida',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/bolo-abacaxi.jpg',
    description: 'Bolo invertido úmido e fofinho com rodelas de abacaxi glaceadas na calda caramelizada dourada.',
    sidesSummary: 'Fatia farta.'
  },
  {
    id: 'bolo-coco',
    category: 'bolos',
    name: 'Bolo Gelado de Coco Cremoso',
    price: 8.00,
    tag: 'Fofinho & Úmido',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/bolo-coco.jpg',
    description: 'Massa leve embebida em calda cremosa de coco e coberta com flocos de coco fresco ralado.',
    sidesSummary: 'Embalado individualmente.'
  },
  {
    id: 'sobremesa-melancia',
    category: 'bolos',
    name: 'Porção de Melancia Doce em Fatias',
    price: 6.00,
    tag: '100% Natural',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/melancia.jpg',
    description: 'Fatias frescas, doces e super suculentas de melancia bem gelada para refrescar e hidratar o dia.',
    sidesSummary: 'Porção com 3 fatias caprichadas.'
  },

  // --- SUCOS NATURAIS & ESPECIAIS ---
  {
    id: 'suco-goiaba-cacau',
    category: 'sucos',
    name: 'Suco Especial de Goiaba com Cacau',
    price: 8.00,
    tag: 'Especial Sul da Bahia',
    isPopular: true,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/suco-goiaba-cacau.jpg',
    description: 'Receita autêntica combinando polpa de goiaba fresca e o nobre cacau da nossa terra. Uma explosão de energia e sabor único!',
    sidesSummary: 'Copo 400ml gelado.'
  },
  {
    id: 'suco-caja',
    category: 'sucos',
    name: 'Suco Natural de Cajá',
    price: 7.00,
    tag: 'Refrescante & Cítrico',
    isPopular: true,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/sucos-trio.jpg',
    description: 'Suco feito com a pura polpa da fruta fresca, cítrico na medida certa e muito refrescante.',
    sidesSummary: 'Copo 400ml bem gelado.'
  },
  {
    id: 'suco-acerola',
    category: 'sucos',
    name: 'Suco Natural de Acerola',
    price: 7.00,
    tag: 'Vitamina C Pura',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/sucos-trio.jpg',
    description: 'Suco rico em vitamina C natural, com sabor vivo da fruta batida na hora.',
    sidesSummary: 'Copo 400ml gelado.'
  },
  {
    id: 'suco-goiaba',
    category: 'sucos',
    name: 'Suco Natural de Goiaba',
    price: 7.00,
    tag: 'Aveludado & Doce',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/sucos-trio.jpg',
    description: 'Polpa cremosa e aveludada de goiaba vermelha fresca. Saudável e suave.',
    sidesSummary: 'Copo 400ml gelado.'
  },
  {
    id: 'suco-cupuacu',
    category: 'sucos',
    name: 'Suco Natural de Cupuaçu Cremoso',
    price: 8.00,
    tag: 'Sabor Marcante',
    isPopular: false,
    isVegetarian: true,
    isMeal: false,
    image: 'assets/dishes/suco-misto.jpg',
    description: 'Suco cremoso de cupuaçu com aroma inconfundível e sabor tropical único.',
    sidesSummary: 'Copo 400ml gelado.'
  }
];

// Flyers Originais para Visualização
const FLYERS_DATA = [
  { title: 'Almoço: Bife à Parmegiana & Saladas', file: 'assets/flyers/flyer-almoco-parmegiana.jpg' },
  { title: 'Almoço: Frango Assado & Farofa de Banana', file: 'assets/flyers/flyer-almoco-frango.jpg' },
  { title: 'Almoço: Fricassê de Frango & Vegetariano (Campal)', file: 'assets/flyers/flyer-almoco-fricasse.jpg' }
];

// =============================================================================
// 2. ESTADO DO CARRINHO, FILTROS E SELEÇÃO ATUAL
// =============================================================================
let cart = [];
let currentDishCustomizing = null;
let currentCustomQty = 1;
let qrCodeInstance = null;

// Estados de Filtros Rápidos
let currentQuickFilter = 'all';
let currentSearchQuery = '';

// =============================================================================
// 3. INICIALIZAÇÃO DA INTERFACE
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
    popular: MENU_DATA.filter(d => d.isPopular).length,
    vegetariano: MENU_DATA.filter(d => d.isVegetarian).length,
    refeicoes: MENU_DATA.filter(d => d.isMeal).length,
    sucos: MENU_DATA.filter(d => d.category === 'sucos').length,
    sobremesas: MENU_DATA.filter(d => d.category === 'bolos').length
  };

  const pillButtons = document.querySelectorAll('.filter-pill-btn');
  pillButtons.forEach(btn => {
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

  // Clique nos botões de filtro
  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pillButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentQuickFilter = btn.getAttribute('data-filter');
      renderDishesGrid();
    });
  });

  // Digitação no campo de busca
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (btnClearSearch) {
        btnClearSearch.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
      }
      renderDishesGrid();
    });
  }

  // Limpar busca
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

  // Limpar filtros e resetar para Todos
  if (btnResetFilter) {
    btnResetFilter.addEventListener('click', () => {
      currentQuickFilter = 'all';
      currentSearchQuery = '';
      if (searchInput) {
        searchInput.value = '';
      }
      if (btnClearSearch) {
        btnClearSearch.style.display = 'none';
      }
      pillButtons.forEach(b => {
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      renderDishesGrid();
    });
  }
}

// Renderizar pratos com suporte a filtros e busca
function renderDishesGrid() {
  const container = document.getElementById('menuSectionsContainer');
  const filterNotice = document.getElementById('filterResultNotice');
  const filterText = document.getElementById('filterResultText');
  if (!container) return;

  const categories = [
    { id: 'almoco', title: '🍲 Almoço Completo', priceBadge: 'R$ 33,00 cada' },

    { id: 'bolos', title: '🍰 Bolos Caseiros & Frutas', priceBadge: 'A partir de R$ 6,00' },
    { id: 'sucos', title: '🥤 Sucos Naturais & Especiais', priceBadge: 'A partir de R$ 7,00' }
  ];

  // Filtrar itens
  let filteredData = MENU_DATA.filter(dish => {
    // 1. Filtro de tag
    let passTag = true;
    if (currentQuickFilter === 'popular') passTag = dish.isPopular === true;
    else if (currentQuickFilter === 'vegetariano') passTag = dish.isVegetarian === true;
    else if (currentQuickFilter === 'refeicoes') passTag = dish.isMeal === true;
    else if (currentQuickFilter === 'sucos') passTag = dish.category === 'sucos';
    else if (currentQuickFilter === 'sobremesas') passTag = dish.category === 'bolos';

    if (!passTag) return false;

    // 2. Filtro de busca textual
    if (currentSearchQuery) {
      const matchName = dish.name.toLowerCase().includes(currentSearchQuery);
      const matchDesc = dish.description.toLowerCase().includes(currentSearchQuery);
      const matchSides = dish.sidesSummary ? dish.sidesSummary.toLowerCase().includes(currentSearchQuery) : false;
      const matchTag = dish.tag ? dish.tag.toLowerCase().includes(currentSearchQuery) : false;
      return matchName || matchDesc || matchSides || matchTag;
    }

    return true;
  });

  // Atualizar aviso de filtro
  const isFiltering = currentQuickFilter !== 'all' || currentSearchQuery.length > 0;
  if (filterNotice && filterText) {
    if (isFiltering) {
      filterNotice.style.display = 'flex';
      let label = '';
      if (currentQuickFilter === 'popular') label = '⭐ Mais Pedidos';
      else if (currentQuickFilter === 'vegetariano') label = '🌱 Vegetarianos';
      else if (currentQuickFilter === 'refeicoes') label = '🍲 Refeições Completas';
      else if (currentQuickFilter === 'sucos') label = '🥤 Sucos & Bebidas';
      else if (currentQuickFilter === 'sobremesas') label = '🍰 Sobremesas & Bolos';

      const searchPart = currentSearchQuery ? ` contendo "${currentSearchQuery}"` : '';
      filterText.textContent = `Exibindo ${filteredData.length} item(ns) ${label ? 'em ' + label : ''}${searchPart}`;
    } else {
      filterNotice.style.display = 'none';
    }
  }

  // Se nenhum resultado for encontrado
  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="filter-no-results">
        <div class="filter-no-results-icon">🔍</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 8px;">Nenhum item encontrado</h3>
        <p style="font-size: 0.95rem; margin-bottom: 18px;">Não encontramos nenhum prato com os filtros selecionados.</p>
        <button type="button" class="btn-reset-filter" onclick="document.getElementById('btnResetFilter').click()" style="padding: 10px 24px; font-size: 0.9rem;">
          Ver Cardápio Completo
        </button>
      </div>
    `;
    return;
  }

  // Se estiver filtrando, agrupar somente categorias que têm itens correspondentes
  container.innerHTML = categories.map(cat => {
    const dishesInCat = filteredData.filter(item => item.category === cat.id);
    if (dishesInCat.length === 0) return '';

    return `
      <section id="${cat.id}" class="category-section">
        <div class="category-header-wrap">
          <h2 class="category-title">${cat.title}</h2>
          <span class="category-badge-price">${dishesInCat.length} ${dishesInCat.length === 1 ? 'opção' : 'opções'}</span>
        </div>
        <div class="dishes-grid">
          ${dishesInCat.map(dish => renderDishCardHTML(dish)).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function renderDishCardHTML(dish) {
  const formattedPrice = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const vegBadge = dish.isVegetarian ? '<span style="color: #22c55e; margin-left: 6px;" title="Opção Vegetariana">🌱</span>' : '';
  const starBadge = dish.isPopular ? '<span style="color: #f59e0b; margin-left: 4px;" title="Destaque / Mais Pedido">⭐</span>' : '';

  return `
    <article class="dish-card" data-id="${dish.id}">
      <div class="dish-card-media" onclick="openDishCustomizer('${dish.id}')" style="cursor: pointer;">
        <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" />
        <span class="dish-badge-tag">${dish.tag}</span>
      </div>
      <div class="dish-card-body">
        <h3 class="dish-name" onclick="openDishCustomizer('${dish.id}')" style="cursor: pointer;">
          ${dish.name} ${vegBadge} ${starBadge}
        </h3>
        <p class="dish-desc">${dish.description}</p>
        ${dish.sidesSummary ? `<div class="dish-sides-preview"><strong>Acompanha:</strong> ${dish.sidesSummary}</div>` : ''}
        <div class="dish-card-footer">
          <div class="dish-price-wrap">
            <span class="dish-price-prefix">Por apenas</span>
            <span class="dish-price-value">${formattedPrice}</span>
          </div>
          <button class="btn-add-dish" onclick="openDishCustomizer('${dish.id}')" title="Adicionar e personalizar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Pedir
          </button>
        </div>
      </div>
    </article>
  `;
}

// Configurar navegação entre abas de categorias
function setupCategoryNav() {
  const tabs = document.querySelectorAll('.cat-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      if (targetId === 'flyers-modal') {
        openFlyersModal();
        return;
      }
      
      // Ao clicar em uma aba de categoria, se estiver com filtro de busca restrito, resetar para exibir a categoria
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
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// =============================================================================
// 4. MODAL DE PERSONALIZAÇÃO DO PRATO
// =============================================================================
function openDishCustomizer(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  currentDishCustomizing = dish;
  currentCustomQty = 1;

  document.getElementById('customModalDishTitle').textContent = dish.name;
  document.getElementById('customModalDishImg').src = dish.image;
  document.getElementById('customModalDishDesc').textContent = dish.description;
  document.getElementById('customModalDishPrice').textContent = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById('customQtyDisplay').textContent = currentCustomQty;
  document.getElementById('dishNotesInput').value = '';

  // Renderizar opções / acompanhamentos
  const optionsContainer = document.getElementById('customModalOptionsList');
  if (dish.options && dish.options.length > 0) {
    const isRadio = !!dish.singleChoice;
    const inputType = isRadio ? 'radio' : 'checkbox';
    const groupName = `opt_group_${dish.id}`;

    optionsContainer.innerHTML = `
      <div class="custom-options-group">
        <h4 class="modal-section-title">
          <span>🍴</span> ${dish.optionsGroupTitle || 'Acompanhamentos / Opções:'}
        </h4>
        ${dish.options.map(opt => `
          <label class="${inputType}-option-row">
            <div class="option-left">
              <input type="${inputType}" name="${groupName}" value="${opt.label}" ${opt.default ? 'checked' : ''} />
              <span>${opt.label}</span>
            </div>
            <span style="font-size: 0.78rem; color: #326432; font-weight: 700;">Incluso</span>
          </label>
        `).join('')}
      </div>
    `;
    optionsContainer.style.display = 'block';
  } else {
    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'none';
  }

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
  document.getElementById('btnConfirmAddDishText').textContent = 
    `Adicionar ${currentCustomQty}x ao Pedido • ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

function confirmAddDishToCart() {
  if (!currentDishCustomizing) return;

  // Coletar opções marcadas
  const selectedOptions = [];
  const optionsInputs = document.querySelectorAll('#customModalOptionsList input:checked');
  optionsInputs.forEach(input => selectedOptions.push(input.value));

  const notes = document.getElementById('dishNotesInput').value.trim();

  const cartItem = {
    cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    dishId: currentDishCustomizing.id,
    name: currentDishCustomizing.name,
    image: currentDishCustomizing.image,
    unitPrice: currentDishCustomizing.price,
    quantity: currentCustomQty,
    selectedOptions: selectedOptions,
    notes: notes
  };

  cart.push(cartItem);
  updateCartUI();
  closeDishCustomModal();
  showToast(`✅ "${cartItem.name}" adicionado ao pedido!`);
}

// =============================================================================
// 5. GERENCIAMENTO DO CARRINHO DE COMPRAS
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

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (checkoutSection) checkoutSection.style.display = 'none';
    if (cartSubtotalEl) cartSubtotalEl.textContent = 'R$ 0,00';
    if (cartTotalEl) cartTotalEl.textContent = 'R$ 0,00';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = 'block';

  cartItemsList.innerHTML = cart.map(item => {
    const itemTotal = (item.unitPrice * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.quantity}x ${item.name}</h4>
          ${item.selectedOptions.length > 0 ? `<p class="cart-item-customizations">✓ ${item.selectedOptions.join(', ')}</p>` : ''}
          ${item.notes ? `<p class="cart-item-customizations" style="color: #c47620; font-style: italic;">Obs: ${item.notes}</p>` : ''}
          <span class="cart-item-price">${itemTotal}</span>
        </div>
        <div class="qty-stepper" style="transform: scale(0.85);">
          <button class="btn-qty" onclick="changeItemCartQty('${item.cartId}', -1)">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="btn-qty" onclick="changeItemCartQty('${item.cartId}', 1)">+</button>
        </div>
        <button class="btn-remove-cart-item" onclick="removeCartItem('${item.cartId}')" title="Excluir item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  const formattedTotal = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  if (cartSubtotalEl) cartSubtotalEl.textContent = formattedTotal;
  if (cartTotalEl) cartTotalEl.textContent = formattedTotal;
  const pixTotalEl = document.getElementById('pixTotalValueDisplay');
  if (pixTotalEl) pixTotalEl.textContent = formattedTotal;
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
  showToast('Item removido do carrinho.');
}

function openCartModal() {
  if (cart.length === 0) {
    showToast('Adicione algum prato saboroso para começar!');
    return;
  }
  document.getElementById('cartModal').classList.add('active');
  refreshPixQRCode();
}

function closeCartModal() {
  document.getElementById('cartModal').classList.remove('active');
}

// =============================================================================
// 6. GERAÇÃO DINÂMICA DO PIX (QR CODE & COPIA E COLA)
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
// 7. ENVIO DO PEDIDO VIA WHATSAPP COM COMPROVANTE PRÉ-PREENCHIDO
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
  const mealDateInput = document.getElementById('mealDate');
  const generalNotes = document.getElementById('generalOrderNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const location = locationInput ? locationInput.value.trim() : '';
  const notes = generalNotes ? generalNotes.value.trim() : '';
  const typeText = deliveryType ? deliveryType.options[deliveryType.selectedIndex].text : 'Retirada';
  const mealDate = mealDateInput ? mealDateInput.options[mealDateInput.selectedIndex].text : 'Para Amanhã (Campal)';

  if (!name) {
    showToast('⚠️ Por favor, informe o seu Nome Completo.');
    if (nameInput) nameInput.focus();
    return;
  }

  if (cart.length === 0) {
    showToast('⚠️ Seu carrinho está vazio.');
    return;
  }

  const orderNumber = '#CAMPAL-' + Math.floor(1000 + Math.random() * 9000);
  const totalAmount = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const totalFormatted = totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Construção da mensagem formatada com Markdown WhatsApp
  let message = `🍽️ *NOVO PEDIDO: ${orderNumber}*\n`;
  message += `*Cozinha da Chef Alessandra - Campal*\n`;
  message += `_Sabor, cuidado e carinho em cada refeição!_\n\n`;

  message += `👤 *DADOS DO CLIENTE*\n`;
  message += `• *Nome:* ${name}\n`;
  if (phone) message += `• *Contato:* ${phone}\n`;
  message += `• *Dia da Refeição:* ${mealDate}\n`;
  message += `• *Modalidade:* ${typeText}\n`;
  if (location) message += `• *Local/Alojamento:* ${location}\n`;
  message += `\n`;

  message += `🛒 *ITENS DO PEDIDO:*\n`;
  cart.forEach(item => {
    const itemTotal = (item.unitPrice * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    message += `▪️ *${item.quantity}x ${item.name}* (${itemTotal})\n`;
    if (item.selectedOptions && item.selectedOptions.length > 0) {
      message += `   └ Acompanhamentos: ${item.selectedOptions.join(', ')}\n`;
    }
    if (item.notes) {
      message += `   └ Observação: ${item.notes}\n`;
    }
  });

  if (notes) {
    message += `\n📝 *OBSERVAÇÕES GERAIS:* ${notes}\n`;
  }

  message += `\n💰 *VALOR TOTAL: ${totalFormatted}*\n`;
  message += `💳 *PAGAMENTO:* Pix\n`;
  message += `🔑 *Chave Pix Utilizada:* 73988411342 (Alessandra)\n\n`;

  message += `🧾 *COMPROVANTE DO PIX:*\n`;
  message += `_(Segue anexo o comprovante do pagamento Pix para confirmação da reserva! Pronto para preparar!)_\n\n`;
  message += `Deus abençoe! 🙏❤️`;

  // Copiar resumo do pedido para área de transferência por conveniência
  navigator.clipboard.writeText(message).catch(() => {});

  // Redirecionamento oficial para o WhatsApp da Chef Alessandra
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${window.CHEF_PIX_CONFIG.whatsappRaw}?text=${encodedText}`;

  showToast('🚀 Abrindo WhatsApp com seu pedido e comprovante...');
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 400);
}

// =============================================================================
// 8. MODAL DE PANFLETOS ORIGINAIS (FLYERS)
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
// 10. UTILITÁRIOS: TOAST NOTIFICATION
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

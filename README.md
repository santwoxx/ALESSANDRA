# 🍽️ Cardápio Digital - Cozinha da Chef Alessandra (EJC)

> **"Sabor, cuidado e amor em cada refeição! Alimentando corpos, fortalecendo laços!"**

Aplicação web moderna, acolhedora e 100% responsiva de **Cardápio Digital** desenvolvida para a **Chef Alessandra** e a **Equipe da Cozinha EJC**. 

---

## ✨ Funcionalidades

- **📱 Mobile-First & Responsivo**: Projetado para ótima experiência em celulares e computadores.
- **🥘 Catálogo Completo**:
  - **Almoço Completo (R$ 25,00)**: Bife à Parmegiana, Frango Assado Douradinho da Casa, Fricassê de Frango e Fricassê Vegetariano.
  - **Café da Manhã (R$ 20,00)**: Cuscuz Temperado, Pão com Ovos Mexidos, Batata Doce, Mini Sanduíches Naturais, Mingau de Milho, Frutas e Bolos.
  - **Café da Noite / Jantar (R$ 20,00 a R$ 23,00)**: Caldo de Mandioca com Frango, Caldo de Abóbora com Frango, Hambúrguer Artesanal Completo e Combos de Pão com Patê.
  - **Sobremesas & Bolos Caseiros**: Bolo de Chocolate Cremoso, Milho, Banana com Canela, Abacaxi Caramelizado, Coco Gelado e Melancia.
  - **Sucos Naturais & Especiais**: Suco de Goiaba com Cacau Baiano, Cajá, Acerola, Goiaba e Cupuaçu.
- **🍴 Personalização de Marmitas / Pratos**: O cliente escolhe acompanhamentos e adiciona observações (ex: "sem cebola", "marmita caprichada").
- **🛒 Carrinho Interativo**: Totalizador dinâmico com barra fixa flutuante.
- **⚡ Pagamento Rápido via Pix**:
  - **Chave Pix**: `73988411342` (Alessandra)
  - **QR Code Dinâmico** gerado localmente com o valor exato do pedido (padrão oficial BR Code / EMV do Banco Central).
  - Botão de **Copiar Chave Pix** e **Copiar Código Pix Copia e Cola**.
  - Opção de anexar prévia do comprovante.
- **💬 Envio Automático para o WhatsApp da Chef Alessandra**:
  - Botão de finalização que gera a mensagem pré-formatada com resumo, itens, observações, dados de entrega e comprovante Pix, abrindo diretamente o WhatsApp (`(73) 98841-1342`).
- **🎙️ Mensagem de Áudio da Chef**: Reprodutor integrado na página com a voz da Chef Alessandra.
- **📜 Galeria de Panfletos Oficiais**: Visualização em tela cheia dos panfletos originais do cardápio.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico e acessível com meta tags para redes sociais (Open Graph).
- **Vanilla CSS3** moderno com Design System acolhedor, glassmorphism e micro-animações.
- **JavaScript ES6+** modular e reativo.
- **QRCode.js** integrado localmente (funciona 100% offline).
- **PixBRCode** para geração de payloads padrão EMV / Banco Central do Brasil.

---

## 🚀 Como Executar Localmente

Você pode rodar com qualquer servidor web simples:

```bash
# Com Python:
python -m http.server 3000

# Ou com Node.js (npx serve):
npx serve .
```

Abra `http://localhost:3000` no seu navegador.

---

## 📦 Como Ativar o GitHub Pages

1. Acesse o repositório no GitHub: [https://github.com/santwoxx/ALESSANDRA](https://github.com/santwoxx/ALESSANDRA)
2. Vá em **Settings** > **Pages**;
3. Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`;
4. Clique em **Save**;
5. O site estará online no link: `https://santwoxx.github.io/ALESSANDRA/`.

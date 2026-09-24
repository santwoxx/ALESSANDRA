# 🍽️ Cardápio Digital - Cozinha da Chef Alexandra (Campal)

> **"Sabor, cuidado e amor em cada refeição! Alimentando corpos, fortalecendo laços!"**

Aplicação web moderna, acolhedora e 100% responsiva de **Cardápio Digital** desenvolvida para a **Chef Alexandra** e a **Equipe da Cozinha Campal**. 

---

## ✨ Funcionalidades

- **📱 Mobile-First & Responsivo**: Projetado para ótima experiência em celulares e computadores.
- **🗓️ As 7 Refeições da Campal**: O cardápio é organizado por **dia + refeição**, da quinta-feira à noite até o sábado à noite, para a cozinha saber exatamente o que cada cliente reservou:

  | # | Dia | Refeição | Valor |
  |---|-----|----------|-------|
  | 1 | Quinta-feira | 🌙 Café da Noite | R$ 25,00 |
  | 2 | Sexta-feira | ☀️ Café da Manhã | R$ 25,00 |
  | 3 | Sexta-feira | 🍲 Almoço | R$ 33,00 |
  | 4 | Sexta-feira | 🌙 Café da Noite | R$ 25,00 |
  | 5 | Sábado | ☀️ Café da Manhã | R$ 25,00 |
  | 6 | Sábado | 🍲 Almoço | R$ 33,00 |
  | 7 | Sábado | 🌙 Café da Noite | R$ 25,00 |

- **💰 Valor Único e Fechado por Refeição**: Não existe preço de item avulso. Suco natural, bolo, fruta e acompanhamentos **já estão inclusos** no valor da refeição.
- **🍴 Escolhas Inclusas**: Dentro de cada refeição o cliente escolhe, sem custo extra:
  - **Almoço**: prato principal (Bife à Parmegiana, Frango Assado, Fricassê de Frango ou Fricassê Vegetariano), acompanhamentos, suco e sobremesa.
  - **Café da Manhã**: prato principal (Cuscuz Temperado, Batata Doce, Pão com Ovos, Mini Sanduíches ou Mingau de Milho), suco e bolo/fruta.
  - **Café da Noite**: prato principal (Caldo de Mandioca, Caldo de Abóbora, Hambúrguer Artesanal ou Pão com Patê), suco e sobremesa.
- **🔍 Filtros e Busca**: Filtre por tipo de refeição (Café da Manhã / Almoço / Café da Noite) ou por dia (Quinta / Sexta / Sábado), com busca em tempo real.
- **🛒 Carrinho Agrupado por Dia**: As refeições reservadas aparecem separadas por dia, com subtotal de cada dia.
- **⚡ Pagamento Rápido via Pix**:
  - **Chave Pix**: `73988411342` (Alexandra)
  - **QR Code Dinâmico** gerado localmente com o valor exato do pedido (padrão oficial BR Code / EMV do Banco Central).
  - Botão de **Copiar Chave Pix** e **Copiar Código Pix Copia e Cola**.
  - Opção de anexar prévia do comprovante.
- **💬 Envio Automático para o WhatsApp da Chef Alexandra**:
  - Mensagem pré-formatada listando as refeições **agrupadas por dia**, com as escolhas de cada uma, subtotal por dia, observações e dados de entrega, abrindo direto o WhatsApp (`(73) 98841-1342`).
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

1. Acesse o repositório no GitHub: [https://github.com/santwoxx/ALEXANDRA](https://github.com/santwoxx/ALEXANDRA)
2. Vá em **Settings** > **Pages**;
3. Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`;
4. Clique em **Save**;
5. O site estará online no link: `https://santwoxx.github.io/ALEXANDRA/`.

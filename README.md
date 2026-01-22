# Mwangole - Quiz sobre Angola

Aplicação web interativa de quiz sobre Angola desenvolvida com React e Vite. Os participantes respondem perguntas sobre Angola e acumulam prêmios em Kwanzas (Kz).

## 🎯 Características

- **Quiz Interativo**: 10 perguntas sobre história, geografia e cultura de Angola
- **Sistema de Pontuação**: Cada pergunta tem um valor diferente (5.000 Kz a 30.000 Kz)
- **Sistema de Retry**: Segunda chance para questões respondidas incorretamente
- **Fluxo Completo**: Landing → Informações → Quiz → Retry → Parabéns → Pagamento → Final
- **Integração de Tracking**: Pixel UTMify para rastreamento de conversões
- **Múltiplos Métodos de Pagamento**: Suporte para Multicaixa Express e Transferência Bancária (IBAN)

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Radix UI** - Componentes acessíveis (Toast, Slot)
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🎮 Como Funciona

1. **Landing Page**: Página inicial com contador regressivo e chamada para ação
2. **Info Page**: Coleta do nome completo do participante
3. **Quiz Page**: 10 perguntas sobre Angola com sistema de pontuação
4. **Retry Page**: Segunda chance para questões erradas
5. **Congrats Page**: Parabéns ao completar o quiz
6. **Payment Page**: Seleção do método de pagamento e inserção dos dados
7. **Final Page**: Página final com botão de validação (aparece após 90 segundos)

## 📝 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes UI (Button, Input, Toast)
│   ├── CallToAction.jsx
│   ├── CorrectAnswerModal.jsx
│   ├── Countdown.jsx
│   ├── HeroImage.jsx
│   ├── PageWrapper.jsx
│   └── WelcomeMessage.jsx
├── pages/              # Páginas da aplicação
│   ├── LandingPage.jsx
│   ├── InfoPage.jsx
│   ├── QuizPage.jsx
│   ├── RetryPage.jsx
│   ├── CongratsPage.jsx
│   ├── PaymentPage.jsx
│   └── FinalPage.jsx
├── lib/                # Utilitários
│   └── utils.js
├── App.jsx             # Componente principal
└── main.jsx            # Entry point
```

## ⚙️ Configuração

### Pixel de Tracking

O projeto está configurado para usar o pixel UTMify. O `pixelId` está definido em:
- `index.html` (linha 10)
- `App.jsx` (linha 46)
- `vite.config.js` (linha 203)

Para alterar o pixel ID, atualize essas três localizações.

### Validação de Pagamento

- **Multicaixa Express**: 9 dígitos numéricos
- **Transferência (IBAN)**: 21 dígitos numéricos

## 🎨 Personalização

### Perguntas do Quiz

As perguntas estão definidas no arquivo `src/App.jsx` no array `quizQuestions`. Cada pergunta possui:
- `question`: Texto da pergunta
- `options`: Array com 4 opções de resposta
- `correct`: Índice da resposta correta (0-3)
- `value`: Valor em Kz da pergunta

### Estilos

O projeto usa Tailwind CSS. As cores principais são:
- Vermelho (`red-800`, `red-900`) - Cor principal
- Amarelo (`yellow-400`) - Destaques e CTAs
- Branco - Textos e fundos

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento na porta 3000
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção na porta 3000

## 📄 Licença

Este projeto é privado.

## 👨‍💻 Desenvolvimento

Desenvolvido com React, Vite e Tailwind CSS para criar uma experiência interativa e moderna de quiz sobre Angola.

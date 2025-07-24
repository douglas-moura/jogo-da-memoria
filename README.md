# 🧠 Jogo da Memória

Um jogo da memória simples e interativo desenvolvido com **React Native** usando **Expo**, onde o objetivo é encontrar os pares de cartas iguais com o menor número de tentativas possível.

## 🚀 Tecnologias utilizadas

- 🤖 React Native (via Expo SDK 53)
- ✨ TypeScript
- 🎨 Expo: Fontes, gradiente e status bar
- 🚦 React Navigation (stack + bottom tabs)
- 🔁 Moti + Reanimated — para animações suaves
- 📦 React Native Vector Icons — ícones estilizados
- 💾 AsyncStorage — para salvar recordes localmente

## 🔧 Como executar

1. Clone o repositório:
```bash
git clone https://github.com/douglas-moura/jogo-da-memoria
cd jogo-da-memoria
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:

```bash
npx expo start
```

4. Escaneie o QR code com o aplicativo Expo Go no celular.

🎮 Como jogar
- Toque em duas cartas para revelá-las.
- Se forem iguais, o par será mantido aberto.
- Se forem diferentes, elas se escondem novamente.
- Tente finalizar com o menor tempo possível!

📁 Estrutura do projeto
/
├── assets/
│   ├── fonts/          # Fontes customizadas (Coiny, etc.)
│   ├── img/            # Imagens usadas (logo, cartas)
│   └── components/     # Componentes reutilizáveis (TelaMenu, Rodape, etc.)
├── context/            # Context API (JogoContext)
├── functions/          # Funções utilitárias (numToTime, storage)
├── navigation/         # Navegação (Stack + Tabs)
├── screens/            # Telas principais (TelaJogo, TelaRecordes…)
├── App.tsx             # Entrypoint: configura navegação e providers
└── eas.json            # Configurações de build (EAS Build)

📜 Licença
Este projeto está licenciado sob a MIT License. Pode usar, contribuir e aprender à vontade!

💻 Sobre o autor
Desenvolvido por Douglas Moura — focado em Front‑End (React, React Native), Vue.js e soluções criativas. Sempre buscando novas formas de aprender e compartilhar 🧩.

# 🧠 Jogo da Memória

Jogo da Memória feito em React Native com Expo, utilizando navegação por abas e salvamento de progresso. Este projeto é um **jogo da memória temático do anime One Piece**, feito por um fã da obra.


## 🚀 Tecnologias utilizadas

- 🤖 React Native (via Expo SDK 53)
- ✨ TypeScript
- 🎨 Expo: Fontes, gradiente e status bar
- 🚦 React Navigation (stack + bottom tabs)
- 📦 React Native Vector Icons — ícones estilizados
- 💾 AsyncStorage — para salvar recordes localmente


## 📁 Estrutura do projeto
```shell
  ├── app/
  │   ├── screens/        # Telas principais (TelaJogo, TelaRecordes…)
  │   ├── index.tsx  
  ├── assets/
  │   ├── functions/      # Funções utilitárias (numToTime, calcularPontos, etc.)
  │   ├── helpers/
  │   ├── img/            # Imagens usadas (logo, cartas)
  │   ├── fonts/          # Fontes customizadas (Coiny, etc.)
  │   └── components/     # Componentes reutilizáveis (TelaMenu, Rodape, etc.)
  │   └── style/          
  │       ├── index.tsx   # Arquivo contendo estilos, cores e espacamentos globais do projeto 
  ├── class/              # Classes para gerar objetos Partida e Quadro
  ├── context/            # Context API (JogoContext)
  ├── App.tsx             # Entrypoint: busca o conteusdo em index.ts
  └── eas.json            # Configurações de build (EAS Build)
  └── app.json            # Informações do Aplicativo
  └── tsconfig.json       # Configurações do TypeScript
```

## 🔧 Como executar

### 1. Clone o repositório:
```bash
git clone https://github.com/douglas-moura/jogo-da-memoria
cd jogo-da-memoria
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Inicie o projeto:

```bash
npx expo start
```

### 4. Escaneie o QR code com o aplicativo Expo Go no celular.

## 🎮 Como jogar
- Toque em duas cartas para revelá-las.
- Se forem iguais, o par será mantido aberto.
- Se forem diferentes, elas se escondem novamente.
- Tente finalizar com o menor tempo possível!

## 📜 Licença
Este projeto está licenciado sob a MIT License. Pode usar, contribuir e aprender à vontade!

## 💻 Sobre o autor
Desenvolvido por Douglas Moura — focado em Front‑End (React, React Native), Vue.js e soluções criativas. Sempre buscando novas formas de aprender e compartilhar 🧩.

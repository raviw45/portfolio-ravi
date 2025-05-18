import { Blog } from "@/components/blogs/BlogDetail";

export const blogData: Blog[] = [
  {
    id: "create-next-app",
    title: "How to Create a Next.js App",
    excerpt:
      "Step-by-step guide to setting up a new Next.js application with TypeScript.",
    date: "2024-12-01",
    content: [
      {
        type: "text",
        content: "📌 **Prerequisites**: Node.js >= 18 and npm installed.",
      },
      { type: "text", content: "1️⃣ Create a new app with TypeScript:" },
      {
        type: "code",
        content: "npx create-next-app@latest my-next-app --typescript",
      },
      {
        type: "text",
        content: "2️⃣ Move into your project and start the server:",
      },
      { type: "code", content: "cd my-next-app\nnpm run dev" },
      {
        type: "text",
        content: "3️⃣ Open http://localhost:3000 to view your app.",
      },
      {
        type: "text",
        content: "🎉 You're all set with a new Next.js + TypeScript app!",
      },
    ],
  },
  {
    id: "create-vite-app",
    title: "How to Create a Vite App",
    excerpt:
      "Get started with Vite using these simple steps and create fast modern apps.",
    date: "2024-12-05",
    content: [
      { type: "text", content: "📌 **Prerequisites**: Node.js >= 18 and npm." },
      { type: "text", content: "1️⃣ Scaffold a new Vite app:" },
      { type: "code", content: "npm create vite@latest my-vite-app" },
      {
        type: "text",
        content: "2️⃣ Select framework (e.g., React + TypeScript).",
      },
      {
        type: "text",
        content: "3️⃣ Install dependencies and start dev server:",
      },
      { type: "code", content: "cd my-vite-app\nnpm install\nnpm run dev" },
      { type: "text", content: "🚀 Your Vite app is now up and running!" },
    ],
  },
  {
    id: "tailwind-v3-vite",
    title: "How to Use Tailwind CSS v3 in a Vite Project",
    excerpt:
      "Learn how to set up Tailwind CSS v3 with the Vite bundler in a modern frontend project.",
    date: "2024-12-7",
    content: [
      {
        type: "text",
        content: "📌 **Prerequisites**: Node.js >= 18 and npm installed.",
      },
      {
        type: "text",
        content: "1️⃣ Create a new Vite project:",
      },
      {
        type: "code",
        content: "npm create vite@latest my-app -- --template react-ts",
      },
      {
        type: "text",
        content: "2️⃣ Move into the project and install dependencies:",
      },
      {
        type: "code",
        content: "cd my-app\nnpm install",
      },
      {
        type: "text",
        content: "3️⃣ Install Tailwind CSS v3, PostCSS, and Autoprefixer:",
      },
      {
        type: "code",
        content: "npm install -D tailwindcss@latest postcss autoprefixer",
      },
      {
        type: "text",
        content: "4️⃣ Initialize Tailwind CSS config files:",
      },
      {
        type: "code",
        content: "npx tailwindcss init -p",
      },
      {
        type: "text",
        content:
          "5️⃣ Update your `tailwind.config.js` to enable content scanning:",
      },
      {
        type: "code",
        content: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
      },
      {
        type: "text",
        content: "6️⃣ Add Tailwind directives to your `src/index.css` file:",
      },
      {
        type: "code",
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
      },
      {
        type: "text",
        content:
          "7️⃣ Import the `index.css` file in your main `src/main.tsx` file:",
      },
      {
        type: "code",
        content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
      },
      {
        type: "text",
        content: "8️⃣ Start the development server:",
      },
      {
        type: "code",
        content: "npm run dev",
      },
      {
        type: "text",
        content:
          "🚀 Your Vite + Tailwind CSS v3 project is ready to build modern UIs!",
      },
    ],
  },
  {
    id: "redux-next-typescript",
    title: "How to Use Redux with Next.js and TypeScript",
    excerpt:
      "Integrate Redux Toolkit in a Next.js project with full TypeScript support.",
    date: "2024-12-10",
    content: [
      {
        type: "text",
        content: "📌 **Prerequisites**: Basic Next.js with TypeScript setup.",
      },
      {
        type: "text",
        content: "🔧 Step 1: Install Redux Toolkit and React Redux",
      },
      { type: "code", content: "npm install @reduxjs/toolkit react-redux" },

      { type: "text", content: "📁 Step 2: Create the store" },
      {
        type: "code",
        content: `// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`,
      },

      { type: "text", content: "🧩 Step 3: Create a counter slice" },
      {
        type: "code",
        content: `// store/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`,
      },

      {
        type: "text",
        content: "🪢 Step 4: Wrap your app with the Redux `<Provider>`",
      },
      {
        type: "code",
        content: `// pages/_app.tsx
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}`,
      },

      { type: "text", content: "📦 Step 5: Use Redux in your components" },
      {
        type: "code",
        content: `// components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { increment, decrement } from "@/store/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;`,
      },

      {
        type: "text",
        content: "🎯 Redux is now set up in your Next.js TypeScript app!",
      },
    ],
  },

  {
    id: "nodejs-project-setup",
    title:
      "Modern Node.js Project Setup with TypeScript, ESLint, Prettier, Husky & Commitlint",
    excerpt:
      "Step-by-step guide to setting up a modern and maintainable Node.js project using TypeScript, ESLint, Prettier, Husky, Commitlint, and more.",
    date: "2025-01-18",
    content: [
      {
        type: "text",
        content: "📌 **Prerequisites**: Node.js >= 18 and npm installed.",
      },
      {
        type: "text",
        content: "1️⃣ Initialize your project:",
      },
      {
        type: "code",
        content: "npm init -y",
      },
      {
        type: "text",
        content: "2️⃣ Install Husky and lint-staged:",
      },
      {
        type: "code",
        content: "npm install husky lint-staged --save-dev\nnpx husky init",
      },
      {
        type: "text",
        content: "3️⃣ Install TypeScript and types for Node.js:",
      },
      {
        type: "code",
        content:
          "npm install typescript ts-node @types/node --save-dev\nnpx tsc --init",
      },
      {
        type: "text",
        content: "4️⃣ Recommended folder structure:",
      },
      {
        type: "code",
        content: `📁 src/\n ┣ 📄 app.ts\n ┣ 📄 server.ts\n ┣ 📁 config/\n ┣ 📁 constants/\n ┣ 📁 controller/\n   ┣ 📄 auth.controller.ts\n ┣ 📁 middleware/\n ┣ 📁 models/\n ┗ 📁 routes/\n   ┣ 📄 auth.route.ts\n ┣ 📁 services/\n   ┣ 📄 auth.service.ts\n ┣ 📁 types/\n ┣ 📁 utils/\n ┣ 📁 view/`,
      },
      {
        type: "text",
        content: "5️⃣ Install and configure Nodemon for development:",
      },
      {
        type: "code",
        content: "npm install nodemon --save-dev",
      },
      {
        type: "text",
        content: "Add this to your package.json scripts:",
      },
      {
        type: "code",
        content: `"scripts": {\n  "dev": "nodemon src/index.ts"\n}`,
      },
      {
        type: "text",
        content: "6️⃣ Install and configure Commitlint:",
      },
      {
        type: "code",
        content:
          "npm install --save-dev @commitlint/cli @commitlint/config-conventional",
      },
      {
        type: "text",
        content: "Create `commitlint.config.js`:",
      },
      {
        type: "code",
        content: `module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", [
      "feat", "fix", "refactor", "docs", "style", "revert",
      "chore", "test", "workflow", "release", "dependency", "merge"
    ]],
    "subject-case": [2, "always", "sentence-case"]
  }
};`,
      },
      {
        type: "text",
        content: "Add Husky commit-msg hook:",
      },
      {
        type: "code",
        content: `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`,
      },
      {
        type: "text",
        content: "7️⃣ Install and configure ESLint:",
      },
      {
        type: "code",
        content: "npm install --save-dev eslint @eslint/js typescript-eslint",
      },
      {
        type: "text",
        content: "Create `eslint.config.mjs`:",
      },
      {
        type: "code",
        content: `// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname
    }
  },
  files: ['**/*.ts'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
  rules: {
    'no-console': 'error',
    'no-useless-catch': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  }
});`,
      },
      {
        type: "text",
        content: "Run ESLint commands:",
      },
      {
        type: "code",
        content: "npx eslint .\nnpx eslint --fix",
      },
      {
        type: "text",
        content: "8️⃣ Configure lint-staged in package.json:",
      },
      {
        type: "code",
        content: `"lint-staged": {\n  "**/*.ts": "eslint --fix"\n}`,
      },
      {
        type: "text",
        content: "Add pre-commit hook:",
      },
      {
        type: "code",
        content: `npx husky add .husky/pre-commit "npx lint-staged"`,
      },
      {
        type: "text",
        content: "9️⃣ Install and configure Prettier:",
      },
      {
        type: "code",
        content: "npm install --save-dev --save-exact prettier",
      },
      {
        type: "text",
        content: "Create `prettier.config.json`:",
      },
      {
        type: "code",
        content: `{
  "trailingComma": "none",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 4,
  "bracketSameLine": true,
  "singleAttributePerLine": true,
  "printWidth": 150,
  "endOfLine": "crlf"
}`,
      },
      {
        type: "text",
        content: "🔟 Install dotenv-flow for env management:",
      },
      {
        type: "code",
        content: "npm install dotenv-flow",
      },
      {
        type: "text",
        content: "Create .env files like `.env`, `.env.local`, etc.",
      },
      {
        type: "text",
        content: "1️⃣1️⃣ Install cross-env for cross-platform env variables:",
      },
      {
        type: "code",
        content: "npm install cross-env",
      },
      {
        type: "text",
        content: "Update dev script in package.json:",
      },
      {
        type: "code",
        content: `"scripts": {\n  "dev": "cross-env NODE_ENV=development nodemon src/index.ts"\n}`,
      },
      {
        type: "text",
        content:
          "🎉 Your Node.js project is now fully set up with TypeScript, linting, formatting, and commit automation!",
      },
    ],
  },
  {
    id: "tailwind-v4-vite-plugin",
    title: "How to Use Tailwind CSS v4 as a Plugin in Vite",
    excerpt:
      "Install Tailwind CSS v4 the seamless way using the official Vite plugin for tight integration with modern frameworks.",
    date: "2025-03-12",
    content: [
      {
        type: "text",
        content:
          "🔧 **Overview**: Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.",
      },
      {
        type: "text",
        content: "1️⃣ **Install Tailwind CSS and the Vite plugin:**",
      },
      {
        type: "code",
        content: "npm install tailwindcss @tailwindcss/vite",
      },
      {
        type: "text",
        content: "2️⃣ **Configure the Vite plugin in `vite.config.ts`:**",
      },
      {
        type: "code",
        content: `import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`,
      },
      {
        type: "text",
        content: "3️⃣ **Import Tailwind CSS in your stylesheet:**",
      },
      {
        type: "code",
        content: `@import "tailwindcss";`,
      },
      {
        type: "text",
        content: "4️⃣ **Run the development server:**",
      },
      {
        type: "code",
        content: "npm run dev",
      },
      {
        type: "text",
        content: "5️⃣ **Use Tailwind classes in your HTML:**",
      },
      {
        type: "code",
        content: `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>`,
      },
      {
        type: "text",
        content:
          "🎉 That's it! Tailwind CSS v4 is now seamlessly integrated with your Vite project.",
      },
    ],
  },
];

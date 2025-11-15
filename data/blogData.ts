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
  {
    id: "trpc-typesafety-nextjs",
    title: "How tRPC Works for Type Safety in Next.js",
    excerpt:
      "Learn how to use tRPC in Next.js for full end-to-end type safety, including folder structure, server-side setup, and client-side integration.",
    date: "2025-08-13",
    content: [
      {
        type: "text",
        content:
          "🔧 **Overview**: tRPC enables full-stack type safety in Next.js applications by letting you define your API procedures and types in one place and automatically inferring them on the client. No more manual API typings!",
      },
      {
        type: "text",
        content: "📂 **Folder Structure** (Recommended for tRPC in Next.js):",
      },
      {
        type: "code",
        content: `src/
├── server/
│   ├── trpc/
│   │   ├── routers/
│   │   │   ├── example.ts
│   │   │   └── _app.ts
│   │   ├── utils.ts
│   │   └── context.ts
│   └── index.ts
├── pages/
│   └── api/
│       └── trpc/[trpc].ts
└── utils/
    └── trpc.ts`,
      },
      {
        type: "text",
        content: "1️⃣ **Install tRPC dependencies:**",
      },
      {
        type: "code",
        content:
          "npm install @trpc/server @trpc/client @trpc/react-query @tanstack/react-query zod",
      },
      {
        type: "text",
        content: "2️⃣ **Server-Side Setup** (`src/server/trpc`):",
      },
      {
        type: "code",
        content: `// utils.ts
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

// context.ts
export const createContext = async () => ({});
export type Context = Awaited<ReturnType<typeof createContext>>;

// routers/example.ts
import { publicProcedure, router } from "../utils";
import { z } from "zod";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { greeting: \`Hello, \${input.name}!\` };
    }),
});

// routers/_app.ts
import { router } from "../utils";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
});
export type AppRouter = typeof appRouter;`,
      },
      {
        type: "text",
        content: "3️⃣ **API Handler** (`pages/api/trpc/[trpc].ts`):",
      },
      {
        type: "code",
        content: `import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@/server/trpc/routers/_app";
import { createContext } from "@/server/trpc/context";

export default createNextApiHandler({
  router: appRouter,
  createContext,
});`,
      },
      {
        type: "text",
        content: "4️⃣ **Client-Side Setup** (`src/utils/trpc.ts`):",
      },
      {
        type: "code",
        content: `import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/routers/_app";

export const trpc = createTRPCReact<AppRouter>();`,
      },
      {
        type: "text",
        content: "5️⃣ **Using tRPC in a React Component**:",
      },
      {
        type: "code",
        content: `import { trpc } from "@/utils/trpc";

export default function HomePage() {
  const helloQuery = trpc.example.hello.useQuery({ name: "Ravikant" });

  if (helloQuery.isLoading) return <p>Loading...</p>;
  if (helloQuery.error) return <p>Error: {helloQuery.error.message}</p>;

  return <p>{helloQuery.data?.greeting}</p>;
}`,
      },
      {
        type: "text",
        content:
          "🎯 With this setup, your API input and output types are automatically inferred on the client from the server definitions — ensuring type safety across the stack without manual syncing.",
      },
    ],
  },
  {
    id: "how-to-improve-spring-boot-performance-api-with-caching",
    title: "Boost Performance with Caching in Spring Boot",
    excerpt:
      "Learn how to implement caching in Spring Boot using @Cacheable, @CacheEvict, Redis, and EntityGraph for performance optimization with practical real-world examples.",
    date: "2025-10-15",
    content: [
      {
        type: "text",
        content:
          "🚀 **Overview**: Caching is one of the most effective ways to boost the performance of Spring Boot applications. By reducing repetitive database calls, caching improves response time, reduces load on DB, and enhances API efficiency. In this blog, we'll implement caching using `@Cacheable`, `@CacheEvict`, and `Redis`, with a real working example from an Employee & Address management system.",
      },

      {
        type: "text",
        content: "📌 **Why Use Caching?**",
      },
      {
        type: "text",
        content:
          "- Reduce repeated database queries\n- Improve API response time\n- Handle high traffic efficiently\n- Reduce server resource usage\n- Improve scalability in microservice environments",
      },

      // SECTION 1 — Enabling Cache
      {
        type: "text",
        content: "1️⃣ **Enable Caching in Spring Boot**",
      },
      {
        type: "code",
        content: `@SpringBootApplication
@EnableCaching
public class EmployeeApplication {
    public static void main(String[] args) {
        SpringApplication.run(EmployeeApplication.class, args);
    }
}`,
      },

      // SECTION 2 — Controller Code
      {
        type: "text",
        content:
          "2️⃣ **Using @Cacheable and @CacheEvict in Controller**\nBelow is the controller used for employee CRUD operations with caching applied:",
      },
      {
        type: "code",
        content: `@RestController
@RequestMapping("/employee")
@CacheConfig(cacheNames = "employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository empRepo;

    @PostMapping("/save")
    @CacheEvict(allEntries = true)
    public ResponseEntity<Employee> save(@RequestBody Employee employee) {

        if (employee.getAddresses() != null) {
            employee.getAddresses().forEach(address -> address.setEmployee(employee));
        }

        Employee saved = empRepo.save(employee);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    @Cacheable(key = "'page_' + #page")
    public ResponseEntity<Page<Employee>> getAll(@RequestParam(defaultValue = "0") int page) {
        Page<Employee> employees = empRepo.findAll(
            PageRequest.of(page, 10, Sort.by("id").descending())
        );
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/{id}")
    @Cacheable(key = "#id")
    public ResponseEntity<Employee> getById(@PathVariable("id") Integer id) {
        Employee emp = empRepo.findById(id).get();
        return ResponseEntity.ok(emp);
    }
}`,
      },

      // SECTION 3 — Repository with EntityGraph
      {
        type: "text",
        content:
          "3️⃣ **Using @EntityGraph to Avoid N+1 Problem**\nTo prevent lazy-loading issues when fetching employees with their addresses, we use `@EntityGraph` in the repository.",
      },
      {
        type: "code",
        content: `@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @EntityGraph(attributePaths = "addresses")
    Page<Employee> findAll(Pageable pageable);
}`,
      },

      // SECTION 4 — Redis integration
      {
        type: "text",
        content: "4️⃣ **Add Redis for High-Performance Caching (Recommended)**",
      },
      {
        type: "text",
        content: "📦 Install Redis locally or use Docker:",
      },
      {
        type: "code",
        content: `docker run -p 6379:6379 --name redis-cache -d redis`,
      },

      {
        type: "text",
        content: "📍 Add Redis Starter:",
      },
      {
        type: "code",
        content: `implementation 'org.springframework.boot:spring-boot-starter-data-redis'`,
      },

      {
        type: "text",
        content: "📍 Configure Redis in `application.properties`:",
      },
      {
        type: "code",
        content: `spring.cache.type=redis
spring.redis.host=localhost
spring.redis.port=6379`,
      },

      // SECTION 5 — Expected Behavior
      {
        type: "text",
        content: "5️⃣ **What Happens After Applying Caching?**",
      },
      {
        type: "text",
        content:
          "- First API hit → Fetches data from DB and stores it in Redis\n- Next API hits → Served directly from cache (much faster!)\n- When new employee is saved → `@CacheEvict` clears cache\n- Page-wise cache: `/all?page=0` vs `/all?page=1` are cached separately",
      },

      // SECTION 6 — Performance Boost
      {
        type: "text",
        content: "⚡ **Performance Boost Observed**:",
      },
      {
        type: "text",
        content:
          "- Response time reduced by **40–70%** (for paginated queries)\n- Database load decreased significantly\n- Improved scalability under load",
      },

      // FINAL WRAP-UP
      {
        type: "text",
        content:
          "🎯 **Conclusion**: Caching is a simple yet extremely powerful optimization technique. With Spring Boot, annotations like `@Cacheable`, `@CacheEvict`, and `@CacheConfig` make caching easy to implement. Combined with Redis, your application becomes significantly faster, scalable, and production-ready.",
      },
    ],
  },
  {
    id: "microservices-architecture-with-spring-boot",
    title: "Microservices Architecture with Spring Boot",
    excerpt:
      "Learn how microservices work with Spring Boot using Config Server, Eureka Discovery, API Gateway, and Resilience4j. This blog covers the complete workflow for building scalable, secure, and resilient distributed systems.",
    date: "2025-11-15",
    content: [
      {
        type: "text",
        content:
          "🚀 **Overview**: Microservices architecture allows us to build scalable, flexible, and independently deployable services. Instead of a single monolithic system, microservices split the application into smaller components that can scale and evolve independently. In this blog, we'll walk through a complete microservices workflow using Spring Boot — from creating services to config management, service discovery, API gateway routing, and resilience using Resilience4j.",
      },

      // SECTION — What are Microservices
      {
        type: "text",
        content: "📌 **What Are Microservices?**",
      },
      {
        type: "text",
        content:
          "- Independently deployable smaller services\n- Each service handles a specific business capability\n- Each service has its own database\n- Loose coupling and high scalability\n- Ideal for cloud-native and distributed applications",
      },

      // SECTION — Architecture Steps
      {
        type: "text",
        content: "1️⃣ **Create Individual Microservices**",
      },
      {
        type: "text",
        content:
          "This is the first foundational step. You create services such as User Service, Order Service, Product Service, Payment Service, etc. Each of these services contains its own logic and database, ensuring independence and high scalability.",
      },

      // CONFIG SERVER
      {
        type: "text",
        content:
          "2️⃣ **Setting Up Spring Cloud Config Server (Centralized Configuration)**",
      },
      {
        type: "text",
        content:
          "Managing configuration for multiple services can get complex. Spring Cloud Config Server centralizes all configurations and loads them from GitHub or a remote repository. This helps maintain environment-level configs cleanly without duplication.",
      },
      {
        type: "code",
        content: `@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}`,
      },
      {
        type: "text",
        content: "📍 Example of config file in GitHub:",
      },
      {
        type: "code",
        content: `user-service-dev.properties
order-service-dev.properties
product-service-dev.properties`,
      },

      // EUREKA DISCOVERY
      {
        type: "text",
        content: "3️⃣ **Service Discovery with Eureka Server**",
      },
      {
        type: "text",
        content:
          "Eureka solves the biggest challenge in microservices: **How do services find each other?** Instead of hardcoding URLs, each service registers with Eureka. Other services communicate using their registered service name.",
      },
      {
        type: "code",
        content: `@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}`,
      },

      // API GATEWAY
      {
        type: "text",
        content: "4️⃣ **API Gateway with Spring Cloud Gateway + Security**",
      },
      {
        type: "text",
        content:
          "The API Gateway acts as the entry point for all client requests. It handles routing, authentication, cross-cutting concerns, filters, and load balancing. You can secure it using **Spring Security + JWT**, and route internal requests using service names via Eureka.",
      },
      {
        type: "code",
        content: `spring.cloud.gateway.routes[0].id=user-service
spring.cloud.gateway.routes[0].uri=lb://USER-SERVICE
spring.cloud.gateway.routes[0].predicates=Path=/users/**`,
      },

      // RESILIENCE4J
      {
        type: "text",
        content: "5️⃣ **Resilience with Resilience4j (Circuit Breaker)**",
      },
      {
        type: "text",
        content:
          "Distributed systems must handle failures gracefully. Resilience4j protects services from cascading failures using Circuit Breakers, Retries, TimeLimiters, and Bulkheads.",
      },
      {
        type: "code",
        content: `@CircuitBreaker(name = "orderService", fallbackMethod = "orderFallback")
public OrderResponse getOrders(String userId) {
    return restTemplate.getForObject("http://ORDER-SERVICE/orders/" + userId, OrderResponse.class);
}`,
      },
      {
        type: "text",
        content:
          "📌 **Circuit Breaker Workflow:**\n- Tries calling a service\n- If failures exceed threshold → opens the circuit\n- Traffic is stopped to the failing service\n- After waitDuration → half-open state tests the service again\n- If healthy → circuit closes and resumes normally",
      },

      // DATA FLOW / ARCHITECTURE
      {
        type: "text",
        content: "6️⃣ **Final Architecture Flow**",
      },
      {
        type: "text",
        content:
          "**Client → API Gateway → Eureka Discovery → Microservices → Config Server → Databases → Resilience Layer (Resilience4j)**",
      },

      // Benefits
      {
        type: "text",
        content: "✨ **Benefits of Microservices Architecture**",
      },
      {
        type: "text",
        content:
          "- Independent deployment of each service\n- Easy to scale only the required service\n- Technology flexibility (Java, Node, Go, etc.)\n- Better fault isolation\n- Increased developer productivity\n- Ideal for cloud and DevOps",
      },

      // Conclusion
      {
        type: "text",
        content:
          "🎯 **Conclusion**: Microservices architecture enables us to build scalable, flexible, and resilient systems. With Spring Boot, setting up services, config server, Eureka, API gateway, and Resilience4j becomes easier and production-ready. This architecture is a solid foundation for large-scale applications and cloud-native deployments.",
      },
    ],
  },
  {
    id: "react-query-data-fetching-best-practices",
    title: "Mastering Data Fetching with React Query",
    excerpt:
      "Learn how React Query simplifies data fetching, caching, background updates, and synchronization in React applications using powerful hooks like useQuery, useMutation, and QueryClient.",
    date: "2025-11-21",
    content: [
      {
        type: "text",
        content:
          "🚀 **Overview**: React Query (TanStack Query) is one of the most impactful libraries for managing server-state in React apps. It handles caching, background updates, persistency, pagination, retries, and automatic UI synchronization. If you're tired of managing loading states, global state, or manual API calls—React Query is your best friend.",
      },

      // SECTION — Why React Query
      {
        type: "text",
        content: "📌 **Why Use React Query?**",
      },
      {
        type: "text",
        content:
          "- Eliminates manual API state management\n- Built-in caching & deduplication\n- Background refetching for fresh data\n- Auto retry on failed requests\n- Pagination & infinite queries support\n- Avoids unnecessary global state libraries\n- Makes API calls predictable and declarative",
      },

      // SECTION — Setting Up React Query
      {
        type: "text",
        content: "1️⃣ **Setup React Query in a React/Next.js App**",
      },
      {
        type: "code",
        content: `import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourComponents />
    </QueryClientProvider>
  );
}`,
      },

      // Basic useQuery
      {
        type: "text",
        content: "2️⃣ **Basic Data Fetching with useQuery**",
      },
      {
        type: "text",
        content:
          "The `useQuery` hook handles fetching, caching, and updating data automatically with zero boilerplate.",
      },
      {
        type: "code",
        content: `const { data, isLoading, error } = useQuery({
  queryKey: ["users"],
  queryFn: () => axios.get("/api/users").then(res => res.data),
});

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error fetching users</p>;`,
      },

      // QueryKey explained
      {
        type: "text",
        content: "📍 **What is queryKey?**",
      },
      {
        type: "text",
        content:
          "`queryKey` uniquely identifies the query. React Query caches data by this key and smartly decides when to refetch.",
      },

      // Mutations
      {
        type: "text",
        content: "3️⃣ **Mutations with useMutation (Create, Update, Delete)**",
      },
      {
        type: "text",
        content:
          "`useMutation` is used for POST, PUT, PATCH, DELETE operations. It does not automatically refetch data — so we invalidate queries manually.",
      },
      {
        type: "code",
        content: `const mutation = useMutation({
  mutationFn: (newUser) => axios.post("/api/users", newUser),
  onSuccess: () => {
    queryClient.invalidateQueries(["users"]);
  },
});`,
      },

      // Invalidations
      {
        type: "text",
        content: "📌 **Why Invalidate Queries?**",
      },
      {
        type: "text",
        content:
          "- Ensures UI shows fresh data\n- No need to manually update lists\n- Maintains consistency automatically",
      },

      // Pagination
      {
        type: "text",
        content: "4️⃣ **Handling Pagination with Query Keys**",
      },
      {
        type: "code",
        content: `const { data } = useQuery({
  queryKey: ["users", page],
  queryFn: () => axios.get(\`/api/users?page=\${page}\`).then(res => res.data),
});`,
      },

      // Infinite Scroll
      {
        type: "text",
        content: "5️⃣ **Infinite Queries (Infinite Scroll)**",
      },
      {
        type: "code",
        content: `const {
  data,
  fetchNextPage,
  hasNextPage,
} = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: ({ pageParam = 1 }) =>
    axios.get(\`/api/posts?page=\${pageParam}\`).then(res => res.data),
  getNextPageParam: (lastPage) => lastPage.nextPage,
});`,
      },

      // Prefetching
      {
        type: "text",
        content: "6️⃣ **Prefetching Data for Faster UI Navigation**",
      },
      {
        type: "code",
        content: `queryClient.prefetchQuery({
  queryKey: ["users"],
  queryFn: () => axios.get("/api/users").then(res => res.data),
});`,
      },

      // Background Refetch
      {
        type: "text",
        content: "7️⃣ **Background Refetching for Fresh Data**",
      },
      {
        type: "text",
        content: "React Query automatically refetches data when:",
      },
      {
        type: "text",
        content:
          "- Browser window is refocused\n- Network reconnects\n- Stale time expires",
      },
      {
        type: "code",
        content: `const { data } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  staleTime: 1000 * 60, // 1 minute
});`,
      },

      // Devtools
      {
        type: "text",
        content: "8️⃣ **React Query DevTools for Debugging**",
      },
      {
        type: "code",
        content: `import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

<QueryClientProvider client={queryClient}>
  <YourApp />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>`,
      },

      // Conclusion
      {
        type: "text",
        content:
          "🎯 **Conclusion**: React Query transforms how you handle server state in React. With features like caching, mutation handling, pagination, retries, and automatic background refetching, it removes complexity and improves performance dramatically. Whether you're building dashboards, SaaS apps, or microservice-based web apps — React Query is essential for production-grade React development.",
      },
    ],
  },
  {
    id: "authjs-nextjs-authentication",
    title: "Authentication in Next.js Using Auth.js",
    excerpt:
      "Learn how to implement secure authentication in Next.js using Auth.js with credentials, OAuth, JWT, middleware protection, and route-based authorization.",
    date: "2025-11-27",
    content: [
      {
        type: "text",
        content:
          "🚀 **Overview**: Auth.js (formerly NextAuth.js) provides a simple, secure, and customizable authentication system for Next.js applications. Whether you want credentials login, OAuth providers like Google/GitHub, or full JWT-based sessions—Auth.js makes it incredibly easy with a plug-and-play architecture.",
      },

      {
        type: "text",
        content: "📌 **Why Auth.js?**",
      },
      {
        type: "text",
        content:
          "- Secure and battle-tested authentication\n- Supports Credentials, OAuth, Magic Links, and SSO\n- Works with both JWT and Database sessions\n- Perfectly integrates with Next.js Route Handlers & Middleware\n- Zero API boilerplate—Auth.js auto-generates them",
      },

      {
        type: "text",
        content: "1️⃣ **Install Dependencies**",
      },
      {
        type: "code",
        content: `npm install next-auth bcrypt`,
      },

      {
        type: "text",
        content:
          "2️⃣ **Create Auth.js Route Handler** (`src/app/api/auth/[...nextauth]/route.ts`)",
      },
      {
        type: "code",
        content: `import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { db } from "@/lib/db"; // example DB

export const { handlers, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});`,
      },

      {
        type: "text",
        content:
          "3️⃣ **Using the `auth()` Helper to Protect Server Components**",
      },
      {
        type: "code",
        content: `import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) redirect("/login");

  return <h1>Welcome, {session.user.name}</h1>;
}`,
      },

      {
        type: "text",
        content:
          "4️⃣ **Protecting API Routes with Middleware** (`middleware.ts`)",
      },
      {
        type: "code",
        content: `import { auth } from "next-auth";

export default auth((req) => {
  // Block unauthenticated users
  if (!req.auth) {
    return Response.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/api/protected/:path*"],
};`,
      },

      {
        type: "text",
        content: "5️⃣ **OAuth Example (Google Provider)**",
      },
      {
        type: "code",
        content: `import GoogleProvider from "next-auth/providers/google";

providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID!,
    clientSecret: process.env.GOOGLE_SECRET!,
  }),
],`,
      },

      {
        type: "text",
        content: "6️⃣ **Client-Side Authentication Hooks**",
      },
      {
        type: "code",
        content: `import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      {session ? (
        <>
          <p>Hello {session.user.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </nav>
  );
}`,
      },

      {
        type: "text",
        content:
          "🎯 **Conclusion**: Auth.js is one of the most powerful and developer-friendly authentication libraries for Next.js. With minimal setup, it gives you secure credential login, OAuth support, JWT sessions, and full route protection across both server and client components. It’s an essential tool for building modern, secure full-stack applications.",
      },
    ],
  },
];

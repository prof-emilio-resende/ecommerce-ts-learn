# Ecommerce Lab — Learning Project

Hello — welcome! This repository is a small lab e-commerce project created for learning TypeScript and testing with Jest. Contributions and collaboration are welcome — please open issues or PRs.

## Quick setup (TypeScript + Jest)

Run these commands on Linux:

1. Initialize npm
```bash
npm init -y
```

2. Install dev dependencies
```bash
npm install --save-dev typescript ts-node @types/node jest ts-jest @types/jest
```

3. Create TypeScript config
```bash
npx tsc --init
```

4. Initialize ts-jest config
```bash
npx ts-jest config:init
```

5. Create source folder and example file
```bash
mkdir -p src
printf "export const hello = () => 'hello';\n" > src/index.ts
```

6. Add useful scripts to package.json (example)
```json
"scripts": {
  "build": "tsc",
  "dev": "ts-node src/index.ts",
  "test": "jest --coverage",
  "test:watch": "jest --watch"
}
```

7. Run tests
```bash
npm test
```

Enjoy experimenting and learning!
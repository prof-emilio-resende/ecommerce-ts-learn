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
  "test:watch": "jest --watch",
  "lint": "eslint . --ext .ts"
}
```

7. Run tests
```bash
npm test
```

Enjoy experimenting and learning!

## Notes about tsconfig.json (changes made)

Below is a minimal set of tsconfig.json options commonly adjusted for a Node + Jest + TypeScript setup. If these are the changes you made, include them in your tsconfig.json; otherwise paste your actual tsconfig.json and I will update this section to match exactly.

Example tsconfig.json changes:
```json
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "CommonJS",
    "moduleResolution": "node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowJs": false,
    "noImplicitAny": true,
    "sourceMap": true
  },
  "include": ["src", "__tests__"],
  "exclude": ["node_modules", "dist"]
}
```

## VS Code configuration

Add the following .vscode files to improve the developer experience (debugging, recommended extensions, workspace settings). These are optional but recommended for consistent behaviour across contributors.

- .vscode/settings.json — prefer workspace TypeScript, hide build artifacts, and give Jest the path.
- .vscode/launch.json — debug configuration for running the TypeScript entry point with ts-node.
- .vscode/extensions.json — recommended extensions for the project.

Example files to add (place under .vscode/):

````json
// filepath: /home/murta/Projects/fs/a3/ecommerce/.vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.formatOnSave": true,
  "files.exclude": {
    "dist": true,
    "coverage": true,
    "node_modules": true
  },
  "jest.jestCommandLine": "npm test --",
  "eslint.validate": ["javascript", "typescript"]
}
`````

What these do (short):
- target/module/moduleResolution: compile for Node + CommonJS modules.
- outDir/rootDir: keep compiled files in dist and source in src.
- strict / noImplicitAny / forceConsistentCasingInFileNames: enable safer typing and consistent imports.
- esModuleInterop / resolveJsonModule: ease interop with CommonJS and import JSON.
- include/exclude: ensure tests and source are compiled while ignoring node_modules and build output.

If you want this README to reflect the exact changes you made, paste the contents of your tsconfig.json or give permission to read it and I will update this section accordingly.

// filepath: /home/murta/Projects/fs/a3/ecommerce/.vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug (ts-node)",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "node",
      "runtimeArgs": [
        "-r",
        "ts-node/register",
        "-r",
        "tsconfig-paths/register"
      ],
      "args": ["${workspaceFolder}/src/index.ts"],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    },
    {
      "name": "Debug (compiled)",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/dist/index.js",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal"
    }
  ]
}
```

This is the code block that represents the suggested code change:
```json
// filepath: /home/murta/Projects/fs/a3/ecommerce/.vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "orta.vscode-jest"
  ]
}
```

This is the code block that represents the suggested code change:
```typescript
// filepath: /home/murta/Projects/fs/a3/ecommerce/jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
};
```

This is the code block that represents the suggested code change:
```markdown
// filepath: /home/murta/Projects/fs/a3/ecommerce/package.json
{
  "scripts": {
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "lint": "eslint . --ext .ts"
  }
}
```
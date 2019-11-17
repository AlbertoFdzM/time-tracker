# Build an App with Electron and TypeScript - Getting Started

First, install TypeScript in the project's directory:
```bash
npm i -D typescript
```
<small>_**Note:** same as `npm install --save-dev typescript`_</small>

**`/tsconfig.json`**
```json
{
  "compilerOptions": {
    "incremental": true,
    "target": "es6",
    "module": "commonjs",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dir",
    "rootDir": "./src",
    "composite": true,
    "isolatedModules": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
<small>_*Note:* [TypeScript config documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)_</small>

TSLint will help to maintain code style:
```bash
npm i -D tslint
```

**`/tslint.json`**
```json
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"]
}
```

Time to install Electron:
```bash
npm i -D electron
```

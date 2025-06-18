# TypeScript 의 이해

## 참조사이트

- https://www.typescriptlang.org/
- https://www.typescriptlang.org/play (에뮬레이터)

## 2. TypeScript 란?

- `javaScript 에 데이터 종류(Data type)을 정의하는 언어`
- 타입스크립트 파일은 js 가 아니라서 웹브라우저 및 Node.js 에서 실행안됨.
- 타입스크립트로 작성하면 자동으로 js 파일로 번역되어진다.
- 그 결과로 만들어진 js 를 실행한다.

## 3. TypeScript 특징

- 코딩 중에 오류를 발견하기 쉽다. (디버깅이 수월하다.)
- js 는 코딩 중에 오류를 발견하기 어렵다. (심각한 문제 발생함)

## 4. TypeScript 프로젝트 셋팅

- Node 를 설치하고 나면 자동으로 `npm` 이 설치됩니다.
- npm : Node Package Manager (라이브러리 - 소스묶음)
- https://www.npmjs.com/
- 라이브러리 설치 및 제거, 업데이트 : npm, yarn, pnpm

```bash
npm -v
```

### 4.1. 반드시 한번만 셋팅한다.

- TypesScript 개발 셋팅

```bash
npm i -g typescript
tsc -v
```

### 4.2. 나의 프로젝트에 TypeScript 로 설정하기

- npm 초기화 하겠다.

```bash
npm init
```

## 5. TypeScript 테스트

- src 폴더 생성 : source 라는 의미
- src/index.ts 파일 생성

```ts
console.log("Hello");
const num: number = 1;
```

```bash
tsc src/index.ts
```

```bash
node src/index.js
```

## 6. 실행의 과정

- tsc 명령어 : TypeScripet Compile
- `tsc 경로/파일명.ts` ===> `node 경로/파일명.js`

- 위의 2과정을 하나로 실행가능하도록 지원하는 npm

```bash
npm i -g tsx
tsx -v
tsx src/index.ts
```

## 7. TypeScript 컴파일러에 옵션 설정하기

- ts 생성 > 컴파일러 실행 > js 생성
- 대표적 js 생성시 옵션들 (https://www.typescriptlang.org/tsconfig/)
- `tsconfig.json` : 타입스크립트 컴파일 환경 설정 파일 생성
- tsconfig.json 자동생성하기

```bash
tsc --init
```

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "libReplacement": true,                           /* Enable lib replacement. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "rewriteRelativeImportExtensions": true,          /* Rewrite '.ts', '.tsx', '.mts', and '.cts' file extensions in relative import paths to their JavaScript equivalent in output files. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "noUncheckedSideEffectImports": true,             /* Check side effect imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "isolatedDeclarations": true,                     /* Require sufficient annotation on exports so other tools can trivially generate declaration files. */
    // "erasableSyntaxOnly": true,                       /* Do not allow runtime constructs that are not part of ECMAScript. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "strictBuiltinIteratorReturn": true,              /* Built-in iterators are instantiated with a 'TReturn' type of 'undefined' instead of 'any'. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

### 7.1. include 옵션

- 여러 개의 ts 파일을 한번에 js 파일로 만들기

```json
{
  "include": ["src/**/*"]
}
```

### 7.2. target 옵션

- js 가 만들어진 버전 지정
- ECMAScript 5 버전으로 js 생성

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "es5"
  }
}
```

- 최신 ECMAScript 버전으로 생성

### 7.3. module 옵션

- 파일 간의 겹침 방지 (파일 기반의 Scope 관리)
- commonjs 방식 (Node.js 의 Default 방식)
- src/hello.ts 생성

```ts
export const hello = () => {
  console.log("안녕");
};
```

- src/index.ts

```ts
import { hello } from "./hello";
hello();
```

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs"
  }
}
```

- module 을 ESNext 로 설정

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext"
  }
}
```

### 7.5. outDir 옵션

- js 파일이 특정 폴더에 보관되길 지정

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist"
  }
}
```

### 7.6. strict 옵션

- 얼마나 엄격하게 문법 체크를 할 것인가?
- 데이터 타입의 종류도 체크를 할 것인가?

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist",
    "strict": true
  }
}
```

- msg 타입 오류 체크됨

```ts
export const hello = (msg) => {
  console.log(msg);
};

export const hello = (msg: string) => {
  console.log(msg);
};
```

### 7.7. moduleDetction 옵션

- `ts 파일간 중복 선언 에러` 제어
- TypeScript 는 기본적으로 전역 모듈로 인식함.

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist",
    "strict": true,
    "moduleDetection": "force"
  }
}
```

## 8. tsconfig.json 정리

- React 프로젝트, Next 프로젝트, Express 프로젝트, Nest 프로젝트 등
- 모두 TypeScript 로 작성 권장됨.
- tsconfig.json 이 상당히 중요합니다.

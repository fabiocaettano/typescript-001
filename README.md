
# NodeJs



# TypeScript

Instalar TypeScript : 

``` bash
npm i typescript --save-dev
npx tsc --init
```


Alterar arquivo *tsconfig.json*:

``` json
{
  "compilerOptions": {
    "incremental": true,
    "outDir": "./dir",
    ...   
  },
  "include" : [
    "src/**/*.ts"
  ],  
}
```

Mais informações para configuração: https://aka.ms/tsconfig

```
npm i tslint --save-dev
npx tslint --init
```

# JEST

```
npm i -D jest @types/jest ts-node --save-dev
npm i -D @swc/jest @swc/cli @swc/core
npx jest --init
```

export default {
  transform: {
    "^.+\.(t|j)sx?$": ["@swc/jest"],
  },
  ....  
}

# dashboard-react-ts-com-api
## Dashboard com React TypeScript consumindo dados de api PHP

## Primeiros passos
Primeiro passo é baixar os pacotes do React com TypeScript, para isso usamos p seguinte comando no terminal:

```Comando Terminal
npx create-react-app my-app --template typescript
```

Após baixar os pacotes do React, agora iremos criar a estrutura de nossos diretórios, ficando algo assim

### <b>Src</b>: 
    - Pages
        (Aqui irá ficar nossas páginas)
    - Components
        (Aqui ficará nossos componentes, como grids, buttons e etc..)

Não sei se observaram, mas os aquivos logo.svg e css que veio por padrão, eu exclui. No Arquivo App.tsx, eu removi os elementos que vieram como padrão, pois, será inserido o react-router-dorm.

## Segundo parte 

Instalamos agora dentro de nosso projeto alguns pacotes para construção de componetes e rotas, abaixo a lista desses componentes.

- Styled Components

```Comando Terminal
npm install styled-components
```
Importante adicionar os types abaixo

```Comando Terminal
npm install @types/styled-components
```

- React-router-dom 

```
npm install react-router-dom
```

Para não ficar extenso esse arquivo confira os próximos passos no do diretório tutoriais.
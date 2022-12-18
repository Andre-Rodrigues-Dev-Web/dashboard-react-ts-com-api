# Estrutura do App component

Abaixo temos a estrutura básica de nosso componente App.js
```App.js
import React from 'react';
import { Routes, Route} from "react-router-dom";

//Import login e dashboard
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

//Crie um componente com as rotas da aplicação
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
```
## Explicação sobre os componentes do react-router-dom

### Routes

O Routes é um componente responsável por informar a nossa aplicação que teremos um roteamento dos nossos componentes, por conta disso ele ficará como container do <Route>

### Route

Route é um componente que associa a rota ao componente. Nele é passado três parâmetros: element, path e index. O parâmetro element recebe o componente que precisa ser exibido ao acessar a rota. O parâmetro path é o caminho na URL que precisa ser acessado para mostrar o componente, definido pelo parâmetro component. O parâmetro index determina qual o componente vai ser exibido apenas se a rota for igual ao definido entre aspas, como por exemplo: se a rota for exatamente "/".
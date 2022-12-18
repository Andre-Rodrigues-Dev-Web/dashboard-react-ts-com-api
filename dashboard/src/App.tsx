import React from 'react';
import { Routes, Route} from "react-router-dom";

//Import login e dashboard
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

//Crie um componente com as rotas da aplicação
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} index />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

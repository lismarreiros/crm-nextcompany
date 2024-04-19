import React from 'react';
//import ClientForm from '@/components/forms/clientForm/ClientForm';
import DashboardPage from './pages/dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/detail';
import ClientPage from './pages/clients/ClientPage';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={<ClientForm/>} /> */}
          <Route path='/' element={<DashboardPage />} />
          <Route path='/detalhe' element={<DetailPage/>} />
          <Route path='/clientes' element={<ClientPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

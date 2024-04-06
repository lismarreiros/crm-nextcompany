import React from 'react';
//import ClientForm from '@/components/forms/clientForm/ClientForm';
import DashboardPage from './pages/dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/detail';

function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <Routes>
          {/* <Route path='/' element={<ClientForm/>} /> */}
          <Route path='/' element={<DashboardPage />} />
          <Route path='/detalhe' element={<DetailPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

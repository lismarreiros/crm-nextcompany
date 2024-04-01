import React from 'react';
import ClientForm from '@/components/forms/clientForm/ClientForm';
import DashboardPage from './pages/dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<ClientForm/>} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

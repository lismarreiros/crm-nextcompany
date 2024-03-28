import React from 'react';
import ClientForm from '@/components/forms/clientForm/ClientForm';
import DashboardPage from './pages/dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div draggable='true'>
          <Routes>
            <Route path='/' element={<ClientForm/>} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;

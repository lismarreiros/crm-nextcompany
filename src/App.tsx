import React from 'react';
import './App.css';
import ClientForm from './components/forms/clientForm/ClientForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div draggable='true'>
          <ClientForm/>
        </div>
      </header>
    </div>

  );
}

export default App;

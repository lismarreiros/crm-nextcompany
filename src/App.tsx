import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/detail';
import ClientPage from './pages/clients/ClientPage';
import NavBar from './components/navbar/NavBar';
import ProductPage from './pages/products/ProductPage';
import OpportunityFlow from './pages/configurations/OpportunityFlow';
import ActivityType from './pages/configurations/activities/ActivityType';
import ActivityBranch from './pages/configurations/activities/ActivityBranch';
import Source from './pages/configurations/source/Source';
import LeadPage from './pages/leads/LeadPage';
import DashboardPage from './pages/dashboard/dashboard';

function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/detalhe' element={<DetailPage/>} />
          <Route path='/clientes' element={<ClientPage/>} />
          <Route path='/produtos'element={<ProductPage/>} />
          <Route path='/fluxo' element={<OpportunityFlow/>} />
          <Route path='/tipoatividade' element={<ActivityType />} />
          <Route path='/ramoatividade' element={<ActivityBranch/>} />
          <Route path='/fonte' element={<Source />} />
          <Route path='/negocios' element={<LeadPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

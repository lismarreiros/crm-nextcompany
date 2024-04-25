import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/detail';
import ClientPage from './pages/clients/ClientPage';
import NavBar from './components/navbar/NavBar';
import ProductPage from './pages/products/ProductPage';
import OpportunityFlow from './pages/configurations/flow/OpportunityFlow';
import ActivityType from './pages/configurations/activities/type/ActivityType';
import ActivityBranch from './pages/configurations/activities/branch/ActivityBranch';
import Source from './pages/configurations/source/Source';
import LeadPage from './pages/leads/LeadPage';
import DashboardPage from './pages/dashboard/dashboard';
import { OpportunityFlowProvider } from './pages/configurations/flow/OpportunityFlowContext';
import { ActivityBranchProvider } from './pages/configurations/activities/branch/ActivityBranchContext';
import { ActivityTypeProvider } from './pages/configurations/activities/type/ActivityTypeContext';
import { SourceContextProvider } from './pages/configurations/source/SourceContext';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <OpportunityFlowProvider>
              <DashboardPage />
            </OpportunityFlowProvider>
          } />

          <Route path='/fluxo' element={
            <OpportunityFlowProvider>
              <OpportunityFlow/>
            </OpportunityFlowProvider>
          } />

          <Route path='/clientes' element={
            <ActivityBranchProvider>
              <ClientPage/>
            </ActivityBranchProvider>
          } />

          <Route path='/ramoatividade' element={
            <ActivityBranchProvider>
              <ActivityBranch/>
            </ActivityBranchProvider>
          } />
          
          <Route path='/produtos'element={<ProductPage/>} />

          <Route path='/fonte' element={
            <SourceContextProvider>
              <Source />
            </SourceContextProvider>
          } />
          
          <Route path='/detalhe/:leadId' element={
            <ActivityTypeProvider>
              <SourceContextProvider>
                <DetailPage/>
              </SourceContextProvider>
            </ActivityTypeProvider>
          } />

          <Route path='/tipoatividade' element={
            <ActivityTypeProvider>
              <ActivityType />
            </ActivityTypeProvider>
          } />
          
          <Route path='/negocios' element={<LeadPage/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

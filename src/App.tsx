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
// import { OpportunityFlowProvider } from './pages/configurations/flow/OpportunityFlowContext';
// import { ActivityBranchProvider } from './pages/configurations/activities/branch/ActivityBranchContext';
// import { ActivityTypeProvider } from './pages/configurations/activities/type/ActivityTypeContext';
// import { SourceContextProvider } from './pages/configurations/source/SourceContext';
import Login from './pages/login/Login';
import { AuthProvider } from './context/AuthContext';

const PrivateRoutes = () => (
  <Routes>
    <Route path='/' element={ <DashboardPage /> } />
    <Route path='/fluxo' element={ <OpportunityFlow/> } />
    <Route path='/clientes' element={ <ClientPage/> } />
    <Route path='/ramoatividade' element={ <ActivityBranch/> } />
    <Route path='/produtos'element={<ProductPage/>} />
    <Route path='/fonte' element={ <Source /> } />
    <Route path='/detalhe/:leadId' element={ <DetailPage/> } />
    <Route path='/tipoatividade' element={ <ActivityType /> } />        
    <Route path='/negocios' element={<LeadPage/>} />
  </Routes>
);

export default function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path='/*' element={
              <Login>
                <PrivateRoutes />
              </Login>
            }/>
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}


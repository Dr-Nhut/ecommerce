import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import ScrollToTop from '~/components/Common/ScrollToTop';
import { AdminLayout } from '~/components/Admin';
import RequireAdmin from './components/Admin/RequireAdmin';
function App() {
  const handlePublicPage = () => {
    return publicRoutes.map((route, index) => {
      let Layout, sidebarType;
      if (route.layout !== undefined) {
        Layout = route.layout.name;
        switch(route.layout.comp) {
          case 0:
          case 1:
            sidebarType = route.layout.comp;
            break;
          default: sidebarType =  null;
        }
          
      }
      else {
        Layout = DefaultLayout;
      }
      const Page = route.component;
      return <Route key={index} path={route.path} element={<Layout type={sidebarType}><Page /></Layout>}></Route>
    })
  }

  const handlePrivatePage = () => {
    return privateRoutes.map((route, index) => {
      const Layout = AdminLayout;
      const Page = route.component;
      return <Route key={index} path={route.path} element={<RequireAdmin><Layout><Page /></Layout></RequireAdmin>}></Route>
    })
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {handlePublicPage()}
          {handlePrivatePage()}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

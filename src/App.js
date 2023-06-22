import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import ScrollToTop from '~/components/Common/ScrollToTop';
import { AdminLayout } from '~/components/Admin';
function App() {

  const handlePublicPage = () => {
    return publicRoutes.map((route, index) => {
      let Layout, sidebarType;
      if (route.layout !== undefined) {
        Layout = route.layout.name;
        sidebarType = route.layout.comp;
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
      return <Route key={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
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

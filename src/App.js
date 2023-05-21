import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
function App() {
  const handlePublicPage = () => {
    return publicRoutes.map((route, index) => {
      const Layout = route.layout !== undefined ? route.layout : DefaultLayout;
      const Page = route.component;
      return <Route key={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
    })
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {handlePublicPage()}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

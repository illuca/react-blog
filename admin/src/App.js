import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import Login from 'pages/Login/Login';
import AdminIndex from 'pages/AdminIndex/AdminIndex';
import AddArticle from 'pages/AddArticle/AddArticle';

function Helper() {
  return useRoutes([
    {path: '/', element: <AdminIndex/>},
    {
      path: '/index', element: <AdminIndex/>, children: [
        {
          path: '',
          element: <AddArticle/>
        }
      ]
    },
    {path: '/login', element: <Login/>}
  ])
}

function App() {
  return (
    <Router>
      <Helper/>
    </Router>
  );
}

export default App;

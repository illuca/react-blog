import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import Login from 'pages/Login/Login';
import AdminIndex from 'pages/AdminIndex/AdminIndex';
import AddArticle from 'pages/AddArticle/AddArticle';
import ArticleList from './pages/ArticleList/ArticleList';

function Helper() {
  return useRoutes([
    {path: '/', element: <AdminIndex/>},
    {
      path: '/index', element: <AdminIndex/>, children: [
        {path: '', element: <AddArticle/>},
        {path: 'list', element: <ArticleList/>},
        {path: 'add', element: <AddArticle/>},
        {path: 'add/:id', element: <AddArticle/>},
      ]
    },
    {path: '/login', element: <Login/>}
  ]);
}

function App() {
  return (
    <Router>
      <Helper/>
    </Router>
  );
}

export default App;

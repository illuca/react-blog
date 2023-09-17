import './comm.css';
import ContentDetail from 'pages/ContentDetail/ContentDetail';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import Home from 'pages/Home/Home';


function Helper() {
  return useRoutes([
    ...['/', '/articles'].map((path) => {
      return {path: path, element: <Home/>}
    }),
    {path: '/article', element: <ContentDetail/>},
  ]);
}

function App() {
  return (
    <Router>
      <Helper></Helper>
    </Router>

  );
}

export default App;

import './comm.css';
import ContentDetail from 'pages/ContentDetail/ContentDetail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from 'pages/Home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/detail" element={<ContentDetail/>}/>
      </Routes>
    </Router>

  );
}

export default App;

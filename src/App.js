import './App.css';
import Header from './components/Header/Header';
import {Col, Row} from 'antd';
import ContentList from './components/ContentList/ContentList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Row className="main-page" justify="center">
        <Col className="main-page-left" xs={24} sm={24} md={16} lg={18} xl={14} >
          left
          <ContentList/>
        </Col>
        <Col className="main-page-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          right
        </Col>
      </Row>

    </div>
  );
}

export default App;

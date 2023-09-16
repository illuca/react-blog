import {Col, Row} from 'antd';
import Header from 'components/Header/Header';
import ContentList from 'components/ContentList/ContentList';
import Author from 'components/Author/Author';
import Footer from 'components/Footer/Footer';
import axios from 'axios';
import {useEffect, useState} from 'react';


const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:7001/default/articles')
      .then((res) => {
          setList(res.data);
        }
      );
  },[])

  return (
    <div className="App">
      <Header/>
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <ContentList list={list}/>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

export default Home;
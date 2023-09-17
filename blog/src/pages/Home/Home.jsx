import {Col, Row} from 'antd';
import Header from 'components/Header/Header';
import ContentList from 'components/ContentList/ContentList';
import Author from 'components/Author/Author';
import Footer from 'components/Footer/Footer';
import {useEffect, useState} from 'react';
import {getArticlesByTypeId} from 'services/services';
import {useLocation} from 'react-router-dom';


const Home = () => {
  const [list, setList] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeId = searchParams.get('typeId');

  useEffect(() => {
    getArticlesByTypeId(typeId).then((res)=>{
      setList(res.data);
    })
  },[])

  useEffect(() => {
    getArticlesByTypeId(typeId).then((res)=>{
      setList(res.data);
    })
  },[typeId])

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
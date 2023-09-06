import {Col, Row} from 'antd';
import Header from 'components/Header/Header';
import ContentList from 'components/ContentList/ContentList';
import Author from 'components/Author/Author';
import Footer from 'components/Footer/Footer';


const Home = () => {
  return (
    <div className="App">
      <Header/>
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <ContentList/>
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
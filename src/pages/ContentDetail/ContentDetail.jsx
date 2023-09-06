import './ContentDetail.css'
import {Breadcrumb, Col, Row} from 'antd';
import {CalendarOutlined, FolderOutlined} from '@ant-design/icons';
import 'comm.css';
import Header from 'components/Header/Header';
import Author from 'components/Author/Author';
import Footer from 'components/Footer/Footer';

const ContentDetail = () => {
  return (
    <div>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>Article</Breadcrumb.Item>
                <Breadcrumb.Item>Content</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                Data Compression
              </div>

              <div className="list-icon center">
                <span><CalendarOutlined/> 2023 Sep 7</span>
                <span><FolderOutlined/>Article</span>
              </div>

              <div className="detailed-content" >
                The big companies make efforts to develop green energy not because they love the earth. But the electricity is expensive. For labor cost, you can fire them but for electricity, you have to mantain the equipment every month. The clients’ data is stored in those equipments.
              </div>

            </div>

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

export default ContentDetail;
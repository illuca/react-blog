import './ContentDetail.css'
import {Breadcrumb, Col, Row} from 'antd';
import {CalendarOutlined, FolderOutlined} from '@ant-design/icons';
import 'comm.css';
import Header from 'components/Header/Header';
import Author from 'components/Author/Author';
import Footer from 'components/Footer/Footer';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';


const ContentDetail = () => {
  let markdown = '# course ' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor is a simple markdown editor. \n\n' +
    '**bold**\n\n' +
    '*italic*`\n\n' +
    '***bold italic***\n\n' +
    '~~deleted~~ \n\n' +
    '# p02:Hello World Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'
  return (
    <div>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
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
              <div className="detailed-content">
                <ReactMarkdown
                  children={markdown}
                  escapeHtml={false}
                />
              </div>
            </div>

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <div className="detailed-nav comm-box">
            <div className="nav-title">outline</div>
            <MarkNav
              className="article-menu"
              source={markdown}
              ordered={false}
            />
          </div>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

export default ContentDetail;
import './ContentDetail.css'
import {Affix, Breadcrumb, Col, Row} from 'antd';
import {CalendarOutlined, FolderOutlined} from '@ant-design/icons';
import 'comm.css';
import Header from 'components/Header/Header';
import Author from 'components/Author/Author';
import Footer from 'components/Footer/Footer';
import 'markdown-navbar/dist/navbar.css';
import {marked} from 'marked';
import {formatDate} from 'utils/utils';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from 'components/tocify.tsx'

const ContentDetail = (
) => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: 'data compression',
    create_time: 0,
    content: '',
    type_name: '',
  });

  const renderer = new marked.Renderer();
  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };


  useEffect(() => {
    axios.get(`http://localhost:7001/default/article/${id}`)
      .then((res) => {
        const article = res.data[0];
        setArticle(article);
        hljs.highlightAll();
      });
  }, [id]);


  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: true,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,

    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });


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
                {article?.title}
              </div>

              <div className="list-icon center">
                <span><CalendarOutlined/>{formatDate(article?.create_time)}</span>
                <span><FolderOutlined/>{article?.type_name}</span>
              </div>
              <div className="detailed-content" dangerouslySetInnerHTML={{__html: marked(article.content)}}>
              </div>
            </div>

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">Outline</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>

            </div>
          </Affix>

          {/*<Affix offsetTop={5}>*/}
          {/*  <div className="detailed-nav comm-box">*/}
          {/*    <div className="nav-title">outline</div>*/}
          {/*    <MarkNav*/}
          {/*      className="article-menu"*/}
          {/*      source={article?.content}*/}
          {/*      ordered={false}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</Affix>*/}
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default ContentDetail;
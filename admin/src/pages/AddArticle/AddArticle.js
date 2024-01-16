import React, {useEffect, useState} from 'react';
import {Row, Col, Input, Select, Button, DatePicker, message} from 'antd';
import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import 'pages/AddArticle/AddArticle.css';
import {addArticle, getArticleById, getTypeInfo, updateArticle} from 'services/services';
import {status} from 'utils/constants';
import {useLocation, useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';


const {Option} = Select;
const {TextArea} = Input;

export default function AddArticle() {
  const navigate = useNavigate();
  const location = useLocation();
  const [article, setArticle] = useState({
    id: location.state?.id || 0, // id=0 means add, otherwise meaning modify
    title: '',
    typeId: undefined,
    content: '',
    contentMarkdown: 'preview',
    introduction: '',
    introductionMarkdown: 'waiting to be edited',
    createTime: undefined,
    modifyTime: undefined,
  });
  const [typeInfo, setTypeInfo] = useState([]); // all possible article types

  useEffect(() => {
    handleGetTypeInfo();
    article.id && article.id !== 0 && handleGetArticleById(article.id);
  }, []);

  const renderer = new marked.Renderer();
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

  function handleGetArticleById(id) {
    console.log('id', id);
    if (!id) {
      return;
    }
    getArticleById(id).then(
      res => {
        const data = res.data.data[0];
        setArticle({
          ...article,
          title: data.title,
          content: data.content,
          contentMarkdown: marked(data.content),
          introduction: data.introduction,
          introductionMarkdown: marked(data.introduction),
          createTime: dayjs(data.create_time),
          typeId: data.type_id
        });
        console.log(data.create_time);
      }
    );
  }

  function handleGetTypeInfo() {
    getTypeInfo().then(
      res => {
        if (res.data.data === status.NOT_SIGNED_IN) {
          navigate('/login');
        } else {
          setTypeInfo(res.data.data);
        }
      }
    );
  }

  const changeContent = (e) => {
    setArticle({
      ...article,
      content: e.target.value,
      contentMarkdown: marked(e.target.value)
    });
  };

  const changeIntroduction = (e) => {
    setArticle({
      ...article,
      introduction: e.target.value,
      introductionMarkdown: marked(e.target.value)
    });
  };

  function selectedTypeHandler(v) {
    setArticle({
      ...article,
      typeId: v
    });
  }

  function checkEmpty() {
    if (!article.typeId) {
      message.error('Article type cannot be empty.');
      return false;
    } else if (!article.title) {
      message.error('Article title cannot be empty.');
      return false;
    } else if (!article.content) {
      message.error('Article content cannot be empty.');
      return false;
    } else if (!article.introduction) {
      message.error('Introduction cannot be empty.');
      return false;
    } else if (!article.createTime) {
      message.error('Create time cannot be empty.');
      return false;
    }
    message.success('Inspection passed!');
    return true;
  }

  function createArticle(id) {
    return {
      id: id,
      title: article.title,
      type_id: article.typeId,
      content: article.content,
      introduction: article.introduction,
      create_time: article.createTime
    };
  }

  function handleAddArticle() {
    if (!checkEmpty()) {
      return;
    }
    const data = createArticle();
    addArticle(data).then(res => {
        if (res.data.isSuccess) {
          message.success('Add article successfully.');
          setArticle({
            ...article,
            id: res.data.insertId
          });
        } else {
          message.error('Fail to add article.');
        }
      }
    );
  }

  function handleUpdateArticle() {
    if (!checkEmpty()) {
      return;
    }
    const data = createArticle(article.id);
    updateArticle(data).then(res => {
        if (res.data.isSuccess) {
          message.success('Update article successfully.');
        } else {
          message.error('Fail to update article.');
        }
      }
    );
  }

  return <div>
    <Row gutter={5}>
      <Col span={18}>
        <Row gutter={10}>
          <Col span={16}>
            <Input
              value={article?.title}
              placeholder="Blog title"
              onChange={e => {
                setArticle({
                  ...article,
                  title: e.target.value
                });
              }}
              size="large"/>
          </Col>
          <Col span={4}>
            &nbsp;
            <Select value={article.typeId} style={{width: '100px'}} onChange={selectedTypeHandler}>
              {
                typeInfo?.map((item, index) => {
                  return (<Option key={index} value={item.id}>{item.type_name}</Option>);
                })
              }
            </Select>
          </Col>
        </Row>
        <br/>
        <Row gutter={10}>
          <Col span={12}>
            <TextArea
              value={article?.content}
              className="markdown-content"
              rows={35}
              placeholder="Article content"
              onChange={changeContent}
            />
          </Col>
          <Col span={12}>
            <div
              className="show-html"
              dangerouslySetInnerHTML={{__html: article.contentMarkdown}}>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row>
          <Col span={24}>
            <Button size="large" onClick={handleUpdateArticle}>Store</Button>&nbsp;
            <Button type="primary" size="large" onClick={handleAddArticle}>Release</Button>
            <br/>
          </Col>
          <Col span={24}>
            <br/>
            <TextArea
              rows={4}
              value={article?.introduction}
              placeholder="Article Introduction"
              onChange={changeIntroduction}
            />
            <br/><br/>
            <div
              className="introduce-html"
              dangerouslySetInnerHTML={{__html: 'Article Introduction：' + article.introductionMarkdown}}>
            </div>
          </Col>
          <Col span={12}>
            <div className="date-select">
              <DatePicker
                onChange={(date, dateString) => {
                  setArticle({
                    ...article,
                    createTime: dateString
                  });
                }}
                placeholder="release time"
                size="large"
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>;

}
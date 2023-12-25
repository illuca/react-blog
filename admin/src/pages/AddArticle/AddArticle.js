import React, {useState} from 'react';
import {Row, Col, Input, Select, Button, DatePicker} from 'antd'
import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
import 'pages/AddArticle/AddArticle.css'


const {Option} = Select;
const {TextArea} = Input

export default function AddArticle() {
  const [article, setArticle] = useState({
    id: 0, // id=0 means add, otherwise meaning modify
    title: '',
    content: '',
    markdown: 'preview',
    introduction: '',
    introductionMarkdown: 'waiting to be edited',
    releaseDate:undefined,
    updateDate:undefined,
    typeInfo:[],
    selectedType:1
  })

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
  const changeContent = (e) => {
    setArticle({
      ...article,
      content: e.target.value,
      markdown: marked(e.target.value)
    })
  }

  const changeIntroduce = (e) => {
    setArticle({
      ...article,
      introduction: e.target.value,
      introductionMarkdown: marked(e.target.value)
    })
  }

  return <div>
    <Row gutter={5}>
      <Col span={18}>
        <Row gutter={10}>
          <Col span={20}>
            <Input
              placeholder="Blog title"
              size="large"/>
          </Col>
          <Col span={4}>
            &nbsp;
            <Select defaultValue="Sign Up" size="large">
              <Option value="Sign Up">tutorial</Option>
            </Select>
          </Col>
        </Row>
        <br/>
        <Row gutter={10}>
          <Col span={12}>
            <TextArea
              className="markdown-content"
              rows={35}
              placeholder="Article content"
              onChange={changeContent}
            />
          </Col>
          <Col span={12}>
            <div
              className="show-html"
              dangerouslySetInnerHTML={{__html: article.markdown}}>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row>
          <Col span={24}>
            <Button size="large">Store</Button>&nbsp;
            <Button type="primary" size="large">Release</Button>
            <br/>
          </Col>
          <Col span={24}>
            <br/>
            <TextArea
              rows={4}
              placeholder="Article Introduction"
              onChange={changeIntroduce}
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
                placeholder="release date"
                size="large"
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>

}
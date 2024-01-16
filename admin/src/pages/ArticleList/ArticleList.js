import React, {useState, useEffect} from 'react';
import './ArticleList.css';
import {Button, Col, Modal, List, message, Row} from 'antd';
import {deleteArticle, getArticleList} from 'services/services';
import {useNavigate} from 'react-router-dom';

const {confirm} = Modal;


export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const navigate = useNavigate();

  const handleGetArticleList = () => {
    getArticleList().then(res => {
        setArticleList(res.data.list);
      }
    );
  };

  function handleDeleteArticle(id) {
    confirm({
      title: 'Are you sure to delete the article?',
      content: 'If you click OK, the article will be deleted and cannot be recover.',
      onOk() {
        deleteArticle(id).then(res => {
            message.success('The article is deleted successfully.');
            handleGetArticleList();
          }
        );
      }
    });

  }

  useEffect(() => {
    handleGetArticleList();
  }, []);

  function formatTime(time) {
    const date = new Date(time);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDay()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>title</b>
            </Col>
            <Col span={3}>
              <b>category</b>
            </Col>
            <Col span={3}>
              <b>create time</b>
            </Col>
            <Col span={3}>
              <b>view</b>
            </Col>
            <Col span={7}>
              <b>operation</b>
            </Col>
          </Row>

        }
        bordered
        dataSource={articleList}
        renderItem={item => (
          <List.Item>
            <Col span={8}>
              {item.title}
            </Col>
            <Col span={3}>
              {item.typeName}
            </Col>
            <Col span={3}>
              {formatTime(item.createTime)}
              {/*{dayjs(item.createTime,'%Y-%m-%d')}*/}
            </Col>
            <Col span={3}>
              {item.viewCount ? item.viewCount : 0}
            </Col>
            <Col span={7}>
              <Button type="primary" onClick={() => {
                navigate('/index/add/', {state: {id: item.id}});
              }}>modify</Button>&nbsp;
              <Button onClick={() => {
                handleDeleteArticle(item.id);
              }}>delete</Button>
            </Col>
          </List.Item>
        )}
      />

    </div>
  );

}

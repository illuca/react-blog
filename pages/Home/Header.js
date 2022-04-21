import {Row, Col, Menu} from 'antd'
import Icon from '@ant-design/icons'

const Header = () => {
    return (
        <div className={"header"}>
            <Row type={"flex"} justify={"center"}>
                <Col>
                    <span className={"header-logo"}>LOGOMYYY</span>
                    <span className={"header-text"}>My Blog</span>
                </Col>
            </Row>
        </div>
    )
}

export default Header;
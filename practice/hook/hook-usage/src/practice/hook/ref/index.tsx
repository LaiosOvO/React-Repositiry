import {Row,Col} from 'antd'
import RefDemo1 from "./RefDemo1";
import RefDemo2 from "./RefDemo2";

import Demo6 from './demo6'
import Demo7 from './demo7'

const Main:React.FC = ()=>{

    return (
        <div>
            <Row>
                <Col>
                    <RefDemo1 />
                </Col>
            </Row>

            <Row>
                <RefDemo2 />
            </Row>

            <Row>
                <Demo6 />
            </Row>

            <Row>
                <Demo7 />
            </Row>
        </div>
    )
}

export default Main;

// useRef() 场景
// 1 访问dom元素
// 2 嵌套场景 - 使用ref - 操纵dom
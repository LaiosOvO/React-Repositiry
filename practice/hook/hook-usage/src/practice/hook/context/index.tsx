import WrapperSection from "./WrapperSection";
import InnerSection1 from "./InnerSection1";

import {Row,Col} from 'antd'

const Main = ()=>{
    return (
        <WrapperSection>
            <Row gutter={24}>

                <Col>
                    <InnerSection1></InnerSection1>
                </Col>


            </Row>
        </WrapperSection>

    )
}

export default Main;
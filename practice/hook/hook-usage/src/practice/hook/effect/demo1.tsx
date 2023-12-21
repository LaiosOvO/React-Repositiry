import {useEffect, useState} from "react";
import {Col, Row} from "antd";

const Counter: React.FC =()=>{

    const [leftCount , setLeftCount] = useState<number>(0)
    const [rightCount , setRightCount] = useState<number>(0)


    useEffect( ()=>{
        const name = 'effect[1]'
        console.log("***********************")
        console.log(`from ${name} yo`)
        console.log(`left watcher from ${name}  ${leftCount}`)
        console.log(`right watcher from ${name}  ${rightCount}`)
        console.log("***********************")
    } )

    useEffect( ()=>{
        console.log('aaaaaaaaaaaaaaaa')
        console.log("empty array to watch")
        console.log('aaaaaaaaaaaaaaaa')
    } ,[])

    useEffect( ()=>{
        console.log("bbbbbbbbbbbbbbbbbbbbb")
        console.log("watch the rightCount")

        console.log("bbbbbbbbbbbbbbbbbbbbb")
    } , [rightCount] )



    return (
        <div>
            <Row gutter={30}>
                <Col>
                    <p>left count = {leftCount}</p>
                    <button onClick={()=>setLeftCount(leftCount+1)}>left+1</button>
                </Col>

                <Col>
                    <p>right count = {rightCount}</p>
                    <button onClick={()=>setRightCount(rightCount+1)}>right+1</button>
                </Col>
            </Row>
        </div>
    )
}


export default Counter;
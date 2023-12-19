import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import {getMenuFromUserInfo} from "../../../../api/tmp/mk.js";

const { Header, Content, Sider } = Layout;

import {UpCircleTwoTone } from '@ant-design/icons';

const MyMenu= ()=>{
    const payload = { token:"123",userId:123 }
    var item2 = getMenuFromUserInfo(payload)


    return (
        <Layout>
            <UpCircleTwoTone />
            <Sider width={200} className={"site-layout-background"}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={item2}
                />
            </Sider>

        </Layout>
    )
}

export default MyMenu;

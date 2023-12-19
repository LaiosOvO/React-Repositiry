import { DashboardOutlined, UserOutlined } from '@ant-design/icons';

export function getMenuFromUserInfo({ token , userId }){
    console.log("向后端传递用户信息{token/userId} --> 获取系统允许的菜单列表")

    const menuJson = [
        {
            "label": "Dashboard",
            "url": "/dashboard",
            // "icon": DashboardOutlined.icon
        },
        {
            "label": "Products",
            "url": "/products",
            // "icon": UserOutlined.icon
        },
        {
            "label": "Orders",
            "url": "/orders",
            // "icon": <SlidersTwoTone />
        },
        {
            "label": "Profile",
            "url": "/profile",
            // "icon": <ApiTwoTone />
        }
    ]

    return menuJson;
}
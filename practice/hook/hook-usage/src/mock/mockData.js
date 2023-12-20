import Mock from 'mockjs';

Mock.mock('/api/user',userInfo)


var userInfo = {
    "user": {
        "id": 1,
        "username": "张三",
        "email": "zhangsan@example.com",
        "age": 25,
        "gender": "男",
        "address": {
            "province": "广东省",
            "city": "深圳市",
            "district": "南山区",
            "street": "科技园路",
            "building": "科技大厦",
            "floor": 3,
            "room": "101"
        },
        "phone_numbers": [
            {
                "type": "家庭",
                "number": "0755-12345678"
            },
            {
                "type": "工作",
                "number": "0755-87654321"
            }
        ],
        "roles": [
            "管理员",
            "开发者"
        ],
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-02T00:00:00Z"
    }
}
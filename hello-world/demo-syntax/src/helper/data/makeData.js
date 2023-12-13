
export function mkUsers(){
    const user1 = {
        idCard: "123456789012345678",
        socialCreditCode: "91110101MA00000001",
        name: "张三",
        age: 25,
        address: {
            city: "北京",
            street: "朝阳路",
            postalCode: "100000"
        },
        hobbies: ["篮球", "游泳", "阅读"]
    };

    const user2 = {
        idCard: "234567890123456789",
        socialCreditCode: "91110101MA00000002",
        name: "李四",
        age: 30,
        address: {
            city: "上海",
            street: "南京路",
            postalCode: "200000"
        },
        hobbies: ["足球", "跑步", "旅游"]
    };

    const user3 = {
        idCard: "345678901234567890",
        socialCreditCode: "91110101MA00000003",
        name: "王五",
        age: 28,
        address: {
            city: "广州",
            street: "天河路",
            postalCode: "510000"
        },
        hobbies: ["羽毛球", "瑜伽", "摄影"]
    };

    const users = [user1, user2, user3];


    return users;
}
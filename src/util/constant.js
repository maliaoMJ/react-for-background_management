import { Icon, Tag, Button } from 'element-react'
// User View 
const UserColumns = [
    {
        label: "ID",
        prop: "id",
        width: 60,
        render: function (data) {
            return (
                <span>
                   {data.id}
                </span>
            )
        }
    },
    {
        label: "用户名",
        prop: "username",
        width: 150,
        render: function (data) {
            return (
                <span>
                    {data.username}
                </span>
            )
        }
    },
    {
        label: "邮箱",
        prop: "email",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.email}
                </span>
            )
        }
    },
    {
        label: "联系方式",
        prop: "phone",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.phone}
                </span>
            )
        }
    },
    {
        label: "注册时间",
        prop: "createTime",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.createTime}
                </span>
            )
        }
    },
    {
        label: "最近登录",
        prop: "updateTime",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.updateTime}
                </span>
            )
        }
    }
]

// 订单table
const OrderColumns = [
    {
        label: "订单号",
        prop: "orderNo",
        width: 150,
        render: function (data) {
            return (
                <span>
                    {data.orderNo}
                </span>
            )
        }
    },
    {
        label: "收件人",
        prop: "receiverName",
        width: 150,
        render: function (data) {
            return (
                <span>
                    {data.receiverName}
                </span>
            )
        }
    },
    {
        label: "订单状态",
        prop: "statusDesc",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.statusDesc}
                </span>
            )
        }
    },
    {
        label: "订单总价",
        prop: "payment",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.payment}
                </span>
            )
        }
    },
    {
        label: "创建时间",
        prop: "createTime",
        width: 160,
        render: function (data) {
            return (
                <span>
                    {data.createTime}
                </span>
            )
        }
    },
    {
        label: "操作",
        prop: "operation",
        render: function () {
            return (
                <span>
                    <Button plain={true} type="info" size="small">编辑</Button>
                    <Button type="danger" size="small">删除</Button>
                </span>
            )
        }
    }
]





export {
    UserColumns,
    OrderColumns
}
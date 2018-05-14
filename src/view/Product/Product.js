import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Pagination, Icon, Input, Select, Button, Form } from 'element-react'
import { getDataByGet } from '../../util/rutil'
import ImTable from '../../components/Table/Table'
import './Product.scss'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    label: "ID",
                    prop: "id",
                    render: function (data) {
                        return (
                            <span>
                                {data.id}
                            </span>
                        )
                    }
                },
                {
                    label: "名称",
                    prop: "name",
                    render: function (data) {
                        return (
                            <span>
                                {data.name}
                            </span>
                        )
                    }
                },
                {
                    label: "信息",
                    prop: "subtitle",
                    render: function (data) {
                        return (
                            <span>
                                {data.subtitle}
                            </span>
                        )
                    }
                },
                {
                    label: "价格",
                    prop: "price",
                    render: function (data) {
                        return (
                            <span>
                                {data.price}
                            </span>
                        )
                    }
                },
                {
                    label: "状态",
                    prop: "status",
                    render: function (data) {
                        return (
                            <span>
                                {data.status}
                            </span>
                        )
                    }
                },
                {
                    label: "操作",
                    prop: "operation",
                    render: function (data) {
                        return (
                            <span>
                              <Link to={`/product/edit/${data.id}`}>修改</Link>&nbsp;&nbsp;
                              <Link to={`/product/watch/${data.id}`}>查看</Link>
                            </span>
                        )
                    }
                }
            ],
            data: [],
            currentPage: 1,
            size: 10,
            pageCount: 0

        }
    }
    render() {
        return (
            <div className="UserPage">
               <div className="SearchBox">
                    <Form inline={true}
                    className="demo-form-inline">
                        <Form.Item>
                            <Select  placeholder="查询条件">
                                <Select.Option label="商品ID" value="productId"></Select.Option>
                                <Select.Option label="商品名称" value="productName"></Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Input  placeholder="查询内容" ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">查询</Button>
                        </Form.Item>
                    </Form>
               </div>
                <ImTable
                    data={this.state.data}
                    columns={this.state.columns}
                    data={this.state.data}
                />
                <Pagination
                    layout="total, prev, pager, next, jumper" pageCount={this.state.pageCount}
                    currentPage={this.state.currentPage}
                    onCurrentChange={this.changePageNumber.bind(this)}
                />
            </div>
        )
    }
    componentDidMount() {
        //初始化
        this.loadUserList(1)
    }
    loadUserList(pageNumber) {
        getDataByGet(`/manage/product/list.do?pageNum=${pageNumber}`)
            .then(res => {
                if (res.data.status === 0) {
                    console.log(res.data.data.list)
                    this.setState({
                        data: res.data.data.list,
                        currentPage: pageNumber,
                        pageCount: res.data.data.pages
                    })
                } else {
                    alert(res.data.msg)
                    this.props.history.push('/login')
                }
            })
            .catch(error => {
                alert('请求数据出错！')
            })
    }
    changePageNumber(value) {
        this.loadUserList(value)
    }
}


export default Product
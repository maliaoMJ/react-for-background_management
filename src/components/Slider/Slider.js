import React, {Component} from 'react'
import { Layout, Menu } from 'element-react'
import { NavLink} from 'react-router-dom'
import Datapip from '../icons/Datapip'
import OrderIcon from '../icons/Order'
import ProductIcon from '../icons/Product'
import UsersIcon from '../icons/Users'
import './Slider.scss'


class Slider extends Component {
    constructor (props) {
      super(props)
    }
    render() {
        // 配置文件
        return (
            <div className="slider">
                <h3 className="sliderName">商品后台管理系统</h3>
                <Layout.Col span={8} className="backgroundColor">
                    <Menu defaultActive="1-1" className="backgroundColor" >
                        <Menu.SubMenu index="1" title={<span><i><Datapip></Datapip></i>数据中心</span>}> 
                            <Menu.Item index="1-1" className="backgroundColor">
                                <NavLink exact to="/index/home" activeClassName="seletedActive" className="navlinks">总体概览</NavLink>
                            </Menu.Item>
                            <Menu.Item index="1-2" className="backgroundColor">
                                <NavLink exact to="/index/home" activeClassName="seletedActive" className="navlinks">商品分析</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="2" title={<span><i><ProductIcon/></i>商品</span>}>
                            <Menu.Item index="2-1" className="backgroundColor">
                                <NavLink exact to="/index/product" activeClassName="seletedActive" className="navlinks">商品管理</NavLink>
                            </Menu.Item>
                            <Menu.Item index="2-2" className="backgroundColor">
                                <NavLink exact to="/index/catgory" activeClassName="seletedActive" className="navlinks">品类管理</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="3" title={<span><i><OrderIcon></OrderIcon></i>订单</span>}>
                            <Menu.Item index="2-2" className="backgroundColor">
                                <NavLink exact to="/index/order" activeClassName="seletedActive" className="navlinks">订单管理</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="4" title={<span><i><UsersIcon/></i>用户信息</span>}>
                            <Menu.Item index="2-2" className="backgroundColor">
                                <NavLink exact to="/index/user" activeClassName="seletedActive" className="navlinks">用户列表</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Col>
            </div>
        )
    }
    componentDidMount () {
      console.log(this.props.history)
    }
    onClose () {

    }
}

export default Slider
import React, {Component} from 'react'
import { Layout, Menu } from 'element-react'
import Datapip from '../icons/Datapip'
import OrderIcon from '../icons/Order'
import ProductIcon from '../icons/Product'
import UsersIcon from '../icons/Users'
import './Slider.scss'


class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <h3 className="sliderName">商品后台管理系统</h3>
                <Layout.Col span={8} className="backgroundColor">
                    <Menu defaultActive="1-1" className="backgroundColor" >
                        <Menu.SubMenu index="1" title={<span><i><Datapip></Datapip></i>数据中心</span>}> 
                            <Menu.Item index="1-1" className="backgroundColor">用户分析</Menu.Item>
                            <Menu.Item index="1-2" className="backgroundColor">商品分析</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="2" title={<span><i><ProductIcon/></i>商品</span>}>
                            <Menu.Item index="2-1" className="backgroundColor">商品管理</Menu.Item>
                            <Menu.Item index="2-2" className="backgroundColor">品类管理</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="3" title={<span><i><OrderIcon></OrderIcon></i>订单</span>}>
                            <Menu.Item index="3-1" className="backgroundColor">订单管理</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index="4" title={<span><i><UsersIcon/></i>用户信息</span>}>
                            <Menu.Item index="4-1" className="backgroundColor">用户列表</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Col>
            </div>
        )
    }
    onClose () {

    }
    onClose () {

    }
}

export default Slider
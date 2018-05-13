import React, {Component} from 'react'
import { Menu} from 'element-react'
import Logo from '../icons/Logo'
import User from '../icons/User'
import './Header.scss'

class Header extends Component {

   render(){
       return (
           <div className="headerComponent">
               <div className="icon" title="感觉这个图标挺眼熟，就是想不起在哪见过？"><Logo></Logo></div>
               <div className="user">
                   <Menu theme="dark" defaultActive="1" className="itemRight" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                       <Menu.SubMenu index="1" title={<span><i className="fa fa-bar-chart"><User></User></i>Admin</span>}>
                       <Menu.Item index="1-1">用户详情</Menu.Item>
                       <Menu.Item index="1-2">退出登录</Menu.Item>
                       <Menu.Item index="1-3">我的消息</Menu.Item>
                   </Menu.SubMenu>
                </Menu>
               </div>
           </div>
       )
   }
   onSelect (value) {
     console.log(value)
   }
}
export default Header;
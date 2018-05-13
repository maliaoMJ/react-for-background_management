import React, {Component} from 'react'
import { Menu} from 'element-react'
import Logo from '../icons/Logo'
import { User, OutIcon} from '../icons/index'
import { readLocalStorage, deleteLocalStorage } from '../../util/rutil'
import './Header.scss'

class Header extends Component {
   constructor(props){
    super(props)
    this.state = {
        username:'',
    }
   }
   render(){
       return (
           <div className="headerComponent">
               <div className="icon" title="感觉这个图标挺眼熟，就是想不起在哪见过？"><Logo></Logo></div>
               <div className="user">
                   <Menu theme="dark" defaultActive="1" className="itemRight" mode="horizontal">
                        <Menu.SubMenu index="1" title={<span><i ><User></User></i>{this.state.username}</span>}>
                            <Menu.Item 
                            index="1-2"><i
                                   onClick={this.loginOut.bind(this)}
                            ><OutIcon></OutIcon>退出登录</i></Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
               </div>
           </div>
       )
   }
   componentWillMount () {
       let userStr = readLocalStorage('userInfo')
       if (!userStr) {
           this.props.history.push('/login')
           return false
       }
       let userInfo = JSON.parse(userStr)
       this.setState({
           username: userInfo.username
       })

   }
    loginOut() {
      this.setState({
          username: ''
      })
      this.props.history.push('/login')
      deleteLocalStorage('userInfo')
    }
}
export default Header;
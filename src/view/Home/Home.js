import React, { Component } from 'react'
import {getDataByGet} from '../../util/rutil'
import { ProductIcon, UserIcon, OrderIcon } from '../../components/icons/index'
import Card from '../../components/Card/Card'
import './Home.scss'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: { orderCount:'---',text:'订单总数'},
            user: { userCount:'---',text:'用户总数'},
            product: { productCount:'---',text:'商品总数'}
        }
    }
    render () {
        return (
            <div className="HomePage">
                <Card text={this.state.order} bgColor={'#f1b35b'} 
                link={"/index/order"}
                icon={<OrderIcon></OrderIcon>}/>
                <Card text={this.state.user} bgColor={'#66bd6b'} 
                link={"/index/user"}
                icon={<UserIcon></UserIcon>}/>
                <Card text={this.state.product} bgColor={'#5cb7d3'} 
                link={"/index/product"} icon={<ProductIcon></ProductIcon>}/>
            </div>
        )
    }
    componentDidMount () {
        getDataByGet('/manage/statistic/base_count.do')
        .then(res => {
          if(res.data.status === 0){
            this.setState({
                order:{count: res.data.data.orderCount,text:'订单总数'},
                user:{count: res.data.data.userCount,text:'用户总数'},
                product: { count: res.data.data.productCount,text:'商品总数'}
            })
          }else{
              alert(res.data.msg)
          }
        })
        .catch(error => {
        //  后续可以封装一提示报错的组件
        alert('请求出错！')
        })

    }
}

export default Home
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

class Card extends Component {
    constructor(props) {
        super(props)
    }
     render() {
         return (
             <div className="Card" style={{ background: this.props.bgColor}}>
             <p className="card_link">
                     <Link to={this.props.link}>{this.props.text.count}</Link>
             </p>
             <p className="card_icon_box">
                {this.props.icon}
                <span className="tips">{this.props.text.text}</span>
             </p>
             </div>
         )
     }
}

export default Card
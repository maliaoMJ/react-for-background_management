import React, {Component} from 'react'
import { Table ,Icon, Tag, Button, Pagination } from 'element-react'

import './Table.scss'

class ImTable extends Component {
    constructor(props) {
       super(props)
    }

    render() {
        return (
          <div className="IMTable">
                <Table
                    style={{ width: '100%'}}
                    border={true}
                    highlightCurrentRow={true}
                    emptyText={'暂无数据'}
                    maxHeight = {'500'}
                    fit = {true}
                    {...this.props}
                    onCurrentChange={item => {}}

                />
                   <Pagination layout="total, prev, pager, next, jumper" total={400}  currentPage={5}/>
          </div>
        )
    }
}

export default ImTable
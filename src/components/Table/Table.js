import React, {Component} from 'react'
import { Table} from 'element-react'

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
                    fit = {true}
                    {...this.props}
                    onCurrentChange={item => {}}

                />
          </div>
        )
    }
}

export default ImTable
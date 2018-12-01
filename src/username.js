import React from 'react';
import { store } from './store/store.js'
export default class User extends React.Component {
    constructor(prop) {
        super(prop);
                this.state = {
            userName: 'init'
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState())
            this.setState({
                userName: store.getState()
            })
        })
    }
  handleClick = () => {
    store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId: 10086}})
  }
    render() {
        return (
            <div>
                这是username组件{this.state.userName}
                <br/>
                <div onClick={this.handleClick}>
                    点击获取提交age
                </div>
            </div>
        )
    }
}

import React, { PureComponent, Fragment } from 'react';
// import axios from 'axios';
// import { Input, Button } from 'antd';
import './style.css';

export default class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
    };
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value.trim(),
    });
  }
  handleClick = () => {
    this.setState(pState => ({
      value: '',
      list: [...pState.list, pState.value],
    }))
  }
  handleDelete = (index) => {
    this.setState(pState => {
      const list = [...pState.list];
      list.splice(index, 1);
      return {
        list,
      }
    })
  }

  render() {
    return (
      <Fragment>
        <input type="text" value={this.state.value} onChange={this.handleInput}/>
        <button onClick={this.handleClick}>提交</button>
        <ul>
          {this.state.list.map((item, index) => (<div key={item}>{item}</div>)) }
        </ul>
      </Fragment>
    )
  }
}
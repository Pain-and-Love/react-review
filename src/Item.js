import React, { PureComponent } from 'react';

export default class Item extends React.Component{
  handleClick = () => {
    this.props.onClick(this.props.index);
  }
  componentWillReceiveProps(){
    console.log('receive');
  }
  render() {
    console.log('child render')
    return (<li onClick={this.handleClick}>{this.props.content}</li>)
  }
}

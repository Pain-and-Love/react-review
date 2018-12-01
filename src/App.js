import React, { PureComponent } from 'react';
import TodoList from './username';
import 'antd/dist/antd.css';
class App extends PureComponent {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;

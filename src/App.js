import React, { Component } from 'react';
import { Provider } from 'react-redux';
// 只有Route中的component才有match等属性。 子组件需要通过withRouter包装。
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
            <Header />
      			<Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/write' exact component={Write} />
      			<Route path='/detail/:id' exact component={Detail} />
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';

import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <IconStyle/>
      <BrowserRouter>
        <Header />
        <Route path='/'  exact component={Home}></Route>
        <Route path='/login'  exact component={Login}></Route>
        <Route path='/write'  exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>     
    </Provider>
  );
}

export default App;

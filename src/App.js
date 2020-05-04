import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';

import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <IconStyle/>
      <Header />
      <BrowserRouter>
        <Route path='/'  exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
      </BrowserRouter>     
    </Provider>
  );
}

export default App;

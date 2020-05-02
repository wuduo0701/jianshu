import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont'
import Header from './common/header';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <IconStyle/>
      <Header />     
    </Provider>
  );
}

export default App;

import React from 'react';
import { HomeWrapper, HomeLeft, HomeRight} from './style'
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';

function Home() {
  return (
    <HomeWrapper>
      <HomeLeft>
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer/>
      </HomeRight>
    </HomeWrapper>
  )
}
export default Home;
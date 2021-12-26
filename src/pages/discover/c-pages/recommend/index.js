import React, { memo } from 'react';

import WYTopBanner from './c-cpns/top-banner';
import WYHotRecommend from './c-cpns/hot-recommend';
import WYNewAlbum from './c-cpns/new-album';
import WYRecommendRanking from './c-cpns/recommend-ranking';
//import WYUserLogin from './c-cpns/user-login';
//import WYSettleSinger from './c-cpns/settle-singer';
//import WYHotAnchor from './c-cpns/hot-anchor';
import { 
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
  } from './style';


function WYRecommend(props) {
 
  return (
    <RecommendWrapper>
        <WYTopBanner/>
        <Content className="wrap-v2">
            <RecommendLeft>
                <WYHotRecommend/>
                <WYNewAlbum/>
                <WYRecommendRanking/>
            </RecommendLeft>
            <RecommendRight>
                {/* <WYUserLogin/>
                <WYSettleSinger/>
                <WYHotAnchor/> */}
            </RecommendRight>
        </Content>

    </RecommendWrapper>
  )
}



export default memo(WYRecommend);

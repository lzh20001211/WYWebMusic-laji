import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import WYThemeHeaderRCM from '../../../../../../components/theme-header-rcm';
import WYTopRanking from '../../../../../../components/top-ranking';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';

export default memo(function WYRecomendRanking() {
  // redux hooks 
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <WYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <WYTopRanking info={upRanking}/>
        <WYTopRanking info={newRanking}/>
        <WYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})




// export default memo(function WYNewAlbum() {
//   return (
//     <div>
//       <WYThemeHeaderRCM title="榜单" />
//     </div>
//   )
// })


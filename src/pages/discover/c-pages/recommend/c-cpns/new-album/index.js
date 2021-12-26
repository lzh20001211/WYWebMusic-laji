import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
//import { getNewAlbums } from '../../../../../../services/recommend';
import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel  } from 'antd';
import WYAlbumCover from '../../../../../../components/album-cover';
import WYThemeHeaderRCM from '../../../../../../components/theme-header-rcm';
import { AlbumWrapper } from './style';

export default memo(function WYNewAlbum() {
  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  const dispatch = useDispatch();

  //other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  // return (
  //   <AlbumWrapper>
  //     <WYThemeHeaderRCM title="新碟上架" />
  //     <div className='content'>
  //       <button className='arrow arrow-left sprite_02' 
  //               onClick={e => pageRef.current.prev()}>
  //       </button>
  //       <div className='album'>
  //         <Carousel dots={false} ref={pageRef}>
  //           {
            
  //             [0, 1].map(item => {
  //               return (
                  
  //                 <WYAlbumCover key={item} className="page">
  //                   {
  //                     newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
  //                       return <WYAlbumCover key={iten.id} 
  //                                            info={iten} 
  //                                            size={100} 
  //                                            width={118} 
  //                                            bgp="-570px"/>
  //                     }) 
  //                   }
  //                 </WYAlbumCover>
  //               ) 
  //             }) 
  //           }
  //         </Carousel>
  //       </div>
  //       <button className='arrow arrow-right sprite_02'                
  //               onClick={e => pageRef.current.next()}>
  //       </button>
  //     </div>
  //   </AlbumWrapper>
  // )
  // })

  return (
    <AlbumWrapper>
      <WYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" 
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <WYAlbumCover key={iten.id} 
                                             info={iten} 
                                             size={100} 
                                             width={118} 
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                ) 
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
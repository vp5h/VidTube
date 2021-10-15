import React, {useEffect} from 'react';
import './_sidebar.scss';
import { getSubscribedChannels } from '../../redux/actions/videos.action'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
  MdSubscriptions,
  MdExitToApp,
  MdHome,
} from 'react-icons/md';
import { useDispatch,useSelector } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action';
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
  };

  useEffect(() => {
    dispatch(getSubscribedChannels())
 }, [dispatch])

 const { loading, videos } = useSelector(state => state.subscriptionsChannel)

  return (
    <nav
      className={sidebar ? 'sidebar open' : 'sidebar'}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      </Link>
      <Link to="/feed/subscriptions">
      <li>

        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      </Link>

      

      <hr />

      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
     <li className="subli">Subs</li>
         {!loading ? (
            videos?.map(video => (
              <>
               <div className='p-2 chmment d-flex'>
                <Link to={`channel/${video.snippet.channelId}`}></Link>
              <img src={video.snippet.thumbnails.medium.url} alt="subs"/>
             <p className="chnName">{ video.snippet.title}</p>
               </div>
              </>
            ))
         ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
         )}
     
    
    </nav>
  );
};

export default Sidebar;

import React, { memo } from 'react'
import { Provider } from 'react-redux';

import {renderRoutes} from 'react-router-config';

import routes from './router'; 
import store from './store';


import WYWebFooter from './components/app-footer';
import WYWebHeader from './components/app-header';
import WYAppPlayerBar from './pages/player/app-player-bar'

import { HashRouter} from 'react-router-dom';

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <WYWebHeader/>
                {renderRoutes(routes)}
                <WYWebFooter/>
                <WYAppPlayerBar/>
            </HashRouter>
        </Provider>

    )
})

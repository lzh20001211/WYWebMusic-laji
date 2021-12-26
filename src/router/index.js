import React from 'react';
import { Redirect } from "react-router";
import WYDiscover from "../pages/discover";
import WYFriends from "../pages/friends";
import WYMine from "../pages/mine";

import WYRecommend from "../pages/discover/c-pages/recommend";
import WYRanking from "../pages/discover/c-pages/ranking";
import WYSongs from "../pages/discover/c-pages/songs";
import WYDJRadio from "../pages/discover/c-pages/djradio";
import WYArtist from "../pages/discover/c-pages/artist";
import WYAlbum from "../pages/discover/c-pages/album";
import WYPlayer from '../pages/player';

const routes = [

    {
        path:"/",
        exact: true,
        render: () => {
            <Redirect to = "/discover"/>
        }
        
    },

    {
        path:"/discover",
        component:WYDiscover,
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
              path: "/discover/recommend",
              component: WYRecommend
            },
            {
              path: "/discover/ranking",
              component: WYRanking
            },
            {
              path: "/discover/songs",
              component: WYSongs
            },
            {
              path: "/discover/djradio",
              exact: true,
              component: WYDJRadio
            },
            {
              path: "/discover/artist",
              component: WYArtist
            },
            {
              path: "/discover/album",
              component: WYAlbum
            },
            {
              path: "/discover/player",
              component: WYPlayer
            },
          ]
    },

    {
        path:"/mine",
        exact: true,
        component: WYMine
    },

    {
        path:"/friend",
        exact: true,
        component: WYFriends
    },



];

export default routes;
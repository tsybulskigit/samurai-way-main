import React from 'react';
import './index.css';
import state from "./redux/state";
import {reRenderEntireTree} from "./render";


reRenderEntireTree(state)
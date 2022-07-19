import React from 'react';
import ReactDOM from  'react-dom';
import {SpeechProvider } from '@speechly/react-client';


import App from './App';
import './index.css';
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId="ea710df6-2544-49de-9ac2-d2f8445297cc" language="en-US">
    <Provider>
        <App />
    </Provider>
     </SpeechProvider>,
 document.getElementById('root')
 );
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker';
import store,{history} from './redux';
import './styles';
// Development Related Configuration
registerServiceWorker();
//Target for rendering the app
// const target = document.querySelector('#root')
//
// //Render the app
// render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <App />
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//     target
// )

// /**
//  * Created by Rabbit on 2017/5/23.
//  */
// import {createStore , applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// // import RootReducer from '../reducers/rootReducer';
// // configureStore
// import RootReducer from '../Reducers/RootReducer';
//
// // import RootReducer from '../reducers/ShiTuReducer';
//
// let middlewares = [];
//
// middlewares.push(logger);
// middlewares.push(thunk);
//
//
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//
// export default function configureStore(initialState){
//     return createStoreWithMiddleware(RootReducer,initialState);
// }

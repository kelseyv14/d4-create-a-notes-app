// // Load Redux
// import { compose, createStore, combineReducers } from 'redux'
// // import { persistStore, autoRehydrate } from 'redux-persist'
// // import { asyncSessionStorage } from 'redux-persist/storages'
// import { routerReducer } from 'react-router-redux'


//I think I am beginning to understand how this makes the form store, again below is from an abstraction, taking in employee info. I think the constants being imported here ensures clear/strong paths? for lack of a better term...is it more of a preferencial idea by the author ? I see 'const' in the reducer page we set up, but didn't think to make a constants page like this example. other than this confusion, I get that this page runs when it is called at the top of main.js and then exports to the showall.js...is this where that is called ? :
// // // Initial shared state
// // const initialSharedState = {
// //     notes: []
// // }





// import { combineReducers } from 'redux';
// // import {
// //   RECEIVE_EMPLOYEES,
// //   REQUEST_EMPLOYEES,
// //   START_EMPLOYEE_ADD,
// //   ADD_EMPLOYEE,
// // } from './constants';
// import {reducer as formReducer} from 'redux-form';


// function mainReducer(state = {
//   employees: [],
//   loadingEmployees: true,
//   addingEmployee: false,
// }, action) {
//     switch (action.type) {
//     case RECEIVE_EMPLOYEES:
//         return Object.assign({}, state, {
//           employees: action.employees,
//           loadingEmployees: false,
//         });
//     case REQUEST_EMPLOYEES:
//         return Object.assign({}, state, {
//           loadingEmployees: true,
//         });
//     case START_EMPLOYEE_ADD:
//         return Object.assign({}, state, {
//           addingEmployee: true,
//         })
//     case ADD_EMPLOYEE:
//         return Object.assign({}, state, {
//           addingEmployee: false,
//           employees: [
//             ...state.employees,
//             action.employee,
//           ]
//         })
//     default:
//         return state;
//     }
// }


// const reducer = combineReducers({
//     main: mainReducer,
//     form: formReducer,
// });

// export default reducer;

// // // Initial shared state
// // const initialSharedState = {
// //     notes: []
// // }

// // // Reducers
// // function state(state = initialSharedState, action = {}) {
// //     switch (action.type) {

// //         // Updates shared todos array
// //         case 'NOTES':
// //             return { ...state, notes: action.body }
        
// //         // No valid action.type was given
// //         default:
// //             return state
// //     }
// // }

// // // Combine reducers into a single store
// // const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const store = createStore(
// //   combineReducers({
// //     state: state,
// //     routing: routerReducer
// //   }),
// // )



// // export default store
import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const reducers = {}; // this is where we put all the reducers we put later on

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2 /*say how to reconcile the initial and stored states of our application,
                    as in how deep it should go doing so*/
}
//combinedReducer is used to create rootReducer
const rootReducer = combineReducers(reducers); /*this puts reducers in a form that can be passed to the
                                create store function*/
const persistedReducer = persistReducer(persistConfig, rootReducer);
//persistConfig is an object that tells the persistReducer how to save and where to store our application data

export const configureStore = () => createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);



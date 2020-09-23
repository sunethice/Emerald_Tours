import { createStore, combineReducers, applyMiddleware } from 'redux';
import { packages } from './components/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
    packages,
}; // this is where we put all the reducers

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,/*say how to reconcile the initial and stored states of our application,
                    as in how deep it should go doing so*/
}
//combinedReducer is used to create rootReducer
const rootReducer = combineReducers(reducers);/*this puts reducers in a form that can be passed to the
                                create store function*/
const persistedReducer = persistReducer(persistConfig, rootReducer);
//persistConfig is an object that tells the persistReducer how to save and where to store our application data


export const configureStore = () =>
    createStore(
        persistedReducer,
        {},
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );



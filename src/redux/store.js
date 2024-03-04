import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import contactsReducer from './contacts/contactsReducers'
import authReduser from './auth/authReduser'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token']
};

export const store = configureStore({
    reducer:{ 
        contacts: contactsReducer,
        auth : persistReducer(authPersistConfig,authReduser)
    },  
})

export const persistor = persistStore(store)
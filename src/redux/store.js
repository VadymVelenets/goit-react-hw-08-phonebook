// eslint-disable-next-line no-unused-vars
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    // eslint-disable-next-line no-unused-vars
    FLUSH,
    // eslint-disable-next-line no-unused-vars
    REHYDRATE,
    // eslint-disable-next-line no-unused-vars
    PAUSE,
    // eslint-disable-next-line no-unused-vars
    PERSIST,
    // eslint-disable-next-line no-unused-vars
    PURGE,
    // eslint-disable-next-line no-unused-vars
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
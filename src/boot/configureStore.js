import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";
import devToolsEnhancer from 'remote-redux-devtools';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: "MyApp",
      realtime: true
    })
  );

  let store = createStore(persistedReducer);
  let persistor = persistStore(store, null, onCompletion);

  return store;
}

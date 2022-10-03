import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
  }
  return store;
};

export const store = createStore();

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

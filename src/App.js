import React from 'react';
import PrincipalRouter from "./PrincipalRouter";
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <PrincipalRouter />
    </Provider>
  );
}

export default App;

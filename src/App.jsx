import {useState, useEffect} from 'react';
import './main.scss'

import {useSelector, useDispatch} from 'react-redux';
import { userActions } from './stores/slices/user';

function App() {
  const dispatch = useDispatch();

  const userStore = useSelector(store => store.userStore);

  useEffect(() => {
    dispatch(userActions.find());
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;

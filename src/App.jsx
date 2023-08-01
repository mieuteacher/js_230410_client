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
      <button onClick={() => {
        dispatch(userActions.changeLoad())
      }}>Change Load</button>
      <ul>
        {
          userStore.data.map((user, index) => (
            <li key={user.id}>
              <div>
                User Email: {user.email}
              </div>
              <img style={{width: "100px", height: "100px", borderRadius: "50%"}} 
              src={`${process.env.REACT_APP_SERVER_HOST}${user.avatar}`}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;

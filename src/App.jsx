import { useContext ,useEffect} from 'react'
import './App.css'
import Routing from './Router'
// import ImageDime from './ImageDime'
import {auth} from "./Utility/firebase"
import { DataContext } from './Component/DataProvider/DataProvider'
import {Type} from "./Utility/action.type"

function App() {
const {state, dispatch} = useContext(DataContext)
const {user} = state;


useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      console.log(authUser);
      dispatch({
        type: Type.SET_USER,
        user: authUser,
      });
    } else {
      dispatch({ type: Type.SET_USER, user: null });
    }
  });
}, []);
return <Routing />;
}

export default App;

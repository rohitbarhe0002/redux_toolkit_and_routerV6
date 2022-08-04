
import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import Routes from './Routes'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const  {testing} = useSelector((state) => state.user);
  // console.log( testing,"===========>testing");
  const dispatch = useDispatch();

  return (
    <>
<Routes/>
    </>
  );
}

export default App;

import React from 'react'
import { testState } from '../Redux/reducer/userReducer'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from "react-redux";

function ProductList() {
    const dispatch = useDispatch();
  const  {testing} = useSelector((state) => state.user);

    // useEffect ( ()=> {
    //     console.log(testing,"===============================");
    //     console.log("dfdfdf");
    // },[])
    useEffect (   () => {
           
        const TOKEN = (localStorage.getItem('newUser'))

        console.log("Mukati ji ddddsddis here====>",TOKEN); 
        

     
        axios.get('http://localhost:5000/api/product', {  headers: { token: `Bearer ${TOKEN.toString()}` } })
        .then((response) => {
           
          console.log(response,"++++++++++++++++response of login token product");
        }, (error) => {
          console.log(error,"=================error");
        });
    },[])

  return (
    <div>ProductList</div>
  )
}

export default ProductList
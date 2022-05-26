import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // 1. state/hook variable
  const [data1, setData1] = useState([])
  
  
  useEffect(() => {
    myCall()
  }, [])

  // 2. function defination
  let myCall = async()=>{
    try {
      const res =await axios.get('https://staging-api.dahmakan.com/test/orders?sort[0]=order_id&sort[1]=paid_withdesc')
      console.log(res.data.orders);
      setData1(res.data.orders)
    } catch (error) {
      console.log(error)
    }
  }
  // 3. return statement
  console.log("data.orders",data1);
  return (
      <table>
        <thead>
          <tr>
            <th>order_id</th>
            <th>arrives_at_utc</th>
            <th>paid_with</th>
            <th>total_paid</th>
          </tr>
        </thead>
        <tbody>
          {
            data1.length &&
            data1.map((cv, index, arr) => {
              console.log("cv",cv.order_id);
              const unixTime = 	cv.arrives_at_utc	;
              const date = new Date(unixTime);
              const time =date.toLocaleDateString("en-US");
              return (
                <tr key={index}>
                  <td>{cv.order_id}</td>
                  <td>{time}</td>
                  <td>{cv.paid_with}</td>
                  <td>{cv.total_paid}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
  )
}

export default App;

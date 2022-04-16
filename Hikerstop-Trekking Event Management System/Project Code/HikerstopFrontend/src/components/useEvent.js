// 
// import React, {useState, useEffect} from "react";
// import { useAsync } from 'react-async-hook';

// const useEvent = () =>{
//     const[event, setEvent] = useState({
//         eventid:'',
//         eventname:'', 
//         eventdate:'',
//         availabilty:'',
//         price:''
//     });

// const getData =() =>{

//     (fetch("http://localhost:8484/admin",{
//         method:"GET"
    
//     })).then((response) => {return response.json()})
//     .then((response) => {
//       console.log(event.response)
//        this.setEvent({event:response})
//     //setEvent(response)
//     })
//     .catch(err => { console.log(err); 
//     });
//     // fetch("http://localhost:8484/event",{
//     // method:"GET"}).then((res) => {
//     //     return res.json();
//     // }).then(data => {
//     //     console.log(data);
//     //     setEvent(data);
//     // });

// }

// useEffect(() => {
//     getData();
// }, []) // don't forget this empty bracket it indicates the function will only run once when the component will load initially

// const EventHeaders = () => {
//     let headerElement = ['eventid', 'eventname', 'eventdate', 'availabilty', 'price']

//     return headerElement.map((key, index) => {
//         return <th key={index}>{key.toUpperCase()}</th>
//     })
// }

// const EventList = () => {
//     <>
//     return event && event.map(({event.eventid,event.eventname,event.eventdate,event.availabilty,event.price})
//         return(
//             <div>
//                 <tr>
//                         <td>{event.eventid}</td>
//                         <td>{event.eventname}</td>
//                         <td>{event.eventdate}</td>
//                         <td>{event.availabilty}</td>
//                         <td>{event.price}</td>
//                         {/* <a href="/" + {eventname}>View </a> */}
//                         {/* {<button onClick="/"+eventname></button>} */}
//                 </tr>
//             </div>
//         )
//     )
//     </>
// }

// return (
//     <>
//         <h1 id='title'>Event Table</h1>
//         <table id='event'>
//             <thead>
//                 <tr>{EventHeaders()}</tr>
//             </thead>
//             <tbody>
//                 {EventList()}
//             </tbody>
//         </table>
//     </>
// )
// }

// export default useEvent
//-------------------------------------------------------------------------------
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

const useEvent=()=>{

    // const [eventid,setEventid]=useState("");

    // const[eventname,setEventname]=useState("");
    
    // const[eventdate,setEventdate]=useState("");
    
    // const[availabilty,setAvailabilty]=useState("");
    
    // const[price,setPrice]=useState("");
    const [allRecords,setAllRecords] = React.useState([]);
    
    useEffect(()=>{
        const url="http://localhost:8484/admin";
        

        const fetchData= async()=>{
            // fetch(url)
            // .then( response=> {return response.json()}
          
            // )
            // .then(({data:allRecords})=>{
            //     setAllRecords(allRecords)
            //     console.log(allRecords)
               
            // })
            //----------------------------------------------------------------
           
            try{
                const response = await fetch(url);
                const json= await response.json();
        // const [allRecords,setAllRecords]= useState([]);
                setAllRecords(json);
                  console.log(json);
                  console.log("debug");
                 // console.log(json);
                console.log(allRecords)

                
                }
                catch(error){
                    console.log("error",error)
                
            }
        }
        fetchData();
    },[]);

    const rows=()=>{
        var rows=[];
        for(var i=0;i<=allRecords.length;i++)
        {
            rows.push(<tr><td>{allRecords[i].eventid}</td><td>{allRecords[i].eventname}</td><td>{allRecords[i].availabilty}</td><td>{allRecords[i].price}</td></tr>) 

        }

        return rows;
    }

    return(
       
        <div>
        {/* <a href='/evlist' onClick={useEffect}>See Event</a> */}
                         <table>
                             <th>Sr. no.</th><th>Event</th><th>Date</th><th>Availability</th><th>Price</th>
                             <tr>
                                 <tbody>
                                     {rows}
                                 </tbody>
                                 {/* <Link to={"/",eventname}> View details</Link>
                                 <Link to={"/register/",eventid}> Book now</Link> */}
                             </tr>
                         </table>
                     </div>
       
    )

}

export default useEvent

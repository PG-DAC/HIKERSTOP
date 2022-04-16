// import React from "react";
// import {useEffect,useState} from "react";
// import axios from "axios";

// const useEvent2=()=>{

//     const[events,setEvents]=useState([])

//     useEffect(() => {
//         // GET request using axios inside useEffect React hook
//         axios.get('http://localhost:8484/admin')
//             .then(response => setEvents(response.data.total));
//             console.log(events);
//     // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);
//     return{useEffect}
// }
// export default useEvent2
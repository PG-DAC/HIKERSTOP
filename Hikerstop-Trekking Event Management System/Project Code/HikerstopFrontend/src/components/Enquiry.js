import React, { useEffect, useState } from "react";

const Enquiry = () =>{
    const [data, setData] = useState({
        enquiryid:'',
        phone:'',
        emailid:'',
        fullname:'',
        message:''

    });

    console.log(data);

   // const [data1, setData1] = useState(null);

    const handleChangeValue = e => {
        const {name, value}=e.target;  //setting target
        setData({
            ...data,  //it will allow us to add more states without throwing error
            [name]:value
    })
  
}
    const submitEnquiry = e => {
        e.preventDefault();

        fetch("http://localhost:8484/enquiry",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(()=>{
            alert("Query submitted successfully !!!")
            console.log("Success")
        })
    };
        return {submitEnquiry, handleChangeValue,data};
}

export default Enquiry
import {useState, useEffect} from "react";

const usePayment = (props) => {
    const [values, setValues] = useState ({
        name:'',
        paydate:'',
    });

    console.log(values)

    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleChange = e => { //it will assign value inserted in perticular box to perticular name of that box
        const {name, value}=e.target;  //setting target
        setValues({
            ...values,  //it will allow us to add more states without throwing error
            [name]:value
        });
        
    }; 
    const alert=()=>{
       alert("Payment Success")
      
    }

    // const setEventid=(props)=>{
    //     setValues([values.event_fk]=this.props.match.params.id)
    // }

    const handleSubmit = e => { //kept values as it is in input box
        e.preventDefault();
       
        setErrors(values);
        setIsSubmiting(true);
        fetch("http://localhost:8484/payment/user",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
        }).then(()=>{
            console.log("Payment Succesfully...")
        })

    };
    return {handleChange, values, handleSubmit, errors,alert};
    
};

export default usePayment
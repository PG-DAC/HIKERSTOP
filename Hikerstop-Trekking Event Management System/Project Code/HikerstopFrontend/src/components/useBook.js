import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


const useBook = (props) => {
    
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [values, setValues] = useState ({
        trekkersname:'',
        bookdate:'',
        noofperson:'',
       eventname:'',
        customer_fk:'1'
    });

    console.log(values)
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleChange = e => { //it will assign value inserted in perticular box to perticular name of that box
        const {name, value}=e.target;  //setting target
        setValues({
            ...values,  //it will allow us to add more states without throwing error
            [name]:value
        });
        
    }; 

    // const setEventid=(props)=>{
    //     setValues([values.event_fk]=this.props.match.params.id)
    // }

    const handleSubmit = e => { //kept values as it is in input box
        e.preventDefault();
       
        setErrors(values);
        setIsSubmiting(true);
        fetch("http://localhost:8484/bookevent/event",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
        }).then(()=>{
            toast.success("Booking Succesful...")
            //  alert("Booking Succesful...")
            // history.push("/pay");
            console.log("Booking Succesful...")
        })

    };
    return {handleChange, values, handleSubmit, errors};
    
};

export default useBook
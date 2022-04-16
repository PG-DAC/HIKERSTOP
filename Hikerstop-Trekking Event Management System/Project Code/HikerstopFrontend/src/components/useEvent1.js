import React from "react";

 class AllRecords extends React.Component
{
    constructor()
    {
        super();
        this.state={
            eventid:'',
            availabilty:'',
            eventdate:'',
            eventname:'',
            price:'',
            arr:[]  
        }
    }

    // handleChange=(selectedDate)=>
    // {
    //         this.setState({taskDate:selectedDate})
    // }

    getData=()=>{
        fetch("http://localhost:8484/admin", {
            "method": "GET", 
          })
          .then(response => {return response.json()})
          .then(response => {
            console.log(response)
            this.setState({arr:response})
          })
          .catch(err => { console.log(err); 
          });


    }

    // validate=()=>
    // {
    //     if(!this.state.taskDesc)
    //     {
    //     this.setState({descerror:"Description cannot be empty"})
    //     return false;
    //     }   
    //     return true
    // }

    // saveTask=()=>{

    //     if(this.validate()){

    //     console.log(this.state.taskDesc+"  "+this.state.taskDate)

    //     fetch("http://localhost:8080/task/add", {
    //         "method": "POST",
    //         "headers":{'Content-Type':'application/json'},
    //         "body": JSON.stringify({
    //          taskDesc: this.state.taskDesc,
    //          taskDate: this.state.taskDate,
    //        })
    //       })
    //     }
    // }


 rows=()=>{
        var rows=[];
        for(var i=0;i<=this.state.arr.length;i++)
        {
            rows.push(<tr><td>{this.state.arr[i].eventid}</td><td>{this.state.arr[i].eventname}</td><td>{this.state.arr[i].availabilty}</td><td>{this.state.arr[i].price}</td></tr>) 

        }
        return rows;
    }
    render=()=>
    {
        
    
        return(
           
            <div>
            {/* <a href='/evlist' onClick={useEffect}>See Event</a> */}
                             <table>
                                 <th>Sr. no.</th><th>Event</th><th>Date</th><th>Availability</th><th>Price</th>
                                 <tr>
                                     <tbody>
                                         {this.rows}
                                     </tbody>
                                     {/* <Link to={"/",eventname}> View details</Link>
                                     <Link to={"/register/",eventid}> Book now</Link> */}
                                 </tr>
                             </table>
                         </div>
           
        );
    }

}   
export default AllRecords

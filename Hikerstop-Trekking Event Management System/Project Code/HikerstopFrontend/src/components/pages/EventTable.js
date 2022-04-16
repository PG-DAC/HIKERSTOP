import React from "react";
import "./EventTable.css"
import Footer from "../Footer";
import Navbar from "../Navbar";
import EventBooking from "../EventBooking";
const EventTable=()=>{
    return(
        <div>
            <Navbar/>
             <div>
                <table>
                    <tr>
                        <th><h1>Sr. No.</h1></th><th><h1>Event Name</h1></th><th><h1>Event Date</h1></th><th><h1>Availability</h1></th><th><h1>Price</h1></th>
                    </tr>
                    <tr>
                        <td>
                            <h2>1</h2>
                        </td>
                        <td>
                            <h2>Sandhan Valley</h2>
                        </td>
                        <td>
                            <h2>10/10/2022</h2>
                        </td>
                        <td>
                            <h2>35 Canditates</h2>
                        </td>
                        <td>
                            <h2>3000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/sandan"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>2</h2>
                        </td>
                        <td>
                            <h2>Rajgad Trek</h2>
                        </td>
                        <td>
                            <h2>15/11/2022</h2>
                        </td>
                        <td>
                            <h2>50 Canditates</h2>
                        </td>
                        <td>
                            <h2>2000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/rajgad"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>3</h2>
                        </td>
                        <td>
                            <h2>Panhala</h2>
                        </td>
                        <td>
                            <h2>5/10/2022</h2>
                        </td>
                        <td>
                            <h2>120 Canditates</h2>
                        </td>
                        <td>
                            <h2>6000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/panhala"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>4</h2>
                        </td>
                        <td>
                            <h2>Dudhsagar Waterfall</h2>
                        </td>
                        <td>
                            <h2>2/10/2022</h2>
                        </td>
                        <td>
                            <h2>25 Canditates</h2>
                        </td>
                        <td>
                            <h2>5000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/dudhsagar"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>5</h2>
                        </td>
                        <td>
                            <h2>Devkund Waterfall</h2>
                        </td>
                        <td>
                            <h2>25/10/2022</h2>
                        </td>
                        <td>
                            <h2>120Canditates</h2>
                        </td>
                        <td>
                            <h2>1000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/devkund"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>6</h2>
                        </td>
                        <td>
                            <h2>Harishchadragad</h2>
                        </td>
                        <td>
                            <h2>15/10/2022</h2>
                        </td>
                        <td>
                            <h2>100 Canditates</h2>
                        </td>
                        <td>
                            <h2>2000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/hcgad"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>7</h2>
                        </td>
                        <td>
                            <h2>Harihargad</h2>
                        </td>
                        <td>
                            <h2>7/12/2022</h2>
                        </td>
                        <td>
                            <h2>80 Canditates</h2>
                        </td>
                        <td>
                            <h2>7000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/harihar"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>8</h2>
                        </td>
                        <td>
                            <h2>Kalasubaii Trek</h2>
                        </td>
                        <td>
                            <h2>17/10/2022</h2>
                        </td>
                        <td>
                            <h2>60 Canditates</h2>
                        </td>
                        <td>
                            <h2>10000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/kalsubai"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>9</h2>
                        </td>
                        <td>
                            <h2>Visapur Fort</h2>
                        </td>
                        <td>
                            <h2>23/1/2022</h2>
                        </td>
                        <td>
                            <h2>240 Canditates</h2>
                        </td>
                        <td>
                            <h2>7000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/visapur"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>10</h2>
                        </td>
                        <td>
                            <h2>Sudhagad Trek</h2>
                        </td>
                        <td>
                            <h2>2/2/2022</h2>
                        </td>
                        <td>
                            <h2>100 Canditates</h2>
                        </td>
                        <td>
                            <h2>5000 ruppes each</h2>
                        </td>
                        <td>
                            <a href="/sudhagad"><h2>View Details</h2></a>
                        </td>
                        <td>
                            <a href="/EvBook"><h2>Book Now</h2></a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
       
    )
}

export default EventTable
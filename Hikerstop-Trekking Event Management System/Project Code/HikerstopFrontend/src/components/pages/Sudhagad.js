import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Sudhagad = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/Sudhagad.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        The origin of this fort is said to date back to the 2nd century the same age as the Thanale 
                        Caves and Khadsamble caves nearby. It was then called Bhrorapgad (after its presiding deity, 
                        Bhoraidevi). In 1436, it was captured by the Bahamani Sultan. In 1657,the Marathas took over 
                        and renamed it "Sudhagad"(the sweet one). It was a large fort and Sudhagad was considered by 
                        Chhatrapati Shivaji Maharaj as the capital of his kingdom. He surveyed it, but instead chose 
                        Raigad because of its central location.In the regime of the Peshwas, the ‘Pantsachivas’ of Bhor 
                        became the custodians of this fort.After the annexation of princely states in 1950 the fort 
                        became patron less. As a result, the fort is in a state of ruins, even though it escaped the 
                        wrath of the British.         
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/sudhagad3.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        One has to head towards Khopoli which is a bit ahead of Lonavala. From Khopoli you can ask the 
                        locals for directions to Pali or use google maps to get there.There are 2 base villages from 
                        where you can start the actual trek. One is via Pacchapur(Thakurwadi) village and the other is 
                        via Dhondse village. During all our trips, we've gone via the Thakurwadi route which is said to 
                        be relatively easy than the Dhonse route. Thakurwadi is around 12 kilometres from Pali.If you 
                        are a beginner you can always hire a guide from the base village to help you with the trek route. 
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> Pantsachiv Wada </li>
                                    <li> Two lakes and water cisterns  </li>
                                    <li> Maha darwaja  </li>
                                    <li> Dindi Darwaja  Pachchapur Darwaja  </li>
                                    <li> Chor darwaja (Secret door) </li>
                                    <li> Ambarkhana </li>
                                    <li> Bastions of the fort well in condition </li>
                                    <li> Remains of old structure </li>
                                    <li> Echo point </li>
                                    <li> From the fort top we can have glimpse of Sarasgad, Tel-Baila and Ghangad. </li>
                                </ol>
                </div>
                <br/>
                <div className='trek-carry'>
                    <h1>Things to Carry</h1>
                    <br/>
                    <ol>
                        <li> Id Proof </li>
                        <li> Sport Shoes </li>
                        <li> Water (2 Liter)</li>
                        <li> Electro Powder </li>
                        <li> Sleeping Bag </li>
                        <li> Personal First-aid Kit</li>
                        <li> Dry Food Packets </li>
                    </ol>
                </div>
                <br/>
                <div className='trek-package'>
                    <h1> Trek Package Offers </h1>
                <br/>

                    <ol>
                        <li> Transportation: Pickup & Drop from Pune </li>
                        <li> Stay: Tents </li>
                        <li> Meals: Breakfast, Lunch, Dinner</li>
                        <li> Activities: Camp Fire, Camping, Photography</li>
                    </ol>
                </div>
                <br/>

                <div className='trek-escapades'>
                    <h1> Hikerstop Policies </h1>
                <br/>

                    <ol>
                        <li>Seats will be reserved only after full payment.</li>
                        <li>Fees paid are non-refundable but transferable on the same event.</li>
                        <li>A complete schedule of the trek will be given later to registered participants</li>
                        <li>Organizers have all the right to modify or change the schedule in case</li>
                        <li>Organizers hold the right to cancel any event and refund with prior notice.</li>
                        <li>We strictly follow a no alcohol, no drugs, and no litter policy.</li>
                    </ol>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Sudhagad
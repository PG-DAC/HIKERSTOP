import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Dudhsagar = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/DudhsagarFP.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        There has been a lot of hype of Dudhsagar trek being closed for the general
                        public.The Dudhsagar railway trek has been officially closed for the 
                        general public but the trek to the Dudhsagar falls bottom is still open 
                        for all.There are two routes to reach there.One is starting the trek from 
                        Kulem and follow the jeep trail until the bottom of the waterfall.The 
                        second option is via the railway track which is roughly around 11 km. You can trek up to 
                        the Sonaulim station and join back to the Mud route. This route would save 
                        2 km on the Mud road.During the monsoon season, it is mandatory to hire a 
                        guide and get a life jacket in order to start the trek otherwise the entry 
                        inside the forest is restricted because the area experiences extremely heavy
                        rainfall and the water displacement around the fall are potentially very 
                        large, so it is always better to carry a life jacket.         
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/dudhsagar.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        Two trains from Pune to Kulem. Goa Express (Daily) & Poorna Express 
                        (Weekly on each Saturday).Goa Express starts from Pune at 4.35 pm & 
                        reaches Kulem at 4.35 am (12 hours journey).Poorna Express starts from 
                        Pune at 9.55 pm & reaches Kulem at 11.05 am (13 hours journey).
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> Bhagwan Mahavir Wildlife Sanctuary </li>
                                    <li>  Tambdi Surla Temple</li>
                                    <li> Castle Rock Trek </li>
                                    <li>  Myth And Legends </li>
                                    <li> Geographic Description  </li>
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

export default Dudhsagar
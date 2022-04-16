import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Hchgad = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/harishchadragad.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                                        The fort is quite ancient. Remnants of Microlithic man have been discovered here. The various 
                                        Puranas (ancient scriptures) like Matsyapurana, Agnipurana and Skandapurana include many references 
                                        bout Harishchandragad. Its origin is said to have been in the 6th century, during the rule of 
                                        Kalachuri dynasty. The citadel was built during this era. The various caves probably have been carved
                                        out in the 11th century. In these caves are idols of Lord Vishnu. Though the cliffs are named 
                                        Taramati and Rohidas, they are not related to Ayodhya. Great sage Changdev (one who created the epic 
                                        atvasaar), used to meditate here in the 14th century. The caves are from the same period. 
                                        The various constructions on the fort and those existing the surrounding region point to the 
                                        existence of diverse cultures here. The carvings on the temples of Nageshwar (in Khireshwar village),
                                        in the Harishchandreshwar temple and in the cave of Kedareshwar indicate that the fort belongs to 
                                        the medieval period, since it is related to mahadeva as a totem of tribes Mahadev Koli. They were 
                                        controlling the fort before Moguls. Later the fort was under the control of Moguls. The Marathas 
                                        captured it in 1747.
                                </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/HarishchadraMap.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        Harishchandragad Trek From Pune starts from Goodluck Chowk, where you will be meet the guide. The initial trek 
                        will give you beautiful views of the lush green valleys covered with a thick grey sheet of clouds. You will 
                        come across Saptatirtha Pushkarni Temple and the Kedareshwar Cave where resides a big Shiva Linga, which is 
                        completely surrounded by water.
                        Your base camp will be in Konkankada where you will spend a night under the stars. You will also 
                        witness the Temple of Harishchandreshwar which provides a scenic view of the surrounding region 
                        and the setting sun. Taramati peak is the topmost point on the fort which offers great views 
                        of the surroundings. Your night stay will be in tents on a sharing basis depending upon your size.
                        You can treat your hunger with scrumptious meals included in the package as well.
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li>  Saptatirtha Pushkarni </li>
                                    <li>  Kedareshwar Cave </li>
                                    <li>  Kokan Kada (कोकण कडा) </li>
                                    <li>  Taramati peak </li>
                                    <li>  Caves on Harishchandragad </li>
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

export default Hchgad
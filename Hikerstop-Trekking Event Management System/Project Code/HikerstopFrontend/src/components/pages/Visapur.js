import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Visapur = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/Visapur.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        Visapur fort is a hill fort built by Balaji Vishwanath during 1713-1720 CE.Balaji Vishwanath was
                        first Peshwa of Maratha empire. Though Visapur fort is built much later than Lohagad fort,the 
                        two forts are closely linked as Visapur fort is fortified for protecting Lohagad fort.Both these
                        forts are of Satwahan Era. Too keep watch on Konkan and Bor Ghat, these both forts were of great 
                        importance during Shivaji's period.It is believed that probably it was taken as bounty from an 
                        English ship and presented to the Peshwa by Kanhoji Angre.This fort has Hanuman carvings that 
                        show the patron deity of the empire at that era.But unfortunately, demolished in 1818. At those 
                        times these forts and nearby villages invaded by the enemies so as to extend their empire.The 
                        Visapur fort was built with the purpose to protect the Lohagad fort. The Lohagad fort was ruled 
                        by various dynasties like Satavahanas, Chalukyas, Rashtrakutas, Yadavs, Bahmanis, Nizams, Mughals 
                        and Marathas.Chatrapati Shivaji Maharaj captured The Lohagad fort in 1648AD. But soon as per 
                        the Treaty of Purandar he had to give it to the Mughals. But Shivaji Maharaj again recaptured 
                        it in 1665 AD. And afterwards,it was used to keep the treasury. For a long time, the Marathas 
                        ruled it.         
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/Visapur2.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        Visapur Fort is located in the Pune district of Maharashtra. Attaining a height of 1,084m,steeped 
                        in history and some of the glorious tales of the past, this historic fort has become one of the 
                        most famous tourist and adventure sport for people. Visapur Fort is larger and at a higher 
                        elevation than its twin fort- Lohagad.Located in Maharashtra near the Pune district, the 
                        Visapur fort trek is one of the best treks to do in Monsoon.The Visapur Trek takes around 2.5-3 
                        hours to reach the point, and one will enjoy the trek as with knowing the history of this place 
                        as it is a guided trek. It is not a difficult trek, everyone can enjoy the Visapur fort trek in 
                        monsoons as there is water gushing through the steps while you trek. After the 30-40mins trail, 
                        there is a plateau covered with lush greenery. You can also spot Lohagad, Tikona, and Tung 
                        Forts, and the expressway. 
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>
                                    <li> 
                                        Embark on this exciting trek to Visapur Fort and witness the splendid 
                                        surroundings during the trek
                                    </li>
                                    <li> Trek through the water gushing down the rocks in monsoons with surreal greenery and blissful environment  </li>
                                    <li>Avail pick-up and drop-off facilities included in the package to avoid hassles of transportation.  </li>
                                    <li> Patan village trail </li>
                                    <li> Lohgad  </li>
                                    <li>  near fort pavana lake </li>
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

export default Visapur
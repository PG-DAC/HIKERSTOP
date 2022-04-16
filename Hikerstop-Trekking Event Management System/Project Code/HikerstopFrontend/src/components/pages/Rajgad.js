import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Rajgad = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/Rajgad_Gallery6SP.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        The fort has stood witness to many significant historic events including the birth of Chatrapati
                        Shivaji Maharaj's son Rajaram I, the death of Chatrapati Shivaji Maharaj's Queen Saibai, the 
                        return of Chatrapati Shivaji Maharaj from Agra,the burial of Afzal Khan's head in the 
                        Mahadarwaja walls of Balle Killa, the strict words of Sonopant Dabir to Chhatrapati Shivaji 
                        Maharaj.The Rajgad Fort was also one of the 12 forts that Chatrapati Shivaji Maharaj kept when 
                        he signed the Treaty of Purandar in 1665, with the mughal general Jai Singh I, leader of the 
                        Mughal forces. Under this treaty, 23 forts were handed over to the Mughals.          
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/rajgad3.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        Get away from the hustle and bustle of the city life and escape into the unbounded serenity of 
                        Pune and experience some offbeat adventure, this one exciting trek is devised to take you to 
                        the Rajgad fort, with an altitude of 4182 feet and let you enjoy delightful hiking session. This
                        is located at a distance of 40 km away from Pune, the beauty of this fort offers a breathtaking 
                        view with an amazing trekking experience.Start your trek from the base village Gunjavne and you 
                        would move ahead traversing through the trails of rough terrains and lush greenery. Get 
                        assistance from an experienced guide who will assist you on this trek and will let you know 
                        about the history of Pune. Savor Pithala Bhakeri, which is a famous dish from the local cuisine. 
                        Apart from this, you will be served a delicious lunch and breakfast. Also, you would enjoy a 
                        comfortable pick-up and drop-off facility to and from Mumbai and Pune.
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> Balekilla (The highest point) </li>
                                    <li>  Janani Mandir </li>
                                    <li>  Padmavati temple </li>
                                    <li>  Padmavati lake </li>
                                    <li>  Padmavati Maachi </li>
                                    <li> Main entrance gate from Pali side </li>
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

export default Rajgad
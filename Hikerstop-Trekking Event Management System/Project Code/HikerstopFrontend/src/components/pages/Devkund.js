import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Devkund = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/devkund-waterfall.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        Devkund waterfall is a secluded little place situated deep inside the forests surrounding Bhira 
                        dam.There is a hydroelectric power generation unit by Tata power at Bhira. This place was 
                        little known to trekkers till recent times and has come into limelight due to the waterfall 
                        present deep inside the forest.It is believed that Kundalika river originates at Devkund.Though
                        there isn’t much history associated with the falls, locals here believe that once upon a time 
                        utensils used to emerge from the kund (pond) whenever there was any auspicious ceremony happening in the local village.
                        True or not, the place has its own charm with the water dropping from a height of over 80 ft straight into a 
                        pond of approx. 30 mt diameter.Locals have marked a line of control bisecting the pond. 
                        Swimming in the first half of the bisection is allowed.No one is allowed to go to the point 
                        where the water hits the ground as the depth over there is around 60 feet and there have been 
                        incidences of visitors drowning in it.          
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/devkund2.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        Want to explore the secret serene place away from the mundane cacophony of the city? Let’s embark on 
                        one of the most beloved one-day treks in Maharashtra - The Devkund Waterfall trek. It is 
                        nature’s hidden gem, found in the middle of a dense forest, also named Devkund. It is located 
                        in Bhira village, near Kolad, in the Raigad district of Maharashtra. The waterfall lies on the 
                        Western ghats of Maharashtra It is close to Tamhini Ghat - a mountain passage in the crest of 
                        the Sahyadri ranges in Maharashtra. Tamhini Ghat is famous for its alluring landscape filled with 
                        sprawling valleys dense forests, and some of the prettiest waterfalls, riverbeds, and lakes.
                        Devkund waterfall Trek is about 170 km from Mumbai and 110 km from Pune. The journey to the 
                        base village is about 7 hours long from Mumbai and 5 hours long from Pune. It can be easily 
                        accessed through Mumbai Pune Expressway.Devkund is a rare plunge waterfall in Maharashtra. It 
                        is a beautiful amalgamation of three waterfalls and is said to be the origin of the Kundalika 
                        River. The height of the Devkund Waterfall Trek is 2700 ft. approx.The waterfall tumbles down 
                        with a strong gush on the rocky surface right into a natural pool of turquoise waters.The 
                        fresh waterfall flows throughout the year, making it one of the few perennial waterfalls in 
                        Maharashtra.Devkund, also known as “Bathing Pond of Gods”, this mystical falls also holds 
                        mythological significance and is considered sacred by locals there. Some of the beautiful 
                        treks like Tamhini Ghats, Andharban, etc fall under this area.
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> Bhira-Devkund Trek. The most popular way to reach the Devkund waterfall and 
                                         possibly the only one is the 4.5 km trek from the Bhira village.
							        </li>
                                    <li>  Camping Near Bhira Reservoir Dam </li>
                                    <li>  Visit Ghangad Fort </li>
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

export default Devkund
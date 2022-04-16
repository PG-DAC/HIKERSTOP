import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Panhala = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/panhala3.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        Panahala fort was built between 1178 and 1209 CE, one of 15 forts (others including Bavda, 
                        Bhudargad,Satara, and Vishalgad) built by the Shilahara ruler Bhoja II. It is said that 
                        aphorism Kahaan Raja Bhoj,kahan Gangu Teli is associated with this fort. A copper plate found 
                        in Satara shows that Raja Bhoja held court at Panhala from 1191–1192 CE. About 1209–10, 
                        Bhoja Raja was defeated by Singhana (1209–1247),the most powerful of the Devgiri Yadavas, and 
                        the fort subsequently passed into the hands of the Yadavas.Apparently it was not well looked 
                        after and it passed through several local chiefs. In 1376 inscriptions record the settlement of 
                        Nabhapur to the south-east of the fort.It was an outpost of the Bahamanis of Bidar. Mahmud Gawan,
                        an influential prime minister, encamped here during the rainy season of 1469. On the 
                        establishment of the Adil Shahi dynasty of Bijapur in 1489, Panhala came under Bijapur and was 
                        fortified extensively. They built the strong ramparts and gateways of the fort which, according
                        to tradition, took a hundred years to build. Numerous inscriptions in the fort refer to the 
                        reign of Ibrahim Adil Shah, probably Ibrahim.
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
                        Rich with history and lore the tale of the capture of Panhalagad is famous throughout the pages 
                        of history.Located in the towering ranges of Sahyadri Ranges near the city of Kolhapur, Trek 
                        to Panhalgad is one of the most strategic vantage offering views of the Bijapur trade route, 
                        an important route in the times of Maratha and Mughal empires. The fort itself is an awe 
                        inspiring structure built in the 12th Century. With various historical monuments gracing its 
                        top, Panhalgad trek is a treat for all the history buffs. The monsoons lend their special 
                        caress to the beauty of the fort to transform it into a green and serene paradise. Embark on 
                        this offbeat Monsoon trek and let history come alive!
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> 3 Darwaje (3 दरवाजे) </li>
                                    <li> Sajjakoti (सज्जाकोटी) </li>
                                    <li> Pusati Buruj (पुसाटी बुरुज) </li>
                                    <li> Masai(मसाई पठार) </li>
                                    <li> Ambarkhana </li>
                                    <li> Tabak Udyan </li>
                                    <li> Wagh Darwaja </li>
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

export default Panhala
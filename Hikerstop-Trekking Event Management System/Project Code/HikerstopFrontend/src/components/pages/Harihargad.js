import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Harihargad = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/harihar3.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        Harihar fort was built during the Seuna (Yadava) dynasty period. It was surrendered to Khan 
                        Zamam in 1636 along with Trymbak and other Pune forts.The fort was captured by Captain. 
                        Briggs[2] in 1818 along with 17 other forts.Harihar fort / Harshagad is a fort located 
                        40 km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district, of 
                        Maharashtra. It is an important fort in Nashik district, and was constructed to look upon 
                        the trade route through Gonda Ghat. It receives many visitors because of its peculiar 
                        rock-cut steps. Harihar Fort is a historic site located in Maharashtra's Nashik district.
                        The Harihar trek is famous among many travel enthusiasts seeking a quick retreat amidst 
                        nature.          
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/hariharmap.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        The Harihar Fort trek is blessed with a soothing aura of rich green foliage and panoramic 
                        views of breathtaking landscapes that works as a stress buster dose for every trekker.Soon 
                        as you reach the hilltop of Harihar fort,you will be left stunned by the beautiful 
                        elongated plateau's astonishing views in the lapse of mother nature.The trek to the Harihar 
                        fort is narrow, which depicts a medium level of difficulty. A professional guide will 
                        accompany you throughout the Harihar Fort trek.you are travelling from Mumbai, reach Kasara.
                        From Mumbai CST you get the local train every 15 minutes.You can refer to this chart for 
                        more route information. To know more about the timings download M indicator app.Once you 
                        reach Kasara, get a cab to Khodala.It is another junction which is 30 km from there. You 
                        get a shared taxi to Nirgudpada from Khodala.The entire travel costs you around Rs 100 to 120. 
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> The iconic steps that lead to the top of the fort </li>
                                    <li>  Stunning view of the Sahyadri range from the top </li>
                                    <li>  Trail Information </li>
                                    <li>  Plateau to the Harihar fort top via iconic steps </li>
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

export default Harihargad
import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "../Event.css"



const Kalsubai = () =>{
    return(
        <div>
            <Navbar/>
            <img className='front-img' src='images/Kalsubai1.jpg' width='100%'></img>
            <br/>
            <div className='history'>
                <h1 className='his-h1'>History</h1>
                <div className='his-map'>
                    <div className='his-article'>
                    <article>
                        The mountain range was formed by the same geological events that gave birth to the Western 
                        Ghats.Resting on the Deccan Plateau, a large igneous province, it consists of solidified flood 
                        basalt dating back to the Cenozoic era.The mountain can be viewed in its entirety from Bari 
                        village located on its eastern side,about six km (3.7 mi) from Bhandardara. It can be reached 
                        by road, via Igatpuri on the Mumbai-Nasik route.Trains leaving from Mumbai provide an alternate 
                        mode of transport to Kasara railway station, with connecting State Transport buses, plying on 
                        the Akole-Kasara route, leading up to the base village. Private vehicles from Kasara provide yet 
                        another alternative to public transport. The truncated summit provides a modest area of flat 
                        land which holds a sacred temple of a local deity.A traditional prayer service is held every 
                        Tuesday and Thursday by a priest. During the festival of Navratri a fair comes to be organized 
                        each year with many stalls being set up near the summit to provide pooja materials to the 
                        devotees. On these special occasions, local villagers participate in this fair which helps to 
                        supplement their livelihood and as well as provides them an opportunity to revere the mountain.
                    </article>
                    </div>
                    <div className='his-img'>
                        <br/>
                        <br/>
                        <br/>
                        <img src='images/kalsubai3.jpg' alt='map'  width='800' height='480'></img>
                    </div>
                </div>
            </div>
            
            <div className='trek-info'>
                <div className='trek-overview'>
                    <h1>Trek Overview</h1>
                    <br/>
                    <p>
                        Kalsubai is located in MaharashtraKalsubaiKalsubai Location of Kalsubai, Maharashtra Location 
                        Border of Igatpuri Taluka,Nashik district and Akole Taluka, Ahmednagar district, Maharashtra, 
                        India Kalsubai is a 6.6 km-long (4.1 mi) trek with an elevation gain of around 2,700 feet 
                        (820 m).This is a one-day trek having a moderately hard difficulty level, with lush green 
                        landscapes and multiple waterfalls.The peak attracts many trekkers and devotees determined to 
                        scale the mountain. To reach the summit there are well-designated trekking routes. The most 
                        popular route is through the eastern mountain face taking off from the base village Bari.The 
                        Waki river, a tributary of Pravara, takes origin on its eastern slope and flows like a stream 
                        through the outer fringes of Bari. A short distance away from the stream a Hanuman temple has 
                        been built. This provides an important landmark to commence the trek as well as a resting post 
                        for those nearing the final lap of their trek. The route from behind this temple takes the 
                        hiker straight to the summit. The trek along this route is a mix of easy to ascend slopes as well
                        as treacherous rocky outcrops overlooking the valley below. Considering the increasing footfall 
                        in recent years,the government has built iron ladders along the vertical hill slopes. These
                        assist trekkers to allow for a convenient and safe ascent.
                    </p>
                </div>
                <br/>
                <div className='trek-explore'>
                    <h1>Places to Explore</h1>
                    <br/>
                                <ol>  
                                    <li> Kalsubai temple </li>
                                    <li> Bhandardara Dam , located 6 km away, impounds the Pravara river to form the Arthur Lake </li>
                                    <li> Arthur Lake: The clear and placid lake is bounded by thick canopied forests of the Sahyadri hills </li>
                                    <li> Umbrella falls </li>
                                    <li> 
                                        mountain range forts such as Ramsej, Harihargad, Brahmagiri, Anjaneri, Ghargad, Bahula, Tringalwadi,
                                        Kavnai can be seen   
                                    </li>
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

export default Kalsubai
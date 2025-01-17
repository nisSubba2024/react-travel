import Header from "./componenets/Header.jsx"
import Entry from "./componenets/Entry.jsx"
import Contact from "./componenets/Contact.jsx"
import "./styles/Contact.css"
import whiskaz from "/src/assets/mr-whiskerson.png"

import travelData from "../data.js"


import mountFuji from "./assets/fugi.png"

function App()
{

    const data = travelData.map(places => {
        // another way to get rid of warning for unique key error is:
        // map(places, index) -> gives you a way to provide unique way to access each element
        // then , place key={index}
        // return <Entry
        //     key={places.id}
        //     img={
        //         {
        //             src: places.img.src,
        //             alt: places.img.alt
        //         }
        //     }
        //     title={places.title}
        //     country={places.country}
        //     googleMapsLink={places.googleMapsLink}
        //     text={places.text}
        // />

        return <Entry
            key={places.id}
            entry={places}

            // you can also do: {...places}
        />

    })

    return (
        <>
            <Header/>
            <main>
                {/*<Entry*/}
                {/*    img={*/}
                {/*       {*/}
                {/*           src: mountFuji,*/}
                {/*           alt: "Mount Fuji"*/}
                {/*       }*/}
                {/*    }*/}
                {/*    title={"Mount Fuji"}*/}
                {/*    country={"Japan"}*/}
                {/*    googleMapsLink={"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"}*/}
                {/*    date={"12 Jan, 2021 - 24 Jan, 2021"}*/}
                {/*    text={"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."}*/}
                {/*/>*/}
                {data}
            </main>
        </>
    )
}



// function App()
// {
//     return (
//         <div className={"contacts"}>
//             <Contact
//                 img={whiskaz}
//                 name={"Mr. Max"}
//                 phoneNumber={"(212) 555-1234"}
//                 email={"mr.whiskaz@catnap.meow"}
//             />
//             <Contact
//                 img={"/src/assets/felix.png"}
//                 name={"Mr. Capital"}
//                 phoneNumber={"(212) 321-4521"}
//                 email={"mr.whiskaz@catnap.meow"}
//             />
//             <Contact
//                 img={"/src/assets/fugi.png"}
//                 name={"Mr. Nick"}
//                 phoneNumber={"(212) 458-452"}
//                 email={"mr.whiskaz@catnap.meow"}
//             />
//             <Contact
//                 img={"/src/assets/fluffykins.png"}
//                 name={"Mr. John"}
//                 phoneNumber={"(212) 101-0010"}
//                 email={"mr.whiskaz@catnap.meow"}
//             />
//
//         </div>
//     )
// }


export default App;
function Entry(props)
{
    // console.log(props.img)
    //
    // const ninjaTurtles = [
    //     <h2>Donatello</h2>,
    //     <h2>Michaelangelo</h2>,
    //     <h2>Rafael</h2>,
    //     <h2>Leonardo</h2>]

    // const ninjaTags = ninjaTurtles.map(ninja => `<h2>${ninja}</h2>`)

    console.log(props.entry.img)

    return (
        <>
            {/*if passed {...places}, remove entry*/}

            <div className="entry-wrapper">
                <div className="place-img-wrapper">
                    <img src={props.entry.img.src}
                         alt={props.entry.img.alt} className={"place-img"}/>
                </div>
                <div className="place-content">
                    <div className="location-wrapper">
                        <img src={"./src/assets/marker.png"} alt={"image of marker"} className={"marker-icon"}/>
                        <h3 className={"country-name"}>{props.entry.country}</h3>
                        <a href={props.entry.googleMapsLink}
                           className="google-map-link">View on Google Maps</a>
                    </div>
                    <div className="content">
                        <h1 className={"location-name"}>{props.entry.title}</h1>
                        <h3>{props.entry.dates}</h3>
                        <p className="place-bio">{props.entry.text}</p>
                    </div>
                </div>
            </div>





            {/*<div className="entry-wrapper">*/}
            {/*    <div className="place-img-wrapper">*/}
            {/*        <img src={props.img.src}*/}
            {/*             alt={props.img.alt} className={"place-img"}/>*/}
            {/*    </div>*/}
            {/*    <div className="place-content">*/}
            {/*        <div className="location-wrapper">*/}
            {/*            <img src={"./src/assets/marker.png"} alt={"image of marker"} className={"marker-icon"}/>*/}
            {/*            <h3 className={"country-name"}>{props.country}</h3>*/}
            {/*            <a href={props.googleMapsLink}*/}
            {/*               className="google-map-link">View on Google Maps</a>*/}
            {/*        </div>*/}
            {/*        <div className="content">*/}
            {/*            <h1 className={"location-name"}>{props.title}</h1>*/}
            {/*            <h3>{props.date}</h3>*/}
            {/*            <p className="place-bio">{props.text}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <hr/>
            {/*{ninjaTurtles}*/}

        </>

    )
}

const someArray = {
    1: {
        "name": "jOhn",
        "email": "jOhn@gmail.com",
    },
    2: {
        "name": "Jordan",
        "email": "jordan@gmail.com",
    }
}

// for (const key in someArray)
// {
//     console.log(`Name: ${someArray[key].name} Email: ${someArray[key].email}`);
// }



export default Entry;
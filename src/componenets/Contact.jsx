function Contact(props)
{
    console.log(props);
    return (

        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="/src/assets/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phoneNumber}</p>
            </div>
            <div className="info-group">
                <img
                    src="/src/assets/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>

    )

}

// Prop returns a javascript objects, or dictionary of key value pair


export default Contact;
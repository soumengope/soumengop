import './Contacts.css';
const Contacts = ()=>{
    return(
        <>
        <h2 className="contacts_header">Contact Me</h2>

        <div className="contacts_lists">
            <div className="contact_list">
                <img className="gmail" src="gmail.png" alt="gmail logo"/>
                <p>Send me mail at</p><hr/>
                <p>soumengop@gmail.com</p>
            </div>
            <div className="contact_list">
                <img className="call" src="call.png" alt="call logo"/>
                <p>call me at</p><hr/>
                <p>+91 7319047005</p>
                <p>+91 8016808823</p>
            </div>
            <div className="contact_list">
                <img className="address" src="address.png" alt="gmail logo"/>
                <p>My address</p><hr/>
                <p>Bankura, West Bengal, India</p>
            </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.019612296813!2d86.74436964339424!3d23.158528132733164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f65001fffba659%3A0xa67b01ea37dbe0d7!2sGuniada%2C%20West%20Bengal%20722173!5e0!3m2!1sen!2sin!4v1731294391741!5m2!1sen!2sin" 
        title="gmap"
        className="gmap_loc" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </>
    )
}
export default Contacts;
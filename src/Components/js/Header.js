import '../css/Header.css'
const Header = ()=>{
    return(
        <section className="main_header ">
            <div className="header_logo">SOUMEN GOPE</div>
            <div className="header_socialLists">
                <div className="socialLists">
                <img className="github_logo" src="github.png" alt="github logo" />
                </div>
                <div className="socialLists">
                <img className="gmail_logo" src="gmail.png" alt="gmail logo" />
                </div>
                <div className="socialLists">
                    <img className="linkdin_logo" src="linkdin.png" alt="linkdin logo" />
                </div>
                <div className="socialLists">
                    <img className="twitter_logo" src="twitter.png" alt="twitter logo"/>
                </div>
            </div>
        </section>
    )
}
export default Header;
import '../css/Header.css'
const Header = ()=>{
    return(
        <>
        <section className="main_header">
            <div className="header_logo">SOUMEN GOPE</div>
            <div className="header_socialLists">
                <div className="socialLists">
                    <a href="https://github.com/soumengope" target="_blank" rel="noopener noreferrer">
                        <img className="github_logo" src="github.png" alt="Github profile of Soumen Gope"/>
                    </a>
                </div>
                <div className="socialLists">
                    <a href="mailto:soumengop@gmail.com" rel="noopener noreferrer">
                        <img className="gmail_logo" src="gmail.png" alt="Send an email to Soumen Gope" />
                    </a>
                </div>
                <div className="socialLists">
               
                    <a href="https://www.linkedin.com/in/soumengop/" target="_blank" rel="noopener noreferrer">
                        <img className="linkdin_logo" src="linkdin.png" alt="LinkedIn profile of Soumen Gope" />
                    </a>
                </div>
                <div className="socialLists">
                    <a href="https://x.com/soumen_gope" target="_blank" rel="noopener noreferrer">
                        <img className="twitter_logo" src="twitter.png" alt="Twitter profile of Soumen Gope"/>
                    </a>
                </div>
            </div>
        </section>
        <div>
            <img className="boxDgn" src="boxDgn_pf.svg" alt="box design logo" />
        </div>
        </>
    )
}
export default Header;
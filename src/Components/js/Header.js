import '../css/Header.css'
const Header = ()=>{
    return(
        <>
        <section className="main_header">
            <div className="header_logo">SOUMEN GOPE</div>
            <div className="header_socialLists">
                <div className="socialLists">
                    <a href="https://github.com/soumengope" target="_blank" rel="noopener noreferrer">
                        <img className="github_logo" src="github.png" alt="github logo"/>
                    </a>
                </div>
                <div className="socialLists">
                    <a href="mailto:soumengop@gmail.com" rel="noopener noreferrer">
                        <img className="gmail_logo" src="gmail.png" alt="gmail logo" />
                    </a>
                </div>
                <div className="socialLists">
               
                    <a href="https://www.linkedin.com/in/soumengop/" target="_blank" rel="noopener noreferrer">
                        <img className="linkdin_logo" src="linkdin.png" alt="linkdin logo" />
                    </a>
                </div>
                <div className="socialLists">
                    <a href="https://x.com/soumen_gope" target="_blank" rel="noopener noreferrer">
                        <img className="twitter_logo" src="twitter.png" alt="twitter logo"/>
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
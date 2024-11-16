import '../css/Hobbies.css';
const Hobbies = ()=>{
    return(
        <>
        <section className="hobbies_main">
            <h2 className="hobbies_header">Hobbies</h2>
            <div className="hobbies_control">

                <div className="hobbies_lists">
                    <div className="hobbies_img">
                    <img className="hobbies_imgLists" src="photography.png" alt="photography logo"/>
                    </div>
                    <span><img className="curveArrow" src="curve_arrow.svg" alt="curve arrow logo"/></span>
                    <h3 className="hobbies_name">Photography</h3>
                    <p className="hobbies_desc">
                    “A good snapshot keeps a moment from running away.”
                    <span>– Eudora Welty </span>
                    </p>
                </div>
                <div className="hobbies_lists">
                    <div className="hobbies_img">
                    <img className="hobbies_imgLists" src="books.png" alt="books logo"/>
                    </div>
                    <span><img className="curveArrow" src="curve_arrow.svg" alt="curve arrow logo"/></span>
                    <h3 className="hobbies_name">Reading Books</h3>
                    <p className="hobbies_desc">
                    "There is no friend as loyal as a book."
                    <span>– Ernest Hemingway</span>
                    </p>
                </div>
                <div className="hobbies_lists">
                    <div className="hobbies_img">
                    <img className="hobbies_imgLists" src="movies.png" alt="movies logo"/>
                    </div>
                    <span><img className="curveArrow" src="curve_arrow.svg" alt="curve arrow logo"/></span>
                    <h3 className="hobbies_name">Watching Movies</h3>
                    <p className="hobbies_desc">
                    "Cinema is a mirror by which we often see ourselves." 
                    <span>– Alejandro González Iñárritu</span>
                    </p>
                </div>
                <div className="hobbies_lists">
                    <div className="hobbies_img">
                    <img className="hobbies_imgLists" src="music.png" alt="music logo"/>
                    </div>
                    <span><img className="curveArrow" src="curve_arrow.svg" alt="curve arrow logo"/></span>
                    <h3 className="hobbies_name">Listening Music</h3>
                    <p className="hobbies_desc">
                    "Music is the universal language of mankind." 
                    <span>– Henry Wadsworth Longfellow</span>
                    </p>
                </div>
                <div className="hobbies_lists">
                    <div className="hobbies_img">
                        <img className="hobbies_imgLists" src="traveling.png" alt="traveling logo"/>
                    </div>
                    <span><img className="curveArrow" src="curve_arrow.svg" alt="curve arrow logo"/></span>
                    <h3 className="hobbies_name">Traveling</h3>
                    <p className="hobbies_desc">
                    "The journey of a thousand miles begins with a single step."
                    <span>– Lao Tzu</span>
                    </p>
                </div>
                <div className="hobbies_lists">
                    <div className="hobbies_img">
                    <img className="hobbies_imgLists" src="cooking.png" alt="cooking logo"/>
                    </div>
                    <span><img className="curveArrow" src="curve_arrow.svg" alt="curve arrow logo"/></span>
                    <h3 className="hobbies_name">Cooking</h3>
                    <p className="hobbies_desc">
                    "Good food is the foundation of genuine happiness." 
                    <span>– Auguste Escoffier</span>
                    </p>
                </div>

            </div>
        </section>
        </>
    )
}
export default Hobbies;
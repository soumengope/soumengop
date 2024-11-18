import '../css/Intro.css'
const Intro = ()=>{
    return(
        <>
        <section className="intro_main">
            <div className="intro_left">
                <img className="intro_pic" src="books.png" alt="my-photo" />
            </div>
            <div className="intro_right">
                <span> <img className="curveFlat" src="curveFlat_pf.svg" alt="curveFlat logo" /></span>
                <h1>Hello, my name is Soumen Gope , </h1>
                <h3>I'm a Full-Stack Web Developer.</h3>
                <p>
                Born and raised in West Bengal, India, I completed my Diploma in Electrical Engineering in 2019. Inspired by a strong passion for technology, I transitioned into software engineering, focusing on full-stack web development. My expertise spans modern web technologies, including HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB. Committed to continuous learning, I thrive on crafting efficient, 
                user-centric solutions while exploring the ever-evolving landscape of web development.
                </p>
            </div>
        </section>
        </>
    )
}
export default Intro;
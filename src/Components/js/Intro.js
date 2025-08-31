import '../css/Intro.css'
const Intro = ()=>{
    return(
        <>
        <section className="intro_main">
            <div className="intro_left">
                <div className="introPic_wrapper">
                    <img className="intro_pic" src="soumen.jpeg" alt="soumen gope's pic" />
                </div>
            </div>
            <div className="intro_right">
                <span> <img className="curveFlat" src="curveFlat_pf.svg" alt="curveFlat logo" /></span>
                <h1>Hello, my name is Soumen Gope , </h1>
                <h3>I'm a Full-Stack Web Developer.</h3>
                <p>
                Born and raised in West Bengal, India. I completed my Diploma in Electrical Engineering in 2019. Inspired by a strong passion for technology, I transitioned into software engineering, focusing on full-stack web development. 
                I am proficient in modern web technologies, including HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. My expertise extends to state management with Redux, real-time communication using Socket.io, third-party integrations such as Google Login and payment gateways, as well as implementing AI solutions and machine learning algorithms. 
                I am passionate about building scalable, user-centric applications and continuously expanding my technical expertise. Committed to continuous learning, I thrive on crafting efficient, 
                user-centric solutions while exploring the ever-evolving landscape of web development.
                </p>
            </div>
        </section>
        </>
    )
}
export default Intro;
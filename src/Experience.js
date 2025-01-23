import './Experiences.css';
const Experience = ()=>{
    return(
        <>
        <h2 className="experiences_header">Experiences</h2>

        <div className="experiences_main">
            <div className="experences_lists">
                <p>Feb 2024 – Apr 2024</p>
                <h3>Web Developer Internship</h3>
                <h5>Systemic Altruism</h5>
                <p className="experiences_desc">Develop and maintain responsive, user-friendly websites, collaborating effectively with teams, troubleshooting and
                debugging issues, optimizing website performance, and staying up to date with industry standards.</p>
            </div>
            <div className="experences_lists">
                <p>Jan 2024 – Feb 2024</p>
                <h3>Front-end Web Developer Internship</h3>
                <h5>InnoBytes Technology</h5>
                <p className="experiences_desc">Crafted a sophisticated user signup form leveraging ReactJS, boasting responsive design and robust functionality for
                seamless onboarding experiences across diverse devices.</p>
            </div>
        </div>
        </>
    )
}
export default Experience;
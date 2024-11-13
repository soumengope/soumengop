import '../css/Project.css';
import { Link } from 'react-router-dom';
const Project = ()=>{
    return(
        <section className="project_main">
            <h2>Projects I Built</h2>
            <div className="project_control">

                <div className="project_lists">
                    <div className="project_image">
                        <div className="prot_img">
                            <img className="protImg_lists" src="saturn_pot.png" alt="saturn mobile view"/>
                        </div>
                        <div className="lan_img">
                        <img className="lanImg_lists" src="saturn.png" alt="saturn desktop view"/>
                        </div>
                    </div>
                    <h3 className="project_name">first project</h3>
                    <p className="project_desc">
                    Note that the development build is not optimized.
                    To create a production build
                    </p>
                    <div className="project_links">
                        <img className="project_gitImg" src="github.png" alt="github logo" />
                        <img className="project_liveImg" src="visit.png" alt="globe logo" />
                    </div>
                </div>
                <div className="project_lists">
                    <div className="project_image">
                        <div className="prot_img">
                        <img className="protImg_lists" src="innobytes_mobile.png" alt="innobytes mobile view"/>
                        </div>
                        <div className="lan_img">
                        <img className="lanImg_lists" src="innobytes_desktop.png" alt="innobytes desktop view"/>
                        </div>
                    </div>
                    <h3 className="project_name">second project</h3>
                    <p className="project_desc">
                    Note that the development build is not optimized.
                    To create a production build
                    </p>
                    <div className="project_links">
                        <img className="project_gitImg" src="github.png" alt="github logo" />
                        <img className="project_liveImg" src="visit.png" alt="globe logo" />
                    </div>
                </div>

            </div>
            <Link to="/projects">See More</Link>
        </section>
    )
}
export default Project; 
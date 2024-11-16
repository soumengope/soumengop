import '../src/Components/css/Project.css';
import './Projects.css';
const Projects = ()=>{
    return(
        <>
        <section className="project_main">
            <h2>Projects I Built</h2>
            <div className="project_control">

                <div className="project_lists">
                    <div className="hole_circle"></div>
                    <div className="project_image">
                        <div className="prot_img">
                        <img className="protImg_lists" src="saturn_pot.png" alt="saturn mobile view"/>
                        </div>
                        <div className="lan_img">
                        <img className="lanImg_lists" src="saturn.png" alt="saturn desktop view"/>
                        </div>
                    </div>
                    <h3 className="project_name">Saturn Meme Token</h3>
                    <p className="project_desc">
                    Saturn Meme Token is a frontend web development showcase, designed purely for demonstration purposes. This mock site highlights UI/UX design and layout skills, not a real crypto platform.
                    </p>
                    <div className="project_links">
                    <a href="https://github.com/soumengope/Saturn-Meme-Token" target="_blank" rel="noopener noreferrer">
                        <img className="project_gitImg" src="github.png" alt="github logo" />
                    </a>
                    <a href="https://soumengope.github.io/Saturn-Meme-Token/" target="_blank" rel="noopener noreferrer">
                        <img className="project_liveImg" src="visit.png" alt="globe logo" />
                    </a>
                    </div>
                </div>
                <div className="project_lists">
                    <div className="hole_circle"></div>
                    <div className="project_image">
                        <div className="prot_img">
                        <img className="protImg_lists" src="innobytes_mobile.png" alt="innobytes mobile view"/>
                        </div>
                        <div className="lan_img">
                        <img className="lanImg_lists" src="innobytes_desktop.png" alt="innobytes desktop view"/>
                        </div>
                    </div>
                    <h3 className="project_name">Innobytes Internship Project</h3>
                    <p className="project_desc">
                    This Next.js showcase project features a custom CSS design, a mobile-responsive user signup form, and robust validation for an enhanced user experience. 
                    It includes sections for personal, residency, and bank information inputs.
                    </p>
                    <div className="project_links">
                    <a href="https://github.com/soumengope/innobytesFrontend" target="_blank" rel="noopener noreferrer">
                        <img className="project_gitImg" src="github.png" alt="github logo" />
                    </a>
                    <a href="https://innobytes-frontend-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className="project_liveImg" src="visit.png" alt="globe logo" />
                    </a>
                    </div>
                </div>
                <div className="project_lists">
                    <div className="hole_circle"></div>
                    <div className="project_image">
                        <div className="prot_img">
                        <img className="protImg_lists" src="portfolio_phpMob.png" alt="portfolio mobile view"/>
                        </div>
                        <div className="lan_img">
                        <img className="lanImg_lists" src="portfolio_phpDesk.png" alt="portfolio desktop view"/>
                        </div>
                    </div>
                    <h3 className="project_name">My Previous Portfolio</h3>
                    <p className="project_desc">
                    This is my previous portfolio website, showcasing my skills in web development, photography, and graphic design. It highlights my projects, expertise, and personal interests.
                    </p>
                    <div className="project_links">
                    <a href="https://github.com/soumengope/myportfolio" target="_blank" rel="noopener noreferrer">
                        <img className="project_gitImg" src="github.png" alt="github logo" />
                    </a>
                    <a href="https://soumengope.free.nf/" target="_blank" rel="noopener noreferrer">
                        <img className="project_liveImg" src="visit.png" alt="globe logo" />
                    </a>
                    </div>
                </div>
                <div className="project_lists">
                    <div className="hole_circle"></div>
                    <div className="project_image">
                        <div className="prot_img">
                        <img className="protImg_lists" src="mycomp_mob.png" alt="mycomp mobile view"/>
                        </div>
                        <div className="lan_img">
                        <img className="lanImg_lists" src="mycomp_desk.png" alt="mycomp desktop view"/>
                        </div>
                    </div>
                    <h3 className="project_name">Mycomp Landing Page</h3>
                    <p className="project_desc">
                        This Figma-designed frontend showcase website highlights a full-service app development company, featuring an engaging layout, comprehensive services, and project achievements. 
                        It's crafted purely for display and does not represent a real business.
                    </p>
                    <div className="project_links">
                    <a href="https://github.com/soumengope/mycomp_landingPage" target="_blank" rel="noopener noreferrer">
                        <img className="project_gitImg" src="github.png" alt="github logo" />
                    </a>
                    <a href="https://mycomp-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className="project_liveImg" src="visit.png" alt="globe logo" />
                    </a>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
export default Projects;
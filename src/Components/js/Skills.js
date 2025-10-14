import '../css/Skills.css';
import { useState, useEffect, useRef } from 'react';
const Skills = ()=>{
    const ref = useRef(null);
    const [view, setView] = useState(null);

    useEffect(()=>{
        const target = ref.current;
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setView(entry.isIntersecting);
        },
        {
            threshold:0.2
        })

        if(target){
            observer.observe(target);
        }
        return ()=>{
            if(target) observer.unobserve(target)
        }

    },[])
    return(
        <>
        <section className="skills_main" ref={ref}>
            <h1 className="skills_header">Skills & Technologies</h1>
            <div className="skills_control">

                <div className="skills_contents">
                        <div className="html_main">
                            <div className="htmlTop_div skills_langAlign">
                                <img src="html.png" alt="html logo" />
                                <p>HTML</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "html_percentageInner skills_percentageInner gha_style" : "html_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '90%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="css_main">
                            <div className="cssTop_div skills_langAlign">
                                <img src="css.png" alt="css logo" />
                                <p>CSS</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "css_percentageInner skills_percentageInner cme_style" : "css_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '80%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="js_main">
                            <div className="jsTop_div skills_langAlign">
                                <img src="js.png" alt="javascript logo" />
                                <p>JavaScript</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "js_percentageInner skills_percentageInner jrnr_style" : "js_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '70%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="react_main">
                            <div className="reactTop_div skills_langAlign">
                                <img src="react.png" alt="react logo" />
                                <p>ReactJS</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "react_percentageInner skills_percentageInner jrnr_style" : "react_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '70%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="redux_main">
                            <div className="reduxTop_div skills_langAlign">
                                <img src="redux.png" alt="redux logo" />
                                <p>Redux</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "redux_percentageInner skills_percentageInner jrnr_style" : "redux_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '70%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="node_main">
                            <div className="nodeTop_div skills_langAlign">
                                <img src="nodejs.png" alt="nodejs logo" />
                                <p>NodeJS</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "node_percentageInner skills_percentageInner jrnr_style" : "node_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '70%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="express_main">
                            <div className="expressTop_div skills_langAlign">
                                <img src="express.png" alt="express js logo" />
                                <p>Express</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "express_percentageInner skills_percentageInner cme_style" : "express_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '80%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="mongo_main">
                            <div className="mongoTop_div skills_langAlign">
                                <img src="mongodb.png" alt="mongodb logo" />
                                <p>MongoDB</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "mongo_percentageInner skills_percentageInner cme_style" : "mongo_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '80%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="skills_contents">
                        <div className="github_main">
                            <div className="githubTop_div skills_langAlign">
                                <img src="github.png" alt="github logo" />
                                <p>gitHub</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "github_percentageInner skills_percentageInner gha_style" : "github_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '90%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="aiml_main">
                            <div className="aimlTop_div skills_langAlign">
                                <img src="aiml.png" alt="ai/ml logo" />
                                <p>AI/ML</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "aiml_percentageInner skills_percentageInner aiml_style" : "aiml_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '50%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="ard_main">
                            <div className="ardTop_div skills_langAlign">
                                <img src="arduino.png" alt="arduino logo" />
                                <p>Arduino</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "ard_percentageInner skills_percentageInner gha_style" : "ard_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '90%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="skills_contents">
                        <div className="ps_main">
                            <div className="psTop_div skills_langAlign">
                                <img src="photoshop.png" alt="photoshop logo" />
                                <p>Photoshop</p>
                                <span><img className="curveLine" src="curveLine_pf.svg" alt="curve lines logo" /></span>
                            </div>
                            <div className="skills_percentageOuter">
                                <div className={view ? "ps_percentageInner skills_percentageInner ps_style" : "ps_percentageInner skills_percentageInner"}>
                                    <p className="skills_percentage">{(view) ? '60%' : '0%'}</p>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </section>
        </>
    )
}
export default Skills;
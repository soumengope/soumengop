import './Cv.css';
const Cv = ()=>{
    return(
        <>
        <h2 className="resume_header">My Resume</h2>
        <div className="img_div">
            <img src="resume2024.jpg" alt="Soumen Gope's resume" width="796px" height="1125px" />
            <div className="cv_download"><a href="resume2024.pdf" download>Download Resume</a></div>
        </div>
        </>
    )
}
export default Cv;
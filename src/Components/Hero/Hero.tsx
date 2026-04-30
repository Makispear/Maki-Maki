import '../../index.css'
import './hero.css'
const Hero: React.FC = () => {
    return <div className='hero-section'>
        <div className='hero-texts'>
            <h1>
                I build scalable software solutions 
                <span> and cloud systems.</span>
            </h1>
            <h2>Full Stack Software Engineer <span>|</span> AWS Certified <span>|</span> 4 Years</h2>
            <p>I design/build and deploy product-ready applications and 
                infrastructure that solve real-world problems.</p>
            <div className='btn-div'>
                <button className='view-work-btn'>View My Work</button>
                <button className='download-resume-btn'>Download Resume</button>
            </div>
        </div>
        <div className='img-div'>
        </div>
    </div>
}

export default Hero
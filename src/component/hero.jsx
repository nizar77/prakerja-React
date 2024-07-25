import gmb2 from '../assets/tim.png'

let Hero =(()=>{
    return(

<section id="hero" className="hero">
        <div class="hero-text">
            <span>This is Taim</span>
            <h1>Full Stack <span>Developer</span></h1>
            <p>With 5+ years of experience</p>
            <div className="social-media">
               <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://wa.me/6285787031020" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            
             </div>
            <a href="#about" class="hero-btn">Learn More</a>
        </div>
         <div className="hero-img">
            <img src={gmb2} alt="naik sepeda" />
         </div>  
         
    </section>
    )

})
export default Hero
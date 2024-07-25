import gmb1 from '../assets/daun.png'

let CompHeader = (()=>{

  return (
    <header>          
    <nav className="navbar navbar-expand-lg fixed-top navbarScroll bg-dark">
        <div className="container">
            <div className="navbar-brand">
             <img src={gmb1}  />
             <a className="display-6" href="#"><p>Kemangi <span>Farm</span></p></a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
            <div>
                <button id="moon" className="myChange"> <i className="fa fa-moon"></i></button>
            </div>
        </div>
    </nav>
</header>
  );
}
)
export default CompHeader;
   
let Portfolio = (()=>{
    return(
<>
<section className="container">
        <div className="portfolio-title text-center mb-4">portfolio</div>
        <div className="row portfolio">
            <div className="col-lg-4 col-md-6">
                <div className="row">

                    <div className="suhu">
                        <h5>Konversi Suhu Fahrenheit ke Celcius</h5>
                        <div className="mb-3">
                            <label for="inputfarenheit" className="form-label display-6">Farenheit</label>
                            <input id="inputFahrenheit" type="number" placeholder="Fahrenheit" oninput="temperatureConverter(this.value)" onchange="temperatureConverter(this.value)"  className="form-control"/>

                          </div>
                          <h4 className="mt-8">Celcius</h4>
                          <div className="mb-3 display-6" id="ceclcius"> </div>
                          
                    </div> 
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <img src="https://images.unsplash.com/photo-1721406769891-f2ba651401d9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded" />                
            </div>
            <div className="col-lg-4 col-md-6">
                <h3 id="dateTime" className="text-info"></h3>
            </div>
            <div className="col-lg-4 col-md-6">
                <img src="https://images.unsplash.com/photo-1721406769891-f2ba651401d9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded" />                

            </div>
            <div className="col-lg-4 col-md-6">
                <img src="https://images.unsplash.com/photo-1721406769891-f2ba651401d9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded" />                
            </div>
            <div className="col-lg-4 col-md-6">
                <img src="https://images.unsplash.com/photo-1721406769891-f2ba651401d9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded" />                
            </div>
          
        </div>
        <div id="time"></div>
    </section> 

</>
    )
})
export default Portfolio
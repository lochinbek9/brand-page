

function Hero() {
    return (
        <section className="hero">
           <div className="container hero-container">
           <div className="hero-content">
                <h1 className="hero-title">
                    YOUR FEET 
                    DESERVE
                    THE BEST
                </h1>
                <p className="hero-text">
                     YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="hero-btn-left">Category</button>
                </div>
                <div className="shopping">
                    <p> Also Available On</p>
                    <div className="brand-icons">
                        <img src="./img/flipkart.png" alt="flipkart" />
                        <img src="./img/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./img/krasofka.png" alt="krasofka" />
            </div>
           </div>
        </section>
    )
}

export default Hero
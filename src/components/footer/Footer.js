import './footer.css'
const Footer = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Footer</h3>
                    <p>
                    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                    </p>
                </div>
                <div className="col-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <img src="../../img/workshop.jpg" alt="" width="100%" height="100%"/>
                            </div>
                            <div className="col">
                                <h5>Lorem</h5>
                                <h6>Sed mattis nunc</h6>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-3">
                                <img src="../../img/gondol.jpg" alt="" width="100%" height="100%"/>
                            </div>
                            <div className="col">
                                <h5>Lorem</h5>
                                <h6>Sed mattis nunc</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4>POPULAR TAGS</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                <div className="row">
                                <div className="col firsttag">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                    <div className="col remtags">
                                        Travel
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
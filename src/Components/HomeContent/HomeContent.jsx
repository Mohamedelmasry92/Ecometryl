import React from 'react'

export default function HomeContent() {
  return <>    
    
  <header>
    <div className="items ">
        <div className="layout">
            <div className="header">
                <div className="text-center">
                  <div>
                    <h1>WELCOME TO </h1>
                    <h1 className='font-large text-main'>ECOMETRYL</h1>
                    <h3 className="mt-3">Bridging The Gap Between Need & Excess</h3>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </header>



    <section id="services" className="bg-light pt-4  text-center">
        <div className="container">
            <div className="title pb-3">
                <h2 className='mt-5 fw-bold'>SERVICES</h2>
                <div className="line translate-middle"></div>
            </div>
            <div className="row mt-5 services">
                <div className="col-sm-6 col-md-4">
                    <div className=" bg-white shadow py-5 mb-5 rounded-4 hover">
                        <div className="icon d-flex m-auto justify-content-center align-items-center rounded-circle mb-4">
                            <i className="fa-solid fa-money-bill-trend-up fs-2"></i>
                        </div>
                        <h3>Trading</h3>
                        <p className='lead mt-3 '>sell your surplus materials or buy the needed amount of materials in low price</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className=" bg-white shadow py-5 mb-5 rounded-4 hover">
                        <div className="icon d-flex m-auto justify-content-center align-items-center rounded-circle mb-4">
                            <i className="fa-solid fa-people-group fs-2"></i>
                        </div>
                        <h3>Join a team</h3>
                        <p className='lead mt-3 '>join a team to buy together one or more items and divide the materials between you as needed</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className=" bg-white shadow py-5 mb-5 rounded-4 hover">
                        <div className="icon d-flex m-auto justify-content-center align-items-center rounded-circle mb-4">
                            <i className="fa-regular fa-handshake fs-2"></i>
                        </div>
                        <h3>Charity</h3>
                        <p className='lead mt-3 '>With Ecometryl, give your unneeded surplus materials for researchers in need</p>
                    </div>
                </div>

            </div>
        </div>

        <section className="background-img bg-light">
            <div className="overlay-blue"></div>
            <div className="container text-center text-white opacity-100">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                                <i className="fa-solid fa-dumpster fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>Total Materials</span>
                            <p className='fw-bolder mt-3'>More than 700 items are offered through the platform</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                              <i className="fa-solid fa-user-doctor fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>Experience</span>
                            <p className='fw-bolder mt-3'>1 year of experience in exchanging surplus materials.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div>
                            <div className="mb-3 icon-sec m-auto d-flex justify-content-center align-items-center rounded-circle">
                                <i className="fa-solid fa-users fs-1"></i>
                            </div>
                            <span className='fs-3 fw-bold'>Total clients</span>
                            <p className='fw-bolder mt-3'>1500 researchers.</p>
                        </div>
                    </div>

                </div>
            </div>
            
            
        </section>
    </section>





            <div className="title pb-3 text-center">
                <h2 className='mt-5 fw-bold'>PRODUCTS</h2>
                <p className='fs-5'>Great products for great people</p>
                <div className="line translate-middle"></div>
            </div>


  </>
}

import React from 'react'
// import styles from './JoinTeam.module.css'
// import ProductLine from '../ProductLine/ProductLine'
// import Products from '../Products/Products'
// import { Link } from 'react-router-dom'
import product1 from '../../assets/images/Products/prod1.jpeg'
import product2 from '../../assets/images/Products/prod2.jpeg'
import product4 from '../../assets/images/Products/prod4.jpeg'
import product10 from '../../assets/images/Products/prod10.jpeg'





export default function JoinTeam() {
  return <>    

      <div className="title pb-3 text-center">
            <h2 className='mt-5 fw-bold'>Join Team</h2>
            <p className='fs-5'>Great community </p>
            <div className="line translate-middle"></div>
      </div>

      <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-12'>
          <h3 className='mb-4'>How to establish a team with the objective of procuring materials for equitable distribution among its members: </h3>

            <ul className='text-decoration-none '>
              <li className='lead'><span className='fw-bold'>1) Compilation of the necessary materials information: </span><br/> - Gather all the requisite materials information.</li>
              <li className='mt-2 lead'><span className='fw-bold'>2) Comprehensive documentation:</span> <br />     - Collect and document all essential information concerning the intended purpose of these materials. <br/>    - Include pertinent details about the sellers of the materials. </li>
              <li className='mt-2 lead'><span className='fw-bold'> 3) Formation of the team: </span> <br/>    - Create a formal team, designating it with the name of the materials under consideration.</li>
              <li className='mt-2 lead'><span className='fw-bold'> 4) Patiently await team completion: </span> <br/>   - Allow sufficient time for the team to finalize its composition.</li>
              <li className='mt-2 lead'><span className='fw-bold'> 5) Procurement and distribution by Ecometryl: </span> <br/>  - Upon completion of the team, Ecometryl shall proceed to acquire the materials and distribute them in accordance with the predefined distribution plan for each team member.</li>
            </ul>

        </div>      
        
      </div>      
    </div>      


    <h3 className='text-center fw-bolder mt-5'>Teams</h3>
    <div className="line translate-middle mb-5"></div>

    <div className='container '>
      <div className='row mt-5 '>
        <div className='col-md-3 product'>
            <div className=' text-center circle '>
              <img src={product1} alt='product1' loading='lazy'/>    
            </div>
              <h1 className='fs-5 fw-bold text-main'>Team Formic Acid</h1>
              <p className='mt-2'>Category : microbiology</p>
              <p className='mt-2'>Location : Cairo</p>
              <p className='mt-2'>Price : 125 EGP</p>
              <button className='btn bg-main text-white w-75 my-2'>Apply</button>
        </div>

        <div className='col-md-3 product'>
            <div className=' text-center circle '>
              <img src={product2} alt='product2' loading='lazy'/>    
            </div>
            <h1 className='fs-5 fw-bold text-main'>Team Propanol</h1>
              <p className='mt-2'>Category : microbiology</p>
              <p className='mt-2'>Location : Alex</p>
              <p className='mt-2'>Price : 400 EGP</p>
              <button className='btn bg-main text-white w-75 my-2'>Apply</button>
        </div>

        <div className='col-md-3 product'>
            <div className=' text-center circle '>
              <img src={product4} alt='product3' loading='lazy'/>    
            </div>
            <h1 className='fs-5 fw-bold text-main'>Team Catechol</h1>
              <p className='mt-2'>Category : microbiology</p>
              <p className='mt-2'>Location : Giza</p>
              <p className='mt-2'>Price : 410 EGP</p>
              <button className='btn bg-main text-white w-75 my-2'>Apply</button>
        </div>


        <div className='col-md-3 product'>
            <div className=' text-center circle '>
              <img src={product10} alt='product4' loading='lazy'/>    
            </div>
            <h1 className='fs-5 fw-bold text-main'>Team Ethanol</h1>
              <p className='mt-2'>Category : microbiology</p>
              <p className='mt-2'>Location : Cairo</p>
              <p className='mt-2'>Price : 650 EGP</p>
              <button className='btn bg-main text-white w-75 my-2'>Apply</button>
        </div>



      </div>
    </div>

  </>
}

import React from 'react'
import logo from '../../assets/images/output.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>    
    
      <nav className="navbar navbar-expand-lg navbar-light bg-main-light">
          <div className="container">
          <Link className="navbar-brand text-main fw-bolder" to="/">
              <img src={logo} className='logo-edit' alt="Logo" loading='lazy' /> 
              <span className='font-small text-main'>ECOMETRYL</span>
          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="/">
                  <div className='text-center'>
                  <i className="fa-solid fa-house"></i>
                  <p className='font-sm fw-bolder'>Home</p>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="about">
                <div className='text-center'>
                <i className="fa-solid fa-address-card"></i>
                  <p className='font-sm fw-bolder'>About</p>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="products">
                <div className='text-center'>
                <i className="fa-solid fa-store"></i>
                  <p className='font-sm fw-bolder'>Products</p>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="addproduct">
                <div className='text-center'>
                <i className="fa-regular fa-square-plus"></i>
                  <p className='font-sm fw-bolder'>Add Product</p>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="jointeam">
                  <div className='text-center'>
                  <i className="fa-solid fa-users"></i>
                  <p className='font-sm fw-bolder'>Join Team</p>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="products">
                  <div className='text-center'>
                  <i className="fa-regular fa-handshake"></i>
                  <p className='font-sm fw-bolder'>Charity</p>
                  </div>

                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="cart"> 
                <div className='text-center'>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p className='font-sm fw-bolder'>Cart</p>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="search"> 
                <div className='text-center'>
                <i className="fa-solid fa-magnifying-glass"></i>
                  <p className='font-sm fw-bolder'>Search</p>
                  </div>
                </Link>
              </li>
               
              
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center">
          <i className='nav-hover cursor-pointer fa-solid fa-bell mx-2 bell'></i>
          <Link className="nav-link text-dark fw-bold nav-hover d-none m-auto notification" to="">
            <div className='text-center'>
            Notifications
            </div>
          
          </Link>

        </li>


        <li className="nav-item">
          <Link className="nav-link text-dark fw-bold nav-hover" to="login">
          <div className='text-center'>
            Login
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark fw-bold nav-hover" to="register">
          <div className='text-center'>
            Register
            </div>
          </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link text-dark fw-bold nav-hover" to="profile">
            <div className='text-center'>
            Profile
            </div>
            </Link>
        </li>

        </ul>
            
          </div>
        </div>
      </nav>
      

  </>
}

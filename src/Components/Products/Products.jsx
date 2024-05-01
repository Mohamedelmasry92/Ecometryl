import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../assets/images/Products/prod1.jpeg';
import product2 from '../../assets/images/Products/prod2.jpeg';
import product3 from '../../assets/images/Products/prod3.jpeg';

const products = [
  { id: 1, image: product1, name: 'Formic acid', quantity: '400 gm', expiry: '7/2025', price: '125 EGP' },
  { id: 2, image: product2, name: 'Propanol', quantity: '400 gm', expiry: '7/2025', price: '400 EGP' },
  { id: 3, image: product3, name: 'CETRIMIDE (CN) AGAR BASE', quantity: '400 gm', expiry: '7/2025', price: '800 EGP' },
];

const Products = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {products.map(product => (
            <div className="col-md-2 col-sm-8 mt-2" key={product.id}>
              <Link to="../productdetails">
                <div className="product">
                  <img src={product.image} className="w-100 h-100" alt={product.name} loading='lazy'/>
                  <h6 className="text-main mt-2 font-small fw-bolder">{product.name}</h6>
                  <p className="mt-2">Quantity: {product.quantity}</p>
                  <p className="my-0">Expiry date: {product.expiry}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Price: {product.price}</span>
                    <div>
                      <i className="fas fa-star rating-color my-3"></i>
                      4.5
                    </div>
                  </div>
                  <button className="btn bg-main text-white w-100 my-3">Add to cart</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <nav aria-label="Page navigation example ">
        <ul className="pagination justify-content-center mb-5">
          <li className="page-item disabled">
            <a href="/" className="page-link">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-white bg-main" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-main" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-main" href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-main" href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Products;

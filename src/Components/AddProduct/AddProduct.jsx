import React, { lazy, Suspense } from 'react';

// Lazy load ProductLine component
const ProductLine = lazy(() => import('../ProductLine/ProductLine'));

export default function AddProduct() {
  return (
    <>    
      <div className="title pb-3 text-center">
        <h2 className='mt-5 fw-bold'>Add Your Own Product</h2>
        <p className='fs-5'>Great products for great people</p>
        <div className="line translate-middle"></div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductLine />
      </Suspense>
    </>
  );
}

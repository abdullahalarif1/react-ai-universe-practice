import React from 'react';

const CartProps = (props) => {
    const {image, features, id} = props.data
    return (
      <div className="card bg-base-100 shadow-xl text-black">
        <figure>
          <img
            className='w-full'
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Features</h2>
          {
            features.map((feature, index ) => <p>
                {index + 1}. {feature}
                </p>)
          }
          {/* map kore vitorer data paowar jonno and er age index umber jonno eivabe use hoy */}
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default CartProps;
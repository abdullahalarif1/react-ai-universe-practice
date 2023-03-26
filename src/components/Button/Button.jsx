import React from 'react';

const Button = (props) => {
const {children} = props
    return (
      <div>
        <button className="btn btn-error mx-auto block">{children}</button>
      </div>
    );
};

export default Button;
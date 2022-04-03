import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, img, price, shipping, quantity} = props.product;
    return (
        <div className='review-item'>
             <div>
                 <img src={img} alt="" />
             </div>
             <div review-item-details-container>
              <div className="review-item-details">
                  <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...': name}</p>
                  <p><span className='orange-color'>Price:{price}</span></p>
                  <p><small>Shipping:{shipping}</small></p>
              </div>
              </div>
              <div className="delete-container">
                  <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                  <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                  </button>
              </div>
              
        </div>
    );
};

export default ReviewItem;
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          
            <img
              className='cards__item__img'
              
              onClick={()=>(window.open(props.redirect,"_blank"))}
              src={props.src}
            />
      
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text2'>{props.text}</h5><br></br><br></br>
            <h5 className='cards__item__text2 '>{props.text2}</h5><br></br><br></br>
            <h5 className='cards__item__text2'>{props.text3}</h5><br></br><br></br>
            <h5 className='cards__item__text2'>{props.text4}</h5><br></br>
            <h5 className='cards__item__text2'>{props.text5}</h5><br></br>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
 

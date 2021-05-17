import React from 'react';
import { Link } from 'react-router-dom';

function Cardskills(props) {
    return (
      <>
        <li className='cards__item'>
          <Link className='cards__item__link' >
            <figure className='cards__item__pic-wrap' data-category={props.label}>
            
              <img
                className='cards__item__img'
                
        
                src={props.src}
              />
        
            </figure>
            <div className='cards__item__info'>
              <h3 className='cards__item__text2'>{props.text}</h3><br></br>
              <h3 className='cards__item__text2 '>{props.text2}</h3><br></br>
              <h3 className='cards__item__text2'>{props.text3}</h3><br></br>
              <h3 className='cards__item__text2'>{props.text4}</h3><br></br>
              <h3 className='cards__item__text2'>{props.text5}</h3><br></br>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default Cardskills;
   
  
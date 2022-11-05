import React from 'react';
import Img from '../image/avat.jpeg'
import Attach from '../image/attach.jpeg'

const Input = () => {
   return (
      <div className='input'>
         <input type="text" placeholder='Написать сообщение' />
         <div className='send'>
            <img src={Img} alt="" />
            <input type="file" style={{display:'none'}} id='file' />
            <label htmlFor="file">
               <img src={Attach} alt="" />
            </label>
            <button>Отправить</button>
         </div>
      </div>
   );
}

export default Input;

import React from 'react';

const Search = () => {
   return (
      <div className='search'>
        <div className='searchForm'>
         <input type="text" placeholder='Найти пользователя'/>
        </div>
        <div className="userChat">
         <img src="https://klike.net/uploads/posts/2020-03/1584435311_1.jpg" alt="logo" />
         <div className="userChatInfo">
            <span>jonh</span>
         </div>
        </div>
      </div>
   );
}

export default Search;

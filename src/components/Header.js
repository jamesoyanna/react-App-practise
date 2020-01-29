import React from 'react';

const Header = () => {
  const date = new Date()
  const hours = date.getHours();
  let timeOfDay
   
  if(hours<12){
      timeOfDay = "Morning"
  }else{
      if(hours>12 && hours<17){
          timeOfDay = "Afternoon"
      }else{
          timeOfDay = "Night"
      }
  }

    return (
      <div>
       <h1>Good {timeOfDay}</h1>
      </div>
    );
}

export default Header;

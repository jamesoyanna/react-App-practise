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
const styles = {
  fontSize: "32px",
  color: "#ccffff",
  backgroundColor: "#660066",
  textAlign: "center"
};
    return (
      <div>
       
       <h2 style={styles}>Ladies and gentlemen  waiting for</h2>
      </div>
    );
}

export default Header;

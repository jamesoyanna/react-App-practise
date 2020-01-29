import React from 'react';

const Header = () => {
  const date = new Date()
    return (
      <div>
       <h1>It is currently about {date.getHours() % 12} o'clock</h1>
      </div>
    );
}

export default Header;

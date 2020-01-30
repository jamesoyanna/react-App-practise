import React from 'react';
function ContactCards(props) {

  console.log(props);
        return (
          <div>
            <div className="contact-card">
              <img src={props.contact.imgUrl} alt="new" style={{width: 400, height:200}} />
              <h3>Name {props.contact.name}</h3>
              <p>Phone:{props.contact.phone}</p>
              <p>Email: {props.email}</p>
            </div>
          </div>
        );
    }


export default ContactCards;

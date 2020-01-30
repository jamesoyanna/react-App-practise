import React, { Component } from 'react';

export class ContactCards extends Component {
    render() {
        return (
          <div>
            <div className="contact-card">
              <img
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="new"
              />
              <h3>Mr. James Oyanna</h3>
              <p>Phone: 08069201492</p>
              <p>Email: engrjayt200@gmail.com</p>
            </div>
          </div>
        );
    }
}

export default ContactCards;

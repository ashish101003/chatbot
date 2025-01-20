import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <a href="#home">HOME</a> | <a href="#menu">MENU</a> |{" "}
          <a href="#location">LOCATION</a> | <a href="#aboutus">ABOUT US</a> |{" "}
          <a href="#contactus">CONTACT US</a>
        </nav>
      </header>

      <section id="home">
        <img src="banner.jpg" alt="Banner" />
        {/* Add images here */}
      </section>

      <section id="menu">
        <h2>Our Menu</h2>
        <div className="grid-container">
          <img src="menu1.jpg" alt="Menu item 1" />
          <img src="menu2.jpg" alt="Menu item 2" />
          <img src="menu3.jpg" alt="Menu item 3" />
        </div>
      </section>

      <section id="location">
        <h2>Location</h2>
        <p>Hyderabad</p>
        {/* Add map widget here */}
      </section>

      <section id="contactus">
        <h2>Contact Us</h2>
        <p>Got questions? Want to place an order? Call us at +91791234567</p>
      </section>

      <iframe
        className="chat-bot"
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/26e44813-1fb1-492f-a8b8-6f745839704e"
        title="Chat Bot"
      ></iframe>
    </div>
  );
}

export default App;

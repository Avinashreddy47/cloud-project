import React from "react";
import { useState } from "react";

const Home = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email,last, query, message } = e.target.elements;
    let details = {
      name: name.value,
      last: last.value,
      email: email.value,
      query: query.value,
      message: message.value,

    };
    let response = await fetch("http://localhost:4000/Home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    if(response!=null){
  			sessionStorage.setItem('token',response.data.token);
				this.props.history.push('/');
    }
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
   
      <>
        <div>
          <h1 style={{ textAlign: "center" }}>Query Collector</h1>
        </div>

        <div className="container">

          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="last"
              name="last"
              placeholder="Your last name.."
            />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="gmail" placeholder="Your email.." />

            <label htmlFor="email">Website</label>
            <input type="text" id="query" name="query" placeholder="website.." />
            <label htmlFor="subject">Queries</label>
            <textarea
              id="message"
              name="message"
              placeholder="Description.."
              style={{ height: 200 }}
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </>

    );
};

export default Home;

import React from "react";
import { useState } from "react";
import toast,{Toaster} from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

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
    console.log(details);
    if(details.name==''){
      toast.error('Please enter a firstname',{autoClose:2000}) 
    }
    if(details.last==''){
      // console
      toast.error('Please enter a last name',{autoClose:2000}) 
    }
    if(details.email==''){
      toast.error('Please enter an email',{autoClose:2000}) 
    }
    if(details.query==''){
      toast.error('Please enter a message',{autoClose:2000}) 
    }
    if(details.message==''){
      toast.error('Please enter a company name',{autoClose:2000}) 
    }
    let response = await fetch("http://34.66.47.168/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    console.log(response);
    if(response.message==="logged in sucessfully"){
      toast.error('details entered successfully',{autoClose:2000}) 
    }
    else{
      toast.error('Please enter valid details',{autoClose:2000}) 
    }
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
       {/* <head>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    </head> */}
        <div>
          <h1 style={{ textAlign: "center" }}>Query Collector</h1>
        </div>

        <div className="container">
        <Toaster/>
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

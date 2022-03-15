import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const SignIn = () =>{

  const [values, setValues] = useState({
	    firstname: "",
	    lastname: "",
	    emails: "",
      password:""
	  });
  const [phone,setPhone] = useState("")
	  
  

  const handlechange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    let submitting = await fetch("", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        accept: "*",
      },
      body: JSON.stringify({ data: "data" }),
    });
    let response = submitting.json();
    console.log(response);
  };
  

	return (
    <main className="bg-black w-screen h-screen text-white overflow-hidden">
    <h1 className="pl-96 ml-32 pt-9 overflow-hidden">Welcome into <b>STABLECOIN</b></h1>
    <article className="w-96 h-80 bg-gray-900 fixed top-1/2 left-1/2 -mt-28 -ml-60 rounded-xl overflow-hidden">
    <div className="bg-green-500 rounded-xl text-center h-9 pt-1 overflow-hidden">Not a member Sign up Now</div>
		<div className="absolute p-7 overflow-hidden">
		<form onSubmit={handlesubmit}>
          <label className="p-7" htmlFor="firstname">First name</label>
          <input 
            type="text"
            name="firstname"
            id="firstname"
            value={values.firstname}
            onChange={handlechange}
          /><br/>
          <label className="p-7" htmlFor="lastname">Last Name</label>
          <input
            type="lastname"
            name="lastname"
            id="lastname"
            value={values.lastname}
            onChange={handlechange}
          /><br/>
          <label className="p-7" htmlFor="email">Email</label>
          <input
            type="email"
            name="emails"
            id="email"
            value={values.emails}
            onChange={handlechange}
          /><br/>
          <label className="p-7" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handlechange}
          /><br/>
           <label className="p-7" htmlFor="mobile">Mobile Number</label>
          <PhoneInput
            className="pl-7"
            country={'us'}
            placeholder="Enter phone number"
            value={phone}
            id="mobile"
            name="mobile"
            onChange={(phone)=>setPhone(phone)}
          />
          {/* npm install react-phone-number-input --save */}
          <button className="m-3 ml-36 bg-red-200 pl-3 pr-3 border-2 rounded-full border-solid border-amber-400" type="submit">Submit</button>
        </form>
		</div>
    </article>
    </main>
		);
}
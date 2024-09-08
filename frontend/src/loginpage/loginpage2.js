import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginpage2() {
  const [userrr, setUser] = useState('');
  const [inpass, setInpass] = useState(false);
  const [learn, setLearn] = useState(false);
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  // Handlers for form inputs
  function handleChange(event) {
    setUser(event.target.value);
  }

  function handleChang(event) {
    setPass(event.target.value);
  }

  function handle(event) {
    setLearn(true);
    event.preventDefault();
  }

  // Handle the login logic
  async function handleClick(event) {
    event.preventDefault();
  
    try {
      const response = await axios.post('https://ghost-games-dbup.vercel.app/login', {
        email: userrr,
        password: pass,
      });
  
      console.log(response.data);
  
      // Display an alert message based on the backend response
      if (response?.data?.message === 'Login successful') {
        localStorage.setItem('authToken', response.data.token);
        navigate("/");
      } else {
        alert(response?.data?.message || "Login failed");
        setInpass(true);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response?.data?.message || "Login failed");
      } else {
        alert("An error occurred while logging in");
      }
      console.error('Error during login:', error);
    }
  }
  
  

return(
<div className='login  '>
<div className='backdrop-opacity-10 z-30 bg-[#171d25] h-20 w-full flex border-b-2 border-b-black pr-40  '>
  <div className='w-24 h-full pl-40 float-left justify-center items-center  flex '>
  <a href="/" className=' text-6xl float-left  tracking-widest font-bold font-sans subpixel-antialiased text-cyan-300 ' >Ghost</a>
  </div>
</div>
<div className='absolute w-full '>
  <img  className=' h-[95vh] w-full contain brightness-50 opacity-90' src="https://img.freepik.com/premium-photo/abstract-lights-science-technology-design-background-with-space-blue-purple-ai-generate_45996-3131.jpg" alt="" />
</div>
<div className='firstcont  bg-transparent  '>
    <div className='insidecont'>
        <div className='deepcont rounded-lg '>
            <div className='deepercont'>
<h2 className=' font-bold text-cyan-500 ' >Welcome Ghost.</h2>

<div className='deepest2cont'>
<form onSubmit={handleClick}>
    <div className='deepest3cont'>
     
        <div className='idiv2' >
            
        <input type="Email" className='deepest4cont deepest4cont1 bg-[rgba(0,0,0,0.5)] text-yellow-300 pl-3 #8C8C8C'    placeholder='Email' onChange={handleChange}></input>
        </div>
    </div>

  <div>
    <input type="password" minLength={8}  className='deepest4cont deepest4cont1 bg-[rgba(0,0,0,0.5)]  text-yellow-300 pl-3 #8C8C8C' placeholder='Enter your password' onChange={handleChang}></input>
</div>
<div className="deepest5cont deepest5cont1">
{inpass === true ? <a href="#" >&nbsp;Incorrect Email or Password</a> :""}
</div>

<div className='next '>
<button className='text-red-400 font-sans font-semibold ' type='submit' >Sign In</button>
</div>
</form>
<div className='deepestcont deepestcont1'>
    <span><br />New to Ghost Games ? <a href="/signup">Sign up now.</a></span>
</div>
<div className='deepestcont deepestcont12'>
    <span>{learn===true ? <a  target="_blank" href="https://www.linkedin.com/in/aman-agrawal-269233252" rel="noreferrer">This site is made by Aman Agrawal.Visit his linkedin by clicking here.</a> :<a href="#" onClick={handle}>Learn more.</a>} </span>
</div>
</div>

        </div>
        </div>
        </div>
</div>


</div>)}

export default Loginpage2 ;
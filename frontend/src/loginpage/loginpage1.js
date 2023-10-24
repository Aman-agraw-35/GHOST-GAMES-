
import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Loginpage1(){ 

    const [user, setUser] = useState('');

    const [truth, settruth] = useState(true);

  
  const [name , setName ] =useState('');

  const [password , setPassword ] =useState('');
  const navigate = useNavigate();
 

 function handleChange(event){
  setName(
     event.target.value
  );
}

function handleChang(event){
  setPassword(
     event.target.value
  );
  console.log(password);
}

 
  async function handleClick(event){
    setName(name);
    setPassword(password);
  event.preventDefault();
  if(name !==  "" && password !== "" ){

  try {
    const response =  await axios.post('http://localhost:8000/data', {name , password });
    console.log(response.data.message);
   if(response.data.message === "Alreadyuser"){
    settruth(false);
   }
   else{
    navigate("/");
   }
  } catch (error) {
    console.error('Error submitting email:', error);
  }
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
<h2 className=' font-bold text-cyan-500 ' >Are you ready to become a Ghost.</h2>

<div className='deepest2cont'>
<form onSubmit={handleClick}>
    <div className='deepest3cont'>
 
        <div className='idiv2' >
   
        <input type="text"  className='deepest4cont deepest4cont1 bg-[rgba(0,0,0,0.5)] text-yellow-300 pl-3 #8C8C8C ' placeholder='Username or Email' onChange={handleChange}></input>
        </div>
    </div>
 
  <div>
    <input type="password" className='deepest4cont deepest4cont1 bg-[rgba(0,0,0,0.5)]  text-yellow-300 pl-3 #8C8C8C ' placeholder='Create a password' onChange={handleChang}></input>
</div>
<div className="deepest5cont">
<a href="/login" className=' text-red-300'>Already a user ?</a>
</div>
<div className='next '>
<button className='text-red-400 font-sans font-semibold ' >Next</button>
</div>
{truth === false ? <div className="deepest5cont">
<a href="/login" className=' text-red-500'>Email already registered to Ghost Games</a>
</div> : <div></div>}
</form>
</div>

        </div>
        </div>
        </div>
</div>


</div>)}

export default Loginpage1 ;
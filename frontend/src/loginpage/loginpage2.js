
import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Loginpage2(){ 

  const [userrr, setUser] = useState(' ');
    const [inpass , setinpass] = useState(false);
    const [learn ,setlearn] =useState(false);

 
  
  const [pass , setpass ] =useState('');
  const navigate = useNavigate();
 

 function handleChange(event){
  setUser(
     event.target.value
  );
}

function handleChang(event){
  setpass(
     event.target.value
  );
}
function handle(event){
  setlearn(true);
  event.preventDefault();
}

 
  async function handleClick(event){
    setUser(userrr);
    setpass(pass);
  event.preventDefault();
  if(userrr !==  "" && pass !== "" ){

  try {
    const response =  await axios.post('http://localhost:8000/datasppp',{email : {userrr} , password : {pass}} );
    if(response.data.message==='found user'){
      navigate("/");
    }
  else{
    setinpass(true);
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
<h2 className=' font-bold text-cyan-500 ' >Welcome Ghost.</h2>

<div className='deepest2cont'>
<form onSubmit={handleClick}>
    <div className='deepest3cont'>
     
        <div className='idiv2' >
            
        <input type="text" className='deepest4cont deepest4cont1 bg-[rgba(0,0,0,0.5)] text-yellow-300 pl-3 #8C8C8C'    placeholder='Username or Email' onChange={handleChange}></input>
        </div>
    </div>

  <div>
    <input type="password" className='deepest4cont deepest4cont1 bg-[rgba(0,0,0,0.5)]  text-yellow-300 pl-3 #8C8C8C' placeholder='Enter your password' onChange={handleChang}></input>
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
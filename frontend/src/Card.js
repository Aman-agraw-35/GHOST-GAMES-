import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faWindows , faChrome } from '@fortawesome/free-brands-svg-icons'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Card(props){
     const [id, setId] = useState('');
     const navigate = useNavigate();


     async function handleClick(){
      setId(props.id );
       await axios.post('https://ghost-games-dbup.vercel.app/datas', {id : props.id } )
       .then((id) => {
           if(id !== ""){
          navigate('/game');
           }
     }).catch((error) =>{
      console.log(error) ;
     })
 

    }
    

return(
  
   <div  onClick={ handleClick} className='h-[300px] w-[304px] hover:scale-95  rounded-t-lg hover:z-60 z-10 rounded-b-lg mr-3  bg-[#242424] flex flex-col cursor-pointer '>
  
   <div className='h-[169px]  w-[304px]  '>
 <img className=' h-full  w-full bg-cover   brightness-140 rounded-t-lg contrast-100'  src={props.img} alt={props.name} />
    </div>
   
    
    <div className='w-[304px] h-[131px] py-0.5 px-1.5'>
      <div className='w-full '>
        <h1 className='text-orange-400 border-2 text-xs w-fit flex float-right rounded py-1 font-bold px-1 mt-1 border-orange-200 '>{props.rating}</h1></div>
        {props.id % 2=== 0 ? <h1 className='text-white font-bold text-2xl pb-1 '>{props.name}😇</h1> : <h1 className='text-white font-bold text-2xl pb-1 '>{props.name}🎯</h1> }
     
     <div className='flex flex-end flex-col float-bottom absolute bottom-1 '>
     <div className='flex flex-row'>
     {props.platform==="PC (Windows)" ? <> <div className=' px-0.5 flex justify-start items-center flex-row gap-3 w-full'><FontAwesomeIcon icon={faWindows}  size="lg" style={{color: "#ffffff",}} /><h1 className='text-pink-400 border-2 text-xs w-fit   rounded py-0.5 font-bold px-0.5 mt-1 border-pink-300 '>FREE</h1></div>
      
     </>
     : <div></div>}
     {props.platform==="Web Browser" ? <><div className=' px-0.5 flex justify-start items-center flex-row gap-3 w-full '><FontAwesomeIcon icon={faChrome} size="lg" style={{color: "#ffffff",}} /><h1 className='text-pink-400 border-2 text-xs w-fit   rounded py-0.5 font-bold px-0.5 mt-1 border-pink-300 '>FREE</h1></div> 
    
      </>: <div></div>}
     </div>
     <h1 className='text-green-400 font-bold text-sm  '>Released : {props.released}</h1>
     <h1 className='text-green-400 font-bold text-sm '>Developer : {props.publisher.substring(0,27)} {props.publisher.length >= 27 && '...'}</h1>
   </div> 
   </div>


    </div>
   
)
}

export default Card ;
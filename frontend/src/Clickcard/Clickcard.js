import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faWindows , faChrome } from '@fortawesome/free-brands-svg-icons';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../footer';

function Clickcard(){

      const [page, setPage] = useState([]);

      useEffect(() => {
        axios.get('https://ghost-games-dbup.vercel.app/api')
          .then(response => {
            setPage(response.data);
          })
          .catch(error => {
          });
      }, []);
    
    
    return(
   <div className=' w-full bg-[#03080f] scroll-smooth'>

<Parallax pages={2} style={{ top: '0px', left: '0', height : '178% ' , backgroundColor : '#1a2227' }} class="animation">
        <ParallaxLayer offset={0} speed={0.3 }  style={{ top: '0px', left: '0', height : '0' , paddingTop : '0' }} >
          <div class="animation_layer parallax " id="artback">
          <div className=' absolute backdrop-opacity-10 z-30 bg-[#171d25] h-20 w-full flex border-b-2 border-b-black pr-40 '>
  <div className='w-24 h-full pl-40 float-left justify-center items-center  flex '>
  <a href="/" className=' text-6xl float-left  tracking-widest font-bold font-sans subpixel-antialiased text-cyan-300 ' >Ghost</a>
  </div>
</div>
          </div>
          <div className=' fit-h-max w-auto'>{page.screenshots && page.screenshots.length >= 3 && (<img className='absolute flex brightness-50 fill w-full h-[845.1px] opacity-90 ' src={page.screenshots[0].image} alt="" />   )}
</div>
        </ParallaxLayer>

        

        <ParallaxLayer offset={0.6} speed={0.70 } style={{ top: '-550px', left: '0', height : '200%' }}>
          <div  className="animation_layer parallax  top-[-1000px] xl:top-0  " id="art">
           
<div className=' h-auto w-auto z-10 '>

  <div className=' w-full min-h-fit z-60 relative pt-24  items-center  xl:px-[8%] flex  flex-col xl:flex-row xl:flex xl:h-[550px] xl:w-full  '>
    <div  className='h-[418px] w-[600px]  '> <img className='cover w-full h-full rounded-xl border-2 ' src={page.thumbnail} alt={page.title} /></div>
    <div  className='h-[418px] w-[600px] justify-left flex flex-col xl:justify-center xl:flex xl:flex-col'> 
    <div className='h-auto  wfull px-8  items-center justify-center flex xl:justify-start '>
      <h1 className='text-6xl font-extrabold text-[#92ee8a]  ' >{page.title}✨</h1>
    </div>
    <div className='h-auto w-full px-8 py-4  justify-center flex-col flex xl:justify-start xl:flex-col'>
      {console.log()}
    <h1 className=' text-4xl font-bold text-[#6ef5ff] pt-4 '>{ page?.short_description?.length>=160 ? page.short_description.substring(0,143)+ '...' :page.short_description }</h1>
    {page.platform==="Windows" ? <> <div className=' px-0.5 pr-8 flex justify-center xl:justify-start items-center flex-row gap-6 py-4 w-full'><FontAwesomeIcon icon={faWindows}  size="2xl" style={{color: "#ffffff",}} /><h1 className='text-[#f55c78] border-2 text-3xl w-fit bg[#242424] bg-[rgba(0,0,0,0.3)] rounded-lg py-1 font-bold px-2 mt-1 border-blue-- '>FREE TO PLAY </h1></div>  </>
     : <>  <div className=' px-0.5 pr-8 flex  items-center flex-row gap-6 py-4 w-full'><FontAwesomeIcon icon={faChrome}  size="2xl" style={{color: "#ffffff",}} /><h1 className='text-[#f55c78] border-2 text-3xl w-fit bg[#242424] bg-[rgba(0,0,0,0.3)] rounded-lg py-1 font-bold px-2 mt-1 border-blue-- '>FREE TO PLAY </h1></div>  </> }
    </div>
    
    </div>
  </div>
  <div className='h-auto w-auto  py-4 flex flex-col justify-center text-[rgb(91,255,189)] text-3xl items items-center pb-10 font-bold'>
    <h1 className='justify-center'>DEVELOPER : {page.developer}</h1>
    <h1 className='justify-center text-[#eb73fa]'>PUBLISHER : {page.publisher}</h1>
  </div> </div>

  <div className='w-auto  h-auto relative mt-12 '>
  <div className='w-[84%] h-auto py-8 mt-32 px-12 rounded-xl bg-[#262d32] mx-auto'>
       
      <h1  className=' text-xl  text-[#fff] underline pb-4 '>Minimum System Requirements</h1>
      <h1  className=' text-xl  text-[#fff] '>Operating System : {page.minimum_system_requirements?.os} </h1>
      <h1  className=' text-xl  text-[#fff] '>Processor : {page.minimum_system_requirements?.processor} </h1>
      <h1  className=' text-xl  text-[#fff] '>Memory : {page.minimum_system_requirements?.memory} </h1>
      <h1  className=' text-xl  text-[#fff] '>Graphics Card: {page.minimum_system_requirements?.graphics} </h1>
      <h1  className=' text-xl  text-[#fff] '>Storage : {page.minimum_system_requirements?.storage} </h1>
    </div>
    <div className='w-[84%] h-auto py-8 mt-12 px-12 rounded-xl bg-[#262d32] mx-auto'>
    <h1  className=' text-xl  text-[#fff]  underline pb-4'>Description </h1>
      <h1  className=' text-xl  text-[#fff] '> {page.description} </h1>
    </div>
    <div></div>
    <div className='w-full h-auto flex justify-center '>
      <button  className='w-80 h-40 flex rounded-xl text-6xl justify-center items-center shadow-xl shadow-[#93BFCF]  my-12  font-extrabold text-[#541690] bg-[#7fb]  hover:bg-[#F3FA4F] hover:shadow-[#93b064] mb-40' > <a href={page.game_url}>Download</a> </button>
    </div>
    <div className='w-full h-auto flex justify-center ' >
   { page.screenshots && page.screenshots.length !== 0 && (<h1  className=' text-5xl font-semibold text-[#42b0ce] '>ScreenShots</h1> )  }
    </div>
 
  </div>
  {page.screenshots && page.screenshots.length >=2 && (
        <>
        {page.screenshots.slice(1,5).map((data => 
            <div className='h-[30vh] xl:h-[95vh] w-full py-16 px-32'><img className='rounded-xl bg-cover h-full fill w-full border-2 ' src={data.image} alt="" /></div>
          ))}
          
        </>
      )}
        <Footer/>
          </div>
       
    
        </ParallaxLayer>
      

</Parallax>

      </div>
      
    )
}
export default Clickcard ;
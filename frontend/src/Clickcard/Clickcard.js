import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faWindows , faChrome } from '@fortawesome/free-brands-svg-icons';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../footer';
import './ClickcardPlaceholder.css';

function Clickcard(){

      const [page, setPage] = useState([]);
      const [loading, setLoading] = useState(true); 

      useEffect(() => {
        axios.get('https://ghost-games-dbup.vercel.app/api')
          .then(response => {
            setPage(response.data);
            setLoading(false); 
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

        

        <ParallaxLayer offset={0.6} speed={0.70} style={{ top: '-550px', left: '0', height: '200%' }}>
      <div className="animation_layer parallax top-[-1000px] xl:top-0" id="art">

        {/* Main Image Section */}
        {loading ? (
          <div className="w-full min-h-fit z-60 relative pt-24 items-center xl:px-[8%] flex flex-col xl:flex-row xl:h-[550px] xl:w-full">
            <div className="h-[418px] w-[600px] bg-gray-700 animate-pulse rounded-xl"></div>
            <div className="h-[418px] w-[600px] flex flex-col justify-center px-8">
              <div className="h-8 bg-gray-700 animate-pulse w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-600 animate-pulse w-full mb-4"></div>
              <div className="h-6 bg-gray-600 animate-pulse w-1/2 mb-4"></div>
              <div className="flex gap-6">
                <div className="h-12 w-12 bg-gray-600 animate-pulse rounded-full"></div>
                <div className="h-12 w-32 bg-gray-600 animate-pulse rounded-lg"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-auto w-auto z-10">
            <div className="w-full min-h-fit z-60 relative pt-24 items-center xl:px-[8%] flex flex-col xl:flex-row xl:h-[550px] xl:w-full">
              <div className="h-[418px] w-[600px]">
                <img className="cover w-full h-full rounded-xl border-2" src={page.thumbnail} alt={page.title} />
              </div>
              <div className="h-[418px] w-[600px] justify-left flex flex-col xl:justify-center">
                <div className="h-auto wfull px-8 items-center justify-center flex xl:justify-start">
                  <h1 className="text-6xl font-extrabold text-[#92ee8a]">{page.title}✨</h1>
                </div>
                <div className="h-auto w-full px-8 py-4 justify-center flex-col flex xl:justify-start">
                  <h1 className="text-4xl font-bold text-[#6ef5ff] pt-4">
                    {page?.short_description?.length >= 160
                      ? page.short_description.substring(0, 143) + '...'
                      : page.short_description}
                  </h1>
                  {page.platform === "Windows" ? (
                    <div className="px-0.5 pr-8 flex justify-center xl:justify-start items-center flex-row gap-6 py-4 w-full">
                      <FontAwesomeIcon icon={faWindows} size="2xl" style={{ color: "#ffffff" }} />
                      <h1 className="text-[#f55c78] border-2 text-3xl w-fit bg[#242424] bg-[rgba(0,0,0,0.3)] rounded-lg py-1 font-bold px-2 mt-1 border-blue--">
                        FREE TO PLAY
                      </h1>
                    </div>
                  ) : (
                    <div className="px-0.5 pr-8 flex justify-center xl:justify-start items-center flex-row gap-6 py-4 w-full">
                      <FontAwesomeIcon icon={faChrome} size="2xl" style={{ color: "#ffffff" }} />
                      <h1 className="text-[#f55c78] border-2 text-3xl w-fit bg[#242424] bg-[rgba(0,0,0,0.3)] rounded-lg py-1 font-bold px-2 mt-1 border-blue--">
                        FREE TO PLAY
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Requirements Section */}
        {loading ? (
          <div className="w-[84%] h-auto py-8 mt-12 px-12 rounded-xl bg-[#262d32] mx-auto">
            <div className="h-6 bg-gray-600 animate-pulse w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-600 animate-pulse w-1/2 mb-4"></div>
            <div className="h-6 bg-gray-600 animate-pulse w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-600 animate-pulse w-1/4 mb-4"></div>
          </div>
        ) : (
          <div className="w-[84%] h-auto py-8 mt-32 px-12 rounded-xl bg-[#262d32] mx-auto">
            <h1 className="text-xl text-[#fff] underline pb-4">Minimum System Requirements</h1>
            <h1 className="text-xl text-[#fff]">Operating System: {page.minimum_system_requirements?.os}</h1>
            <h1 className="text-xl text-[#fff]">Processor: {page.minimum_system_requirements?.processor}</h1>
            <h1 className="text-xl text-[#fff]">Memory: {page.minimum_system_requirements?.memory}</h1>
            <h1 className="text-xl text-[#fff]">Graphics Card: {page.minimum_system_requirements?.graphics}</h1>
            <h1 className="text-xl text-[#fff]">Storage: {page.minimum_system_requirements?.storage}</h1>
          </div>
        )}

        {/* Description Section */}
        {loading ? (
          <div className="w-[84%] h-auto py-8 mt-12 px-12 rounded-xl bg-[#262d32] mx-auto">
            <div className="h-6 bg-gray-600 animate-pulse w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-600 animate-pulse w-full mb-4"></div>
            <div className="h-6 bg-gray-600 animate-pulse w-1/2 mb-4"></div>
          </div>
        ) : (
          <div className="w-[84%] h-auto py-8 mt-12 px-12 rounded-xl bg-[#262d32] mx-auto">
            <h1 className="text-xl text-[#fff] underline pb-4">Description</h1>
            <h1 className="text-xl text-[#fff]">{page.description}</h1>
          </div>
        )}

        {/* Screenshots Section */}
        {loading ? (
          <div className="w-full h-auto py-16 px-32">
            <div className="h-[30vh] bg-gray-700 animate-pulse rounded-xl w-full"></div>
          </div>
        ) : (
          <>
            {page.screenshots && page.screenshots.length >= 2 && (
              <>
                {page.screenshots.slice(1, 5).map((data, index) => (
                  <div key={index} className="h-[30vh] xl:h-[95vh] w-full py-16 px-32">
                    <img className="rounded-xl bg-cover h-full fill w-full border-2" src={data.image} alt="" />
                  </div>
                ))}
              </>
            )}
          </>
        )}

        {/* Footer Section */}
        {loading ? (
          <div className="w-full h-auto py-16 px-32">
            <div className="h-[30vh] bg-gray-700 animate-pulse rounded-xl w-full"></div>
          </div>
        ) : (
          <Footer />
        )}
      </div>
    </ParallaxLayer>
      

</Parallax>

      </div>
      
    )
}
export default Clickcard ;
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faWindows , faChrome } from '@fortawesome/free-brands-svg-icons';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from '../footer';
import { ClickcardPlaceholder } from './ClickcardPlaceholder';
function Clickcard() {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ghost-games-dbup.vercel.app/api')
      .then(response => {
        setPage(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ClickcardPlaceholder />;
  }

  return (
    <div className='w-full bg-[#03080f] scroll-smooth'>
      <Parallax pages={2} style={{ top: '0px', left: '0', height: '178%', backgroundColor: '#1a2227' }} className="animation">
        <ParallaxLayer offset={0} speed={0.3} style={{ top: '0px', left: '0', height: '0', paddingTop: '0' }}>
          <div className="animation_layer parallax" id="artback">
            <div className='absolute backdrop-opacity-10 z-30 bg-[#171d25] h-20 w-full flex border-b-2 border-b-black pr-40'>
              <div className='w-24 h-full pl-40 float-left justify-center items-center flex'>
                <a href="/" className='text-6xl float-left tracking-widest font-bold font-sans subpixel-antialiased text-cyan-300'>Ghost</a>
              </div>
            </div>
          </div>
          <div className='fit-h-max w-auto'>
            {page.screenshots && page.screenshots.length >= 3 && (
              <img className='absolute flex brightness-50 fill w-full h-[845.1px] opacity-90' src={page.screenshots[0].image} alt="" />
            )}
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.7} style={{ top: '-550px', left: '0', height: '200%' }}>
          <div className="animation_layer parallax top-[-1000px] xl:top-0">
            <div className='h-auto w-auto z-10'>
              {/* Main Content */}
              <div className='w-full min-h-fit z-60 relative pt-24 items-center xl:px-[8%] flex flex-col xl:flex-row xl:h-[550px] xl:w-full'>
                <div className='h-[418px] w-[600px]'>
                  <img className='cover w-full h-full rounded-xl border-2' src={page.thumbnail} alt={page.title} />
                </div>
                <div className='h-[418px] w-[600px] justify-left flex flex-col xl:justify-center'>
                  <div className='h-auto wfull px-8 items-center justify-center flex xl:justify-start'>
                    <h1 className='text-6xl font-extrabold text-[#92ee8a]'>{page.title}✨</h1>
                  </div>
                  <div className='h-auto w-full px-8 py-4 justify-center flex-col flex xl:justify-start'>
                    <h1 className='text-4xl font-bold text-[#6ef5ff] pt-4'>
                      {page?.short_description?.length >= 160 ? page.short_description.substring(0, 143) + '...' : page.short_description}
                    </h1>
                    {page.platform === "Windows" ? (
                      <div className='px-0.5 pr-8 flex justify-center xl:justify-start items-center flex-row gap-6 py-4 w-full'>
                        <FontAwesomeIcon icon={faWindows} size="2xl" style={{ color: "#ffffff" }} />
                        <h1 className='text-[#f55c78] border-2 text-3xl w-fit bg[#242424] bg-[rgba(0,0,0,0.3)] rounded-lg py-1 font-bold px-2 mt-1 border-blue--'>FREE TO PLAY</h1>
                      </div>
                    ) : (
                      <div className='px-0.5 pr-8 flex items-center flex-row gap-6 py-4 w-full'>
                        <FontAwesomeIcon icon={faChrome} size="2xl" style={{ color: "#ffffff" }} />
                        <h1 className='text-[#f55c78] border-2 text-3xl w-fit bg[#242424] bg-[rgba(0,0,0,0.3)] rounded-lg py-1 font-bold px-2 mt-1 border-blue--'>FREE TO PLAY</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Content */}
              {/* ... */}
              <Footer />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default Clickcard;

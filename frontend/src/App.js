import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faSpinner} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [load , setLoad ] =useState(true);
  const navigate = useNavigate();
  const [loadingCards, setLoadingCards] = useState(true);
  const [page1, setPage1] = useState(true);





  useEffect(() => {
    axios
      .get("https://ghost-games-dbup.vercel.app/api/filter")
      .then((response) => {
        setPage1(response.data);
        setLoadingCards(false); 
      })
      .catch((error) => {
        console.log(error);
      });
  });

  setTimeout(function(){
    setLoad(false);
  }, 4000);

  const [mainUser, setMainuser] = useState('');
  
  const [istrue, setistrue] = useState(true);
  


  const [ist, setist] = useState(true);

 
  axios.get('https://ghost-games-3.onrender.com/p')
  .then((response) => {
    console.log(mainUser);
    setMainuser(response.data);
    if(mainUser !== ""){
      setistrue(false);
    }else{
      setistrue(true);
    }
  
  })
  .catch((error) => {
    console.error('Error retrieving data:', error);
  });


  const handleDragStart = (e) => e.preventDefault();

const placeholderCards = Array.from({ length: 12 }, (_, index) => (
  <div
    key={index}
    className="h-[300px] w-[304px] hover:scale-95 rounded-t-lg hover:z-60 z-10 rounded-b-lg mr-3 bg-[#242424] flex flex-col cursor-pointer animate-pulse"
  >
    {/* Image Placeholder */}
    <div className="h-[169px] w-[304px] bg-gray-600 rounded-t-lg"></div>
    
    {/* Content Placeholder */}
    <div className="w-[304px] h-[131px] py-0.5 px-1.5 flex flex-col justify-between">
      <div className="w-full">
        {/* Rating Placeholder */}
        <div className="w-20 h-4 bg-gray-500 rounded float-right mt-1"></div>
      </div>
      
      {/* Title Placeholder */}
      <div className="h-6 bg-gray-500 rounded w-3/4 my-1"></div>
      
      <div className="absolute bottom-1">
        {/* Platform & Free Placeholder */}
        <div className="flex flex-row gap-3">
          <div className="h-4 w-16 bg-gray-500 rounded"></div>
          <div className="h-4 w-10 bg-gray-500 rounded"></div>
        </div>
        
        {/* Released & Developer Placeholders */}
        <div className="h-4 w-32 bg-gray-500 rounded mt-1"></div>
        <div className="h-4 w-40 bg-gray-500 rounded mt-1"></div>
      </div>
    </div>
  </div>
));


  const responsive = {
    2000: {
      items: 10,
    },
    1492: {
      items: 4,
    },
    1200: {
      items: 3,
    },
    880: {
      items: 2,
    },
    0: {
      items: 1,
    },
  };


  return (

   (load===true)? <div className="w-full h-[100vh] bg-black overflow-hidden bg-center">
	
	
	<video className='w-full h-full  bg-cover object-fill flex bg-center absolute' muted  autoPlay src="https://static.moewalls.com/videos/preview/2023/ghost-call-of-duty-modern-warfare-ii-preview.mp4#t=2,10" >
	</video>
  <FontAwesomeIcon icon={faSpinner} spin spinReverse size="2xl" className="left-[49%] top-[48%]" style={{color: "#fff",position : "relative" , height : "50px" , width: " 50px"}} />
</div>
 :
    <div className="h-[4260px] w-full bg-[#2e1351]  scroll-smooth ">
      <div className="relative  backdrop-opacity-10 z-30 bg-[#171d25] h-20 w-full flex border-b-2 border-b-black ">
        <div className="w-24 h-full pl-32 float-left justify-center items-center  flex ">
          <a href="#" className="text-5xl  xl:text-6xl float-left  tracking-widest font-bold font-sans subpixel-antialiased text-cyan-300" > Ghost </a>
        </div >
        <div className=" flex float-none h-full w-full ">
          <div className=" h-full  justify-center  items-center  pr-7 ml-auto flex ">
            <a href="#shoot" className=" text-xl hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]">
              SHOOTING
            </a>
          </div>
          <div className="w-24 h-full  justify-center items-center pr-7 flex ">
            <a href="#card" className=" text-xl hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]">
              CARD
            </a>
          </div>
          <div className=" h-full  justify-center items-center pr-7 flex ">
            <a href="#sports" className=" text-xl  hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]">
              SPORTS
            </a>
          </div>
          <div className=" h-full  justify-center items-center pr-7 flex  mr-auto ">
            <a href="#battle" className=" text-xl hover:underline hover:text-[#46f3cb] font-bold text-[#9bffe8]">
              BATTLE ROYALE
            </a>
          </div>
        </div>



        
        {(istrue === false)? <div>
            {ist === true?  <div onClick={() => setist(false)} className="  w-max p-2 px-4 m-2 mr-8 justify-center items-center border-1 border-black rounded-lg mb-4 flex flex-col"> <img loading="lazy" className= 'h-12 w-12 cursor-pointer mb-2 bg-cover rounded-[100%] border-2 border-white brightness-100 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWz-elAmN-LwWwHnJmwXYLs9PPQL7SGbdKrLBGxpCW8MSpjkan_TORzh2UlKQhqZqheA&usqp=CAU" alt="" /><div></div> </div>
              
              : <div className="float-right  bg-[#222023c0] z-10  w-max p-2 px-4 mr-12 justify-center  my-2 items-center border-1 border-black rounded-lg mb-4 flex flex-col"> <img  loading="lazy"onClick={() => setist(true)} className= 'h-12 cursor-pointer z-10 w-12 mb-2 bg-cover rounded-[100%] border-2 border-white brightness-100 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWz-elAmN-LwWwHnJmwXYLs9PPQL7SGbdKrLBGxpCW8MSpjkan_TORzh2UlKQhqZqheA&usqp=CAU" alt="" /><div> <h1 className="text-xs font-semibold text-yellow-200 ">{mainUser}</h1></div> <div className=" m-1.5 px-1.5 font-normal border-[2px] rounded-md  border-black-300 #8c929d hover:bg-[rgba(120,120,120,0.2)] "> 
            
              {/* <button  className="text-sm text-white " > Logout </button> */}
            </div></div>} </div>  : <div></div>}

            
      </div>

      <div className="w-full z-50  h-[100vh]">
        <div className="absolute z-20 w-full h-full bg-[rgba(0,0,0,.44)]"></div>
        <img
          loading="lazy"
          className="absolute z-10 object-fill w-full h-full"
          src="https://wallpapers.com/images/hd/3840-x-1080-gaming-8z2jwjo8i0zpjlxo.jpg"
          alt="bg img"
        />

 <div className="w-full h-[100vh] z-30 relative  px-28  pt-8 ">
 {istrue === true ? <div className="h-auto w-auto flex float-right text-[#4fd2e3] text-xl justify-center items-center pb-8 ">
            <div className=" mr-5  px-1.5 font-semibold rounded-md border-2 border-cyan-300 #8c929d hover:bg-[rgba(120,120,120,0.2)]">
              <button
                onClick={(x) => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
            <div className=" mr-10 px-1.5 font-semibold border-2 rounded-md  border-cyan-300 #8c929d hover:bg-[rgba(120,120,120,0.2)] ">
              {" "}
              <button
                onClick={(x) => {
                  navigate("/signup");
                }}
              >
                SignUp
              </button>{" "}
            </div></div>  :  null } 
            
   
         
          {/* <div className="mb-20 h-11 justify-center flex w-full ">
            <div className="w-3/4  border-2 rounded-lg flex flex-row  items-center pl-3 bg-[rgba(120,120,120,0.5)] border-[#242424] h-full">
              <Search color="#8c929d" />
              <input
                className="h-full w-full text-white  bg-transparent placeholder:italic text-[whi] ml-2 pl-2 "
                placeholder="Search 488,835 games"
              ></input>
            </div>
          </div> */}

          <div className="h-17 pb-4 pt-4 w-full">
            <h1 className="  text-3xl md:text-5xl text-[#AAC8A7] font-extrabold ">
              {" "}
              POPULAR GAMES{" "}
            </h1>
          </div>

          {loadingCards ? (
  <div className="h-[299px] w-full justify-center flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full justify-center flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={page1.slice(0, 12).map((data) => (
          <Card
            key={data.id} // Always include a unique key for the mapped items
            name={data.title}
            img={data.thumbnail}
            id={data.id}
            released={data.release_date}
            rating={data.genre}
            publisher={data.developer}
            platform={data.platform}
          />
        ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1 className=" text-3xl md:text-5xl  text-[#AAC8A7] font-extrabold pt-6">
              TRENDING GAMES
            </h1>
          </div>

          {loadingCards ? (
  <div className="h-[299px] w-full justify-center flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1.slice(13, 24).map((data) => (
          <Card
            key={data.id}
            name={data.title}
            img={data.thumbnail}
            id={data.id}
            released={data.release_date}
            rating={data.genre}
            publisher={data.developer}
            platform={data.platform}
          />
        ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1 className="   text-3xl md:text-5xl text-[#AAC8A7] font-extrabold pt-6 ">
              GAMES YOU WILL LIKE
            </h1>
          </div>

          {loadingCards ? (
  <div className="h-[299px] w-full justify-center flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1.slice(25, 36).map((data) => (
          <Card
            key={data.id}
            name={data.title}
            img={data.thumbnail}
            id={data.id}
            released={data.release_date}
            rating={data.genre}
            publisher={data.developer}
            platform={data.platform}
          />
        ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1 className="   text-3xl md:text-5xl  text-[#AAC8A7] font-extrabold pt-6">
              TOP PC GAMES
            </h1>
          </div>

          {loadingCards ? (
  <div className="h-[299px] w-full items-center flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full items-center flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1.slice(100, 120).map((data) => (
          <Card
            key={data.id}
            name={data.title}
            img={data.thumbnail}
            id={data.id}
            released={data.release_date}
            rating={data.genre}
            publisher={data.developer}
            platform={data.platform}
          />
        ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1
              className="   text-3xl md:text-5xl  text-[#AAC8A7] font-extrabold pt-6 "
              id="shoot"
            >
              SHOOTING GAMES
            </h1>
          </div>

          {loadingCards ? (
  <div className="h-[299px] w-full flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1
          .filter((data) => data.genre === "Shooter")
          .slice(0, 20)
          .map((data) => (
            <Card
              key={data.id}
              name={data.title}
              img={data.thumbnail}
              id={data.id}
              released={data.release_date}
              rating={data.genre}
              publisher={data.developer}
              platform={data.platform}
            />
          ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1
              className="   text-3xl md:text-5xl  text-[#AAC8A7] font-extrabold pt-6"
              id="card"
            >
              CARD GAMES
            </h1>
          </div>

          {loadingCards ? (
  <div className="h-[299px] w-full flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1
          .filter((data) => data.genre === "Card Game")
          .slice(0, 15)
          .map((data) => (
            <Card
              key={data.id}
              name={data.title}
              img={data.thumbnail}
              id={data.id}
              released={data.release_date}
              rating={data.genre}
              publisher={data.developer}
              platform={data.platform}
            />
          ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1
              className="   text-3xl md:text-5xl  text-[#AAC8A7] font-extrabold pt-6 "
              id="battle"
            >
              BATTLE ROYALE
            </h1>
          </div>
         
          {loadingCards ? (
  <div className="h-[299px] w-full flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1
          .filter((data) => data.genre === "Battle Royale")
          .slice(0, 19)
          .map((data) => (
            <Card
              key={data.id}
              name={data.title}
              img={data.thumbnail}
              id={data.id}
              released={data.release_date}
              rating={data.genre}
              publisher={data.developer}
              platform={data.platform}
            />
          ))}
      />
    </div>
  )
)}


          <div className="h-17 pb-4 w-full">
            <h1
              className="   text-3xl md:text-5xl  text-[#AAC8A7] font-extrabold pt-6"
              id="sports"
            >
              SPORTS
            </h1>
          </div>
             <div className="bg-[#2e1351]  h-310">
             {loadingCards ? (
  <div className="h-[299px] w-full flex mr-5 mb-28">
    <AliceCarousel mouseTracking responsive={responsive} items={placeholderCards} />
  </div>
) : (
  page1.length > 0 && (
    <div
      onDragStart={handleDragStart}
      role="presentation"
      className="h-[299px] w-full flex mr-5 mb-28"
    >
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        preventDefault
        items={page1
          .filter((data) => data.genre === "Sports")
          .slice(0, 20)
          .map((data) => (
            <Card
              key={data.id}
              name={data.title}
              img={data.thumbnail}
              id={data.id}
              released={data.release_date}
              rating={data.genre}
              publisher={data.developer}
              platform={data.platform}
            />
          ))}
      />
    </div>
  )
)}

             <Footer/>
       </div>
        </div>
      </div>

    </div> 
  );
  
}

export default App;


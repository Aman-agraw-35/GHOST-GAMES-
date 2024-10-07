import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Card from './Card';
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


const CarouselSection = ({
  title,
  items,
  loading, 
  handleDragStart,
  responsive,
}) => {
  return (
    <>
      <div className="h-17 pb-4 w-full">
        <h1 className="text-3xl md:text-5xl text-[#AAC8A7] font-extrabold pt-6">
          {title}
        </h1>
      </div>

      {loading ? (
        // Show loading placeholder cards while items are being fetched
        <div className="h-[299px] w-full flex mr-5 mb-28">
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            items={placeholderCards} 
          />
        </div>
      ) : items.length > 0 ? (
        // Once loading is false and items are fetched, display the carousel
        <div
          onDragStart={handleDragStart}
          role="presentation"
          className="h-[299px] w-full flex mr-5 mb-28"
        >
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            preventDefaultTouchmoveEvent
            items={items.map((data) => (
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
      ) : (
        <div className="text-center text-xl text-white">
          No items available to display.
        </div>
      )}
    </>
  );
};

export default CarouselSection;

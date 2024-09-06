import Footer from "../footer";
export  const  ClickcardPlaceholder = () => {
    return (
      <div className="w-full bg-[#03080f]">
        <div className='absolute backdrop-opacity-10 z-30 bg-[#171d25] h-20 w-full flex border-b-2 border-b-black pr-40'>
          <div className='w-24 h-full pl-40 float-left justify-center items-center flex'>
            <div className='text-6xl float-left tracking-widest font-bold font-sans subpixel-antialiased text-cyan-300'>
              Loading...
            </div>
          </div>
        </div>
  
        {/* Placeholder for Main Content */}
        <div className='relative pt-24 items-center flex flex-col xl:flex-row'>
          <div className='h-[418px] w-[600px] bg-gray-700 animate-pulse rounded-xl border-2'></div>
          <div className='h-[418px] w-[600px] flex flex-col justify-center px-8'>
            <div className='h-8 bg-gray-700 animate-pulse w-3/4 mb-4'></div>
            <div className='h-6 bg-gray-600 animate-pulse w-full mb-4'></div>
            <div className='h-6 bg-gray-600 animate-pulse w-1/2 mb-4'></div>
            <div className='flex gap-6'>
              <div className='h-12 w-12 bg-gray-600 animate-pulse rounded-full'></div>
              <div className='h-12 w-32 bg-gray-600 animate-pulse rounded-lg'></div>
            </div>
          </div>
        </div>
  
        {/* Placeholder for System Requirements */}
        <div className='w-[84%] h-auto py-8 mt-12 px-12 rounded-xl bg-[#262d32] mx-auto'>
          <div className='h-6 bg-gray-600 animate-pulse w-1/4 mb-4'></div>
          <div className='h-6 bg-gray-600 animate-pulse w-1/2 mb-4'></div>
          <div className='h-6 bg-gray-600 animate-pulse w-3/4 mb-4'></div>
          <div className='h-6 bg-gray-600 animate-pulse w-1/4 mb-4'></div>
        </div>
  
        {/* Placeholder for Screenshots */}
        <div className='w-full h-auto py-16 px-32'>
          <div className='h-[30vh] bg-gray-700 animate-pulse rounded-xl w-full'></div>
        </div>
  
        {/* Placeholder for Download Button */}
        <div className='w-full h-auto flex justify-center'>
          <div className='w-80 h-40 bg-gray-700 animate-pulse rounded-xl flex justify-center items-center'></div>
        </div>
  
        <Footer />
      </div>
    );
  };
  
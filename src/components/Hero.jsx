import React, { useRef, useState } from 'react'

const Hero = () => {
   const [currentIndex,setCurrentIndex]=useState(1);
   const [hasClicked,setHasClicked]=useState(false);
   const [isLoading,setIsLoading]=useState(true);
   const [loadedVideos,setLoadedVideos]=useState(0);

   const totalVideos=4;
   const nextVideoRef=useRef(null);
   

   const handleVideoLoad=()=>{
    setLoadedVideos(prevCount=>prevCount+1);
   }
  const upcomingVideoIndex=(currentIndex%totalVideos)+1;

    const handleMiniVdClick=()=>{
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }
    const getVideoSrc=(index)=>`videos/hero-${index}.mp4`;
    
    
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen 
      overflow-hidden rounded-lg bg-blue-75'>
        <div>
            <div className='mask-click-path absolute-center absolute z-50 size-64
            cursor-pointer overflow-hidden rounded-lg'>
                <div onClick={handleMiniVdClick} 
                className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 
                hover:opacity-100'>
                    <video
                    ref={nextVideoRef}
                    loop
                    muted
                    id="current-video"
                    className='size-64 origin-center scale-150
                    object-cover object-center'
                    src={getVideoSrc(upcomingVideoIndex)}
                    onLoadedData={handleVideoLoad}
                    />
                </div>

            </div>
            {/* to handle that some time the video takes time to load or shows some flicker effect which cause 
            bad user experience to solve that this video is placed */}
            <video 
            ref={nextVideoRef}
            loop
            muted
            id='next-video'
            src={getVideoSrc(currentIndex)}
            className='absolute-center invisible absolute z-20
            size-64 object-cover ovject-center'
            onLoadedData={handleVideoLoad}
            />
            <video 
            autoPlay
            loop
            muted
            src={getVideoSrc(currentIndex)}
            className='absolute left-0 top-0 size-full object-cover
            object-center'
            onLoadedData={handleVideoLoad}
            />
        </div>

      </div>
    </div>
  )
}

export default Hero

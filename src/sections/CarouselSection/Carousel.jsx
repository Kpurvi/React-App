import React, { useEffect, useState } from 'react';
import scene1 from "../../assets/images/scene1.png";
import scene2 from "../../assets/images/scene2.png";
import scene3 from "../../assets/images/scene3.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAutoPlay,setisAutoPlay]=useState(true);
  const [autoplayInterval, setAutoplayInterval]=useState(null);

  const images = [scene1, scene2, scene3]; 

  useEffect(() => {

    let interval;

    if (isAutoPlay){
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500);
      setAutoplayInterval(interval);
    } else{
      clearInterval(autoplayInterval);
    }
    
    return () => clearInterval(interval); 
  }, [currentIndex,isAutoPlay]);


  const handlePrev=() =>{
    setCurrentIndex((prevIndex)=>(prevIndex===0? images.length -1 : prevIndex-1));
    setisAutoPlay(false);
  };

  const handleNext=() =>{
    setCurrentIndex((prevIndex)=>(prevIndex+1) %images.length);
    setisAutoPlay(false);
  };

  const toggleAutoplay=() =>{
    setisAutoPlay((prevAutoplay)=> !prevAutoplay);
  };

  return (
    <div style={styles.carouselContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          style={{ ...styles.image, zIndex: images.length - index, opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={handlePrev}>Previous</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md mr-4" onClick={handleNext}>Next</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md" onClick={toggleAutoplay}>{isAutoPlay ? 'Pause Autoplay' : 'Start Autoplay'}</button>
      </div>
      
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: 'relative',
    height: '300px',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    height: 'auto',
    opacity: 0,
    transition: 'opacity 0.5s ease',
  },
};

export default Carousel;

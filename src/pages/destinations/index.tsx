import { NextPageWithLayout } from '../page'
import '../../app/globals.css';
import Header from '@/components/Header/header';
import { menuItems } from '@/components/Header/header.data'
import './index.css';
import { destination_data } from './destinations_data';
import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";


const Destination: NextPageWithLayout = () =>{ 

    const [destinationContent, setDestinationContent] = useState('');
    const [showButton, setShowButton] = useState(true);

    useEffect(()=>{
      const destinationContent = destination_data.content?.length > 250 ? `${destination_data.content?.slice(0,251)}...` : destination_data.content;
      setDestinationContent(destinationContent);
    },[])

    const showFullContent = ()=>{
      if(showButton === true){
        setDestinationContent(destination_data.content);
        setShowButton(false);
      }
    }

    const showLessContent = ()=>{
      if(showButton === false){
        const destinationContent = destination_data.content?.length > 250 ? `${destination_data.content?.slice(0,251)}...` : destination_data.content;
        setDestinationContent(destinationContent);
        setShowButton(true);
      }
    }

    const Content = ()=>{
      if(showButton){
        return(
          <div className='min-w-full flex  justify-center'>
                    <button type='button' onClick={showFullContent} className='flex items-center justify-center'>
                      <p className='show-more-text'>Show More</p>
                      <FaArrowDown color="#077e86"/>

                    </button>
              </div>
        )
      }else{
        return(
          <div className='min-w-full flex  justify-center'>
                    <button type='button' onClick={showLessContent} className='flex items-center justify-center'>
                      <p className='show-more-text'>Show Less</p>
                      <FaArrowUp color="#077e86"  />

                    </button>
              </div>
        )
      }

    }
    
    return(
        <div className='min-w-full flex-col'>
          <Header menuItems={menuItems} />
          <div className='min-w-full flex-col'>
            <div className='min-w-full mb-0'>
              <img className='min-w-full h-72' src='https://res.cloudinary.com/v45/image/upload/v1701445443/armenia-2_ghpd50.webp'  />
            </div>
            <div className='banner-text-card  flex-col justify-center items-center'>
              <div className='flex-col'>
                <h1 className='md:text-5xl text-xl'>Armenia Tours</h1>
              </div>
              <div className='flex-col'>
                <p className='md:text-base text-sm' >Where Asia and Europe meet in a symphony of mountains, history and tradition</p>
              </div>
                
            </div>
          </div>
          <div className='flex-col min-w-full pt-1'>
            <div className='min-w-full flex-col'>
              <h1 className='destination-title'>{destination_data.title}</h1>
              <p className='destination-content'>{destinationContent}</p>
            </div>
            <Content />
          </div>
        </div>
      )
  }
export default Destination

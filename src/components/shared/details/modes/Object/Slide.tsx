import { Carousel } from 'antd'
import React, { useRef, useState } from 'react'

type Props = {
    media: {src:string, type:string, dim?:string}[]
}
export default function Slide({media} : Props) {
    const [currentSlide, setcurrentSlide] = useState(1)
    const slider = useRef<any>()
  
  return (
    <div className='relative'>
        <Carousel swipe={true} ref={slider} dots={false} effect='scrollx' beforeChange={(from, to) => setcurrentSlide(to + 1)}>
            {
                media.map(resource => (
                    <img src={resource.src} className={`${resource.dim ? resource.dim : 'w-full h-[180px]'}  object-cover rounded`}/>
                ))
            }
        </Carousel>
        {/* <div className='flex space-x-3 mt-2 items-center justify-end'>
            <div className="flex items-center space-x-1">
                <p>{media.length}</p>
                <Icon name='Image' className='w-4 h-4'/>
            </div>
            <div className="flex space-x-1 items-center">
              <button className="" onClick={() => slider.current.prev()}>
                <ChevronLeftIcon className='w-4 h-4 '  />
              </button>
              <p>{currentSlide}</p>
              <button className="" onClick={() => slider.current.next()}>
                <ChevronRightIcon className='w-4 h-4 '  />
              </button>
            </div>
            

            </div> */}

    </div>
  )
}
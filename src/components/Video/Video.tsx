import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='max-w-[1400px] flex justify-center ml-auto mr-auto mt-10'>
        <iframe 
          src="https://youtu.be/gh23jbqS3wI?si=lwqiugCdubNX4ggM"   
          width="560"
          height="315"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
  )
}

export default Video
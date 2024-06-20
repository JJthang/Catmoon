import React from 'react'

type Props = {
  title?: string;
  subTitle?: string
}

const Banner:React.FC<Props> = ({title = "PUMPVISOR", subTitle = 'PUMPVISOR.AI' }) => {
  return (
    <div className='w-full'>
      <div className='container'>
        <div className='bannerRow'>
          <div className='bannerLogo min-w-40'>
            <img src="assets/cc.png" className='rounded-full h-[160px] w-40' alt="" />
          </div>
          <h2 className='font-bold text-[52px] text-center'>$CATMOON the most memeable memecoin on Blockchain</h2>
          <p className=''>The dogs have had their day, it’s time for $CATMOON to take reign.</p>
          <div className='flex justify-center items-center pb-5 gap-4'>
            <a href="/" className='btnBuy uniswap'>Buy Now</a>
            <a href="/" className='btnBuy pancakeswap'>Buy Now</a>
          </div>
          <div className='text-center'>
            <a href="/" className='chart-btn chart'>BASE Chart</a>
          </div>
          <div className='text-center'>
            <a href="/" className='cat-social twitter'></a>
            <a href="/" className='cat-social telegram'></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/common/Banner'
import Video from '../../components/Video/Video'
import Information from '../../components/Information'
import BoxCatMoon from '../../components/BoxCatmoon'
import Marketing from '../../components/Marketing'
import LogoCarousel from '../../components/Slider'
import TokenCatmoon from '../../components/TokenCatmoon'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <React.Fragment>
      <div className='bg-[#cce0ff]'>
      <Header />
      <Banner />
      <Video />
      <Information />
      <BoxCatMoon />
      <Marketing />
      <LogoCarousel />
      <TokenCatmoon />
      </div>
    </React.Fragment>
  )
}

export default HomePage
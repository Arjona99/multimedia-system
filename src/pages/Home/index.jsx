import React from 'react'

import { Title } from 'components/texts'
import AppButton from 'components/AppButton'
import UserAvatar from 'components/UserAvatar'

import Netflix from 'media/netflix-logo.png'
import Prime from 'media/prime-logo.png'
import HBO from 'media/hbo-logo.png'
import Spotify from 'media/spotify-logo.png'
import Deezer from 'media/deezer-logo.jpg'
import USB from 'media/usb-drive.png'

import { AppsContainer, HeaderContainer } from './styled'

const USER = {
  image: 'user-bear.png',
  name: 'Sebastián',
}

function Home() {
  const userImage = require(`media/${USER.image}`)
  const date = new Date()
  const time = date.getHours() + ':' + date.getMinutes()
  return (
    <React.Fragment>
      <HeaderContainer>
        <UserAvatar size='64' name={USER.name} image={userImage} direction='row' />
        <Title>{time}</Title>
      </HeaderContainer>
      <AppsContainer>
        <AppButton backgroundColor='black'>
          <img src={Netflix} height='192px' />
        </AppButton>
        <AppButton backgroundColor='white'>
          <img src={Prime} height='192px' />
        </AppButton>
        <AppButton backgroundColor='white'>
          <img src={HBO} width='256px'/>
        </AppButton>
        <AppButton backgroundColor='white'>
          <img src={Spotify} width='300px'/>
        </AppButton>
        <AppButton backgroundColor='black'>
          <img src={Deezer} width='200px'/>
        </AppButton>
        <AppButton backgroundColor='white'>
          <img src={USB} width='128px'/>
        </AppButton>
      </AppsContainer>
    </React.Fragment>
  )
}

export default Home

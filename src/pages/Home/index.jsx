import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Title } from 'components/texts'
import AppButton from 'components/AppButton'
import UserAvatar from 'components/UserAvatar'

import Netflix from 'media/netflix-logo.png'
import Prime from 'media/prime-logo.png'
import HBO from 'media/hbo-logo.png'
import Spotify from 'media/spotify-logo.png'
import Deezer from 'media/deezer-logo.jpg'
import USB from 'media/usb-drive.png'
import exit from 'media/exit.png'

import { AppFrame, AppsContainer, HeaderContainer, RightItems, Logout } from './styled'
import { Link } from 'react-router-dom'

const APPS = [
  {
    backgroundColor: 'black',
    onClickAction: () => window.open('https://www.netflix.com/', '_self'),
    image: Netflix,
    imageHeight: '192px',
    selected: true,
  },
  {
    backgroundColor: 'white',
    onClickAction: () => window.open('https://www.primevideo.com/', '_self'),
    image: Prime,
    imageHeight: '256px',
    selected: false,
  },
  {
    backgroundColor: 'white',
    onClickAction: () => window.open('https://www.hbomax.com/', '_self'),
    image: HBO,
    imageHeight: '128px',
    selected: false,
  },
  {
    backgroundColor: 'white',
    onClickAction: () => window.open('https://www.open.spotify.com/', '_self'),
    image: Spotify,
    imageHeight: '300px',
    selected: false,
  },
  {
    backgroundColor: 'black',
    onClickAction: () => window.open('https://www.deezer.com/', '_self'),
    image: Deezer,
    imageHeight: '128px',
    selected: false,
  },
  {
    backgroundColor: 'white',
    onClickAction: () => window.open('https://www.netflix.com/', '_self'),
    image: USB,
    imageHeight: '128px',
    selected: false,
  },
]

function Home() {
  const activeUser = JSON.parse(sessionStorage.getItem('activeUser'))
  const userImage = require(`media/${activeUser.image}`)
  const date = new Date()
  const defaultTime = date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0')
  

  const [runningApp, setRunningApp] = useState()
  const [apps, setApps] = useState(APPS)
  const [logoutHasFocus, _setLogoutHasFocus] = useState(false)
  const [currentTime, setCurrentTime] = useState(defaultTime)

  const logoutHasFocusRef = useRef(logoutHasFocus)
  const setLogoutHasFocus = data => {
    logoutHasFocusRef.current = data
    _setLogoutHasFocus(data)
  }

  const closeSession = () => {
    sessionStorage.removeItem('activeUser')
  }

  const refreshTime = () => {
    const date = new Date()
    const newTime = date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0')
    setCurrentTime(newTime)
  }

  const keydownListener = (event) => {
    event.preventDefault()
    let selectedIndex
    switch (event.key) {

      case 'ArrowUp':
        setLogoutHasFocus(true)
        // document.getElementById('logout-button').focus()
        break
      case 'ArrowDown':
        setLogoutHasFocus(false)
        break
      case 'ArrowRight':
        selectedIndex = apps.findIndex((app) => app.selected === true)
        if (selectedIndex >= 0 && selectedIndex + 1 <= apps.length - 1) {
          const newApps = [...apps]
          newApps[selectedIndex].selected = false
          newApps[selectedIndex + 1].selected = true
          setApps(newApps)
        }
        break
      case 'ArrowLeft':
        selectedIndex = apps.findIndex((app) => app.selected === true)
        if (selectedIndex >= 0 && selectedIndex - 1 >= 0) {
          const newApps = [...apps]
          newApps[selectedIndex].selected = false
          newApps[selectedIndex - 1].selected = true
          setApps(newApps)
        }
        break
      case 'Enter':
        console.log(logoutHasFocus)
        if (logoutHasFocusRef.current) {
          console.log('logout')
          closeSession()
          window.open('/', '_self')
        } else {
          const selectedApp = apps.find((app) => app.selected === true)
          if (selectedApp) selectedApp.onClickAction()
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.removeEventListener('keydown', keydownListener)
    document.addEventListener('keydown', keydownListener)
    setInterval(refreshTime, 1000)
  }, [])

  // useEffect(() => {
  //   console.log('hola')
  //   return () => {
  //     console.log('adios')
  //     // closeSession()
  //     document.removeEventListener('keydown', keydownListener)
  //   }
  // }, [])

  const renderApps = () => {
    return apps.map((app, index) => {
      return (
        <AppButton
          key={index}
          selected={!logoutHasFocus && app.selected}
          backgroundColor={app.backgroundColor}
          onClickAction={app.onClickAction}
        >
          <img src={app.image} height={app.imageHeight} />
        </AppButton>
      )
    })
  }

  return (
    <React.Fragment>
      {runningApp && <AppFrame src={runningApp} name='App_Frame' />}
      <HeaderContainer>
        <UserAvatar size='64' name={activeUser.name} image={userImage} direction='row' />
        <RightItems>
          <Link to={'/'} onClick={closeSession}>
            <Logout id='logout-button' hasFocus={logoutHasFocus} src={exit} width='32px' />
          </Link>
          <Title>{currentTime}</Title>
        </RightItems>
      </HeaderContainer>
      <AppsContainer id='apps_container'>{renderApps()}</AppsContainer>
    </React.Fragment>
  )
}

export default Home

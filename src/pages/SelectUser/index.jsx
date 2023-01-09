import { useState, useEffect } from 'react'

import { Title } from 'components/texts'
import UserAvatar from 'components/UserAvatar'
import { Link } from 'react-router-dom'
import { Container, UsersContainer } from './styled'

const USERS = [
  {
    image: 'user-bear.png',
    name: 'Sebastián',
    hasFocus: true,
  },
  {
    image: 'user-panda.png',
    name: 'Joaquín',
    hasFocus: false,
  },
  {
    name: 'Agregar usuario',
    hasFocus: false,
  },
]

function SelectUser() {
  const [users, setUsers] = useState(USERS)

  const keydownListener = (event) => {
    event.preventDefault()
    let selectedIndex
    switch (event.key) {
      case 'ArrowRight':
        selectedIndex = users.findIndex((user) => user.hasFocus === true)
        if (selectedIndex >= 0 && selectedIndex + 1 <= users.length - 1) {
          const newUsers = [...users]
          newUsers[selectedIndex].hasFocus = false
          newUsers[selectedIndex + 1].hasFocus = true
          setUsers(newUsers)
        }
        break
      case 'ArrowLeft':
        selectedIndex = users.findIndex((user) => user.hasFocus === true)
        if (selectedIndex >= 0 && selectedIndex - 1 >= 0) {
          const newUsers = [...users]
          newUsers[selectedIndex].hasFocus = false
          newUsers[selectedIndex - 1].hasFocus = true
          setUsers(newUsers)
        }
        break
      case 'Enter':
        const selectedUser = users.find((user) => user.hasFocus === true)
          if (selectedUser) {
            selectUser(selectedUser)
            window.open('home', '_self')
          }
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.removeEventListener('keydown', keydownListener)
    document.addEventListener('keydown', keydownListener)
  }, [])

  const selectUser = (user) => {
    localStorage.setItem('activeUser', JSON.stringify(user))
  }


  const renderUsers = () => {
    return USERS.map((user, key) => {
      const image = user?.image ? require(`media/${user.image}`) : undefined
      return (
        <Link to={'home'} key={key} onClick={() => selectUser(user)}>
          <UserAvatar key={key} hasFocus={user.hasFocus} image={image} size='256' name={user.name} />
        </Link>
      )
    })
  }

  return (
    <Container>
      <Title>Who is using the device?</Title>
      <UsersContainer>{renderUsers()}</UsersContainer>
    </Container>
  )
}

export default SelectUser

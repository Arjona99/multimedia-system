import { Title } from 'components/texts'
import UserAvatar from 'components/UserAvatar'
import { Container, UsersContainer } from './styled'

const USERS = [
  {
    image: 'user-bear.png',
    name: 'Sebastián',
  },
  {
    image: 'user-panda.png',
    name: 'Joaquín',
  },
  {
    name: 'Agregar usuario',
  },
]

function SelectUser() {
  const renderUsers = () => {
    return USERS.map((user, key) => {
      const image = user?.image ? require(`media/${user.image}`) : undefined
      return <UserAvatar key={key} image={image} size='256' name={user.name} />
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

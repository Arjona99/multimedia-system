import { Title } from 'components/texts'
import plus from 'media/plus.png'

import { Container, Image } from "./styled"


function UserAvatar ({size = '128', image = plus, name = '', direction = 'column'}) {
  return (
    <Container direction={direction}>
      <Image src={image} size={size} />
      <Title>{name}</Title>
    </Container>
  )
}

export default UserAvatar
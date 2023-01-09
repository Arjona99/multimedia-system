import { Title } from 'components/texts'
import plus from 'media/plus.png'

import { Container, Image } from "./styled"


function UserAvatar ({hasFocus, size = '128', image = plus, name = '', direction = 'column'}) {
  return (
    <Container direction={direction}>
      <Image src={image} size={size} hasFocus={hasFocus} />
      <Title style={{color: hasFocus ? 'violet' : 'white'}}>{name}</Title>
    </Container>
  )
}

export default UserAvatar
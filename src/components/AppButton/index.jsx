import { Container } from "./styled"


function AppButton ({children, backgroundColor}) {
  return (
    <Container bgColor={backgroundColor}>
      {children}
    </Container>
  )
}

export default AppButton
import { Container } from "./styled"


function AppButton ({children, selected, backgroundColor, onClickAction}) {
  return (
    <Container bgColor={backgroundColor} onClick={onClickAction} selected={selected}>
      {children}
    </Container>
  )
}

export default AppButton
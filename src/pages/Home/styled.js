import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`

export const AppsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
  padding: 32px;
`

export const RightItems = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const AppFrame = styled.iframe`
  z-index: 100;
  width: 100vw;
  height: 100vh;
`

export const Logout = styled.img`
  border: none;
  box-sizing: border-box;

  ${({ hasFocus }) =>
    hasFocus &&
    `
  border: 3px solid violet;
  border-radius: 5px;
`}

  /* &:focus {
    border: 3px solid violet;
    border-radius: 5px;
  } */
`

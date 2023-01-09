import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 256px;
  height: 192px;
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: none;
  box-sizing: border-box;

  transform: translateY(0px);
  transition-duration: 0.2s;

  &:hover {
    transform: translateY(-10px);
    transition-duration: 0.2s;
    box-shadow: 0px 10px 10px 0px rgba(70, 82, 82, 0.52);
    cursor: pointer;
  }

  ${({ selected }) =>
    selected && `
      border: 5px solid violet;
    `}
`

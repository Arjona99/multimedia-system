import styled from "styled-components"

export const Container = styled.div`
  width: 256px;
  height: 192px;
  border-radius: 20px;
  background-color: ${({bgColor}) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  transform: translateY(0px);
  transition-duration: 0.5s;

  &:hover {
    transform: translateY(-10px);
    transition-duration: 0.5s;
    box-shadow: 0px 10px 10px 0px rgba(70,82,82,0.52);
  }
` 
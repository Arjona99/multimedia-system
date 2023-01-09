import styled from "styled-components"
import PropTypes from 'prop-types'

export const Container = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  gap: 32px;
  align-items: center;
  justify-content: center;
`

Container.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']).isRequired,
}

export const Image = styled.img`
  width: ${({size}) => `${size}px`};
  border: 5px solid white;
  border-radius: 50%;

  ${({hasFocus}) => hasFocus && `
    border: 5px solid violet;
  `}
`
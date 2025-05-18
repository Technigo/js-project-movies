import styled from 'styled-components'
import { useGoBack } from '../hooks/useGoBack'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

export const StyledBackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  padding: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
`

const StyledBackIcon = styled(IoArrowBackCircleOutline)`
  font-size: 30px;
  color: white;
  margin-right: 8px;
`

export const BackButton = () => {
  const goBack = useGoBack()

  return (
    <StyledBackButton onClick={goBack}>
      <StyledBackIcon />
      Go back
    </StyledBackButton>
  )
}

import styled from "styled-components"

const NotFoundWrapper = styled.div`
  background: #333;
  color: white;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;     
  text-align: center;
`

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
    </NotFoundWrapper>
  )
}

export default NotFound

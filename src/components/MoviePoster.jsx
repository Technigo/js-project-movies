import styled from "styled-components"

const PosterWrapper = styled.div`
    outline: 1px solid #000;
    height: 400px;
    width: 300px;
    padding: 10px;
  `

export const MoviePoster = () => {
  return (
    <>
      <PosterWrapper>
        <h2>movie title</h2>
        <p>genre</p>
        <button>More details</button>
      </PosterWrapper>
    </>
  )
}
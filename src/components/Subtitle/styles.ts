import styled from 'styled-components'

export const SubtitleSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
 /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  
  @media(max-width: 980px){
    grid-template-columns: 1fr;
  } 

  p {
    font-size: 1.1rem;
    font-weight: bold;
    flex-basis: 100%;
    margin-bottom: 0.5rem;
  }

  div {
    margin-bottom: 0.5rem;
  }
`
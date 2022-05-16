import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
          <Wrap>
              
          </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`

`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-beizer(0.25, 0.45, 0.46, 0.94) 0s;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
    
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        
    }
`
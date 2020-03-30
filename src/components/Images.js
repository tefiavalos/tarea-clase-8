import React from 'react';
import styled from 'styled-components'

const Img = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
    img-style{
        display: flex;
        width: 50px;
        height: auto;
        justify-content: space-between;
    }
`

  const Images = ({img}) => {
    return(
      <Img>
      <div className="img-style">
      <img src={img}/>
      </div>
      </Img>
    )
  };

  export default Images
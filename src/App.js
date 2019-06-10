import React from 'react'
import styled, { createGlobalStyle, StyleSheetManager } from 'styled-components'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import './App.css';

function App() {

  const GlobalStyle = createGlobalStyle`
    .wrapper {
      padding: 1rem;
    }
  `

  const Box = styled.div`
    padding: 1rem;
    background: #fc0;

    & + & {
      margin-top: 1rem;
    }
  `

  const StyledFrame = styled(Frame)`
    width: 100vw;
  `

  return (
    <div>
      <StyledFrame>
        <FrameContextConsumer>
          {
            ({ document }) => (
              <StyleSheetManager target={ document.head }>
                <>
                  <GlobalStyle />
                  <div className="wrapper">
                    <h1>iframe</h1>
                    <Box />
                    <Box />
                    <Box />
                  </div>
                </>
              </StyleSheetManager>
            )
          }
        </FrameContextConsumer>
      </StyledFrame>
    </div>
  )
}

export default App;

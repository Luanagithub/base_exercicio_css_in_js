import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    transition-delay: 20s;
  }

  h2{
    background-color: rgba(0, 0, 0, 0.5);
  }

  h3{
    text-align: center;
  }

  h3:hover{
    text-decoration: underline;
  }

  .typewriter h1 {
  color: #fff;
  font-family: monospace;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typing 3.5s steps(30, end), blink-caret .5s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
`

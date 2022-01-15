import React from 'react'
import { useHistory } from 'react-router-dom'
import { StyledAppBar, StyledButton, Container } from './styles.module'

export function Appbar() {

  const history = useHistory()

  const goToGenerator = () => {
    history.push('/')
  }

  const goToScanner = () => {
    history.push('/scanner')
  }

  return (
    <Container>
      <StyledAppBar position="static">
        <StyledButton width="200px" onClick={goToGenerator}>Generator</StyledButton>
        <StyledButton width="200px" onClick={goToScanner}>Scanner</StyledButton>
      </StyledAppBar>
    </Container>
  )
}

export default Appbar
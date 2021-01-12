import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

const Header = ({ children, goBack }) => {
  const history = useHistory()

  return (
    <Container>
      <Link to="/" className="logo">
        <span>Morket</span>
      </Link>
      <nav>
        {goBack ? (
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft /> Voltar
          </button>
        ) : null}
        {children ? children : null}
      </nav>
    </Container>
  )
}

export default Header

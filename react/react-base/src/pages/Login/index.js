import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault;

    dispatch();
  }
  return (
    <Container>
    <Title>Página de Login
      <small>oie</small>
    </Title>

    <Paragrafo>lorem lorem lorem lorem lorem</Paragrafo>
    <button type='button' onClick={handleClick}>Enviar</button>
    </Container>
  );
}

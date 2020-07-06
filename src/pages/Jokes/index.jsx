import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useJoke } from '../../hooks/jokes'; 

import ArrowLeftIcon from '../../assets/arrowLeftIcon.svg'
import ChuckNorris from '../../assets/chuckNorris.png'

import {Container, Header, Title, BackButtonContainer, 
  Icon,BackButtonText, Content,JokeContainer,Text,Button, Image } from './styles';

const Jokes = () => {
  const history = useHistory();
  const { getJoke, joke, category } = useJoke();

  useEffect(() => {
    if(!category) {
      history.push('/')
    }
  }, [category, history]);

  const handleClick = useCallback(async () => {
    await getJoke(category);
  }, [category, getJoke]);

  return (
    <Container>
      <Header>
        <Title>CHUCK NORRIS JOKES</Title>
        <BackButtonContainer to="/">
          <Icon src={ArrowLeftIcon} alt="Back to Categories"/>
          <BackButtonText>Categories</BackButtonText>
        </BackButtonContainer>
      </Header>
    
      <Content>
      <JokeContainer>
        {joke && (
         
          <Text>{joke.value}</Text>
       
        )}
        <Button type="button" onClick={handleClick}>New Joke</Button>
        </JokeContainer>
         <Image src={ChuckNorris} alt="Chuck Norris" /> 
      </Content>
     </Container>
  )
}

export default Jokes;
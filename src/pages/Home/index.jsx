import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useJoke } from '../../hooks/jokes'; 
import api from '../../services/api';

import JokeBird from '../../assets/JokeBird.svg';

import {Container, Header, Title, Description, Content, List, ListItem, Text, Image} from './styles';

const Home = () => {
  const { setCategory } = useJoke();
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
     const response = await api.get('categories');

     setCategories(response.data);
    }

    getCategories();
  }, [])

  const handleClick = useCallback(async (category) => {
     await setCategory(category);

     history.push('/jokes');
  }, [setCategory, history]);

  return (
    <Container>
      <Header>
        <Title>CHUCK NORRIS JOKES</Title>
        <Description>Select a category above to retrieve a random Joke of this topic.</Description>
      </Header>
      <Content>
        <List>
          {categories && 
            categories.map(category => (
              <ListItem key={category} onClick={() => handleClick(category)}>
                <Text>{category}</Text>  
              </ListItem>
            ))
          }
        </List>
        <Image src={JokeBird} alt="Joke Bird"/>
      </Content>     
    </Container>
  )
}

export default Home;
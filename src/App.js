import { useState } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CharacterContainer from './components/CharacterContainer';


function App() {
  const [ characters, setCharacters ] = useState(null);

  const reqApi = async() => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3");
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
      <Container>
        <Header></Header>
        {!characters ? (
          <Welcome reqApi={reqApi}></Welcome>
        ): (
          <CharacterContainer characters={characters} reqApi={reqApi}></CharacterContainer>
        )}
      </Container>
  );
}

export default App;

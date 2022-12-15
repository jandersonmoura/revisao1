import React, { useState, useRef } from 'react';
import { Container, Image, ContainerItens, H1, Inputlabel, Input, Button, User } from './styles';

import People from './assets/people.png';
import Arrow from './assets/arrow.png';
import Trash from './assets/trash.jpg';


const App = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef()

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])
  }

  function deleteUser(userId){
    console.log(userId)
  }

  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <Inputlabel>Nome</Inputlabel>
        <Input ref={inputName} placeholder='Nome' />

        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow} /></Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={deleteUser(user.id)}>
                <img alt='lata-de-lixo' src={Trash} />
              </button>
            </User>
          ))

          }
        </ul>

      </ContainerItens>
    </Container>
  )
}

export default App;

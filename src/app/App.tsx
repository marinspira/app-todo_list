import * as C from './App.styles';
import { useState } from 'react';
import { Item } from '../types/item';
import ListItem from '../components/ListItem';

function App() {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Adicionar palestrantes', done: false }
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de tarefas
        </C.Header>
        <>
          {list.map((item: Item, index: number) => (
            <ListItem key={index} item={item} />
          ))}
        </>
      </C.Area>
    </C.Container>
  );
}

export default App;

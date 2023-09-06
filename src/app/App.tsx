import * as C from './App.styles';
import { useState } from 'react';
import { Item } from '../types/item';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem'

function App() {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Adicionar palestrantes', done: false }
  ])

  function handleTaskAdd(taskName: string) {
    let newList = [...list] 
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>

        <C.Header>
          Lista de tarefas
        </C.Header>

        <AddItem onEnter={handleTaskAdd} />

        {list.map((item: Item, index: number) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;

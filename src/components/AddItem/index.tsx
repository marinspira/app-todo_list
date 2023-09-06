import { useState, KeyboardEvent } from 'react';
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

function AddItem({ onEnter }: Props) {

    const [input, setInput] = useState('')

    function onKeyUp(e: KeyboardEvent) {
        if (e.code === 'Enter' && input !== '') {
            onEnter(input)
        }
    }

    return (
        <C.Container>
            <div className='image'>+</div>
            <input
                type='text'
                placeholder='Adicione uma tarefa'
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={onKeyUp}
            />
        </C.Container>
    );
}

export default AddItem;
import React from 'react'
import NoteDeleteButton from './NoteDeleteButton'

const Note = ({note, expense}) => {
  return (
    <div>
        {note.content}
        <NoteDeleteButton note={note} expense={expense}/>
    </div>
  )
}

export default Note
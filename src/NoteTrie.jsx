import React from 'react'
import data from '../data.json'

const NoteTrie = () => {
    const getRandomItem = (list) => {
        const index = Math.floor(Math.random() * list.length)
        return list[index]
    }

    const note = getRandomItem(data)

    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            margin: '50px auto',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h3>{note.course}</h3>

            <p>
                <strong>Étudiant :</strong><br />
                {note.student.firstname} {note.student.lastname}
            </p>

            <p>
                <strong>Date :</strong> {note.date}
            </p>

            <p>
                <strong>Note :</strong> {note.grade}
            </p>
        </div>
    )
}

export default NoteTrie

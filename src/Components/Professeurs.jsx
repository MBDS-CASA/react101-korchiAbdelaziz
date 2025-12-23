import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import notesData from '../assets/data/notes.json'

const Matieres = () => {
    // Extraire les cours uniques avec le "professeur" fictif
    const classes = Array.from(new Map(
        notesData.map(note => [
            note.course,
            {
                name: note.course,
                teacherName: note.student.firstname + ' ' + note.student.lastname,
                teacherId: note.student.id
            }
        ])
    ).values())

    return (
        <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Matière</TableCell>
                        <TableCell>ID Prof</TableCell>
                        <TableCell>Nom Prof</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {classes.map((classe, index) => (
                        <TableRow key={index}>
                            <TableCell>{classe.name}</TableCell>
                            <TableCell>{classe.teacherId}</TableCell>
                            <TableCell>{classe.teacherName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Matieres

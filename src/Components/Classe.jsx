import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import notesData from '../assets/data/notes.json'

const Classe = () => {
    const classes = Array.from(new Map(
        notesData.map(note => [note.course, { name: note.course, teacher: note.student.firstname }])
    ).values())

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Enseignant</TableCell>
                        <TableCell>Nom du cours</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {classes.map((classe, index) => (
                        <TableRow key={index}>
                            <TableCell>{classe.teacher}</TableCell>
                            <TableCell>{classe.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Classe

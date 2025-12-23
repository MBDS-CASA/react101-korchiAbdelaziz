import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import notesData from '../assets/data/notes.json'


const Etudiants = () => {
    // Extraire les étudiants uniques
    const students = Array.from(new Map(
        notesData.map(note => [note.student.id, note.student])
    ).values())

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Prénom</TableCell>
                        <TableCell>Nom</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map(student => (
                        <TableRow key={student.id}>
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.firstname}</TableCell>
                            <TableCell>{student.lastname}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Etudiants

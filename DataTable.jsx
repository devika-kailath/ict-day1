import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const DataTable = () => {
  return (
    <div>
        <TableContainer sx={{border:'1px solid black'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NAme</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell>place</TableCell>
 
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>devika</TableCell>
                        <TableCell>19</TableCell>
                        <TableCell>tsr</TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
            
      
    </div>
  )
}

export default DataTable

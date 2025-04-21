import { Paper, TableContainer, Table, TableRow, TableHead, TableCell, TableBody, Button } from "@mui/material";

const UsersTable = ({rows, selectedUser, deleteUser}) => {         //this paper component helps to create a paper like effect on the table
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actoins</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                rows.length > 0 ? rows.map(row => (                                           //this is used to remove the border of the last row of the table(below style is used for that)
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}} > 
                        <TableCell component='th' scope="row">{row.id}</TableCell>
                        <TableCell component='th' scope="row">{row.name}</TableCell>
                        <TableCell>
                            <Button 
                                sx={{ margin: '0px 10px',}}
                                onClick={() => selectedUser({id: row.id, name: row.name})}      
                            >
                                Update
                            </Button>

                            <Button 
                                sx={{ margin: '0px 10px',}}
                                onClick={() => deleteUser({ id: row.id})} 
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow> 
                    )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}} >
                            <TableCell component='th' scope="row">No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>    
    </TableContainer>
    );
    
}
export default UsersTable;
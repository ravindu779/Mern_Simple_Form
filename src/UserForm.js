import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";


const UserForm = (props) => {

    const [id, setId] = useState(0); //state to store the id of the user
    const [name, setName] =useState(''); //state to store the name of the user

    return (
       <Grid 
            container 
            spacing={2} 
            sx={{         //like css but in js, to give style to the component
                backgroundColor: "#ffffff",
                marginBottom: "30px",
                display: "block",
            }}
        >
            <Grid item xs={12}>   
                <Typography component={"h1"} sx={{color: '#000000'}}>    
                    User Form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: 'flex'}} >
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <Input 
                    type="number"
                    id="id"
                    name="id"
                    sx={{width: '400px'}}
                    value={id} //value of the input field is set to the state id
                    onChange={e => setId (e.target.value)}     //in this onchange event used to get the value of the input field and set it to the state
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: 'flex'}} >
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <Input 
                    type="text"
                    id="name"
                    name="name"
                    sx={{width: '400px'}}
                    value={name}
                    onChange={e => setName (e.target.value)}     //in this onchange event used to get the value of the input field and set it to the state
                />
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    margintop: '20px',
                    marginLeft: '',
                    '&:hover': {
                        opacity: 0.7,
                        backgroundColor: '#00c6e6',
                    }
                }}
                >
                    Add
            </Button>

        </Grid>
    );
}
export default UserForm;
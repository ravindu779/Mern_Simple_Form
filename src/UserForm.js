import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {

    const [id, setId] = useState(0); //state to store the id of the user, this is state varible which is used to store the value of the input field
    const [name, setName] =useState(''); //state to store the name of the user

    useEffect(() => {
        if (!submitted) {
            setId(0); //if the form is not submitted then set the id to 0
            setName(''); //if the form is not submitted then set the name to empty string
        }
    }, [submitted]); //this useEffect hook is used to call the function when the component is mounted

    useEffect(() => {
        if (data?.id && data.id !== 0) {    //it there are have data and id is not 0 then set the id and name to the data
            setId(data.id);
            setName(data.name);
        }
    }, [data]); //this useEffect hook is used to call the function when the component is mounted

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
                    marginLeft: '0px',
                    marginTop: '30px',
                    '&:hover': {
                        opacity: 0.7,
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit ? updateUser({id, name}) : addUser({id, name})}
                >
                    {
                        isEdit ? 'Update' : 'Add' //if the isEdit is true then show the update button else show the add button
                    }
            </Button>

        </Grid>
    );
}
export default UserForm;
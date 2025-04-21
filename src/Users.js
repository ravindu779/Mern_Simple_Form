import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {   
  const [users, setUsers] = useState([]);  //this state is used to store the users data
  const [submitted, setSubmitted] = useState(false); //this state is used to check if the form is submitted or not
  const [selectedUser, setSelectedUser] = useState({}); //this state is used to store the selected user data
  const [isEdit, setIsEdit] = useState(false); //this state is used to check if the form is in edit mode or not

  useEffect(() =>{
    getUsers();
  }, []);       //this useEffect hook is used to call the getUsers function when the component is mounted

  const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data?.response || []); //if the response is not null then set the users state to the response data
      })
      .catch(error => {
        console.error("Axios error: ", error); //if there is an error then log it to the console
      })
  }


  const addUser = (data) => {
    setSubmitted(true); //set the submitted state to true when the form is submitted

    const payload ={      //this playload is used to send the data to the server
      id: data.id,
      name: data.name,    
    }

    Axios.post('http://localhost:3001/api/createuser', payload)
    .then(() => {
      getUsers(); //call the getUsers function to get the updated users data
      setSubmitted(false); //set the submitted state to false after the form is submitted
      isEdit(false);     //this is called state cleanup function
    })
    .catch(error => {
      console.error("Axios error: ", error); //if there is an error then log it to the console
    });
  }


  const updateUser = (data) => {
    setSubmitted(true); //set the submitted state to true when the form is submitted

    const payload ={
      id: data.id,
      name: data.name,      
    }

    Axios.put('http://localhost:3001/api/updateuser', payload)
    .then(() => {
      getUsers(); //call the getUsers function to get the updated users data
      setSubmitted(false); //set the submitted state to false after the form is submitted
      isEdit(false);     //this is called state cleanup function
    })
    .catch(error => {
      console.error("Axios error: ", error); //if there is an error then log it to the console
    });

  }


  const deleteUser = (data) => {
    Axios.delete('http://localhost:3001/api/deleteuser', data)
    .then(() => {
      getUsers();
    })
    .catch(error => {
      console.error("Axios error: ", error); //if there is an error then log it to the console
    });

  }

  return (
    <Box
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px',
        }}
    >
      <UserForm 
        addUser={addUser} //pass the addUser function to the UserForm component
        updateUser={updateUser} //pass the updateUser function to the UserForm component
        submitted={submitted} //pass the submitted state to the UserForm component
        data={selectedUser} //pass the selected user data to the UserForm component
        isEdit={isEdit} //pass the isEdit state to the UserForm component

      />
      <UsersTable 
        rows={users} 
        selectedUser={data => {
          setSelectedUser(data); //set the selected user data to the selectedUser state
          setIsEdit(true); //set the isEdit state to true when the user is selected
        }}
        deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)} 
      />
    </Box>
  );
};
export default Users;

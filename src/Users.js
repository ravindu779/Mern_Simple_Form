import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [      //this is normal verible which is used to store the data of the users
  {
    id: 1,
    name: "Ravindu",
  },
  {
    id: 2,
    name: "Malith",
  }
];

const Users = () => {
  return (
    <Box
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px',
        }}
    >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};
export default Users;

import { Container } from "@mui/material";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AdminCustomerAddPage = () => {
  return (
    <Container maxWidth="xl">
      <Head>
        <title>Admin - Customers - Add</title>
      </Head>

      <h1>Customer - Add</h1>
      <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Tags"
          variant="standard"
        />
      </Box>
    </Container>
  );
};

export default AdminCustomerAddPage;

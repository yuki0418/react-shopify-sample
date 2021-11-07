import { getCustomersViaHttp } from "@libs/admin/customer.service";
import { InferGetStaticPropsType, NextPageContext } from "next";
import Head from "next/head";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";

export async function getStaticProps(ctx: NextPageContext) {
  const { data } = await getCustomersViaHttp();

  return {
    props: {
      data: data,
    },
  };
}

const AdminCustomerPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container maxWidth="xl">
      <Head>
        <title>Admin - Customers</title>
      </Head>

      <h1>Customers</h1>
      <TableContainer>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.customers.edges.map(({ node }, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {node.displayName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {node.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {node.tags}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminCustomerPage;

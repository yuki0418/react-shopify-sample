import { getCustomersViaHttp } from "@libs/admin/customer.service";
import { InferGetStaticPropsType, NextPageContext } from "next";

export async function getStaticProps(ctx: NextPageContext) {
  const data = await getCustomersViaHttp();

  console.log(data.customers.edges);

  return {
    props: {
      data: "Admin",
    },
  };
}

const AdminPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Admin test page</h1>
      <p>Data: {data}</p>
    </div>
  );
};

export default AdminPage;

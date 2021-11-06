import { sendGraphQL } from "@libs/shopifyAdmin";
import { InferGetStaticPropsType, NextPageContext } from "next";

export async function getStaticProps(ctx: NextPageContext) {
  const query = `
    {
      products(first: 10, reverse: true) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;
  const res = await sendGraphQL(query);

  console.log("res:", res.data.products.edges);

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

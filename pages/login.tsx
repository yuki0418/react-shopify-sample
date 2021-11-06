import Shopify from "@shopify/shopify-api";
import { InferGetStaticPropsType, NextPageContext } from "next";

export async function getStaticProps(ctx: NextPageContext) {
  const authRoute = await Shopify.Auth.beginAuth(
    ctx.req,
    ctx.res,
    "SHOP",
    "/auth/callback",
    false
  );

  console.log("Hey: ", authRoute);

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
      <h1>Login page</h1>
    </div>
  );
};

export default AdminPage;

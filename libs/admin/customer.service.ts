import { sendHttpGraphQL } from "@libs/auth/basicHttpAuth";

export type Customers = {
  customers: {
    edges: [{ node: Customer }];
  };
};

type Customer = {
  email: string;
  displayName: string;
  tags: string[];
};

export const getCustomersViaHttp = async () => {
  const query = `
    {
      customers(first: 10, reverse: false) {
        edges {
          node {
            email
            displayName
            tags 
          }
        }
      }
    }
  `;

  const { data, extensions } = await sendHttpGraphQL<Customers>(query);
  return { data, extensions };
};

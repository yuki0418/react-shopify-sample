import { sendHttpGraphQL } from "@libs/auth/basicHttpAuth";

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
  const { data, extention } = await sendHttpGraphQL(query);
  return data;
};

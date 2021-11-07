import axios, { AxiosRequestConfig } from "axios";

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_GRAPHQL_URL } = process.env;

/**
 * Private Appの場合basic HTTP Authenticationを使用してRequestを送信する。
 * 参考: https://shopify.dev/api/admin-graphql#authentication
 * @param query - GraphQL Query
 * @returns - data
 */
export const sendHttpGraphQL = async (query: string) => {
  const options: AxiosRequestConfig = {
    url: SHOPIFY_GRAPHQL_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Access-Token": SHOPIFY_API_SECRET_KEY,
    },
    data: query,
  };

  const res = await axios(options);
  const { errors, data, extention } = res.data;
  return { data, extention };
};

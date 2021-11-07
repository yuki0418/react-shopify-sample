import axios, { AxiosRequestConfig } from "axios";

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_GRAPHQL_URL } = process.env;

type Extensions = {
  cost: {
    requestedQueryCost: number;
    actualQueryCost: number;
    throttleStatus: {
      maximumAvailable: number;
      currentlyAvailable: number;
      restoreRate: number;
    };
  };
};

type Errors = {
  message: string;
};

/**
 * Private Appの場合basic HTTP Authenticationを使用してRequestを送信する。
 * 参考: https://shopify.dev/api/admin-graphql#authentication
 * @param query - GraphQL Query
 * @returns - data
 */
export const sendHttpGraphQL = async <T>(query: string) => {
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
  const {
    errors,
    data,
    extensions,
  }: { errors: Errors; data: T; extensions: Extensions } = res.data;

  if (errors) {
    console.error(errors);
    throw new Error(errors.message);
  }

  return { data, extensions };
};

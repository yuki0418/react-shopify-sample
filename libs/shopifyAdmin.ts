import Shopify, { ApiVersion, AuthQuery } from "@shopify/shopify-api";
import { NextPageContext } from "next";
import axios, { AxiosRequestConfig } from "axios";

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET_KEY,
  SHOPIFY_SCOPES,
  SHOPIFY_SHOP,
  SHOPIFY_HOST,
  SHOPIFY_GRAPHQL_URL,
} = process.env;

export const sendGraphQL = async (query: string) => {
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
  return res.data;
};

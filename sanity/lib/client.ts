import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { cache } from "react";

import { apiVersion, dataset, projectId, useCdn } from "../env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const imageBuilder = imageUrlBuilder(client);
export const cachedFetchClient = cache(client.fetch.bind(client));

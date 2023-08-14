import { createClient } from "next-sanity";
import { cache } from "react";

import { apiVersion, dataset, projectId, useCdn } from "../env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const cachedFetchClient = cache(client.fetch.bind(client));

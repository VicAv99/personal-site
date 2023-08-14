import { SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import job from "./schemas/job";
import post from "./schemas/post";
import profile from "./schemas/profile";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, profile, job, blockContent],
};

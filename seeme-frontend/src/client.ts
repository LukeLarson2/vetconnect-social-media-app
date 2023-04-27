import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const token = process.env.REACT_APP_TOKEN;

if (!projectId) {
  throw new Error("Missing REACT_APP_SANITY_PROJECT_ID environment variable");
}

if (!token) {
  throw new Error("Missing REACT_APP_TOKEN environment variable");
}

const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2023-04-25",
  useCdn: true,
  token,
});

const builder = imageUrlBuilder(client);

const urlFor = (source: string) => builder.image(source);

export { client, urlFor };

import { groq } from "next-sanity";

const postFields = `
  _id,
  title,
  slug,
  body,
  excerpt,
  featured,
  publishedAt,
  categories[]->{
    _id,
    title,
    description
  },
  mainImage {alt, "image": asset->url},
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${postFields}
}`;

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(startDate desc){
  ${postFields}
}`;

export const featuredPostsQuery = groq`*[_type == "post" && defined(slug.current) && featured == true] | order(startDate desc){
  ${postFields}
}`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const profileQuery = groq`*[_type == "profile"][0]{
  _id,
  fullName,
  headline,
  profileImage {alt, "image": asset->url},
  shortBio,
  location,
  fullBio,
  email,
  "resumeURL": resumeURL.asset->url,
  socialLinks,
  skills
}`;

export const socialLinksQuery = groq`*[_type == "profile"][0].socialLinks`;

export const jobsQuery = groq`*[_type == "job"] | order(startDate desc) {
  _id,
  name,
  jobTitle,
  "logo": logo.asset->url,
  url,
  description,
  startDate,
  endDate,
}`;

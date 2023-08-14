import { groq } from "next-sanity";

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

import { PortableTextBlock } from "sanity";

export type AuthorType = {
  _id: string;
  name: string;
  slug: string;
  image?: ImageType;
  bio?: PortableTextBlock;
};

export type CategoryType = {
  _id: string;
  title: string;
  description?: string;
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo?: string;
  url?: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
};

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage?: ImageType;
  shortBio?: string;
  email?: string;
  fullBio: PortableTextBlock;
  location?: string;
  resumeURL?: string;
  socialLinks?: string[];
  skills?: string[];
};

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock;
  excerpt: string;
  publishedAt: Date;
  featured: boolean;
  categories: CategoryType[];
  mainImage?: ImageType;
  author?: AuthorType;
};

export type ImageType = {
  alt: string;
  image: string;
};

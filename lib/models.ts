import { PortableTextBlock } from "sanity";

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

export type ImageType = {
  alt: string;
  image: string;
};

export interface Post {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    readingTime: string;
    draft?: boolean;
    featured?: boolean;
    slug: string; // same as file name
  };
}

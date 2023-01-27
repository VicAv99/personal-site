import { toString } from 'mdast-util-to-string';
import getReadingtime from 'reading-time';

export const remarkReadingTime = () => {
  return (tree: unknown, { data }: any) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingtime(textOnPage);

    data.astro.frontmatter.readingTime = readingTime.text;
  };
};

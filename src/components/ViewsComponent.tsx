import { useEffect } from 'react';
import useSWR from 'swr';

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

export const ViewsComponent = ({
  slug,
  isBlogPage,
}: {
  slug: string;
  isBlogPage: boolean;
}) => {
  const path = `/api/views/${slug}`;
  const { data, mutate } = useSWR(path, fetcher);
  const views = +data?.amount;

  useEffect(() => {
    const registerView = () =>
      fetch(path, {
        method: "POST",
      });

    if (isBlogPage) {
      registerView();
    }

    mutate({ name: path, amount: views + 1 });
  }, [isBlogPage, path]);

  return `${views > 0 ? views.toLocaleString() : "–––"} views`;
};

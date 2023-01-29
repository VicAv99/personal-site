import { db } from '../../../lib/firebase';

import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => {
  const document = db.doc(`views/${params.slug}`);
  const snapshot = await document.get();

  return {
    body: JSON.stringify({
      amount: snapshot.data()?.amount,
    }),
  };
};

export const post: APIRoute = async ({ params }) => {
  const document = db.doc(`views/${params.slug}`);
  const snapshot = await document.get();

  if (!snapshot.exists) {
    document.create({
      amount: 1,
    });
  }

  document.update({
    amount: (await snapshot.data()?.amount) + 1,
  });

  return new Response(
    JSON.stringify({
      total: snapshot.data(),
    }),
    {
      status: 200,
    }
  );
};

export function getStaticPaths() {
  return [
    { params: { slug: "angular-interceptors" } },
    { params: { slug: "1" } },
    { params: { slug: "2" } },
  ];
}

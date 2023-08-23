import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { BiFile } from "react-icons/bi";
import { Job } from "~/components/job";
import { Button } from "~/components/ui/button";
import { ProfileType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { profileQuery } from "~/sanity/lib/queries";

import type { Metadata } from "next";
export default async function About() {
  const profile = await cachedFetchClient<ProfileType>(profileQuery);

  return (
    <main className="mx-auto max-w-5xl px-6 md:px-16 space-y-24">
      <section className="grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
        <div className="order-2 lg:order-none mt-24 lg:mt-0">
          <h1 className="mb-8 basis-1/2 text-4xl font-bold lg:text-5xl lg:leading-tight">
            I&apos;m {profile.fullName}. I live in {profile.location}, where I
            design the future.
          </h1>

          <div className="flex flex-col gap-y-3 leading-relaxed text-zinc-400">
            <PortableText value={profile.fullBio} />
          </div>
        </div>

        <div className="order-none flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
          <Image
            priority
            className="min-h-96 mb-1 max-h-96 rounded-2xl bg-muted bg-top object-cover"
            src={profile.profileImage?.image ?? ""}
            width={400}
            height={400}
            quality={100}
            alt={profile.profileImage?.alt ?? ""}
          />

          <Button asChild className="w-full" variant="secondary">
            <Link href={`${profile.resumeURL}?dl=victor-avila-resume.pdf`}>
              <BiFile className="text-base" /> Download Resumé
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-2xl space-y-6">
        <h2>Expertise</h2>
        <p className="text-zinc-400">
          I&apos;ve spent few years working on my skills. In no particular
          order, here are a few of them.
        </p>

        <ul className="flex flex-wrap items-center gap-3">
          {profile.skills?.map((skill, id) => (
            <li
              key={id}
              className="rounded-md border border-transparent bg-muted px-2 py-1 hover:border-zinc-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <Job />
    </main>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "A passionate developer who loves to learn and help others learn. I'm interested in all things web and all the cool and cutting-edge technologies that come with it.",
  openGraph: {
    title: "About",
    description:
      "A passionate developer who loves to learn and help others learn. I'm interested in all things web and all the cool and cutting-edge technologies that come with it.",
    url: "https://victor-avila.com/about",
    siteName: "Victor Avila's Website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/profile-black.jpeg`,
        width: 1200,
        height: 630,
        alt: "Victor Avila's About page",
      },
    ],
  },
};

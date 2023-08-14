import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { Button } from "~/components/ui/button";
import { ProfileType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { profileQuery } from "~/sanity/lib/queries";

export default async function About() {
  const profile = await cachedFetchClient<ProfileType>(profileQuery);

  return (
    <main className="mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
      <div key={profile._id}>
        <section className="grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
          <div className="order-2 lg:order-none">
            <h1 className="mb-8 basis-1/2 text-4xl font-bold lg:text-5xl lg:leading-tight">
              I&apos;m {profile.fullName}. I live in {profile.location}, where I
              design the future.
            </h1>

            <div className="flex flex-col gap-y-3 leading-relaxed text-zinc-400">
              <PortableText value={profile.fullBio} />
            </div>
          </div>

          <div className="order-none mb-12 flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
            <div>
              <Image
                className="min-h-96 mb-4 max-h-96 rounded-2xl bg-muted bg-top object-cover"
                src={profile.profileImage?.image ?? ""}
                width={400}
                height={400}
                quality={100}
                alt={profile.profileImage?.alt ?? ""}
              />

              <Button asChild className="w-full" variant="secondary">
                <Link href={`${profile.resumeURL}`}>
                  <BiFile className="text-base" /> Download Resumé
                </Link>
              </Button>
            </div>

            <ul>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-x-2 duration-300 hover:text-purple-400"
                >
                  <BiEnvelope className="text-lg" />
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-24 max-w-2xl">
          <h2 className="mb-4 text-4xl font-semibold">Expertise</h2>
          <p className="max-w-lg text-zinc-400">
            I&apos;ve spent few years working on my skills. In no particular
            order, here are a few of them.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-3">
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
      </div>
    </main>
  );
}

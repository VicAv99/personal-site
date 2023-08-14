import { Job } from "~/components/job";
import { Button } from "~/components/ui/button";
import { ProfileType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { profileQuery } from "~/sanity/lib/queries";

export default async function Home() {
  const profile = await cachedFetchClient<ProfileType>(profileQuery);

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-16">
      <section className="mb-16 mt-20 lg:mt-32">
        <div className="max-w-2xl lg:max-w-2xl">
          <h1 className="mb-6 min-w-full text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
            {profile.headline}
          </h1>
          <p className="text-base leading-relaxed text-zinc-400">
            {profile.shortBio}
          </p>
          <ul className="my-10 flex items-center gap-x-6">
            {Object.entries(profile.socialLinks ?? [])
              .sort()
              .map(([key, value]) => (
                <Button key={key} asChild variant="secondary">
                  <li>
                    <a href={value} rel="noreferer noopener">
                      {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                    </a>
                  </li>
                </Button>
              ))}
          </ul>
        </div>
      </section>
      <Job />
    </main>
  );
}

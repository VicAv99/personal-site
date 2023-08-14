import { format } from "date-fns";
import Image from "next/image";
import { JobType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { jobsQuery } from "~/sanity/lib/queries";

export async function Job() {
  const jobs = await cachedFetchClient<JobType[]>(jobsQuery);

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="mb-4 text-4xl font-semibold">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {jobs.map((data) => (
          <div
            key={data._id}
            className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-7 before:top-[4.5rem] before:h-[calc(100%-50px)] before:w-[1px] before:bg-zinc-800 lg:gap-x-6"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="relative min-h-[60px] min-w-[60px] overflow-clip rounded-md"
            >
              <Image
                src={data?.logo ?? ""}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                {format(new Date(data.startDate), "MMMM, yyyy")} -{" "}
                {data.endDate
                  ? format(new Date(data.endDate), "MMMM, yyyy")
                  : format(new Date(), "MMMM, yyyy")}
              </small>
              <p className="my-4 text-base text-zinc-400">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

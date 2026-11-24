"use client";

import { MeetingTypeList } from "@/components/meeting-type-list";
import { useGetCalls } from "@/hooks/use-get-calls";

const HomePage = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="glass-card relative h-[300px] w-full overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 size-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism inline-flex w-fit items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-sky-1">
            {upcomingCalls?.length === 0
              ? "No upcoming meeting"
              : upcomingCalls?.length &&
                `Upcoming meeting at: 
                ${upcomingCalls[
                  upcomingCalls.length - 1
                ].state?.startsAt?.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="bg-gradient-to-r from-white via-sky-1 to-blue-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent lg:text-7xl">
              {time}
            </h1>

            <p className="text-lg font-medium text-sky-1/90 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default HomePage;

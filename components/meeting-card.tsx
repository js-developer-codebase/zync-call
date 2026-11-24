"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

type MeetingCardProps = {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
};

export const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section
      className={cn(
        "glass-card flex w-full flex-col justify-between gap-6 rounded-[22px] px-6 py-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 xl:max-w-[568px]",
        { "min-h-[220px]": !isPreviousMeeting }
      )}
    >
      <article className="flex flex-col gap-5">
        <div className="flex-center glassmorphism size-12 rounded-2xl">
          <Image src={icon} alt="upcoming" width={26} height={26} />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {title}
            </h1>
            <p className="text-sm font-normal text-sky-1/80">{date}</p>
          </div>
        </div>
      </article>
      {!isPreviousMeeting && (
        <article className="flex items-center justify-end gap-2.5">
          <Button
            onClick={handleClick}
            className="glass-btn-primary rounded-xl px-6 text-white"
          >
            {buttonIcon1 && (
              <Image src={buttonIcon1} alt="feature" width={20} height={20} />
            )}
            &nbsp; {buttonText}
          </Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(link);
              toast({
                title: "Link copied.",
              });
            }}
            className="glass-btn-secondary rounded-xl px-5 text-white"
          >
            <Image
              src="/icons/copy.svg"
              alt="feature"
              width={20}
              height={20}
            />
            &nbsp; Copy Link
          </Button>
        </article>
      )}
    </section>
  );
};

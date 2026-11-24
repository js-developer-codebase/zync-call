import { cn } from "@/lib/utils";
import Image from "next/image";

type HomeCardProps = {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
};

export const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <button
      className={cn(
        "group relative flex min-h-[260px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[22px] border border-white/15 px-5 py-6 text-left shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_24px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] xl:max-w-[270px]",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-2xl transition-transform duration-300 group-hover:scale-110">
        <Image src={img} alt={title} width={26} height={26} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h1>

        <p className="text-base font-normal text-white/80">{description}</p>
      </div>
    </button>
  );
};

"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/use-get-call-by-id";

type TableProps = {
  title: string;
  description: string;
};

const Table = ({ title, description }: TableProps) => (
  <div className="flex flex-col items-start gap-2 xl:flex-row">
    <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
      {title}:
    </h1>
    <p className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
      {description}
    </p>
  </div>
);

const PersonalRoomPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { user, isLoaded } = useUser();
  const streamClient = useStreamVideoClient();

  const meetingId = user?.id;
  const { call } = useGetCallById(meetingId!);

  if (!isLoaded || !user || !user.id) return <Loader />;

  const displayName =
    user.username ||
    user.fullName ||
    user.firstName ||
    user.primaryEmailAddress?.emailAddress ||
    "Personal";

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const startRoom = async () => {
    if (!streamClient || !user || !user?.id) return;

    if (!call) {
      const newCall = streamClient.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <h1 className="bg-gradient-to-r from-white via-sky-1 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
        Personal Room
      </h1>

      <div className="glass-card flex w-full flex-col gap-6 rounded-3xl p-8 xl:max-w-[900px]">
        <Table title="Meeting ID" description={meetingId!} />
        <div className="h-px w-full bg-white/10" />
        <Table title="Topic" description={`${displayName}'s Meeting Room`} />
        <div className="h-px w-full bg-white/10" />
        <Table title="Invite link" description={meetingLink} />
      </div>

      <div className="flex flex-wrap gap-4">
        <Button
          className="glass-btn-primary h-11 rounded-xl px-6 text-white"
          onClick={startRoom}
        >
          Start Meeting
        </Button>

        <Button
          className="glass-btn-secondary h-11 rounded-xl px-6 text-white"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link copied.",
            });
          }}
        >
          Copy invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoomPage;

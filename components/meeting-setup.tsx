"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type MeetingSetupProps = {
  setIsSetupComplete: (isSetupComplete: boolean) => void;
};

export const MeetingSetup = ({ setIsSetupComplete }: MeetingSetupProps) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call)
    throw new Error("useCall must be used within StreamCall component.");

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 text-white">
      <div className="glass-panel flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded-3xl p-8">
        <h1 className="bg-gradient-to-r from-white via-sky-1 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
          Meeting Setup
        </h1>

        <div className="w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl">
          <VideoPreview />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <label className="glass-btn-secondary flex cursor-pointer items-center justify-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium">
            <input
              type="checkbox"
              checked={isMicCamToggledOn}
              onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
              className="size-4 accent-blue-500"
            />
            Join with mic and camera off
          </label>

          <div className="glass-btn-secondary rounded-xl p-1">
            <DeviceSettings />
          </div>
        </div>

        <Button
          className="glass-btn-primary h-12 rounded-xl px-8 text-base font-semibold text-white"
          onClick={() => {
            call.join();

            setIsSetupComplete(true);
          }}
        >
          Join meeting
        </Button>
      </div>
    </div>
  );
};

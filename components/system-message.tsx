import avatar from "@/app/dashboard/career/system-avatar.png";
import Image from "next/image";
import { FC } from "react";

type SystemMessageProps = {
  text: string;
};

export const SystemMessage: FC<SystemMessageProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      <Image className="h-12 w-12" src={avatar} alt="" />
      <p className="w-max max-w-xs rounded-lg bg-white p-4 text-sm lg:max-w-2xl lg:px-4 lg:py-3 lg:text-base">
        {text}
      </p>
    </div>
  );
};

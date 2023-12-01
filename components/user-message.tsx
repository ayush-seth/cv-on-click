import avatar from "@/app/dashboard/career/user-avatar.png";
import Image from "next/image";
import { FC } from "react";

type UserMessageProps = {
  text: string;
};

export const UserMessage: FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <p className="w-max max-w-xs rounded-lg bg-blue-500 p-4 text-sm text-white lg:max-w-2xl lg:px-4 lg:py-3 lg:text-base ">
        {text}
      </p>
      <Image className="h-12 w-12" src={avatar} alt="" />
    </div>
  );
};

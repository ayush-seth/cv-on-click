import { IconCornerDownRight } from "@tabler/icons-react";
import { FC } from "react";

type SuggestionProps = {
  text: string;
};

export const Suggestion: FC<SuggestionProps> = ({ text }) => {
  return (
    <div className=" flex w-max max-w-xs items-center rounded-2xl bg-white px-4 py-1 text-sm text-blue-500 lg:max-w-2xl">
      <IconCornerDownRight className="w-4 " />
      <a href="" className="pl-1">
        {text}
      </a>
    </div>
  );
};

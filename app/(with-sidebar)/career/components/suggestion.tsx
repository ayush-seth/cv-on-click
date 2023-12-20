import { IconCornerDownRight } from "@tabler/icons-react";

type SuggestionProps = {
  text: string;
};

export function Suggestion({ text }: SuggestionProps) {
  return (
    <div className=" flex w-max max-w-xs items-center rounded-2xl bg-white px-4 py-1 text-sm text-blue-500 lg:max-w-2xl">
      <IconCornerDownRight className="w-4 " />
      <a href="" className="pl-1">
        {text}
      </a>
    </div>
  );
}

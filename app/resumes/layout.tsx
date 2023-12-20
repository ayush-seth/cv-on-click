import Image from "next/image";
import newResumeImg from "./new/new-resume.png";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <Image
        src={newResumeImg}
        className="hidden h-full w-auto xl:block"
        alt=""
      />
      <div className="grow p-4 xl:px-16 xl:py-6">{children}</div>
    </div>
  );
}

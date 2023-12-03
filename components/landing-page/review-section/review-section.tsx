"use client";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { IconStarFilled } from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";

export function ReviewSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, active: true });

  return (
    <div>
      <TypographyH2 className="text-center">
        Our users who built resume with us got hired{" "}
      </TypographyH2>
      <div className="overflow-x-hidden" ref={emblaRef}>
        <div className="grid auto-cols-[100%] grid-flow-col lg:auto-cols-[50%] xl:auto-cols-[33.33%]">
          {reviews.map((review, i) => (
            <div key={i} className="snap-start px-4">
              <div className="flex flex-col items-center gap-5 border p-8 shadow-lg shadow-slate-300">
                <div className="flex gap-2 text-blue-500">
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                </div>
                <p className="text-center">{review.review}</p>
                <span className="mt-5 font-semibold text-gray-500">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const reviews = [
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur",
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur",
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur",
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur",
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur",
  },
];

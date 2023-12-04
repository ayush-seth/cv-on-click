"use client";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { IconStarFilled } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export function ReviewSection() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  return (
    <div className="mt-32">
      <TypographyH2 className="text-center">
        Our users who built resume with us got hired
      </TypographyH2>
      <div
        className="mt-10 cursor-grab overflow-x-hidden active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex">
          {reviews.map(({ review, rating, author }, i) => (
            <div
              key={i}
              className="shrink-0 basis-full px-2 lg:basis-1/2 lg:px-8 xl:basis-1/3"
            >
              <div className="flex flex-col items-center gap-5 border p-8 shadow-lg shadow-slate-300">
                <div className="flex gap-2 text-blue-500">
                  {[...Array(rating)].map((_, i) => (
                    <IconStarFilled key={i} />
                  ))}
                </div>
                <p className="text-center">{review}</p>
                <span className="mt-5 font-semibold text-gray-500">
                  {author}
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
    author: "Ashwiti Kaur #1",
    rating: 5,
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur #2",
    rating: 3,
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur #3",
    rating: 5,
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur #4",
    rating: 3,
  },
  {
    review:
      "COC made crafting a professional resume a breeze. The AI-generated result was not only quick but also spot-on, capturing my essence in a way that resonated with employers.",
    author: "Ashwiti Kaur #5",
    rating: 4,
  },
];

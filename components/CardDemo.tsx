"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ConfettiSideCannons } from "./ui/confetti-button";

export function CardDemo() {
const words = [
  {
    text: "The",
  },
  {
    text: "heart",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "and",
  },
  {
    text: "trust",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "given",
  },
  {
    text: "were",
  },
  {
    text: "taken",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "for",
  },
  {
    text: "granted.",
  },
  {
    text: "Love",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "isn’t",
  },
  {
    text: "one-sided.",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "Self-respect",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "means",
  },
  {
    text: "leaving",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "what",
  },
  {
    text: "doesn’t",
  },
  {
    text: "value",
    className: "text-white dark:text-rose-500",
  },
  {
    text: "you.",
  },
];


  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <TypewriterEffect words={words} />
      <CardDescription>Made by @Nabil</CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <Heart1 className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <Heart2 className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <Heart3 className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <Heart4 className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <Heart5 className="h-4 w-4 " />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-black bg-black-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-center text-sm font-normal text-neutral-400 max-w-sm mt-12 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const Heart1 = ({ className }: { className?: string }) => {
  return <Image src="/icon5.png" alt="" width={24} height={24} />;
};

export const Heart2 = ({ className }: { className?: string }) => {
  return <Image src="/icon1.png" alt="" width={34} height={34} />;
};
export const Heart3 = ({ className }: { className?: string }) => {
  return <Image src="/icon2.png" alt="" width={45} height={45} />;
};

export const Heart4 = ({ className }: { className?: string }) => {
  return <Image src="/icon3.png" alt="" width={40} height={40} />;
};

export const Heart5 = ({ className }: { className?: string }) => {
  return <Image src="/icon4.png" alt="" width={24} height={24} />;
};

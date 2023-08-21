"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Head from "next/head";


const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music generation",
    icon: Music,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/music",
  },
  {
    label: "Image generation",
    icon: ImageIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/image",
  },
  {
    label: "Video generation",
    icon: VideoIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/video",
  },
  {
    label: "code generation",
    icon: CodeIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/code",
  },
];

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power of AI
        </h2>
        <p className="text-muted-foreground text-center font-light text-sm md:text-lg">
          Chat with the smartest AI - Expirence the Power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5 " />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;

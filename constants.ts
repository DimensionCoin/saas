import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 10;
export const MAX_SUB_COUNTS = 200;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/code",
  },
];

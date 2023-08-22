import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Image from "next/image"; // <-- Import the Image component

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon | string;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: IconComponent,
  iconColor,
  bgColor,
}: HeadingProps) => {
  const isImageIcon = typeof IconComponent === "string";

  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8 ">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        {isImageIcon ? (
          // Use the Image component here
          <Image
            src={IconComponent as string}
            width={56}
            height={56}
            alt="logo"
          />
        ) : (
          <IconComponent className={cn("w-10 h-10", iconColor)} />
        )}
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="tex-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

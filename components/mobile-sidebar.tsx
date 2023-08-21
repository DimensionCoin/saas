"use client";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import { Sidebar } from "./sidebar";
import { useState, useEffect } from "react";

interface ModibleSidebarprops {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount,
  isPro = false,
}: ModibleSidebarprops) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

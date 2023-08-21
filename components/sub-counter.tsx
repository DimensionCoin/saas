"use client";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { MAX_SUB_COUNTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

export const SubCounts = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean;
  apiLimitCount: number;
}) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-black mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_SUB_COUNTS} Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_SUB_COUNTS) * 100}
            />
            {/* Display message if apiLimitCount has reached MAX_SUB_COUNTS */}
            {apiLimitCount >= MAX_SUB_COUNTS && (
              <div className="mt-4 text-red-500">
                Looks like you've used all your generations this month, next
                month you will restart at 0
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

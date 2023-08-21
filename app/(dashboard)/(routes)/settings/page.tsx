import { SubCounts } from "@/components/sub-counter";
import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  const apiLimitCount = await getApiLimitCount();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon="/logo.png"
        iconColor="text-gray-700"
        bgColor=""
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        <div>
          <SubCounts isPro={isPro} apiLimitCount={apiLimitCount} />
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;

import { SubCounts } from "@/components/sub-counter";
import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";
import { SubscriptionEndDate } from "@/components/countdown-timer";

const SettingsPage = async () => {
  const subscriptionStatus = await checkSubscription();
  const isPro = subscriptionStatus && subscriptionStatus.isValid ? true : false;
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
      <div className="mb-4 py-4">
        {subscriptionStatus && subscriptionStatus.endDate && (
          <SubscriptionEndDate endDate={subscriptionStatus.endDate} />
        )}{" "}
      </div>
    </div>
  );
};

export default SettingsPage;

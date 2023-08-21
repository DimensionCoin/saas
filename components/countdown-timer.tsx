"use client";
import React from "react";

interface CountdownTimerProps {
  endDate: Date;
}

export const SubscriptionEndDate: React.FC<CountdownTimerProps> = ({
  endDate,
}) => {
  // Format the endDate to a readable string
  const formattedDate = endDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4 m-4">
      <h3 className="text-xl font-semibold mb-2">Subscription Details</h3>
      <p className="text-gray-600">
        Your subscription will end on{" "}
        <span className="font-medium">{formattedDate}</span>.
      </p>
    </div>
  );
};

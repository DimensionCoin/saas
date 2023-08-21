import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-[#464646] flex h-screen w-max p-5 mt-2 mb-2 rounded-lg shadow-black shadow-lg">
      <SignUp />
    </div>
  );
}

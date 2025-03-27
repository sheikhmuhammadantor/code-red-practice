import { Button } from "@/components/cn/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="mx-auto">
          Welcome to <span className="text-red-500">Code Red</span>
        </h2>
        <Image src="/logo.png" alt="Code Red Logo" width={200} height={200} />
        <Button variant="outline" className="mx-auto font-bold">
          Click Me
        </Button>
      </main>
    </div>
  );
}

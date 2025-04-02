// import { Button } from "@/components/cn/ui/button";
import { Counter } from "@/features/counter/Counter";
import React from "react";

function Go() {
  return (
    <section className="my-6 p-6 space-y-4">
      {/* <div className="max-w-xl mx-auto ring-2 ring-red-500 rounded-2xl p-6 text-center">
        <Button className="mx-auto mb-4 text-red-500 text-2xl bg-transparent ">
          0
        </Button>
        <div className="flex gap-4 justify-center">
          <Button>Increment</Button>
          <Button>Decrement</Button>
        </div>
      </div> */}
      <Counter/>
    </section>
  );
}

export default Go;

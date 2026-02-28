// app/page.tsx or wherever your Home component is defined
"use client";

import Hero from "@/components/home/hero";

 
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-primary">
      <Hero/>
    </main>
  );
}

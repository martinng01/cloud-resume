import { Image } from "@heroui/image";

import Hero from "./sections/Hero";
import { Navbar } from "./components/navbar";
import Work from "./sections/Work";

export default function Page() {
  return (
    <div className="dark text-foreground bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        <section className="flex flex-col items-center justify-center gap-4">
          <Hero />
          <Work />

          <div
            aria-hidden="true"
            className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
          >
            <Image removeWrapper src="./gradients/left-blob.png" />
          </div>
          <div
            aria-hidden="true"
            className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
          >
            <Image removeWrapper src="./gradients/right-blob.png" />
          </div>
        </section>
      </main>
    </div>
  );
}

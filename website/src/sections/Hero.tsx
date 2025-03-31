import { Image } from "@heroui/image";

import { subtitle, title } from "@/components/primitives";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center h-screen w-full">
      <div className="max-w-lg text-center justify-center">
        <span className={title()}>I&apos;m&nbsp;</span>
        <span className={title({ color: "violet" })}>Martin</span>
        <span className={title()}>,</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Year 3 student at the National University of Singapore studying
          Computer Science.
        </div>
      </div>

      <Image height={300} radius="full" src="./profile.jpeg" width={300} />
    </div>
  );
}

import profilePicture from "../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center h-screen w-full gap-8">
      <div className="max-w-lg text-center justify-center">
        <h1 className="text-5xl font-bold">
          <span>I&apos;m&nbsp;</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
            Martin
          </span>
          <span>,</span>
        </h1>
        <br />
        <p className="text-2xl">
          Year 3 student at the National University of Singapore studying
          Computer Science.
        </p>
      </div>

      <div className="avatar">
        <div className="w-72 rounded-full">
          <img src={profilePicture} alt="" />
        </div>
      </div>
    </div>
  );
}

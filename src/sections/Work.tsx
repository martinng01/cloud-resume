import { Image } from "@heroui/image";

import { subtitle, title } from "@/components/primitives";

function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <div className="grid grid-cols-3 gap-4 w-3/4 relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="col-span-1 flex justify-end pr-4">
          <div className="bg-white shadow-lg p-4 rounded-lg w-60">
            <h3 className="font-bold">Job Title 1</h3>
            <p>Company Name</p>
            <p className="text-sm text-gray-500">2023 - Present</p>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex justify-start pl-4">
          <div className="bg-white shadow-lg p-4 rounded-lg w-60">
            <h3 className="font-bold">Job Title 2</h3>
            <p>Company Name</p>
            <p className="text-sm text-gray-500">2022 - 2023</p>
          </div>
        </div>

        <div className="col-span-1 flex justify-end pr-4">
          <div className="bg-white shadow-lg p-4 rounded-lg w-60">
            <h3 className="font-bold">Job Title 3</h3>
            <p>Company Name</p>
            <p className="text-sm text-gray-500">2021 - 2022</p>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex justify-start pl-4">
          <div className="bg-white shadow-lg p-4 rounded-lg w-60">
            <h3 className="font-bold">Job Title 4</h3>
            <p>Company Name</p>
            <p className="text-sm text-gray-500">2020 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center h-screen w-full">
      <div className="flex-5">
        <span className={title()}>Work Experience</span>
      </div>
      <div className="flex-1">{Timeline()}</div>
    </div>
  );
}

import Markdown from "react-markdown";
import timelineData from "../data/timelineData";

export default function Work() {
  return (
    <div className="mx-36">
      <h1 className="text-5xl font-bold my-24 text-center">Work Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((entry, index) => TimelineItem({ entry, index }))}
      </ul>
    </div>
  );
}

function TimelineItem({ entry, index }) {
  return (
    <li key={index}>
      {index !== 0 && <hr />}
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          index % 2 == 0
            ? "timeline-start timeline-box mb-10 mx-6"
            : "timeline-end timeline-box mb-10 mx-6"
        }
      >
        <time className="font-mono italic">{entry.date}</time>
        <div className="text-lg font-black">{entry.company}</div>
        <div className="text-lg font-black italic text-[#07BEB8]">
          {entry.role}
        </div>
        <ul className="list-disc prose prose-p:m-2 px-4">
          {entry.description.map((point, index) => (
            <li key={index}>{<Markdown>{point}</Markdown>}</li>
          ))}
        </ul>
      </div>
      {index !== timelineData.length - 1 && <hr />}
    </li>
  );
}

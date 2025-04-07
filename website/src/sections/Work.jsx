import Markdown from "react-markdown";

const timelineData = [
  {
    company: "Ventas Bio",
    role: "AI/ML Transformation Intern",
    date: "Sep 2024 - Jan 2025",
    description: [
      "Worked on and improved the company's **knowledge retrieval chatbot**",
      "Improved **information extraction** from documents and **reranking** methods, leading to a **70% improvement** in response accuracy",
      "Developed an **evaluation pipeline** for automated benchmarking of LLMs, saving time spent on manual evaluation",
      "Collaborated with and **communicated complex AI concepts** to cross-functional teams, ensuring alignment throughout the development process",
      "**Fine-tuned and evaluated** a Whisper model using transcripts extracted through OCR to enhance local speech recognition capabilities, increasing call agent efficiency",
    ],
    skills: [
      "RAG",
      "Technical Communication",
      "Ollama",
      "Fine Tuning",
      "LLM Evaluation",
      "Information Retrieval",
    ],
  },
  {
    company: "A*STAR",
    role: "Artificial Intelligence Intern",
    date: "May 2024 - Aug 2024",
    description: [
      "Enhanced the accuracy of in-house translation models using RAG and LLMs by **17%**",
      "Implemented a web application to benchmark the accuracy of lightweight translation systems",
      "**Fine-tuned LLMs** to perform Text-Style Transfer",
    ],
    skills: [
      "RAG",
      "Technical Communication",
      "Ollama",
      "Fine Tuning",
      "LLM Evaluation",
      "Information Retrieval",
    ],
  },
  {
    company: "ANZElectric",
    role: "Software Engineering Intern",
    date: "Dec 2023 - May 2024",
    description: [
      "Created multiple cross-platform, user-facing applications using **Flutter** for various hardware devices",
      "Designed the application's **UI/UX** using **Figma**, ensuring intuitive user experiences were delivered consistently",
      "Implemented and managed **CI/CD pipelines** using GitHub Actions for seamless application deployment",
    ],
    skills: [
      "RAG",
      "Technical Communication",
      "Ollama",
      "Fine Tuning",
      "LLM Evaluation",
      "Information Retrieval",
    ],
  },
  {
    company: "A*STAR",
    role: "Artificial Intelligence Intern",
    date: "Jan 2022 - June 2022",
    description: [
      "**Scraped and preprocessed** millions of sentences from online sources to create high-quality datasets for training",
      "**Trained and optimized hyperparameters** for a Neural Machine Translation (NMT) model, deploying the model using **Flask**",
    ],
    skills: [
      "RAG",
      "Technical Communication",
      "Ollama",
      "Fine Tuning",
      "LLM Evaluation",
      "Information Retrieval",
    ],
  },
];

export default function Work() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-36">
      {timelineData.map((entry, index) => TimelineItem({ entry, index }))}
    </ul>
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
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10"
        }
      >
        <time className="font-mono italic">{entry.date}</time>
        <div className="text-lg font-black">{entry.company}</div>
        <div className="text-lg font-black">{entry.role}</div>
        <ul className="prose prose-p:m-2">
          {entry.description.map((point, index) => (
            <li key={index}>{<Markdown>{point}</Markdown>}</li>
          ))}
        </ul>
      </div>
      {index !== timelineData.length - 1 && <hr />}
    </li>
  );
}

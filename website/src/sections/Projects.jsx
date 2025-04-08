import projectsData from "../data/projectsData";

export default function Projects() {
  return (
    <div className="mx-36">
      <h1 className="text-5xl font-bold my-24 text-center">
        Personal Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-16 justify-items-center">
        {projectsData.map((entry) => ProjectCard({ entry }))}
      </div>
    </div>
  );
}

function ProjectCard({ entry }) {
  return (
    <div className="card card-bordered bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          className="h-54 w-full filter brightness-75"
          src={entry.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p>{entry.description}</p>
        <p className="italic">{entry.context}</p>
        <div className="card-actions my-2">
          {entry.skills.map((skill) => (
            <div className="badge badge-outline">{skill}</div>
          ))}
        </div>
        {ProjectLinks(entry.links)}
      </div>
    </div>
  );
}

function ProjectLinks({ github, devpost, website }) {
  return (
    <div>
      {github && (
        <a href={github} target="_blank">
          <button className="btn btn-ghost btn-circle">
            <svg height={32} viewBox="0 0 24 24" width={32}>
              <path
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </a>
      )}
      {devpost && (
        <a href={devpost} target="_blank">
          <button className="btn btn-ghost btn-circle">
            <svg height={32} x="0px" y="0px" viewBox="0 0 32 32" width={32}>
              <path
                fill="currentColor"
                d="M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 21 L 9 21 C 10.654 21 12 19.654 12 18 L 12 14 C 12 12.346 10.654 11 9 11 L 6 11 z M 16 11 C 14.897 11 14 11.897 14 13 L 14 19 C 14 20.103 14.897 21 16 21 L 18 21 L 18 19 L 16 19 L 16 17 L 18 17 L 18 15 L 16 15 L 16 13 L 18 13 L 18 11 L 16 11 z M 19.691406 11 L 21.775391 20.025391 C 21.907391 20.595391 22.415 21 23 21 C 23.585 21 24.092609 20.595391 24.224609 20.025391 L 26.308594 11 L 24.255859 11 L 23 16.439453 L 21.744141 11 L 19.691406 11 z M 8 13 L 9 13 C 9.552 13 10 13.448 10 14 L 10 18 C 10 18.552 9.552 19 9 19 L 8 19 L 8 13 z"
              ></path>
            </svg>
          </button>
        </a>
      )}
      {website && (
        <a href="https://github.com/martinng01" target="_blank">
          <button className="btn btn-ghost btn-circle">
            <svg width={32} height={32} viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                fill="currentColor"
              />
            </svg>
          </button>
        </a>
      )}
    </div>
  );
}

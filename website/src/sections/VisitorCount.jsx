// VisitorCounter.jsx
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [message, setMessage] = useState("Loading visitor count…");

  useEffect(() => {
    fetch(
      "https://ql7clnksoqep7jixmf6ontlkxu0kyhnu.lambda-url.ap-southeast-1.on.aws/"
    )
      .then((res) => res.json())
      .then((data) =>
        setMessage(`This website has been visited ${data} times 🎉`)
      )
      .catch((err) => {
        console.error("Error fetching visitor count:", err);
        setMessage("Error loading visitor count");
      });
  }, []);

  return (
    <div className="py-20 text-center">
      <p>{message}</p>
    </div>
  );
}

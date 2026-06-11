import { useState } from "react";

function WishlistButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button
      onClick={() => setSaved(!saved)}
      className="text-3xl transition hover:scale-110"
    >
      {saved ? "❤️" : "🤍"}
    </button>
  );
}

export default WishlistButton;
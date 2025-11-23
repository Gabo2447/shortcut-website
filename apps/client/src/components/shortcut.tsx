import React, { useState } from "react";
import { FaSpinner, FaArrowUpFromBracket } from "react-icons/fa6";

const Shortcut: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [longUrl, setLongUrl] = useState("https://");
  // const [shortUrl, setShortUrl] = useState("");

  const getShortUrl = async (e: React.FormEvent) => {
    interface ResponseData {
      longUrl?: string;
      message?: string;
      shortCode?: string;
      shortUrl?: string;
    }
    e.preventDefault();
    setIsLoading(true);

    const div = document.getElementById("shortcut-div") as HTMLDivElement;
    const API_ENDPOINT = "/shorten";

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        div.innerText = `Error al tratar de acortar la URL.\n Intentelo de nuevo`;
        div.className = "errorCard";
        setIsLoading(false);
        return;
      }

      const data: ResponseData = await response.json();

      div.innerText = `${data.message}`;
      div.innerHTML = `<a href=${data.shortUrl} target="_blank">${data.shortUrl}</a>`;
      div.className = "successCard";
      setIsLoading(false);
      console.log(data);
    } catch (e) {
      console.error(`${e}`);
    }
  };

  // const handleClick = "";

  return (
    <form className="max-w-[500px] mx-auto" onSubmit={getShortUrl}>
      <div className="flex gap-x-2 justify-center px-4">
        <input
          type="text"
          id="shortcut-input"
          placeholder="https://www.google.com"
          value={longUrl}
          onChange={(e) => {
            if (e.target.value.length > 7) setLongUrl(e.target.value);
          }}
          className="card focus:outline-none focus:ring-neutral-300 w-full"
        />
        <button
          disabled={isLoading}
          type="submit"
          id="shortcut-button"
          className="w-auto gap-x-2 text-white bg-blue-600 flex items-center justify-center px-4 py-0.5 rounded-lg hover:-translate-y-0.5 transition font-semibold"
        >
          {isLoading ? (
            <div className="animate-spin">
              <FaSpinner className="size-5" />
            </div>
          ) : (
            <>
              Enviar <FaArrowUpFromBracket className="size-5" />
            </>
          )}
        </button>
      </div>
      <div id="shortcut-div"></div>
    </form>
  );
};

export default Shortcut;

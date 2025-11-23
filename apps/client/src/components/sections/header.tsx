import {
  FaStaylinked,
  FaSquareGithub,
  FaLinkedin,
  FaFolderOpen,
} from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between px-4 py-2 mb-4 border-b border-neutral-700 text-neutral-300">
      <div className="flex gap-x-2 items-center">
        <FaStaylinked className=" size-7" />
        <h2 className="font-bold text-2xl">Shortcut</h2>
      </div>
      <nav className="flex gap-x-3">
        <a
          href="https://linkedin.com/in/Gabo2447/"
          target="_blank"
          className="card"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-6" />
        </a>
        <a
          href="https://github.com/Gabo2447/shortcut-website"
          target="_blank"
          className="card"
          rel="noopener noreferrer"
        >
          <FaSquareGithub className="size-6" />
        </a>
        <a
          href="https://github.com/Gabo2447/"
          target="_blank"
          className="card"
          rel="noopener noreferrer"
        >
          <FaFolderOpen className="size-6" />
        </a>
      </nav>
    </header>
  );
};

export default Header;

import "./App.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      ) : (
        <div className="App text-center">
          <header className="App-header">
            <img
              src="https://i.ibb.co/7vgbS1q/kiron3-modified.png"
              className="App-logo rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              alt="logo"
            />
            <p className="py-8 w-80 text-black font-semibold text-xl">
              Job Matchers - Something big is coming....
            </p>
            <a
              className="btn btn-primary text-white"
              href="https://github.com/kiron0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub <HiOutlineExternalLink size={20} className="ml-2" />
            </a>
          </header>
        </div>
      )}
    </>
  );
}

export default App;

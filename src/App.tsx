import { motion, animate } from "framer-motion";
import netflix from "/netflix.png";
import red from "/red.webp";
import blue from "/blue.webp";
import green from "/green.webp";

function App() {
  function handleClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    const image = e.currentTarget;
    const name = e.currentTarget.nextElementSibling;
    const parentDiv = image.parentElement;
    if (!parentDiv || !name) return;
    animate([
      [
        image,
        {
          position: ["relative", "fixed"],
          top: ["0%", "50%"],
          left: ["0%", "50%"],
          scale: [1, 2],
          z: 20,
        },
        { type: "spring", duration: 1, damping: 30 },
      ],
      [
        name,
        {
          scale: [0, 0],
        },
        {
          at: "-0.2",
        },
      ],
      [
        parentDiv,
        {
          position: ["relative", "static"],
          zIndex: 10,
        },
      ],
      [
        "#backdrop",
        {
          display: "block",
          zIndex: 10,
        },
      ],
      [
        image,
        {
          position: ["fixed", "fixed"],
          top: ["50%", "50%"],
          left: ["50%", "50%"],
          scale: [2, 2],
        },
        { type: "spring", duration: 0.5 },
      ],
      [
        image,
        {
          position: ["fixed", "fixed"],
          top: ["50%", "1%"],
          left: ["50%", "82%"],
          scale: [2, 0.5],
        },
        { type: "spring", duration: 1, damping: 30 },
      ],
    ]);
  }
  return (
    <main className="relative min-h-screen bg-gray-950">
      <div
        id="backdrop"
        className="fixed inset-0 hidden select-none bg-gray-950"
      />
      <header className="">
        <h1>
          <img src={netflix} alt="Netflix Logo" className="mx-auto" />
        </h1>
      </header>
      <section className="relative flex flex-col items-center justify-center gap-8 text-gray-50">
        <h2 className="text-xl">Who's watching ?</h2>
        <div className="relative grid grid-cols-2 gap-8 text-xs">
          <div className="relative flex flex-col items-center gap-2 cursor-pointer">
            <motion.img
              id="fm-1"
              onClick={handleClick}
              src={red}
              alt="Person1"
              className="w-16 rounded aspect-square"
            />
            <p>Person 1</p>
          </div>
          <div className="relative flex flex-col items-center gap-2 cursor-pointer ">
            <motion.img
              id="fm-2"
              onClick={handleClick}
              src={blue}
              alt="Person2"
              className="w-16 rounded aspect-square"
            />
            <p>Person 2</p>
          </div>
          <div className="relative flex flex-col items-center gap-2 cursor-pointer">
            <motion.img
              id="fm-3"
              onClick={handleClick}
              src={green}
              alt="Person3"
              className="w-16 rounded aspect-square"
            />
            <p>Person 3</p>
          </div>
          <div className="relative flex flex-col items-center gap-2 cursor-pointer ">
            <div className="flex items-center justify-center w-16 border rounded aspect-square border-gray-50/50">
              <div>
                <div className="w-6 h-px bg-gray-50"></div>
                <div className="w-6 h-px rotate-90 bg-gray-50"></div>
              </div>
            </div>
            <p>Add Profile</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

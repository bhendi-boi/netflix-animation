import netflix from "/netflix.png";
import red from "/red.webp";
import blue from "/blue.webp";
import green from "/green.webp";

function App() {
  return (
    <main className="min-h-screen bg-gray-950">
      <header className="">
        <h1>
          <img src={netflix} alt="Netflix Logo" className="mx-auto" />
        </h1>
      </header>
      <section className="flex flex-col items-center justify-center gap-8 text-gray-50">
        <h2 className="text-xl">Who's watching ?</h2>
        <div className="grid grid-cols-2 gap-8 text-xs">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <img
              src={red}
              alt="Person1"
              className="w-16 rounded-sm aspect-square"
            />
            <p>Person 1</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <img
              src={blue}
              alt="Person2"
              className="w-16 rounded-sm aspect-square"
            />
            <p>Person 2</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <img
              src={green}
              alt="Person3"
              className="w-16 rounded-sm aspect-square"
            />
            <p>Person 3</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center w-16 border rounded-sm aspect-square border-gray-50/50">
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

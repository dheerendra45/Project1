import a1 from "../../assets/p1/client.png";

export default function ClientServices() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-8">
      {/* Left Half - Text Content */}
      <div className="w-full md:w-1/2 text-left space-y-6 text-black">
        <h1 className="text-3xl font-bold">Client Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          officiis quia similique repudiandae, mollitia officia ab, perspiciatis
          aperiam blanditiis voluptatibus incidunt voluptatem ex natus sunt
          tempore itaque repellendus nulla consequatur.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ab enim sint porro laudantium facere officiis magni numquam mollitia
          omnis facilis, voluptatum aut quia repellat quos consectetur, est
          adipisci soluta!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          aperiam cumque ipsa doloremque labore tempore blanditiis ipsum
          cupiditate consequuntur tenetur assumenda, nemo voluptatum. Quasi
          voluptates dolorem ullam fugit, ipsa blanditiis.
        </p>
        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition">
          Discover our ESG Solutions
        </button>
      </div>

      {/* Right Half - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={a1} alt="Client Services" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

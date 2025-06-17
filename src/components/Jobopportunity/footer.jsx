import a1 from "../../assets/Jobopportunity/footer.png";

export default function Footer1() {
  return (
    <a href="/careers-faqs" className="block">
      <div
        className="w-full h-64 bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${a1})` }}
      >
        <h1 className="text-3xl font-bold">Careers FAQs</h1>
        <p className="mt-2 text-lg">Find the answer to all your questions</p>
      </div>
    </a>
  );
}

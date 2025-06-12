import a1 from "../../assets/Currentopening/joinus.png";

export default function Joinus() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={a1}
            alt="Join Us"
            className="w-full max-w-md rounded-lg object-contain"
          />
        </div>

        {/* Form section */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-orange-500">
            Apply To Join Our Team
          </h1>
          <form action="\" className="flex flex-col gap-4">
            {/* Row 1: Name & Email */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 p-3 border rounded-md focus:outline-orange-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 p-3 border rounded-md focus:outline-orange-400"
              />
            </div>

            {/* Row 2: Phone & Gender */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="number"
                placeholder="Phone Number"
                className="flex-1 p-3 border rounded-md focus:outline-orange-400"
              />
              <select
                className="flex-1 p-3 border rounded-md focus:outline-orange-400 text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            {/* Row 3: File Upload */}
            <div>
              <input
                type="file"
                className="w-full p-3 border rounded-md focus:outline-orange-400"
              />
            </div>

            {/* Row 4: Message */}
            <div>
              <textarea
                placeholder="Type your Message"
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-orange-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-all"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

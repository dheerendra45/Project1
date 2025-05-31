export default function Contact() {
  return (
    <div className="bg-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Submit Your Inquiry</h1>
          <h3 className="text-gray-700">
            Our business is most valuable when it helps our customers. Please fill out the form with as much detail as possible so we can respond with the most helpful solutions.
          </h3>
        </div>

        {/* Form Section - No white box, left aligned */}
        <form className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-black font-medium mb-1">
              First Name <span className="text-orange-500">*</span>
            </label>
            <input type="text" required className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-black font-medium mb-1">
              Last Name <span className="text-orange-500">*</span>
            </label>
            <input type="text" required className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Classification */}
          <div>
            <label className="block text-black font-medium mb-2">
              Classification <span className="text-orange-500">*</span>
            </label>
            <div className="space-x-4">
              <label className="text-black">
                <input type="radio" name="classification" required className="mr-1" />
                Business Inquiry
              </label>
              <label className="text-black">
                <input type="radio" name="classification" required className="mr-1" />
                Personal or Consumer Inquiry
              </label>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-black font-medium mb-1">
              Email Address <span className="text-orange-500">*</span>
            </label>
            <input type="email" required className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-black font-medium mb-1">
              Company Name <span className="text-orange-500">*</span>
            </label>
            <input type="text" required className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-black font-medium mb-1">
              Industry <span className="text-orange-500">*</span>
            </label>
            <select required className="w-full border border-gray-300 p-2 rounded">
              <option value="">Select Industry</option>
              <option value="tech">Technology</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-black font-medium mb-1">
              Phone Number
            </label>
            <input type="tel" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Country */}
          <div>
            <label className="block text-black font-medium mb-1">
              Country <span className="text-orange-500">*</span>
            </label>
            <select required className="w-full border border-gray-300 p-2 rounded">
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Inquiry */}
          <div>
            <label className="block text-black font-medium mb-1">
              Inquiry <span className="text-orange-500">*</span>
            </label>
            <textarea
              required
              placeholder="What is your Inquiry?"
              className="w-full border border-gray-300 p-2 rounded h-24"
            ></textarea>
          </div>

          {/* Privacy Checkbox */}
          <div className="space-y-2">
            <div className="text-black">
              <label>
                <input type="checkbox" required className="mr-2" />
                I acknowledge that I have read and understand <span className="text-orange-500">Shyam's Privacy Policy</span>
              </label>
            </div>
            <div className="text-black">
              <label>
                <input type="checkbox" className="mr-2" />
                Yes, please send me occasional email from Shyam
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

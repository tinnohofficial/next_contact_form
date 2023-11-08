import { postMessage } from "./actions";

export default async function Home() {
  return (
    <div>
      <h2 class="text-2xl text-center mt-5">Contact Form</h2>
      <form action={postMessage} className="w-1/2 mx-auto mt-3">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            className="ml-4 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

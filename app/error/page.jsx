export default async function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-red-600 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-3xl text-center font-semibold text-gray-900 mt-4">
          Oops, something went wrong!
        </h1>
        <p className="text-center text-gray-600 mt-2">
          An error occurred while processing your request.
        </p>
      </div>
    </div>
  );
}

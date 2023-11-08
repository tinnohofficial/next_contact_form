export default function Page() {
  return (
    <form
      method="POST"
      name="fa-form-1"
      action="https://webhook.frontapp.com/forms/ef7fdae51c5d1f1317ba/7dC4iHfHDsdwZ59150fyZu7nXMef5D7iQDu9bJMYWrHuedbQR6qdRgN35hdGSw-9SlGQAes92JbCo06UhuX53asHssx0-bQxYefY3EUuoOQVCBs7axEQLkWx1ZF6aA"
      enctype="multipart/form-data"
      accept-charset="utf-8"
      className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg"
    >
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          class="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          class="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div class="mb-4">
        <label for="body" class="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          name="body"
          class="w-full px-3 py-2 border rounded-lg"
        ></textarea>
      </div>

      <div class="mb-4">
        <label
          for="attachment"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          Attachment
        </label>
        <input type="file" name="attachment" class="w-full" />
      </div>

      <div class="mb-4">
        <label
          for="html_element"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          HTML Element
        </label>
        <div id="html_element" class="bg-gray-200 p-4 rounded-lg"></div>
      </div>

      <div class="text-center">
        <input
          type="submit"
          value="Send"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        />
      </div>
    </form>
  );
}

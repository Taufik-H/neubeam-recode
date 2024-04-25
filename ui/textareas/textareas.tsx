function TextAreas() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-auto items-start rounded-lg border border-slate-800 bg-white p-4 shadow-[2.5px_3.5px_0px_rgba(0,0,0,1)]">
        <div className="flex mr-4 h-10 w-10 items-start justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-50 shadow-[2.858px_4px_0px_rgba(0,0,0,1)] lg:cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar Image"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="relative">
            <textarea
              className="block w-full resize-none rounded-md bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              rows={4}
              placeholder="Spill the tea here..."
            ></textarea>
            <div className="mt-5 flex justify-between">
              <div className="relative h-8 w-10 rounded-full bg-slate-800">
                <div className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-full border border-slate-800 bg-slate-50 p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-100  lg:cursor-pointer">
                  <svg
                    className="h-5 w-5 text-slate-800"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>
                </div>
              </div>
              <div className="relative h-8 w-20 rounded-full bg-slate-800  ">
                <button className="w-53  absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-full border border-slate-800 bg-slate-50 p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-slate-100  lg:cursor-pointer">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAreas;

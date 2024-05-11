import React from "react";

function breadcrumbSimple() {
  return (
    <div className="mt-52">
      <nav
        className="hover:-top- flex rounded-md bg-white px-2 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-left-0   dark:bg-black"
        aria-label="breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/Home"
              className="inline-flex items-center text-sm font-medium text-black  dark:text-white"
            >
              <svg
                className="me-2.5 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="mx-1 block h-3 w-3 text-black hover:text-black rtl:rotate-180 dark:text-white dark:hover:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-black hover:text-black dark:text-white dark:hover:text-white"
              >
                About Me
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default breadcrumbSimple;

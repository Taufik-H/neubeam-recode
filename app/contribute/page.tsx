import Image from "next/image";
import Link from "next/link";

function contribute() {
  return (
    <div className="mx-20  text-wrap ">
      <h1 className="text-xl font-bold">Contribute</h1>

      <Image
        width={600}
        height={600}
        className="border-1 mx-auto rounded-lg border border-black  bg-white p-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        alt="Contribute Image"
        src={"/bg.png"}
      ></Image>

      <h2 className="text-lg">Description</h2>
      <p className="text-sm">
        Neubeam is an open-source project components library designed for
        Tailwind CSS with a Neubrutalism or retro-inspired style. It aims to
        provide developers with ready-to-use UI components to enhance their web
        projects with a unique visual aesthetic.
      </p>
      <h2 className="mt-2 text-lg">How to Contribute</h2>

      <p className="text-sm">
        <span>
          Contributing to Neubeam is greatly appreciated! Here are some ways you
          can contribute:
        </span>
      </p>
      <ul className="mx-10 list-decimal p-1">
        <li>
          Report Bugs: If you encounter any bugs or issues while using Neubeam,
          please open an issue on GitHub.
        </li>
        <li>
          Submit Pull Requests: Contributions are welcome! If you have developed
          a new feature, fixed a bug, or improved existing code, submit a pull
          request with your changes.
        </li>
        <li>
          Report Bugs: If you encounter any bugs or issues while using Neubeam,
          please open an issue on GitHub.
        </li>
        <li>Add new Components: Follow the steps below</li>
        <ul className="mx-12 list-disc text-wrap">
          <li>Clone Repository</li>
          <pre className="text-wrap">
            git clone https://github.com/Taufik-H/neubeam.git
          </pre>
          <li>Go to Project</li>
          <pre className="text-wrap">cd neubeam</pre>
          <li>
            go to the ui folder and choose or create new folder component, then
            paste your your-component.tsx inside the folder that you choosen
          </li>
          <Image
            className="border-1 rounded-md border border-black bg-white p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            src={"/tree.png"}
            alt="tree"
            width={200}
            height={200}
          />
          <li>import your component in constant/component.tsx</li>
          <Image
            className="border-1 rounded-md border border-black bg-white p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            src={"/route.png"}
            alt="tree"
            width={200}
            height={200}
          />
        </ul>
      </ul>

      {/* Team Contribute */}
      <h2 className="mt-2 text-lg">Team Contribute</h2>
      <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        <div className="w- rounded-lg border border-gray-200 bg-white p-2  shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center pb-10">
            <Image
              width={200}
              height={200}
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/profile.jpg"
              alt="Yudha Image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">Taufik H</h5>
            <span className="text-sm text-gray-500 ">Programmer</span>
            <div className="mt-4 flex md:mt-6">
              <Link
                href="https://github.com/Taufik-H"
                className="border-1-black inline-flex items-center rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Image
                  src={"/github.svg"}
                  height={20}
                  width={20}
                  alt="github"
                  className=""
                />
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="w- rounded-lg border border-gray-200 bg-white p-2  shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center pb-10">
            <Image
              width={200}
              height={200}
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/profile.jpg"
              alt="Yudha Image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Yudha Wahyu P
            </h5>
            <span className="text-sm text-gray-500 ">Programmer</span>
            <div className="mt-4 flex md:mt-6">
              <Link
                href="https://github.com/yudhawahyup27"
                className="border-1-black inline-flex items-center rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Image
                  src={"/github.svg"}
                  height={20}
                  width={20}
                  alt="github"
                  className=""
                />
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="w- rounded-lg border border-gray-200 bg-white p-2   shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center pb-10">
            <Image
              width={200}
              height={200}
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/profile.jpg"
              alt="Yudha Image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Muhamad Rijal
            </h5>
            <span className="text-sm text-gray-500 ">Programmer</span>
            <div className="mt-4 flex md:mt-6">
              <Link
                href="https://github.com/euxzy"
                className="border-1-black inline-flex items-center rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Image
                  src={"/github.svg"}
                  height={20}
                  width={20}
                  alt="github"
                  className=""
                />
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="w- rounded-lg border border-gray-200 bg-white p-2  shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center pb-10">
            <Image
              width={200}
              height={200}
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/profile.jpg"
              alt="Yudha Image"
            />
            <h5 className="mb-1 text-wrap text-xl font-medium text-gray-900">
              Muhammad Dimas
            </h5>
            <span className="text-sm text-gray-500 ">Programmer</span>
            <div className="mt-4 flex md:mt-6">
              <Link
                href="https://github.com/klawcodes"
                className="border-1-black inline-flex items-center rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Image
                  src={"/github.svg"}
                  height={20}
                  width={20}
                  alt="github"
                  className=""
                />
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-4">
        Support Neubeam ❤️ <br /> If you find Neubeam useful and would like to
        support its development, consider sponsoring the project on GitHub.
      </span>
    </div>
  );
}

export default contribute;

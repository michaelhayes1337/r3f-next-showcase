import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">3D Experiences in the WEB</span>
          <span className="block text-indigo-600">react-three-fiber</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://threejs.org/examples/"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              threejs
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://docs.pmnd.rs/react-three-fiber/getting-started/examples"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              R3F
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

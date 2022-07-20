/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Create scenes with less boilerplate",
    description:
      "R3F strips away the need for a lot of the vannila JS boilerplate.",
    icon: AnnotationIcon,
  },
  {
    name: "Thin layer of abstraction",
    description:
      "R3F makes 3D in the web more accessible, it doesnt reduce what you can do with Threejs.",
    icon: ScaleIcon,
  },
  {
    name: "Create Scenes declaratively",
    description: "Create 3D components and reuse them across your project.",
    icon: LightningBoltIcon,
  },
  {
    name: "Make use of React's rich ecosystem",
    description:
      "Make use of React's large library of compatible modules and frameworks.",
    icon: GlobeAltIcon,
  },
];

export default function HomeContent() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            react-three-fiber
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build 3D Experiences
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            R3F makes bringing 3D to the web accessible to developers using a
            thin layer over the tried and tested ThreeJS.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

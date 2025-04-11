import Link from "next/link";

export default function ResourcesLanding() {
  return (
    <div className="page-width">
      <div className="page text-center flex flex-col items-center gap-6 py-20">
        <h1 className="text-3xl font-bold text-primary">Explore Educational Resources</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Use the navigation above to browse videos or lesson plans related to Alberta’s ecosystems, wildlife, and climate.
        </p>
        <p className="text-md text-gray-500">
          Select a tool from the <span className="font-semibold text-secondary">resource menu</span> to get started.
        </p>
      </div>
    </div>
  );
}

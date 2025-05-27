import React from "react";

const Sponsors = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-gray-500 dark:text-gray-400">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 items-center gap-8 opacity-60 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-gray-400">Google</div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-gray-400">Apple</div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-gray-400">Netflix</div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-gray-400">Spotify</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-size-[20px_20px] pt-16 dark:bg-slate-900 dark:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                ✨ New Features Available
              </div>
              <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl dark:text-white">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Workflow
                </span>
              </h1>
              <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300">
                Streamline your processes with our cutting-edge platform. Boost
                productivity, enhance collaboration, and achieve remarkable
                results.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="animate-glow hover:cursor-pointer transform rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-blue-700">
                Start Free Trial
              </button>
              <button className="rounded-lg hover:cursor-pointer border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                No credit card required
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                14-day free trial
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="animate-float">
              <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-8 shadow-2xl">
                <div className="space-y-4 rounded-lg bg-white p-6 dark:bg-gray-800">
                  <div className="flex items-center justify-end space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-600"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-600"></div>
                    <div className="h-4 w-2/3 rounded bg-blue-200 dark:bg-blue-700"></div>
                    <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

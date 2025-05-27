const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Flexible pricing options to fit your needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Basic
              </h3>
              <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
                $9
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  /month
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Perfect for individuals
              </p>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Up to 5 projects
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  10GB storage
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Email support
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Basic analytics
                </span>
              </li>
            </ul>
            <button className="w-full hover:cursor-pointer rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative scale-105 transform rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-yellow-900">
                Most Popular
              </span>
            </div>
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Premium</h3>
              <div className="mb-2 text-4xl font-bold text-white">
                $29
                <span className="text-lg text-blue-100 dark:text-gray-300">
                  /month
                </span>
              </div>
              <p className="text-blue-100">Perfect for growing teams</p>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-white">Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-white">100GB storage</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-white">Priority support</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-white">Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-white">Team collaboration</span>
              </li>
            </ul>
            <button className="w-full rounded-lg hover:cursor-pointer bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Start Premium
            </button>
          </div>

          {/*  Enterprise Plan */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Enterprise
              </h3>
              <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
                $99
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  /month
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Perfect for large organizations
              </p>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Everything in Premium
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Unlimited storage
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  24/7 phone support
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Custom integrations
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Dedicated account manager
                </span>
              </li>
            </ul>
            <button className="w-full rounded-lg hover:cursor-pointer bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

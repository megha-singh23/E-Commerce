import React from 'react'

const footer = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-blue-950  ">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
      Trusted by eCommerce Businesses
    </h2>

    <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
    Fasten is an innovative eCommerce platform designed to offer a seamless and fast shopping experience. With a focus on quality products, secure transactions, and quick delivery, Fasten connects customers to everything they need – from fashion and electronics to home essentials and more.
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div
      className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
    >
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>

    <div
      className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
    >
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
        Official Addons
      </dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div
      className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
    >
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Total Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div
      className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
    >
      <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Downloads</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
  </dl>
</div>
  )
}

export default footer
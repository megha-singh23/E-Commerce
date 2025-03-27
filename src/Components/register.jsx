import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as motion from "motion/react-client"

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    toast.info('Form Submitted!');
    console.log(data);
    reset();
  };

  return (
    <motion.div className='w-[60%] mt-4 mx-auto'
    initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          

          <div className="border-b border-gray-900/10 pb-7">
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="first-name"
                    {...register("fname", {
                      required: "The field is required",
                      minLength: { value: 2, message: 'Required length is 2 or more' },
                      pattern: { value: /^[A-Za-z\s]+$/, message: 'Only alphabets and spaces are allowed' }
                    })}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {errors.fname && <h2 className='text-red-500'>{errors.fname.message}</h2>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="last-name"
                    {...register("lname", {
                      required: "Last name is required",
                      minLength: { value: 2, message: 'Required length is 2 or more' },
                      pattern: { value: /^[A-Za-z\s]+$/, message: 'Only alphabets and spaces are allowed' }
                    })}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {errors.lname && <h2 className='text-red-500'>{errors.lname.message}</h2>}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' }
                    })}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {errors.email && <h2 className='text-red-500'>{errors.email.message}</h2>}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Country</label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    {...register("country", {
                      required: "Country is required"
                    })}
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="">Select a country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  {errors.country && <h2 className='text-red-500'>{errors.country.message}</h2>}
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street-address"
                    {...register("streetAddress", {
                      required: "Street address is required"
                    })}
                    autoComplete="street-address"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {errors.streetAddress && <h2 className='text-red-500'>{errors.streetAddress.message}</h2>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="region"
                    {...register("region", {
                      required: "State/Province is required"
                    })}
                    autoComplete="address-level1"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {errors.region && <h2 className='text-red-500'>{errors.region.message}</h2>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="postal-code"
                    {...register("postalCode", {
                      required: "ZIP / Postal code is required",
                      pattern: { value: /^[0-9]{6}$/, message: 'Invalid ZIP code' }
                    })}
                    autoComplete="postal-code"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {errors.postalCode && <h2 className='text-red-500'>{errors.postalCode.message}</h2>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6 mb-2">
    <button type="button" className="text-sm/6 font-semibold text-gray-900">
      Cancel
    </button>
    <button
      type="submit"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Save
    </button>
  </div>
</form>
    </motion.div>
  )
}

export default Register;



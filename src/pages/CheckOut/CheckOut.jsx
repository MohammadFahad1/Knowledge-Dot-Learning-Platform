import React from 'react';

const CheckOut = () => {
    return (
        <div className='bg-slate-400 py-28 grid grid-cols-1 lg:grid-cols-2'>
            <div className="leading-loose order-2 lg:order-1">
                <form className="max-w-xl mx-4 p-10 bg-white rounded shadow-xl">
                    <p className="text-gray-800 mb-2 text-2xl font-bold">Customer information</p>
                    <div className="">
                        <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                        <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                    </div>
                    <div className="mt-2">
                        <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
                    </div>
                    <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                    <div className="">
                        <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                    </div>
                    <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Pay & Continue $3.00</button>
                    </div>
                </form>
            </div>
            <div className='order-1 lg:order-2'>
                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
'use client';

import { useState } from "react";

const CheckoutForm = () => {
  // Track which section is expanded
  const [expandedSection, setExpandedSection] = useState<null | 'ONE' | 'TWO' | 'THREE'>(null);

  const toggleSection = (section: 'ONE' | 'TWO' | 'THREE') => {
    setExpandedSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <section className="flex flex-col w-full max-w-[700px] gap-5">
      {/* Contact Info Box */}
      <div
        className={`max-w-full w-full flex flex-col gap-3 p-4 rounded-[15px] border-[1px] border-gray-500 ${
          expandedSection === 'ONE' ? 'h-full' : 'max-h-[200px] overflow-hidden'
        }`}
      >
        <div className="flex justify-between items-center gap-3">
          <div className="flex gap-3">
            <div className="bg-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center">
              <i className="ri-user-3-line text-white"></i>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="uppercase font-normal font-2xl">Contact Info</h1>
              <ul className="flex gap-2">
                <li className="font-bold">email</li>
                <li className="font-bold">phone number</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => toggleSection('ONE')}
              className="w-[150px] h-[40px] hover:bg-white border-[1px] group-hover:border-black bg-black cursor-pointer group rounded-[12px] px-4 py-2 flex items-center justify-center"
            >
              <h1 className="font-bold group-hover:text-black text-white text-base">Change</h1>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className={`${expandedSection === 'ONE' ? 'max-h-[500px] h-full' : 'max-h-0 overflow-hidden'}`}>
          <form className="flex flex-col gap-5">
            <h1 className="font-semibold text-xl">Contact Information</h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-normal">
                Your Phone Number
              </label>
              <input
                type="text"
                placeholder="+234 xxx"
                className="rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-normal">
                Email address
              </label>
              <input
                type="text"
                placeholder="....@gmail.com"
                className="rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="w-[250px] h-[40px] bg-black border-[1px] border-black hover:bg-white group cursor-pointer rounded-[12px] px-4 py-2 flex items-center justify-center">
                <h1 className="font-bold group-hover:text-black text-white text-base">Save and next to Shipping</h1>
              </button>
              <h1 className="font-bold cursor-pointer">Cancel</h1>
            </div>
          </form>
        </div>
      </div>

      {/* Shipping Address */}
      <div
        className={`max-w-full w-full flex flex-col gap-3 p-4 rounded-[15px] border-[1px] border-gray-500 ${
          expandedSection === 'TWO' ? 'h-full' : 'max-h-[200px] overflow-hidden'
        }`}
      >
        <div className="flex justify-between items-center gap-3">
          <div className="flex gap-3">
            <div className="bg-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center">
              <i className="ri-user-3-line text-white"></i>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="uppercase font-normal font-2xl">Shipping Address</h1>
              <ul className="flex gap-2">
                <li className="font-bold">email</li>
                <li className="font-bold">phone number</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => toggleSection('TWO')}
              className="w-[150px] h-[40px] hover:bg-white border-[1px] group-hover:border-black bg-black cursor-pointer group rounded-[12px] px-4 py-2 flex items-center justify-center"
            >
              <h1 className="font-bold group-hover:text-black text-white text-base">Change</h1>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className={`${expandedSection === 'TWO' ? 'max-h-[500px] h-full' : 'max-h-0 overflow-hidden'}`}>
        <form className='flex flex-col gap-5'>
            <h1 className='font-semibold text-xl'>Shipping Information</h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='name' className='text-sm font-normal'>First name</label>
                <input type='text' placeholder='Seven' className='rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black' />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='name' className='text-sm font-normal'>Last name</label>
                <input type='text' placeholder='Mike' className='rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black' />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='name' className='text-sm font-normal'>Address</label>
                <input type='text' placeholder='123 Main Street, NGA' className='rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black' />
              </div>

              <div className='flex flex-col gap-1 lg:w-[40%] w-full'>
                <label htmlFor='name' className='text-sm font-normal'>Apt, Suite *</label>
                <input type='text' placeholder='' className='rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black' />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor='name' className='text-sm font-normal'>Phone number *</label>
              <input type='text' placeholder='234 901 5555' className='rounded-[10px] w-full h-[50px] p-3 border-[1px] border-black' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;

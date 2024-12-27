import React, { useState } from 'react';
import { productdetailsfaq } from '../utility/data/productdetailsfaq';

type FAQItem = {
  id: string; // or `number` if IDs are numbers
  title: string;
  description?: string | { id: string; subtitle: string }[];
};

const ProductDetailsFaq = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3">
        {productdetailsfaq.map((item, index) => (
          <div key={item.id || index} className="flex flex-col  w-full">
            {/* Title Section */}
            <div className="bg-black rounded-lg flex justify-between items-center p-3">
              <h1 className="text-white">{item.title}</h1>
              <div onClick={() => handleOpen(item.id)} className="flex cursor-pointer">
                {open === item.id ? (
                  <i className="ri-subtract-line text-white"></i>
                ) : (
                  <i className="ri-add-line text-white"></i>
                )}
              </div>
            </div>

            {/* Description Section */}
            {item.description && (
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === item.id ? 'max-h-full' : 'max-h-0'
                }`}
              >
                {Array.isArray(item.description) ? (
                  <ul className="flex flex-col list-inside list-disc mt-2">
                    {item.description.map((desc, descIndex) => (
                      <li key={desc.id || descIndex}>{desc.subtitle}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetailsFaq;

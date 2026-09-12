import React, { useState, lazy, Suspense } from "react";

import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";

const ProductDialog = lazy(() => import("./ui/ProductDialog"));

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Face Balm",
      description:
        "A rich, nourishing face balm with organic botanicals to lock in moisture, soothe skin, and restore natural radiance.",
      picSrc: p1,
    },
    {
      id: 2,
      name: "Face Soap",
      description:
        "A gentle, natural facial cleansing bar crafted from pure botanical extracts to purify skin without stripping moisture.",
      picSrc: p2,
    },
    {
      id: 3,
      name: "Hair Shampoo",
      description:
        "A revitalizing botanical shampoo designed to cleanse the scalp, strengthen roots, and leave hair soft and fresh.",
      picSrc: p3,
    },
    {
      id: 4,
      name: "Facial Oil",
      description:
        "A luxurious, lightweight facial oil infused with organic extracts to deeply hydrate, balance, and rejuvenate skin.",
      picSrc: p4,
    },
  ];

  return (
    <section
      id="products"
      style={{
        minHeight: "90vh",
        width: "100%",
        padding: "80px 8%",
        boxSizing: "border-box",
      }}
    >
      <div className="flex justify-center items-center">
        <h2>Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-23 p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border-accent-primary/50 shadow-sm hover:border-accent-primary border-2 h-[50vh] w-full rounded-md overflow-hidden flex flex-col justify-end transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl ease-in-out"
          >
            <img
              src={product.picSrc}
              alt={product.name}
              width="350"
              height="469"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover -z-20"
            />

            <div className="absolute inset-0 -z-10 bg-linear-to-t from-[rgba(18,18,18,0.95)] via-[rgba(18,18,18,0.6)] to-transparent" />

            <div className="relative z-10 flex flex-col items-start text-left p-6 text-white w-full gap-3">
              <h3 className="text-xl font-bold tracking-wide">
                {product.name}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {product.description}
              </p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="btn-secondary btn bg-bg-surface! rounded-lg! p-3!"
              >
                <span className="text-accent-primary">View Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Suspense fallback={null}>
          <ProductDialog
            product={selectedProduct}
            open={Boolean(selectedProduct)}
            onOpenChange={(isOpen) => {
              if (!isOpen) setSelectedProduct(null);
            }}
          />
        </Suspense>
      )}
    </section>
  );
}

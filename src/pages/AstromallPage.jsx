import React, { useState } from "react";
import ProductCard from "../MyComponents/ProductCard";

const products = [
  {
    title: "Problem Solving Remedy Combo",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/149fef6f-8254-4ee9-b116-17f6b662149d.jpeg",
    tag: "BEST SELLER",
  },
  {
    title: "First Remedy @499/-",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/ef161f10-285d-401f-8690-14caec0633fa.jpg",
    tag: "BEST OFFER",
  },
  {
    title: "First Pooja @499/-",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/d624de3f-26cf-4829-b4b6-ce3cd5b22335.jpeg",
  },
  {
    title: "Bracelets & Pendants",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/6e9eed14-59da-4a89-abad-cce42e749904.jpeg",
  },
  {
    title: "Gemstone",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/c0640d19-2573-42a9-a25d-eaac25c15fc4.jpeg",
  },
  {
    title: "VIP Puja",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/4f7fbd56-ade5-42b8-b4a0-224d7ba0b50f.jpeg",
  },
 
  {
    title: "Spell",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/2f14dbd9-c69f-4973-bc68-59a4773531aa.jpeg",
  },
  {
    title: "Evil Eye Removal",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/ecc0a04d-678f-450b-9bd4-c1ab275c6cf1.jpg",
    tag: "BEST SELLER",
  },
  {
    title: "Reiki Healing",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/4a99c3de-b119-4a42-947e-437a5aa1690e.jpeg",
  },
  {
    title: "Rahu-Ketu Transit Remedies",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/f66b0ae5-82fe-4fa6-b969-949b407aedd4.jpg",
  },
  {
    title: "Cord Cutting",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/070d308a-4b8d-44dd-8fa6-d5e0cdd71e10.jpg",
  },
  {
    title: "Gemstone Consultation",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/1d823908-261a-4487-bdd2-27894d2b4f78.png",
  },
  {
    title: "Rudraksha Consultation",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/0e6bacb2-dab3-4f82-a11a-bdd04e07ec05.webp",
  },
  {
    title: "Palmistry",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/c563ba5a-22e1-4acb-9205-4361250a48ac.jpg",
  },
  {
    title: "Theta Healing",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/5ef06576-9ce6-4417-a823-0db448ca3a30.jpg",
  },
  {
    title: "Yantra",
    image: "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/350x350/images/dafd62af-42bc-4017-97ba-af73357dba72.png",
  },
];

const Shop = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-1">Astromall Shop</h1>
      <p className="text-center text-gray-600 mb-6">
        Shop Best Online Astrology Products And Services
      </p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Let's find what you're looking for..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {filteredProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

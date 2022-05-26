import React from 'react';
import Tobacco from '../assets/tobacco.jpeg';
import Glass from '../assets/glass.jpeg';
import Vape from '../assets/vape.png';
import Accessories from '../assets/ACCESSORIES.png';
import CategoryPreview from './CategoryPreview';

const categories = [
  {
    name: "TOBACCO",
    image: Tobacco,
    path: "6260600aaba0982d3eba6f3b"
  },
  {
    name: "GLASS",
    image: Glass,
    path: "62606019aba0982d3eba6f41"
  },
  {
    name: "VAPES",
    image: Vape,
    path: "62606023aba0982d3eba6f47"
  },
  {
    name: "ACCESSORIES",
    image: Accessories,
    path: "6260603faba0982d3eba6f4d"
  },
]

const CategoriesList = () => {
  return (
    <section className="relative">
      <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, i) => <CategoryPreview key={i} data={category} />)}
      </div>
    </section>
  );
}

export default CategoriesList;

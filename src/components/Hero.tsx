import React from 'react';
import { ChefHat, Clock, Truck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Craving Something
            <span className="text-yellow-300"> Delicious?</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Fresh, fast, and flavorful meals delivered straight to your door. 
            Experience the taste of premium fast food.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Order Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all">
              View Menu
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <ChefHat size={24} />
              </div>
              <h3 className="font-semibold mb-1">Fresh Made</h3>
              <p className="text-sm text-gray-200">Prepared daily</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock size={24} />
              </div>
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-200">30 min or less</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Truck size={24} />
              </div>
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-200">Orders over $25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🍔</span>
              </div>
              <h3 className="text-xl font-bold">Mako.Protok</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Entregando comida rápida fresca y deliciosa a tu puerta desde 2020. 
              Ingredientes de calidad, servicio rápido, sabor inigualable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Menú</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ubicaciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabaja con Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-500" />
                <span className="text-gray-400">Calle 123 #45-67, Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                <span className="text-gray-400">+57 (300) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" />
                <span className="text-gray-400">info@makoprotok.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios de Atención</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Lunes - Jueves</span>
                <span className="text-white">10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Viernes - Sábado</span>
                <span className="text-white">10:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Domingo</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-green-600 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="font-semibold">¡Abierto Ahora!</span>
              </div>
              <p className="text-sm text-green-100">Cierra a las 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mako.Protok. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
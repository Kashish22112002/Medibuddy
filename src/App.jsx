import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-gray-900">
       
      <header className="w-full py-4 bg-red-600 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Medibuddy</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-white py-20 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to Medibuddy</h2>
          <p className="text-lg mb-6">Your personal health management system, designed to keep you on top of your wellness and medical needs.</p>
          <a href="#signup" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Personalized Health Tracking</h4>
              <p>Monitor your health metrics and set goals tailored to your needs.</p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Secure Medical Records</h4>
              <p>Store and manage your medical records safely and access them anytime.</p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Appointment Scheduling</h4>
              <p>Book and manage your appointments with healthcare providers easily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="pricing-plan bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Basic Plan</h4>
              <p className="text-lg mb-4">$9.99/month</p>
              <ul className="list-disc list-inside mb-4">
                <li>Basic health tracking</li>
                <li>Access to medical records</li>
              </ul>
              <a href="#signup" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">Choose Plan</a>
            </div>
            <div className="pricing-plan bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Standard Plan</h4>
              <p className="text-lg mb-4">$19.99/month</p>
              <ul className="list-disc list-inside mb-4">
                <li>All Basic features</li>
                <li>Appointment scheduling</li>
              </ul>
              <a href="#signup" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">Choose Plan</a>
            </div>
            <div className="pricing-plan bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Premium Plan</h4>
              <p className="text-lg mb-4">$29.99/month</p>
              <ul className="list-disc list-inside mb-4">
                <li>All Standard features</li>
                <li>Personalized health insights</li>
                <li>Priority customer support</li>
              </ul>
              <a href="#signup" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">Choose Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <p className="text-lg mb-6">Have questions or need assistance? Reach out to us!</p>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="block w-full p-3 mb-4 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Your Email" className="block w-full p-3 mb-4 border border-gray-300 rounded-lg" />
            <textarea placeholder="Your Message" className="block w-full p-3 mb-4 border border-gray-300 rounded-lg" rows="4"></textarea>
            <button type="submit" className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-red-600 text-white text-center">
        <p>&copy; 2024 Medibuddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App

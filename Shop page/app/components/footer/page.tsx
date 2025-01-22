"use client"

export default function Footer() {
  return (
    <footer className="px-4 py-8 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="space-y-4">
          <p className="text-gray-600">400 University Drive Suite 200 Coral Gables,</p>
          <p className="text-gray-600">FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-6">Links</h3>
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">
              Shop
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Help Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-6">Help</h3>
          <nav className="flex flex-col space-y-4">
            <a href="/payment" className="text-gray-600 hover:text-gray-900 transition-colors">
              Payment Options
            </a>
            <a href="/returns" className="text-gray-600 hover:text-gray-900 transition-colors">
              Returns
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policies
            </a>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-6">Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-2 border border-gray-300 focus:border-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-600 text-sm">2022 Meubel House. All rights reverved</p>
      </div>
    </footer>
  )
}


import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10">
            
        </div>

        {/* MENU */}

        <div className="flex items-center justify-center space-x-10 md:absolute top-12 right-10">
            <Link href="#features"><a href="#features" className="hover:text-accentCyan">Features</a></Link>
            <Link href="#testimonials"><a href="#features" className="hover:text-accentCyan">Testimonials</a></Link>

            {/* DARK/LIGHT MODE BUTTON */}
            {/* <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5">
                Dupa
            </button> */}

        </div>
    </header>
  )
}

export default Header
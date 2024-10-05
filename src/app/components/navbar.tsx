import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 bg-blue-600 text-white z-10">
            <Link href="/">
                <h1 className="text-2xl font-bold cursor-pointer">{'GeoEqua'}</h1>
            </Link>
            <div className="flex items-center space-x-8 ml-auto"> {/* ml-auto'yu kaldırdık, ve space-x değerini artırdık */}
                <Link href="/country">
                    <span className="cursor-pointer">Countries</span>
                </Link>
                <Link href="/category">
                    <span className="cursor-pointer">Categories</span>
                </Link>
                <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={'/assets/nasa-logo.png'}
                        alt="NASA Logo"
                        width={75}
                        height={100}
                        className="cursor-pointer"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

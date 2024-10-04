import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-blue-600 text-white">
            <Link href="/">
                <h1 className="text-2xl font-bold cursor-pointer">{'GeoEqua'}</h1>
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
        </nav>
    );
};

export default Navbar;

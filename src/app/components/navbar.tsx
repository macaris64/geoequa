import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-blue-600 text-white">
            <h1 className="text-2xl font-bold">{'GeoEqua'}</h1>
            <Image
                src={'/assets/nasa-logo.png'}
                alt="NASA Logo"
                width={75}
                height={100}
            />
        </nav>
    );
};

export default Navbar;

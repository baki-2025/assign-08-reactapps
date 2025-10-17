import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import gitimg from "../../assets/image-git.png";

const NavBar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Apps", path: "apps" },
        { name: "Installation", path: "myInstallation" },
    ];

    return (
        <div className="navbar bg-gray-100 shadow-md px-4">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                    >
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-violet-500 font-bold" : "text-black"
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo */}
                <NavLink to="/" className="btn btn-ghost normal-case text-violet-500 flex items-center gap-2">
                    <img className="w-10" src={logo} alt="logo" /> HERO.IO
                </NavLink>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-violet-500 flex items-center gap-2"
                >
                    <img className="w-5" src={gitimg} alt="GitHub" /> Contribute
                </a>
            </div>
        </div>
    );
};

export default NavBar;

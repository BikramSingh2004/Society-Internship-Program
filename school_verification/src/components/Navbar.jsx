import React, { useState, useEffect } from "react";

export default function Navbar({
     user = null,
    onLogout = () => {}, logoText = "SchoolVerify" }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(() => typeof window !== "undefined" ? window.location.pathname || "/" : "/");

    useEffect(() => {
        const handleRoute = () => setActive(window.location.pathname || "/");
        window.addEventListener("popstate", handleRoute);
        return () => window.removeEventListener("popstate", handleRoute);
    }, []);

    const links = [
        { label: "Home", href: "/" },
        { label: "Verify School", href: "/verify" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
      <navbar >
        <header className="w-full bg-slate-900 text-sky-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            {/* Brand */}
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-lg font-semibold no-underline text-sky-100"
            >
              <svg
                className="w-8 h-8 text-emerald-400"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  d="M12 2L2 7v7c0 5 10 9 10 9s10-4 10-9V7l-10-5z"
                  fill="currentColor"
                />
              </svg>
              <span>{logoText}</span>
            </a>

            {/* Burger for small screens */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <svg
                className="w-6 h-6 text-sky-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Links + actions */}
            <nav
              className={`${
                open ? "block" : "hidden"
              } md:flex md:items-center md:gap-6 w-full md:w-auto mt-3 md:mt-0`}
              aria-label="Primary navigation"
            >
              <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 list-none p-0 m-0">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={
                        "block px-3 py-2 rounded text-sky-100 hover:bg-slate-800 " +
                        (active === l.href
                          ? "bg-emerald-700/20 text-emerald-300 font-semibold"
                          : "")
                      }
                      onClick={() => {
                        setActive(l.href);
                        setOpen(false);
                      }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 md:mt-0 md:ml-4 flex items-center gap-2">
                {user ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{user.name || "Account"}</span>
                    <button
                      onClick={() => {
                        setOpen(false);
                        onLogout();
                      }}
                      className="px-3 py-1 text-sm rounded border border-slate-700 hover:bg-slate-800"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <a
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="px-3 py-1 text-sm rounded hover:bg-slate-800"
                    >
                      Login
                    </a>
                    <a
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="px-3 py-1 text-sm rounded bg-emerald-500 text-white hover:bg-emerald-600"
                    >
                      Register
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>
      </navbar>
    );
}

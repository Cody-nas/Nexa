<div
  className={`fixed top-0 left-0 w-full h-full bg-[#0A2342] bg-opacity-95 transform ${
    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-6 lg:hidden`}
>
  {[
    { path: "/platform", label: "Platform" },
    { path: "/solutions", label: "Solutions" },
    { path: "/develop", label: "Develop" },
    { path: "/download", label: "Download" },
    { path: "/support", label: "Get Support" },
    { path: "/connect", label: "Connect" },
    { path: "/support-nexa", label: "Support Nexa" },
  ].map((item) => (
    <Link
      key={item.path}
      to={item.path}
      className="text-[#C7FFDA] text-lg hover:text-[#087E8B] transition-colors"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {item.label}
    </Link>
  ))}

  <Link
    to="/get-started"
    className="bg-[#087E8B] text-white px-6 py-3 rounded-md hover:bg-[#C7FFDA] hover:text-black transition-colors"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Get Started
  </Link>

  {/* Close Button */}
  <button
    className="text-[#C7FFDA] text-lg hover:text-[#087E8B] transition-colors"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Close ✖
  </button>
</div>;

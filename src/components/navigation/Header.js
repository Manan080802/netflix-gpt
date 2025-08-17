const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-3 bg-gradient-to-b from-black z-20">
      <div className="max-w-7xl mx-auto flex items-center">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="w-24 sm:w-32 md:w-40 lg:w-44 object-contain cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;

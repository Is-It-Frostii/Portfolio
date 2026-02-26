import "./Navigation.css";

const Navigation = () => {
    return (
        <>
            <nav
                className="flex fixed w-full h-[5rem] justify-center
             items-center bg-transparent border-b border-gray-700
              backdrop-blur-sm backdrop-brightness-50 select-none">
                <ul className="flex gap-10 items-center text-xl">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Patches</a>
                    </li>
                    <li>
                        <h1
                            className="nav-title">
                            Frostii
                        </h1>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;

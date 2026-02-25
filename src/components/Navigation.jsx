const Navigation = () => {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-6 bg-black text-white">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg font-bold">
                    F
                </div>
                <h1 className="text-xl font-semibold" style={{ fontFamily: "Chewy" }}>
                    Frosty
                </h1>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <span className="text-sm uppercase tracking-wide px-3 py-1 bg-white/10 rounded-md">
                    Coming soon
                </span>
            </div>
        </nav>
    );
};

export default Navigation;

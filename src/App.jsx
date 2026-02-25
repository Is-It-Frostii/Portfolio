import Background from "./assets/background.png";

const App = () => {
    return (
        <>
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `url(${Background})` }}>
                <div className="h-screen pt-16 grid place-items-center backdrop-blur-sm backdrop-brightness-50">
                    <h1
                        className="text-8xl font-bold"
                        style={{ fontFamily: "Chewy" }}>
                        Coming soon...
                    </h1>
                </div>
            </div>
        </>
    );
};

export default App;

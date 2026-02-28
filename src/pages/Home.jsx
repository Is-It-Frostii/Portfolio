const Home = () => {
    return (
        <div className="h-screen grid place-items-center">
            <div className="max-w-screen-lg flex flex-col gap-10 text-center">
                <h1 className="text-8xl hero-title">Hi, this is Frostii</h1>
                <div
                    style={{
                        fontFamily: `'Press Start 2P', cursive`,
                    }}>
                    <p className="text-2xl">
                        A beginner working with{" "}
                        <span className="text-purple-500 font-bold">
                            Pure Data
                        </span>
                    </p>
                    <p className="text-xl">
                        <br />I design simple audio patches to explore how sound
                        works. I experiment with basic oscillators, filters,
                        <br />
                        and sliders to understand signal flow and control. Each
                        small project helps me improve my logic,
                        <br />
                        organization, and understanding of digital sound design.
                        <br />I aim to build clean, simple, and functional
                        patches while steadily growing my skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;

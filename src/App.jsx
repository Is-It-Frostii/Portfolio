import Home from "./pages/Home";
import Patch from "./pages/Patch";

import Grainient from "./components/Grainient";

import "./App.css";

const App = () => {
    return (
        <>
            <div
                className="w-full h-screen fixed top-0 left-0"
                style={{ zIndex: -1 }}>
                <Grainient
                    color1="#c285ff"
                    color2="#000000"
                    color3="#3dfcff"
                    timeSpeed={0.1}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.5}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={0.4}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>
            <section id="home">
                <Home />
            </section>
            <section id="patches">
                <Patch />
            </section>
        </>
    );
};

export default App;

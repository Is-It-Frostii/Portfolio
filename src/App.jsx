import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./App.css";
import LightPillar from "./components/LightPillar";
import Home from "./pages/Home";
import Patch from "./pages/Patch";

const App = () => {
    return (
        <>
            <div
                className="w-full h-screen fixed top-0 left-0"
                style={{ zIndex: -1 }}>
                <LightPillar
                    topColor="#5227FF"
                    bottomColor="#9effb1"
                    intensity={0.5}
                    rotationSpeed={0.05}
                    glowAmount={0.002}
                    pillarWidth={10}
                    pillarHeight={0.2}
                    noiseIntensity={0.5}
                    pillarRotation={0}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>
            <Home />
            <Patch />
        </>
    );
};

export default App;

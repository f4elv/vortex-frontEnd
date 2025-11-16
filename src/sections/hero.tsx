import Particles from "@/components/Particles";
import Button from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute w-[65%] h-[60%] rounded-full bg-purple-600 opacity-30 blur-[100px] -z-10"></div>
            <div className="absolute inset-0 z-0 pointer-events-auto">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1.5}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="pointer-events-none px-64 relative z-10 flex flex-col justify-center items-center gap-8">
                <p className="text-stone-950 ">Um estúdio de desenvolvimento web criando experiências imersivas, únicas.</p>
                <h1 className="text-8xl font-bold">VORTEX</h1>
                <p className="text-center text-stone-400">Criamos e desenvolvemos sites cinematográficos de alto desempenho com visuais impactantes, interações fluídas e imersivas; cada scroll, cada pixel, é uma história, intencional.</p>
                <div className="flex justify-center items-center gap-6">
                    <Button variant="primary" className="mt-4 pointer-events-auto"><span>↓</span>Entre no fluxo</Button>
                    <Button variant="secondary" className="mt-4 pointer-events-auto">Começe um projeto</Button>
                </div>
            </div>
            <div className="absolute bottom-0 flex flex-col items-center m-0 pointer-events-none">
                <span className="text-sm text-white/70">Siga a luz</span>
                <div className="w-screen h-5 bg-gradient-to-t from-white/20 to-transparent mt-2 animate-pulse"></div>
            </div>
        </section>
    );
}

import RotatingText from '../RotatingText';
import Blur from '../ui/blur';

export default function Creative() {
  return (
    <section className="w-screen h-screen text-center flex flex-col gap-6 items-center justify-center px-32">
    <Blur />
      <div className="w-full items-center">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold flex flex-wrap gap-3 justify-center items-center mb-6">
                Sites 
                <RotatingText
                    texts={['criativos', 'interativos', 'únicos', 'inovadores']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-purple-600 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </h1>
          <h2 className="text-2xl text-stone-950 mb-6">
            Design que inspira e cria presença.
          </h2>

          <p className="leading-relaxed mb-8">
            Unimos estética, conceito e técnica para criar experiências
            visuais que se destacam em qualquer cenário digital.
          </p>

          <ul className="space-y-3">
            <li>• Direção de arte moderna e minimalista</li>
            <li>• Tipografia e cores estratégicas</li>
            <li>• Visual storytelling para engajamento</li>
          </ul>
    </div>
    </section>
  );
}
import PixelTrail from "../PixelTrail";
import Blur from "../ui/blur";

export default function Interactive() {
  return (
    <section className="w-screen h-screen flex items-center justify-center px-12 relative overflow-hidden">
      <Blur />
      <div className="absolute inset-0 z-10">
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        />
      </div>
      <div className="max-w-5xl w-full flex flex-col text-center items-center z-0 relative">

        <div>
          <h1 className="text-6xl font-extrabold mb-4">Sites Imersivos</h1>
          <h2 className="text-xl text-stone-950 font-bold mb-6">
            Experiências dinâmicas que prendem a atenção.
          </h2>

          <p className="leading-relaxed mb-8">
            Criamos interfaces que respondem ao usuário, utilizando animações,
            microinterações e respostas inteligentes que tornam cada ação memorável.
          </p>

          <ul className="space-y-3">
            <li>• Animações suaves e responsivas</li>
            <li>• Imersividade baseada em comportamento</li>
            <li>• Efeitos modernos: parallax, hover, scroll</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

export default function Dashboard() {
  return (
    <section className="w-screen h-screen flex items-center justify-center px-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-6xl font-extrabold mb-4">Dashboards ineligentes</h1>
          <h2 className="text-xl text-purple-600 font-bold mb-6">
            Visualização intuitiva para decisões rápidas.
          </h2>

          <p className="leading-relaxed mb-8">
            Apresentamos dados de forma clara, elegante e funcional,
            com gráficos e métricas que facilitam a análise.
          </p>

          <ul className="space-y-3">
            <li>• Interfaces limpas e inteligentes</li>
            <li>• Gráficos modernos e responsivos</li>
            <li>• Informações apresentadas com clareza</li>
          </ul>
        </div>


    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src="/dashboardImage.png"
        alt="Dashboard preview"
        fill
        className="object-cover"
      />
    </div>

      </div>
    </section>
  );
}

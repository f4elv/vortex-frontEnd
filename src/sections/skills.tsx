import Carrossel from "@/components/Carrossel";
import Creative from "@/components/slides/creative";
import Landing from "@/components/slides/landing";
import Dashboard from "@/components/slides/dashboard";
import Interactive from "@/components/slides/interactive";

import Light from "@/components/ui/light";

export default function Skills() {
  const slides = [
    <Creative key="1" />,
    <Interactive key="2" />,
    <Landing key="3" />,
    <Dashboard key="4" />,
  ];

  return (
    <section id="Skills" className="relative w-screen min-h-screen overflow-hidden">
      <Carrossel slides={slides} />
      <Light />
    </section>
  )
}

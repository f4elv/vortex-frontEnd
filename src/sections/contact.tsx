"use client";

import { useState } from "react";
import StepOne from "@/components/steps/stepOne";
import StepTwo from "@/components/steps/stepTwo";
import ConfirmationModal from "@/components/steps/confirmationModal";
import Blur from "@/components/ui/blur";

export default function MultiStepForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [showModal, setShowModal] = useState(false);

  function next() {
    setStep(2);
  }

  function back() {
    setStep(1);
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <section id="Contact" className="relative w-full h-screen flex items-center justify-center px-32 py-2">
      <Blur />
      {step === 1 && <StepOne onContinue={next} />}
      {step === 2 && <StepTwo onSubmit={openModal} onBack={back} />}

      {showModal && <ConfirmationModal onClose={closeModal} />}
    </section>
  );
}

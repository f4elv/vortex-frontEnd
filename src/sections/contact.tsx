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
<section
  id="Contact"
  className="
    relative w-full min-h-screen
    flex items-center justify-center
    px-6 sm:px-12 md:px-20 lg:px-32
    py-10
  "
>
  <Blur />

  {step === 1 && <StepOne onContinue={next} />}
  {step === 2 && <StepTwo onSubmit={openModal} onBack={back} />}

  {showModal && <ConfirmationModal onClose={closeModal} />}
</section>
  );
}

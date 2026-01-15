"use client";

import { useState } from "react";
import StepOne from "@/components/steps/stepOne";
import StepTwo from "@/components/steps/stepTwo";
import ConfirmationModal from "@/components/steps/confirmationModal";
import Blur from "@/components/ui/blur";
import { formData } from "@/lib/utils";
import { sub } from "motion/react-client";

export default function MultiStepForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<formData>({
    name: "",
    phone: "",
    company: "",
    projectDescription: "",
    deadline: "",
    budget: "",
    projectType: "",
    extraDetails: "",
  });
  const [showModal, setShowModal] = useState(false);

  function next() {
    setStep(2);
  }

  function back() {
    setStep(1);
  }

  function openModal() {
    console.log("open modal");
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function updateField(field: string, value: any) {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function submit() {
    alert("Form submitted!");
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

      {step === 1 && (
        <StepOne onContinue={next} updateField={updateField} data={data} />
      )}
      {step === 2 && (
        <StepTwo
          onSubmit={openModal}
          onBack={back}
          updateField={updateField}
          data={data}
        />
      )}

      {showModal && (
        <ConfirmationModal onClose={closeModal} onSubmit={submit} />
      )}
    </section>
  );
}

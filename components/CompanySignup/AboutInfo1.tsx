/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const AboutInfo1 = () => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => console.log(data);

  /** Input field component */
  const Input = ({ label, required, type, placeholder }) => (
    <div className="flex flex-col gap-1">
      <legend>{label}</legend>
      <input
        {...register(label, { required })}
        className={`${errors[label]} border border-primary text-secondary px-3 py-2 rounded-xl !important w-full`}
        type={type}
        placeholder={placeholder}
      />
      {errors[label] && <span className="text-redColor font-bold">Required</span>}
    </div>
  );

  /** Group the person input fields in a component */
  const PersonFields = () => (
    <section className={`flex flex-col gap-5 mb-8`}>
      <h3>Personal information</h3>
      <Input
        label="Full name"
        required
        type="text"
        placeholder="Ex: Maria Leopoldina de Habsburgo"
      />
      <Input label="Birthday" required type="date" placeholder="dd/mm/aaa" />
    </section>
  );

  /** Group the contact input fields in a component */
  const ContactFields = () => (
    <section className={`flex flex-col gap-5 mb-8`}>
      <h3>Contact</h3>
      <Input
        label="Email"
        required
        type="email"
        placeholder="exemple@exemple.com"
      />
      <Input label="Phone" required type="tel" placeholder="(00) 0.0000-0000" />
    </section>
  );

  /** Group the address input fields in a component */
  const AddressFields = () => (
    <section className={`flex flex-col gap-5 mb-8`}>
      <h3>Address</h3>
      <Input
        label="Street"
        required
        type="text"
        placeholder="Street name, avenue, etc..."
      />
      <Input label="Number" required type="number" placeholder="000" />
    </section>
  );

  /** Nnavigation between steps */
  const rightArrow =
    "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345";
  const leftArrow =
    "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363";

  const Navigation = () => (
    <section className={`w-full justify-between mt-4 flex flex-row-reverse`}>
      {step === fieldGroups.length - 1 && (
        <button
          type="submit"
          className={`py-3 px-5 bg-primary text-txtColor rounded-xl shadow-lg shadow-primary text-sm font-bold`}
          disabled={!isValid}
        >
          SAVE
        </button>
      )}
      {step < fieldGroups.length - 1 && (
        <button
          type="button"
          className={`flex flex-row items-center text-xs font-bold bg-primary shadow-lg shadow-primary py-3 px-5 rounded-xl drop-shadow-md`}
          disabled={!isValid}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          <Image src={rightArrow} alt="" width="30" height="20" unoptimized />
          NEXT
        </button>
      )}
      {step > 0 && (
        <button
          type="button"
          className={`flex flex-row items-center justify-start text-xs font-bold bg-primary shadow-lg shadow-primary py-3 px-5 rounded-xl drop-shadow-md`}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <Image src={leftArrow} alt="" width="30" height="20" unoptimized />
          BACK
        </button>
      )}
    </section>
  );

  /** Mark the input group already filled as blue or gray if not */
  const Reference = () => (
    <footer className={`w-full flex items-center justify-center gap-1 py-4`}>
      {renderMarkers()}
    </footer>
  );

  function renderMarkers() {
    let markers = [];
    for (let i = 0; i < fieldGroups.length; i++)
      markers.push(
        <span className={step >= i ? `bg-secondary` : `bg-secondaryLight`} />
      );
    return markers;
  }

  const fieldGroups = [<PersonFields />, <ContactFields />, <AddressFields />];

  return (
    <main
      className={`min-h-screen w-full font-roboto bg-primary bg-opacity-50 py-6 flex flex-col justify-center items-center sm:py-12`}
    >
      <form
        className={`bg-secondary p-8 xl:w-1/2 lg:w-2/3 md:w-4/6 w-5/6 rounded-3xl shadow-lg shadow-primary`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>User Register</h2>
        {fieldGroups[step]}
        <Navigation />
        <Reference />
      </form>
    </main>
  );
};

export default AboutInfo1;

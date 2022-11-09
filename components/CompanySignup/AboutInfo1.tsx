/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { requiredSkills, TypesOfDevelopers } from "../utils/data";

const AboutInfo1 = () => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => console.log(data);

  /** Input field component */
  const Input = ({
    label,
    required,
    type,
    placeholder,
    name,
    id,
    value,
    img,
  }) => (
    <>
      {type !== "radio" ? (
        <div className="flex flex-col gap-1">
          <legend>{label}</legend>
          <input
            {...register(label, { required })}
            className={`${errors[label]} border border-primary text-secondary px-3 py-2 rounded-xl !important w-full`}
            type={type}
            placeholder={placeholder}
          />
          {errors[label] && (
            <span className="text-redColor font-bold">Required</span>
          )}
        </div>
      ) : (
        <div className="relative">
          <input
            {...register(name)}
            className="hidden group peer"
            type={type}
            name={name}
            value={value}
            id={id}
          />

          <label
            className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-emerald rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-emerald peer-checked:ring-1 peer-checked:ring-mazeCrayola"
            htmlFor={id}
          >
            {img && (
              <Image
                src={img}
                alt=""
                unoptimized
                width="40"
                height="40"
                className=""
              />
            )}
            <span className="text-lg">{label}</span>
          </label>

          <svg
            className="absolute w-5 h-5 text-blue-600 opacity-0 top-5 right-4 peer-checked:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>

          {errors[name] && (
            <span className="text-redColor font-bold">Required</span>
          )}
        </div>
      )}
    </>
  );

  /** Group the type input fields in a component */
  const JobTypeFields = () => (
    <section className={`flex flex-col gap-5 mb-8`}>
      <h3>Personal information</h3>
      <p> We offer full time (40 hours/week) and part time (20 hours/week)</p>
      <div className="grid grid-cols-3 gap-4">
        <Input
          label={"Full time"}
          required
          type={"radio"}
          placeholder={""}
          id={"full_time"}
          value={"Full time"}
          img={undefined}
          name={"jobtypeoption"}
        />
        <Input
          label={"Part time"}
          required
          type={"radio"}
          placeholder={""}
          id={"part_time"}
          value={"Part time"}
          img={undefined}
          name={"jobtypeoption"}
        />
      </div>
    </section>
  );
  /** Group the Developers input fields in a component */
  const DevelopersFields = () => (
    <section className={`flex flex-col gap-5 mb-8`}>
      <h3>How many developers are you looking for?*</h3>
      <p> You can start with 1 or 10. We have the talent ready!</p>
      <div className="grid grid-cols-3 gap-4">
        <Input
          label="1-2"
          required
          type="radio"
          placeholder={""}
          id={"1_2"}
          value="1-2"
          img={undefined}
          name={"developerNeeded"}
        />
        <Input
          label="2-5"
          required
          type="radio"
          placeholder={""}
          id={"2_5"}
          value="2-5"
          img={undefined}
          name={"developerNeeded"}
        />
        <Input
          label="5+"
          required
          type="radio"
          placeholder={""}
          id={"5+"}
          value="5+"
          img={undefined}
          name={"developerNeeded"}
        />
      </div>
    </section>
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
        id={undefined}
        value={""}
        img={undefined}
        name={"fullname"}
      />
      <Input
        label="Birthday"
        required
        type="date"
        placeholder="dd/mm/aaa"
        id={undefined}
        value={"Birthday"}
        img={undefined}
        name={"fullname"}
      />
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
        id={undefined}
        value={""}
        img={undefined}
        name={"email"}
      />
      <Input
        label="Phone"
        required
        type="tel"
        placeholder="(00) 0.0000-0000"
        id={undefined}
        value={""}
        img={undefined}
        name={"phoneNumber"}
      />
    </section>
  );

  /** Group the address input fields in a component */
  const StackFields = () => (
    <section className={`flex flex-col gap-5 mb-8`}>
      <h3>What type developers are you looking for?*</h3>
      <p>We have all types of developers ready to work!</p>
      <div className="grid grid-cols-3 gap-4">
        {TypesOfDevelopers.map((skill, index) => {
          return (
            <div key={index} className="">
              <Input
                label={skill.label}
                required
                type="radio"
                placeholder={""}
                id={skill.id}
                value={skill.value}
                img={undefined}
                name={"developerType"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
  /** Group the address input fields in a component */
  const IconsFields = () => (
    <section className={`flex flex-col gap-5 mb-8 `}>
      <>
        <h3>What type developers are you looking for?*</h3>
        <p>We have all types of developers ready to work!</p>
        <div className="grid grid-cols-2 gap-4">
          {requiredSkills.map((skill, index) => {
            return (
              <div key={index} className="flex flex-row ">
                <Input
                  label={skill.label}
                  required
                  type="radio"
                  placeholder={""}
                  id={skill.id}
                  value={skill.value}
                  img={skill.icon}
                  name={"requiredSkill"}
                />
              </div>
            );
          })}
        </div>
      </>
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
          className={`py-3 px-5 bg-emerald text-txtColor rounded-xl shadow-lg shadow-emerald text-sm font-bold`}
          disabled={!isValid}
        >
          SAVE
        </button>
      )}
      {step < fieldGroups.length - 1 && (
        <button
          type="button"
          className={`flex flex-row items-center text-xs font-bold bg-emerald shadow-lg shadow-emerald py-3 px-5 rounded-xl drop-shadow-md`}
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
          className={`flex flex-row items-center justify-start text-xs font-bold bg-emerald shadow-lg shadow-emerald py-3 px-5 rounded-xl drop-shadow-md`}
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

  const fieldGroups = [
    <JobTypeFields />,
    <DevelopersFields />,
    <PersonFields />,
    <ContactFields />,
    <StackFields />,
    <IconsFields />,
  ];

  return (
    <main
      className={`min-h-screen w-full font-roboto bg-primary py-6 flex flex-col justify-center items-center sm:py-12`}
    >
      <form
        className={`bg-mazeCrayola p-8 xl:w-1/2 lg:w-2/3 md:w-4/6 w-5/6 rounded-3xl shadow-lg shadow-mazeCrayola`}
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

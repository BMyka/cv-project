import React, { useState, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid"; // A library for generating unique ids
import { useReactToPrint } from "react-to-print"; // A library for printing React components
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import exampleCV from "./Utils/exampleCV";
import emptyCV from "./Utils/emptyCV";

const Main = () => {
  // Initialize the state for the CV form with an empty CV object
  const [cv, setCv] = useState(emptyCV);

  // Handle changes to the personal information section of the form
  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    // If the user is uploading a file, call handleChangeFile instead
    if (type === "file") {
      handleChangeFile(e);
      return;
    }

    // Update the state with the new value
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  // Handle changes to a file input field
  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    // Read the file as a Data URL and update the state with the new value
    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  // Handle changes to the experience section of the form
  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    // Update the state with the new value for the specified experience item
    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  // Add a new experience item to the experience section of the form
  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  // Delete an experience item from the experience section of the form
  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  // Handle changes to the education section of the form
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleLoadExample = () => {
    setCv(exampleCV);
  };

  const handleReset = () => {
    setCv(emptyCV);
  };

  const componentRef = useRef();

  // throws warning because react-to-print uses findDOMNode
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <MainWrapper>
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onPrint={handlePrint}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <CVPreview cv={cv} ref={componentRef} />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

import React from "react";
import styled from "styled-components";
import Button from "../Utils/Button";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEduction,
  onAddEduction,
  onDeleteEduction,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEduction}
        onAdd={onAddEduction}
        onDelete={onDeleteEduction}
      />

      <>
        <Button text="Generate PDF" onclick={onPrint} primary />
        <Button text="Load Example" onclick={onLoadExample} secondary />
        <Button text="Reset" onclick={onReset} red />
      </>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVForm;

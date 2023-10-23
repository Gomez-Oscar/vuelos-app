import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  Progress,
} from "@chakra-ui/react";

const steps = [
  { title: "Booking", description: "Contact Info" },
  { title: "Purchase", description: "Date & Time" },
  { title: "you ticket", description: "Select Rooms" },
];

function EsteperComponent() {
  const [activeStep, setActiveStep] = useState({
    index: 2, // Cambiado a 2 para indicar que estamos en el tercer paso
    count: steps.length,
  });

  const activeStepText = steps[activeStep.index].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep.index / max) * 100;

  return (
    <Box
      position="relative"
      width="416px"
      height="12px"
      top="60px"
      left="308px"

    >
      <Stepper size="sm" index={activeStep.index} gap="0">
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <StepIndicator bg="white">
              <StepStatus />
              <Box
                mt={1}
                textAlign="center"
                margin="90px 20px 20px 20px"
                textColor="#11D295"
                font-family="Sarabun"
                fontsize="14"
                font-weight="500"
                line-height="22px"
                letter-spacing="0em"
                text-align="left"
              >
                {step.title}
              </Box>
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position="absolute"
        height="4px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
}

export default EsteperComponent;

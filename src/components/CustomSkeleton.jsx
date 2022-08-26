import React from "react";
import { Skeleton } from "@chakra-ui/react";

const CustomSkeleton = ({ children, isLoading }) => {
  return (
    <Skeleton
      isLoaded={!isLoading}
      fadeDuration={1}
      borderRadius="md"
      startColor={"#2c2c2c"}
      endColor={"#414141"}
    >
      {children}
    </Skeleton>
  );
};

export default CustomSkeleton;

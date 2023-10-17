import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    maxWidth: 900,
  });

  return { isTabletOrMobileDevice };
};

export default useResponsive;

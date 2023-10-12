import { useSetRecoilState } from "recoil";
import { scrollState } from "@store/scrollState";

const useScroll = () => {
  const setScroll = useSetRecoilState(scrollState);

  const handleScroll = (event) => {
    setScroll(event.nativeEvent.contentOffset.y);
  };

  return {
    handleScroll,
  };
};

export default useScroll;

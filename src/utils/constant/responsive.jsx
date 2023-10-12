const { useMediaQuery } = require("react-responsive");

const isTabletOrMobileDevice = useMediaQuery({
  maxDeviceWidth: 1224,
});

export default isTabletOrMobileDevice;

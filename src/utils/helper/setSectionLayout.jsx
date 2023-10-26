export const setSectionLayout = (event, setLayout) => {
  const layout = event.nativeEvent.layout;
  setLayout(layout.y);
};

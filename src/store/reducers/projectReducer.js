const initState = {
  projects: [
    {
      id: "1",
      city: "Tokyo",
      country: "Japan",
      description: "Lorem ipsum solor dit amet somethign religious",
      title: "Get a job here :)",
    },
    {
      id: "2",
      city: "Tokyo",
      country: "Japan",
      description: "Lorem ipsum solor dit amet somethign religious",
      title: "or here! :)",
    },
    {
      id: "3",
      city: "Tokyo",
      country: "Japan",
      description: "Lorem ipsum solor dit amet somethign religious",
      title: "not here :(",
    },
  ],
};
const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;

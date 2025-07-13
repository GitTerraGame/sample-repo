export default (config) => {
  config.timelapseLookBackPerfRun = 100;
  config.createTimelapse = true;
  config.destinationURL = "https://gitterra.gitlab.io/testrepo/";

  return config;
};

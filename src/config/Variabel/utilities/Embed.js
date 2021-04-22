/* eslint-disable @typescript-eslint/no-var-requires */
const { EmbedResponsiveAspectRatios } = require("../Variables");

const EmbedResponsive = "embed-responsive";

const EmbedResponsiveAspectRatio = EmbedResponsiveAspectRatios.map((erar) => {
  const EmbedResponsiveAspectRatioX = erar[0];
  const EmbedResponsiveAspectRatioY = erar[1];

  return `embed-responsive-${EmbedResponsiveAspectRatioX}by${EmbedResponsiveAspectRatioY}`;
});

module.exports = {
  EmbedResponsive,
  EmbedResponsiveAspectRatio,
};

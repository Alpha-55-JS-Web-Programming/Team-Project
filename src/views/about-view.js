import { date } from "../common/constants.js";

export const toAboutView = () => `
<div id="about">
  <div class="content">
    <h1>Web Team Project</h1>
    <h2>Authors: Andrey Raychev, Martin Andreev, Zvezda Neycheva</h2>
    <h2>Project Completed: ${date}</h2>
  </div>
</div>
`;

/* eslint-disable import/no-anonymous-default-export */
module.exports = function (plop) {
  // component generator
  plop.setGenerator("component", {
    description: "create new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{pascalCase name}}/index.tsx",
        templateFile: "./plop-templates/component.hbs",
      },
    ],
  });
}

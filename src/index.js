console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");


document.addEventListener("DOMContentLoaded", function() {
    const el = document.getElementById("game-canvas");
    let context = el.getContext("2d");
    console.log("DOM fully loaded and parsed");
    let inst = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 25, color: "#00FF00"}
);
  inst.draw(context);
  inst.move();
  inst.draw(context);
  });


window.MovingObject = MovingObject;

git filter-branch -f --env-filter "GIT_AUTHOR_NAME='Savio Rodrigues'; GIT_AUTHOR_EMAIL='saviofrod@gmail.com'; GIT_COMMITTER_NAME='Savio Rodrigues'; GIT_COMMITTER_EMAIL='saviofrod@gmail.com';" HEAD
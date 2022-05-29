import { Cube } from "./objects/cube.model.js";
import { Camera } from "./objects/camera.model.js";
import { SpotLight } from "./objects/spotlight.model.js";
import { Renderer } from "./objects/renderer.model.js";
import { ControlGui } from "./objects/control-gui.model.js";
import { CustomStats } from "./objects/stats.model.js";

window.onload = () => {
  const scene = new THREE.Scene();
  const camera = new Camera();
  camera.lookAt(scene.position);

  // stats
  const stats = new CustomStats();

  // GUI
  const controlGui = new ControlGui();

  // spotLight
  const spotLight = new SpotLight();
  scene.add(spotLight.instance);

  // cube
  const cube = new Cube();
  scene.add(cube.instance);

  // renderer
  const renderer = new Renderer();
  const renderScene = () => {
    stats.update();

    cube.rotate(controlGui.getRotationSpeed());

    requestAnimationFrame(renderScene);
    renderer.render(scene, camera.instance);
  };
  renderScene();

  // set
  document.getElementById("container").appendChild(renderer.getDomElement());
  document.getElementById("stats").appendChild(stats.getDomElement());

  // resize
  window.addEventListener(
    "resize",
    () => {
      camera.invalidate();
      renderer.init();
    },
    false
  );
};

import { Cube } from "./objects/cube.model.js";
import { Sphere } from "./objects/sphere.model.js";
import { Plane } from "./objects/plane.model.js";
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

  // axes
  const axes = new THREE.AxesHelper(20);
  scene.add(axes);

  // spotLight
  const spotLight = new SpotLight();
  scene.add(spotLight.instance);

  // plane
  const plane = new Plane();
  scene.add(plane.instance);

  // cube
  const cube = new Cube();
  scene.add(cube.instance);

  // sphere
  const sphere = new Sphere();
  scene.add(sphere.instance);

  // renderer
  const renderer = new Renderer();
  const renderScene = () => {
    stats.update();

    cube.rotate(controlGui.getRotationSpeed());
    sphere.bounce(controlGui.getBouncingSpeed());

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

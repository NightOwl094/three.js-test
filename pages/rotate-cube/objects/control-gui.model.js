export class ControlGui {
  instance;

  controls = {
    rotationSpeed: 0.02,
  };

  constructor() {
    const gui = new dat.GUI();
    gui.add(this.controls, "rotationSpeed", 0, 0.5);

    this.instance = gui;
  }

  getRotationSpeed() {
    return this.controls.rotationSpeed;
  }
}

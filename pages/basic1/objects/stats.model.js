export class CustomStats {
  instance;

  constructor() {
    const stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";

    this.instance = stats;
  }

  update() {
    this.instance.update();
  }

  getDomElement() {
    return this.instance.domElement;
  }
}

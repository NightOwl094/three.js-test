export class Renderer {
  instance;

  constructor() {
    this.instance = new THREE.WebGLRenderer({ antialias: true });
    this.instance.shadowMap.enabled = true;

    this.init();
  }

  init() {
    this.instance.setSize(window.innerWidth, window.innerHeight);
  }

  render(scene, camera) {
    return this.instance.render(scene, camera);
  }

  getDomElement() {
    return this.instance.domElement;
  }
}

export class Camera {
  instance;

  constructor() {
    this.instance = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.instance.position.x = -30;
    this.instance.position.y = 40;
    this.instance.position.z = 30;
  }

  invalidate() {
    this.instance.aspect = window.innerWidth / window.innerHeight;
    this.instance.updateProjectionMatrix();
  }

  lookAt(position) {
    this.instance.lookAt(position);
  }
}

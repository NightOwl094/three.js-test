export class SpotLight {
  instance;

  constructor() {
    this.instance = new THREE.SpotLight(0xffffff);
    this.instance.position.set(-40, 60, -10);

    this.instance.castShadow = true;
  }
}

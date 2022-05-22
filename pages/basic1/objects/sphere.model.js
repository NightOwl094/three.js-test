export class Sphere {
  instance;
  step = 0;

  constructor() {
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0x7777ff,
    });
    this.instance = new THREE.Mesh(sphereGeometry, sphereMaterial);

    this.instance.position.x = 20;
    this.instance.position.y = 4;
    this.instance.position.z = 2;

    this.instance.castShadow = true;
  }

  bounce(speed) {
    this.step += speed;

    this.instance.position.x = 20 + 10 * Math.cos(this.step);
    this.instance.position.y = 2 + 10 * Math.abs(Math.sin(this.step));
  }
}

export class Plane {
  instance;

  constructor() {
    const planeGeometry = new THREE.PlaneGeometry(60, 20);
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.instance = new THREE.Mesh(planeGeometry, planeMaterial);

    this.instance.rotation.x = -0.5 * Math.PI;
    this.instance.position.x = 15;
    this.instance.position.y = 0;
    this.instance.position.z = 0;

    this.instance.receiveShadow = true;
  }
}

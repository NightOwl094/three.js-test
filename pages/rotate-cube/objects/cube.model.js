export class Cube {
  instance;

  constructor() {
    const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
    });
    this.instance = new THREE.Mesh(cubeGeometry, cubeMaterial);

    this.instance.position.x = 0;
    this.instance.position.y = 0;
    this.instance.position.z = 0;

    this.instance.castShadow = true;
  }

  rotate(speed) {
    this.instance.rotation.x += speed;
    this.instance.rotation.y += speed;
    this.instance.rotation.z += speed;
  }
}

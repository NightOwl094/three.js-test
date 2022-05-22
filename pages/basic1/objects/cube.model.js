export class Cube {
  instance;

  constructor() {
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000,
    });
    this.instance = new THREE.Mesh(cubeGeometry, cubeMaterial);

    this.instance.position.x = -4;
    this.instance.position.y = 3;
    this.instance.position.z = 0;

    this.instance.castShadow = true;
  }

  rotate(speed) {
    this.instance.rotation.x += speed;
    this.instance.rotation.y += speed;
    this.instance.rotation.z += speed;
  }
}

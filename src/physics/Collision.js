class Collision {
  constructor() {
    this.restitution = .2;
  }

  elastic(restitution) {
    this.restitution = restitution || .2
  }

  detectCircle () {
    
  }
}

export default Collision;
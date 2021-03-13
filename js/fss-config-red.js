  //------------------------------
  // Mesh Properties
  //------------------------------
  var MESH = {
    width: 1.1,
    height: 1.1,
    depth: 15,
    segments: 12,
    slices: 15,
    xRange: 0.5,
    yRange: 0.2,
    zRange: 1.0,
    ambient: '#555555',
    diffuse: '#ffffff',
    speed: 0.0006
};

  //------------------------------
  // Light Properties
  //------------------------------
  var LIGHT = {
    count: 2,
    xyScalar: 1,
    zOffset: 200,
    ambient: '#5C153C',
    diffuse: '#FF4D4D',
    speed: 0.0004,
    gravity: 6000,
    dampening: 0.001,
    minLimit: 10,
    maxLimit: null,
    minDistance: 20,
    maxDistance: 400,
    autopilot: true,
    draw: false,
    bounds: FSS.Vector3.create(),
    step: FSS.Vector3.create(
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0)
    )
};
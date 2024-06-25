export function baseVertexShader() {
  return `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      vNormal = normal;
      vPosition = position;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);   
    }
  `;
}

export function baseFragmentShader() {
  return `  
    uniform vec3 color;
    uniform vec3 trunkPosition; // position of the tree trunk
    uniform vec3 lightPosition; // position of the light

    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      vec3 lightDirection = normalize(lightPosition - vPosition);
      vec3 trunkDirection = normalize(trunkPosition - vPosition);
      
      // Check if light direction intercepts a z-vector originating from the trunk position
      if (trunkDirection.z > 0.0 && lightDirection.z > trunkDirection.z && lightDirection.z < 1.0) {
        // Fragment is covered by the trunk relative to the light
        gl_FragColor = vec4(color, 1.0);
      } else {
        // Fragment is not covered by the trunk relative to the light
        discard;
      }
    }
  `;
}
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { addMaterialAndAction } from './MaterialAndAction'

export function loadGLTFModel(
  scene,
  glb,
  refRenderer,
  options = { receiveShadow: true, castShadow: true },
) {
  const name = glb.name

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    const DRACOloader = new DRACOLoader()

    DRACOloader.setDecoderPath('/draco/')
    loader.setDRACOLoader(DRACOloader)
    loader.load(
      glb.path,
      (gltf) => {
        const { outer, obj } = addMaterialAndAction(
          gltf,
          name,
          refRenderer,
          options,
        )
        outer ? scene.add(outer) : scene.add(obj)
        resolve(obj)
      },
      undefined,
      (error) => {
        reject(error)
      },
    )
  })
}

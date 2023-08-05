import * as THREE from 'three'

export const RutaMap = ({point1, point2}) => { // {isClickActive = false}
    /* definimos el provider, este provee de datos a los hijos, cualquier hijo de UserProvider accederá a ellos */
    // el valor será un objeto {hola:'Mundo'}
    // const [points, setPoints] = useState([])
    // console.log(point1,point2)
    const points = []
    points.push(new THREE.Vector3(point1.x, point1.y, point1.z))
    points.push(new THREE.Vector3(point2.x, point2.y, point2.z))
    // points.push(new THREE.Vector3(-10, 0, 0))
    // points.push(new THREE.Vector3(0, 10, 0))

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

    return (
        <group position={[0, -2.5, -10]}>
            <line geometry={lineGeometry}>
                <lineBasicMaterial attach="material" color={'#DF5D17'} linewidth={100} linecap={'round'} linejoin={'round'} />
            </line>
        </group>
    )
}
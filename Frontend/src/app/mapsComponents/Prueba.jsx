import { useState,useContext } from "react"
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { MapaContext } from "../pages/MapaContext"

export const Prueba= ({setVentanaModal, ventanaModal}) => { // {isClickActive = false}
    const { nodes, materials } = useGLTF('/scene.glb')
    /* definimos el provider, este provee de datos a los hijos, cualquier hijo de UserProvider accederá a ellos */
    // el valor será un objeto {hola:'Mundo'}
    const [isActive, setIsActive] = useState(false)

    // const{selectedPlace, setSelectedPlace} = useContext(MapaContext);

    // const [color, setColor] = useState("#000")
    const {title,content,img} = ventanaModal;

    const clickMapa = (e) => {
        // const point = {
        //     x:-10,
        //     y:0,
        //     z:0
        // }
        setIsActive(!isActive) // activamos o desactivamos el color

        // if(selectedPlace.p1 == null ){ // este es el punto 1

        //     setSelectedPlace({...selectedPlace, p1:e.unprojectedPoint})
        // }else{ // este seria el punto 2
        //     if(selectedPlace.p1 != e.unprojectedPoint){
        //         setSelectedPlace({...selectedPlace, p2:e.unprojectedPoint})
        //     }
        // }
        // console.log(selectedPlace)
        // console.log(e)
    }

    const doubleClick = (e) => {
        setVentanaModal({title, content,img,isActive:true})
    }

    // (e) => {
    //     console.log('double click')
    //     // console.log(e)
    //     setVentanaModal({title, content,img,isActive:true})
    // }

    return (
        <mesh onClick={clickMapa} 
            onDoubleClick={doubleClick}
            geometry={nodes.DoorFrame.geometry} material={new THREE.MeshBasicMaterial({color:new THREE.Color((isActive)? ("#20BF27"):("#000"))})}>
                {/* material={materials.Door_material} */}
                {/* material={new THREE.MeshBasicMaterial({color:new THREE.Color(isSelect ? (colorSelect) : ("#000"))})} */}
            {/* <meshBasicMaterial color={"#000"}/> */}
            <mesh geometry={nodes.Door.geometry} material={materials.Door_material} position={[0.418, 1.05, 0.022]}>
                <meshBasicMaterial color={"#000"}/>
                <mesh geometry={nodes.Handle_Back.geometry} material={materials.Handle_material} position={[-2.572, 0, 3.512]}> 
                <meshBasicMaterial color={"#000"}/>
                </mesh>
                <mesh geometry={nodes.Handle_Front.geometry} material={materials.Handle_material} position={[-0.764, 0, -0.029]} rotation={[-Math.PI, 0, 0]}> 
                <meshBasicMaterial color={"#000"}/>
                </mesh>
            </mesh>
        </mesh>
    )
}
import {Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

// import { Piso1 } from '../maps/Piso1';
import { Piso2 } from '../maps/Piso2';
import { Piso1_2 } from '../maps/Piso1_2';
import { Piso3 } from '../maps/Piso3';

export const MapaPiso = ({piso}) =>{
    // console.log(piso)

    let isViewPiso1 = false;
    let isViewPiso2 = false;
    let isViewPiso3 = false;

    
    if(piso == 1 ){
        isViewPiso1 = true;
        isViewPiso2 = false;
        isViewPiso3 = false;
    }
    if(piso == 2){
        isViewPiso2 = true
        isViewPiso1 = false;
        isViewPiso3 = false;
    }
    if(piso == 3){
        isViewPiso2 = false
        isViewPiso1 = false;
        isViewPiso3 = true;
    }
    
    return(
        <Canvas camera={{zoom:3, position:[-50,150,80]}}>
            <ambientLight />
            {/* <pointLight position={[-2, -4, 3]} intensity={1000} />
            <pointLight position={[0, 1500, 0]} intensity={100}/>
            <pointLight position={[0, 0, 1500]} intensity={100}/> */}
            <Suspense fallback={null}>
                {/* <Piso1 isView={isViewPiso1} /> */}
                <Piso1_2 isView={isViewPiso1}/>
                <Piso2 isView={isViewPiso2} />
                <Piso3 isView={isViewPiso3} />
            </Suspense>
            
            <OrbitControls/>
        </Canvas>
    )
}
import { Float, Center, Text, OrbitControls } from '@react-three/drei'

export default function Experience()
{
    return <>
        <OrbitControls makeDefault/>
        <Float 
            floatIntensity={ 3 } 
            rotationIntensity={ 3 }
        >
            <Text 
                font="./fonts/bebas-neue-v9-latin-regular.woff"
                scale={ 1 }
                maxWidth={ 3.5 }
                lineHeight={ 0.75 }
                textAlign='center'
                position={ [ 0, 0.5, 0 ] }
            >
                COMING SOON!
                <meshBasicMaterial color="black" toneMapped={ false } />
            </Text>
        </Float>
    </>
}
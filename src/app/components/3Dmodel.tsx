'use client';

import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Page: React.FC = () => {
    let canvas: HTMLElement
    useEffect(() => {
        if (canvas) return

        //get canvas
        canvas = document.getElementById('canvas')!;

        // scene
        const scene = new THREE.Scene();

        //size
        const sizes = {
            width: window.innerWidth * 0.6,
            height: window.innerHeight * 0.6
        };

        //renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas || undefined,
            antialias: true,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);

        //camera
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            1000
        );
        //initial camera position
        camera.position.z = 5;

        //OrbitControlsの導入
        const controls = new OrbitControls(camera, renderer.domElement)


        //load 3d model
        const loader = new GLTFLoader();
        loader.load(
            '/3dModel/board.glb',
            function (gltf) {
                scene.add(gltf.scene);

                //いつ使うの？
                //gltf.animations;
                //gltf.scene;
                //gltf.scenes;
                //gltf.cameras;
                //gltf.asset;
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('エラーがおきたぞい');
            }

        )

        //light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.2);
        pointLight.position.set(1, 2, 3);
        scene.add(pointLight);

        //animation
        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            window.requestAnimationFrame(tick);
            renderer.render(scene, camera);
        }
        tick()
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth * 0.6
            sizes.height = window.innerHeight * 0.6
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(window.devicePixelRatio)
        });

    }, [])
    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    )
}

export default Page
'use client';

import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Page: React.FC = () => {
    let canvas: HTMLElement | null;

    const [coordinates, setCoordinates] = useState([
        { x: 5, y: 3, z: 10 } // 初期座標データ
    ]);

    useEffect(() => {
        async function fetchCoordinates() {
            try {
                const response = await fetch('/api/getpintable/1');
                const data = await response.json();

                if (data && data.result && data.result.rows) {
                    const newCoordinates = data.result.rows.map((row: { xcoordinate: number, ycoordinate: number, zcoordinate: number }) => ({
                        x: row.xcoordinate,
                        y: row.ycoordinate,
                        z: row.zcoordinate
                    }));

                    setCoordinates(prev => [...prev, ...newCoordinates]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchCoordinates();
    }, []);

    useEffect(() => {

        if (canvas) return

        // 仮の座標の配列を定義

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
            '/3dModel/rikei.glb',
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

        coordinates.forEach(coord => {
            const pinGeometry = new THREE.SphereGeometry(0.1, 32, 32);
            const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const pin = new THREE.Mesh(pinGeometry, pinMaterial);
            pin.position.set(coord.x, coord.y, coord.z);
            scene.add(pin);
        });

    }, [coordinates])
    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    )
}

export default Page
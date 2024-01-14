'use client';

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader, ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import DisplayImage from '@/app/components/displayImage';
import styles from './3Dmodel.module.css';
import { cos } from 'three/examples/jsm/nodes/Nodes.js';

type ThreeDmodelProps = {
    roomid: number;
};

const Page: React.FC<ThreeDmodelProps> = ({ roomid }) => {
    //let canvas: HTMLCanvasElement | null;
    let canvas: HTMLCanvasElement;
    const canvasRef = useRef(null);
    let selectedObject: any = null;
    const [coordinates, setCoordinates] = useState([
        { x: 5, y: 3, z: 10, id: 'a', path: 'b' } // 初期座標データ
    ]);
    const [threedpath, setThreedpath] = useState('');

    const [pin_id, setPin_id] = useState('a');
    const [pin_path, setPin_path] = useState('b');

    useEffect(() => {
        async function fetch3dpath() {
            try {
                const response = await fetch(`/api/get3dtable/${roomid}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }
                });
                const data = await response.json();
                console.log(data.result.rows[0].model3dpath);
                // threedpathをセット
                setThreedpath(data.result.rows[0].model3dpath);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetch3dpath();
    }, [roomid]);

    //データベースから座標を取得
    useEffect(() => {
        async function fetchCoordinates() {
            try {
                const response = await fetch(`/api/getpintable/${roomid}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }
                });
                const data = await response.json();

                if (data && data.result && data.result.rows) {
                    const newCoordinates = data.result.rows.map((row: { xcoordinate: number, ycoordinate: number, zcoordinate: number, id: string, imagepath: string }) => ({
                        x: row.xcoordinate,
                        y: row.ycoordinate,
                        z: row.zcoordinate,
                        id: row.id,
                        path: row.imagepath

                    }));

                    setCoordinates(prev => [...prev, ...newCoordinates]);

                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchCoordinates();
    }, [roomid]);

    useEffect(() => {

        if (canvas) return

        // 仮の座標の配列を定義

        //get canvas
        canvas = document.getElementById('canvas') as HTMLCanvasElement;

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
        camera.position.x = 1;
        camera.position.y = 1;
        camera.position.z = 1;

        //OrbitControlsの導入
        const controls = new OrbitControls(camera, renderer.domElement)


        //load 3d model
        const loader = new GLTFLoader();
        console.log(`3dpath:${threedpath}`);
        loader.load(
            `/3dModel/${threedpath}`,
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
                //console.log(`3dpath:${threedpath}`);
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


        //pin def
        let pin: any
        const pins: any = [];

        coordinates.forEach(coord => {
            const pinGeometry = new THREE.SphereGeometry(0.1, 32, 32);
            const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const pin = new THREE.Mesh(pinGeometry, pinMaterial);
            pin.position.set(coord.x, coord.y, coord.z);
            pin.userData.customId = coord.id;
            pin.userData.customPath = coord.path;
            scene.add(pin);
            pins.push(pin);
            //console.log(coord.x, coord.y, coord.z, coord.id);
        });


        function addModelClickListener() {
            canvas.addEventListener('click', onModelClick, false);
        }

        function onModelClick(event: MouseEvent) {
            event.preventDefault();

            // mouse変数を関数スコープに移動
            const mouse = new THREE.Vector2();
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = - ((event.clientY - rect.top) / rect.height) * 2 + 1;
            // レイキャスティング
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);


            if (intersects.length > 0) {
                const intersectedObject = intersects[0].object as THREE.Mesh;

                if (selectedObject) {
                    if (selectedObject !== intersectedObject) {
                        const material01 = selectedObject.material as THREE.MeshBasicMaterial;
                        material01.color.set('red');//色を元に戻す
                    }
                }

                if (pins.includes(intersectedObject)) {
                    selectedObject = intersectedObject;

                    const material02 = intersectedObject.material as THREE.MeshBasicMaterial;
                    material02.color.set('green');//色を変更する
                    material02.needsUpdate = true;
                    scene.add(intersectedObject);
                    setPin_id(intersectedObject.userData.customId);
                    setPin_path(intersectedObject.userData.customPath);
                }

            }


        }
        addModelClickListener();
    }, [threedpath, coordinates])

    return (
        <div className={styles.container}>
            <div className={styles.model}>
                <canvas id="canvas" ref={canvasRef}></canvas>
            </div>
            <div className={styles.images}>
                <DisplayImage pinId={pin_id} imagePath={pin_path} />
            </div>
        </div>
    )
}

export default Page
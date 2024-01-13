'use client';

import { use, useEffect } from 'react';
import { useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

type ThreeDmodelProps = {
    roomid: number;
};

const Page: React.FC<ThreeDmodelProps> = ({ roomid }) => {
    let canvas: HTMLCanvasElement

    //ピンをデータベースに登録するapiを呼び出す関数
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [z, setz] = useState(0);
    const [model3did, setmodel3did] = useState(0);
    const [threedpath, setThreedpath] = useState('');

    const handleSubmit = async (x: Number, y: Number, z: Number, model3did: Number) => {

        try {
            const response = await fetch('/api/postpintable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ x, y, z, model3did })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle the response data
            const data = await response.json();
            //console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

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


    useEffect(() => {
        if (canvas) return

        // get canvas
        canvas = document.getElementById('canvas') as HTMLCanvasElement;

        // scene
        const scene = new THREE.Scene();

        // size
        const sizes = {
            width: window.innerWidth * 0.6,
            height: window.innerHeight * 0.6
        };

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas || undefined,
            antialias: true,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);

        const axes = new THREE.AxesHelper(20);
        scene.add(axes);

        const planeGeometry = new THREE.PlaneGeometry(60, 20);
        const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        // camera
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            1000
        );
        camera.position.x = 1;
        camera.position.y = 1;
        camera.position.z = 1;

        // OrbitControlsの導入
        const controls = new OrbitControls(camera, renderer.domElement);

        // load 3d model
        const loader = new GLTFLoader();
        loader.load(
            `/3dModel/${threedpath}`,
            function (gltf) {
                scene.add(gltf.scene);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('エラーがおきたぞい');
            }
        );

        // light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.2);
        pointLight.position.set(1, 2, 3);
        scene.add(pointLight);

        // animation
        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            window.requestAnimationFrame(tick);
            renderer.render(scene, camera);
        }
        tick();

        // resize event
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth * 0.6;
            sizes.height = window.innerHeight * 0.6;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(window.devicePixelRatio);
        });

        function addModelClickListener() {
            canvas.addEventListener('click', onModelClick, false);
        }

        function handlePinAdded(pin: any) {
            //後で追加
        }

        function onModelClick(event: MouseEvent) {
            event.preventDefault();

            // ...クリック位置の計算とレイキャスティングのコード...
            // ...ピンを追加するコード...


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
                const intersect = intersects[0];

                // ピンの作成
                const pinGeometry = new THREE.SphereGeometry(0.1, 32, 32);
                const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                const pin = new THREE.Mesh(pinGeometry, pinMaterial);

                pin.position.copy(intersect.point);


                scene.add(pin);

                // ピンが追加された後の処理を行う関数の呼び出し
                handlePinAdded(pin);

                // 座標の取得と表示（またはデータベースへの格納）
                //console.log(pin.position);


                const x = pin.position.x;
                const y = pin.position.y;
                const z = pin.position.z;
                const model3did = roomid;


                handleSubmit(x, y, z, model3did);


                //pin.positionが座標


            }

        }

        // イベントリスナーを登録
        addModelClickListener();
        renderer.domElement.addEventListener('click', onModelClick, false);

    }, [threedpath])
    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    )
}

export default Page;
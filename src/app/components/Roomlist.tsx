import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type RoomlistProps = {
    Construction_Phase: string;
    Created_Date: string;
    personInCharge: string;
    Model: string;
    roomid: number;
    imagepath: string;
};

const Roomlist: React.FC<RoomlistProps> = ({ Construction_Phase, Created_Date, personInCharge, Model, roomid, imagepath }) => {


    return (
        <div className="wrapper" style={wrapperStyle}>
            <div className="info" style={infoStyle}>
                <p>施工段階：{Construction_Phase}</p>
                <p>担当者：{Created_Date}</p>
                <p>ルーム：{personInCharge}</p>
                <p>モデル型:{Model}</p>
            </div>
            <div className="photo" style={photoStyle}>
                <div className="photoImg">
                    <Image src={`/images/${imagepath}`} alt="Room Image" width={300} height={200} />
                </div>
            </div>
        </div>
    );
};



const photoStyle = {
    flex: '1',
};

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%', // 幅を大きくする
    margin: '20px auto', // 余白を増やす
    padding: '20px', // パディングを増やす
    border: '2px solid black', // 黒い線のボーダー
    borderRadius: '10px', // 角を丸くする
};

const infoStyle = {
    flex: '1',
    marginRight: '1rem',
    fontSize: '1.2em', // フォントサイズを大きくする
    lineHeight: '1.5', // 行間を調整
    border: '1px solid grey', // 灰色の細いボーダー
    borderRadius: '5px', // 角を少し丸くする
    padding: '10px', // 内部の余白を調整
};

export default Roomlist;


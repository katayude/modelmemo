import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type RoomlistProps = {
    Construction_Phase: string;
    Created_Date: string;
    personInCharge: string;
    Model: string;
    roomid: number;
};

const Roomlist: React.FC<RoomlistProps> = ({ Construction_Phase, Created_Date, personInCharge, Model, roomid }) => {


    return (
        <div className="wrapper" style={wrapperStyle}>
            <div className="info" style={infoStyle}>
                <p>施工段階：{Construction_Phase}</p>
                <p>作成日：{Created_Date}</p>
                <p>担当者：{personInCharge}</p>
                <p>3Dモデル:{Model}</p>
            </div>
            <div className="photo" style={photoStyle}>
                <div className="photoImg">
                    <Image src={`/images/yutaka.png`} alt="Room Image" width={100} height={100} />
                </div>
            </div>
        </div>
    );
};

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const infoStyle = {
    flex: '1',
    marginRight: '1rem',
};

const photoStyle = {
    flex: '1',
};

export default Roomlist;


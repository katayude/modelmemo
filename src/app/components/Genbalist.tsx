import React, { ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';

type Genbalistprops = {
  building: string;
  location: string;
  personInCharge: string;
  imagepath: string;
};

const Genbalist: React.FC<Genbalistprops> = ({ building, location, personInCharge, imagepath }) => {
  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className="info" style={infoStyle}>
        <p>建物：{building}</p>
        <p>場所：{location}</p>
        <p>担当者：{personInCharge}</p>
      </div>
      <div className="photo" style={photoStyle}>
        <div className="photoImg">
          <Image src={`/images/${imagepath}`} alt="logo" width={200} height={200} />
        </div>
      </div>
    </div>
  );
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

const photoStyle = {
  width: '150px', // 写真の幅を大きくする
  height: '150px', // 写真の高さを大きくする
  margin: '10px', // 余白を調整

  overflow: 'hidden', // 内部の要素が枠からはみ出さないようにする
};



export default Genbalist;
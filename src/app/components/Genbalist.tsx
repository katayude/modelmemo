import React, { ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';

type Genbalistprops = {
  building: string;
  location: string;
  personInCharge: string;
};

const Genbalist: React.FC<Genbalistprops> = ({ building, location, personInCharge }) => {
  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className="info" style={infoStyle}>
        <p>建物：{building}</p>
        <p>場所：{location}</p>
        <p>担当者：{personInCharge}</p>
      </div>
      <div className="photo" style={photoStyle}>
        <div className="photoImg">
          <Image src="/images/yutaka.png" alt="logo" width={100} height={100} />
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

export default Genbalist;

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { buildingData } from "../api/building/building";

export async function getStaticPaths() {
  return buildingData.map(item => ({
    slug: item.id.toString()
  }));
}

const Factorycard = () => {

  return (
    <main>
      <div className="flex flex-wrap">
        {buildingData.map((data: any,index:any) => (
          <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <Image 
              key={index}
              src={data.image} 
              width={250} 
              height={200}
              objectFit="cover"
              alt="โรงงาน"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">ชื่อ : {data.name}</h2>
              <h2 className="">ที่ตั้ง : {data.address}</h2>
              <p>ขนาด : {data.size}</p>
              <p>ราคา : {data.price}</p>
              <div className="card-actions">
                <a href={`/product/${data.id}`}>
                  <button className="btn btn-primary" >ดูเพิ่มเติม</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Factorycard;

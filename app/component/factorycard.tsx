
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { buildingData } from "../api/building/building";

const Factorycard = (e: any) => {

  return (
    <main>
      <div className="grid grid-cols-4 gap-5">
        {buildingData.map((data: any) => (

          <div className="card basic-1/2 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.image} width={500} title="รูปโรงงาน"></img>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.size}</p>
              <p>{data.price}</p>
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

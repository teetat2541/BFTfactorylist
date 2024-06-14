import Image from "next/image";
import Factorycard from "./component/factorycard";
import { buildingData } from "./api/building/building";

export default function Home() {
  const filteredBuildings = buildingData.filter(building => building.status === true)
return (
  <main>
    <h1>รายชื่อโรงงานที่ว่างในปัจจุบัน</h1>
    <div className="flex flex-wrap">
        {filteredBuildings.map(building => (
          <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={building.image} width={250} title="รูปโรงงาน"></img>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{building.name}</h2>
            <p>{building.size}</p>
            <p>{building.price}</p>
            <div className="card-actions">
              <a href={`/product/${building.id}`}>
                <button className="btn btn-primary" >ดูเพิ่มเติม</button>
              </a>
            </div>
          </div>
        </div>
        ))}
    </div> 
    
  </main>
);
}

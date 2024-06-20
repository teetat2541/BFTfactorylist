import Image from "next/image";
import Factorycard from "./component/factorycard";
import { buildingData } from "./api/building/building";

export default function Home() {
  const filteredBuildings = buildingData.filter(building => building.status === true)
return (
  <main>
    <h1 className="m-10 text-5xl text-center">รายชื่อโรงงานที่ว่างในปัจจุบัน</h1>
    <div className="flex flex-wrap">
        {filteredBuildings.map((building:any) => (
          <div className="card w-1/2  sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
              <Image 
              src={building.image} 
              width={250} 
              height={200} 
              alt="รูปโรงงาน"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">ชื่อ : {building.name}</h2>
            <p>ขนาด : {building.size}</p>
            <p>ค่าเช่า : {building.price}</p>
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

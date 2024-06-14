// pages/items/[slug].js
import Image from "next/image";
import { buildingData } from "@/app/api/building/building";

export async function generateStaticParams() {
  return  buildingData.map(item => ({
          slug: item.id.toString()
    }));
}

const ItemPage = ({ params }:any) => {
  const item = buildingData.find(item => item.id === params.slug);
  if (!item) {
      return <div>Item not found</div>;
  }

  return (
      <div className="container">
          <img src={item.image} width={500} title="รูปโรงงาน"></img>
          <h1>{item.name}</h1>
          <p>{item.size}</p>
          <p>{item.price}</p>
          <p>{item.size}</p>
          <p>{item.address}</p>
          <p>{item.buildingType}</p>
          <p>{item.buildingSize}</p>
          <p>{item.officeSize}</p>
          <p>{item.roof}</p>
          <p>{item.wall}</p>
          <p>{item.floorweight}</p>
          <p>{item.electricSystem}</p>
          <p>{item.electricpower}</p>
          <p>{item.plumsystem}</p>
          <p>{item.enterDoor}</p>
          <p>{item.room}</p>
          <p>{item.toilet}</p>
          <p>{item.waterTreatment}</p>
          <p>{item.cityPlan}</p>
          <p>{item.roadSize}</p>
          <p>{item.fee}</p>
          <p>{item.garbageFee}</p>
          <p>{item.status}</p>
      </div>
  );
};

export default ItemPage;
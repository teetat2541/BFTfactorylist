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
      <div className="text-gray-200 p-5">
        <div className="m-5 px-4 sm:px-5">
          <h3 className="text-base font-semibold leading-7 text-gray-100">รายละเอียดอาคาร</h3>
        </div>
        <div className="mt-6 border-2 border-gray-100">
          <dl className="divide-y-2 divide-x-2 divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6"></dt>
              <dd className="mt-1 text-xl leading-6 sm:col-span-2 sm:mt-0"><img src={item.image} width={500} title="รูปโรงงาน"></img></dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ชื่อ</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ขนาด</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.size}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ที่ตั้ง</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.address}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ประเภทอาคาร</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.buildingType}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ขนาดอาคาร</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.buildingSize}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ขนาดโรงงาน</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.factorySize}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ขนาดสำนักงาน</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.officeSize}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">วัสดุหลังคา</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.roof}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">วัสดุผนัง</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.wall}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ความสามมารถในการรับน้ำหนักของพื้น</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.floorweight}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ประเภทไฟฟ้า</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.electricSystem}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ปริมาณไฟฟ้า</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.electricpower}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ขนาดท่อประปา</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.plumsystem}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ความสูงประตูม้วนไฟฟ้า</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.enterDoor}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">จำนวนห้องพัก/ออฟฟิศ</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.room}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">จำนวนห้องน้ำ</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.toilet}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ระบบบำบัดน้ำเสีย</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.waterTreatment}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ผังเมือง</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.cityPlan}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ขนาดถนน หลัก/ซอย</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.roadSize}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ค่าส่วนกลาง</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.fee}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ค่าขยะ</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.garbageFee}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-center text-xl font-medium leading-6">ที่ตั้ง</dt>
              <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">
                <iframe src={item.map}
                title="map"
                width={500}
                height={400}
                >
                </iframe>
              </dd>
            </div>
          </dl>
        </div>
      </div>
  );
};

export default ItemPage;
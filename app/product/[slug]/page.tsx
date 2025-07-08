// pages/items/[slug].js
"use client"
import Image from "next/image";
import { buildingData } from "@/app/api/building/building";
import { useState } from "react";

const ItemPage = ({ params }: any) => {
  const item = buildingData.find(item => item.id === params.slug);
  if (!item) {
    return <div>Item not found</div>;
  }
  const product:any = item.imageAll
  const [tabslide, setTabslide] = useState(0)
  return (
    <div className="p-5">
        <h1 className="m-5 text-2xl text-base font-semibold leading-7">รายละเอียดอาคาร</h1>
      <div className="mt-6 border-2 border-gray-400">
        <dl className="divide-y-2 divide-x-2 divide-gray-400">
          <div className="">
            <dt></dt>
            <dd className="">
              <div className="">
                <div className="flex flex-col place-items-center">
                  <div className="container mx-auto grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 ">
                    {product?.map((picture: any, i: number) => (
                      <div className={i === tabslide ? "image object-contain border-solid-black" : "w-[5rem] "}>
                        <img
                          onClick={() => setTabslide(i)}
                          src={picture.img}
                          key={picture.id}
                          alt="โรงงาน"
                        />
                      </div>
                    ))}
                  </div>
                  <img
                    key={product.id}
                    className="object-contain h-80 w-160 bolder-solid-white"
                    src={product?.[tabslide]?.img}
                    width={700}
                    alt="" />
                </div>
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-center text-xl font-medium leading-6">ชื่อ</dt>
            <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-center text-xl font-medium leading-6">ค่าเช่าต่อเดือน</dt>
            <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.price}</dd>
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
            <dt className="text-center text-xl font-medium leading-6">ทิศ</dt>
            <dd className="mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">{item.direction}</dd>
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
            <dd className="container mx-auto mt-3 text-xl leading-6 sm:col-span-2 sm:mt-0">
              <iframe src={item.map}
                className=""
                title="map"
                width={450}
                height={350}
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
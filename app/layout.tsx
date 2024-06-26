import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BUTR FAH THONG",
  description: "โรงงานให้เช่า",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="flex bg-gray-800 text-white flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" sm:ml-6 sm:block ">
                <div className="flex space-x-4 ">
                  <a href="/" className="bg-gray-900 text-white items-center rounded-md px-3 py-2 font-medium" aria-current="page">หน้าหลัก</a>
                  <a href="/product" className="text-gray-100 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">อาคารทั้งหมด</a>
                  <a href="/contact" className="text-gray-100 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                </div>
            </div>
          </div>
        {children}
        <footer className="footer footer-center p-5 bg-primary text-primary-content">
          <aside>
            <p className="font-bold">
              บริษัท บุตรฟ้าทอง จำกัด <br/>BUTR FAH THONG COMPANY LIMITED
            </p> 
            <p>
              เบอร์ติดต่อ
              <br/>091-012-8694
              <br/>081-809-8446
              <br/>089-118-5200
            </p>
          </aside> 
          <nav>
            <div className="grid grid-flow-col gap-2">
              <Link href="https://lin.ee/b63USM2" target="_blank"><img title="contact" width={50} src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/Line_A-512.png" ></img></Link>
            </div>
          </nav>
        </footer>
      </body>
    </html>
  );  
}

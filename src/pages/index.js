import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/Components/Navigation'
import DropDownMenu from '@/Components/DropDownMenu'
import Link from 'next/link'
import MegaMenu from '@/Components/MegaMenu'
import SearchMenu from '@/Components/SearchMenu'

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
    <Navigation />
    <SearchMenu />
    <MegaMenu />
    <main
      className={` items-center justify-between bg-white ${inter.className}`}
    >
    
<div className="w-full h-screen">
    <div className="w-full h-screen flex flex-col items-center justify-between bg-orange-800 bg-opacity-70 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">контент скоро появится</h1>
            <div className="flex flex-col items-center space-y-4 mt-24">
                <p className="text-gray-300 uppercase text-sm">Получить уведомление</p>
                <form className="w-full flex items-center">
                    <input type="email" name="email" id="email" className="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm"
                     placeholder="Почта" autocomplete="off"/>
                    <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">Записаться</button>
                </form>
            </div>
        </div>
        <div className="w-full flex items-center justify-center">
            <ul className="flex items-center space-x-4 text-gray-200 hover:text-gray-300">
                <li>
                    <Link href="#" title="Vkontakte">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor" >
                    <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/></svg>
                    </Link>
                </li>
                <li>
                    <Link href="#" title="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor" >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>                    
                    </Link>
                    
                </li>
                <li>
                    <Link href="#" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 496 512" fill="currentColor">
                    <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>                    </Link>
                </li>
            </ul>
        </div>
    </div>
</div>
    </main></>
  )
}

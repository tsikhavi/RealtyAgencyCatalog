import Link from "next/link"

export default function SearchMenu(){
    return(
        <header className="bg-white">
  <div
    className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
  >  
  

<nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Realty Agency Catalog</span>
    </Link>
  </div>
</nav>


  </div>
</header>
    )
}
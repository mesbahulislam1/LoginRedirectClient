import { baseUrl } from "@/lib/api/baseUrl";
import Image from "next/image";
import Link from "next/link";
import SearchCategory from "./SearchCategory";
import PaginationPage from "./Pagination ";


const coursePage = async({searchParams}) => {
 const params = await searchParams;
const category = params.category;
const search = params.search;
const page = params.page||1;
const limit = params.limit || 10;

const searchUrl = new URLSearchParams();
if(page){
  searchUrl.set('page', page)
}
if (limit) {
  searchUrl.set('limit', limit)
}
if (search) {
  searchUrl.set('search', search)
}
if (category) {
  searchUrl.set('category', category)
}
 
 const fetchData = await fetch(`${baseUrl}/course?${searchUrl.toString()}`)
 const courses = await fetchData.json()


  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Products
          </p>

          <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Explore Our Products
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            Discover high-quality products at an affordable price.
          </p>
        </div>

        <SearchCategory></SearchCategory>


        {/* Products */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Card */}

          {
            courses?.result?.map((item, index) => {
              return (
                <div key={index} className="group w-full max-w-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              
                  <div className="relative overflow-hidden">
                    <Image
                      src={item?.image || "https://cpagram.ru/wp-content/uploads/2021/03/666666666666666666.png"}
                      width={400}
                      height={300}
                      alt="Product"
                      className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-110"
                    />

            
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-800 shadow">
                      New
                    </span>


                    <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow transition hover:scale-110">
                      ♡
                    </button>
                  </div>


                  <div className="p-5">

                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {item?.category}
                    </p>

                    <h2 className="text-xl font-bold text-slate-900">
                      {item?.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-sm text-amber-400">
                        ★★★★★
                      </div>

                      <span className="text-xs text-slate-400">
                        (4.8)
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                      {item?.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          Price
                        </p>

                        <p className="text-2xl font-extrabold text-slate-900">
                          ${item?.price}
                        </p>
                      </div>

                      <Link href={`/courses/${item?._id}`} className="rounded-full bg-gradient-to-r cursor-pointer from-blue-600 to-green-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                        View Details
                      </Link>

                    </div>
                  </div>
                </div>
              )
            })
          }



        </div>

        <PaginationPage courses={courses}></PaginationPage>
      </div>
    </div>
  );
};

export default coursePage;
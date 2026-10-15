import { baseUrl } from '@/lib/api/baseUrl';
import { getToken } from '@/lib/api/getToken';



const courseDetails = async ({ params }) => {
    const { id } = await params;

    // const [courseDeta, setCourseDeta] = useState([])
    const token = await getToken()
    
    const result = await fetch(`${baseUrl}/course/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const courseDeta = await result.json()




    const {
        title,
        image,
        description,
        price,
        category,
        quantity,
    } = courseDeta;


    return (
        <div>
            <main className="min-h-screen bg-slate-50 px-4 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                            Course Details
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {title || "Untitled Course"}
                        </h1>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
                        <div className="relative min-h-72 bg-slate-100 md:min-h-[480px]">
                            {image ? (
                                <img
                                    src={image}
                                    alt={title || "Course image"}
                                    className=" absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full min-h-72 items-center justify-center text-slate-400">
                                    No course image available
                                </div>
                            )}

                            {category && (
                                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow">
                                    {category}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col p-6 sm:p-10">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
                                Learn Something New
                            </p>

                            <h2 className="mb-5 text-2xl font-bold text-slate-900">
                                {title || "Course Overview"}
                            </h2>

                            <p className="leading-8 text-slate-600">
                                {description || "No description available for this course."}
                            </p>

                            <div className="my-8 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">Course Price</p>
                                    <p className="mt-2 text-2xl font-bold text-amber-600">
                                        {price != null ? `৳${price}` : "Not specified"}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">Available Seats</p>
                                    <p className="mt-2 text-2xl font-bold text-slate-900">
                                        {quantity ?? "Not specified"}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="mt-auto w-full rounded-xl bg-amber-600 px-6 py-4 font-semibold text-white transition hover:bg-amber-700 active:scale-[0.98]"

                            >
                                Enroll Now →
                            </button>

                            <p className="mt-4 text-center text-xs text-slate-400">
                                Course ID: {id}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default courseDetails

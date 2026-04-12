"use client";
import { useParams } from "next/navigation";
import blogs from "@/data/blogsData";
import Image from "next/image";
import Banner from "@/common/Banner/Banner";
import Link from "next/link";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = blogs.find((item) => item.slug === slug);
    console.log('blog slug', blog)

    if (!blog) {
        return <div className="text-center py-20">Blog not found</div>;
    }

    return (
        <>
            <section className="bg-gray-50 pb-10">
                <Banner title={blog.title} current={blog.title} />
                <div className="max-w-7xl mx-auto px-6 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 p-2  bg-white rounded-2xl shadow-md overflow-hidden">
                            {/* Hero Image */}
                            <div className="relative">
                                <Image
                                    src="/assets/blog/blog.jpg"
                                    alt={blog.title}
                                    width={800}
                                    height={400}
                                    className="w-full rounded-t-2xl h-[350px] md:h-[450px] object-cover"
                                />
                                {/* Category badge */}
                                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    My Self
                                </span>
                                {/* Read time badge */}
                                <span className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs shadow">
                                    15:00
                                </span>
                            </div>

                            {/* Title */}
                            <div className="my-4">
                                <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-1  inline-block pb-1">
                                    {blog.title}
                                </h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, repellendus quaerat, eius quisquam placeat consequatur, itaque dolorum nam voluptatibus necessitatibus odio voluptatum dignissimos! Corporis nam sequi alias numquam earum obcaecati, architecto, distinctio vel eos quos, explicabo beatae quaerat reprehenderit omnis.</p>
                                <h2 className="text-2xl font-bold my-3">Lorem, ipsum dolor.</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis alias dolorum facilis error fuga perferendis consequuntur, pariatur, ipsa deserunt rerum architecto eos voluptas! Eius laborum fugiat in voluptatem nihil quod molestiae tempora laboriosam quos perferendis quaerat facere, aliquid beatae ducimus possimus eaque minima. Alias, eos? Dolorem excepturi maiores ipsum quod.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facilis quisquam quod ut, ratione cum beatae corporis non! Voluptate non necessitatibus veritatis magnam nobis cupiditate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias. officiis suscipit veniam doloribus iusto?</p>
                                <h2 className="text-2xl font-bold my-3">Lorem, ipsum dolor.</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis alias dolorum facilis error fuga perferendis consequuntur, pariatur, ipsa deserunt rerum architecto eos voluptas! Eius laborum fugiat in voluptatem nihil quod molestiae tempora laboriosam quos perferendis quaerat facere, aliquid beatae ducimus possimus eaque minima. Alias, eos? Dolorem excepturi maiores ipsum quod.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facilis quisquam quod ut, ratione cum beatae corporis non! Voluptate non necessitatibus veritatis magnam nobis cupiditate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias. officiis suscipit veniam doloribus iusto?</p>
                                <h2 className="text-2xl font-bold my-3">Lorem, ipsum dolor.</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis alias dolorum facilis error fuga perferendis consequuntur, pariatur, ipsa deserunt rerum architecto eos voluptas! Eius laborum fugiat in voluptatem nihil quod molestiae tempora laboriosam quos perferendis quaerat facere, aliquid beatae ducimus possimus eaque minima. Alias, eos? Dolorem excepturi maiores ipsum quod.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facilis quisquam quod ut, ratione cum beatae corporis non! Voluptate non necessitatibus veritatis magnam nobis cupiditate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias. officiis suscipit veniam doloribus iusto?</p>
                                <div className="mt-6">
                                    {/* Heading */}
                                    <h2 className="text-2xl font-bold my-3">Lorem, ipsum dolor.</h2>

                                    {/* Short Description */}
                                    <p className="mb-4 text-gray-700">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis alias dolorum facilis error fuga perferendis consequuntur.
                                    </p>

                                    {/* Bullet Points */}
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Officiis alias dolorum facilis error fuga perferendis consequuntur.</li>
                                        <li>Pariatur ipsa deserunt rerum architecto eos voluptas.</li>
                                        <li>Eius laborum fugiat in voluptatem nihil quod molestiae.</li>
                                        <li>Alias eos? Dolorem excepturi maiores ipsum quod.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tags (Dummy) */}
                            <div className="mt-8 flex flex-wrap gap-2">
                                {["Next.js", "SEO", "Web Dev"].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Author Card (Dummy) */}
                            <div className="mt-10 flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                <Image
                                    src="/assets/profile.avif"
                                    alt="Author"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover w-20 h-20"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">Umer Gull</p>
                                    <p className="text-gray-600 text-sm">Frontend Developer & Writer</p>
                                </div>
                            </div>

                        </div>


                        <div className="hidden lg:block">
                            <div className="space-y-6">
                                {/* Product Card 1 */}
                                <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src="/assets/blog/blog.jpg"
                                            alt="Product 1"
                                            width={300}
                                            height={200}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                        {/* Overlay Price */}
                                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                                            $49.99
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-lg font-semibold text-gray-900">Product One</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Short description about this product. Highlight key features.
                                        </p>
                                        <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>

                                {/* Product Card 2 */}
                                <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src="/assets/blog/blog.jpg"
                                            alt="Product 2"
                                            width={300}
                                            height={200}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                                            $29.99
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-lg font-semibold text-gray-900">Product Two</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Another short description about this product for affiliate purposes.
                                        </p>
                                        <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                {/* Product Card 3 */}
                                <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src="/assets/blog/blog.jpg"
                                            alt="Product 3"
                                            width={300}
                                            height={200}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                                            $39.99
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-lg font-semibold text-gray-900">Product Three</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Short description for product three. Ideal for affiliate marketing.
                                        </p>
                                        <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
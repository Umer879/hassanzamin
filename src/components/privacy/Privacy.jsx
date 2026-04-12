
import { policies } from "@/data/terms&Privacy";

const PrivacyContent = () => {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {policies.map(([title, desc], i) => (
                <div key={i} className="p-6 rounded-[8px] border border-[#201c3f5f]  bg-white  transition">
                    <h3 className="text-xl font-semibold mb-3 text-[#201c3f]">{title}</h3>
                    <p className="text-[#201c3f99] leading-7">{desc}</p>
                </div>
            ))}
        </section>
    )
}
export default PrivacyContent;

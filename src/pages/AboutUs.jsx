import { useLoaderData } from "react-router-dom";



const AboutUs = () => {
    const description = useLoaderData();
    console.log(description)
    return (
        <div className="mt-14 mb-28">
            <h1 className="text-4xl text-slate-900 font-bold mb-5">About BookVibe</h1>
            <div>
                {
                    description.map(des => <p key={des.id} className="text-lg font-semibold mb-6">
                        {des.description}</p>)
                }
            </div>
        </div>
    );
};

export default AboutUs;
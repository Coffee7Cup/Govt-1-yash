import eai from "../../assets/Eai.jpg";
import EngWithPhone from "../../assets/EngWithPhone.jpg";
import nm1 from "../../assets/nm1.jpg";
import fw1 from "../../assets/fw1.jpg";

function Eai() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white p-6 min-h-[400px] flex items-center justify-center">
        <div className="w-[60%] flex flex-col md:flex-row items-center gap-6 justify-between">
          <img
            src={eai}
            alt="EAI Logo"
            width={200}
            height={200}
            className="bg-white p-4 rounded-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">
              Bharat Entrepreneurs Submit
            </h1>
            <p className="mb-2">
              6th September, 2024 | Venue: NDMC Convention Centre, New Delhi
            </p>
            <p className="mb-4">For any queries - Contact - +91 98219 11055</p>
            <button variant="destructive" className="bg-red-600 block ml-[5em] p-2 text-white font-blod rounded-lg">Click Here For Booking</button>
          </div>
        </div>
      </section>
      {/* Form Section */}
      <div className="flex items-center justify-center my-10">
      <section className=" bg-orange-500 justify-center items-center rounded-lg overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 overflow-hidden">
          <div className="space-y-4 p-6 ">
            <h2 className="text-2xl font-bold text-white mb-6">
              Empowering Labour Through Cooperative Efforts
            </h2>
            <div className="space-y-4">
              <input
                placeholder="Enter Your Skilled Manpower Details"
                className="bg-white block p-2 rounded-lg w-[60%]"
              />
              <input
                placeholder="Enter Your Contact Information"
                className="bg-white block p-2 rounded-lg w-[60%]"
              />
              <input
                placeholder="Enter Phone Number"
                type="tel"
                className="bg-white block p-2 rounded-lg w-[60%]"
              />
              <textarea
                placeholder="Enter Your Enquiry Message"
                className="bg-white min-h-[100px] p-2 rounded-lg w-[60%]"
              />
              <button variant="destructive" className=" bg-red-600 block ml-[5em] p-2 text-white font-blod rounded-lg">
                Submit Your Enquiry
              </button>
            </div>
          </div>
          <div className="flex w-full flex-row-reverse justify-start items-center">
            <img
              src={EngWithPhone}
              alt="Construction worker using mobile device"
              className="rounded-lg object-left-top object-contain h-[500px]" 
            />
          </div>
        </div>
      </section>
      </div>

      {/* News Section */}

      <section className="p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                _img: nm1,
                _title : "Embracing Excellence through ZED - A New Chapter for ILCS",
                _desc : "The Indian Labour Cooperative Society (ILCS) is spearheading the ZED (Zero Defect, Zero Effect) Certification project, aiming to elevate the quality and sustainability standards of Indian MSMEs. Through this initiative..."
              }, 
              {
                _img: fw1,
                _title : "Embracing Excellence through ZED - A New Chapter for ILCS",
                _desc : "The Indian Labour Cooperative Society (ILCS) is spearheading the ZED (Zero Defect, Zero Effect) Certification project, aiming to elevate the quality and sustainability standards of Indian MSMEs. Through this initiative..."
              }].map((item,index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-600 shadow-lg shadow-black">
                <div className="mb-4">
                  <img
                    src={item._img}
                    alt={item._title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    {item._title}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-600">
                    {item._desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}

export default Eai;

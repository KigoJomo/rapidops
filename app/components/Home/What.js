import DataAi from '../DataAi'
import DigitalTrans from '../DigitalTrans'
import ProductDev from '../ProductDev'

const ServiceCard = ({ Icon, title, description }) => (
  <article className="flex flex-col gap-8">
    <div className="flex items-center md:flex-col md:items-start gap-4">
      <Icon />
      <h3 className="text-xl gelasio">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </article>
)

const servicesData = [
  {
    Icon: DigitalTrans,
    title: 'Telecom Network Solutions',
    description:
      'We provide a range of telecom network services, including installation, maintenance, and tailored solutions for wireless and wireline technologies like mobile networks and fiber optics.',
  },
  {
    Icon: DataAi,
    title: 'Managed Network Services',
    description:
      'Our managed services ensure optimal performance with proactive monitoring, troubleshooting, and support to keep your network running smoothly.',
  },
  {
    Icon: ProductDev,
    title: 'Network Design & Implementation',
    description:
      'We design and implement telecom networks, offering end-to-end services from planning to deployment for wireless and wireline systems.',
  },
]


const What = () => {
  return (
    <section className="min-h-screen relative overflow-x-hidden flex flex-col gap-8 md:px-64">
      <h2 className="flex items-center text-xl isolate container-custom-xs">
        <span className="bg-white pr-2 roboto">WHAT WE CAN DO FOR YOU</span>
        <span className="bg-gray-300 h-[2px] absolute inline-block w-screen -z-10" />
      </h2>

      <div className="services-wrapper w-full">
        <div className="services w-full flex flex-col md:flex-row gap-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <button className="relative group mt-16 w-fit py-3 px-6 bg-black text-white font-semibold before:w-full before:h-full before:scale-x-0 before:transition-transform before:duration-300 before:origin-left before:bg-green-500 hover:gap-4 hover:text-black hover:before:scale-x-100 isolate before:absolute before:top-0 before:left-0 before:z-0">
          <span className="relative z-10 flex items-center gap-2 text-white">
            Explore all services
            <svg
              className="group-hover:translate-x-2 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              height="16"
              width="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  )
}

export default What

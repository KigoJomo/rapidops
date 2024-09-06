import Image from 'next/image'

const Brands = () => {
  return (
    <section className="container-custom-xs my-28 flex flex-col gap-8 justify-center">
      <h2 className='text-2xl'>Trusted by top brands globally</h2>

      <p className="text-gray-600">
        We serve a wide range of clients, including Network Operators, in various countries in Africa.
      </p>
      
      <div className="image w-full">
        <Image
          width={100}
          height={100}
          src="/images/brands.png"
          className="w-full aspect-auto"
          alt=""
        />
      </div>
    </section>
  )
}

export default Brands

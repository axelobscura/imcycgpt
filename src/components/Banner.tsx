import Image from 'next/image';

export default function Banner() {
  return <span className="sm:text-5xl text-3xl pt-4">
    <Image
      src="/concreton.png"
      width={200}
      height={45}
      alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
      style={{
        display: 'block',
        margin: '0 auto',
      }}
    />
    <Image
      src="/logo.svg"
      width={200}
      height={45}
      alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
      style={{
        display: 'block',
        margin: '0 auto',
        position: 'fixed',
        top: '10px',
        left: '10px',
      }}
    />
    <h2 className='text-center font-light text-gray-500 text-2xl mt-3'>ASISTENTE CONCRETON IMCYC</h2>
    <p className='text-gray-300 text-sm text-center font-light'>Asistente en tecnología del Concreto y del Cemento</p>
  </span>;
}

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUsuarios } from '../../lib/swr-hooks'

export default function Login({setUser, user}:{setUser: any, user: string}) {
  const {usuarios, isLoading} = useUsuarios();
  const [usernameError, setUsernameError] = useState('');
  const { push } = useRouter();
  if(isLoading){
    return(
        <h1>CARGANDO...</h1>
    )
  }
  console.log(usuarios);
  const loginTest = (event: any) => {
    event.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    usuarios.map((usuario : any) => {
      setUsernameError('Cargando');
      if (username === usuario.email && password === '12345') {
        setUser(usuario);
        setUsernameError('Bienvenido');
        push('/chat');
      } else {
        setUsernameError('Usuario y/o contraseña incorrectos');
        //alert('Usuario o contraseña incorrectos');
      }
    });
  };
  return (
    <div className="max-h-screen grid items-center justify-center flex-col sm:text-5xl text-3xl w-full bg-slate-800">
      <Image
        src="/concreton.png"
        width={250}
        height={45}
        alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
        style={{
          display: 'block',
          margin: '0 auto',
        }}
      />
      <h2 className='text-center font-light text-gray-500 text-2xl mt-3'>ASISTENTE CONCRETON IMCYC</h2>
      <p className='text-gray-300 text-sm text-center font-light'>Asistente en tecnología del Concreto y del Cemento</p>
      {usernameError && <p className="text-red-500 text-2xl">{usernameError}</p>}
      <div className='mt-3'>
        <form onSubmit={loginTest} className="bg-transparent shadow-md rounded px-0 pt-6 pb-8 mb-2 w-full">
          <div className="mb-3">
            <label className="block text-gray-100 text-sm font-bold uppercase mb-0 pb-0">
              Usuario:
            </label>
            <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base" id="username" type="text"/>
          </div>
          <div className="mb-3">
            <label className="block text-gray-100 text-sm font-bold uppercase mb-0">
              Contraseña:
            </label>
            <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-base" id="password" type="password"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded focus:outline-none focus:shadow-outline w-full text-sm" type="submit">
              INGRESAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

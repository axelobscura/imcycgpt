import { useUsuarios } from '../../lib/swr-hooks'
import Login from "@/components/Login";
import { useState } from "react";

/*
const usuarios = ["hiram.beltran@element5.mx","javier.villegas@element5.mx","joaquin.cortes@element5.mx","jose.rodriguez@element5.mx","marcoa.jeronimo@element5.mx","oscar.gonzalez@element5.mx","pedro.falcon@element5.mx","yeimi.cruz@element5.mx","jovana.hernandez@element5.mx","valeria.bello@element5.mx","guillermo.correa@element5.mx","luis.ayala@element5.mx"]
*/

export default function Home() {
  const {usuarios, isLoading} = useUsuarios();
  const [user, setUser] = useState("");
  if(isLoading){
    return(
        <h1>CARGANDO...</h1>
    )
  }
  console.log('usuarios: ', usuarios);
  
  return <Login usuarios={usuarios} setUser={setUser} user={user} />;
}

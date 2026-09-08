import { useEffect, useState } from "react";

function AvisoTemporizado() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setVisivel(false);
    }, 3000);

    return () => {
      clearTimeout(temporizador);
    };
  }, []);

  if (!visivel) {
    return null;
  }

  return <div>Bem-vindo!</div>;
}

export default AvisoTemporizado;


 

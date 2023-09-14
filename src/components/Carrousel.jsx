import React from "react";
import { useState, useEffect } from "react";




const Carrousel = () => {
  let [index, setIndex] = useState(0);
  const ciudades = [
    {
      id: 1,
      imagen:
        "https://images.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg",
      nombre: "Nueva York",
      pais: "Estados Unidos",
    },
    {
      id: 2,
      imagen: "https://cronicasfreelancer.com/wp-content/uploads/2019/06/paris-francia-1024x683.jpg",
      nombre: "París",
      pais: "Francia",
    },
    {
      id: 3,
      imagen: "https://i.pinimg.com/originals/f6/40/9b/f6409bd16c40e2af3d6b0480350bb096.jpg",
      nombre: "Tokio",
      pais: "Japón",
    },
    {
      id: 4,
      imagen: "https://siparliamoinitaliano.com/wp-content/uploads/2022/02/coliseo-roma_2924b6ae_1280x720-1024x576.jpeg",
      nombre: "Roma",
      pais: "Italia",
    },
    {
      id: 5,
      imagen: "https://a.cdn-hotels.com/gdcs/production192/d307/5fe14a1a-edf9-4773-89fe-3455afa9d0dd.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      nombre: "Sídney",
      pais: "Australia",
    },
    {
      id: 6,
      imagen: "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
      nombre: "Río de Janeiro",
      pais: "Brasil",
    },
    {
      id: 7,
      imagen: "https://media.staticontent.com/media/pictures/42741baf-09de-4d95-96d6-e99cf236cf62",
      nombre: "Ámsterdam",
      pais: "Países Bajos",
    },
    {
      id: 8,
      imagen: "https://f01d385290.clvaw-cdnwnd.com/1414255a4b90c3cc11a1090d582ee729/200000726-cc8aacc8ac/hong%20kong%20skyscrapers-carloyuen.jpg?ph=f01d385290",
      nombre: "Hong Kong",
      pais: "China",
    },
    {
      id: 9,
      imagen: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg",
      nombre: "Moscú",
      pais: "Rusia",
    },
    {
      id: 10,
      imagen: "https://www.eltiempo.com/uploads/2018/01/17/5a5fcce13deb6.jpeg",
      nombre: "El Cairo",
      pais: "Egipto",
    },
    {
      id: 11,
      imagen: "https://resources.formula-e.pulselive.com/photo-resources/2023/02/20/042dd057-7157-4069-beb8-2aa3af8b21ba/Cape-Town.jpg?width=1440&height=810",
      nombre: "Ciudad del Cabo",
      pais: "Sudáfrica",
    },
    {
      id: 12,
      imagen: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/japon_kioto_fushimiinaritaisha_shutterstockrf_733630336_takashi_images_shutterstock_1.jpg?itok=QG5n-zbj",
      nombre: "Kioto",
      pais: "Japón",
    },
  ];

  const handlePrev = () => {
    index>0? setIndex(index - 4) : setIndex(8);
  }

  const handleNext = () => {
    index<8 ? setIndex(index + 4) : setIndex(0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < 8) {
        setIndex(index + 4)
      } else {
        setIndex(0)
      }

    }, 6000)
    return () => {
      clearInterval(timer)
    }
  }, [index])

  return (

    <>
      <div className="flex  justify-center  w-screen py-2 bg-black/25 ">
        


          <button onClick={handlePrev} className="bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-bold border border-white rounded-l mx-auto my-auto p-1">
            ⬅
          </button>



          <div className="grid grid-cols-1 sm:grid-cols-2 h-[52vh] w-4/6 md:gap-3  ">
            {ciudades.slice(index, index + 4).map((ciudad) => (
              

              <a  key={ciudad.id} className='block group relative rounded-xl border-indigo-700 border-2 border-spacing-5 bg-black '>
              <img
                className='absolute rounded-xl inset-0 object-cover object-center h-full w-full'
                src={ciudad.imagen}
              />
              <div className='relative p-4 sm:p-6 lg:p-8 bg-black bg-opacity-50 rounded-xl rounded-b-none'>
                <p className='text-2xl text-center drop-shadow-darkShadow font-bold uppercase  tracking-widest text-lime-400'>
                  {ciudad.nombre}
                </p>
                <p className="text-xl text-center drop-shadow-darkShadow font-bold tracking-widest  text-yellow-400 sm:text-2xl">
                  {ciudad.pais}
                </p>
              </div>
            </a>
            ))}
          </div>
          <button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-700 text-gray-800 font-bold border border-white rounded-r mx-auto my-auto p-1">
            ➡
          </button>

        </div>
     
    </>
  );
};


export default Carrousel;

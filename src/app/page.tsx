"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/get-categorias')
      const data = await res.json()
      setPosts(data.reverse())
    }
    fetchPosts()
  }, []);

  console.log(posts);

  return (
    <div className="grid grid-rows-[1fr] items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-[1fr] sm:grid-cols-[3fr_1fr] gap-[0px] h-full items-center sm:items-start">
        <div className="bg-gray-950 h-full flex flex-col items-center justify-center text-white p-2 sm:p-8">
          <h1 className="text-4xl sm:text-8xl font-extralight text-left w-full">CURSO DE ACTUALIZACIÓN EN MEDICINA GERIÁTRICA</h1>
          <h2 className="text-1xl sm:text-4xl font-extralight text-gray-300 text-left w-full pl-1">23 de julio 2025 | ON DEMAND</h2>
        </div>
        <div className="bg-white h-full flex flex-col justify-center p-1 sm:p-8 w-full">
          <Image
            src="/AMGG-WP.png"
            alt="Logo AMGG"
            width={200}
            height={100}
            className="mb-6 mx-auto"
          />

          <h2 className="text-3xl font-extralight text-gray-900 mb-6">REGISTRO</h2>
          
          <form className="space-y-0 sm:space-y-4 w-full">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-1 font-extralight">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingrese su nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1 font-extralight">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-1 font-extralight">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+52 55 1234 5678"
              />
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm text-gray-700 mb-1 font-extralight">
                Profesión
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ej. Médico, Enfermero, Estudiante..."
              />
            </div>

            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1 font-extralight">
                Especialidad / Área de interés
              </label>
              <select
                id="specialty"
                name="specialty"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">Seleccione una opción</option>
                <option value="geriatria">Geriatría</option>
                <option value="medicina-interna">Medicina Interna</option>
                <option value="medicina-familiar">Medicina Familiar</option>
                <option value="neurologia">Neurología</option>
                <option value="cardiologia">Cardiología</option>
                <option value="endocrinologia">Endocrinología</option>
                <option value="enfermeria">Enfermería</option>
                <option value="fisioterapia">Fisioterapia</option>
                <option value="nutricion">Nutrición</option>
                <option value="psicologia">Psicología</option>
                <option value="trabajo-social">Trabajo Social</option>
                <option value="estudiante-medicina">Estudiante de Medicina</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium mt-6 uppercase cursor-pointer"
            >
              Registrarse al Curso
            </button>
          </form>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Preguntas y Respuestas
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://amgg.com.mx/curso-de-actualizacion-en-medicina-geriatrica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ir a www.amgg.com.mx →
        </a>
      </footer> */}
    </div>
  );
}

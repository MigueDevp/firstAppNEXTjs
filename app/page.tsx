// app/pages/Home.tsx
import styles from "@/styles/index.module.css";
import Counter from './components/Counter';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <div className="bg-red-500 p-6 text-white text-center">
        <h2 className="text-2xl font-bold">MIGUEL ANGEL RAMIREZ RAMIREZ</h2>
        <p>Usando TAILWINDCSS</p>
      </div>
      <div className="bg-blue-700 p-6 text-white flex flex-col items-center">
        <img src="/images/pexels-pixabay-163064.jpg" alt="IMAGEN GENERICA" className="my-4 w-96 h-400 object-cover" />
        <p className="my-3">IMAGEN GENERICA</p>
      </div>
      <Counter />
    </main>
  );
}

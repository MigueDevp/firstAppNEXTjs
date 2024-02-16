import styles from "@/styles/index.module.css";


export default function Home() {
  return (
    <main>
      <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-end">
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-700">HOME</a>
          <a href="#" className="text-white hover:text-gray-700">SOBRE MI</a>
        </div>
      </div>
    </nav>
    <div className="bg-red-500 p-6 text-white text-center">
        <h2 className="text-2xl font-bold">MIGUEL ANGEL RAMIREZ RAMIREZ</h2>
        <p>Usando TAILWINDCSS</p>
      </div>
   </main> 
  );
}

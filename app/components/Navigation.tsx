const Navegation = () => {
    return (
         <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="space-x-4">
          <a href="./" className="text-white hover:text-gray-700">HOME</a>
          <a href="./acerca" className="text-white hover:text-gray-700">ABOUT</a>
          <a href="./documentation" className="text-white hover:text-gray-700">DOCUMENTATION</a>
          <a href="./experiences" className="text-white hover:text-gray-700">EXPERIENCES</a>
          <a href="./buy" className="text-white hover:text-gray-700">BUY</a>
        </div>
      </div>
    </nav> 
    );
}


export default Navegation;
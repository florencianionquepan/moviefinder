import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from './helpers/getMovieById';

export const MoviePage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const movie = getMovieById(id);

  const renderCalificacion = (calificacion) => {
    const circulos = [];
    for (let i = 1; i <= 5; i++) {
      circulos.push(
        <span
          key={i}
          className={`h-6 w-6 inline-block rounded-full mr-1 ${i <= calificacion ? 'bg-violet-500' : 'bg-gray-500'}`}
        ></span>
      );
    }
    return circulos;
  };

  const onNavigateBack = () =>{
    navigate(-1);
  }

  if(!movie){
    return <Navigate to='/movies'/>
  }

  return (
    <>
    <div className="text-white p-4">
      <h1 className="text-3xl font-bold m-5">{movie.titulo}</h1>
      <div className='flex m-2'>
        <img
            src={movie.imagenURL}
            alt={movie.titulo}
            className="rounded-lg border border-gray-500 shadow-violet p-2 m-2"
          />
        <div className="m-4">
        <p><span className="font-bold m-2">Fecha de Creación:</span> {movie.fechaCreacion}</p>
          <div className="flex items-center m-2">
            <span className="font-bold">Calificación:</span>
            <div className="m-2">{renderCalificacion(movie.calificacion)}</div>
          </div>
        </div>
      </div>
        

      

      {movie.personajes.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Personajes:</h2>
          {movie.personajes.map((personaje) => (
            <div key={personaje.id} className="border border-gray-500 rounded-lg p-2 mt-2 w-1/4">
              <h3 className="text-lg font-bold">{personaje.nombre}</h3>
              <p><span className="font-bold">Edad:</span> {personaje.edad}</p>
              <p><span className="font-bold">Peso:</span> {personaje.peso} kg</p>
              <p><span className="font-bold">Historia:</span> {personaje.historia}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4">Esta película no tiene personajes registrados.</p>
      )}
    </div>

    <button className='btn rounded bg-violet-600 mx-auto p-3 mb-5'
      onClick={()=>onNavigateBack()} >
        Volver
      </button>
    </>
  )
}

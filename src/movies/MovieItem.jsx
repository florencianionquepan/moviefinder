export const MovieItem = ({title, image, date, calification}) => {
  return (
    <div className="w-1/6 h-12">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="mx-auto w-40" src={image} alt={`Imagen de ${title}`}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <p className="text-gray-700 text-base">
                    Fecha Estreno: {date}
                    Calificacion: {calification}
                </p>
            </div>
        </div>
    </div>
  )
}

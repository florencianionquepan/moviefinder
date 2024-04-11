export const MovieItem = ({title, image, date, calification}) => {
  return (
    <div className="w-1/4">
        <div className="max-w-sm rounded bg-gray-800">
            <img className="mx-auto w-50 py-4 max-h-80" src={image} alt={`Imagen de ${title}`}/>
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <p className="text-gray-200 text-base">
                    Fecha de estreno: {date}
                </p>
                <p className="text-gray-200 text-base">
                    Calificacion: {calification}
                </p>
            </div>
        </div>
    </div>
  )
}

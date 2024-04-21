import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="className='btn rounded bg-blue-600 font-semibold m-5 px-3 py-3'"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

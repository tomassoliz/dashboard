export const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "El titulo es requirido";
    }

    if (!values.rating) {
        errors.rating = "El rating es requirido";
    }

    if (!values.awards) {
        errors.awards = "Numero de premios requirido";
    }

    if (!values.length) {
        errors.length = "Debe poner la duracion de la pelicula";
    }

    if (!values.genre_id) {
        errors.genre_id = "Coloque un genero";
    }

    if (!values.release_date) {
        errors.release_date = "Coloque la fecha de estreno";
    }

    return errors;
};
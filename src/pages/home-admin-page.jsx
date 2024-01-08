import { ContentRowMovies } from "../components/ContentRowMovies"
import { GenresInDb } from "../components/GenresInDb"
import { LastMoviesInDb } from "../components/LastMoviesInDb"


export const HomeAdminPage = () => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
            </div>


            <div className="row">
                <ContentRowMovies />

                <LastMoviesInDb />

                <GenresInDb />

            </div>

        </div>
    )
}

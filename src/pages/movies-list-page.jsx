import { Card, Table } from "react-bootstrap"
import { TableItemMovie } from "../components/TableItemMovie"
import { useEffect, useState } from "react"

export const MoviesListPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const apiCall = async () => {

            const response = await fetch('http://localhost:3001/api/v1/movies')
            const result = await response.json()
            setMovies(result.data)
        }
        apiCall()
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Lista de peliculas</h1>
            </div>

            <Card>
                <Card.Body>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Géneros</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(({ title, length, genre, awards, rating }, index) => (
                                    <TableItemMovie key={index + title} title={title} length={length} genre={genre} rating={rating} awards={awards} />
                                ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}

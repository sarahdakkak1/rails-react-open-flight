import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loader, setLoader] = useState(false)

    useEffect (() => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
        .then( resp => {
            setAirline(resp.data)
            setLoaded(true)
        })

        .catch ( resp => console.log (resp) )

    }, [])



    return <div className="wrapper">
        <div className="column">
            <Header
            attributes={airline.data.attributes}
            />
            <div className="reviews"></div>
        </div>
        <div className="column"></div>
        <div className="review-form">[Review form goes there]</div>

    </div>
}

export default Airline
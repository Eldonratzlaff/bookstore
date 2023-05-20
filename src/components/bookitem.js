import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {removeBook} from '../reducers/books'


const Book = ({id, title}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <span>{title}</span>
            <button onClick={() => dispatch(removeBook(id))}>Remove</button>
        </div>
    )
}

Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default Book
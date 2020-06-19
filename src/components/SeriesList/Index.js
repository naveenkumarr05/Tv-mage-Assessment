import React from 'react';
import {Link} from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

import { ListGroup, ListGroupItem, Modal} from 'react-bootstrap';

const SeriesListItem = ({series}) =>(
    <Link to={`/series/${series.show.id}`}>
        <ListGroupItem button>
        <ListItemText primary={series.show.name} />
        </ListGroupItem>
    </Link>
)

const SeriesList = (props)=>{
    return(
        <div>
            <li>
                {props.list.map(series=>(
                    <SeriesListItem series={series} key={series.show.id}/>
                ))}
            </li>
        </div>
    )
}

export default SeriesList;
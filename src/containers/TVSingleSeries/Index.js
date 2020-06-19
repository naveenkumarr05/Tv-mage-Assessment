import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
//Material UI Components
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';

import Typography from 'react-styled-typography';
import { ListGroup, ListGroupItem, Modal} from 'react-bootstrap';

class SingleSeries extends Component{
    state={
        open:false,
        show:null
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response)=> response.json())
            .then(json => this.setState({show:json,open:true}))
    }
    render(){
        const {show} =this.state;
        return(
            <div >
                { show !== null &&
                    <Modal.Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div>
                            <div>
                                <Link to={'/'}>
                                    <div onClick={this.handleClose} aria-label="Close">
                                        <CloseIcon />
                                    </div>
                                </Link>
                                <Typography variant="title" color="inherit">
                                    {show.name}
                                </Typography>
                            </div>
                        </div>

                        <div>
                            <Modal.Body>
                            <div>
                                <ListGroupItem button>
                                    {
                                        show.image != null &&
                                        <img alt="Show" src={show.image.medium}/>
                                    }
                                </ListGroupItem>
                            </div>

                            <div>
                                <ListGroup>
                                <ListGroup.Item>
                                    <div primary="Premiered" secondary={show.premiered}></div>
                                </ListGroup.Item>
                                    <ListGroup.Item>
                                        <ListItemText primary="Premiered" secondary={show.premiered} />
                                    </ListGroup.Item>
                                    <ListGroupItem>
                                        <ListItemText primary="Rating" secondary={show.rating.average}/>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListItemText primary="Episodes" secondary={show._embedded.episodes.length} />
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                            </Modal.Body>
                        </div>
                    </Modal.Dialog>
            }
            </div>
        )
    }

}

export default SingleSeries;

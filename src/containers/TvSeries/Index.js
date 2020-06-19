import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList/Index';
import Loader from '../../components/Loader/Index';

class Series extends Component{

    state={
        series:[],
        seriesName:'',
        isFetching: false,
        importantText:''
    }

    onSeriesInputChange = e =>{
        this.setState({seriesName:e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response)=> response.json())
            .then(json => this.setState({series:json, isFetching:false}))
    }

    render(){
        const {series, seriesName, isFetching,importantText}=this.state
        return(
            <div>
                <div>
                    <input
                        value={seriesName}
                        onChange={this.onSeriesInputChange}
                        helperText={importantText}
                    />
                </div>
                <div>
                    {
                        !isFetching && series.length === 0 && seriesName.trim() === ""
                        &&
                        <p>Plese enter series name into the input</p>
                    }
                    {
                        !isFetching && series.length === 0 && seriesName.trim() !== ""
                        &&
                        <p>No TV Series have been found with this name</p>
                    }
                    {
                        isFetching && <Loader/>
                    }
                    {
                        !isFetching && <SeriesList list={this.state.series}/>
                    }
                </div>
            </div>
        )
    }
}

export default Series
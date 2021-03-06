import React, { useState } from 'react';
import './Stylesheet/SearchDates.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadStayRange } from '../../../Redux/actionCreators';

const mapDispatchToProps = (dispatch) => {
    return {
        loadStayRange: (startDate, endDate) => dispatch(loadStayRange(startDate, endDate)),
    }
}

function SearchDates(props) {
    const history = useHistory();
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    const handleSelect = (ranges) => {
        // console.log(ranges.selection);
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
        props.loadStayRange(ranges.selection.startDate, ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of guests <PeopleIcon /></h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')}>Search hotels</Button>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SearchDates);

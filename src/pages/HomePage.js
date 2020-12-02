import React, { useState, useEffect} from "react";
import { Heading } from "../styled/Heading";
import { getAdvisors } from "../core/Redux/advisors/actions/advisors.actions";
import { connect } from 'react-redux'
import DataTable from "../components/DataTable";
import styled from "styled-components";
import {rem} from "polished";
import {Button} from "../styled/Button";


const Page = styled.div`
  margin: 0 auto;
  padding: ${rem(16)};
  flex: 1;
  max-width: ${rem(1400)};
`;

function HomePage({dispatch, data}) {
    const [rows, setRows] = useState([]);
    const [rowsOriginal, setRowsOriginal] = useState([]);
    let [generateData, setGenerateData] = useState('')
    let [languageFilter, setLanguageFilter] = useState('')
    let [statusFilter, setStatusFilter] = useState('')

    function getData() {
        let number = 50;
        if (generateData){
            number = generateData;
        }
        dispatch(getAdvisors(number));
    }

    useEffect(() => {
        dispatch(getAdvisors(50));
    },[dispatch]);

    useEffect(() => {
        if(data) {
            setRows(data.data);
            setRowsOriginal(data.data)
        }
    },[data]);

    function setData(e){
        setGenerateData(e.target.value)
    }

    function filterByLanguage(e){
        setLanguageFilter(e.target.value)
        let data = rowsOriginal;
        data = data.filter(row => row["language"].includes(e.target.value));
        setRows(data);
        if(e.target.value === ''){
            setRows([...rowsOriginal]);
        }
    }
    function filterByStatus(e){
        setStatusFilter(e.target.value)
        let data = rowsOriginal;
        data = data.filter(row => row["status"].includes(e.target.value));
        setRows(data);
        if(e.target.value === ''){
            setRows([...rowsOriginal]);
        }
    }

  return (
    <div>
        <Page>
            <Heading> Welcome to Advisor view </Heading>

            <div>
                <label>{'Generate Data:  '}</label>
                <input type="number" value={generateData} onChange={setData}/>
                <Button onClick={getData}> Generate </Button>
                <label>{'Language Filter: '}</label>
                <input value={languageFilter} onChange={filterByLanguage}/>
                <label>{' Status Filter: '}</label>
                <input value={statusFilter} onChange={filterByStatus}/>
            </div>


            <DataTable title="Current Advisor Table"
                       columns={
                           [
                               { label: 'Name',  prop: 'name'},
                               { label: 'Status',  prop: 'status' },
                               { label: 'Language',  prop: 'language' },
                               { label: 'Reviews',  prop: 'reviews' }

                               ]
                       }
                       rows={rows}
            />
        </Page>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
    return {
    ...ownProps,
    data: state.advisorsReducer.data
    }
};

export default connect(mapStateToProps)(HomePage);

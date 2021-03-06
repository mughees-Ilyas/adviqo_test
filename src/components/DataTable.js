import React, { useState, useEffect } from "react";
import styled, {css} from "styled-components";
import { colors } from "../theme/colors";
import { rem } from "polished";
import sortImg from "../assets/icons/sort.png"

const Scrollable = styled.div`
  overflow: auto;
  flex: 1;
  max-height: calc(100vh - (${rem(64)}) - (${rem(48)}) - (${rem(32)}));
`;

const Cell = styled.div`
  flex: 3;
  line-height: 18px;
  padding: 5px;
  padding-top: 10px;
  box-sizing: border-box;
  ${props => props.flex && css`
    flex: ${props.flex};
 `}
`;

const Row = styled.div`
  display: flex;
  min-height: 40px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rem(8)} 0;
  background-color: ${colors.baseLighter};
  box-shadow: 0 ${rem(2)} ${rem(2)} ${colors.baseDarker};
  border-radius: ${rem(4)};
  font-size: small;
  padding: ${rem(4)};
   & ${Row}:nth-child(2n) {
        background: #F2F2F2;
      }
`;

const RowHeader = styled(Row)`
    text-transform: uppercase;
`;
const SecondRowHeader = styled(RowHeader)`
  background-color: #f9f9f9!important;
  font-weight: 500;
`;

const CellFullWidth = styled(Cell)`
  flex: 20;                 
  background-color: ${colors.primary};
  color: ${colors.base};
  font-size:16px;
`;

//simple table using flex.
export default function DataTable({ title,columns, rows  }) {
    let [rowData, setRowData] = useState([])
    let [sort, setSort] = useState({
        column: "",
        direction: ""
    })

    useEffect(() => {
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            let rowA = a[sort.column]
            let rowB = b[sort.column]
            if(!(/^-?\d+$/.test(rowA))){
               rowA = rowA.toUpperCase();
               rowB = rowB.toUpperCase();
            }

            let comparison = 0;
            if (rowA > rowB) {
                comparison = 1;
            } else if (rowA < rowB) {
                comparison = -1;
            }
            if (sort.direction === 'asc') {
                return comparison;
            }
            return  comparison * -1

        }

        if(sort.direction) {
            setRowData([...rows.sort(compare)])
        } else {
            setRowData([...rows]);
        }
    },[sort, rows]);

    useEffect(() => {
        console.log(rowData)

    },[rowData]);

    function sortFnc(column) {
        if (sort.column && sort.column === column.prop  && sort.direction) {
            if(sort.direction === "asc") {
                console.log("asc")
                setSort({...sort, direction: "desc" })
            } else {
                setSort({...sort, direction: "asc" })
            }
        } else {
            setSort({column: column.prop, direction: "asc" })

        }
    }
    const header = [];
    // add headers for table
    columns.forEach(col => header.push(
        <Cell onClick={()=> sortFnc(col)} key={'table-row-' + header + '-' + col.prop} flex={col.flex}>
            { col.label }
            <img src={sortImg} alt="sort" width="20" height="15"/>
        </Cell>));
    const content = [];
    if (rowData && rowData.length) {
        rowData.forEach((row, index) => {
            const rowContent = [];
            columns.forEach(col => rowContent.push(
                // add cells for rows
                <Cell key={'table-row-' + index + '-' + col.prop} flex={col.flex}>{col.template ? col.template(row) : row[col.prop]}</Cell>
            ));
            // add row that contain cells
            content.push(<Row className="table__content__row" key={index}>{rowContent}</Row>);
        });
    }

    return (
        <Scrollable>
            <Table>
                <RowHeader>
                    <CellFullWidth>{title}</CellFullWidth>
                </RowHeader>
                <SecondRowHeader>{header}</SecondRowHeader>
                {rowData && <> {content}</>}
            </Table>
        </Scrollable>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import MUIDataTable from "mui-datatables";
import Axios from "axios";
import { DeleteDialog } from "./Dialogs/DeleteDialog";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  Card,
  CardBody,
  CardHeader,
} from "../../../../_metronic/_partials/controls";

const headStyles = {
  color: "#B5B5C3",
  fontWeight: "600",
  fontSize: "0.9rem",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
};
const bodyStyles = {
  fontWeight: "400",
  lineHeight: "1.5",
  color: "#3f4254",
  fontSize: "13px",
  verticalAlign: "middle",
};
function StudentRequestsTable(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteData, setDeleteData] = useState([]);
  const studentId = useSelector(
    (state) => state.auth.user.user._id,
    shallowEqual
  );
  useEffect(() => {
    Axios.get(`/api/clean-requests/student?id=${studentId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props, studentId]);

  const columns = [
    {
      name: "roomkeeper",
      label: "Room Keeper",
      options: {
        filter: true,
        sort: true,
        sortThirdClickReset: true,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Room Keeper
            </span>
          );
        },
        customBodyRender: (value) => {
          return (
            <span style={bodyStyles}>
              {value ? (
                <span className="font-weight-bold">{value}</span>
              ) : (
                <span className="text-danger">~Not Alloted~</span>
              )}
            </span>
          );
        },
      },
    },
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: true,
        sortThirdClickReset: true,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Date
            </span>
          );
        },
        customBodyRender: (value) => {
          return <span style={bodyStyles}>{value}</span>;
        },
      },
    },
    {
      name: "time",
      label: "Time",
      options: {
        filter: true,
        sort: true,
        sortThirdClickReset: true,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Time
            </span>
          );
        },
        customBodyRender: (value) => {
          return <span style={bodyStyles}>{value}</span>;
        },
      },
    },
    {
      name: "requestStatus",
      label: "Status",
      sortThirdClickReset: true,
      options: {
        filter: true,
        sort: false,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Status
            </span>
          );
        },
        customBodyRender: (value) => {
          return (
            <span style={bodyStyles}>
              {value === "Pending" && (
                <span className="label label-lg label-light-info label-inline">
                  {value}
                </span>
              )}
              {value === "Alloted" && (
                <span className="label label-lg label-light-primary label-inline">
                  {value}
                </span>
              )}
              {value === "Rejected" && (
                <span className="label label-lg label-light-danger label-inline">
                  {value}
                </span>
              )}
              {value === "Completed" && (
                <span className="label label-lg label-light-success label-inline">
                  {value}
                </span>
              )}
            </span>
          );
        },
      },
    },
    {
      name: "rating",
      label: "Ratings",
      sortThirdClickReset: true,
      options: {
        filter: true,
        sort: true,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Rating
            </span>
          );
        },
        customBodyRender: (value) => {
          return (
            <span style={bodyStyles}>
              {value ? (
                value
              ) : (
                <div className="svg-icon svg-icon-primary svg-icon-md d-block">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")}
                    title="Star"
                  />
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")}
                  />
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")}
                  />
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")}
                  />
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/General/Half-star.svg"
                    )}
                  />
                </div>
              )}
            </span>
          );
        },
      },
    },
    {
      name: "timeIn",
      label: "Time In",
      sortThirdClickReset: true,
      options: {
        filter: false,
        sort: false,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Time In
            </span>
          );
        },
        customBodyRender: (value) => {
          return (
            <span style={bodyStyles}>
              {value ? value : <strong className="text-muted">~~</strong>}
            </span>
          );
        },
      },
    },
    {
      name: "timeOut",
      label: "Time Out",
      sortThirdClickReset: true,
      options: {
        filter: false,
        sort: false,
        customHeadLabelRender: () => {
          return (
            <span className="table-vertical-center" style={headStyles}>
              Time Out
            </span>
          );
        },
        customBodyRender: (value) => {
          return (
            <span style={bodyStyles}>
              {value ? value : <strong className="text-muted">~~</strong>}
            </span>
          );
        },
      },
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        download: false,
        empty: true,
        print: false,
        searchable: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              <button
                title="Delete Clean-Request"
                disabled={tableMeta.rowData[3] !== "Pending" ? true : false}
                className="btn btn-icon btn-light btn-hover-danger btn-sm "
                onClick={() => {
                  setShow(true);
                  setDeleteData(value);
                }}
              >
                <span className="svg-icon svg-icon-md svg-icon-danger">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")}
                    title="Delete Clean-Request"
                  />
                </span>
              </button>
            </div>
          );
        },
      },
    },
    {
      name: 'message',
      options: {
        display: 'excluded',
        print: false,
        download: false,
        searchable: false,
        filter: false,
      }
    },
    {
      name: 'rejectReason',
      options: {
        display: 'excluded',
        print: false,
        download: false,
        searchable: false,
        filter: false,
      }
    }
  ];
  const options = {
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    renderExpandableRow: (rowData, rowMeta) => {
      // console.log(rowData, rowMeta);
      return (
        <>
          <tr>
            <td className="font-weight-bold">Instructions:</td>
            <td colSpan="8">{rowData[8] ? <div className="text-dark-50" >{rowData[8]} </div> : <div className="text-muted"><em>*-No Instructions Provided-*</em></div>}</td>
          </tr>
          { rowData[3].props.children[2] !== false &&(<tr>
            <td className="text-danger font-weight-bold">RejectReason:</td>
            <td colSpan="8"><div className="text-dark-75 font-size-md" >{rowData[9].message}</div></td>
          </tr>)}
        </>
      );
    },
    download: false,
    print: false,
    selectableRows: "none",
    filter: true,
    elevation: 0,
    rowsPerPage: 10,
    // searchAlwaysOpen: true,
    rowHover: false,
    searchOpen: true,
    tableId: "StudentRequestsTable",
    filterType: "dropdown",
    rowsPerPageOptions: [10, 25, 50, 100],
    textLabels: {
      body: {
        noMatch: "No Requests Made!",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Sort for ${column.label}`,
      },
      pagination: {
        next: "Next Page",
        previous: "Previous Page",
        rowsPerPage: "Rows per page:",
        displayRows: "of",
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Download CSV",
        print: "Print",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
      filter: {
        all: "All",
        title: "FILTERS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Show Columns",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "Student(s) selected",
        delete: "Delete",
        deleteAria: "Delete Selected Rows",
      },
    },
  };

  return (
    <>
      <Card className="mb-0">
        <CardHeader>
          <div className="mt-4 mb-1">
            <h3 className="card-label font-weight-bolder text-dark mb-0">
              Clean Requests List
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              Manage or Check the status of your Clean Requests.
            </span>
          </div>
        </CardHeader>
        <CardBody style={{ zIndex: "0" }}>
          <MUIDataTable
            title=""
            data={data}
            columns={columns}
            options={options}
            className="card card-custom shadow-none border-bottom-0 table table-head-custom table-vertical-center overflow-hidden mb-0"
          />
        </CardBody>
      </Card>
      <DeleteDialog
        data={deleteData}
        studentId={studentId}
        onRefreshTable={(data) => {
          setData(data);
        }}
        show={show}
        onHide={() => {
          setShow(false);
        }}
      />
    </>
  );
}

export default StudentRequestsTable;

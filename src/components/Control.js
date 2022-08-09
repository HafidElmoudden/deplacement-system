import { Box, Tab, Tabs, TabList, TableContext, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Apercu from "./Apercu";
import MUIDataTable from "mui-datatables";
import Ajouter from "./Ajouter";
import Modifier from "./Modifier";
import Consulter from "./Consulter";
// import Tabs from "./Tabs"
function Control({ title, data }) {

  

  const options = {
    filterType: "checkbox",
    filter: false,
    print: false,
    selectableRows: false,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    download: false,
    search: false,
    viewColumns: false
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const valueChanger = (newValue) => {
    setValue(newValue);
  }
  return (
    <div className="control-container">
      <div>
        <h1 className="control-title">{title}</h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
            // textColor="secondary"
            // inkBarStyle={{background: '#7032A4'}}
            TabIndicatorProps={{ style: { background: "#7032A4" } }}
          >
            <Tab
              label="Apercu"
              style={{ fontWeight: value == 0 ? "bold" : "", color: value == 0 ? "#242860" : "#8F969F"}}
            />
            <Tab
              label="Ajouter"
              style={{ fontWeight: value == 1 ? "bold" : "", color: value == 1 ? "#242860" : "#8F969F" }}
            />
            <Tab
              label="Modifier"
              style={{ fontWeight: value == 2 ? "bold" : "", color: value == 2 ? "#242860" : "#8F969F" }}
            />
            <Tab
              label="Consulter"
              style={{ fontWeight: value == 3 ? "bold" : "", color: value == 3 ? "#242860" : "#8F969F" }}
            />
          </Tabs>
        </Box>
      </Box>
      {/* <Tabs valueChanger={valueChanger}/> */}
      {value == 0 && <Apercu data={data} />}
      {value == 1 && <Ajouter />}
      {value == 2 && <Modifier />}
      {value == 3 && <Consulter />}

      {/* <MUIDataTable data={datas} columns={columns} options={options} /> */}
    </div>
  );
}

export default Control;

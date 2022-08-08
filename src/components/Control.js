import { Box, Tab, Tabs, TabList, TableContext } from "@mui/material";
import React, { useEffect, useState } from "react";
import Apercu from "./Apercu";
import MUIDataTable from "mui-datatables";

function Control({ title, data }) {
  const columns = ["Name", "Company", "City", "State"];

  const datas = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"]
  ];

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
            textColor="secondary"
          >
            <Tab
              label="Apercu"
              style={{ fontWeight: value == 0 ? "bold" : "" }}
            />
            <Tab
              label="Ajouter"
              style={{ fontWeight: value == 1 ? "bold" : "" }}
            />
            <Tab
              label="Modifier"
              style={{ fontWeight: value == 2 ? "bold" : "" }}
            />
            <Tab
              label="Consulter"
              style={{ fontWeight: value == 3 ? "bold" : "" }}
            />
          </Tabs>
        </Box>
      </Box>
      <Apercu data={data} />
      {/* <MUIDataTable data={datas} columns={columns} options={options} /> */}
    </div>
  );
}

export default Control;

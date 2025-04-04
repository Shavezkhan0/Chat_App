import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { useState, useEffect } from 'react'
import { Avatar } from "@mui/material";
import { dashboardData } from '../../constants/sampleData';
import { transformImage } from '../../lib/feature';

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "avater",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    )
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "username",
    headerName: "Username",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200
  },
]

const UserManagement = () => {

  const [rows, setrows] = useState([])

  useEffect(() => {
    setrows(dashboardData.users.map((i) => ({ ...i,
       id: i._id,
      avatar:transformImage(i.avatar,50) })));
  }, [])


  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  )
}

export default UserManagement
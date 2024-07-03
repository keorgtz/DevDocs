// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../../styles/Tablelisting.css";

const Productlist = () => {
  return (
    <div>
        <h1>Lista de Productos</h1>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Created by</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Productlist
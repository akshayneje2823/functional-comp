import React, { useState } from 'react'

function Card() {
  const [variable, setVariable] = useState({
    Product: "Iphone",
    price: 10000,
    qty: 1,
  })

  let decrHandler = () => {
    setVariable({})
  }
  let incrHandler = () => {
    setVariable({})
  }
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <table className='table table-striped table-dark'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Qty</th>
                  <th scope='col'>Total</th>
                </tr>
              </thead>
              <tbody className='text-white'>
                <tr>
                  <td>{variable.Product}</td>
                  <td>{variable.price}</td>
                  <td><i className='fa fa-circle-minus' onClick={decrHandler}></i>{variable.qty}<i className='fa fa-circle-plus' onClick={incrHandler}></i></td>
                  <td>{variable.qty * variable.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card

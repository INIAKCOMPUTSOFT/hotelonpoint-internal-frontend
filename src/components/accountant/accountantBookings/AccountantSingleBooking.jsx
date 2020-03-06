import React, { Component } from 'react'
import CustomLoading from '../../assets/CustomLoading'
import moment from 'moment'
import Axios from 'axios'

export default class SingleHotelInvoice extends Component {
  state = {
    loading: true,
    Btnloading: false,
    customerInvoice: []
  }

  async componentDidMount () {
    try {
      const response = await Axios.get(
        `http://localhost:3400/Booking/hotelbooking/${this.props.match.params.id}`
      )
      console.log('1234', response)
      this.setState({
        customerInvoice: response.data.data.bookings,
        loading: false
      })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  confirmPayment = async (id) => {
    try {
      this.setState({ Btnloading: true })
      const data = [
        {
          propName: 'paymentStatus',
          value: true
        }
      ]
      const response = await Axios.put(
        `http://localhost:3400/Booking/acct/${id}`, data
      )
      this.setState({
        loading: false
      })
      if(response.statusText === "OK") {
        window.location.href = `/account/booking/${this.props.match.params.id}`;
      }
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  render () {
    const { loading, customerInvoice } = this.state
      const newBookings = customerInvoice.filter(
        item => !item.paymentStatus)
      const paidBookings = customerInvoice.filter(
        item => item.paymentStatus)
    return loading ? (
      <CustomLoading />
    ) : (
      <section className='container mt-3'>
        {customerInvoice === undefined ? (
          <div className='center-div'>
            <h3 className='gold'>Sorry, No Invoice for this hotel</h3>
          </div>
        ) : (
          <div className='finance-div'>
            <div>
              <p className='text-center'>
                {' '}
                <strong>
                  Awaiting Payment Confirmation
                </strong>
              </p>

              <div className='div'>
                  <table className='booking-table'>
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Customer Name</th>
                        <th>Amount (Naira)</th>

                        <th>Action</th>
                      </tr>
                    </thead>
              {newBookings.map(item => (
                    <tbody>
                      <tr>
                      <td>{item.referenceNumber}</td>
                        <td>{item.customer.firstName} {item.customer.lastName}</td>
                        <td>{item.amount}</td>
                        <td><button
                      className='btn btn-primary ml-3'
                      disabled={this.state.Btnloading}
                      onClick={() => this.confirmPayment(item._id)}
                    >
                      Confirm Payment
                    </button></td>
                      </tr>
                    </tbody>
              ))}
                  </table>

                  <br />

                  {/* <div className='row mt-5 mb-4'>
                    <button
                      className='btn btn-primary ml-3'
                      onClick={() => {
                        window.print()
                      }}
                    >
                      Print
                    </button>
                  </div> */}
                </div>
            </div>
            <div>
              <p className='text-center'>
                {' '}
                <strong>
                  Paid Bookings
                </strong>
              </p>

              <div className='div'>
                  <table className='booking-table'>
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Customer Name</th>
                        <th>Amount (Naira)</th>

                        <th>Action</th>
                      </tr>
                    </thead>
              {paidBookings.map(item => (
                    <tbody>
                      <tr>
                      <td>{item.referenceNumber}</td>
                        <td>{item.customer.firstName} {item.customer.lastName}</td>
                        <td>{item.amount}</td>
                        <td><button
                      className='btn btn-primary ml-3'
                      disabled={item.paymentStatus}
                    >
                      Confirm Payment
                    </button></td>
                      </tr>
                    </tbody>
              ))}
                  </table>

                  <br />

                  {/* <div className='row mt-5 mb-4'>
                    <button
                      className='btn btn-primary ml-3'
                      onClick={() => {
                        window.print()
                      }}
                    >
                      Print
                    </button>
                  </div> */}
                </div>
            </div>
          </div>
        )}
      </section>
    )
  }
}

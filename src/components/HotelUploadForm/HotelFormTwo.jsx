import { connect, Field, FieldArray } from "formik";
import React, { Component } from "react";
import "./upload.css";

class HotelFormTwo extends Component {
  render() {
    const {
      moreHotelPolicies,
      moreHotelAmenities,
      isBreakfastAvailable,
      isShuttleAvailable
    } = this.props.formik.values;
    return (
      <section>
        <div className="container bigd">
          <br />
          <div className="mb-3 p-4 custom-shadow">
            <h3>Hotel Policies</h3>
            <p>
              To add a new policy click on the Submit Policy button, then add
              the title of a policy and its description in the field provided
            </p>
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="isBreakfastAvailable">
                    Is breakfast complementary?
                  </label>
                  <Field
                    as="select"
                    className="form-control"
                    id="isBreakfastAvailable"
                    name="isBreakfastAvailable"
                  >
                    <option value="No">No</option>
                    <option value="Yes, Free">Yes, Free</option>
                    <option value="Yes, Paid">Yes, Paid</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                {isBreakfastAvailable === "Yes, Paid" ? (
                  <div className="form-group">
                    <label htmlFor="breakfastPrice">
                      How much do you charge for breakfast?
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="breakfastPrice"
                      name="breakfastPrice"
                      placeholder="NGN5,000"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <br />

            {/*End of Row */}
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="isShuttleAvailable">
                    Is Airport Shuttle available?
                  </label>
                  <Field
                    as="select"
                    className="form-control"
                    id="isShuttleAvailable"
                    name="isShuttleAvailable"
                  >
                    <option value="No">No</option>
                    <option value="Yes, free">Yes, free</option>
                    <option value="Yes, but paid">Yes, but paid</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                {isShuttleAvailable === "Yes, but paid" ? (
                  <div className="form-group">
                    <label htmlFor="shuttlePrice">
                      How much do you charge for the shuttle?
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="shuttlePrice"
                      name="shuttlePrice"
                      placeholder="NGN 10,000"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <br />

            {/*End of Row */}
            <br />
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <label htmlFor="checkIn">What time can a guest check in?</label>
                <Field
                  type="time"
                  id="checkIn"
                  name="checkIn"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor="checkOut">
                  What time can a guest check out?
                </label>
                <Field
                  type="time"
                  id="checkOut"
                  name="checkOut"
                  className="form-control"
                />
              </div>
            </div>
            {/*End of Row */}
            <br />
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <label htmlFor="freeBooking">
                  How many hours can a guest cancel his booking for free?
                </label>
                <Field
                  type="text"
                  id="freeBooking"
                  name="freeBooking"
                  placeholder="24 Hours"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor=" paidBooking">
                  If a guest can't cancel his booking during the free
                  cancellation hours, how much will he pay for cancellation?
                </label>
                <Field
                  type="text"
                  id="paidBooking"
                  name="paidBooking"
                  placeholder="NGN 3,000"
                  className="form-control"
                />
              </div>
            </div>
            {/*End of Row */}

            <FieldArray name="moreHotelPolicies">
              {({ push, remove }) => (
                <>
                  <div className="row">
                    {moreHotelPolicies &&
                      moreHotelPolicies.length > 0 &&
                      moreHotelPolicies.map((item, idx) => {
                        return (
                          <div key={`${item}-${idx}`} className="col-12">
                            <label>Add more title of Policy</label>
                            <Field
                              type="text"
                              name={`moreHotelPolicies.[${idx}].policyTitle`}
                              className="form-control"
                            />
                            <label>Description of Policy</label>
                            <Field
                              as="textarea"
                              name={`moreHotelPolicies.[${idx}].policyDescription`}
                              className="form-control"
                              max="100"
                            />{" "}
                            <button
                              style={{ marginTop: 10, marginBottom: 10 }}
                              className=" btn btn-sm btn-danger col-4"
                              onClick={() => remove({ idx })}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      })}
                  </div>
                  <div className="row">
                    <button
                      style={{ marginTop: 10, marginBottom: 10 }}
                      className="btn btn-dark"
                      onClick={() =>
                        push({ policyTitle: "", policyDescription: "" })
                      }
                    >
                      Submit Policy
                    </button>
                  </div>
                </>
              )}
            </FieldArray>
          </div>

          <div className="mb-3 p-3 custom-shadow">
            <div className="row">
              <div className="col-md-6">
                <h5 htmlFor="paymentMethod">Accepted Method of Payments</h5>

                <br />
                <Field
                  type="checkbox"
                  id="internetBanking"
                  name="paymentMethod"
                  value="Internet Banking"
                />
                <label id="internetBanking" style={{ marginLeft: 10 }}>
                  Bank Transfer
                </label>
                <br />
                <Field
                  type="checkbox"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                />
                <label htmlFor="cash" style={{ marginLeft: 10 }}>
                  Cash
                </label>
                <br />
                <Field
                  type="checkbox"
                  id="card"
                  name="paymentMethod"
                  value="ATM Card/POS"
                />
                <label htmlFor="card" style={{ marginLeft: 10 }}>
                  ATM Card/POS
                </label>
                <br />
              </div>
            </div>
          </div>

          <div className="p-3 custom-shadow">
            <h3>Hotel Amenities</h3>
            <p>
              Tick on the amenities you have in your hotel to add more click on
              the more Amenity Button
            </p>
            <div className="row">
              <div className="col-6">
                <Field
                  type="checkbox"
                  id="swimmingpool"
                  name="hotelAmenities"
                  value="Swimming pool"
                  className="mr-1"
                />
                <label htmlFor="swimmingpool" style={{ marginRight: 10 }}>
                  Swimming Pool
                </label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="wifi"
                  name="hotelAmenities"
                  value="Wifi"
                  className="mr-1"
                />
                <label htmlFor="wifi">Wifi</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="garden"
                  name="hotelAmenities"
                  value="garden"
                  className="mr-1"
                />
                <label htmlFor="garden">Garden</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="fitneCenter"
                  name="hotelAmenities"
                  value="Fitness Center"
                  className="mr-1"
                />
                <label htmlFor="fitneCenter">Fitness Center</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="Restaurant"
                  name="hotelAmenities"
                  value="Restaurant"
                  className="mr-1"
                />
                <label htmlFor="Restaurant">Restaurant</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="bar"
                  name="hotelAmenities"
                  value="Bar"
                />
                <label htmlFor="bar">Bar</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="terrace"
                  name="hotelAmenities"
                  value="Terrace"
                />
                <label htmlFor="terrace">Terrace</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="spa"
                  name="hotelAmenities"
                  value="Spa"
                />
                <label htmlFor="spa">Spa</label>
                <hr />
                <br />
              </div>

              <div className="col-6">
                <Field
                  type="checkbox"
                  id="roomService"
                  name="hotelAmenities"
                  value="Room Service"
                />
                <label htmlFor="roomService">Room Service</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="Sauna"
                  name="hotelAmenities"
                  value="Sauna"
                />
                <label htmlFor="Sauna">Sauna</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="airportShuttle"
                  name="hotelAmenities"
                  value="Airport Shuttle"
                />
                <label htmlFor="airportShuttle">Airpot Shuttle</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="familyRoom"
                  name="hotelAmenities"
                  value="Family Room"
                />
                <label htmlFor="familyRoom">Family Room</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="hottub"
                  name="hotelAmenities"
                  value="Hot tub/Jacuzzi"
                />
                <label htmlFor="hottub">Hot tub/Jacuzzi</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="waterPark"
                  name="hotelAmenities"
                  value="Water Park"
                />
                <label htmlFor="waterPark">Water Park</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="AC"
                  name="hotelAmenities"
                  value="Air Conditioning"
                />
                <label htmlFor="AC">Air Conditioning</label>
                <hr />
                <br />

                <Field
                  type="checkbox"
                  id="Electric"
                  name="hotelAmenities"
                  value="Electric Vehicle Charging Station"
                />
                <label htmlFor="Electric">
                  Electric Vehicle Charging Station
                </label>
                <hr />
                <br />
              </div>
            </div>

            <FieldArray name="moreHotelAmenities">
              {({ push, remove }) => (
                <React.Fragment>
                  {moreHotelAmenities &&
                    moreHotelAmenities.length > 0 &&
                    moreHotelAmenities.map((item, index) => (
                      <div key={`${item}-${index}`} className="col-12">
                        <label>More Room Amenity</label>
                        <Field
                          type="text"
                          name={`moreHotelAmenities[${index}].amenity`}
                          className="form-control"
                          style={{ width: "100%" }}
                        />
                        <button
                          style={{ marginTop: 10, marginBottom: 10 }}
                          className=" btn btn-sm btn-danger col-4"
                          onClick={() => remove({ index })}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    ))}

                  <button
                    style={{ marginTop: 10, marginBottom: 10 }}
                    className=" btn btn-sm btn-dark"
                    onClick={() => push({ amenity: "" })}
                  >
                    Add new Amenity
                  </button>
                </React.Fragment>
              )}
            </FieldArray>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(HotelFormTwo);

import { useEffect } from "react";
import { Container, Top, Form, FormMessageError } from "./styles";

const BookingForm = ({ availableTimes, dispatch, formik }) => {
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
    <Container id="menu">
      <Top>
        <h1>Book Now</h1>
      </Top>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="res-date">Choose Date*</label>
        <input
          type="date"
          data-testid="res-date"
          id="res-date"
          placeholder="Choose Date"
          min={new Date().toLocaleDateString("en-CA")}
          {...formik.getFieldProps("date")}
        />
        <FormMessageError data-testid="res-date-error">
          {formik.touched.date && formik.errors.date}
        </FormMessageError>
        <label htmlFor="res-time">Choose Time*</label>
        <select
          data-testid="res-time"
          id="res-time"
          placeholder="Choose Time"
          {...formik.getFieldProps("time")}
        >
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <FormMessageError data-testid="res-time-error">
          {formik.touched.time && formik.errors.time}
        </FormMessageError>
        <label htmlFor="guests">Number of guests*</label>
        <input
          data-testid="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...formik.getFieldProps("guests")}
        />
        <FormMessageError data-testid="guests-error">
          {formik.touched.guests && formik.errors.guests}
        </FormMessageError>
        <label htmlFor="occasion">Occasion*</label>
        <select
          data-testid="occasion"
          id="occasion"
          {...formik.getFieldProps("occasion")}
        >
          <option value="birthday" className="opt">
            Birthday
          </option>
          <option value="engagement" className="opt">
            Engagement
          </option>
          <option value="anniversary" className="opt">
            Anniversary
          </option>
        </select>
        <FormMessageError data-testid="occasion-error">
          {formik.touched.occasion && formik.errors.occasion}
        </FormMessageError>
        <label htmlFor="notes">Special requests</label>
        <textarea
          name="notes"
          id="notes"
          placeholder="Special requests"
          {...formik.getFieldProps("notes")}
          rows={4}
        ></textarea>
        <input
          data-testid="submit-btn"
          type="submit"
          value="Make Your reservation"
        />
      </Form>
    </Container>
  );
};

export default BookingForm;

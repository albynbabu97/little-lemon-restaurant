import { useReducer, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import { updateTimes, initializeTimes } from "../../utils/temp";
import ConfirmedBooking from "../../components/ConfirmedBooking";
import { submitAPI } from "../../utils/temp";
import { useFormik } from "formik";
import * as Yup from "yup";

const Bookingpage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: 1,
      occasion: "birthday",
      notes: "",
    },
    onSubmit: (values) => {
      const response = submitAPI(values);
      if (response) {
        // localStorage.setItem("Bookings", JSON.stringify(values));
        setIsSubmitted(true);
        // console.log(values);
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string()
        .oneOf(availableTimes.times)
        .required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["birthday", "engagement", "anniversary"])
        .required("Occasion is required"),
    }),
  });

  return (
    <Container>
      <Header />
      {isSubmitted ? (
        <ConfirmedBooking values={formik?.values} />
      ) : (
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          formik={formik}
        />
      )}
      <Footer />
    </Container>
  );
};

export default Bookingpage;

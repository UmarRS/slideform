import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Page from "./Page";
import Input from "./Input";
import "tailwindcss/tailwind.css";
import SliderInput from "./SliderInput";
import Button from "./Button";

const handleFormSubmit = (formData) => {
  // Handle the form submission, e.g., send it to a server
  console.log(formData);
};

const App = () => (
  <div className="flex flex-col sm:flex-row h-screen">
    <div className="flex-1 flex justify-center items-center ">
      <p class="text-2xl">Welcome</p>
    </div>
    <div className="flex-1 flex justify-center items-center  m-4">
      <Form onSubmit={handleFormSubmit}>
        <Page number={1}>
          <Input
            mandatory="true"
            name="studentName"
            key="studentName"
            type="text"
            hint="Enter your name"
            title="Student Name"
          />
          <Input
            mandatory="true"
            name="studentEmail"
            key="studentEmail"
            type="text"
            hint="Enter your student email"
            title="Student Email"
          />
          <Button color="blue">Next</Button>
        </Page>
        <Page number={2}>
          <Input
            name="phoneNum"
            key="phoneNum"
            type="text"
            hint="Enter your phone number"
            title="Phone Number"
          />
          <Input
            name="address"
            key="address"
            type="text"
            hint="Enter your address"
            title="Address"
          />

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Page>
      </Form>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

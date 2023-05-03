import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <div className="text-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-accent mt-8" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div
        ref={ref}
        className="py-10 w-10/12 text-justify mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center justify-stretch gap-6"
      >
        <div className="card w-96 bg-base-200 hover:bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Tell us the differences between uncontrolled and controlled
              components.
            </h2>
            <p>
              Controlled Component: The uncontrolled component is the input form
              element in the controlled component handled by the component
              rather than the DOM. It takes its current value through props.
              <br />
              Uncontrolled component: Traditional HTML form inputs, the
              uncontrolled component can be written using a ref to get form
              values from the DOM. Data is controlled by the DOM itself.
              Maintains its internal state.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-200 hover:bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              How to validate React props using PropTypes
            </h2>
            <p>
              Props and PropTypes are important mechanisms for passing read-only
              attributes between React components. React props is send data to a
              component when call on that component, including numbers, strings,
              functions, objects, and arrays. If we have multiple components, we
              can pass data from one component to another.
              <br />
              To pass props between components, we can add them when the
              component is called, just like we would pass arguments when
              calling on a regular JavaScript function.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-200 hover:bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Tell us the difference between nodejs and express js.
            </h2>
            <p>
              NodeJS is a framework of JavaScript which is mainly used for
              working with the backend of our application or building the
              backend using JavaScript, whereas ReactJS is a JavaScript
              front-end library. It is mainly used for building the user
              interface or the frontend of our application. Express. js is used
              to develop complete web applications such as single-page,
              multi-page, and hybrid web applications and APIs.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-200 hover:bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              A custom Hook is a JavaScript function whose name starts with
              ”use” and that may call other Hooks. Most React developers are
              familiar with extracting reusable functionality into components or
              functions but are sometimes not as comfortable extracting code
              into hooks. The main reason to write a custom hook is for code
              reusability. Hooks are special functions that hook onto React
              state and lifecycle features inside function components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

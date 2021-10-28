const SVG = {
  Card: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.946 59.919">
      <path
        id="Path_1"
        d="M18.98,0V14.98h9.987V0Zm4.993,9.987a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,23.973,9.987Zm9.987,0v7.49H13.987V9.987H4V59.919H43.946V9.987Zm2.5,39.946H11.49V48.892c-.01-2.776.11-4.362,3.306-5.1,3.5-.809,6.958-1.53,5.3-4.6-4.926-9.08-1.406-14.228,3.88-14.228,5.186,0,8.791,4.956,3.885,14.228-1.615,3.046,1.718,3.77,5.3,4.6,3.206.742,3.316,2.337,3.3,5.136Z"
      />
    </svg>
  ),
  Gantt: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40">
      <path
        id="Path_18"
        d="M11.658,10a6,6,0,1,1,0-4H39a9,9,0,1,1,0,18H29.658a6,6,0,0,1-11.316,0H9A5,5,0,1,0,9,34H36.342a6,6,0,1,1,0,4H9A9,9,0,1,1,9,20h9.342a6,6,0,0,1,11.316,0H39a5,5,0,0,0,0-10ZM24,20a2,2,0,1,1-2,2A2,2,0,0,1,24,20Z"
      />
    </svg>
  ),
  Chart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.99 45.808">
      <path
        id="Path_3"
        d="M12.452,45.808H1V34.356H12.452ZM27.721,28.63H16.269V45.808H27.721ZM42.99,21H31.538V45.808H42.99Zm0-21L31.538,2.33l3.275,3.26L21.739,18.441l-5.728-5.73L1.046,27.593,3.737,30.3,16,18.1l5.709,5.713,15.8-15.531L40.7,11.454,42.99,0Z"
      />
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.829 69.082">
      <path
        id="Path_2"
        d="M35.414,0A35.418,35.418,0,0,0,24.22,69.02c1.768.328,2.34-.77,2.34-1.7V60.724c-9.851,2.143-11.9-4.179-11.9-4.179-1.611-4.093-3.934-5.182-3.934-5.182-3.214-2.2.245-2.151.245-2.151,3.556.248,5.427,3.651,5.427,3.651C19.555,58.274,24.681,56.71,26.7,55.8a7.513,7.513,0,0,1,2.249-4.734c-7.865-.9-16.134-3.937-16.134-17.5a13.707,13.707,0,0,1,3.648-9.506,12.738,12.738,0,0,1,.345-9.373s2.975-.95,9.742,3.63a33.567,33.567,0,0,1,17.734,0c6.761-4.58,9.73-3.63,9.73-3.63a12.726,12.726,0,0,1,.348,9.373,13.67,13.67,0,0,1,3.645,9.506c0,13.6-8.284,16.6-16.17,17.474,1.269,1.1,2.429,3.252,2.429,6.558v9.718c0,.941.567,2.048,2.364,1.7A35.421,35.421,0,0,0,35.414,0Z"
      />
    </svg>
  ),
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.609 71.5">
      <path
        id="Path_47"
        d="M37.3,17.952,65.283,43.987V72.5H46.63V53.848H27.978V72.5H9.326V43.987Zm37.3,17.7L37.3,1,0,35.609l4.231,4.554L37.3,9.487,70.378,40.21l4.231-4.554Z"
      />
    </svg>
  ),
  DragImage: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.425 64.819">
      <path
        id="Path_13"
        d="M70.145,28.539a26.97,26.97,0,0,0-53.864,0,19.8,19.8,0,0,0,3.525,39.28H66.619a19.8,19.8,0,0,0,3.525-39.28ZM43.213,53.415l-14.4-14.4h10.8v-14.4h7.2v14.4h10.8Z"
      />
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        id="Path_48"
        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm4.151,17.943-4.143-4.1L7.891,18,6.058,16.167l4.1-4.157L6,7.891,7.833,6.058l4.155,4.1L16.094,6l1.849,1.849-4.1,4.141L18,16.094Z"
      />
    </svg>
  ),
  Edit: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.873 11.873">
      <path
        id="Path_43"
        d="M9.78,4.909,3.526,11.162,0,11.873.711,8.347,6.965,2.094,9.78,4.909Zm.7-.7,1.394-1.4L9.058,0,7.665,1.394Z"
        fill="#253e7d"
      />
    </svg>
  ),
  Delete: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.081 13.297">
        <path
          id="Path_41"
          data-name="Path 41"
          d="M11.419,13.3H3.662a1.108,1.108,0,0,1-1.108-1.108V3.324h9.973v8.865A1.108,1.108,0,0,1,11.419,13.3M6.432,5.54a.554.554,0,0,0-1.108,0v4.986a.554.554,0,1,0,1.108,0Zm3.324,0a.554.554,0,1,0-1.108,0v4.986a.554.554,0,1,0,1.108,0Zm3.324-2.77H2V1.662H5.324V.831A.832.832,0,0,1,6.155,0h2.77a.832.832,0,0,1,.831.831v.831h3.324ZM6.432,1.662H8.648V1.108H6.432Z"
          transform="translate(-2)"
          fill="#ff2727"
          fillRule="evenodd"
        />
      </svg>
    )
  },
  AddTask: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          id="Path_24"
          d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6,13H13v5H11V13H6V11h5V6h2v5h5Z"
        />
      </svg>
    )
  },
  LeftArrow: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.619 15.39">
        <path
          id="Path_60"
          data-name="Path 60"
          d="M14.619,1.924,12.658,0,5,7.695l7.658,7.695,1.96-1.924L8.847,7.695Z"
          transform="translate(-5)"
        />
      </svg>
    )
  },
  RightArrow: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.619 15.39">
        <path
          id="Path_60"
          data-name="Path 60"
          d="M14.619,1.924,12.658,0,5,7.695l7.658,7.695,1.96-1.924L8.847,7.695Z"
          transform="translate(14.619 15.39) rotate(180)"
        />
      </svg>
    )
  },
  Circle: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <circle id="Ellipse_90" data-name="Ellipse 90" cx="11" cy="11" r="11" />
      </svg>
    )
  },
  Check: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          id="Path_61"
          data-name="Path 61"
          d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11,17,6,11.7l1.4-1.43,3.574,3.736L17.545,7,19,8.4Z"
          fill="#189f25"
        />
      </svg>
    )
  },
  Cross: () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          id="Path_62"
          data-name="Path 62"
          d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.5,16.084L16.1,17.5l-4.09-4.1L7.9,17.5,6.5,16.095,10.593,12,6.5,7.9,7.905,6.5l4.088,4.089L16.084,6.5,17.5,7.9,13.408,11.99,17.5,16.084Z"
          fill="red"
        />
      </svg>
    )
  },
}

export default SVG

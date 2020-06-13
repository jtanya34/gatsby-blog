import React from "react"
export default function Page1({ title, image, data }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{title}</h1>
      </div>
      {data
        ? data.map((each, index) => (
            <div key={index}>
              <h1>{each.title}</h1>
              <p>{each.description}</p>
            </div>
          ))
        : ""}
    </>
  )
}

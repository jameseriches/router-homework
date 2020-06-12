import React, {useState} from 'react'
import { useFormInput } from ".FormInput/useFormInput";

export default function enPostForm(){

const title = useFormInput("", title);
const body = useFormInput("", body);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title: title.value, body: body.value });
    add({ title: title.value, body: body.value });
  };

  const handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Post</h3>
      <div>
        <p>Title</p>
        <input {...title} />
      </div>
      <div>
        <p>Body</p>
        <textarea {...body} />
      </div>
       <button
        on// MouseEnter={() => setHover(true)}
        on// MouseLeave={() => setHover(false)}
        st// yle={
          // hover
          //   ? { ...styles.submitButton, ...styles.hover }
          //   : styles.submitButton
        }
//         ty// pe="submit"
      >
        submit
      </button> 
    </form>
  );
}

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Navigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummery(postInfo.summery);
      });
    });
  }, []);

  const updatePost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summery", summery);
    data.set("content", content);
    data.set('id',id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      crendentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blackquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blackquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summery"
        placeholder="Summery"
        value={summery}
        onChange={(ev) => setSummery(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => setContent(newValue)}
      />
      <button style={{ marginTop: "5px" }}>Update Post</button>
    </form>
  );
};

export default EditPost;

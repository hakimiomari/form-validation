import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import bgImage from "./assets/bg-1.jpg";
import Swal from "sweetalert2";

const schema = yup.object({
  username: yup.string().required("username is required!"),
  password: yup.string().required("password is required").min(6),
  email: yup.string().required("email is required").email(),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="App">
      <img src={bgImage} alt="" />
      <div className="container">
        <h2>React Hook Form</h2>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="group">
            <label htmlFor="name">Username</label>
            <input
              className="input"
              id="username"
              type="text"
              name="username"
              placeholder="@username"
              {...register("username")}
            />
            <span className="errorMessage">{errors.username?.message}</span>
          </div>
          <div className="group">
            <label htmlFor="name">Email</label>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="@email"
              {...register("email")}
            />
            <span className="errorMessage">{errors.email?.message}</span>
          </div>
          <div className="group">
            <label htmlFor="name">Password</label>
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              {...register("password")}
            />
            <span className="errorMessage">{errors.password?.message}</span>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

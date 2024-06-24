import React from "react";

interface FormProps {
  onSubmit: (data: FormData) => void;
  pageTitle: string;
}

interface FormData {
  username: string;
  password: string;
}

const Login = ({ onSubmit, pageTitle }: FormProps) => {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  React.useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);


  // get code
  React.useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      // localStorage.setItem('')
    }
  }, []);

  // const [rerender, setRerender] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const signinWithGithub = () => {
    window.open(`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`, '_self');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col p-5">
      <form
        onSubmit={handleSubmit}
        className="shadow-lg px-10 py-6 bg-white w-full md:w-1/3 lg:w-1/3 rounded-md"
      >
        <h1 className="text-2xl font-semibold text-gray-600 my-5">Sign In</h1>
        <div className="border my-4 border-1"></div>
        <div className="mt-2">
          <label htmlFor="uname">Username</label>
          <input
            onChange={handleInputChange}
            value={formData.username}
            name="username"
            required
            type="text"
            className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="uname"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputChange}
            value={formData.password}
            name="password"
            required
            type="password"
            className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="password"
          />
        </div>
        <div className="text-right">
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 text-sm pt-1"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-2">
          <button className="block w-full rounded-md border-0 py-1.5 px-5 text-slate-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-indigo-900 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            Login
          </button>
        </div>
        <div className="border my-4 border-1"></div>
        <div className="text-center my-3">Or</div>
        <button
          type="button"
          className="block w-full rounded-md border-0 py-1.5 px-5 text-slate-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-indigo-600 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        >
          Signin with Facebook
        </button>

        <button
          type="button"
          onClick={signinWithGithub}
          className="block w-full rounded-md border-0 py-1.5 px-5 text-black mt-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-slate-100 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        >
          Signin with Github
        </button>

        <div className="border my-4 border-1"></div>
        <div className="text-center">
          Don't have an account? <a href="#">Register</a>
        </div>
        <br />
      </form>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Login;

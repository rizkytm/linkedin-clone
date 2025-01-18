import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {axiosInstance} from "../../lib/axios.js";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: signUpMutation, isLoading } = useMutation({
    mutationFn: async (data) => {
        const res = await axiosInstance.post('/auth/signup', data);
        return res.data;
    },
    onSuccess: () => {
        toast.success('Account created successfully');
    },
    onError: (err) => {
        console.log(err);
        toast.error(err.response.data.message);
    }
  })

  const handleSignup = (e) => {
    e.preventDefault();

    signUpMutation({
        email,
        name,
        username,
        password
    });
  }

  return <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
        />
        <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full"
            required
        />
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
        />
        <input
            type="password"
            placeholder="Password (6+ characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
            required
        />

        <button type="submit" disabled={isLoading} className="btn btn-primary w-full text-white">
            { isLoading ? <Loader className="size-5 animate-spin" /> : 'Agree & Join' }
        </button>
  </form>
}

export default SignUpForm;
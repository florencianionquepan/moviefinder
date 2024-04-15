import React, { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../../hooks/useForm";

export const FormCustomHook = () => {

  const {formState, onInputChange} = useForm({
    username:'',
    email:'',
    password:''
  })

  const {username,email,password} = formState;

  /* asi se llama solo cuando se renderiza la primera vez */
  useEffect(()=>{
    //console.log('useEffect called!');
  },[]);

  /* asi se llama solo cuando cambia el form */
  useEffect(()=>{
    //console.log('formState changed!');
  },[formState]);

  useEffect(()=>{
    //console.log('email changed!');
  },[email]);

  return (
    <div className="w-full max-w-xs m-auto mt-20 min-h-[600px]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700"
            id="username"
            type="text"
            placeholder="florencia987"
            name="username"
            autoComplete="username"
            value={username}
            onChange={onInputChange}/>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700"
            id="email"
            type="email"
            placeholder="flower@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}/>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 mb-3"
            id="password"
            type="password"
            placeholder="*********"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={onInputChange}/>
        </div>
        {/* <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
            px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign In
          </button>
        </div> */}
        {
            (username==='flower2') && <Message/>
        }
      </form>
    </div>
  );
};

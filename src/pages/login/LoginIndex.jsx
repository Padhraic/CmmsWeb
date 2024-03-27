import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { loginIcon } from "@progress/kendo-svg-icons";
import { Input } from "@progress/kendo-react-inputs";
import {
    Form,
    Field,
    FormElement,
    FieldWrapper,
} from "@progress/kendo-react-form";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <React.Fragment>
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <Input id="email" name="email" type="email" autocomplete="email" required="true"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <Link to="/login/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                            </div>
                        </div>
                        <div class="mt-2">
                            <Input id="password" name="password" type="password" autocomplete="current-password" required
                                value={password}
                                onChange={handlePasswordChange} />
                        </div>
                    </div>

                    <div>
                        <Button svgIcon={loginIcon} themeColor={"primary"}>Sign in</Button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link to="/login/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</Link>
                </p>
            </div>
        </React.Fragment>
    );
};

export default Login;
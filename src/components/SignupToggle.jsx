import { useState } from "react";

export default function SignupToggle() {

    const [account, setAccount] = useState(true);


    return (

        <div className="SignupToggle">


            {account == true ? (

                <div class="border-b border-gray-900/10 pb-12">
                    <h3>Login here</h3>
                    <input  type="text" id="email" name="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="input email" />
                    <input type="text" placeholder="input password" />
                    <button>Login</button>
                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={(e) => setAccount(false)}> Don't have account Sign Up</button>
                </div>

            ) : (

                <div class="border-b border-gray-900/10 pb-12">

                    <h3>Sign up here</h3>
                    <input type="text" placeholder="Enter name" />
                    <input type="text" placeholder="Input Email" />
                    <input type="text" placeholder="Input Password" />
                    <button  >Sign Up</button>
                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={(e) => setAccount(true)}>Already have account Logged In</button>
                </div>


            )}

        </div>

    )

}
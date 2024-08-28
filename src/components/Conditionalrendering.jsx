import { useState } from "react";


export default function Conditionalrendering() {
  // const account1 = "login nt";
  const [account, setAccount] = useState(true);

  return (
    <div className="Conditionalrendering">
      {/* <logedIn account={account}/> (*/}

      {/* {account1 == "login" ? <h1>login in</h1> : <h1>not login</h1>} */}
{/* ()? true : false  */}
      {account == true ?( 
        <div>
          <h3>login here</h3>
          <input type="text" placeholder="input email" />
          <input type="text" placeholder="input password" />
          <button>login</button>
          <button onClick={(e) => setAccount(false)}>
            don't have account Sign up
          </button>
        </div>
      ) : (
        <div>
          <h3>sign up here</h3>
          <input type="text" placeholder="enter name" />
          <input type="text" placeholder="input email" />
          <input type="text" placeholder="input password" />
          <button>sign up</button>
          <button onClick={(e) => setAccount(true)}>
            already have account Login
          </button>
        </div>
      )}
      {/* <h3>login</h3> */}
    </div>
  );
}
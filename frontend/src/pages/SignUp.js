import { useState } from "react";
import { useEffect } from "react";
import { SignUpForm } from "../components/SignUpForm";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [added, setAdded] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (added) { // Only update display when a user has been added
            alert("New Account created;");    
            navigate("/");
        }
    });


    return (
        <>
            <SignUpForm setAdded={setAdded} />
        </>
    );
}

export {SignUp};
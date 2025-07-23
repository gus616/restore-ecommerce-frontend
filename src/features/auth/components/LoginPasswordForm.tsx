import {  useRef } from "react";

type LoginPasswordFormProps = {
    authenticator?: string | null;
    onChangeAuthenticator: () => void;
}
const LoginPasswordForm = ({ authenticator, onChangeAuthenticator }: LoginPasswordFormProps) => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log("Login submitted for:", authenticator);
        if (passwordRef.current) {
            console.log("Password:", passwordRef.current.value);
        }
    }
    return (
        <div className="w-full my-5">
            <h2 className="text-2xl font-semibold">Sign in</h2>

            <div className="flex items-center justify-start gap-2 mt-2">
                <span className="text-sm">{authenticator}</span>
                <span className="text-[#2162a1] text-sm cursor-pointer hover:underline"
                    onClick={onChangeAuthenticator}>Change</span>
            </div>

            <form onSubmit={onSubmitHandler}>
                <div className="flex items-start justify-between gap-2 mt-4">
                    <label htmlFor="password" className="text-sm">Password</label>
                    <span className="text-[#2162a1] text-sm cursor-pointer hover:underline">Forgot your password?</span>
                </div>
                <input type="password"
                    id="password"
                    className="w-full p-2 border border-black rounded mt-2 mb-4"
                    placeholder="Enter your password"
                    ref={passwordRef}
                />
                <button className="rounded-full w-full py-2 px-2 bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-sm"
                >Login</button>
            </form>
        </div>
    )
}

export default LoginPasswordForm
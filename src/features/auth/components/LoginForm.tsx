import  { useRef } from 'react'


type LoginFormProps = {
    onSubmit: (authenticator: string) => void;
}
const LoginForm = ({ onSubmit }: LoginFormProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputRef.current) {
            onSubmit(inputRef.current.value);
        }
    }
    return (
        <div className="w-full my-5">
            <h2 className="text-left font-bold text-sm">Enter mobile number or email</h2>
            <form onSubmit={submitHandler}>
                <input type="text"
                    ref={inputRef}
                    className="w-full p-2 border border-black rounded mt-2 mb-4"
                />
                <button className="rounded-full w-full py-2 px-2 bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-sm"
                >Continue</button>
            </form>
        </div>
    )
}

export default LoginForm
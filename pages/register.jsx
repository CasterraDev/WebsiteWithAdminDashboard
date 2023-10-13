import { useState } from "react"
import styles from "../css/register.module.css"
import { useRouter } from "next/router";

export default async function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    useEffect(() => {
        useSes();
    }, [])

    async function useSes() {
        const session = await getSession();
        if (session){
            router.replace('/dashboard');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password || !email){
            setError("All fields must be filled in.");
            return;
        }

        try {
            const userRes = await fetch("api/getUser",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                }),
            });
            const user = await userRes.json();
            console.log(user);
            if (user.user != null){
                setError("Email already used");
                return;
            }
            const res = await fetch("api/register",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                }),
            });

            if (res.ok){
                const form = e.target;
                setError("");
                form.reset();
            }else{
                console.log("Error in registration");
            }
        } catch (error) {
            
        }
    }

    return(
        <>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button>Register</button>
                    {error && <div className={styles.error}>{error}</div>}
                </form>
            </div>
        </>
    )
}
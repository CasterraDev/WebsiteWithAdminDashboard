import styles from "../css/dashboard.module.css"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function Dashboard() {
    const {data: session} = useSession();
    return(
        <>
            {console.log(session?.user)}
            <button onClick={() => {signOut({callbackUrl: "/"})}}>Log Out</button>
        </>
    )
}
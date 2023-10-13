import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user";
import bcrypt from "bcryptjs"
import dbConnect from "../../../libs/dbConnect";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const {email, password} = credentials;
                try {
                    await dbConnect();
                    const user = await User.findOne({email});
                    console.log(user.password);
                    console.log("AUTHUSER: ", user);
                    if (!user){
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch){
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("ERROR: ", error);
                }
                
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            console.log("USER: ", user);
            if (user){
                delete user.password;
                user.password = "";
                token.user = user;
            }
            
            return token
        },
        async session({session, token}) {
            session.id = token.id;
            session.user = token.user;
            return session;
        }
      }
}

const handler = nextAuth(authOptions);

export default handler;
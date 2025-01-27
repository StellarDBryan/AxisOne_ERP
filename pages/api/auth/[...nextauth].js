import NextAuth from "next-auth"; 
import GithubProvider from "next-auth/providers/github"; 
import GoogleProvider from "next-auth/providers/google"; 

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID, 
            clientSecret: process.env.GOOGLE_SECRET,
        }),      
    ], 
    debug: true, 
};

export default NextAuth(authOptions); 
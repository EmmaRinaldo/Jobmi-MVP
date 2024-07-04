import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const API_URL = "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

const handler = NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: "128927012947-1ecprh1n16tse8kjto6q0n24kjl966u1.apps.googleusercontent.com",
            clientSecret: "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",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
            if (!credentials.email || !credentials.password) {
                throw new Error("Invalid Email or Password");
            }
            
            try {
                const res = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
                });
    
                const user = await res.json();
    
                if (!res.ok) {
                throw new Error(user.message || 'Login failed');
                }
    
                return user;
            } catch (error) {
                throw new Error(error.message || 'Login failed');
            }
            },
        }),
    ],
  
    secret: "9f7783743a31cd2a839deb325756ba00",
    
    
    callbacks: {
        async session({ session }) {
            try {
              const res = await fetch(`${API_URL}/users/${session.user.email}`);
              const sessionUser = await res.json();
      
              session.user = { ...session.user, ...sessionUser };
              return session;
            } catch (error) {
              console.log('Error fetching user session:', error);
              return session;
            }
        },

        async signIn({ account, profile }) {
            if (account.provider === "google") {
                try {
                    const res = await fetch(`${API_URL}/users/google-signin`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: profile.email, name: profile.name, picture: profile.picture })
                    });

                    const user = await res.json();

                    if (!res.ok) {
                        throw new Error(user.message || 'Google sign-in a échoué');
                    }

                    return true;

                } catch (err) {
                    console.log("Error checking if user exists: ", err.message);
                    return false;
                }
            }

            return true;
        },
    },
});

export { handler as GET, handler as POST }
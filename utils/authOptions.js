import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      // 1. connect to the database
      // 2. check if the user exists
      // 3. if the user exists, return the user
      // 4. if the user does not exist, create the user
      // 5. return the user
    },
    // modifies the session object
    async session({ session }) {
      // 1. modify the session object
      // 2. return the session object
      
    },
  },
};

export default authOptions;

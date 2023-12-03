export const config = {
    logoCount: 5,

    firebaseConfig: {
        apiKey: "AIzaSyCvfqad3cmf-yPJ2Kr7TEZ8CNXfyv_S9t8",
        authDomain: "videocreation-22f5e.firebaseapp.com",
        projectId: "videocreation-22f5e",
        storageBucket: "videocreation-22f5e.appspot.com",
        messagingSenderId: "807911116834",
        appId: "1:807911116834:web:3c7e4624c8bc493204fa7b",
        measurementId: "G-C2CFK5RCGZ"
    },

    servers: {
        iceServers: [
            {
                urls: ['stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },

    DEV: "development" === 'development',
}


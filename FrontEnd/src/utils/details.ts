export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface OtpData {
    email: string;
    otp: string;
}

export interface CrimeData {
    title: string;
    description: string;
    location: string;
    date: string;
}

export interface CommentData {
    crimeId: string;
    comment: string;
}

export interface FileData {
    crimeId: string;
    file: File;
}

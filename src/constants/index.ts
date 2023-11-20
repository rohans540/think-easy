//BASE URL
export const BASE_URL = `https://frontend-test-be.stage.thinkeasy.cz/`

//UI Routes
export const SIGNUP_ROUTE = '/signup';
export const LOGIN_ROUTE = '/';
export const POSTS_ROUTE = '/posts';

//API Routes
export const AUTH_SIGNUP = 'auth/signup';
export const AUTH_LOGIN = 'auth/login';
export const AUTH_REFRESH = 'auth/refresh-token';
export const POSTS = `posts`;
export const POSTS_DETAILS = (id: string) => `/posts/${id}`
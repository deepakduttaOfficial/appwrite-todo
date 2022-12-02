import { Client, Account, Databases } from "appwrite";
const { REACT_APP_API_END_POINT, REACT_APP_PROJECT_ID } = process.env;

const client = new Client()
  .setEndpoint(REACT_APP_API_END_POINT) // Your API Endpoint
  .setProject(REACT_APP_PROJECT_ID);

export const account = new Account(client);

// Database
export const databases = new Databases(client);

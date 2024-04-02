import { UserType } from "../models/user";

export async function registerUser(user: UserType) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user, flag:"register"}),
    });

    const res = await response.json();
    if (res === false) {
      return false;
    }
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function loginUser(user: UserType) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user, flag: "login"}),
    });

    const res = await response.json();
    if (res === false) {
      return false;
    }
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
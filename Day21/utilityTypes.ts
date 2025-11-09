
// Partial<T>
interface User {
  id: number;
  name: string;
}

const updateUser = (user: Partial<User>) => {
  // user.id and user.name are optional
  console.log(user);
};

updateUser({ name: "Alice" });


// Pick
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;

const u: UserPreview = { id: 1, name: "Dave" };

// Omit
interface User {
  id: number;
  name: string;
  email: string;
}

type NoEmail = Omit<User, "email">;

const user: NoEmail = { id: 1, name: "Eve" };


// Record
type Role = "admin" | "user";

const roles: Record<Role, string> = {
  admin: "Has full access",
  user: "Has limited access",
};


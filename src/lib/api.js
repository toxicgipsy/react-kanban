export async function loginUser({ login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Не правильно ввел логин и пароль");
  }

  const data = await response.json();
  return data;
}

export async function registrationUser({ name, login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Не могу найти по ip");
  }

  const data = await response.json();
  return data;
}

export async function getTasks(token) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Не могу подтянуть список задач, полистай рилсы");
  }

  const data = await response.json();
  return data;
}

export async function postTasks(token, tasks) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "Post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      tasks,
    }),
  });

  if (!response.ok) {
    throw new Error("Не могу добавить задачу, полистай пока рилсы");
  }

  const data = await response.json();
  return data;
}

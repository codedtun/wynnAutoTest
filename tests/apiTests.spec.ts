import { request } from "@playwright/test";
import test, { expect } from "../base_fwk/fixtures/baseTest"

test.describe.parallel('API Test', () => {
  const apiUrl = "https://jsonplaceholder.typicode.com"

  test("API POST reqres - Create new post", async ({ request }) => {
    const response = await request.post(`${apiUrl}/posts`, {
      data: {
        "userId": 5,
        "id": 46,
        "title": "aut quo modi neque nostrum ducimus",
        "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
      },
    });

    expect(response.status()).toBe(201)
  });

  test("API POST reqres - Create new User", async ({ request }) => {
    const response = await request.post(`${apiUrl}/posts`, {
      data: {
        "userId": 5,
        "id": 46,
        "title": "aut quo modi neque nostrum ducimus",
        "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
      },
    });

    expect(response.status()).toBe(201)
  });

  test("API GET reqres - Create new User", async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts`, {
      data: {
        "userId": 5,
        "id": 46,
        "title": "aut quo modi neque nostrum ducimus",
        "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
      },
    });

    expect(response.status()).toBe(200)
  });

  test("API GET reqres - Get post with wrong endpoint", async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts/201`, {
      data: {
        "userId": 5,
        "id": 46,
        "title": "aut quo modi neque nostrum ducimus",
        "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
      },
    });

    expect(response.status()).toBe(404)
  });

  test("API PUT reqres - update title for user 1", async ({ request }) => {
    const response = await request.put(`${apiUrl}/posts/1`, {
      data: {
        "userId": 1,
        "id": 1,
        "title": "just a put test",
        "completed": false
      },
    });

    expect(response.status()).toBe(200)
  });

  test("API PUT reqres - update wrong details for user", async ({ request }) => {
    const response = await request.put(`${apiUrl}/post/1`, {
      data: {
        "userId": 1,
        "id": 1,
        "title": "just a put test",
      },
    });

    expect(response.status()).toBe(404)
  });

  test("API Delete reqres - Delete user 1", async ({ request }) => {
    const response = await request.delete(`${apiUrl}/posts/1`, {
      data: {
        "userId": 1,
        "id": 1,
        "title": "just a put test",
      },
    });

    expect(response.status()).toBe(200)
  });

});

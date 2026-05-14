import axios from "axios";

export default async function Log(stack, level, packageName, message) {
  const body = {
    stack: stack,
    level: level,
    package: packageName,
    message: message,
  };

  const headers = { "Content-Type": "application/json" };
  headers.Authorization =
    "Bearer $eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmluY2Uua3VtYXIyMzVAbHB1LmluIiwiZXhwIjoxNzc4NzU2ODQ1LCJpYXQiOjE3Nzg3NTU5NDUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlYjNiMGVhOS05MjlmLTQzOTEtOGUzMS03OTcwMjNjNTM5ZjUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmluY2Uga3VtYXIiLCJzdWIiOiIxZDRiODJjNC00YWIzLTQyYzQtODhlZS0yYzY3ZmY2M2I5YzIifSwiZW1haWwiOiJwcmluY2Uua3VtYXIyMzVAbHB1LmluIiwibmFtZSI6InByaW5jZSBrdW1hciIsInJvbGxObyI6IjEyMzA4NDUzIiwiYWNjZXNzQ29kZSI6IlRSdlpXcSIsImNsaWVudElEIjoiMWQ0YjgyYzQtNGFiMy00MmM0LTg4ZWUtMmM2N2ZmNjNiOWMyIiwiY2xpZW50U2VjcmV0Ijoia3BlZk1qcWFIY2FBSnVBQyJ9.D6zZsDvHVF8w5pg80KEDW9JY6MJYXTUutpd0Eedg-0c";

  try {
    const res = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      body,
      { headers },
    );
    return res.data;
  } catch (err) {
    console.error(
      "Failed to send log:",
      err && err.message ? err.message : err,
    );
    throw err;
  }
}

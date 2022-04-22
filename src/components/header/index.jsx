import "./header.style.scss";

export default function Header() {
  return (
    <div className="header">
      <h1>Todo App!</h1>
      <a href="https://github.com/talialy">
        {" "}
        <ion-icon name="logo-github"></ion-icon>{" "}
      </a>
    </div>
  );
}

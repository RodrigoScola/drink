import React from "react";
export const CreateAccountComponent = () => {
  return (
    <div className="createAccount">
      <h1>Criar a sua Conta</h1>

      <ul>
        <li>
          <input
            class="form-control"
            type="email"
            placeholder="seuemailaqui@emali.com"
          ></input>
        </li>
        <li>
          <input
            class="form-control input-group-sm mb-3"
            type="password"
            placeholder="senha123234"
          ></input>
        </li>
        <button className="btn btn-secondary">Criar sua Conta</button>
      </ul>
    </div>
  );
};

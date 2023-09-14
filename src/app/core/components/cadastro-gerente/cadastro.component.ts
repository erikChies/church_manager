import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  nome?: string;
  email?: string;
  senha?: string;
  repetirSenha?: string;

  component = LoginComponent;

  //constructor() { }

  ngOnInit() { }


  onSubmit() {
    // Implemente a lógica de validação e registro de usuário aqui
    if (this.senha !== this.repetirSenha) {
      // As senhas não coincidem, exiba uma mensagem de erro
      console.error("As senhas não coincidem.");
    } else {
      // Faça algo com os valores do formulário (por exemplo, enviar para um serviço de registro)
      console.log("Nome:", this.nome);
      console.log("E-mail:", this.email);
      console.log("Senha:", this.senha);
    }
  }
}
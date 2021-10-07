# desafio-1STi
Desafio para a vaga de desenvolvedor backend pleno para a 1STi


# Como baixar

- Clonar esse repositório
- Baixar o docker e o docker-compose, se não já tiverem
- Com o docker e o docker-compose instalados, rodar dentro do diretório: docker-compose up -d
- Por default, a api está escutando em localhost:3000. O banco de dados pode ser inspecionado (pelo dbeaver, por exemplo) fazendo a conexão em localhost:5000. As credenciais são as default do postgres, com a senha= postgres (todas as credenciais estão em src/app.module.ts)
- Para encerrar a execução, basta executar docker-compose down

# Enviar requests

- Criar usuario: 

Enviar uma request POST para localhost:3000/user, com o corpo em json seguindo o seguinte formato:

{
    "name" : "Zé das Couves",
    "cpf" : "99999999999",
    "phoneNumber": "21976768473",
    "cep": "22290010",
    "state": "RJ",
    "city": "Rio de Janeiro",
    "address": "Rua São Manuel",
    "number": "10",
    "district": "Botafogo"
}

- Listagem de usuários:

Request GET para o mesmo endereço. O retorno é um vetor de objetos ou uma mensagem de erro.

- Pegar um usuário:

GET para localhost:3000/user/${cpf do usuario}. Retorna um objeto representando o usuário ou uma mensagem de erro.

- Update de usuário:

PATCH para localhost:3000/user/${cpf do usuario}, com o corpo contendo um objeto com um ou mais atributos do objeto da interação criar usuário. Retorna uma mensagem caso tenha sucesso ou caso falhe.

- Deletar um usuário:

DELETE para localhost:3000/user/${cpf do usuario}. Retorna uma mensagem caso tenha sucesso ou caso falhe.

- Consulta de cep:

GET para localhost:3000/cep/${cep a ser consultado}. Retorna as informações relacionadas ao cep.
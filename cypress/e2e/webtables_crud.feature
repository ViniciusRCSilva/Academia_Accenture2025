# utf-8
# language: pt

Funcionalidade: CRUD na página Web Tables

Cenário: Adicionar, editar e excluir um registro
Dado que o usuário acesse o portal Web Tables
E que o usuário abra o formulário de cadastro
E que o usuário preencha todos os campos obrigatórios com dados válidos
Quando o usuário submeter o formulário
Então deve validar que os dados aparecem corretamente na tabela
E editar o cadastro com novos dados válidos
E deve validar que as alterações aparecem corretamente na tabela
E excluir o cadastro
E deve validar que os dados não aparecem mais na tabela
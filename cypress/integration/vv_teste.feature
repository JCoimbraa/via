Feature: Pesquisa

Scenario: Incluir uma nova Tarefa
    Given que eu acesse a página da VV Test
    And acesse o menu "Pesquisa – QA"
    When eu preencher todos os campos obrigatórios
    Then deve ser direcionado para uma página de sucesso

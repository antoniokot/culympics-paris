# Classes de Equivalência

> Def: Uma classe de equivalência representa um conjunto de entados `válidos` e `inválidos` para uma condição de entrada

## Como definir as classes de equivalência?

1. Identificar as classes de equivalência

  - Procurar as condições de entrada, ou seja, as regras que definem como deve ser a entrada

  - Diretrizes: 

    Se uma condição de entrada especifica uma `faixa de valores`, uma classe de equivalência válida e duas inválidas são definidas

    Se uma condição de entrada especifica um `membro de um conjunto` ou é `lógica`, uma classe de equivalência válida e uma inválida são definidas.

  - Exemplo: 
  ```
  Entrada: campo idade deve aceitar valores de 1 a 99 anos.
  Faixa de valor: 1 a 99
  Classe válida: números de 1 a 99
  Classe inválida: números menores que 1
  Classe inválida: números maiores que 99
  ```

2. Definir os casos de teste

  - Enumerar as classes de equivalência
  - Definir pelo menos um caso de teste para as classes válidas
  - Definir pelo menos um caso de teste para cada classe inválida

  - Importante: na prática procuramos definir apenas um caso de teste   para cada classe válida ou inválida porque queremos minimizar a quantidade de casos de teste.  Entretanto, nem sempre isso é possívels

  - Exemplo:

  ```
  a) Começar com uma letra (condição lógica)
    - Classe válida: começa com letra
    - Classe inválida: não começa com letra
  b) Conter letras e dígitos após a primeira letra (condição lógica):
    - Classe válida: contém somente letras e dígitos após primeira letra
    - Classe inválida: contém outros caracteres que não letras e dígitos após primeira letra
  c) Ter de 4 a 8 caracteres (faixa de valores):
    - Classe válida: senha de 4 a 8 caracteres
    - Classe inválida: senha com menos de 4 caracteres
    - Classe inválida: senha com mais de 8 caracteres
  ``` 

# Análise do Valor Limite

> Def: Análise do Valor Limite é uma técnica de teste que explora os limites dos valores para preparar os casos de teste

## Como aplicar a Análise do Valor Limite?

1. Se uma condição de entrada específica define uma faixa de valores limitada por a e b, casos de teste devem ser projetados com valores a (limite inferior), b (limite superior) e imediatamente acima e abaixo do intervalo  a..b

  - Exemplo: 

  ```
  Entrada: nota do aluno deve estar no intervalo de 0,0 a 10,0
  -0,1
  0,0
  10,0
  10,1
  ```

2. Aplique os valores limites nas saídas geradas pelo programa

  - Exemplo: relatório para mostrar a quantidade de funcionários que ganham até R$ 1000,00, acima de R$1000,00 até R$ 3000,00, acima de R$ 3000,0 0 até R$ 5000,00 e acima de R$ 5000,00

  ```
  Entrada: cadastro com pelo menos um funcionário para cada salário:
  R$ 0,01
  R$ 1000,00
  R$ 1000,01
  R$ 3000,00
  R$ 3000,01
  R$ 5000,00
  R$ 5000,01
  ```

3. Se uma estrutura de dados interna do sistema tem identificados seus limites, projete casos de teste para exercitar a estrutura de dados em seu limite

  - Exemplo: ma turma aceita no máximo 30 alunos matriculados.

  ```
  quantidade de alunos a serem cadastrados
  30
  31
  ```
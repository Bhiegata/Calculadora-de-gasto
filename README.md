# Calculadora de Gastos

Uma aplicação web simples para controle de gastos pessoais, permitindo categorizar e somar despesas em diferentes áreas.

## 📋 Funcionalidades

- Registro de gastos por categoria
- Categorias disponíveis: Alimentação, Transporte, Lazer e Outros
- Cálculo automático do total de gastos
- Validação de valores negativos
- Formatação automática dos valores em Reais (R$)

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## 💻 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/Bhiegata/Calculadora-de-gasto.git
```

2. Abra o arquivo `index.html` em seu navegador

3. Para registrar um gasto:
   - Digite o valor no campo "Digite o valor do gasto"
   - Selecione a categoria apropriada no menu dropdown
   - Clique no botão "Adicionar"

## 🔍 Estrutura do Projeto

```
Calculadora-de-gasto/
│
├── index.html      # Estrutura da página
├── index.css       # Estilos da aplicação
├── script.js       # Lógica da calculadora
└── README.md       # Documentação
```

### 📝 Detalhes da Implementação

#### Matriz de Gastos
O projeto utiliza uma matriz para armazenar os gastos:
```javascript
const matrizGastos = [
    ["Alimentacao", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0]
]
```

#### Funções Principais
- `adicionarGasto()`: Função principal que processa a adição de novos gastos
- `atualizarInterface()`: Atualiza os valores exibidos na tela
- `formataMoeda()`: Formata os valores para o padrão brasileiro (R$ X,XX)

## ⚠️ Validações

O sistema inclui as seguintes validações:
- Não aceita valores negativos
- Atualiza automaticamente o total
- Limpa o campo após cada adição

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## ✒️ Autor

* **Bruno** - *Desenvolvimento* - [Bhiegata](https://github.com/Bhiegata)

## 🎯 Status do Projeto

🚧 Em desenvolvimento 🚧

---
⌨️ com ❤️ por [Bhiegata](https://github.com/Bhiegata) 😊
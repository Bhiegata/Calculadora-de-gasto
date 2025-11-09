# Calculadora de Gastos

Uma aplicação web simples para controle de gastos pessoais, permitindo categorizar e somar despesas em diferentes áreas.

## 📋 Funcionalidades

# Calculadora de Gastos

Uma aplicação web simples para controle de gastos pessoais. O projeto usa módulos ES (pasta `js/`) com classes para modelar categorias e utilitários para atualizar a interface.

## 📋 Funcionalidades

- Registrar gastos por categoria
- Categorias: Alimentação, Transporte, Lazer e Outros
- Cálculo automático do total de gastos
- Validações básicas (valores inválidos/negativos)
- Formatação de valores no padrão brasileiro (R$ 0,00)

## 🚀 Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+), módulos (import/export)

## 💻 Como executar (rápido)

Opções:

1) Abrir direto no navegador

- Clique duas vezes em `index.html` ou abra com o navegador.
- Observação: alguns navegadores podem bloquear imports de módulos via `file://`. Se o app não carregar, use a opção 2.

2) Rodar um servidor local (recomendado)

Abra o PowerShell na pasta do projeto e rode (caso tenha Python instalado):

```powershell
Set-Location 'c:\Users\bruno\OneDrive\Área de Trabalho\Pessoal\Bruno\Programação\Ebac\Exercício - Front-end\Calculadora de gasto'
python -m http.server 8000
```

Depois, abra no navegador: `http://localhost:8000`

Ou, se preferir usar o Live Server do VS Code, instale a extensão e escolha "Open with Live Server".

## 🔍 Estrutura do projeto (atual)

```
Calculadora-de-gasto/
│
├── index.html            # Página principal
├── index.css             # Estilos
├── js/
│   ├── app.js            # Entrada: manipula formulário e eventos
│   ├── classes.js        # Classes: Categoria, ListaGastoPorCategoria
│   └── utils.js          # Funções utilitárias (formatação, atualizar interface)
└── README.md
```

## 📝 Implementação (resumo)

- classes.js
    - `Categoria` — encapsula nome e valor; método `adicionarValor(valor)` soma o valor (parseFloat internamente).
    - `ListaGastoPorCategoria` — armazena múltiplas `Categoria`, permite obter por nome e calcular total.

- utils.js
    - `valorNegativo(valor)` — valida negativo
    - `atualizarInterface(gastosPorCategoria)` — atualiza os elementos do DOM com os valores atuais

- app.js
    - Manipula o envio do formulário, converte o valor para número, valida, adiciona o valor à categoria e chama `atualizarInterface`.

## ⚠️ Validações e comportamento

- Não são aceitos valores negativos.
- Campo deve conter número válido; caso contrário aparece alerta.
- Após adicionar, o formulário é resetado.

## 🐛 Solução de problemas comuns

- Indicador "U" nas abas do VS Code: significa arquivo "Untracked" pelo Git. Rode `git status` para confirmar. Para remover, adicione/commit ou ignore pelo `.gitignore`.
- Lentidão no VS Code / copiar/colar difícil: projetos dentro do OneDrive podem ficar lentos por sincronização. Recomenda-se mover o projeto para uma pasta local (ex.: `C:\Projetos\`) enquanto desenvolve.
- Módulos não carregam ao abrir `index.html`: rode um servidor local (veja seção Como executar).

## ✅ Testes rápidos (o que checar)

1. Abra `index.html` via servidor local.
2. Abra DevTools (F12) → Console: não deve haver erros de import ou TypeError.
3. Insira `12.50`, selecione `Alimentacao` e clique em Adicionar — o parágrafo `Alimentacao` e `Total` devem atualizar para `R$ 12,50`.

## 🤝 Contribuindo

1. Fork
2. Branch (`git checkout -b feature/minha-feature`)
3. Commit (`git commit -m "Minha feature"`)
4. Push e Pull Request

## 📄 Licença

MIT — veja `LICENSE` (se presente)

## ✒️ Autor

**Bruno** — [Bhiegata](https://github.com/Bhiegata)

## 🎯 Status

Em desenvolvimento

---

⌨️ com ❤️ por [Bhiegata](https://github.com/Bhiegata)
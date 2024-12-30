# Projeto Site Hora do Dia

Um site simples e interativo que exibe a hora atual (sem os minutos) junto com uma imagem que representa o período do dia, como manhã, tarde ou noite.

## 🌟 Funcionalidades

- Exibe a hora atual (com exceção dos minutos).
- Mostra uma imagem que representa o horário acessado:
  - **Manhã**: Sol ou céu claro.
  - **Tarde**: Tons quentes representando o pôr do sol.
  - **Noite**: Céu estrelado ou escuro.
- Design responsivo e estilizado com **HTML**, **CSS** e **JavaScript**.

## 🖼️ Pré-visualização

![Imagem do sistema](/assets/images/image.png)

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura do site.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Lógica para identificar a hora atual e trocar as imagens.

## 📂 Estrutura do Projeto

- **index.html**: Página principal do projeto.
- **assets**: Pasta que contém os arquivos estáticos:
  - **css/styles.css**: Arquivo de estilos.
  - **images**: Pasta com imagens representando os períodos do dia (manhã, tarde, noite).
- **js/script.js**: Arquivo que contém a lógica para exibir a hora e as imagens correspondentes.

## 🛠️ Como Configurar e Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Brunotorresdev/site-horadodia.git
   cd site-horadodia
   ```
2. **Abra o arquivo `index.html` no navegador**:  
   Você pode abrir diretamente no navegador ou usar uma extensão como o **Live Server** para um ambiente de desenvolvimento.

3. **Personalize as imagens e textos**:  
   Substitua os arquivos da pasta `/assets/images` pelas suas próprias imagens para personalizar o projeto.

## 🎨 Customizações

- **Alterar os horários**:  
  No arquivo `script.js`, você pode personalizar os horários em que as imagens mudam. Por exemplo:

  ```javascript
  if (hora >= 0 && hora < 12) {
    // Imagem da manhã
  } else if (hora >= 12 && hora < 18) {
    // Imagem da tarde
  } else {
    // Imagem da noite
  }
  ```

- **Adicionar novos estilos**:  
  No arquivo `styles.css`, você pode personalizar as cores, fontes e o layout da página.

## 🔗 Contribuição

Se você quiser contribuir com melhorias, sinta-se à vontade para abrir um pull request ou relatar um problema na aba **Issues** do repositório.

---

✨ Projeto desenvolvido como prática de HTML, CSS e JavaScript. Divirta-se explorando e criando!

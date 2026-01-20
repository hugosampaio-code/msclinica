# MS Clínica - Assets Directory

## Imagens Necessárias

Este diretório deve conter as seguintes imagens para o website:

### 1. Logo da Clínica
- **Nome:** logo.png ou logo.svg
- **Descrição:** Logo oficial da MS Clínica
- **Dimensões recomendadas:** 200x60px (aproximadamente)
- **Formato:** PNG com fundo transparente ou SVG

### 2. Hero Background
- **Nome:** hero-bg.jpg
- **Descrição:** Imagem de fundo para a secção hero (fullscreen)
- **Dimensões recomendadas:** 1920x1080px ou superior
- **Formato:** JPG de alta qualidade
- **Sugestão:** Imagem profissional da clínica, ambiente elegante, ou imagem relacionada com saúde/bem-estar

### 3. Sobre Nós
- **Nome:** sobre-clinica.jpg
- **Descrição:** Imagem da clínica (exterior ou interior)
- **Dimensões recomendadas:** 800x600px
- **Formato:** JPG
- **Sugestão:** Foto das instalações, receção, ou sala de espera

### 4. Open Graph Image
- **Nome:** og-image.jpg
- **Descrição:** Imagem para partilha em redes sociais (Open Graph)
- **Dimensões recomendadas:** 1200x630px
- **Formato:** JPG
- **Sugestão:** Imagem com logo e slogan da clínica

### 5. Favicon
- **Nome:** favicon.ico
- **Descrição:** Ícone do website para o browser
- **Dimensões:** 32x32px, 16x16px
- **Formato:** ICO ou PNG

### 6. Ícones de Especialidades (Opcional)
Se preferir usar imagens próprias em vez dos ícones Font Awesome:
- medicina-estetica.png
- medicina-dentaria.png
- terapias.png
- medicina-integrativa.png

## Instruções de Utilização

### Para substituir os placeholders por imagens reais:

1. **Hero Background:**
   - Adicionar a imagem hero-bg.jpg neste diretório
   - No ficheiro `css/styles.css`, na secção `.hero`, substituir o gradient por:
   ```css
   background-image: url('../assets/hero-bg.jpg');
   background-size: cover;
   background-position: center;
   ```

2. **Sobre Nós:**
   - Adicionar a imagem sobre-clinica.jpg neste diretório
   - No ficheiro `index.html`, na secção "Sobre Nós", substituir o div `.image-placeholder` por:
   ```html
   <img src="assets/sobre-clinica.jpg" alt="MS Clínica instalações">
   ```

3. **Logo:**
   - Adicionar logo.png ou logo.svg neste diretório
   - No ficheiro `index.html`, substituir o elemento `.logo` por:
   ```html
   <a href="#home" class="logo">
       <img src="assets/logo.png" alt="MS Clínica" height="50">
   </a>
   ```

4. **Favicon:**
   - Adicionar favicon.ico neste diretório
   - No `<head>` do index.html, adicionar:
   ```html
   <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
   ```

5. **Open Graph Image:**
   - Adicionar og-image.jpg neste diretório
   - A meta tag já está configurada no index.html

## Nota sobre Imagens

Todas as imagens devem ser:
- **Otimizadas** para web (comprimidas sem perder qualidade)
- **Profissionais** e de alta qualidade
- **Consistentes** com a identidade visual da clínica
- **Adequadas** para uso em diferentes dispositivos (responsivas)

## Ferramentas Recomendadas para Otimização

- TinyPNG (https://tinypng.com/) - Compressão de PNG e JPG
- Squoosh (https://squoosh.app/) - Otimização de imagens
- SVGOMG (https://jakearchibald.github.io/svgomg/) - Otimização de SVG

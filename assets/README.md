# MS Clínica - Assets & Images Guide

Este documento descreve as imagens necessárias para o website da MS Clínica e onde devem ser colocadas.

## 📁 Estrutura de Pastas Recomendada

```
assets/
├── logo/
│   ├── logo-full.png          # Logo completo MS Clínica
│   ├── logo-white.png         # Logo branco para fundo escuro
│   └── favicon.ico            # Favicon do site
├── hero/
│   ├── hero-home.jpg          # Imagem hero da página inicial
│   ├── hero-sobre.jpg         # Imagem hero página Sobre
│   ├── hero-contactos.jpg     # Imagem hero página Contactos
│   └── hero-servicos.jpg      # Imagem hero páginas de serviços
├── clinica/
│   ├── fachada.jpg            # Fachada da clínica
│   ├── recepcao.jpg           # Área de receção
│   ├── sala-tratamento-1.jpg  # Sala de tratamento
│   ├── consultorio.jpg        # Consultório privado
│   └── laboratorio.jpg        # Laboratório de análises
├── equipa/
│   ├── medico-estetica.jpg    # Médico(a) de Medicina Estética
│   ├── medico-dentaria.jpg    # Médico(a) Dentista
│   ├── fisioterapeuta.jpg     # Fisioterapeuta
│   ├── nutricionista.jpg      # Nutricionista
│   ├── psicologo.jpg          # Psicólogo(a)
│   └── medico-integrativa.jpg # Médico(a) Medicina Integrativa
├── servicos/
│   ├── medicina-estetica/     # Imagens dos 9 serviços
│   ├── medicina-dentaria/     # Imagens dos 10 serviços
│   ├── terapias/              # Imagens dos 7 serviços
│   └── medicina-integrativa/  # Imagens dos 6 serviços
├── blog/
│   └── artigo-*.jpg           # Imagens dos artigos do blog
├── antes-depois/              # Galeria antes/depois (com consentimento)
├── og-image.jpg               # Open Graph (1200x630px)
└── README.md                  # Este arquivo
```

## 📐 Especificações Principais

### Logo
- **logo-full.png**: 500x200px, fundo transparente, PNG
- **logo-white.png**: 500x200px, versão branca
- **favicon.ico**: 32x32px, ICO format

### Hero Images
- **Dimensões**: 1920x800px mínimo
- **Formato**: JPG, qualidade 80-90%
- **Foco**: Ambiente da clínica, conforto, tecnologia

### Imagens da Clínica
- **Dimensões**: 1200x800px
- **Formato**: JPG, qualidade 80-85%
- **Foco**: Equipamentos, ambiente acolhedor, higiene

### Imagens da Equipa
- **Dimensões**: 800x800px (quadradas)
- **Formato**: JPG, qualidade 85%
- **Foco**: Retrato profissional com bata/uniforme

### Imagens de Serviços
- **Dimensões**: 800x600px
- **Formato**: JPG, qualidade 85%
- **Foco**: Equipamento, procedimento, resultados

### Blog
- **Dimensões**: 1200x675px (16:9)
- **Formato**: JPG, qualidade 80%

### Open Graph
- **Dimensões**: 1200x630px
- **Formato**: JPG, qualidade 85%
- **Foco**: Logo + tagline ou imagem representativa


## 🎨 Diretrizes Visuais

### Cores da Marca MS Clínica
- **Dourado**: #D4A84B (cor primária, elegância)
- **Branco**: #FFFFFF (pureza, limpeza)
- **Cinza Escuro**: #2D2D2D (contraste, profissionalismo)
- **Cinza Claro**: #F5F5F5 (fundo, suavidade)

### Estilo Fotográfico
- **Tom**: Profissional, acolhedor, elegante
- **Iluminação**: Natural ou suave, evitar sombras duras
- **Composição**: Limpa, organizada, minimalista
- **Cores**: Tons neutros com acentos dourados

### O Que Mostrar
✅ **SIM**:
- Instalações limpas e modernas
- Equipamento de última geração
- Profissionais em ambiente clínico
- Ambientes acolhedores
- Detalhes de qualidade

❌ **NÃO**:
- Imagens de stock genéricas demais
- Fotos desfocadas ou de baixa qualidade
- Ambientes desorganizados
- Iluminação inadequada
- Pacientes sem consentimento

## 📝 Notas Importantes

### Direitos de Imagem
- Todas as imagens devem ter os direitos de uso apropriados
- Imagens de pacientes requerem consentimento por escrito
- Fotos da equipa requerem autorização dos profissionais
- Se usar stock photos, verificar licença comercial

### Otimização
- Comprimir imagens antes do upload (TinyPNG, ImageOptim)
- Usar formato WebP quando possível (fallback para JPG)
- Incluir alt text descritivo em todas as imagens
- Lazy loading para melhor performance

### SEO
- Nomes de arquivo descritivos: `botox-tratamento.jpg` não `IMG_1234.jpg`
- Alt text descritivo e relevante
- Tamanho otimizado para carregamento rápido

## 🔄 Processo de Substituição dos Placeholders

### Para substituir os placeholders por imagens reais:

1. **Hero Background:**
   - Adicionar a imagem hero-home.jpg no diretório assets/hero/
   - No ficheiro `css/styles.css`, na secção `.hero`, substituir o gradient por:
   ```css
   background-image: url('../assets/hero/hero-home.jpg');
   background-size: cover;
   background-position: center;
   ```

2. **Sobre Nós:**
   - Adicionar a imagem no diretório assets/clinica/
   - Nos ficheiros HTML, substituir o div `.image-placeholder` por:
   ```html
   <img src="assets/clinica/fachada.jpg" alt="MS Clínica instalações">
   ```

3. **Logo:**
   - Adicionar logo.png no diretório assets/logo/
   - Substituir o elemento `.logo` por:
   ```html
   <a href="index.html" class="logo">
       <img src="assets/logo/logo-full.png" alt="MS Clínica" height="50">
   </a>
   ```

4. **Favicon:**
   - Adicionar favicon.ico no diretório assets/logo/
   - No `<head>` dos ficheiros HTML, adicionar:
   ```html
   <link rel="icon" type="image/x-icon" href="assets/logo/favicon.ico">
   ```

5. **Equipa:**
   - Adicionar fotos da equipa no diretório assets/equipa/
   - Substituir os placeholders nas páginas sobre.html e páginas de serviços

6. **Serviços:**
   - Adicionar imagens dos serviços nos subdirectórios correspondentes
   - Substituir placeholders nas páginas de cada categoria de serviço

7. **Blog:**
   - Adicionar imagens dos artigos no diretório assets/blog/
   - Substituir placeholders em blog.html e blog-post.html

## Ferramentas Recomendadas para Otimização

- **TinyPNG** (https://tinypng.com/) - Compressão de PNG e JPG
- **Squoosh** (https://squoosh.app/) - Otimização de imagens
- **SVGOMG** (https://jakearchibald.github.io/svgomg/) - Otimização de SVG
- **ImageOptim** (Mac) ou **FileOptimizer** (Windows) - Otimização local

## 📞 Contacto

Para questões sobre assets ou para enviar novas imagens:
- **Email**: geral@msclinica.com
- **Telefone**: +351 220 925 250

---

**Última atualização**: Janeiro 2024  
**Versão**: 1.0

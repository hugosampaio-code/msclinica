# MS Clínica - Elementor Pro Templates

Este diretório contém templates JSON compatíveis com Elementor Pro para facilitar a importação e construção do website MS Clínica.

## 📋 Conteúdo

### Configurações Globais
- **global-settings.json** - Configurações de cores da marca e tipografia

### Templates Principais
- **header-template.json** - Template do cabeçalho com logo, menu de navegação e botão CTA
- **footer-template.json** - Template do rodapé com 4 colunas (logo, links, especialidades, contactos)
- **homepage-template.json** - Template completo da página principal com todas as secções

### Secções Individuais (pasta `/sections/`)
- **hero-section.json** - Secção hero com título, subtítulo e botões de ação
- **about-section.json** - Secção "Sobre Nós" com texto e imagem
- **services-section.json** - Secção de especialidades com 4 cards
- **features-section.json** - Secção de diferenciais com 4 cards
- **testimonials-section.json** - Secção de testemunhos com 3 depoimentos
- **contact-form-section.json** - Formulário de marcação de consulta

## 🎨 Cores da Marca

| Cor | Código Hexadecimal | Uso |
|-----|-------------------|-----|
| Ouro/Dourado (Primary) | `#D4A84B` | Botões, destaques, ícones |
| Ouro Escuro (Primary Dark) | `#B89239` | Hover states |
| Branco | `#FFFFFF` | Fundo, texto sobre escuro |
| Cinza Escuro | `#2D2D2D` | Títulos, texto principal |
| Cinza | `#333333` | Fundo escuro |
| Cinza Claro (Background) | `#F5F5F5` | Fundo de secções alternadas |
| Texto | `#555555` | Texto de corpo |

## 📖 Como Importar os Templates

### Passo 1: Instalar Elementor Pro
1. Certifique-se de que tem o WordPress instalado
2. Instale e ative o plugin **Elementor** (versão gratuita)
3. Instale e ative o plugin **Elementor Pro** (versão paga necessária para Theme Builder e Forms)

### Passo 2: Importar Configurações Globais
1. Vá para **Elementor > Site Settings**
2. Navegue até **Design System > Colors**
3. Abra o ficheiro `global-settings.json`
4. Configure manualmente as cores conforme especificado no ficheiro
5. Em **Design System > Typography**, configure as fontes

### Passo 3: Importar Templates
1. Vá para **Templates > Saved Templates** no WordPress Admin
2. Clique em **Import Templates**
3. Selecione o ficheiro JSON que deseja importar
4. Clique em **Import Now**

**Ordem recomendada de importação:**
1. `global-settings.json` (configurar manualmente)
2. `header-template.json`
3. `footer-template.json`
4. Secções individuais (opcional)
5. `homepage-template.json`

### Passo 4: Configurar Header e Footer no Theme Builder
1. Vá para **Elementor > Theme Builder**
2. Clique em **Add New** > **Header**
3. Selecione o template importado `header-template`
4. Configure as condições de exibição (ex: "Entire Site")
5. Repita o processo para o Footer

### Passo 5: Criar Página Principal
1. Crie uma nova página chamada "Home"
2. Edite com Elementor
3. Importe o template `homepage-template.json` ou adicione as secções individuais
4. Personalize o conteúdo conforme necessário

## 🛠️ Personalização

### Editar Cores
Após importar, pode ajustar as cores globais em:
- **Elementor > Site Settings > Design System > Colors**

### Editar Tipografia
Ajuste as fontes em:
- **Elementor > Site Settings > Design System > Typography**

### Editar Conteúdo
Todos os textos, imagens e links podem ser editados diretamente no editor visual do Elementor.

### Formulário de Contacto
O formulário na secção "Marcar Consulta" utiliza o widget **Form** do Elementor Pro. Para configurar:
1. Selecione o widget Form
2. Em **Actions After Submit**, configure:
   - Email: `geral@msclinica.com`
   - Email Subject: "Nova Marcação de Consulta"
3. Ajuste os campos conforme necessário

## 📱 Responsividade

Todos os templates incluem configurações responsivas para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

Para ajustar, use o modo responsivo do Elementor (ícones de dispositivo no painel inferior).

## 🔗 Widgets Utilizados

### Widgets Nativos do Elementor (Gratuito)
- Heading
- Text Editor
- Button
- Image
- Icon Box
- Divider
- Spacer
- Icon List
- Social Icons

### Widgets do Elementor Pro
- Form (para formulário de contacto)
- Testimonial (para depoimentos)
- Nav Menu (para navegação do header)

## 📞 Informações de Contacto

- **Morada:** Via Eng. Belmiro Mendes de Azevedo nº11, 4475-401 Maia, Porto
- **Telefone:** +351 220 925 250
- **Email:** geral@msclinica.com
- **Horário:** 
  - Seg-Sex: 09:00–18:00
  - Almoço: 13:00–14:00
  - Análises: Seg-Sáb 08:00–12:00

## ⚠️ Notas Importantes

1. **Elementor Pro é necessário** para usar o Theme Builder (header/footer) e o widget Form
2. Os templates utilizam **placeholders para imagens** - substitua com imagens reais da clínica
3. **Links do mega-menu** apontam para secções da página - ajuste conforme a estrutura do seu site
4. Configure o **Google Maps** no footer substituindo o placeholder
5. Teste todos os formulários após importação para garantir que os emails são enviados corretamente

## 🆘 Suporte

Para questões sobre Elementor:
- [Documentação Oficial do Elementor](https://elementor.com/help/)
- [Comunidade Elementor](https://www.facebook.com/groups/Elementors/)

Para questões técnicas sobre o website MS Clínica:
- Contacte o desenvolvedor responsável

---

**Última atualização:** Janeiro 2024  
**Versão Elementor compatível:** 3.x+  
**Versão Elementor Pro compatível:** 3.x+

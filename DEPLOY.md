# Instruções de Deploy

## Configuração para subdiretório `/2025/`

O projeto está configurado para rodar em `https://stagebrb.regiusprev.com.br/2025/`

### Passos para deploy:

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Upload dos arquivos:**
   - Faça upload de todo o conteúdo da pasta `dist/` para o diretório `/2025/` no servidor
   - Certifique-se de que o arquivo `.htaccess` está presente na raiz do diretório `/2025/`

3. **Configuração do servidor (Apache):**
   
   O arquivo `.htaccess` já está incluído no build e deve conter:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /2025/
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /2025/index.html [L]
   </IfModule>
   ```

4. **Configuração do servidor (Nginx):**
   
   Se o servidor usar Nginx, adicione ao arquivo de configuração:
   ```nginx
   location /2025/ {
     try_files $uri $uri/ /2025/index.html;
   }
   ```

### Verificação:

Após o deploy, acesse:
- `https://stagebrb.regiusprev.com.br/2025/` - deve carregar a página inicial
- `https://stagebrb.regiusprev.com.br/2025/governanca` - deve carregar a página de governança
- Todas as rotas devem funcionar corretamente

### Troubleshooting:

**Página em branco:**
- Verifique se o `.htaccess` está presente e o `mod_rewrite` está habilitado no Apache
- Verifique o console do navegador (F12) para erros de carregamento de assets
- Confirme que todos os arquivos da pasta `dist/` foram enviados corretamente

**Erro 404 ao navegar:**
- Verifique a configuração do `.htaccess` ou Nginx
- Certifique-se de que o `RewriteBase` está correto (`/2025/`)

**Assets não carregam (CSS, JS, imagens):**
- Verifique se o `base: '/2025/'` está configurado no `vite.config.js`
- Confirme que o build foi feito após a alteração da configuração

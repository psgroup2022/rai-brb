# Checklist de Deploy - Subdiretório /rai/2025/

## ✅ Alterações já feitas no código:

1. **vite.config.js** - Configurado `base: '/rai/2025/'`
2. **src/route/route.jsx** - Configurado `basename="/rai/2025"` no BrowserRouter
3. **public/.htaccess** - Criado arquivo para Apache com regras de rewrite

## 📋 Passos para fazer o deploy:

### 1. Build do projeto
```bash
npm run build
```

### 2. Verificar a pasta dist/
Após o build, verifique se:
- Existe o arquivo `dist/index.html`
- Existe o arquivo `dist/.htaccess`
- Existem as pastas `dist/assets/` com CSS, JS e imagens

### 3. Upload para o servidor
- Faça upload de **TODO** o conteúdo da pasta `dist/` para o diretório `/rai/2025/` no servidor
- Estrutura final no servidor deve ser:
  ```
  /rai/2025/
    ├── index.html
    ├── .htaccess
    ├── assets/
    │   ├── index-[hash].js
    │   ├── index-[hash].css
    │   └── [outros arquivos]
    └── [outros arquivos e pastas]
  ```

### 4. Configuração do servidor

#### Se for Apache:
- Certifique-se de que o `mod_rewrite` está habilitado
- O arquivo `.htaccess` já está configurado corretamente

#### Se for Nginx:
Adicione ao arquivo de configuração do site:
```nginx
location /rai/2025/ {
    try_files $uri $uri/ /rai/2025/index.html;
}
```

### 5. Teste após deploy

Acesse as seguintes URLs e verifique se carregam corretamente:

- ✅ `https://stagebrb.regiusprev.com.br/rai/2025/`
- ✅ `https://stagebrb.regiusprev.com.br/rai/2025/governanca`
- ✅ `https://stagebrb.regiusprev.com.br/rai/2025/plano-bd-01`
- ✅ Navegue entre as páginas usando o menu

## 🔍 Troubleshooting

### Problema: Página em branco
**Possíveis causas:**
1. Arquivos não foram enviados corretamente
2. Caminho do servidor está errado
3. Permissões de arquivo incorretas

**Solução:**
- Abra o console do navegador (F12 → Console)
- Verifique se há erros de carregamento de arquivos
- Confirme que os arquivos CSS e JS estão sendo carregados de `/rai/2025/assets/...`

### Problema: Erro 404 ao navegar entre páginas
**Causa:** Configuração de rewrite não está funcionando

**Solução Apache:**
```bash
# Verifique se mod_rewrite está habilitado
sudo a2enmod rewrite
sudo systemctl restart apache2

# Verifique se AllowOverride está configurado
# No arquivo de configuração do site (ex: /etc/apache2/sites-available/000-default.conf)
<Directory /var/www/html/rai/2025>
    AllowOverride All
</Directory>
```

**Solução Nginx:**
Adicione a configuração de try_files mencionada acima

### Problema: CSS/JS não carregam
**Causa:** Base path incorreto

**Solução:**
- Verifique se o build foi feito APÓS alterar o `vite.config.js`
- Faça um novo build: `npm run build`
- Verifique no `dist/index.html` se os caminhos dos assets começam com `/rai/2025/`

### Problema: Imagens não carregam
**Causa:** Caminhos de imagens podem estar incorretos

**Solução:**
- Verifique se a pasta `dist/assets/` contém todas as imagens
- Confirme que as imagens foram enviadas para o servidor

## 📞 Suporte

Se após seguir todos os passos o problema persistir:

1. Envie o conteúdo do console do navegador (F12 → Console)
2. Envie o conteúdo da aba Network (F12 → Network) mostrando os arquivos que falharam ao carregar
3. Confirme qual servidor web está sendo usado (Apache/Nginx)
4. Confirme a estrutura de pastas no servidor
